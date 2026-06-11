using UnityEngine;

public class PlaySound : MonoBehaviour
{
    public FxType fxType;
    public void Play()
    {
        if (Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(fxType);
        }
    }
}
