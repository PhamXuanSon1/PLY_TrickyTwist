using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class GirlEvolutionData
{
    public GameObject girlObject;
    [Tooltip("Số rèm ĐÃ BỊ GỠ để cô gái này xuất hiện (Ví dụ: 0 là ban đầu, 2 là sau khi gỡ 2 rèm)")]
    public int unlockAtCurtainCount;
}

public class ItemManager : MonoBehaviour
{
    public List<ItemController> items = new List<ItemController>();
    
    [Header("Girl Evolution System")]
    [Tooltip("Danh sách các cô gái và điều kiện mở khóa riêng biệt")]
    public List<GirlEvolutionData> girlEvolutions = new List<GirlEvolutionData>();

    private int currentGirlIndex = 0;

    public static ItemManager Instance;
    
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }

    private void Start()
    {
        // Sắp xếp danh sách theo điều kiện số lượng rèm từ thấp đến cao để đảm bảo logic đúng
        girlEvolutions.Sort((a, b) => a.unlockAtCurtainCount.CompareTo(b.unlockAtCurtainCount));

        // Khởi tạo hiển thị cô gái ban đầu
        UpdateGirlDisplay();

        // Đăng ký nhận sự kiện rèm bị gỡ
        if (CurtainManager.Instance != null)
        {
            CurtainManager.Instance.onCurtainRemoved.AddListener(CheckAndChangeGirl);
        }
    }

    private void CheckAndChangeGirl()
    {
        if (girlEvolutions.Count == 0) return;

        if (CurtainManager.Instance != null)
        {
            int removedCount = CurtainManager.Instance.GetRemovedCurtainCount();
            int newGirlIndex = 0;

            // Tìm cô gái mới nhất thỏa mãn điều kiện số lượng rèm bị gỡ
            for (int i = 0; i < girlEvolutions.Count; i++)
            {
                if (removedCount >= girlEvolutions[i].unlockAtCurtainCount)
                {
                    newGirlIndex = i;
                }
            }

            // Nếu thay đổi cô gái thì mới tiến hành chuyển
            if (newGirlIndex != currentGirlIndex)
            {
                currentGirlIndex = newGirlIndex;
                UpdateGirlDisplay();
            }
        }
    }

    private void UpdateGirlDisplay()
    {
        for (int i = 0; i < girlEvolutions.Count; i++)
        {
            if (girlEvolutions[i] != null && girlEvolutions[i].girlObject != null)
            {
                girlEvolutions[i].girlObject.SetActive(i == currentGirlIndex);
            }
        }
    }
}
