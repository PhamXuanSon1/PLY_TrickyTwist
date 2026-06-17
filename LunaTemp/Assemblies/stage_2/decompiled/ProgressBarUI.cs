using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

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
			totalItems = ItemManager.Instance.items.Count;
			ItemManager.Instance.onItemDropped.AddListener(UpdateUI);
			int initialCount = ItemManager.Instance.totalItemsDropped;
			if (fillImage != null && totalItems > 0)
			{
				fillImage.fillAmount = (float)initialCount / (float)totalItems;
			}
			if (progressText != null)
			{
				progressText.text = $"{initialCount}/{totalItems}";
			}
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
			int currentCount = ItemManager.Instance.totalItemsDropped;
			if (fillImage != null)
			{
				float targetFill = (float)currentCount / (float)totalItems;
				fillImage.DOFillAmount(targetFill, 0.5f).SetEase(Ease.OutCubic);
			}
			if (progressText != null)
			{
				progressText.text = $"{currentCount}/{totalItems}";
			}
		}
	}
}
