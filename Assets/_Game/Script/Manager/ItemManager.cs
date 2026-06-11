using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class GirlEvolutionData
{
    public GameObject girlObject;
    [Tooltip("Số rèm ĐÃ GỠ để cô gái này BỊ TẮT và chuyển sang cô tiếp theo (Ví dụ: 2 nghĩa là gỡ xong 2 rèm thì cô này biến mất)")]
    public int unlockAtCurtainCount;
}

public class ItemManager : MonoBehaviour
{
    public List<ItemController> items = new List<ItemController>();
    
    [Header("Girl Evolution System")]
    [Tooltip("Danh sách các cô gái và giới hạn số rèm của từng người")]
    public List<GirlEvolutionData> girlEvolutions = new List<GirlEvolutionData>();

    private int currentGirlIndex = -99; 
    private float blockEvolutionUntilTime = 0f;

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
        // Sắp xếp danh sách từ thấp đến cao để đảm bảo an toàn
        girlEvolutions.Sort((a, b) => a.unlockAtCurtainCount.CompareTo(b.unlockAtCurtainCount));
    }

    public void DelayEvolutionCheckFor(float duration)
    {
        float targetTime = Time.time + duration;
        if (targetTime > blockEvolutionUntilTime)
        {
            blockEvolutionUntilTime = targetTime;
        }
    }

    private void Update()
    {
        if (girlEvolutions.Count == 0 || CurtainManager.Instance == null) return;
        
        // Đợi cho đến khi các Anim Objs chạy xong mới cập nhật hình ảnh
        if (Time.time < blockEvolutionUntilTime) return;

        int removedCount = CurtainManager.Instance.GetRemovedCurtainCount();
        
        // Mặc định chọn cô gái cuối cùng nếu đã vượt qua hết các mốc
        int newGirlIndex = girlEvolutions.Count - 1;

        // Tìm cô gái có giới hạn lớn hơn số rèm hiện tại
        for (int i = 0; i < girlEvolutions.Count; i++)
        {
            if (removedCount < girlEvolutions[i].unlockAtCurtainCount)
            {
                newGirlIndex = i;
                break; // Dừng lại ngay khi tìm thấy cô gái phù hợp
            }
        }

        // Nếu thay đổi cô gái thì tiến hành chuyển
        if (newGirlIndex != currentGirlIndex)
        {
            currentGirlIndex = newGirlIndex;
            UpdateGirlDisplay();
        }
    }

    private void UpdateGirlDisplay()
    {
        for (int i = 0; i < girlEvolutions.Count; i++)
        {
            if (girlEvolutions[i] != null && girlEvolutions[i].girlObject != null)
            {
                // Chỉ bật cô gái nếu i khớp với currentGirlIndex
                girlEvolutions[i].girlObject.SetActive(i == currentGirlIndex);
            }
        }
    }
}
