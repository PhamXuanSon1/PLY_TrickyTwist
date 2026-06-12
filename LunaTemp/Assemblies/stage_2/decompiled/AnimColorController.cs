using System.Collections.Generic;
using UnityEngine;

public class AnimColorController : MonoBehaviour
{
	[Header("Các mảnh rèm trắng cần đổi màu")]
	[Tooltip("Mở cái Animation này ra, tìm mấy cái hình rèm trắng kéo thả hết vào đây")]
	public List<SpriteRenderer> partsToColor = new List<SpriteRenderer>();

	public void ApplyTopColor()
	{
		if (!(CurtainManager.Instance != null))
		{
			return;
		}
		Color targetColor = CurtainManager.Instance.GetTopCurtainColor();
		foreach (SpriteRenderer sr in partsToColor)
		{
			if (sr != null)
			{
				sr.color = targetColor;
			}
		}
	}
}
