using System.Collections.Generic;
using UnityEngine;

public class ItemGraphic : MonoBehaviour
{
	public List<SpriteRenderer> spriteRenderers = new List<SpriteRenderer>();

	public int sortingOrderOffset = 100;

	private void Start()
	{
		GetSpriteRenderers();
	}

	public void GetSpriteRenderers()
	{
		spriteRenderers.Clear();
		SpriteRenderer[] renderers = GetComponentsInChildren<SpriteRenderer>(true);
		spriteRenderers.AddRange(renderers);
	}

	public void SetSortingLayerToTop()
	{
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			spriteRenderers[i].sortingOrder += sortingOrderOffset;
		}
	}

	public void ResetSortingLayer()
	{
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			spriteRenderers[i].sortingOrder -= sortingOrderOffset;
		}
	}
}
