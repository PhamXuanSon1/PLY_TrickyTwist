using UnityEngine;
using UnityEngine.UI;
using TMPro; // Dùng cho TextMeshPro

public class ProgressBar : MonoBehaviour
{
    [Header("Dành cho Canvas UI (Tùy chọn)")]
    public Image fillImage;
    public TextMeshProUGUI progressTextUI;

    [Header("Dành cho Object 2D/3D thường (KHÔNG dùng Canvas)")]
    [Tooltip("Kéo SpriteRenderer thanh màu vàng vào đây (Lưu ý: Hình Sprite phải có Pivot ở cạnh Trái)")]
    public SpriteRenderer fillSpriteRenderer;
    [Tooltip("Kéo TextMeshPro (Dạng 3D Text) vào đây")]
    public TextMeshPro progressTextWorld;

    private int totalItems = 0;

    private Vector3 originalSpriteScale;

    private void Start()
    {
        if (fillSpriteRenderer != null)
        {
            // Lưu lại scale X ban đầu để tính % sau này
            originalSpriteScale = fillSpriteRenderer.transform.localScale;
        }

        if (ItemManager.Instance != null)
        {
            totalItems = ItemManager.Instance.items.Count;
            ItemManager.Instance.onItemDropped.AddListener(UpdateUI);
            UpdateUI();
        }
    }

    private void OnDestroy()
    {
        if (ItemManager.Instance != null)
        {
            ItemManager.Instance.onItemDropped.RemoveListener(UpdateUI);
        }
    }

    public void UpdateUI()
    {
        if (ItemManager.Instance != null && totalItems > 0)
        {
            int removedCount = ItemManager.Instance.totalItemsDropped;
            float fillAmount = (float)removedCount / totalItems;
            string textToShow = $"{removedCount} / {totalItems}";
            
            // --- NẾU DÙNG CANVAS ---
            if (fillImage != null)
                fillImage.fillAmount = fillAmount;

            if (progressTextUI != null)
                progressTextUI.text = textToShow;

            // --- NẾU KHÔNG DÙNG CANVAS (Chỉ dùng Object 2D) ---
            if (fillSpriteRenderer != null)
            {
                // Thay đổi độ dài (Scale X) của thanh vàng
                Vector3 newScale = originalSpriteScale;
                newScale.x = originalSpriteScale.x * fillAmount;
                fillSpriteRenderer.transform.localScale = newScale;
            }

            if (progressTextWorld != null)
                progressTextWorld.text = textToShow;
        }
    }
}
