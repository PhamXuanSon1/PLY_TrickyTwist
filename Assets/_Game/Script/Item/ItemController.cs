using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;

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
    public Transform dropTarget;

    [Header("Events")]
    public UnityEvent onClick;
    public UnityEvent onDrop;
    public UnityEvent onDragStart;
    public UnityEvent onReturn;

    [Header("Animation Setup")]
    public List<AnimObjectData> animationObjects = new List<AnimObjectData>();

    [Header("Audio")]
    [Tooltip("Chọn loại âm thanh FX sẽ phát khi chơi thành công (lấy từ Ply_SoundManager)")]
    public FxType fxSoundType;

    public void PlayDropAnimations()
    {
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(fxSoundType);
        }

        onDrop?.Invoke();

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

        float maxDuration = 0f;
        for (int i = 0; i < animationObjects.Count; i++)
        {
            float duration = animationObjects[i].delayFromStart + animationObjects[i].durationToDeactivate;
            if (duration > maxDuration)
            {
                maxDuration = duration;
            }
            StartCoroutine(ActivateObjectWithDelay(animationObjects[i]));
        }

        if (InputManager.Instance != null)
        {
            InputManager.Instance.BlockInputFor(maxDuration);
        }
        
        if (HandHintMmanager.Instance != null)
        {
            HandHintMmanager.Instance.OnItemCompleted(this, maxDuration);
        }

        if (ItemManager.Instance != null)
        {
            ItemManager.Instance.DelayEvolutionCheckFor(maxDuration);
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
