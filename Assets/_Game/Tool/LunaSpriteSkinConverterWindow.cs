#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using Unity.Collections;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.U2D;
using UnityEngine.U2D.Animation;
using UnityEngine.U2D.IK;

namespace PLYAssetsTool.Editor
{
    internal sealed class LunaSpriteSkinConverterWindow : EditorWindow
    {
        private const string DefaultOutputFolder = "Assets/__SceneAssets/LunaGenerated";

        [SerializeField] private GameObject targetRoot;
        [SerializeField] private string outputFolder = DefaultOutputFolder;
        [SerializeField] private AnimationSource animationSource = AnimationSource.IkManager;
        [SerializeField] private int ikBakeFrameRate = 30;
        [SerializeField] private bool removeIkTargets = true;
        [SerializeField] private bool saveSceneAfterConversion = true;

        private Vector2 scrollPosition;
        private string status = "Ready.";
        private MessageType statusType = MessageType.None;

        [MenuItem("Tools/PLY Assets/Luna Sprite Skin Converter")]
        private static void Open()
        {
            LunaSpriteSkinConverterWindow window =
                GetWindow<LunaSpriteSkinConverterWindow>("Luna Skin Converter");
            window.minSize = new Vector2(560f, 430f);
        }

        private void OnEnable()
        {
            if (targetRoot == null)
            {
                targetRoot = Selection.activeGameObject;
            }
        }

        private void OnGUI()
        {
            scrollPosition = EditorGUILayout.BeginScrollView(scrollPosition);
            EditorGUILayout.Space();
            EditorGUILayout.LabelField("Luna Sprite Skin Converter", EditorStyles.boldLabel);
            EditorGUILayout.HelpBox(
                "Drag a Scene GameObject or prefab asset containing SpriteSkin components. " +
                "Scene objects are converted in place to preserve references. Prefab assets " +
                "are copied to a generated _Luna prefab.",
                MessageType.Info);

            targetRoot = (GameObject)EditorGUILayout.ObjectField(
                "Target Root",
                targetRoot,
                typeof(GameObject),
                true);
            outputFolder = EditorGUILayout.TextField("Output Folder", outputFolder);
            animationSource = (AnimationSource)EditorGUILayout.EnumPopup(
                "Animation Source",
                animationSource);

            if (animationSource == AnimationSource.IkManager)
            {
                ikBakeFrameRate = EditorGUILayout.IntSlider(
                    "IK Bake FPS",
                    ikBakeFrameRate,
                    15,
                    60);
                removeIkTargets = EditorGUILayout.ToggleLeft(
                    "Remove generated IK target GameObjects",
                    removeIkTargets);
                EditorGUILayout.HelpBox(
                    "Samples each Animator clip, evaluates IKManager2D, then writes the " +
                    "resulting bone transforms into generated Luna clips.",
                    MessageType.None);
            }
            else
            {
                EditorGUILayout.HelpBox(
                    "Use this when animation clips already key the SpriteSkin bones. " +
                    "The existing Animator controller and clips are preserved because " +
                    "the converted mesh keeps the same bone hierarchy and binding paths.",
                    MessageType.None);
            }

            saveSceneAfterConversion = EditorGUILayout.ToggleLeft(
                "Save scene after converting a Scene object",
                saveSceneAfterConversion);

            EditorGUILayout.Space();
            EditorGUILayout.HelpBox(status, statusType);

            using (new EditorGUI.DisabledScope(!CanConvert()))
            {
                if (GUILayout.Button("Convert Target", GUILayout.Height(34f)))
                {
                    ConvertTargetFromWindow();
                }
            }

            EditorGUILayout.EndScrollView();
        }

        private bool CanConvert()
        {
            return targetRoot != null && IsAssetsFolderPath(outputFolder);
        }

        private void ConvertTargetFromWindow()
        {
            try
            {
                ConversionResult result = ConvertTarget(
                    targetRoot,
                    outputFolder,
                    animationSource,
                    ikBakeFrameRate,
                    removeIkTargets,
                    saveSceneAfterConversion);

                SetStatus(result.BuildSummary(), MessageType.Info);
                Selection.activeObject = result.Prefab;
                EditorGUIUtility.PingObject(result.Prefab);
            }
            catch (Exception exception)
            {
                Debug.LogException(exception);
                SetStatus(exception.Message, MessageType.Error);
            }
        }

        private static ConversionResult ConvertTarget(
            GameObject selectedTarget,
            string baseOutputFolder,
            AnimationSource source,
            int bakeFrameRate,
            bool deleteIkTargets,
            bool saveScene)
        {
            string assetPath = AssetDatabase.GetAssetPath(selectedTarget);
            bool isPrefabAsset =
                !string.IsNullOrEmpty(assetPath) &&
                assetPath.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase);

            if (isPrefabAsset)
            {
                return ConvertPrefabAsset(
                    assetPath,
                    baseOutputFolder,
                    source,
                    bakeFrameRate,
                    deleteIkTargets);
            }

            if (!selectedTarget.scene.IsValid())
            {
                throw new InvalidOperationException(
                    "Target Root must be a Scene GameObject or prefab asset.");
            }

            return ConvertSceneObject(
                selectedTarget,
                baseOutputFolder,
                source,
                bakeFrameRate,
                deleteIkTargets,
                saveScene);
        }

        private static ConversionResult ConvertPrefabAsset(
            string sourcePrefabPath,
            string baseOutputFolder,
            AnimationSource source,
            int bakeFrameRate,
            bool deleteIkTargets)
        {
            GameObject prefabRoot = null;
            try
            {
                prefabRoot = PrefabUtility.LoadPrefabContents(sourcePrefabPath);
                string targetFolder = BuildTargetOutputFolder(
                    baseOutputFolder,
                    prefabRoot.name);
                ConversionResult result = ConvertHierarchy(
                    prefabRoot.transform,
                    targetFolder,
                    source,
                    bakeFrameRate,
                    deleteIkTargets);
                string prefabPath = targetFolder + "/" +
                                    MakeSafeFileName(prefabRoot.name) +
                                    "_Luna.prefab";
                GameObject prefab = PrefabUtility.SaveAsPrefabAsset(
                    prefabRoot,
                    prefabPath);
                result.SetPrefab(prefab, prefabPath);
                AssetDatabase.SaveAssets();
                AssetDatabase.Refresh();
                return result;
            }
            finally
            {
                if (prefabRoot != null)
                {
                    PrefabUtility.UnloadPrefabContents(prefabRoot);
                }
            }
        }

        private static ConversionResult ConvertSceneObject(
            GameObject sceneTarget,
            string baseOutputFolder,
            AnimationSource source,
            int bakeFrameRate,
            bool deleteIkTargets,
            bool saveScene)
        {
            string targetFolder = BuildTargetOutputFolder(
                baseOutputFolder,
                sceneTarget.name);
            ConversionResult result = ConvertHierarchy(
                sceneTarget.transform,
                targetFolder,
                source,
                bakeFrameRate,
                deleteIkTargets);
            string prefabPath = targetFolder + "/" +
                                MakeSafeFileName(sceneTarget.name) +
                                "_Luna.prefab";
            GameObject prefab = PrefabUtility.SaveAsPrefabAsset(
                sceneTarget,
                prefabPath);
            result.SetPrefab(prefab, prefabPath);

            UnityEditor.SceneManagement.EditorSceneManager.MarkSceneDirty(
                sceneTarget.scene);
            if (saveScene)
            {
                UnityEditor.SceneManagement.EditorSceneManager.SaveScene(
                    sceneTarget.scene);
            }

            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            return result;
        }

        private static ConversionResult ConvertHierarchy(
            Transform target,
            string targetFolder,
            AnimationSource source,
            int bakeFrameRate,
            bool deleteIkTargets)
        {
            SpriteSkin[] skins = target.GetComponentsInChildren<SpriteSkin>(true);
            if (skins.Length == 0)
            {
                throw new InvalidOperationException(
                    "No SpriteSkin components were found below Target Root.");
            }

            string meshFolder = targetFolder + "/Meshes";
            string materialFolder = targetFolder + "/Materials";
            string animationFolder = targetFolder + "/Animations";
            EnsureFolder(meshFolder);
            EnsureFolder(materialFolder);

            Animator animator = target.GetComponentInChildren<Animator>(true);
            int bakedClipCount = 0;
            if (source == AnimationSource.IkManager)
            {
                EnsureFolder(animationFolder);
                bakedClipCount = BakeIkAnimations(
                    target,
                    animator,
                    animationFolder,
                    bakeFrameRate);
            }

            int convertedSkinCount = ConvertSpriteSkins(
                skins,
                meshFolder,
                materialFolder,
                new Dictionary<MaterialKey, Material>());
            int removedIkTargetCount =
                source == AnimationSource.IkManager && deleteIkTargets
                ? RemoveIkTargets(target)
                : 0;
            int removedIkComponentCount = source == AnimationSource.IkManager
                ? RemoveIkComponents(target)
                : 0;

            return new ConversionResult(
                null,
                targetFolder,
                source,
                convertedSkinCount,
                bakedClipCount,
                removedIkComponentCount,
                removedIkTargetCount);
        }

        private static string BuildTargetOutputFolder(
            string baseOutputFolder,
            string targetName)
        {
            EnsureFolder(baseOutputFolder);
            string targetFolder = baseOutputFolder + "/" + MakeSafeFileName(targetName);
            EnsureFolder(targetFolder);
            return targetFolder;
        }

        private static int ConvertSpriteSkins(
            SpriteSkin[] skins,
            string meshFolder,
            string materialFolder,
            Dictionary<MaterialKey, Material> materials)
        {
            int convertedCount = 0;

            for (int i = 0; i < skins.Length; i++)
            {
                SpriteSkin skin = skins[i];
                SpriteRenderer spriteRenderer = skin.GetComponent<SpriteRenderer>();
                Sprite sprite = spriteRenderer != null ? spriteRenderer.sprite : null;
                if (spriteRenderer == null || sprite == null)
                {
                    Debug.LogWarning(
                        "[Luna Skin Converter] Skipped invalid SpriteSkin on " +
                        BuildHierarchyPath(skin.transform));
                    continue;
                }

                if (skin.rootBone == null ||
                    skin.boneTransforms == null ||
                    skin.boneTransforms.Length == 0)
                {
                    Debug.LogWarning(
                        "[Luna Skin Converter] Skipped SpriteSkin without bones on " +
                        BuildHierarchyPath(skin.transform));
                    continue;
                }

                Mesh mesh = CreateMesh(sprite, spriteRenderer.color);
                string safeName = MakeSafeFileName(
                    BuildHierarchyPath(skin.transform).Replace('/', '_'));
                string meshPath = AssetDatabase.GenerateUniqueAssetPath(
                    meshFolder + "/" + safeName + ".asset");
                AssetDatabase.CreateAsset(mesh, meshPath);

                Material material = GetOrCreateMaterial(
                    sprite,
                    spriteRenderer.color,
                    spriteRenderer.sharedMaterial,
                    materialFolder,
                    materials);

                SkinnedMeshRenderer meshRenderer =
                    skin.gameObject.AddComponent<SkinnedMeshRenderer>();
                meshRenderer.sharedMesh = mesh;
                meshRenderer.sharedMaterial = material;
                meshRenderer.bones = skin.boneTransforms;
                meshRenderer.rootBone = skin.rootBone;
                meshRenderer.localBounds = ExpandBounds(sprite.bounds);
                meshRenderer.updateWhenOffscreen = true;
                meshRenderer.enabled = spriteRenderer.enabled;
                meshRenderer.sortingLayerID = spriteRenderer.sortingLayerID;
                meshRenderer.sortingOrder = spriteRenderer.sortingOrder;
                meshRenderer.shadowCastingMode = ShadowCastingMode.Off;
                meshRenderer.receiveShadows = false;
                meshRenderer.lightProbeUsage = LightProbeUsage.Off;
                meshRenderer.reflectionProbeUsage = ReflectionProbeUsage.Off;

                DestroyImmediate(skin);
                DestroyImmediate(spriteRenderer);
                convertedCount++;
            }

            return convertedCount;
        }

        private static Mesh CreateMesh(Sprite sprite, Color color)
        {
            NativeSlice<Vector3> sourceVertices =
                sprite.GetVertexAttribute<Vector3>(VertexAttribute.Position);
            NativeSlice<Vector2> sourceUvs =
                sprite.GetVertexAttribute<Vector2>(VertexAttribute.TexCoord0);
            NativeSlice<BoneWeight> sourceWeights =
                sprite.GetVertexAttribute<BoneWeight>(VertexAttribute.BlendWeight);
            NativeArray<ushort> sourceIndices = sprite.GetIndices();
            NativeArray<Matrix4x4> sourceBindPoses = sprite.GetBindPoses();

            int vertexCount = sourceVertices.Length;
            Vector3[] vertices = new Vector3[vertexCount];
            Vector2[] uvs = new Vector2[vertexCount];
            BoneWeight[] weights = new BoneWeight[vertexCount];
            Color[] colors = new Color[vertexCount];
            int[] triangles = new int[sourceIndices.Length];
            Matrix4x4[] bindPoses = new Matrix4x4[sourceBindPoses.Length];

            for (int i = 0; i < vertexCount; i++)
            {
                vertices[i] = sourceVertices[i];
                uvs[i] = sourceUvs[i];
                weights[i] = sourceWeights[i];
                colors[i] = color;
            }

            for (int i = 0; i < sourceIndices.Length; i++)
            {
                triangles[i] = sourceIndices[i];
            }

            for (int i = 0; i < sourceBindPoses.Length; i++)
            {
                bindPoses[i] = sourceBindPoses[i];
            }

            Mesh mesh = new Mesh
            {
                name = sprite.name + "_LunaMesh",
                vertices = vertices,
                uv = uvs,
                colors = colors,
                boneWeights = weights,
                bindposes = bindPoses,
                triangles = triangles,
                bounds = ExpandBounds(sprite.bounds)
            };
            mesh.UploadMeshData(false);
            return mesh;
        }

        private static Material GetOrCreateMaterial(
            Sprite sprite,
            Color color,
            Material sourceMaterial,
            string materialFolder,
            Dictionary<MaterialKey, Material> materials)
        {
            MaterialKey key = new MaterialKey(sprite.texture, color, sourceMaterial);
            Material material;
            if (materials.TryGetValue(key, out material))
            {
                return material;
            }

            if (sourceMaterial == null)
            {
                sourceMaterial =
                    AssetDatabase.GetBuiltinExtraResource<Material>("Sprites-Default.mat");
            }

            if (sourceMaterial == null)
            {
                throw new InvalidOperationException(
                    "The SpriteRenderer has no material and Sprites-Default.mat was unavailable.");
            }

            material = new Material(sourceMaterial)
            {
                name = sprite.texture.name + "_LunaSprite",
                mainTexture = sprite.texture,
                color = Color.white
            };

            string materialPath = AssetDatabase.GenerateUniqueAssetPath(
                materialFolder + "/" + MakeSafeFileName(material.name) + ".mat");
            AssetDatabase.CreateAsset(material, materialPath);
            materials.Add(key, material);
            return material;
        }

        private static int BakeIkAnimations(
            Transform target,
            Animator animator,
            string animationFolder,
            int frameRate)
        {
            IKManager2D[] managers = target.GetComponentsInChildren<IKManager2D>(true);
            if (managers.Length == 0 || animator == null || animator.runtimeAnimatorController == null)
            {
                return 0;
            }

            AnimationClip[] sourceClips = animator.runtimeAnimatorController.animationClips;
            List<AnimationClip> uniqueClips = GetUniqueClips(sourceClips);
            if (uniqueClips.Count == 0)
            {
                return 0;
            }

            List<Transform> bones = CollectSkinBones(target);
            Dictionary<AnimationClip, AnimationClip> overrides =
                new Dictionary<AnimationClip, AnimationClip>();

            for (int i = 0; i < uniqueClips.Count; i++)
            {
                AnimationClip sourceClip = uniqueClips[i];
                AnimationClip bakedClip = BakeClip(
                    animator,
                    managers,
                    bones,
                    sourceClip,
                    frameRate);
                string clipPath = AssetDatabase.GenerateUniqueAssetPath(
                    animationFolder + "/" +
                    MakeSafeFileName(sourceClip.name) +
                    "_Luna.asset");
                AssetDatabase.CreateAsset(bakedClip, clipPath);
                overrides.Add(sourceClip, bakedClip);
            }

            AnimatorOverrideController overrideController =
                new AnimatorOverrideController(animator.runtimeAnimatorController)
                {
                    name = animator.runtimeAnimatorController.name + "_Luna"
                };
            List<KeyValuePair<AnimationClip, AnimationClip>> overridePairs =
                new List<KeyValuePair<AnimationClip, AnimationClip>>();

            foreach (KeyValuePair<AnimationClip, AnimationClip> pair in overrides)
            {
                overridePairs.Add(pair);
            }

            overrideController.ApplyOverrides(overridePairs);
            string controllerPath = AssetDatabase.GenerateUniqueAssetPath(
                animationFolder + "/" +
                MakeSafeFileName(overrideController.name) +
                ".overrideController");
            AssetDatabase.CreateAsset(overrideController, controllerPath);
            animator.runtimeAnimatorController = overrideController;
            EditorUtility.SetDirty(animator);
            return overrides.Count;
        }

        private static AnimationClip BakeClip(
            Animator animator,
            IKManager2D[] managers,
            List<Transform> bones,
            AnimationClip sourceClip,
            int frameRate)
        {
            AnimationClip bakedClip = Instantiate(sourceClip);
            bakedClip.name = sourceClip.name + "_Luna";
            bakedClip.frameRate = frameRate;

            TransformSnapshot[] snapshots = CaptureSnapshots(bones);
            Dictionary<Transform, BoneCurveSet> curves =
                CreateBoneCurves(animator.transform, bones);
            int sampleCount = Mathf.Max(1, Mathf.CeilToInt(sourceClip.length * frameRate));

            AnimationMode.StartAnimationMode();
            try
            {
                for (int sampleIndex = 0; sampleIndex <= sampleCount; sampleIndex++)
                {
                    float time = Mathf.Min(
                        sourceClip.length,
                        (float)sampleIndex / frameRate);
                    AnimationMode.SampleAnimationClip(
                        animator.gameObject,
                        sourceClip,
                        time);

                    for (int managerIndex = 0; managerIndex < managers.Length; managerIndex++)
                    {
                        IKManager2D manager = managers[managerIndex];
                        if (manager != null && manager.isActiveAndEnabled)
                        {
                            manager.UpdateManager();
                        }
                    }

                    for (int boneIndex = 0; boneIndex < bones.Count; boneIndex++)
                    {
                        curves[bones[boneIndex]].AddKey(time, bones[boneIndex]);
                    }
                }
            }
            finally
            {
                AnimationMode.StopAnimationMode();
                RestoreSnapshots(snapshots);
            }

            foreach (KeyValuePair<Transform, BoneCurveSet> pair in curves)
            {
                RemoveTransformCurves(bakedClip, pair.Value.Path);
                pair.Value.ApplyTo(bakedClip);
            }

            return bakedClip;
        }

        private static Dictionary<Transform, BoneCurveSet> CreateBoneCurves(
            Transform animatorRoot,
            List<Transform> bones)
        {
            Dictionary<Transform, BoneCurveSet> curves =
                new Dictionary<Transform, BoneCurveSet>();

            for (int i = 0; i < bones.Count; i++)
            {
                string path = AnimationUtility.CalculateTransformPath(
                    bones[i],
                    animatorRoot);
                curves.Add(bones[i], new BoneCurveSet(path));
            }

            return curves;
        }

        private static void RemoveTransformCurves(AnimationClip clip, string path)
        {
            EditorCurveBinding[] bindings = AnimationUtility.GetCurveBindings(clip);
            for (int i = 0; i < bindings.Length; i++)
            {
                EditorCurveBinding binding = bindings[i];
                if (binding.path == path && binding.type == typeof(Transform))
                {
                    AnimationUtility.SetEditorCurve(clip, binding, null);
                }
            }
        }

        private static List<Transform> CollectSkinBones(Transform target)
        {
            SpriteSkin[] skins = target.GetComponentsInChildren<SpriteSkin>(true);
            List<Transform> bones = new List<Transform>();
            HashSet<int> ids = new HashSet<int>();

            for (int skinIndex = 0; skinIndex < skins.Length; skinIndex++)
            {
                Transform[] skinBones = skins[skinIndex].boneTransforms;
                for (int boneIndex = 0; boneIndex < skinBones.Length; boneIndex++)
                {
                    Transform bone = skinBones[boneIndex];
                    if (bone != null && ids.Add(bone.GetInstanceID()))
                    {
                        bones.Add(bone);
                    }
                }
            }

            return bones;
        }

        private static List<AnimationClip> GetUniqueClips(AnimationClip[] clips)
        {
            List<AnimationClip> unique = new List<AnimationClip>();
            HashSet<int> ids = new HashSet<int>();

            for (int i = 0; i < clips.Length; i++)
            {
                AnimationClip clip = clips[i];
                if (clip != null && ids.Add(clip.GetInstanceID()))
                {
                    unique.Add(clip);
                }
            }

            return unique;
        }

        private static int RemoveIkComponents(Transform target)
        {
            int removedCount = 0;
            Solver2D[] solvers = target.GetComponentsInChildren<Solver2D>(true);
            for (int i = 0; i < solvers.Length; i++)
            {
                DestroyImmediate(solvers[i]);
                removedCount++;
            }

            IKManager2D[] managers = target.GetComponentsInChildren<IKManager2D>(true);
            for (int i = 0; i < managers.Length; i++)
            {
                DestroyImmediate(managers[i]);
                removedCount++;
            }

            return removedCount;
        }

        private static int RemoveIkTargets(Transform target)
        {
            List<GameObject> targets = new List<GameObject>();
            HashSet<int> targetIds = new HashSet<int>();
            Solver2D[] solvers = target.GetComponentsInChildren<Solver2D>(true);

            for (int solverIndex = 0; solverIndex < solvers.Length; solverIndex++)
            {
                Solver2D solver = solvers[solverIndex];
                for (int chainIndex = 0; chainIndex < solver.chainCount; chainIndex++)
                {
                    IKChain2D chain = solver.GetChain(chainIndex);
                    Transform ikTarget = chain != null ? chain.target : null;
                    if (ikTarget != null &&
                        ikTarget != target &&
                        ikTarget.IsChildOf(target) &&
                        targetIds.Add(ikTarget.GetInstanceID()))
                    {
                        targets.Add(ikTarget.gameObject);
                    }
                }
            }

            for (int i = 0; i < targets.Count; i++)
            {
                DestroyImmediate(targets[i]);
            }

            return targets.Count;
        }

        private static TransformSnapshot[] CaptureSnapshots(List<Transform> transforms)
        {
            TransformSnapshot[] snapshots = new TransformSnapshot[transforms.Count];
            for (int i = 0; i < transforms.Count; i++)
            {
                snapshots[i] = new TransformSnapshot(transforms[i]);
            }

            return snapshots;
        }

        private static void RestoreSnapshots(TransformSnapshot[] snapshots)
        {
            for (int i = 0; i < snapshots.Length; i++)
            {
                snapshots[i].Restore();
            }
        }

        private static Bounds ExpandBounds(Bounds source)
        {
            Bounds bounds = source;
            bounds.Expand(new Vector3(1f, 1f, 2f));
            return bounds;
        }

        private static void EnsureFolder(string folderPath)
        {
            if (!IsAssetsFolderPath(folderPath))
            {
                throw new InvalidOperationException(
                    "Output folder must be below Assets: " + folderPath);
            }

            string[] parts = folderPath.Split('/');
            string current = parts[0];
            for (int i = 1; i < parts.Length; i++)
            {
                string next = current + "/" + parts[i];
                if (!AssetDatabase.IsValidFolder(next))
                {
                    AssetDatabase.CreateFolder(current, parts[i]);
                }

                current = next;
            }
        }

        private static bool IsAssetsFolderPath(string path)
        {
            return !string.IsNullOrEmpty(path) &&
                   (path == "Assets" ||
                    path.StartsWith("Assets/", StringComparison.Ordinal));
        }

        private static string BuildHierarchyPath(Transform transform)
        {
            List<string> names = new List<string>();
            Transform current = transform;
            while (current != null)
            {
                names.Add(current.name);
                current = current.parent;
            }

            names.Reverse();
            return string.Join("/", names.ToArray());
        }

        private static string MakeSafeFileName(string value)
        {
            char[] invalidCharacters = Path.GetInvalidFileNameChars();
            for (int i = 0; i < invalidCharacters.Length; i++)
            {
                value = value.Replace(invalidCharacters[i], '_');
            }

            return value;
        }

        private void SetStatus(string message, MessageType type)
        {
            status = message;
            statusType = type;
            Repaint();
        }

        private enum AnimationSource
        {
            [InspectorName("IK Manager (Bake)")]
            IkManager,
            [InspectorName("Animator Bone Curves (Keep)")]
            AnimatorBoneCurves
        }

        private readonly struct MaterialKey : IEquatable<MaterialKey>
        {
            private readonly Texture texture;
            private readonly Color32 color;
            private readonly Material sourceMaterial;

            internal MaterialKey(Texture texture, Color color, Material sourceMaterial)
            {
                this.texture = texture;
                this.color = color;
                this.sourceMaterial = sourceMaterial;
            }

            public bool Equals(MaterialKey other)
            {
                return texture == other.texture &&
                       color.r == other.color.r &&
                       color.g == other.color.g &&
                       color.b == other.color.b &&
                       color.a == other.color.a &&
                       sourceMaterial == other.sourceMaterial;
            }

            public override bool Equals(object obj)
            {
                return obj is MaterialKey && Equals((MaterialKey)obj);
            }

            public override int GetHashCode()
            {
                unchecked
                {
                    return ((texture != null ? texture.GetInstanceID() : 0) * 397) ^
                           color.GetHashCode() ^
                           (sourceMaterial != null ? sourceMaterial.GetInstanceID() : 0);
                }
            }
        }

        private readonly struct TransformSnapshot
        {
            private readonly Transform transform;
            private readonly Vector3 localPosition;
            private readonly Quaternion localRotation;
            private readonly Vector3 localScale;

            internal TransformSnapshot(Transform transform)
            {
                this.transform = transform;
                localPosition = transform.localPosition;
                localRotation = transform.localRotation;
                localScale = transform.localScale;
            }

            internal void Restore()
            {
                if (transform == null)
                {
                    return;
                }

                transform.localPosition = localPosition;
                transform.localRotation = localRotation;
                transform.localScale = localScale;
            }
        }

        private sealed class BoneCurveSet
        {
            internal readonly string Path;

            private readonly AnimationCurve positionX = new AnimationCurve();
            private readonly AnimationCurve positionY = new AnimationCurve();
            private readonly AnimationCurve positionZ = new AnimationCurve();
            private readonly AnimationCurve rotationX = new AnimationCurve();
            private readonly AnimationCurve rotationY = new AnimationCurve();
            private readonly AnimationCurve rotationZ = new AnimationCurve();
            private readonly AnimationCurve rotationW = new AnimationCurve();
            private readonly AnimationCurve scaleX = new AnimationCurve();
            private readonly AnimationCurve scaleY = new AnimationCurve();
            private readonly AnimationCurve scaleZ = new AnimationCurve();
            private Quaternion previousRotation;
            private bool hasPreviousRotation;

            internal BoneCurveSet(string path)
            {
                Path = path;
            }

            internal void AddKey(float time, Transform transform)
            {
                Vector3 position = transform.localPosition;
                Quaternion rotation = transform.localRotation;
                Vector3 scale = transform.localScale;

                if (hasPreviousRotation && Quaternion.Dot(previousRotation, rotation) < 0f)
                {
                    rotation = new Quaternion(
                        -rotation.x,
                        -rotation.y,
                        -rotation.z,
                        -rotation.w);
                }

                previousRotation = rotation;
                hasPreviousRotation = true;

                AddLinearKey(positionX, time, position.x);
                AddLinearKey(positionY, time, position.y);
                AddLinearKey(positionZ, time, position.z);
                AddLinearKey(rotationX, time, rotation.x);
                AddLinearKey(rotationY, time, rotation.y);
                AddLinearKey(rotationZ, time, rotation.z);
                AddLinearKey(rotationW, time, rotation.w);
                AddLinearKey(scaleX, time, scale.x);
                AddLinearKey(scaleY, time, scale.y);
                AddLinearKey(scaleZ, time, scale.z);
            }

            internal void ApplyTo(AnimationClip clip)
            {
                SetCurve(clip, "m_LocalPosition.x", positionX);
                SetCurve(clip, "m_LocalPosition.y", positionY);
                SetCurve(clip, "m_LocalPosition.z", positionZ);
                SetCurve(clip, "m_LocalRotation.x", rotationX);
                SetCurve(clip, "m_LocalRotation.y", rotationY);
                SetCurve(clip, "m_LocalRotation.z", rotationZ);
                SetCurve(clip, "m_LocalRotation.w", rotationW);
                SetCurve(clip, "m_LocalScale.x", scaleX);
                SetCurve(clip, "m_LocalScale.y", scaleY);
                SetCurve(clip, "m_LocalScale.z", scaleZ);
            }

            private void SetCurve(
                AnimationClip clip,
                string propertyName,
                AnimationCurve curve)
            {
                AnimationUtility.SetEditorCurve(
                    clip,
                    EditorCurveBinding.FloatCurve(
                        Path,
                        typeof(Transform),
                        propertyName),
                    curve);
            }

            private static void AddLinearKey(
                AnimationCurve curve,
                float time,
                float value)
            {
                int index = curve.AddKey(time, value);
                AnimationUtility.SetKeyLeftTangentMode(
                    curve,
                    index,
                    AnimationUtility.TangentMode.Linear);
                AnimationUtility.SetKeyRightTangentMode(
                    curve,
                    index,
                    AnimationUtility.TangentMode.Linear);
            }
        }

        private sealed class ConversionResult
        {
            internal GameObject Prefab;
            private string prefabPath;
            private readonly AnimationSource animationSource;
            private readonly int convertedSkinCount;
            private readonly int bakedClipCount;
            private readonly int removedIkComponentCount;
            private readonly int removedIkTargetCount;

            internal ConversionResult(
                GameObject prefab,
                string prefabPath,
                AnimationSource animationSource,
                int convertedSkinCount,
                int bakedClipCount,
                int removedIkComponentCount,
                int removedIkTargetCount)
            {
                Prefab = prefab;
                this.prefabPath = prefabPath;
                this.animationSource = animationSource;
                this.convertedSkinCount = convertedSkinCount;
                this.bakedClipCount = bakedClipCount;
                this.removedIkComponentCount = removedIkComponentCount;
                this.removedIkTargetCount = removedIkTargetCount;
            }

            internal void SetPrefab(GameObject prefab, string path)
            {
                Prefab = prefab;
                prefabPath = path;
            }

            internal string BuildSummary()
            {
                return "Generated: " + prefabPath +
                       "\nSpriteSkin converted: " + convertedSkinCount +
                       "\nAnimation source: " + GetAnimationSourceLabel() +
                       "\nAnimation clips baked: " + bakedClipCount +
                       "\nIK components removed: " + removedIkComponentCount +
                       "\nIK targets removed: " + removedIkTargetCount;
            }

            private string GetAnimationSourceLabel()
            {
                return animationSource == AnimationSource.IkManager
                    ? "IK Manager (Bake)"
                    : "Animator Bone Curves (Preserved)";
            }
        }
    }
}
#endif
