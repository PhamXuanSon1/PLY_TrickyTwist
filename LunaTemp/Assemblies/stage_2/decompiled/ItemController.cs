using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ItemController : MonoBehaviour
{
	public ItemType itemType = ItemType.DragAndDrop;

	[Tooltip("Vị trí đích mà Item cần được kéo thả vào")]
	public Transform dropTarget;

	[Tooltip("Khoảng cách tối đa (bán kính) để tính là thả trúng đích")]
	public float dropDistanceThreshold = 1f;

	[Tooltip("Bật tắt tính năng tự động ẩn hình ảnh Item khi thả trúng đích")]
	public bool hideSpriteOnDrop = true;

	[Header("Events")]
	public UnityEvent onClick;

	public UnityEvent onDrop;

	public UnityEvent onDragStart;

	public UnityEvent onReturn;

	[Tooltip("Sự kiện kích hoạt sau khi TẤT CẢ các Animation của Item đã chạy xong")]
	public UnityEvent onAnimFinished;

	[Header("Animation Setup")]
	public List<AnimObjectData> animationObjects = new List<AnimObjectData>();

	[Header("Audio")]
	[Tooltip("Danh sách âm thanh FX sẽ phát NGAY LẬP TỨC khi chơi thành công")]
	public List<FxType> fxSoundsStartAnim = new List<FxType>();

	[Tooltip("Danh sách âm thanh sẽ phát sau khi TẤT CẢ animation chạy xong")]
	public List<FxType> fxSoundsAfterAnim = new List<FxType>();

	public void PlayDropAnimations()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null && fxSoundsStartAnim != null)
		{
			foreach (FxType sound in fxSoundsStartAnim)
			{
				if (sound != 0)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound);
				}
			}
		}
		onDrop?.Invoke();
		if (hideSpriteOnDrop)
		{
			ItemGraphic graphic = GetComponent<ItemGraphic>();
			if (graphic != null)
			{
				for (int j = 0; j < graphic.spriteRenderers.Count; j++)
				{
					graphic.spriteRenderers[j].enabled = false;
				}
			}
		}
		Collider col = GetComponent<Collider>();
		if (col != null)
		{
			col.enabled = false;
		}
		float maxDuration = 0f;
		for (int i = 0; i < animationObjects.Count; i++)
		{
			float duration = animationObjects[i].delayFromStart + animationObjects[i].durationToDeactivate;
			if (duration > maxDuration)
			{
				maxDuration = duration;
			}
			StartCoroutine(ActivateObjectWithDelay(animationObjects[i]));
		}
		if (InputManager.Instance != null)
		{
			InputManager.Instance.BlockInputFor(maxDuration);
		}
		if (HandHintMmanager.Instance != null)
		{
			HandHintMmanager.Instance.OnItemCompleted(this, maxDuration);
		}
		if (ItemManager.Instance != null)
		{
			ItemManager.Instance.AddDroppedItem(this);
		}
		if (fxSoundsAfterAnim != null && fxSoundsAfterAnim.Count > 0)
		{
			StartCoroutine(PlaySoundsAfterDelay(fxSoundsAfterAnim, maxDuration));
		}
		StartCoroutine(InvokeAnimFinished(maxDuration));
	}

	private IEnumerator InvokeAnimFinished(float delay)
	{
		if (delay > 0f)
		{
			yield return new WaitForSeconds(delay);
		}
		onAnimFinished?.Invoke();
	}

	private IEnumerator ActivateObjectWithDelay(AnimObjectData data)
	{
		if (data == null || !(data.animObj != null))
		{
			yield break;
		}
		if (data.delayFromStart > 0f)
		{
			yield return new WaitForSeconds(data.delayFromStart);
		}
		data.animObj.SetActive(true);
		if (data.durationToDeactivate > 0f)
		{
			yield return new WaitForSeconds(data.durationToDeactivate);
			if (data.animObj != null)
			{
				data.animObj.SetActive(false);
			}
		}
	}

	private IEnumerator PlaySoundsAfterDelay(List<FxType> soundTypes, float delay)
	{
		if (delay > 0f)
		{
			yield return new WaitForSeconds(delay);
		}
		if (!(Ply_Singleton<Ply_SoundManager>.Ins != null))
		{
			yield break;
		}
		foreach (FxType sound in soundTypes)
		{
			if (sound != 0)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound);
			}
		}
	}
}
