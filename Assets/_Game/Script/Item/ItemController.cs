using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public enum ItemType
{
    DragAndDrop,
    ClickOnly
}

[System.Serializable]
public class AnimObjectData
{
    public GameObject animObj;
    public float delayFromStart;
    public float durationToDeactivate;
}

public class ItemController : MonoBehaviour
{
    public ItemType itemType = ItemType.DragAndDrop;

    [Header("Animation Setup")]
    public List<AnimObjectData> animationObjects = new List<AnimObjectData>();

    public void PlayDropAnimations()
    {
        // Ẩn hiển thị của ItemGraphic đi để các object animation chạy
        ItemGraphic graphic = GetComponent<ItemGraphic>();
        if (graphic != null)
        {
            for (int i = 0; i < graphic.spriteRenderers.Count; i++)
            {
                graphic.spriteRenderers[i].enabled = false;
            }
        }

        // Tắt collider để tránh tương tác kéo thả nữa
        Collider col = GetComponent<Collider>();
        if (col != null)
        {
            col.enabled = false;
        }

        for (int i = 0; i < animationObjects.Count; i++)
        {
            StartCoroutine(ActivateObjectWithDelay(animationObjects[i]));
        }
    }

    private IEnumerator ActivateObjectWithDelay(AnimObjectData data)
    {
        if (data != null && data.animObj != null)
        {
            if (data.delayFromStart > 0f)
            {
                yield return new WaitForSeconds(data.delayFromStart);
            }
            data.animObj.SetActive(true);

            if (data.durationToDeactivate > 0f)
            {
                yield return new WaitForSeconds(data.durationToDeactivate);
                if (data.animObj != null)
                {
                    data.animObj.SetActive(false);
                }
            }
        }
    }
}
