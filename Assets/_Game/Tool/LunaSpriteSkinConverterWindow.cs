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
        private const int LayerRepairNameMaxLength = 32;
        private const float LayerRepairNameWidth = 190f;
        private const float LayerRepairLayerWidth = 110f;
        private const float LayerRepairValueWidth = 54f;

        [SerializeField] private GameObject targetRoot;
        [SerializeField] private string outputFolder = DefaultOutputFolder;
        [SerializeField] private AnimationSource animationSource = AnimationSource.IkManager;
        [SerializeField] private int ikBakeFrameRate = 30;
        [SerializeField] private bool removeIkTargets = true;
        [SerializeField] private bool saveSceneAfterConversion = true;
        [SerializeField] private GameObject layerRepairTarget;

        private Vector2 scrollPosition;
        private readonly List<LayerRepairEntry> layerRepairEntries =
            new List<LayerRepairEntry>();
        private GameObject activeLayerRepairTarget;
        private bool hasUnsavedLayerChanges;
        private string status = "Ready.";
        private MessageType statusType = MessageType.None;
        private string layerRepairStatus =
            "Assign a converted object to edit its layer order and Z.";
        private MessageType layerRepairStatusType = MessageType.None;

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

            if (layerRepairTarget != null)
            {
                SetLayerRepairTarget(layerRepairTarget);
            }
        }

        private void OnDisable()
        {
            RestoreLayerRepairSnapshot();
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

            DrawLayerRepair();
            EditorGUILayout.EndScrollView();
        }

        private void DrawLayerRepair()
        {
            EditorGUILayout.Space(12f);
            EditorGUILayout.LabelField("Repair Layer Index", EditorStyles.boldLabel);
            EditorGUILayout.HelpBox(
                "Assign a converted Scene object or prefab asset. Edit Sorting Layer and " +
                "Order in Layer or local Z to preview changes immediately. Save keeps the " +
                "values; Back restores the values captured when the object was assigned.",
                MessageType.Info);

            EditorGUI.BeginChangeCheck();
            GameObject newTarget = (GameObject)EditorGUILayout.ObjectField(
                "Converted Object",
                layerRepairTarget,
                typeof(GameObject),
                true);
            if (EditorGUI.EndChangeCheck())
            {
                RestoreLayerRepairSnapshot();
                layerRepairTarget = newTarget;
                SetLayerRepairTarget(newTarget);
            }

            if (activeLayerRepairTarget == null)
            {
                EditorGUILayout.HelpBox(layerRepairStatus, layerRepairStatusType);
                return;
            }

            EditorGUILayout.Space();
            EditorGUILayout.LabelField(
                "Skinned Mesh Renderers (" + layerRepairEntries.Count + ")",
                EditorStyles.boldLabel);

            DrawLayerRepairHeader();
            for (int i = 0; i < layerRepairEntries.Count; i++)
            {
                DrawLayerRepairEntry(i, layerRepairEntries[i]);
            }

            EditorGUILayout.Space();
            EditorGUILayout.HelpBox(layerRepairStatus, layerRepairStatusType);

            using (new EditorGUILayout.HorizontalScope())
            {
                using (new EditorGUI.DisabledScope(!hasUnsavedLayerChanges))
                {
                    if (GUILayout.Button("Back", GUILayout.Height(30f)))
                    {
                        RestoreLayerRepairSnapshot();
                        SetLayerRepairTarget(layerRepairTarget);
                    }

                    if (GUILayout.Button("Save Layer & Z", GUILayout.Height(30f)))
                    {
                        SaveLayerRepair();
                    }
                }
            }
        }

        private static void DrawLayerRepairHeader()
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                GUILayout.Space(28f);
                EditorGUILayout.LabelField(
                    "Name",
                    EditorStyles.miniBoldLabel,
                    GUILayout.Width(LayerRepairNameWidth));
                EditorGUILayout.LabelField(
                    "Layer",
                    EditorStyles.miniBoldLabel,
                    GUILayout.Width(LayerRepairLayerWidth));
                EditorGUILayout.LabelField(
                    "Order",
                    EditorStyles.miniBoldLabel,
                    GUILayout.Width(LayerRepairValueWidth));
                EditorGUILayout.LabelField(
                    "Z",
                    EditorStyles.miniBoldLabel,
                    GUILayout.Width(LayerRepairValueWidth));
            }
        }

        private void DrawLayerRepairEntry(int index, LayerRepairEntry entry)
        {
            if (entry.Renderer == null)
            {
                return;
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField(
                    index.ToString(),
                    GUILayout.Width(24f));
                EditorGUILayout.LabelField(
                    new GUIContent(
                        TruncateWithEllipsis(
                            entry.Path,
                            LayerRepairNameMaxLength),
                        entry.Path),
                    GUILayout.Width(LayerRepairNameWidth));

                SortingLayer[] sortingLayers = SortingLayer.layers;
                string[] sortingLayerNames = GetSortingLayerNames(sortingLayers);
                int currentLayerIndex = FindSortingLayerIndex(
                    sortingLayers,
                    entry.Renderer.sortingLayerID);

                EditorGUI.BeginChangeCheck();
                int newLayerIndex = EditorGUILayout.Popup(
                    currentLayerIndex,
                    sortingLayerNames,
                    GUILayout.Width(LayerRepairLayerWidth));
                int newOrder = EditorGUILayout.IntField(
                    entry.Renderer.sortingOrder,
                    GUILayout.Width(LayerRepairValueWidth));
                float newLocalZ = EditorGUILayout.FloatField(
                    entry.Renderer.transform.localPosition.z,
                    GUILayout.Width(LayerRepairValueWidth));
                if (EditorGUI.EndChangeCheck())
                {
                    int newLayerId = sortingLayers.Length > 0
                        ? sortingLayers[Mathf.Clamp(
                            newLayerIndex,
                            0,
                            sortingLayers.Length - 1)].id
                        : entry.Renderer.sortingLayerID;
                    SetRendererLayerValues(
                        entry.Renderer,
                        newLayerId,
                        newOrder,
                        newLocalZ);
                }
            }
        }

        private void SetLayerRepairTarget(GameObject newTarget)
        {
            layerRepairEntries.Clear();
            activeLayerRepairTarget = null;
            hasUnsavedLayerChanges = false;

            if (newTarget == null)
            {
                layerRepairStatus =
                    "Assign a converted object to edit its layer order and Z.";
                layerRepairStatusType = MessageType.None;
                return;
            }

            SkinnedMeshRenderer[] renderers =
                newTarget.GetComponentsInChildren<SkinnedMeshRenderer>(true);
            if (renderers.Length == 0)
            {
                layerRepairStatus =
                    "No SkinnedMeshRenderer components were found below this object.";
                layerRepairStatusType = MessageType.Warning;
                return;
            }

            activeLayerRepairTarget = newTarget;
            for (int i = 0; i < renderers.Length; i++)
            {
                SkinnedMeshRenderer renderer = renderers[i];
                layerRepairEntries.Add(new LayerRepairEntry(
                    renderer,
                    BuildRelativeHierarchyPath(renderer.transform, newTarget.transform),
                    renderer.sortingLayerID,
                    renderer.sortingOrder,
                    renderer.transform.localPosition.z));
            }

            layerRepairStatus =
                "Loaded " + renderers.Length +
                " renderer(s). Layer order and Z changes preview immediately.";
            layerRepairStatusType = MessageType.Info;
        }

        private void SetRendererLayerValues(
            SkinnedMeshRenderer renderer,
            int sortingLayerId,
            int sortingOrder,
            float localZ)
        {
            if (renderer.sortingLayerID == sortingLayerId &&
                renderer.sortingOrder == sortingOrder &&
                Mathf.Approximately(renderer.transform.localPosition.z, localZ))
            {
                return;
            }

            renderer.sortingLayerID = sortingLayerId;
            renderer.sortingOrder = sortingOrder;
            Transform rendererTransform = renderer.transform;
            Vector3 localPosition = rendererTransform.localPosition;
            localPosition.z = localZ;
            rendererTransform.localPosition = localPosition;
            MarkLayerRendererChanged(renderer);
            MarkLayerTransformChanged(rendererTransform);
            hasUnsavedLayerChanges = true;
            layerRepairStatus = "Preview has unsaved layer or Z changes.";
            layerRepairStatusType = MessageType.Warning;
            SceneView.RepaintAll();
        }

        private void SaveLayerRepair()
        {
            if (activeLayerRepairTarget == null || !hasUnsavedLayerChanges)
            {
                return;
            }

            string assetPath = AssetDatabase.GetAssetPath(activeLayerRepairTarget);
            bool isPrefabAsset =
                !string.IsNullOrEmpty(assetPath) &&
                assetPath.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase);

            if (isPrefabAsset)
            {
                PrefabUtility.SavePrefabAsset(activeLayerRepairTarget);
                AssetDatabase.SaveAssets();
            }
            else if (activeLayerRepairTarget.scene.IsValid())
            {
                UnityEditor.SceneManagement.EditorSceneManager.MarkSceneDirty(
                    activeLayerRepairTarget.scene);
                UnityEditor.SceneManagement.EditorSceneManager.SaveScene(
                    activeLayerRepairTarget.scene);
            }

            CaptureCurrentLayerRepairValues();
            hasUnsavedLayerChanges = false;
            layerRepairStatus = isPrefabAsset
                ? "Saved layer order and Z to prefab."
                : "Saved layer order and Z to scene.";
            layerRepairStatusType = MessageType.Info;
        }

        private void RestoreLayerRepairSnapshot()
        {
            if (!hasUnsavedLayerChanges)
            {
                return;
            }

            for (int i = 0; i < layerRepairEntries.Count; i++)
            {
                LayerRepairEntry entry = layerRepairEntries[i];
                if (entry.Renderer == null)
                {
                    continue;
                }

                entry.Renderer.sortingLayerID =
                    entry.OriginalSortingLayerId;
                entry.Renderer.sortingOrder =
                    entry.OriginalSortingOrder;
                Transform rendererTransform = entry.Renderer.transform;
                Vector3 localPosition = rendererTransform.localPosition;
                localPosition.z = entry.OriginalLocalZ;
                rendererTransform.localPosition = localPosition;
                MarkLayerRendererChanged(entry.Renderer);
                MarkLayerTransformChanged(rendererTransform);
            }

            hasUnsavedLayerChanges = false;
            layerRepairStatus = "Restored the original layer order and Z.";
            layerRepairStatusType = MessageType.Info;
            SceneView.RepaintAll();
        }

        private void CaptureCurrentLayerRepairValues()
        {
            for (int i = 0; i < layerRepairEntries.Count; i++)
            {
                LayerRepairEntry entry = layerRepairEntries[i];
                if (entry.Renderer != null)
                {
                    entry.OriginalSortingLayerId =
                        entry.Renderer.sortingLayerID;
                    entry.OriginalSortingOrder = entry.Renderer.sortingOrder;
                    entry.OriginalLocalZ =
                        entry.Renderer.transform.localPosition.z;
                }
            }
        }

        private static string[] GetSortingLayerNames(
            SortingLayer[] sortingLayers)
        {
            string[] names = new string[sortingLayers.Length];
            for (int i = 0; i < sortingLayers.Length; i++)
            {
                names[i] = sortingLayers[i].name;
            }

            return names;
        }

        private static int FindSortingLayerIndex(
            SortingLayer[] sortingLayers,
            int sortingLayerId)
        {
            for (int i = 0; i < sortingLayers.Length; i++)
            {
                if (sortingLayers[i].id == sortingLayerId)
                {
                    return i;
                }
            }

            return 0;
        }

        private static void MarkLayerRendererChanged(
            SkinnedMeshRenderer renderer)
        {
            EditorUtility.SetDirty(renderer);
            if (PrefabUtility.IsPartOfPrefabInstance(renderer))
            {
                PrefabUtility.RecordPrefabInstancePropertyModifications(
                    renderer);
            }
        }

        private static void MarkLayerTransformChanged(Transform transform)
        {
            EditorUtility.SetDirty(transform);
            if (PrefabUtility.IsPartOfPrefabInstance(transform))
            {
                PrefabUtility.RecordPrefabInstancePropertyModifications(
                    transform);
            }
        }

        private static string TruncateWithEllipsis(string value, int maxLength)
        {
            if (string.IsNullOrEmpty(value) || value.Length <= maxLength)
            {
                return value;
            }

            return value.Substring(0, maxLength - 3) + "...";
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

                Mesh mesh;
                try
                {
                    mesh = CreateMesh(skin, sprite, spriteRenderer.color);
                }
                catch (Exception exception)
                {
                    throw new InvalidOperationException(
                        "[Luna Skin Converter] Failed to convert SpriteSkin " +
                        (i + 1) + "/" + skins.Length + ". " +
                        BuildSpriteSkinDiagnostic(skin, sprite),
                        exception);
                }

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

        private static Mesh CreateMesh(
            SpriteSkin skin,
            Sprite sprite,
            Color color)
        {
            string readPhase = "Position";
            try
            {
                NativeSlice<Vector3> sourceVertices =
                    sprite.GetVertexAttribute<Vector3>(VertexAttribute.Position);
                Vector3[] vertices = CopyNativeSlice(sourceVertices);

                readPhase = "TexCoord0";
                NativeSlice<Vector2> sourceUvs =
                    sprite.GetVertexAttribute<Vector2>(VertexAttribute.TexCoord0);
                Vector2[] uvs = CopyNativeSlice(sourceUvs);

                readPhase = "BlendWeight";
                NativeSlice<BoneWeight> sourceWeights =
                    sprite.GetVertexAttribute<BoneWeight>(
                        VertexAttribute.BlendWeight);
                BoneWeight[] weights = CopyNativeSlice(sourceWeights);

                readPhase = "VertexDataValidation";
                ValidateVertexData(skin, vertices, uvs, weights);

                readPhase = "Indices";
                NativeArray<ushort> sourceIndices = sprite.GetIndices();
                int[] triangles = CopyIndices(sourceIndices);

                readPhase = "BindPoses";
                NativeArray<Matrix4x4> sourceBindPoses = sprite.GetBindPoses();
                Matrix4x4[] bindPoseData = CopyNativeArray(sourceBindPoses);

                readPhase = "BindPoseBuild";
                Matrix4x4[] bindPoses = BuildBindPoses(
                    skin,
                    sprite,
                    bindPoseData);

                Color[] colors = new Color[vertices.Length];
                for (int i = 0; i < colors.Length; i++)
                {
                    colors[i] = color;
                }

                readPhase = "MeshCreation";
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
            catch (Exception exception)
            {
                throw new InvalidOperationException(
                    "[Luna Skin Converter] Sprite mesh read failed during " +
                    readPhase + ". " + BuildSpriteSkinDiagnostic(skin, sprite),
                    exception);
            }
        }

        private static T[] CopyNativeSlice<T>(NativeSlice<T> source)
            where T : struct
        {
            T[] copy = new T[source.Length];
            for (int i = 0; i < source.Length; i++)
            {
                copy[i] = source[i];
            }

            return copy;
        }

        private static T[] CopyNativeArray<T>(NativeArray<T> source)
            where T : struct
        {
            T[] copy = new T[source.Length];
            for (int i = 0; i < source.Length; i++)
            {
                copy[i] = source[i];
            }

            return copy;
        }

        private static int[] CopyIndices(NativeArray<ushort> source)
        {
            int[] copy = new int[source.Length];
            for (int i = 0; i < source.Length; i++)
            {
                copy[i] = source[i];
            }

            return copy;
        }

        private static void ValidateVertexData(
            SpriteSkin skin,
            Vector3[] vertices,
            Vector2[] uvs,
            BoneWeight[] weights)
        {
            if (uvs.Length == vertices.Length &&
                weights.Length == vertices.Length)
            {
                return;
            }

            throw new InvalidOperationException(
                "Sprite vertex attribute counts do not match on " +
                BuildHierarchyPath(skin.transform) +
                ". Positions: " + vertices.Length +
                ", UVs: " + uvs.Length +
                ", bone weights: " + weights.Length + ".");
        }

        private static Matrix4x4[] BuildBindPoses(
            SpriteSkin skin,
            Sprite sprite,
            Matrix4x4[] sourceBindPoses)
        {
            int boneCount = skin.boneTransforms.Length;
            if (sourceBindPoses.Length == boneCount)
            {
                Matrix4x4[] bindPoses = new Matrix4x4[boneCount];
                for (int i = 0; i < boneCount; i++)
                {
                    bindPoses[i] = sourceBindPoses[i];
                }

                return bindPoses;
            }

            SpriteBone[] spriteBones = sprite.GetBones();
            if (spriteBones.Length != boneCount)
            {
                throw new InvalidOperationException(
                    "Cannot build bindposes for " +
                    BuildHierarchyPath(skin.transform) +
                    ". Sprite bones: " + spriteBones.Length +
                    ", SpriteSkin bones: " + boneCount +
                    ", source bindposes: " + sourceBindPoses.Length + ".");
            }

            for (int i = 0; i < boneCount; i++)
            {
                Transform boneTransform = skin.boneTransforms[i];
                if (boneTransform == null)
                {
                    throw new InvalidOperationException(
                        "SpriteSkin contains a missing bone at index " + i +
                        " on " + BuildHierarchyPath(skin.transform) + ".");
                }

                if (!string.Equals(
                        boneTransform.name,
                        spriteBones[i].name,
                        StringComparison.Ordinal))
                {
                    throw new InvalidOperationException(
                        "Sprite bone order mismatch at index " + i +
                        " on " + BuildHierarchyPath(skin.transform) +
                        ". SpriteSkin has " + boneTransform.name +
                        ", Sprite has " + spriteBones[i].name + ".");
                }
            }

            Matrix4x4[] boneToSpriteMatrices = new Matrix4x4[boneCount];
            Matrix4x4[] rebuiltBindPoses = new Matrix4x4[boneCount];
            byte[] calculationStates = new byte[boneCount];

            for (int i = 0; i < boneCount; i++)
            {
                Matrix4x4 boneToSprite = CalculateBoneToSpriteMatrix(
                    i,
                    spriteBones,
                    boneToSpriteMatrices,
                    calculationStates);
                rebuiltBindPoses[i] = boneToSprite.inverse;
            }

            Debug.LogWarning(
                "[Luna Skin Converter] Rebuilt " + boneCount +
                " bindposes from SpriteBone rest data on " +
                BuildHierarchyPath(skin.transform) +
                " because the Sprite provided " +
                sourceBindPoses.Length + " bindposes.");

            return rebuiltBindPoses;
        }

        private static Matrix4x4 CalculateBoneToSpriteMatrix(
            int boneIndex,
            SpriteBone[] spriteBones,
            Matrix4x4[] boneToSpriteMatrices,
            byte[] calculationStates)
        {
            if (calculationStates[boneIndex] == 2)
            {
                return boneToSpriteMatrices[boneIndex];
            }

            if (calculationStates[boneIndex] == 1)
            {
                throw new InvalidOperationException(
                    "Sprite bone hierarchy contains a cycle at bone " +
                    spriteBones[boneIndex].name + ".");
            }

            calculationStates[boneIndex] = 1;
            SpriteBone spriteBone = spriteBones[boneIndex];
            Matrix4x4 localMatrix = Matrix4x4.TRS(
                spriteBone.position,
                spriteBone.rotation,
                Vector3.one);

            int parentIndex = spriteBone.parentId;
            Matrix4x4 boneToSprite = localMatrix;
            if (parentIndex >= 0)
            {
                if (parentIndex >= spriteBones.Length)
                {
                    throw new InvalidOperationException(
                        "Sprite bone " + spriteBone.name +
                        " has invalid parent index " + parentIndex + ".");
                }

                boneToSprite = CalculateBoneToSpriteMatrix(
                    parentIndex,
                    spriteBones,
                    boneToSpriteMatrices,
                    calculationStates) * localMatrix;
            }

            boneToSpriteMatrices[boneIndex] = boneToSprite;
            calculationStates[boneIndex] = 2;
            return boneToSprite;
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

        private static string BuildSpriteSkinDiagnostic(
            SpriteSkin skin,
            Sprite sprite)
        {
            string hierarchyPath = skin != null
                ? BuildHierarchyPath(skin.transform)
                : "<missing SpriteSkin>";
            string spriteName = sprite != null ? sprite.name : "<missing Sprite>";
            string spriteAssetPath = sprite != null
                ? AssetDatabase.GetAssetPath(sprite)
                : "<none>";
            string textureName =
                sprite != null && sprite.texture != null
                    ? sprite.texture.name
                    : "<missing texture>";
            int skinBoneCount =
                skin != null && skin.boneTransforms != null
                    ? skin.boneTransforms.Length
                    : 0;
            string rootBoneName =
                skin != null && skin.rootBone != null
                    ? skin.rootBone.name
                    : "<missing root bone>";

            return "Hierarchy: " + hierarchyPath +
                   ", Sprite: " + spriteName +
                   ", Sprite instance ID: " +
                   (sprite != null ? sprite.GetInstanceID() : 0) +
                   ", Asset: " +
                   (string.IsNullOrEmpty(spriteAssetPath)
                       ? "<scene/runtime sprite>"
                       : spriteAssetPath) +
                   ", Texture: " + textureName +
                   ", SpriteSkin bones: " + skinBoneCount +
                   ", Root bone: " + rootBoneName + ".";
        }

        private static string BuildRelativeHierarchyPath(
            Transform transform,
            Transform root)
        {
            if (transform == root)
            {
                return root.name;
            }

            List<string> names = new List<string>();
            Transform current = transform;
            while (current != null && current != root)
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

        private sealed class LayerRepairEntry
        {
            internal readonly SkinnedMeshRenderer Renderer;
            internal readonly string Path;
            internal int OriginalSortingLayerId;
            internal int OriginalSortingOrder;
            internal float OriginalLocalZ;

            internal LayerRepairEntry(
                SkinnedMeshRenderer renderer,
                string path,
                int originalSortingLayerId,
                int originalSortingOrder,
                float originalLocalZ)
            {
                Renderer = renderer;
                Path = path;
                OriginalSortingLayerId = originalSortingLayerId;
                OriginalSortingOrder = originalSortingOrder;
                OriginalLocalZ = originalLocalZ;
            }
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
