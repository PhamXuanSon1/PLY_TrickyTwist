using UnityEngine;

public class PlaySound : MonoBehaviour
{
	public FxType fxType;

	public FxType sound2;

	public FxType sound3;

	public void Play()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(fxType);
		}
	}

	public void Play2()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound2);
		}
	}

	public void Women()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound3);
		}
	}
}
