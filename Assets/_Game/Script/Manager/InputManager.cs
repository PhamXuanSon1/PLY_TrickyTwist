using System.Collections.Generic;
using UnityEngine;

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


    [Header("Store Settings")]
    [Tooltip("Số lượng Item thả trúng đích để kích hoạt tính năng Click bất kỳ đâu cũng đi Store")]
    [UnityEngine.Serialization.FormerlySerializedAs("curtainsToGotoStore")]
    public int itemsToGotoStore = 7;

    private void Update()
    {
        if (Time.time < blockInputUntilTime) return;

        if (Input.GetMouseButton(0) || Input.GetMouseButtonDown(0))
        {
            if (HandHintMmanager.Instance != null)
            {
                HandHintMmanager.Instance.HideAndResetTimer();
            }
        }

        if (Input.GetMouseButtonDown(0))
        {
            // Kiểm tra xem người dùng có click vào Layer Install hay không
            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, installLayer))
            {
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.GotoStore();
                }
                return; // Kết thúc thao tác
            }

            // Nếu đã thả đủ số lượng Item, bất kỳ cú click nào cũng đi đến Store
            if (ItemManager.Instance != null && ItemManager.Instance.totalItemsDropped >= itemsToGotoStore)
            {
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.GotoStore();
                }
                return; // Kết thúc không cho tương tác kéo thả nữa
            }

            MouseDown();
        }

        if (Input.GetMouseButton(0))
            MouseDrag();

        if (Input.GetMouseButtonUp(0))
            MouseUp();
    }

    private void MouseDown()
    {
        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);

        if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, itemLayer))
        {
            // Phát âm thanh Click thông qua Ply_SoundManager (nếu có)
            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(FxType.Click);
            }

            mouseDownPos = Input.mousePosition;

            ItemController itemController = hit.transform.GetComponent<ItemController>();
            if (itemController != null)
            {
                if (itemController.itemType == ItemType.ClickOnly)
                {
                    itemController.onClick?.Invoke();
                    // Logic cho ClickOnly
                    itemController.PlayDropAnimations();
                    return;
                }
                else
                {
                    itemController.onDragStart?.Invoke();
                }
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
    }

    [Header("Drag Bounds Settings")]
    [Tooltip("Bật/Tắt tính năng giới hạn di chuyển")]
    public bool useDragBounds = true;
    [Tooltip("Khung giới hạn kéo thả (Kéo thả 1 BoxCollider vào đây, hoặc để trống nếu không cần giới hạn)")]
    public BoxCollider dragBounds;

    private void MouseDrag()
    {
        if (draggedObject != null)
        {
            Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
            Vector3 targetPos = mouseWorldPos + offset;

            // Nếu có cài đặt khung giới hạn, ép vị trí Item phải nằm trong khung đó
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
        if (draggedObject != null)
        {
            bool isClick = Vector3.Distance(Input.mousePosition, mouseDownPos) <= clickDragThreshold;

            ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
            if (itemGraphic != null)
            {
                itemGraphic.ResetSortingLayer();
            }

            ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
            ItemController itemController = draggedObject.GetComponent<ItemController>();

            if (isClick && itemController != null)
            {
                itemController.onClick?.Invoke();
            }

            // Dùng lại CurtainLayer CỘNG THÊM điều kiện khoảng cách tới dropTarget
            bool dropSuccess = false;
            bool hitCurtain = false;

            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, CurtainLayer))
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
                        // Nếu lỡ không set dropTarget thì chỉ cần thả trúng rèm là tính thành công
                        dropSuccess = true;
                    }
                }
            }

            if (dropSuccess)
            {
                itemController.PlayDropAnimations();
            }
            else
            {
                if (hitCurtain && itemController == null)
                {
                    // Lớp an toàn (code cũ) cho object thiếu ItemController
                    draggedObject.gameObject.SetActive(false);
                }
                else
                {
                    // Nếu không trúng rèm HOẶC thả quá xa đích thì bắt bay về
                    if (itemMovement != null)
                    {
                        itemMovement.ReturnToSpawn();
                    }
                    if (itemController != null)
                    {
                        itemController.onReturn?.Invoke();
                    }
                }
            }


            draggedObject = null;
        }
    }
}
