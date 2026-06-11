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
            ItemController itemController = hit.transform.GetComponent<ItemController>();
            if (itemController != null && itemController.itemType == ItemType.ClickOnly)
            {
                // Logic cho ClickOnly
                itemController.PlayDropAnimations();
                return;
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
            ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
            if (itemGraphic != null)
            {
                itemGraphic.ResetSortingLayer();
            }

            // lấy Item graphic component
            ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
            // kiểm tra va chạm với Curtain
            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, CurtainLayer))
            {
                // nếu va chạm với Curtain thì kích hoạt animation
                ItemController itemController = draggedObject.GetComponent<ItemController>();
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
            }


            draggedObject = null;
        }
    }
}
