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
        // TÍNH NĂNG NÀY ĐÃ ĐƯỢC VÔ HIỆU HÓA
        // (Do bạn đã yêu cầu xóa CurtainManager nên không còn màu rèm để lấy nữa)
    }
}
