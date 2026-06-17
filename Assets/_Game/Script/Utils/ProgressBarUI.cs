using UnityEngine;
using UnityEngine.UI;
using TMPro; // TextMeshPro
using DG.Tweening; // Thêm thư viện DOTween để chạy hiệu ứng mượt mà

public class ProgressBarUI : MonoBehaviour
{
    [Header("UI References")]
    [Tooltip("Kéo Component Image của thanh fill màu vàng (Image Type: Filled) vào đây")]
    public Image fillImage;
    
    [Tooltip("Kéo TextMeshPro hiển thị số (ví dụ 3/8) vào đây")]
    public TextMeshProUGUI progressText;

    private int totalItems = 0;

    private void Start()
    {
        if (ItemManager.Instance != null)
        {
            // Tự động lấy số lượng Item trong ItemManager làm tổng số
            totalItems = ItemManager.Instance.items.Count;

            // Đăng ký nhận sự kiện mỗi khi có Item được chơi xong
            ItemManager.Instance.onItemDropped.AddListener(UpdateUI);
            
            // Set giá trị mặc định lúc mới vào game không cần hiệu ứng
            int initialCount = ItemManager.Instance.totalItemsDropped;
            if (fillImage != null && totalItems > 0) 
            {
                fillImage.fillAmount = (float)initialCount / totalItems;
            }
            if (progressText != null) progressText.text = $"{initialCount}/{totalItems}";
        }
    }

    private void OnDestroy()
    {
        // Gỡ đăng ký sự kiện khi object bị hủy để tránh lỗi rò rỉ bộ nhớ
        if (ItemManager.Instance != null)
        {
            ItemManager.Instance.onItemDropped.RemoveListener(UpdateUI);
        }
    }

    // Hàm này sẽ tự động được gọi khi ItemManager.cs báo tín hiệu có Item chơi xong
    public void UpdateUI()
    {
        if (ItemManager.Instance != null && totalItems > 0)
        {
            int currentCount = ItemManager.Instance.totalItemsDropped;
            
            if (fillImage != null)
            {
                float targetFill = (float)currentCount / totalItems;
                
                // Dùng DOTween để thanh trượt lên mượt mà trong 0.5 giây
                fillImage.DOFillAmount(targetFill, 0.5f).SetEase(Ease.OutCubic);
            }

            if (progressText != null)
            {
                progressText.text = $"{currentCount}/{totalItems}"; 
            }
        }
    }
}
