using UnityEngine;
using UnityEngine.Serialization;

public class InputManager : MonoBehaviour
{
	public Camera mainCamera;

	public LayerMask itemLayer;

	public LayerMask CurtainLayer;

	[Tooltip("Layer dành cho các Object mà khi click vào sẽ bay ra Store")]
	public LayerMask installLayer;

	public float maxDistance = 100f;

	public static InputManager Instance;

	private Transform draggedObject;

	private Vector3 offset;

	private float dragDepth;

	private float blockInputUntilTime = 0f;

	private Vector3 mouseDownPos;

	private const float clickDragThreshold = 10f;

	[Header("Store Settings")]
	[Tooltip("Số lượng Item thả trúng đích để kích hoạt tính năng Click bất kỳ đâu cũng đi Store")]
	[FormerlySerializedAs("curtainsToGotoStore")]
	public int itemsToGotoStore = 7;

	[Header("Drag Settings")]
	[Tooltip("Số lượng layer cộng thêm khi nhấc Item lên (để nó đè lên UI/đồ vật khác)")]
	public int dragSortingOffset = 100;

	[Header("Drag Bounds Settings")]
	[Tooltip("Bật/Tắt tính năng giới hạn di chuyển")]
	public bool useDragBounds = true;

	[Tooltip("Khung giới hạn kéo thả (Kéo thả 1 BoxCollider vào đây, hoặc để trống nếu không cần giới hạn)")]
	public BoxCollider dragBounds;

	public void BlockInputFor(float duration)
	{
		float targetTime = Time.time + duration;
		if (targetTime > blockInputUntilTime)
		{
			blockInputUntilTime = targetTime;
		}
	}

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		if (mainCamera == null)
		{
			mainCamera = Camera.main;
		}
	}

	private void Update()
	{
		if (Time.time < blockInputUntilTime)
		{
			return;
		}
		if ((Input.GetMouseButton(0) || Input.GetMouseButtonDown(0)) && HandHintMmanager.Instance != null)
		{
			HandHintMmanager.Instance.HideAndResetTimer();
		}
		if (Input.GetMouseButtonDown(0))
		{
			if (GameManager.Instance != null && GameManager.Instance.isGameEnded)
			{
				GameManager.Instance.GotoStore();
				return;
			}
			Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var _, maxDistance, installLayer))
			{
				if (GameManager.Instance != null)
				{
					GameManager.Instance.GotoStore();
				}
				return;
			}
			if (ItemManager.Instance != null && ItemManager.Instance.totalItemsDropped >= itemsToGotoStore)
			{
				if (GameManager.Instance != null)
				{
					GameManager.Instance.GotoStore();
				}
				return;
			}
			MouseDown();
		}
		if (Input.GetMouseButton(0))
		{
			MouseDrag();
		}
		if (Input.GetMouseButtonUp(0))
		{
			MouseUp();
		}
	}

	private void MouseDown()
	{
		Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
		if (!Physics.Raycast(ray, out var hit, maxDistance, itemLayer))
		{
			return;
		}
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Click);
		}
		mouseDownPos = Input.mousePosition;
		ItemController itemController = hit.transform.GetComponent<ItemController>();
		if (itemController != null)
		{
			if (itemController.itemType == ItemType.ClickOnly)
			{
				itemController.onClick?.Invoke();
				itemController.PlayDropAnimations();
				return;
			}
			itemController.onDragStart?.Invoke();
		}
		draggedObject = hit.transform;
		ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
		if (itemGraphic != null)
		{
			itemGraphic.SetSortingLayerToTop();
		}
		dragDepth = mainCamera.WorldToScreenPoint(draggedObject.position).z;
		Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
		offset = draggedObject.position - mouseWorldPos;
	}

	private void MouseDrag()
	{
		if (draggedObject != null)
		{
			Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
			Vector3 targetPos = mouseWorldPos + offset;
			if (useDragBounds && dragBounds != null)
			{
				Bounds b = dragBounds.bounds;
				targetPos.x = Mathf.Clamp(targetPos.x, b.min.x, b.max.x);
				targetPos.y = Mathf.Clamp(targetPos.y, b.min.y, b.max.y);
			}
			draggedObject.position = targetPos;
		}
	}

	private void MouseUp()
	{
		if (!(draggedObject != null))
		{
			return;
		}
		bool isClick = Vector3.Distance(Input.mousePosition, mouseDownPos) <= 10f;
		ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
		ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
		ItemController itemController = draggedObject.GetComponent<ItemController>();
		if (isClick && itemController != null)
		{
			itemController.onClick?.Invoke();
		}
		bool dropSuccess = false;
		bool hitCurtain = false;
		Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, out var _, maxDistance, CurtainLayer))
		{
			hitCurtain = true;
			if (itemController != null)
			{
				if (itemController.dropTarget != null)
				{
					float distance = Vector3.Distance(draggedObject.position, itemController.dropTarget.position);
					if (distance <= itemController.dropDistanceThreshold)
					{
						dropSuccess = true;
					}
				}
				else
				{
					dropSuccess = true;
				}
			}
		}
		if (dropSuccess)
		{
			if (itemGraphic != null)
			{
				itemGraphic.ResetSortingLayer();
			}
			itemController.PlayDropAnimations();
		}
		else if (hitCurtain && itemController == null)
		{
			draggedObject.gameObject.SetActive(false);
		}
		else
		{
			if (itemMovement != null)
			{
				itemMovement.ReturnToSpawn();
			}
			if (itemController != null)
			{
				itemController.onReturn?.Invoke();
			}
		}
		draggedObject = null;
	}
}
