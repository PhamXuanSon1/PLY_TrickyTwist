using UnityEngine;
using System.Collections.Generic;

public class AnimColorController : MonoBehaviour
{
    [Header("Các mảnh rèm trắng cần đổi màu")]
    [Tooltip("Mở cái Animation này ra, tìm mấy cái hình rèm trắng kéo thả hết vào đây")]
    public List<SpriteRenderer> partsToColor = new List<SpriteRenderer>();

    // Hàm này sẽ được gọi từ UnityEvent (On Drop)
    public void ApplyTopColor()
    {
        if (CurtainManager.Instance != null)
        {
            Color targetColor = CurtainManager.Instance.GetTopCurtainColor();
            
            // Nhuộm màu cho toàn bộ list
            foreach (var sr in partsToColor)
            {
                if (sr != null)
                {
                    sr.color = targetColor;
                }
            }
        }
    }
}
