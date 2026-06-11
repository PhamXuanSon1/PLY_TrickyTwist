#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

public class SpriteOrderInLayerTool : EditorWindow
{
    private GameObject rootObject;
    private int offset = 1;

    [MenuItem("Tools/Increase Sprite Order In Layer")]
    public static void ShowWindow()
    {
        GetWindow<SpriteOrderInLayerTool>("Sprite Order Tool");
    }

    private void OnGUI()
    {
        GUILayout.Space(10);

        rootObject = (GameObject)EditorGUILayout.ObjectField(
            "Root Object",
            rootObject,
            typeof(GameObject),
            true);

        offset = EditorGUILayout.IntField("Order Offset", offset);

        GUILayout.Space(10);

        if (GUILayout.Button("Apply"))
        {
            ApplyOffset();
        }
    }

    private void ApplyOffset()
    {
        if (rootObject == null)
        {
            Debug.LogWarning("Chưa chọn Root Object!");
            return;
        }

        SpriteRenderer[] renderers =
            rootObject.GetComponentsInChildren<SpriteRenderer>(true);

        Undo.RecordObjects(renderers, "Change Sprite Order In Layer");

        foreach (SpriteRenderer sr in renderers)
        {
            sr.sortingOrder += offset;
            EditorUtility.SetDirty(sr);
        }

        Debug.Log($"Đã cập nhật {renderers.Length} SpriteRenderer.");
    }
}
#endif