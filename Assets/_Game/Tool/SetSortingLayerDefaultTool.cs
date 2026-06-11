#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

public class SetSortingLayerDefaultTool : EditorWindow
{
    private GameObject rootObject;

    [MenuItem("Tools/Set SpriteRenderer Sorting Layer To Default")]
    public static void ShowWindow()
    {
        GetWindow<SetSortingLayerDefaultTool>("Set Sorting Layer");
    }

    private void OnGUI()
    {
        GUILayout.Label("Set All SpriteRenderers To Default Layer", EditorStyles.boldLabel);

        rootObject = (GameObject)EditorGUILayout.ObjectField(
            "Root Object",
            rootObject,
            typeof(GameObject),
            true);

        GUILayout.Space(10);

        if (GUILayout.Button("Set To Default"))
        {
            SetSortingLayerToDefault();
        }
    }

    private void SetSortingLayerToDefault()
    {
        if (rootObject == null)
        {
            Debug.LogWarning("Please assign a Root Object.");
            return;
        }

        SpriteRenderer[] renderers = rootObject.GetComponentsInChildren<SpriteRenderer>(true);

        int count = 0;

        foreach (SpriteRenderer sr in renderers)
        {
            Undo.RecordObject(sr, "Set Sorting Layer");

            sr.sortingLayerName = "Default";
            EditorUtility.SetDirty(sr);

            count++;
        }

        Debug.Log($"Updated {count} SpriteRenderer(s) to Sorting Layer 'Default'.");
    }
}
#endif