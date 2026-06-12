using DG.Tweening;
using UnityEngine;

public class ItemMovement : MonoBehaviour
{
	private Vector3 SpawnPos;

	private void Start()
	{
		SpawnPos = base.transform.position;
	}

	public void ReturnToSpawn()
	{
		_ = SpawnPos;
		if (true)
		{
			base.transform.DOMove(SpawnPos, 0.25f).SetEase(Ease.OutQuad);
		}
	}
}
