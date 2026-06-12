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

	private int totalCurtains;

	private void Start()
	{
		if (CurtainManager.Instance != null)
		{
			totalCurtains = CurtainManager.Instance.curtains.Count;
			CurtainManager.Instance.onCurtainRemoved.AddListener(UpdateUI);
			int initialCount = CurtainManager.Instance.GetRemovedCurtainCount();
			if (fillImage != null)
			{
				fillImage.fillAmount = (float)initialCount / (float)totalCurtains;
			}
			if (progressText != null)
			{
				progressText.text = $"{initialCount}/{totalCurtains}";
			}
		}
	}

	private void OnDestroy()
	{
		if (CurtainManager.Instance != null)
		{
			CurtainManager.Instance.onCurtainRemoved.RemoveListener(UpdateUI);
		}
	}

	public void UpdateUI()
	{
		if (CurtainManager.Instance != null && totalCurtains > 0)
		{
			int removedCount = CurtainManager.Instance.GetRemovedCurtainCount();
			if (fillImage != null)
			{
				float targetFill = (float)removedCount / (float)totalCurtains;
				fillImage.DOFillAmount(targetFill, 0.5f).SetEase(Ease.OutCubic);
			}
			if (progressText != null)
			{
				progressText.text = $"{removedCount}/{totalCurtains}";
			}
		}
	}
}
