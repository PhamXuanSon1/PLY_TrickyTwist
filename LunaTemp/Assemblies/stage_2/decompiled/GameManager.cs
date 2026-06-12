using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	public static GameManager Instance;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
	}

	public void GotoStore()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
