using UnityEngine;
using DG.Tweening;

public class ItemMovement : MonoBehaviour
{
    private Vector3 SpawnPos;

    private void Start()
    {
        SpawnPos = transform.position;
    }

    public void ReturnToSpawn()
    {
        if (SpawnPos != null)
        {
            transform.DOMove(SpawnPos, 0.25f).SetEase(Ease.OutQuad);
        }
    }
}
