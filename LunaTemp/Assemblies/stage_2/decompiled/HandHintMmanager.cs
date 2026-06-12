using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HandHintMmanager : MonoBehaviour
{
	public List<ItemController> hintItems = new List<ItemController>();

	public static HandHintMmanager Instance;

	[Header("Hand Hint Settings")]
	public GameObject handHintObject;

	public Animator handAnimator;

	public float idleTimeToHint = 5f;

	public float dragAnimDuration = 1.5f;

	[Header("Fallback Hint Settings")]
	[Tooltip("Vị trí bắt đầu của Hint khi danh sách hintItems đã hoàn thành hết")]
	public Transform startHintPos;

	[Tooltip("Vị trí kết thúc của Hint khi danh sách hintItems đã hoàn thành hết")]
	public Transform endHintPos;

	private float idleTimer = 0f;

	private bool isWaitingForAnim = false;

	private Tween currentDragTween;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
	}

	private void Start()
	{
		ShowHandHintForCurrentItem();
	}

	private void Update()
	{
		if (isWaitingForAnim)
		{
			return;
		}
		if (GetNextActiveItem() == null)
		{
			if (!handHintObject.activeInHierarchy)
			{
				ShowHandHintForCurrentItem();
			}
			return;
		}
		idleTimer += Time.deltaTime;
		if (idleTimer >= idleTimeToHint && !handHintObject.activeInHierarchy)
		{
			ShowHandHintForCurrentItem();
		}
	}

	public void HideAndResetTimer()
	{
		idleTimer = 0f;
		HideHandHint();
	}

	private ItemController GetNextActiveItem()
	{
		for (int i = 0; i < hintItems.Count; i++)
		{
			if (hintItems[i] != null && hintItems[i].gameObject.activeInHierarchy)
			{
				Collider col = hintItems[i].GetComponent<Collider>();
				if (col != null && col.enabled)
				{
					return hintItems[i];
				}
			}
		}
		return null;
	}

	private void ShowHandHintForCurrentItem()
	{
		handHintObject.SetActive(true);
		currentDragTween?.Kill();
		ItemController currentItem = GetNextActiveItem();
		if (currentItem != null)
		{
			if (currentItem.itemType == ItemType.ClickOnly)
			{
				handHintObject.transform.position = currentItem.transform.position;
				if (handAnimator != null)
				{
					handAnimator.SetTrigger("Click");
				}
			}
			else if (currentItem.itemType == ItemType.DragAndDrop)
			{
				handHintObject.transform.position = currentItem.transform.position;
				Vector3 targetPos = ((currentItem.dropTarget != null) ? currentItem.dropTarget.position : (currentItem.transform.position + Vector3.up * 2f));
				currentDragTween = handHintObject.transform.DOMove(targetPos, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
			}
		}
		else if (startHintPos != null && endHintPos != null)
		{
			handHintObject.transform.position = startHintPos.position;
			currentDragTween = handHintObject.transform.DOMove(endHintPos.position, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
		}
		else
		{
			handHintObject.SetActive(false);
		}
	}

	public void HideHandHint()
	{
		if (handHintObject != null && handHintObject.activeInHierarchy)
		{
			handHintObject.SetActive(false);
			currentDragTween?.Kill();
		}
	}

	public void OnItemCompleted(ItemController item, float duration)
	{
		StartCoroutine(WaitAndAdvanceItem(duration));
	}

	private IEnumerator WaitAndAdvanceItem(float duration)
	{
		isWaitingForAnim = true;
		HideHandHint();
		yield return new WaitForSeconds(duration);
		idleTimer = 0f;
		isWaitingForAnim = false;
	}
}
