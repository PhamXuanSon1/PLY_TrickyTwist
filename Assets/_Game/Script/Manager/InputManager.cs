using UnityEngine;

public class InputManager : MonoBehaviour
{
    public Camera mainCamera;
    public LayerMask itemLayer;
    public LayerMask CurtainLayer;
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

    private void Update()
    {
        if (Time.time < blockInputUntilTime) return;

        if (Input.GetMouseButtonDown(0))
            MouseDown();

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

    private void MouseDrag()
    {
        if (draggedObject != null)
        {
            Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
            draggedObject.position = mouseWorldPos + offset;
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

            // kiểm tra va chạm với Curtain
            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, CurtainLayer))
            {
                // nếu va chạm với Curtain thì kích hoạt animation
                if (itemController != null)
                {
                    itemController.PlayDropAnimations();
                }
                else
                {
                    draggedObject.gameObject.SetActive(false);
                }
            }
            else
            {
                // nếu không va chạm với Curtain thì trả về vị trí spawn
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
}
