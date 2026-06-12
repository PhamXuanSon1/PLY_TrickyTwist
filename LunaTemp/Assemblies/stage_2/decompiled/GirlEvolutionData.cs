using System;
using UnityEngine;

[Serializable]
public class GirlEvolutionData
{
	public GameObject girlObject;

	[Tooltip("Số rèm ĐÃ GỠ để cô gái này BỊ TẮT và chuyển sang cô tiếp theo (Ví dụ: 2 nghĩa là gỡ xong 2 rèm thì cô này biến mất)")]
	public int unlockAtCurtainCount;
}
