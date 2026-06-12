using UnityEngine;

public class PlaySoundOnEnable : MonoBehaviour
{
	[Tooltip("Chọn loại âm thanh sẽ phát khi Object này được bật lên")]
	public FxType soundToPlay = FxType.None;

	private void OnEnable()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(soundToPlay);
		}
	}
}
