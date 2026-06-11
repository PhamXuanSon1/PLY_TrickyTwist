using UnityEngine;

public class PlaySoundOnEnable : MonoBehaviour
{
    [Tooltip("Chọn loại âm thanh sẽ phát khi Object này được bật lên")]
    public FxType soundToPlay = FxType.None;

    private void OnEnable()
    {
        // Hàm OnEnable tự động chạy ngay khi GameObject chứa nó được SetActive(true)
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(soundToPlay);
        }
    }

}
