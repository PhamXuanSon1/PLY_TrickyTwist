using UnityEngine;

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
	public FxAudio fxAudio;

	public AudioSource bgm1;

	private AudioSource[] fx = new AudioSource[50];

	private bool isMute = false;

	public void PlayFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			int index = (int)fxType;
			if (fx[index] == null)
			{
				fx[index] = new GameObject("SoundFX_" + fxType).AddComponent<AudioSource>();
			}
			fx[index].clip = data.clip;
			fx[index].Play();
			for (int i = 1; i < data.repeatCount; i++)
			{
				fx[index].PlayOneShot(data.clip);
			}
		}
	}

	public void PlayLoopFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			int index = (int)fxType;
			if (fx[index] == null)
			{
				fx[index] = new GameObject("SoundFX_Loop_" + fxType).AddComponent<AudioSource>();
			}
			fx[index].clip = data.clip;
			fx[index].loop = true;
			fx[index].Play();
		}
	}

	public void StopFx(FxType fxType)
	{
		if (fxType >= FxType.None && (int)fxType < fx.Length && fx[(int)fxType] != null)
		{
			fx[(int)fxType].Stop();
		}
	}

	public void PlayBGM1()
	{
		if (!isMute && bgm1 != null && !bgm1.isPlaying)
		{
			bgm1.Play();
		}
	}

	public void PlayBGM2()
	{
		PlayBGM1();
	}

	private SoundData GetSoundData(FxType type)
	{
		switch (type)
		{
		case FxType.None:
			return fxAudio.None;
		case FxType.Click:
			return fxAudio.ClickBox;
		case FxType.Fan:
			return fxAudio.Fan;
		case FxType.Cream:
			return fxAudio.Cream;
		case FxType.Switch:
			return fxAudio.Switch;
		case FxType.Lighter:
			return fxAudio.Lighter;
		case FxType.Sausage:
			return fxAudio.Sausage;
		case FxType.scissor:
			return fxAudio.Scissor;
		case FxType.watertap:
			return fxAudio.Watertap;
		case FxType.Dog:
			return fxAudio.Dog;
		case FxType.Curtain:
			return fxAudio.Curtain;
		case FxType.Flame:
			return fxAudio.Flame;
		case FxType.Women1:
			return fxAudio.Women1;
		case FxType.Women2:
			return fxAudio.Women2;
		case FxType.Women3:
			return fxAudio.Women3;
		case FxType.Women4:
			return fxAudio.Women4;
		case FxType.Women5:
			return fxAudio.Women5;
		case FxType.Women6:
			return fxAudio.Women6;
		case FxType.Women7:
			return fxAudio.Women7;
		default:
			return null;
		}
	}

	public void MuteFx()
	{
		isMute = true;
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}

	public void Mute()
	{
		if (bgm1 != null)
		{
			bgm1.Stop();
		}
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}
}
