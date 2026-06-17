using System.Collections.Generic;
using UnityEngine;

public class AnimColorController : MonoBehaviour
{
	[Header("Các mảnh rèm trắng cần đổi màu")]
	[Tooltip("Mở cái Animation này ra, tìm mấy cái hình rèm trắng kéo thả hết vào đây")]
	public List<SpriteRenderer> partsToColor = new List<SpriteRenderer>();

	public void ApplyTopColor()
	{
	}
}
