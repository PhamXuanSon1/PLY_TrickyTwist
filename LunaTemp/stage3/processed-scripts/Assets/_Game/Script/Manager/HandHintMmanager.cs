using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class HandHintMmanager : MonoBehaviour
{
    public List<ItemController> hintItems = new List<ItemController>();

    public static HandHintMmanager Instance;

    [Header("Hand Hint Settings")]
    public GameObject handHintObject;
    public Animator handAnimator;
    public float idleTimeToHint = 5f;
    public float dragAnimDuration = 1.5f;

    private int currentIndex = 0;
    private float idleTimer = 0f;
    private bool isWaitingForAnim = false;
    private Tween currentDragTween;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }

    private void Start()
    {
        // Khi mới vào game, bật hand tutorial luôn lập tức
        ShowHandHintForCurrentItem();
    }

    private void Update()
    {
        // Không đếm thời gian nếu đã hết item hoặc đang chờ anim chạy xong
        if (isWaitingForAnim || currentIndex >= hintItems.Count)
            return;

        idleTimer += Time.deltaTime;

        if (idleTimer >= idleTimeToHint && !handHintObject.activeInHierarchy)
        {
            ShowHandHintForCurrentItem();
        }
    }

    public void HideAndResetTimer()
    {
        idleTimer = 0f;
        HideHandHint();
    }

    private void ShowHandHintForCurrentItem()
    {
        if (currentIndex >= hintItems.Count) return;

        ItemController currentItem = hintItems[currentIndex];
        
        // Bỏ qua nếu item không tồn tại hoặc đã bị ẩn (do hoàn thành trước đó)
        if (currentItem == null || !currentItem.gameObject.activeInHierarchy) return;

        handHintObject.SetActive(true);

        // Xóa các hiệu ứng kéo trước đó
        currentDragTween?.Kill();

        if (currentItem.itemType == ItemType.ClickOnly)
        {
            // Click
            handHintObject.transform.position = currentItem.transform.position;
            if (handAnimator != null)
            {
                handAnimator.SetTrigger("Click");
            }
        }
        else if (currentItem.itemType == ItemType.DragAndDrop)
        {
            // Đưa tay về vị trí Item
            handHintObject.transform.position = currentItem.transform.position;
            
            // Target
            Vector3 targetPos = currentItem.dropTarget != null ? currentItem.dropTarget.position : currentItem.transform.position + Vector3.up * 2f;

            // Kéo thả từ spawn đến target, lặp đi lặp lại
            currentDragTween = handHintObject.transform.DOMove(targetPos, dragAnimDuration)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Restart);
        }
    }

    public void HideHandHint()
    {
        if (handHintObject != null && handHintObject.activeInHierarchy)
        {
            handHintObject.SetActive(false);
            currentDragTween?.Kill();
        }
    }

    public void OnItemCompleted(ItemController item, float duration)
    {
        if (currentIndex < hintItems.Count && item == hintItems[currentIndex])
        {
            StartCoroutine(WaitAndAdvanceItem(duration));
        }
    }

    private IEnumerator WaitAndAdvanceItem(float duration)
    {
        isWaitingForAnim = true;
        HideHandHint(); 
        
        // Đợi cho đến khi anim của Item chạy xong
        yield return new WaitForSeconds(duration);

        // Chuyển sang item tiếp theo
        currentIndex++;
        idleTimer = 0f; // Bắt đầu đếm lại 5s cho item mới
        isWaitingForAnim = false;
    }
}
