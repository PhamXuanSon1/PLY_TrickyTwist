using System.Collections.Generic;
using UnityEngine;

public class ItemGraphic : MonoBehaviour
{
    public List<SpriteRenderer> spriteRenderers = new List<SpriteRenderer>();
    public int sortingOrderOffset = 100;

    // lấy tất cả SpriteRenderer của nó và con của đối tượng này và lưu vào danh sách
    void Start()
    {
        GetSpriteRenderers();   
    }
    public void GetSpriteRenderers()
    {
        spriteRenderers.Clear();
        SpriteRenderer[] renderers = GetComponentsInChildren<SpriteRenderer>(true);
        spriteRenderers.AddRange(renderers);
    }

    // tăng tất cả order in layer của tất cả SpriteRenderer lên 100
    public void SetSortingLayerToTop()
    {
        for(int i = 0; i < spriteRenderers.Count; i++)
        {
            SpriteRenderer sr = spriteRenderers[i];
            sr.sortingOrder += sortingOrderOffset;
        }
    }

    // trả về order in layer ban đầu
    public void ResetSortingLayer()
    {
        for (int i = 0; i < spriteRenderers.Count; i++)
        {
            SpriteRenderer sr = spriteRenderers[i];
            sr.sortingOrder -= sortingOrderOffset;
        }
    }
}
