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

    private int totalCurtains;

    private void Start()
    {
        if (CurtainManager.Instance != null)
        {
            totalCurtains = CurtainManager.Instance.curtains.Count;
            
            // Đăng ký nhận sự kiện mỗi khi có rèm bị xóa
            CurtainManager.Instance.onCurtainRemoved.AddListener(UpdateUI);
            
            // Set giá trị mặc định lúc mới vào game không cần hiệu ứng
            int initialCount = CurtainManager.Instance.GetRemovedCurtainCount();
            // Cài đặt tự động kiểu Fill Horizontal cho Image bằng code
            if (fillImage != null) 
            {
                fillImage.fillAmount = (float)initialCount / totalCurtains;
            }
            if (progressText != null) progressText.text = $"{initialCount}/{totalCurtains}";
        }
    }

    private void OnDestroy()
    {
        // Gỡ đăng ký sự kiện khi object bị hủy để tránh lỗi rò rỉ bộ nhớ
        if (CurtainManager.Instance != null)
        {
            CurtainManager.Instance.onCurtainRemoved.RemoveListener(UpdateUI);
        }
    }

    // Hàm này sẽ tự động được gọi khi CurtainManager.cs báo tín hiệu gỡ rèm
    public void UpdateUI()
    {
        if (CurtainManager.Instance != null && totalCurtains > 0)
        {
            int removedCount = CurtainManager.Instance.GetRemovedCurtainCount();
            
            if (fillImage != null)
            {
                float targetFill = (float)removedCount / totalCurtains;
                
                // Dùng DOTween để thanh vàng trượt lên mượt mà trong 0.5 giây
                fillImage.DOFillAmount(targetFill, 0.5f).SetEase(Ease.OutCubic);
            }

            if (progressText != null)
            {
                progressText.text = $"{removedCount}/{totalCurtains}"; // Đổi thành format dính liền theo đúng ý bạn
            }
        }
    }
}
