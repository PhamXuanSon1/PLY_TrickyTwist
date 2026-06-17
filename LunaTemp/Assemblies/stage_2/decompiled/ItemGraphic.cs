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
		int offset = ((InputManager.Instance != null) ? InputManager.Instance.dragSortingOffset : sortingOrderOffset);
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			spriteRenderers[i].sortingOrder += offset;
		}
	}

	public void ResetSortingLayer()
	{
		int offset = ((InputManager.Instance != null) ? InputManager.Instance.dragSortingOffset : sortingOrderOffset);
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			spriteRenderers[i].sortingOrder -= offset;
		}
	}
}
