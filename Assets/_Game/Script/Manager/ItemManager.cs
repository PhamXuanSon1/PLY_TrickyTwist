using System.Collections.Generic;
using UnityEngine;

public class ItemManager : MonoBehaviour
{
    public static ItemManager Instance;

    public List<ItemController> items = new List<ItemController>();
    
    [Header("Progress")]
    [Tooltip("Tổng số Item đã được thả trúng đích thành công")]
    public int totalItemsDropped = 0;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }

    public void AddDroppedItem()
    {
        totalItemsDropped++;
    }
}
