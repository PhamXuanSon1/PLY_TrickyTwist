using UnityEngine;

public class ItemManager : MonoBehaviour
{
    public GameObject[] listItem;
    





    public static ItemManager Instance;
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }
    
}
