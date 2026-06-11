using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

public static class DeleteAllScript
{
#if UNITY_EDITOR
    [UnityEditor.MenuItem("Tools/Delete All Script/Convert Sorting Order To Z In Hierarchy")]
    private static void ConvertSortingOrderToZInHierarchy()
    {
        GameObject[] selectedObjects = UnityEditor.Selection.gameObjects;
        if (selectedObjects.Length == 0)
        {
            Debug.LogWarning("Please select at least one GameObject in the hierarchy.");
            return;
        }

        UnityEditor.Undo.SetCurrentGroupName("Convert Sorting Order To Z");
        int undoGroup = UnityEditor.Undo.GetCurrentGroup();
        var convertedTransforms = new HashSet<Transform>();
        int convertedCount = 0;

        foreach (GameObject root in selectedObjects)
        {
            Renderer[] renderers = root.GetComponentsInChildren<Renderer>(true);
            Canvas[] canvases = root.GetComponentsInChildren<Canvas>(true);
            SortingGroup[] sortingGroups = root.GetComponentsInChildren<SortingGroup>(true);

            foreach (SortingGroup sortingGroup in sortingGroups)
            {
                ConvertTransformZ(sortingGroup.transform, sortingGroup.sortingOrder, convertedTransforms);
                ResetSorting(sortingGroup);
                convertedCount++;
            }

            foreach (Canvas canvas in canvases)
            {
                ConvertTransformZ(canvas.transform, canvas.sortingOrder, convertedTransforms);
                ResetSorting(canvas);
                convertedCount++;
            }

            foreach (Renderer targetRenderer in renderers)
            {
                ConvertTransformZ(
                    targetRenderer.transform,
                    targetRenderer.sortingOrder,
                    convertedTransforms);
                ResetSorting(targetRenderer);
                convertedCount++;
            }
        }

        UnityEditor.Undo.CollapseUndoOperations(undoGroup);
        Debug.Log($"Converted {convertedCount} sorting order(s) to Z position in selected hierarchies.");
    }

    private static void ConvertTransformZ(
        Transform target,
        int sortingOrder,
        HashSet<Transform> convertedTransforms)
    {
        if (!convertedTransforms.Add(target))
        {
            return;
        }

        UnityEditor.Undo.RecordObject(target, "Convert Sorting Order To Z");
        Vector3 position = target.localPosition;
        position.z = -sortingOrder * 0.1f;
        target.localPosition = position;
        UnityEditor.EditorUtility.SetDirty(target);
    }

    private static void ResetSorting(Renderer targetRenderer)
    {
        if (targetRenderer.sortingOrder == 0 &&
            targetRenderer.sortingLayerName == "Default")
        {
            return;
        }

        UnityEditor.Undo.RecordObject(targetRenderer, "Reset Sorting");
        targetRenderer.sortingOrder = 0;
        targetRenderer.sortingLayerName = "Default";
        UnityEditor.EditorUtility.SetDirty(targetRenderer);
    }

    private static void ResetSorting(Canvas canvas)
    {
        if (canvas.sortingOrder == 0 &&
            canvas.sortingLayerName == "Default")
        {
            return;
        }

        UnityEditor.Undo.RecordObject(canvas, "Reset Sorting");
        canvas.sortingOrder = 0;
        canvas.sortingLayerName = "Default";
        UnityEditor.EditorUtility.SetDirty(canvas);
    }

    private static void ResetSorting(SortingGroup sortingGroup)
    {
        if (sortingGroup.sortingOrder == 0 &&
            sortingGroup.sortingLayerName == "Default")
        {
            return;
        }

        UnityEditor.Undo.RecordObject(sortingGroup, "Reset Sorting");
        sortingGroup.sortingOrder = 0;
        sortingGroup.sortingLayerName = "Default";
        UnityEditor.EditorUtility.SetDirty(sortingGroup);
    }

    [UnityEditor.MenuItem("Tools/Delete All Script/Remove Missing Scripts In Hierarchy")]
    private static void CleanHierarchy()
    {
        GameObject[] selectedObjects = UnityEditor.Selection.gameObjects;
        if (selectedObjects.Length == 0)
        {
            Debug.LogWarning("Please select at least one GameObject in the hierarchy.");
            return;
        }

        if (!UnityEditor.EditorUtility.DisplayDialog(
                "Remove Missing Scripts",
                $"Remove only missing script components from the selected {selectedObjects.Length} object(s) "
                + $"and their children?\n\nValid scripts such as SpriteSkin are kept. "
                + "You can undo this action.",
                "Remove",
                "Cancel"))
        {
            return;
        }

        int removedCount = 0;
        UnityEditor.Undo.SetCurrentGroupName("Remove Missing Scripts");
        int undoGroup = UnityEditor.Undo.GetCurrentGroup();

        foreach (GameObject root in selectedObjects)
        {
            Transform[] transforms = root.GetComponentsInChildren<Transform>(true);

            foreach (Transform child in transforms)
            {
                GameObject childObject = child.gameObject;
                int missingScriptCount =
                    UnityEditor.GameObjectUtility.GetMonoBehavioursWithMissingScriptCount(childObject);

                if (missingScriptCount <= 0)
                {
                    continue;
                }

                UnityEditor.Undo.RegisterCompleteObjectUndo(
                    childObject,
                    "Remove Missing Script Components");
                UnityEditor.GameObjectUtility.RemoveMonoBehavioursWithMissingScript(childObject);
                UnityEditor.EditorUtility.SetDirty(childObject);
                removedCount += missingScriptCount;
            }
        }

        UnityEditor.Undo.CollapseUndoOperations(undoGroup);
        Debug.Log($"Removed {removedCount} missing script component(s) from selected hierarchies.");
    }
#endif
}
