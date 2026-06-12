using System.Collections.Generic;
using UnityEngine;

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
		girlEvolutions.Sort((GirlEvolutionData a, GirlEvolutionData b) => a.unlockAtCurtainCount.CompareTo(b.unlockAtCurtainCount));
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
		if (girlEvolutions.Count == 0 || CurtainManager.Instance == null || Time.time < blockEvolutionUntilTime)
		{
			return;
		}
		int removedCount = CurtainManager.Instance.GetRemovedCurtainCount();
		int newGirlIndex = girlEvolutions.Count - 1;
		for (int i = 0; i < girlEvolutions.Count; i++)
		{
			if (removedCount < girlEvolutions[i].unlockAtCurtainCount)
			{
				newGirlIndex = i;
				break;
			}
		}
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
				girlEvolutions[i].girlObject.SetActive(i == currentGirlIndex);
			}
		}
	}
}
