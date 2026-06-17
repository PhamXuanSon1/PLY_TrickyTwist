using Luna.Unity;
using UnityEngine;
using UnityEngine.Events;

public class GameManager : MonoBehaviour
{
	public FxType fxStartVoice = FxType.StartVoice;

	public static GameManager Instance;

	[Header("Game State")]
	public UnityEvent onLoseGame;

	[HideInInspector]
	public bool isGameEnded = false;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
	}

	private void Start()
	{
		Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(fxStartVoice);
	}

	public void GotoStore()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}

	public void LoseGame()
	{
		isGameEnded = true;
		onLoseGame?.Invoke();
	}
}
