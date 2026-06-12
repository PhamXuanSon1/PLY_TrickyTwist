var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.JointSpring' )
  var i4747 = data
  i4746.spring = i4747[0]
  i4746.damper = i4747[1]
  i4746.targetPosition = i4747[2]
  return i4746
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4748 = root || request.c( 'UnityEngine.JointMotor' )
  var i4749 = data
  i4748.m_TargetVelocity = i4749[0]
  i4748.m_Force = i4749[1]
  i4748.m_FreeSpin = i4749[2]
  return i4748
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4750 = root || request.c( 'UnityEngine.JointLimits' )
  var i4751 = data
  i4750.m_Min = i4751[0]
  i4750.m_Max = i4751[1]
  i4750.m_Bounciness = i4751[2]
  i4750.m_BounceMinVelocity = i4751[3]
  i4750.m_ContactDistance = i4751[4]
  i4750.minBounce = i4751[5]
  i4750.maxBounce = i4751[6]
  return i4750
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4752 = root || request.c( 'UnityEngine.JointDrive' )
  var i4753 = data
  i4752.m_PositionSpring = i4753[0]
  i4752.m_PositionDamper = i4753[1]
  i4752.m_MaximumForce = i4753[2]
  i4752.m_UseAcceleration = i4753[3]
  return i4752
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4754 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4755 = data
  i4754.m_Spring = i4755[0]
  i4754.m_Damper = i4755[1]
  return i4754
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4756 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4757 = data
  i4756.m_Limit = i4757[0]
  i4756.m_Bounciness = i4757[1]
  i4756.m_ContactDistance = i4757[2]
  return i4756
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4759 = data
  i4758.m_ExtremumSlip = i4759[0]
  i4758.m_ExtremumValue = i4759[1]
  i4758.m_AsymptoteSlip = i4759[2]
  i4758.m_AsymptoteValue = i4759[3]
  i4758.m_Stiffness = i4759[4]
  return i4758
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4760 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4761 = data
  i4760.m_LowerAngle = i4761[0]
  i4760.m_UpperAngle = i4761[1]
  return i4760
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4762 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4763 = data
  i4762.m_MotorSpeed = i4763[0]
  i4762.m_MaximumMotorTorque = i4763[1]
  return i4762
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4764 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4765 = data
  i4764.m_DampingRatio = i4765[0]
  i4764.m_Frequency = i4765[1]
  i4764.m_Angle = i4765[2]
  return i4764
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4766 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4767 = data
  i4766.m_LowerTranslation = i4767[0]
  i4766.m_UpperTranslation = i4767[1]
  return i4766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4768 = root || new pc.UnityMaterial()
  var i4769 = data
  i4768.name = i4769[0]
  request.r(i4769[1], i4769[2], 0, i4768, 'shader')
  i4768.renderQueue = i4769[3]
  i4768.enableInstancing = !!i4769[4]
  var i4771 = i4769[5]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4771[i + 0]) );
  }
  i4768.floatParameters = i4770
  var i4773 = i4769[6]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 1) {
    i4772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4773[i + 0]) );
  }
  i4768.colorParameters = i4772
  var i4775 = i4769[7]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4775[i + 0]) );
  }
  i4768.vectorParameters = i4774
  var i4777 = i4769[8]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 1) {
    i4776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4777[i + 0]) );
  }
  i4768.textureParameters = i4776
  var i4779 = i4769[9]
  var i4778 = []
  for(var i = 0; i < i4779.length; i += 1) {
    i4778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4779[i + 0]) );
  }
  i4768.materialFlags = i4778
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4783 = data
  i4782.name = i4783[0]
  i4782.value = i4783[1]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4787 = data
  i4786.name = i4787[0]
  i4786.value = new pc.Color(i4787[1], i4787[2], i4787[3], i4787[4])
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4791 = data
  i4790.name = i4791[0]
  i4790.value = new pc.Vec4( i4791[1], i4791[2], i4791[3], i4791[4] )
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4795 = data
  i4794.name = i4795[0]
  request.r(i4795[1], i4795[2], 0, i4794, 'value')
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4799 = data
  i4798.name = i4799[0]
  i4798.enabled = !!i4799[1]
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4801 = data
  i4800.name = i4801[0]
  i4800.width = i4801[1]
  i4800.height = i4801[2]
  i4800.mipmapCount = i4801[3]
  i4800.anisoLevel = i4801[4]
  i4800.filterMode = i4801[5]
  i4800.hdr = !!i4801[6]
  i4800.format = i4801[7]
  i4800.wrapMode = i4801[8]
  i4800.alphaIsTransparency = !!i4801[9]
  i4800.alphaSource = i4801[10]
  i4800.graphicsFormat = i4801[11]
  i4800.sRGBTexture = !!i4801[12]
  i4800.desiredColorSpace = i4801[13]
  i4800.wrapU = i4801[14]
  i4800.wrapV = i4801[15]
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4803 = data
  i4802.name = i4803[0]
  i4802.halfPrecision = !!i4803[1]
  i4802.useSimplification = !!i4803[2]
  i4802.useUInt32IndexFormat = !!i4803[3]
  i4802.vertexCount = i4803[4]
  i4802.aabb = i4803[5]
  var i4805 = i4803[6]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.push( !!i4805[i + 0] );
  }
  i4802.streams = i4804
  i4802.vertices = i4803[7]
  var i4807 = i4803[8]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 1) {
    i4806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4807[i + 0]) );
  }
  i4802.subMeshes = i4806
  var i4809 = i4803[9]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 16) {
    i4808.push( new pc.Mat4().setData(i4809[i + 0], i4809[i + 1], i4809[i + 2], i4809[i + 3],  i4809[i + 4], i4809[i + 5], i4809[i + 6], i4809[i + 7],  i4809[i + 8], i4809[i + 9], i4809[i + 10], i4809[i + 11],  i4809[i + 12], i4809[i + 13], i4809[i + 14], i4809[i + 15]) );
  }
  i4802.bindposes = i4808
  var i4811 = i4803[10]
  var i4810 = []
  for(var i = 0; i < i4811.length; i += 1) {
    i4810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4811[i + 0]) );
  }
  i4802.blendShapes = i4810
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4817 = data
  i4816.triangles = i4817[0]
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4823 = data
  i4822.name = i4823[0]
  var i4825 = i4823[1]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 1) {
    i4824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4825[i + 0]) );
  }
  i4822.frames = i4824
  return i4822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4827 = data
  i4826.name = i4827[0]
  i4826.index = i4827[1]
  i4826.startup = !!i4827[2]
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4829 = data
  i4828.aspect = i4829[0]
  i4828.orthographic = !!i4829[1]
  i4828.orthographicSize = i4829[2]
  i4828.backgroundColor = new pc.Color(i4829[3], i4829[4], i4829[5], i4829[6])
  i4828.nearClipPlane = i4829[7]
  i4828.farClipPlane = i4829[8]
  i4828.fieldOfView = i4829[9]
  i4828.depth = i4829[10]
  i4828.clearFlags = i4829[11]
  i4828.cullingMask = i4829[12]
  i4828.rect = i4829[13]
  request.r(i4829[14], i4829[15], 0, i4828, 'targetTexture')
  i4828.usePhysicalProperties = !!i4829[16]
  i4828.focalLength = i4829[17]
  i4828.sensorSize = new pc.Vec2( i4829[18], i4829[19] )
  i4828.lensShift = new pc.Vec2( i4829[20], i4829[21] )
  i4828.gateFit = i4829[22]
  i4828.commandBufferCount = i4829[23]
  i4828.cameraType = i4829[24]
  i4828.enabled = !!i4829[25]
  return i4828
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i4830 = root || request.c( 'AutoCameraFit' )
  var i4831 = data
  request.r(i4831[0], i4831[1], 0, i4830, 'canvasBtn')
  request.r(i4831[2], i4831[3], 0, i4830, 'targetArea')
  i4830.paddingLandscape = i4831[4]
  i4830.paddingPortrait = i4831[5]
  i4830.extraPaddingSmallScreen = i4831[6]
  i4830.smallScreenThreshold = i4831[7]
  i4830.autoUpdateOnResize = !!i4831[8]
  i4830.adjustInEditMode = !!i4831[9]
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4833 = data
  i4832.name = i4833[0]
  i4832.tagId = i4833[1]
  i4832.enabled = !!i4833[2]
  i4832.isStatic = !!i4833[3]
  i4832.layer = i4833[4]
  return i4832
}

Deserializers["InputManager"] = function (request, data, root) {
  var i4834 = root || request.c( 'InputManager' )
  var i4835 = data
  request.r(i4835[0], i4835[1], 0, i4834, 'mainCamera')
  i4834.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i4835[2] )
  i4834.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i4835[3] )
  i4834.installLayer = UnityEngine.LayerMask.FromIntegerValue( i4835[4] )
  i4834.maxDistance = i4835[5]
  i4834.curtainsToGotoStore = i4835[6]
  request.r(i4835[7], i4835[8], 0, i4834, 'dragBounds')
  return i4834
}

Deserializers["CurtainManager"] = function (request, data, root) {
  var i4836 = root || request.c( 'CurtainManager' )
  var i4837 = data
  var i4839 = i4837[0]
  var i4838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i4839.length; i += 2) {
  request.r(i4839[i + 0], i4839[i + 1], 1, i4838, '')
  }
  i4836.curtains = i4838
  i4836.onCurtainRemoved = request.d('UnityEngine.Events.UnityEvent', i4837[1], i4836.onCurtainRemoved)
  return i4836
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4842 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4843 = data
  i4842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4843[0], i4842.m_PersistentCalls)
  return i4842
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4845 = data
  var i4847 = i4845[0]
  var i4846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.add(request.d('UnityEngine.Events.PersistentCall', i4847[i + 0]));
  }
  i4844.m_Calls = i4846
  return i4844
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4850 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4851 = data
  request.r(i4851[0], i4851[1], 0, i4850, 'm_Target')
  i4850.m_TargetAssemblyTypeName = i4851[2]
  i4850.m_MethodName = i4851[3]
  i4850.m_Mode = i4851[4]
  i4850.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4851[5], i4850.m_Arguments)
  i4850.m_CallState = i4851[6]
  return i4850
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i4852 = root || request.c( 'HandHintMmanager' )
  var i4853 = data
  var i4855 = i4853[0]
  var i4854 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i4855.length; i += 2) {
  request.r(i4855[i + 0], i4855[i + 1], 1, i4854, '')
  }
  i4852.hintItems = i4854
  request.r(i4853[1], i4853[2], 0, i4852, 'handHintObject')
  request.r(i4853[3], i4853[4], 0, i4852, 'handAnimator')
  i4852.idleTimeToHint = i4853[5]
  i4852.dragAnimDuration = i4853[6]
  request.r(i4853[7], i4853[8], 0, i4852, 'startHintPos')
  request.r(i4853[9], i4853[10], 0, i4852, 'endHintPos')
  return i4852
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4858 = root || request.c( 'GameManager' )
  var i4859 = data
  return i4858
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i4860 = root || request.c( 'ItemManager' )
  var i4861 = data
  var i4863 = i4861[0]
  var i4862 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i4863.length; i += 2) {
  request.r(i4863[i + 0], i4863[i + 1], 1, i4862, '')
  }
  i4860.items = i4862
  var i4865 = i4861[1]
  var i4864 = new (System.Collections.Generic.List$1(Bridge.ns('GirlEvolutionData')))
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.add(request.d('GirlEvolutionData', i4865[i + 0]));
  }
  i4860.girlEvolutions = i4864
  return i4860
}

Deserializers["GirlEvolutionData"] = function (request, data, root) {
  var i4868 = root || request.c( 'GirlEvolutionData' )
  var i4869 = data
  request.r(i4869[0], i4869[1], 0, i4868, 'girlObject')
  i4868.unlockAtCurtainCount = i4869[2]
  return i4868
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i4870 = root || request.c( 'Ply_SoundManager' )
  var i4871 = data
  i4870.fxAudio = request.d('FxAudio', i4871[0], i4870.fxAudio)
  request.r(i4871[1], i4871[2], 0, i4870, 'bgm1')
  return i4870
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i4872 = root || request.c( 'FxAudio' )
  var i4873 = data
  i4872.None = request.d('SoundData', i4873[0], i4872.None)
  i4872.ClickBox = request.d('SoundData', i4873[1], i4872.ClickBox)
  i4872.Fan = request.d('SoundData', i4873[2], i4872.Fan)
  i4872.Cream = request.d('SoundData', i4873[3], i4872.Cream)
  i4872.Switch = request.d('SoundData', i4873[4], i4872.Switch)
  i4872.Lighter = request.d('SoundData', i4873[5], i4872.Lighter)
  i4872.Sausage = request.d('SoundData', i4873[6], i4872.Sausage)
  i4872.Scissor = request.d('SoundData', i4873[7], i4872.Scissor)
  i4872.Watertap = request.d('SoundData', i4873[8], i4872.Watertap)
  i4872.Dog = request.d('SoundData', i4873[9], i4872.Dog)
  i4872.Curtain = request.d('SoundData', i4873[10], i4872.Curtain)
  i4872.Flame = request.d('SoundData', i4873[11], i4872.Flame)
  i4872.Women1 = request.d('SoundData', i4873[12], i4872.Women1)
  i4872.Women2 = request.d('SoundData', i4873[13], i4872.Women2)
  i4872.Women3 = request.d('SoundData', i4873[14], i4872.Women3)
  i4872.Women4 = request.d('SoundData', i4873[15], i4872.Women4)
  i4872.Women5 = request.d('SoundData', i4873[16], i4872.Women5)
  i4872.Women6 = request.d('SoundData', i4873[17], i4872.Women6)
  i4872.Women7 = request.d('SoundData', i4873[18], i4872.Women7)
  return i4872
}

Deserializers["SoundData"] = function (request, data, root) {
  var i4874 = root || request.c( 'SoundData' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'clip')
  i4874.repeatCount = i4875[2]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4877 = data
  request.r(i4877[0], i4877[1], 0, i4876, 'clip')
  request.r(i4877[2], i4877[3], 0, i4876, 'outputAudioMixerGroup')
  i4876.playOnAwake = !!i4877[4]
  i4876.loop = !!i4877[5]
  i4876.time = i4877[6]
  i4876.volume = i4877[7]
  i4876.pitch = i4877[8]
  i4876.enabled = !!i4877[9]
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4879 = data
  i4878.pivot = new pc.Vec2( i4879[0], i4879[1] )
  i4878.anchorMin = new pc.Vec2( i4879[2], i4879[3] )
  i4878.anchorMax = new pc.Vec2( i4879[4], i4879[5] )
  i4878.sizeDelta = new pc.Vec2( i4879[6], i4879[7] )
  i4878.anchoredPosition3D = new pc.Vec3( i4879[8], i4879[9], i4879[10] )
  i4878.rotation = new pc.Quat(i4879[11], i4879[12], i4879[13], i4879[14])
  i4878.scale = new pc.Vec3( i4879[15], i4879[16], i4879[17] )
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4881 = data
  i4880.planeDistance = i4881[0]
  i4880.referencePixelsPerUnit = i4881[1]
  i4880.isFallbackOverlay = !!i4881[2]
  i4880.renderMode = i4881[3]
  i4880.renderOrder = i4881[4]
  i4880.sortingLayerName = i4881[5]
  i4880.sortingOrder = i4881[6]
  i4880.scaleFactor = i4881[7]
  request.r(i4881[8], i4881[9], 0, i4880, 'worldCamera')
  i4880.overrideSorting = !!i4881[10]
  i4880.pixelPerfect = !!i4881[11]
  i4880.targetDisplay = i4881[12]
  i4880.overridePixelPerfect = !!i4881[13]
  i4880.enabled = !!i4881[14]
  return i4880
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4882 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4883 = data
  i4882.m_UiScaleMode = i4883[0]
  i4882.m_ReferencePixelsPerUnit = i4883[1]
  i4882.m_ScaleFactor = i4883[2]
  i4882.m_ReferenceResolution = new pc.Vec2( i4883[3], i4883[4] )
  i4882.m_ScreenMatchMode = i4883[5]
  i4882.m_MatchWidthOrHeight = i4883[6]
  i4882.m_PhysicalUnit = i4883[7]
  i4882.m_FallbackScreenDPI = i4883[8]
  i4882.m_DefaultSpriteDPI = i4883[9]
  i4882.m_DynamicPixelsPerUnit = i4883[10]
  i4882.m_PresetInfoIsWorld = !!i4883[11]
  return i4882
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4884 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4885 = data
  i4884.m_IgnoreReversedGraphics = !!i4885[0]
  i4884.m_BlockingObjects = i4885[1]
  i4884.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4885[2] )
  return i4884
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i4886 = root || request.c( 'ProgressBarUI' )
  var i4887 = data
  request.r(i4887[0], i4887[1], 0, i4886, 'fillImage')
  request.r(i4887[2], i4887[3], 0, i4886, 'progressText')
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4889 = data
  i4888.cullTransparentMesh = !!i4889[0]
  return i4888
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4890 = root || request.c( 'UnityEngine.UI.Image' )
  var i4891 = data
  request.r(i4891[0], i4891[1], 0, i4890, 'm_Sprite')
  i4890.m_Type = i4891[2]
  i4890.m_PreserveAspect = !!i4891[3]
  i4890.m_FillCenter = !!i4891[4]
  i4890.m_FillMethod = i4891[5]
  i4890.m_FillAmount = i4891[6]
  i4890.m_FillClockwise = !!i4891[7]
  i4890.m_FillOrigin = i4891[8]
  i4890.m_UseSpriteMesh = !!i4891[9]
  i4890.m_PixelsPerUnitMultiplier = i4891[10]
  request.r(i4891[11], i4891[12], 0, i4890, 'm_Material')
  i4890.m_Maskable = !!i4891[13]
  i4890.m_Color = new pc.Color(i4891[14], i4891[15], i4891[16], i4891[17])
  i4890.m_RaycastTarget = !!i4891[18]
  i4890.m_RaycastPadding = new pc.Vec4( i4891[19], i4891[20], i4891[21], i4891[22] )
  return i4890
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4892 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4893 = data
  i4892.m_hasFontAssetChanged = !!i4893[0]
  request.r(i4893[1], i4893[2], 0, i4892, 'm_baseMaterial')
  i4892.m_maskOffset = new pc.Vec4( i4893[3], i4893[4], i4893[5], i4893[6] )
  i4892.m_text = i4893[7]
  i4892.m_isRightToLeft = !!i4893[8]
  request.r(i4893[9], i4893[10], 0, i4892, 'm_fontAsset')
  request.r(i4893[11], i4893[12], 0, i4892, 'm_sharedMaterial')
  var i4895 = i4893[13]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 2) {
  request.r(i4895[i + 0], i4895[i + 1], 2, i4894, '')
  }
  i4892.m_fontSharedMaterials = i4894
  request.r(i4893[14], i4893[15], 0, i4892, 'm_fontMaterial')
  var i4897 = i4893[16]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 2) {
  request.r(i4897[i + 0], i4897[i + 1], 2, i4896, '')
  }
  i4892.m_fontMaterials = i4896
  i4892.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4893[17], i4893[18], i4893[19], i4893[20])
  i4892.m_fontColor = new pc.Color(i4893[21], i4893[22], i4893[23], i4893[24])
  i4892.m_enableVertexGradient = !!i4893[25]
  i4892.m_colorMode = i4893[26]
  i4892.m_fontColorGradient = request.d('TMPro.VertexGradient', i4893[27], i4892.m_fontColorGradient)
  request.r(i4893[28], i4893[29], 0, i4892, 'm_fontColorGradientPreset')
  request.r(i4893[30], i4893[31], 0, i4892, 'm_spriteAsset')
  i4892.m_tintAllSprites = !!i4893[32]
  request.r(i4893[33], i4893[34], 0, i4892, 'm_StyleSheet')
  i4892.m_TextStyleHashCode = i4893[35]
  i4892.m_overrideHtmlColors = !!i4893[36]
  i4892.m_faceColor = UnityEngine.Color32.ConstructColor(i4893[37], i4893[38], i4893[39], i4893[40])
  i4892.m_fontSize = i4893[41]
  i4892.m_fontSizeBase = i4893[42]
  i4892.m_fontWeight = i4893[43]
  i4892.m_enableAutoSizing = !!i4893[44]
  i4892.m_fontSizeMin = i4893[45]
  i4892.m_fontSizeMax = i4893[46]
  i4892.m_fontStyle = i4893[47]
  i4892.m_HorizontalAlignment = i4893[48]
  i4892.m_VerticalAlignment = i4893[49]
  i4892.m_textAlignment = i4893[50]
  i4892.m_characterSpacing = i4893[51]
  i4892.m_wordSpacing = i4893[52]
  i4892.m_lineSpacing = i4893[53]
  i4892.m_lineSpacingMax = i4893[54]
  i4892.m_paragraphSpacing = i4893[55]
  i4892.m_charWidthMaxAdj = i4893[56]
  i4892.m_TextWrappingMode = i4893[57]
  i4892.m_wordWrappingRatios = i4893[58]
  i4892.m_overflowMode = i4893[59]
  request.r(i4893[60], i4893[61], 0, i4892, 'm_linkedTextComponent')
  request.r(i4893[62], i4893[63], 0, i4892, 'parentLinkedComponent')
  i4892.m_enableKerning = !!i4893[64]
  var i4899 = i4893[65]
  var i4898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4899.length; i += 1) {
    i4898.add(i4899[i + 0]);
  }
  i4892.m_ActiveFontFeatures = i4898
  i4892.m_enableExtraPadding = !!i4893[66]
  i4892.checkPaddingRequired = !!i4893[67]
  i4892.m_isRichText = !!i4893[68]
  i4892.m_parseCtrlCharacters = !!i4893[69]
  i4892.m_isOrthographic = !!i4893[70]
  i4892.m_isCullingEnabled = !!i4893[71]
  i4892.m_horizontalMapping = i4893[72]
  i4892.m_verticalMapping = i4893[73]
  i4892.m_uvLineOffset = i4893[74]
  i4892.m_geometrySortingOrder = i4893[75]
  i4892.m_IsTextObjectScaleStatic = !!i4893[76]
  i4892.m_VertexBufferAutoSizeReduction = !!i4893[77]
  i4892.m_useMaxVisibleDescender = !!i4893[78]
  i4892.m_pageToDisplay = i4893[79]
  i4892.m_margin = new pc.Vec4( i4893[80], i4893[81], i4893[82], i4893[83] )
  i4892.m_isUsingLegacyAnimationComponent = !!i4893[84]
  i4892.m_isVolumetricText = !!i4893[85]
  request.r(i4893[86], i4893[87], 0, i4892, 'm_Material')
  i4892.m_EmojiFallbackSupport = !!i4893[88]
  i4892.m_Maskable = !!i4893[89]
  i4892.m_Color = new pc.Color(i4893[90], i4893[91], i4893[92], i4893[93])
  i4892.m_RaycastTarget = !!i4893[94]
  i4892.m_RaycastPadding = new pc.Vec4( i4893[95], i4893[96], i4893[97], i4893[98] )
  return i4892
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4902 = root || request.c( 'TMPro.VertexGradient' )
  var i4903 = data
  i4902.topLeft = new pc.Color(i4903[0], i4903[1], i4903[2], i4903[3])
  i4902.topRight = new pc.Color(i4903[4], i4903[5], i4903[6], i4903[7])
  i4902.bottomLeft = new pc.Color(i4903[8], i4903[9], i4903[10], i4903[11])
  i4902.bottomRight = new pc.Color(i4903[12], i4903[13], i4903[14], i4903[15])
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4907 = data
  request.r(i4907[0], i4907[1], 0, i4906, 'animatorController')
  request.r(i4907[2], i4907[3], 0, i4906, 'avatar')
  i4906.updateMode = i4907[4]
  i4906.hasTransformHierarchy = !!i4907[5]
  i4906.applyRootMotion = !!i4907[6]
  var i4909 = i4907[7]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 2) {
  request.r(i4909[i + 0], i4909[i + 1], 2, i4908, '')
  }
  i4906.humanBones = i4908
  i4906.enabled = !!i4907[8]
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4913 = data
  i4912.color = new pc.Color(i4913[0], i4913[1], i4913[2], i4913[3])
  request.r(i4913[4], i4913[5], 0, i4912, 'sprite')
  i4912.flipX = !!i4913[6]
  i4912.flipY = !!i4913[7]
  i4912.drawMode = i4913[8]
  i4912.size = new pc.Vec2( i4913[9], i4913[10] )
  i4912.tileMode = i4913[11]
  i4912.adaptiveModeThreshold = i4913[12]
  i4912.maskInteraction = i4913[13]
  i4912.spriteSortPoint = i4913[14]
  i4912.enabled = !!i4913[15]
  request.r(i4913[16], i4913[17], 0, i4912, 'sharedMaterial')
  var i4915 = i4913[18]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 2) {
  request.r(i4915[i + 0], i4915[i + 1], 2, i4914, '')
  }
  i4912.sharedMaterials = i4914
  i4912.receiveShadows = !!i4913[19]
  i4912.shadowCastingMode = i4913[20]
  i4912.sortingLayerID = i4913[21]
  i4912.sortingOrder = i4913[22]
  i4912.lightmapIndex = i4913[23]
  i4912.lightmapSceneIndex = i4913[24]
  i4912.lightmapScaleOffset = new pc.Vec4( i4913[25], i4913[26], i4913[27], i4913[28] )
  i4912.lightProbeUsage = i4913[29]
  i4912.reflectionProbeUsage = i4913[30]
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4917 = data
  i4916.center = new pc.Vec3( i4917[0], i4917[1], i4917[2] )
  i4916.size = new pc.Vec3( i4917[3], i4917[4], i4917[5] )
  i4916.enabled = !!i4917[6]
  i4916.isTrigger = !!i4917[7]
  request.r(i4917[8], i4917[9], 0, i4916, 'material')
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4919 = data
  request.r(i4919[0], i4919[1], 0, i4918, 'additionalVertexStreams')
  i4918.enabled = !!i4919[2]
  request.r(i4919[3], i4919[4], 0, i4918, 'sharedMaterial')
  var i4921 = i4919[5]
  var i4920 = []
  for(var i = 0; i < i4921.length; i += 2) {
  request.r(i4921[i + 0], i4921[i + 1], 2, i4920, '')
  }
  i4918.sharedMaterials = i4920
  i4918.receiveShadows = !!i4919[6]
  i4918.shadowCastingMode = i4919[7]
  i4918.sortingLayerID = i4919[8]
  i4918.sortingOrder = i4919[9]
  i4918.lightmapIndex = i4919[10]
  i4918.lightmapSceneIndex = i4919[11]
  i4918.lightmapScaleOffset = new pc.Vec4( i4919[12], i4919[13], i4919[14], i4919[15] )
  i4918.lightProbeUsage = i4919[16]
  i4918.reflectionProbeUsage = i4919[17]
  return i4918
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i4922 = root || request.c( 'TMPro.TextMeshPro' )
  var i4923 = data
  i4922._SortingLayer = i4923[0]
  i4922._SortingLayerID = i4923[1]
  i4922._SortingOrder = i4923[2]
  i4922.m_hasFontAssetChanged = !!i4923[3]
  request.r(i4923[4], i4923[5], 0, i4922, 'm_renderer')
  i4922.m_maskType = i4923[6]
  i4922.m_text = i4923[7]
  i4922.m_isRightToLeft = !!i4923[8]
  request.r(i4923[9], i4923[10], 0, i4922, 'm_fontAsset')
  request.r(i4923[11], i4923[12], 0, i4922, 'm_sharedMaterial')
  var i4925 = i4923[13]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 2) {
  request.r(i4925[i + 0], i4925[i + 1], 2, i4924, '')
  }
  i4922.m_fontSharedMaterials = i4924
  request.r(i4923[14], i4923[15], 0, i4922, 'm_fontMaterial')
  var i4927 = i4923[16]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 2) {
  request.r(i4927[i + 0], i4927[i + 1], 2, i4926, '')
  }
  i4922.m_fontMaterials = i4926
  i4922.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4923[17], i4923[18], i4923[19], i4923[20])
  i4922.m_fontColor = new pc.Color(i4923[21], i4923[22], i4923[23], i4923[24])
  i4922.m_enableVertexGradient = !!i4923[25]
  i4922.m_colorMode = i4923[26]
  i4922.m_fontColorGradient = request.d('TMPro.VertexGradient', i4923[27], i4922.m_fontColorGradient)
  request.r(i4923[28], i4923[29], 0, i4922, 'm_fontColorGradientPreset')
  request.r(i4923[30], i4923[31], 0, i4922, 'm_spriteAsset')
  i4922.m_tintAllSprites = !!i4923[32]
  request.r(i4923[33], i4923[34], 0, i4922, 'm_StyleSheet')
  i4922.m_TextStyleHashCode = i4923[35]
  i4922.m_overrideHtmlColors = !!i4923[36]
  i4922.m_faceColor = UnityEngine.Color32.ConstructColor(i4923[37], i4923[38], i4923[39], i4923[40])
  i4922.m_fontSize = i4923[41]
  i4922.m_fontSizeBase = i4923[42]
  i4922.m_fontWeight = i4923[43]
  i4922.m_enableAutoSizing = !!i4923[44]
  i4922.m_fontSizeMin = i4923[45]
  i4922.m_fontSizeMax = i4923[46]
  i4922.m_fontStyle = i4923[47]
  i4922.m_HorizontalAlignment = i4923[48]
  i4922.m_VerticalAlignment = i4923[49]
  i4922.m_textAlignment = i4923[50]
  i4922.m_characterSpacing = i4923[51]
  i4922.m_wordSpacing = i4923[52]
  i4922.m_lineSpacing = i4923[53]
  i4922.m_lineSpacingMax = i4923[54]
  i4922.m_paragraphSpacing = i4923[55]
  i4922.m_charWidthMaxAdj = i4923[56]
  i4922.m_TextWrappingMode = i4923[57]
  i4922.m_wordWrappingRatios = i4923[58]
  i4922.m_overflowMode = i4923[59]
  request.r(i4923[60], i4923[61], 0, i4922, 'm_linkedTextComponent')
  request.r(i4923[62], i4923[63], 0, i4922, 'parentLinkedComponent')
  i4922.m_enableKerning = !!i4923[64]
  var i4929 = i4923[65]
  var i4928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4929.length; i += 1) {
    i4928.add(i4929[i + 0]);
  }
  i4922.m_ActiveFontFeatures = i4928
  i4922.m_enableExtraPadding = !!i4923[66]
  i4922.checkPaddingRequired = !!i4923[67]
  i4922.m_isRichText = !!i4923[68]
  i4922.m_parseCtrlCharacters = !!i4923[69]
  i4922.m_isOrthographic = !!i4923[70]
  i4922.m_isCullingEnabled = !!i4923[71]
  i4922.m_horizontalMapping = i4923[72]
  i4922.m_verticalMapping = i4923[73]
  i4922.m_uvLineOffset = i4923[74]
  i4922.m_geometrySortingOrder = i4923[75]
  i4922.m_IsTextObjectScaleStatic = !!i4923[76]
  i4922.m_VertexBufferAutoSizeReduction = !!i4923[77]
  i4922.m_useMaxVisibleDescender = !!i4923[78]
  i4922.m_pageToDisplay = i4923[79]
  i4922.m_margin = new pc.Vec4( i4923[80], i4923[81], i4923[82], i4923[83] )
  i4922.m_isUsingLegacyAnimationComponent = !!i4923[84]
  i4922.m_isVolumetricText = !!i4923[85]
  request.r(i4923[86], i4923[87], 0, i4922, 'm_Material')
  i4922.m_EmojiFallbackSupport = !!i4923[88]
  i4922.m_Maskable = !!i4923[89]
  i4922.m_Color = new pc.Color(i4923[90], i4923[91], i4923[92], i4923[93])
  i4922.m_RaycastTarget = !!i4923[94]
  i4922.m_RaycastPadding = new pc.Vec4( i4923[95], i4923[96], i4923[97], i4923[98] )
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'sharedMesh')
  return i4930
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i4932 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i4933 = data
  request.r(i4933[0], i4933[1], 0, i4932, 'm_RootBone')
  var i4935 = i4933[2]
  var i4934 = []
  for(var i = 0; i < i4935.length; i += 2) {
  request.r(i4935[i + 0], i4935[i + 1], 2, i4934, '')
  }
  i4932.m_BoneTransforms = i4934
  i4932.m_AlwaysUpdate = !!i4933[3]
  i4932.m_AutoRebind = !!i4933[4]
  return i4932
}

Deserializers["AnimColorController"] = function (request, data, root) {
  var i4936 = root || request.c( 'AnimColorController' )
  var i4937 = data
  var i4939 = i4937[0]
  var i4938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i4939.length; i += 2) {
  request.r(i4939[i + 0], i4939[i + 1], 1, i4938, '')
  }
  i4936.partsToColor = i4938
  return i4936
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i4940 = root || request.c( 'PlaySound' )
  var i4941 = data
  i4940.fxType = i4941[0]
  i4940.sound2 = i4941[1]
  i4940.sound3 = i4941[2]
  return i4940
}

Deserializers["PlaySoundOnEnable"] = function (request, data, root) {
  var i4942 = root || request.c( 'PlaySoundOnEnable' )
  var i4943 = data
  i4942.soundToPlay = i4943[0]
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4945 = data
  i4944.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4945[0], i4944.main)
  i4944.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4945[1], i4944.colorBySpeed)
  i4944.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4945[2], i4944.colorOverLifetime)
  i4944.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4945[3], i4944.emission)
  i4944.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4945[4], i4944.rotationBySpeed)
  i4944.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4945[5], i4944.rotationOverLifetime)
  i4944.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4945[6], i4944.shape)
  i4944.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4945[7], i4944.sizeBySpeed)
  i4944.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4945[8], i4944.sizeOverLifetime)
  i4944.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4945[9], i4944.textureSheetAnimation)
  i4944.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4945[10], i4944.velocityOverLifetime)
  i4944.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4945[11], i4944.noise)
  i4944.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4945[12], i4944.inheritVelocity)
  i4944.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4945[13], i4944.forceOverLifetime)
  i4944.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4945[14], i4944.limitVelocityOverLifetime)
  i4944.useAutoRandomSeed = !!i4945[15]
  i4944.randomSeed = i4945[16]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4946 = root || new pc.ParticleSystemMain()
  var i4947 = data
  i4946.duration = i4947[0]
  i4946.loop = !!i4947[1]
  i4946.prewarm = !!i4947[2]
  i4946.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[3], i4946.startDelay)
  i4946.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[4], i4946.startLifetime)
  i4946.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[5], i4946.startSpeed)
  i4946.startSize3D = !!i4947[6]
  i4946.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[7], i4946.startSizeX)
  i4946.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[8], i4946.startSizeY)
  i4946.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[9], i4946.startSizeZ)
  i4946.startRotation3D = !!i4947[10]
  i4946.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[11], i4946.startRotationX)
  i4946.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[12], i4946.startRotationY)
  i4946.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[13], i4946.startRotationZ)
  i4946.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4947[14], i4946.startColor)
  i4946.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[15], i4946.gravityModifier)
  i4946.simulationSpace = i4947[16]
  request.r(i4947[17], i4947[18], 0, i4946, 'customSimulationSpace')
  i4946.simulationSpeed = i4947[19]
  i4946.useUnscaledTime = !!i4947[20]
  i4946.scalingMode = i4947[21]
  i4946.playOnAwake = !!i4947[22]
  i4946.maxParticles = i4947[23]
  i4946.emitterVelocityMode = i4947[24]
  i4946.stopAction = i4947[25]
  return i4946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4948 = root || new pc.MinMaxCurve()
  var i4949 = data
  i4948.mode = i4949[0]
  i4948.curveMin = new pc.AnimationCurve( { keys_flow: i4949[1] } )
  i4948.curveMax = new pc.AnimationCurve( { keys_flow: i4949[2] } )
  i4948.curveMultiplier = i4949[3]
  i4948.constantMin = i4949[4]
  i4948.constantMax = i4949[5]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4950 = root || new pc.MinMaxGradient()
  var i4951 = data
  i4950.mode = i4951[0]
  i4950.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4951[1], i4950.gradientMin)
  i4950.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4951[2], i4950.gradientMax)
  i4950.colorMin = new pc.Color(i4951[3], i4951[4], i4951[5], i4951[6])
  i4950.colorMax = new pc.Color(i4951[7], i4951[8], i4951[9], i4951[10])
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4953 = data
  i4952.mode = i4953[0]
  var i4955 = i4953[1]
  var i4954 = []
  for(var i = 0; i < i4955.length; i += 1) {
    i4954.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4955[i + 0]) );
  }
  i4952.colorKeys = i4954
  var i4957 = i4953[2]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4957[i + 0]) );
  }
  i4952.alphaKeys = i4956
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4958 = root || new pc.ParticleSystemColorBySpeed()
  var i4959 = data
  i4958.enabled = !!i4959[0]
  i4958.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4959[1], i4958.color)
  i4958.range = new pc.Vec2( i4959[2], i4959[3] )
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4963 = data
  i4962.color = new pc.Color(i4963[0], i4963[1], i4963[2], i4963[3])
  i4962.time = i4963[4]
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4967 = data
  i4966.alpha = i4967[0]
  i4966.time = i4967[1]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4968 = root || new pc.ParticleSystemColorOverLifetime()
  var i4969 = data
  i4968.enabled = !!i4969[0]
  i4968.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4969[1], i4968.color)
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4970 = root || new pc.ParticleSystemEmitter()
  var i4971 = data
  i4970.enabled = !!i4971[0]
  i4970.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[1], i4970.rateOverTime)
  i4970.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[2], i4970.rateOverDistance)
  var i4973 = i4971[3]
  var i4972 = []
  for(var i = 0; i < i4973.length; i += 1) {
    i4972.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4973[i + 0]) );
  }
  i4970.bursts = i4972
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4976 = root || new pc.ParticleSystemBurst()
  var i4977 = data
  i4976.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4977[0], i4976.count)
  i4976.cycleCount = i4977[1]
  i4976.minCount = i4977[2]
  i4976.maxCount = i4977[3]
  i4976.repeatInterval = i4977[4]
  i4976.time = i4977[5]
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4978 = root || new pc.ParticleSystemRotationBySpeed()
  var i4979 = data
  i4978.enabled = !!i4979[0]
  i4978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[1], i4978.x)
  i4978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[2], i4978.y)
  i4978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[3], i4978.z)
  i4978.separateAxes = !!i4979[4]
  i4978.range = new pc.Vec2( i4979[5], i4979[6] )
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4980 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4981 = data
  i4980.enabled = !!i4981[0]
  i4980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[1], i4980.x)
  i4980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[2], i4980.y)
  i4980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[3], i4980.z)
  i4980.separateAxes = !!i4981[4]
  return i4980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4982 = root || new pc.ParticleSystemShape()
  var i4983 = data
  i4982.enabled = !!i4983[0]
  i4982.shapeType = i4983[1]
  i4982.randomDirectionAmount = i4983[2]
  i4982.sphericalDirectionAmount = i4983[3]
  i4982.randomPositionAmount = i4983[4]
  i4982.alignToDirection = !!i4983[5]
  i4982.radius = i4983[6]
  i4982.radiusMode = i4983[7]
  i4982.radiusSpread = i4983[8]
  i4982.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4983[9], i4982.radiusSpeed)
  i4982.radiusThickness = i4983[10]
  i4982.angle = i4983[11]
  i4982.length = i4983[12]
  i4982.boxThickness = new pc.Vec3( i4983[13], i4983[14], i4983[15] )
  i4982.meshShapeType = i4983[16]
  request.r(i4983[17], i4983[18], 0, i4982, 'mesh')
  request.r(i4983[19], i4983[20], 0, i4982, 'meshRenderer')
  request.r(i4983[21], i4983[22], 0, i4982, 'skinnedMeshRenderer')
  i4982.useMeshMaterialIndex = !!i4983[23]
  i4982.meshMaterialIndex = i4983[24]
  i4982.useMeshColors = !!i4983[25]
  i4982.normalOffset = i4983[26]
  i4982.arc = i4983[27]
  i4982.arcMode = i4983[28]
  i4982.arcSpread = i4983[29]
  i4982.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4983[30], i4982.arcSpeed)
  i4982.donutRadius = i4983[31]
  i4982.position = new pc.Vec3( i4983[32], i4983[33], i4983[34] )
  i4982.rotation = new pc.Vec3( i4983[35], i4983[36], i4983[37] )
  i4982.scale = new pc.Vec3( i4983[38], i4983[39], i4983[40] )
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4984 = root || new pc.ParticleSystemSizeBySpeed()
  var i4985 = data
  i4984.enabled = !!i4985[0]
  i4984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[1], i4984.x)
  i4984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[2], i4984.y)
  i4984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[3], i4984.z)
  i4984.separateAxes = !!i4985[4]
  i4984.range = new pc.Vec2( i4985[5], i4985[6] )
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4986 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4987 = data
  i4986.enabled = !!i4987[0]
  i4986.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[1], i4986.x)
  i4986.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[2], i4986.y)
  i4986.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[3], i4986.z)
  i4986.separateAxes = !!i4987[4]
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4988 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4989 = data
  i4988.enabled = !!i4989[0]
  i4988.mode = i4989[1]
  i4988.animation = i4989[2]
  i4988.numTilesX = i4989[3]
  i4988.numTilesY = i4989[4]
  i4988.useRandomRow = !!i4989[5]
  i4988.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[6], i4988.frameOverTime)
  i4988.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[7], i4988.startFrame)
  i4988.cycleCount = i4989[8]
  i4988.rowIndex = i4989[9]
  i4988.flipU = i4989[10]
  i4988.flipV = i4989[11]
  i4988.spriteCount = i4989[12]
  var i4991 = i4989[13]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 2) {
  request.r(i4991[i + 0], i4991[i + 1], 2, i4990, '')
  }
  i4988.sprites = i4990
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4994 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4995 = data
  i4994.enabled = !!i4995[0]
  i4994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[1], i4994.x)
  i4994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[2], i4994.y)
  i4994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[3], i4994.z)
  i4994.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[4], i4994.radial)
  i4994.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[5], i4994.speedModifier)
  i4994.space = i4995[6]
  i4994.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[7], i4994.orbitalX)
  i4994.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[8], i4994.orbitalY)
  i4994.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[9], i4994.orbitalZ)
  i4994.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[10], i4994.orbitalOffsetX)
  i4994.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[11], i4994.orbitalOffsetY)
  i4994.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4995[12], i4994.orbitalOffsetZ)
  return i4994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4996 = root || new pc.ParticleSystemNoise()
  var i4997 = data
  i4996.enabled = !!i4997[0]
  i4996.separateAxes = !!i4997[1]
  i4996.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[2], i4996.strengthX)
  i4996.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[3], i4996.strengthY)
  i4996.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[4], i4996.strengthZ)
  i4996.frequency = i4997[5]
  i4996.damping = !!i4997[6]
  i4996.octaveCount = i4997[7]
  i4996.octaveMultiplier = i4997[8]
  i4996.octaveScale = i4997[9]
  i4996.quality = i4997[10]
  i4996.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[11], i4996.scrollSpeed)
  i4996.scrollSpeedMultiplier = i4997[12]
  i4996.remapEnabled = !!i4997[13]
  i4996.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[14], i4996.remapX)
  i4996.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[15], i4996.remapY)
  i4996.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[16], i4996.remapZ)
  i4996.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[17], i4996.positionAmount)
  i4996.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[18], i4996.rotationAmount)
  i4996.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[19], i4996.sizeAmount)
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4998 = root || new pc.ParticleSystemInheritVelocity()
  var i4999 = data
  i4998.enabled = !!i4999[0]
  i4998.mode = i4999[1]
  i4998.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[2], i4998.curve)
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5000 = root || new pc.ParticleSystemForceOverLifetime()
  var i5001 = data
  i5000.enabled = !!i5001[0]
  i5000.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5001[1], i5000.x)
  i5000.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5001[2], i5000.y)
  i5000.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5001[3], i5000.z)
  i5000.space = i5001[4]
  i5000.randomized = !!i5001[5]
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5002 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5003 = data
  i5002.enabled = !!i5003[0]
  i5002.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[1], i5002.limit)
  i5002.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[2], i5002.limitX)
  i5002.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[3], i5002.limitY)
  i5002.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[4], i5002.limitZ)
  i5002.dampen = i5003[5]
  i5002.separateAxes = !!i5003[6]
  i5002.space = i5003[7]
  i5002.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[8], i5002.drag)
  i5002.multiplyDragByParticleSize = !!i5003[9]
  i5002.multiplyDragByParticleVelocity = !!i5003[10]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5005 = data
  request.r(i5005[0], i5005[1], 0, i5004, 'mesh')
  i5004.meshCount = i5005[2]
  i5004.activeVertexStreamsCount = i5005[3]
  i5004.alignment = i5005[4]
  i5004.renderMode = i5005[5]
  i5004.sortMode = i5005[6]
  i5004.lengthScale = i5005[7]
  i5004.velocityScale = i5005[8]
  i5004.cameraVelocityScale = i5005[9]
  i5004.normalDirection = i5005[10]
  i5004.sortingFudge = i5005[11]
  i5004.minParticleSize = i5005[12]
  i5004.maxParticleSize = i5005[13]
  i5004.pivot = new pc.Vec3( i5005[14], i5005[15], i5005[16] )
  request.r(i5005[17], i5005[18], 0, i5004, 'trailMaterial')
  i5004.applyActiveColorSpace = !!i5005[19]
  i5004.enabled = !!i5005[20]
  request.r(i5005[21], i5005[22], 0, i5004, 'sharedMaterial')
  var i5007 = i5005[23]
  var i5006 = []
  for(var i = 0; i < i5007.length; i += 2) {
  request.r(i5007[i + 0], i5007[i + 1], 2, i5006, '')
  }
  i5004.sharedMaterials = i5006
  i5004.receiveShadows = !!i5005[24]
  i5004.shadowCastingMode = i5005[25]
  i5004.sortingLayerID = i5005[26]
  i5004.sortingOrder = i5005[27]
  i5004.lightmapIndex = i5005[28]
  i5004.lightmapSceneIndex = i5005[29]
  i5004.lightmapScaleOffset = new pc.Vec4( i5005[30], i5005[31], i5005[32], i5005[33] )
  i5004.lightProbeUsage = i5005[34]
  i5004.reflectionProbeUsage = i5005[35]
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5009 = data
  request.r(i5009[0], i5009[1], 0, i5008, 'sharedMesh')
  var i5011 = i5009[2]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 2) {
  request.r(i5011[i + 0], i5011[i + 1], 2, i5010, '')
  }
  i5008.bones = i5010
  i5008.updateWhenOffscreen = !!i5009[3]
  i5008.localBounds = i5009[4]
  request.r(i5009[5], i5009[6], 0, i5008, 'rootBone')
  var i5013 = i5009[7]
  var i5012 = []
  for(var i = 0; i < i5013.length; i += 1) {
    i5012.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5013[i + 0]) );
  }
  i5008.blendShapesWeights = i5012
  i5008.enabled = !!i5009[8]
  request.r(i5009[9], i5009[10], 0, i5008, 'sharedMaterial')
  var i5015 = i5009[11]
  var i5014 = []
  for(var i = 0; i < i5015.length; i += 2) {
  request.r(i5015[i + 0], i5015[i + 1], 2, i5014, '')
  }
  i5008.sharedMaterials = i5014
  i5008.receiveShadows = !!i5009[12]
  i5008.shadowCastingMode = i5009[13]
  i5008.sortingLayerID = i5009[14]
  i5008.sortingOrder = i5009[15]
  i5008.lightmapIndex = i5009[16]
  i5008.lightmapSceneIndex = i5009[17]
  i5008.lightmapScaleOffset = new pc.Vec4( i5009[18], i5009[19], i5009[20], i5009[21] )
  i5008.lightProbeUsage = i5009[22]
  i5008.reflectionProbeUsage = i5009[23]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5019 = data
  i5018.weight = i5019[0]
  return i5018
}

Deserializers["ItemController"] = function (request, data, root) {
  var i5020 = root || request.c( 'ItemController' )
  var i5021 = data
  i5020.itemType = i5021[0]
  request.r(i5021[1], i5021[2], 0, i5020, 'dropTarget')
  i5020.onClick = request.d('UnityEngine.Events.UnityEvent', i5021[3], i5020.onClick)
  i5020.onDrop = request.d('UnityEngine.Events.UnityEvent', i5021[4], i5020.onDrop)
  i5020.onDragStart = request.d('UnityEngine.Events.UnityEvent', i5021[5], i5020.onDragStart)
  i5020.onReturn = request.d('UnityEngine.Events.UnityEvent', i5021[6], i5020.onReturn)
  var i5023 = i5021[7]
  var i5022 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.add(request.d('AnimObjectData', i5023[i + 0]));
  }
  i5020.animationObjects = i5022
  i5020.fxSoundType = i5021[8]
  return i5020
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5024 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5025 = data
  request.r(i5025[0], i5025[1], 0, i5024, 'm_ObjectArgument')
  i5024.m_ObjectArgumentAssemblyTypeName = i5025[2]
  i5024.m_IntArgument = i5025[3]
  i5024.m_FloatArgument = i5025[4]
  i5024.m_StringArgument = i5025[5]
  i5024.m_BoolArgument = !!i5025[6]
  return i5024
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i5028 = root || request.c( 'AnimObjectData' )
  var i5029 = data
  request.r(i5029[0], i5029[1], 0, i5028, 'animObj')
  i5028.delayFromStart = i5029[2]
  i5028.durationToDeactivate = i5029[3]
  return i5028
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i5030 = root || request.c( 'ItemGraphic' )
  var i5031 = data
  var i5033 = i5031[0]
  var i5032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 1, i5032, '')
  }
  i5030.spriteRenderers = i5032
  i5030.sortingOrderOffset = i5031[1]
  return i5030
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i5034 = root || request.c( 'ItemMovement' )
  var i5035 = data
  return i5034
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5036 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5037 = data
  request.r(i5037[0], i5037[1], 0, i5036, 'm_FirstSelected')
  i5036.m_sendNavigationEvents = !!i5037[2]
  i5036.m_DragThreshold = i5037[3]
  return i5036
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5038 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5039 = data
  i5038.m_HorizontalAxis = i5039[0]
  i5038.m_VerticalAxis = i5039[1]
  i5038.m_SubmitButton = i5039[2]
  i5038.m_CancelButton = i5039[3]
  i5038.m_InputActionsPerSecond = i5039[4]
  i5038.m_RepeatDelay = i5039[5]
  i5038.m_ForceModuleActive = !!i5039[6]
  i5038.m_SendPointerHoverToParent = !!i5039[7]
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5041 = data
  i5040.ambientIntensity = i5041[0]
  i5040.reflectionIntensity = i5041[1]
  i5040.ambientMode = i5041[2]
  i5040.ambientLight = new pc.Color(i5041[3], i5041[4], i5041[5], i5041[6])
  i5040.ambientSkyColor = new pc.Color(i5041[7], i5041[8], i5041[9], i5041[10])
  i5040.ambientGroundColor = new pc.Color(i5041[11], i5041[12], i5041[13], i5041[14])
  i5040.ambientEquatorColor = new pc.Color(i5041[15], i5041[16], i5041[17], i5041[18])
  i5040.fogColor = new pc.Color(i5041[19], i5041[20], i5041[21], i5041[22])
  i5040.fogEndDistance = i5041[23]
  i5040.fogStartDistance = i5041[24]
  i5040.fogDensity = i5041[25]
  i5040.fog = !!i5041[26]
  request.r(i5041[27], i5041[28], 0, i5040, 'skybox')
  i5040.fogMode = i5041[29]
  var i5043 = i5041[30]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5043[i + 0]) );
  }
  i5040.lightmaps = i5042
  i5040.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5041[31], i5040.lightProbes)
  i5040.lightmapsMode = i5041[32]
  i5040.mixedBakeMode = i5041[33]
  i5040.environmentLightingMode = i5041[34]
  i5040.ambientProbe = new pc.SphericalHarmonicsL2(i5041[35])
  i5040.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5041[36])
  i5040.useReferenceAmbientProbe = !!i5041[37]
  request.r(i5041[38], i5041[39], 0, i5040, 'customReflection')
  request.r(i5041[40], i5041[41], 0, i5040, 'defaultReflection')
  i5040.defaultReflectionMode = i5041[42]
  i5040.defaultReflectionResolution = i5041[43]
  i5040.sunLightObjectId = i5041[44]
  i5040.pixelLightCount = i5041[45]
  i5040.defaultReflectionHDR = !!i5041[46]
  i5040.hasLightDataAsset = !!i5041[47]
  i5040.hasManualGenerate = !!i5041[48]
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5047 = data
  request.r(i5047[0], i5047[1], 0, i5046, 'lightmapColor')
  request.r(i5047[2], i5047[3], 0, i5046, 'lightmapDirection')
  request.r(i5047[4], i5047[5], 0, i5046, 'shadowMask')
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5048 = root || new UnityEngine.LightProbes()
  var i5049 = data
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5057 = data
  var i5059 = i5057[0]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5059[i + 0]));
  }
  i5056.ShaderCompilationErrors = i5058
  i5056.name = i5057[1]
  i5056.guid = i5057[2]
  var i5061 = i5057[3]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.push( i5061[i + 0] );
  }
  i5056.shaderDefinedKeywords = i5060
  var i5063 = i5057[4]
  var i5062 = []
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5063[i + 0]) );
  }
  i5056.passes = i5062
  var i5065 = i5057[5]
  var i5064 = []
  for(var i = 0; i < i5065.length; i += 1) {
    i5064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5065[i + 0]) );
  }
  i5056.usePasses = i5064
  var i5067 = i5057[6]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5067[i + 0]) );
  }
  i5056.defaultParameterValues = i5066
  request.r(i5057[7], i5057[8], 0, i5056, 'unityFallbackShader')
  i5056.readDepth = !!i5057[9]
  i5056.hasDepthOnlyPass = !!i5057[10]
  i5056.isCreatedByShaderGraph = !!i5057[11]
  i5056.disableBatching = !!i5057[12]
  i5056.compiled = !!i5057[13]
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5071 = data
  i5070.shaderName = i5071[0]
  i5070.errorMessage = i5071[1]
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5076 = root || new pc.UnityShaderPass()
  var i5077 = data
  i5076.id = i5077[0]
  i5076.subShaderIndex = i5077[1]
  i5076.name = i5077[2]
  i5076.passType = i5077[3]
  i5076.grabPassTextureName = i5077[4]
  i5076.usePass = !!i5077[5]
  i5076.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[6], i5076.zTest)
  i5076.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[7], i5076.zWrite)
  i5076.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[8], i5076.culling)
  i5076.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5077[9], i5076.blending)
  i5076.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5077[10], i5076.alphaBlending)
  i5076.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[11], i5076.colorWriteMask)
  i5076.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[12], i5076.offsetUnits)
  i5076.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[13], i5076.offsetFactor)
  i5076.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[14], i5076.stencilRef)
  i5076.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[15], i5076.stencilReadMask)
  i5076.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5077[16], i5076.stencilWriteMask)
  i5076.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5077[17], i5076.stencilOp)
  i5076.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5077[18], i5076.stencilOpFront)
  i5076.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5077[19], i5076.stencilOpBack)
  var i5079 = i5077[20]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5079[i + 0]) );
  }
  i5076.tags = i5078
  var i5081 = i5077[21]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.push( i5081[i + 0] );
  }
  i5076.passDefinedKeywords = i5080
  var i5083 = i5077[22]
  var i5082 = []
  for(var i = 0; i < i5083.length; i += 1) {
    i5082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5083[i + 0]) );
  }
  i5076.passDefinedKeywordGroups = i5082
  var i5085 = i5077[23]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 1) {
    i5084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5085[i + 0]) );
  }
  i5076.variants = i5084
  var i5087 = i5077[24]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5087[i + 0]) );
  }
  i5076.excludedVariants = i5086
  i5076.hasDepthReader = !!i5077[25]
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5089 = data
  i5088.val = i5089[0]
  i5088.name = i5089[1]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5091 = data
  i5090.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5091[0], i5090.src)
  i5090.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5091[1], i5090.dst)
  i5090.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5091[2], i5090.op)
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5093 = data
  i5092.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5093[0], i5092.pass)
  i5092.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5093[1], i5092.fail)
  i5092.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5093[2], i5092.zFail)
  i5092.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5093[3], i5092.comp)
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5097 = data
  i5096.name = i5097[0]
  i5096.value = i5097[1]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5101 = data
  var i5103 = i5101[0]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( i5103[i + 0] );
  }
  i5100.keywords = i5102
  i5100.hasDiscard = !!i5101[1]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5107 = data
  i5106.passId = i5107[0]
  i5106.subShaderIndex = i5107[1]
  var i5109 = i5107[2]
  var i5108 = []
  for(var i = 0; i < i5109.length; i += 1) {
    i5108.push( i5109[i + 0] );
  }
  i5106.keywords = i5108
  i5106.vertexProgram = i5107[3]
  i5106.fragmentProgram = i5107[4]
  i5106.exportedForWebGl2 = !!i5107[5]
  i5106.readDepth = !!i5107[6]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5113 = data
  request.r(i5113[0], i5113[1], 0, i5112, 'shader')
  i5112.pass = i5113[2]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5117 = data
  i5116.name = i5117[0]
  i5116.type = i5117[1]
  i5116.value = new pc.Vec4( i5117[2], i5117[3], i5117[4], i5117[5] )
  i5116.textureValue = i5117[6]
  i5116.shaderPropertyFlag = i5117[7]
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5119 = data
  i5118.name = i5119[0]
  request.r(i5119[1], i5119[2], 0, i5118, 'texture')
  i5118.aabb = i5119[3]
  i5118.vertices = i5119[4]
  i5118.triangles = i5119[5]
  i5118.textureRect = UnityEngine.Rect.MinMaxRect(i5119[6], i5119[7], i5119[8], i5119[9])
  i5118.packedRect = UnityEngine.Rect.MinMaxRect(i5119[10], i5119[11], i5119[12], i5119[13])
  i5118.border = new pc.Vec4( i5119[14], i5119[15], i5119[16], i5119[17] )
  i5118.transparency = i5119[18]
  i5118.bounds = i5119[19]
  i5118.pixelsPerUnit = i5119[20]
  i5118.textureWidth = i5119[21]
  i5118.textureHeight = i5119[22]
  i5118.nativeSize = new pc.Vec2( i5119[23], i5119[24] )
  i5118.pivot = new pc.Vec2( i5119[25], i5119[26] )
  i5118.textureRectOffset = new pc.Vec2( i5119[27], i5119[28] )
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5121 = data
  i5120.name = i5121[0]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5123 = data
  i5122.name = i5123[0]
  i5122.wrapMode = i5123[1]
  i5122.isLooping = !!i5123[2]
  i5122.length = i5123[3]
  var i5125 = i5123[4]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5125[i + 0]) );
  }
  i5122.curves = i5124
  var i5127 = i5123[5]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5127[i + 0]) );
  }
  i5122.events = i5126
  i5122.halfPrecision = !!i5123[6]
  i5122._frameRate = i5123[7]
  i5122.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5123[8], i5122.localBounds)
  i5122.hasMuscleCurves = !!i5123[9]
  var i5129 = i5123[10]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 1) {
    i5128.push( i5129[i + 0] );
  }
  i5122.clipMuscleConstant = i5128
  i5122.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5123[11], i5122.clipBindingConstant)
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5133 = data
  i5132.path = i5133[0]
  i5132.hash = i5133[1]
  i5132.componentType = i5133[2]
  i5132.property = i5133[3]
  i5132.keys = i5133[4]
  var i5135 = i5133[5]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5135[i + 0]) );
  }
  i5132.objectReferenceKeys = i5134
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5139 = data
  i5138.time = i5139[0]
  request.r(i5139[1], i5139[2], 0, i5138, 'value')
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5143 = data
  i5142.functionName = i5143[0]
  i5142.floatParameter = i5143[1]
  i5142.intParameter = i5143[2]
  i5142.stringParameter = i5143[3]
  request.r(i5143[4], i5143[5], 0, i5142, 'objectReferenceParameter')
  i5142.time = i5143[6]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5145 = data
  i5144.center = new pc.Vec3( i5145[0], i5145[1], i5145[2] )
  i5144.extends = new pc.Vec3( i5145[3], i5145[4], i5145[5] )
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5149 = data
  var i5151 = i5149[0]
  var i5150 = []
  for(var i = 0; i < i5151.length; i += 1) {
    i5150.push( i5151[i + 0] );
  }
  i5148.genericBindings = i5150
  var i5153 = i5149[1]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.push( i5153[i + 0] );
  }
  i5148.pptrCurveMapping = i5152
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5155 = data
  i5154.name = i5155[0]
  i5154.ascent = i5155[1]
  i5154.originalLineHeight = i5155[2]
  i5154.fontSize = i5155[3]
  var i5157 = i5155[4]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5157[i + 0]) );
  }
  i5154.characterInfo = i5156
  request.r(i5155[5], i5155[6], 0, i5154, 'texture')
  i5154.originalFontSize = i5155[7]
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5161 = data
  i5160.index = i5161[0]
  i5160.advance = i5161[1]
  i5160.bearing = i5161[2]
  i5160.glyphWidth = i5161[3]
  i5160.glyphHeight = i5161[4]
  i5160.minX = i5161[5]
  i5160.maxX = i5161[6]
  i5160.minY = i5161[7]
  i5160.maxY = i5161[8]
  i5160.uvBottomLeftX = i5161[9]
  i5160.uvBottomLeftY = i5161[10]
  i5160.uvBottomRightX = i5161[11]
  i5160.uvBottomRightY = i5161[12]
  i5160.uvTopLeftX = i5161[13]
  i5160.uvTopLeftY = i5161[14]
  i5160.uvTopRightX = i5161[15]
  i5160.uvTopRightY = i5161[16]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5163 = data
  i5162.name = i5163[0]
  var i5165 = i5163[1]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5165[i + 0]) );
  }
  i5162.layers = i5164
  var i5167 = i5163[2]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 1) {
    i5166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5167[i + 0]) );
  }
  i5162.parameters = i5166
  i5162.animationClips = i5163[3]
  i5162.avatarUnsupported = i5163[4]
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5171 = data
  i5170.name = i5171[0]
  i5170.defaultWeight = i5171[1]
  i5170.blendingMode = i5171[2]
  i5170.avatarMask = i5171[3]
  i5170.syncedLayerIndex = i5171[4]
  i5170.syncedLayerAffectsTiming = !!i5171[5]
  i5170.syncedLayers = i5171[6]
  i5170.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5171[7], i5170.stateMachine)
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5173 = data
  i5172.id = i5173[0]
  i5172.name = i5173[1]
  i5172.path = i5173[2]
  var i5175 = i5173[3]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5175[i + 0]) );
  }
  i5172.states = i5174
  var i5177 = i5173[4]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5177[i + 0]) );
  }
  i5172.machines = i5176
  var i5179 = i5173[5]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 1) {
    i5178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5179[i + 0]) );
  }
  i5172.entryStateTransitions = i5178
  var i5181 = i5173[6]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5181[i + 0]) );
  }
  i5172.exitStateTransitions = i5180
  var i5183 = i5173[7]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5183[i + 0]) );
  }
  i5172.anyStateTransitions = i5182
  i5172.defaultStateId = i5173[8]
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5187 = data
  i5186.id = i5187[0]
  i5186.name = i5187[1]
  i5186.cycleOffset = i5187[2]
  i5186.cycleOffsetParameter = i5187[3]
  i5186.cycleOffsetParameterActive = !!i5187[4]
  i5186.mirror = !!i5187[5]
  i5186.mirrorParameter = i5187[6]
  i5186.mirrorParameterActive = !!i5187[7]
  i5186.motionId = i5187[8]
  i5186.nameHash = i5187[9]
  i5186.fullPathHash = i5187[10]
  i5186.speed = i5187[11]
  i5186.speedParameter = i5187[12]
  i5186.speedParameterActive = !!i5187[13]
  i5186.tag = i5187[14]
  i5186.tagHash = i5187[15]
  i5186.writeDefaultValues = !!i5187[16]
  var i5189 = i5187[17]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 2) {
  request.r(i5189[i + 0], i5189[i + 1], 2, i5188, '')
  }
  i5186.behaviours = i5188
  var i5191 = i5187[18]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 1) {
    i5190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5191[i + 0]) );
  }
  i5186.transitions = i5190
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5197 = data
  i5196.fullPath = i5197[0]
  i5196.canTransitionToSelf = !!i5197[1]
  i5196.duration = i5197[2]
  i5196.exitTime = i5197[3]
  i5196.hasExitTime = !!i5197[4]
  i5196.hasFixedDuration = !!i5197[5]
  i5196.interruptionSource = i5197[6]
  i5196.offset = i5197[7]
  i5196.orderedInterruption = !!i5197[8]
  i5196.destinationStateId = i5197[9]
  i5196.isExit = !!i5197[10]
  i5196.mute = !!i5197[11]
  i5196.solo = !!i5197[12]
  var i5199 = i5197[13]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5199[i + 0]) );
  }
  i5196.conditions = i5198
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5205 = data
  i5204.destinationStateId = i5205[0]
  i5204.isExit = !!i5205[1]
  i5204.mute = !!i5205[2]
  i5204.solo = !!i5205[3]
  var i5207 = i5205[4]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5207[i + 0]) );
  }
  i5204.conditions = i5206
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5211 = data
  i5210.defaultBool = !!i5211[0]
  i5210.defaultFloat = i5211[1]
  i5210.defaultInt = i5211[2]
  i5210.name = i5211[3]
  i5210.nameHash = i5211[4]
  i5210.type = i5211[5]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5215 = data
  i5214.mode = i5215[0]
  i5214.parameter = i5215[1]
  i5214.threshold = i5215[2]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5217 = data
  i5216.name = i5217[0]
  i5216.bytes64 = i5217[1]
  i5216.data = i5217[2]
  return i5216
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5218 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5219 = data
  i5218.normalStyle = i5219[0]
  i5218.normalSpacingOffset = i5219[1]
  i5218.boldStyle = i5219[2]
  i5218.boldSpacing = i5219[3]
  i5218.italicStyle = i5219[4]
  i5218.tabSize = i5219[5]
  request.r(i5219[6], i5219[7], 0, i5218, 'atlas')
  i5218.m_SourceFontFileGUID = i5219[8]
  i5218.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5219[9], i5218.m_CreationSettings)
  request.r(i5219[10], i5219[11], 0, i5218, 'm_SourceFontFile')
  i5218.m_SourceFontFilePath = i5219[12]
  i5218.m_AtlasPopulationMode = i5219[13]
  i5218.InternalDynamicOS = !!i5219[14]
  var i5221 = i5219[15]
  var i5220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5221.length; i += 1) {
    i5220.add(request.d('UnityEngine.TextCore.Glyph', i5221[i + 0]));
  }
  i5218.m_GlyphTable = i5220
  var i5223 = i5219[16]
  var i5222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5223.length; i += 1) {
    i5222.add(request.d('TMPro.TMP_Character', i5223[i + 0]));
  }
  i5218.m_CharacterTable = i5222
  var i5225 = i5219[17]
  var i5224 = []
  for(var i = 0; i < i5225.length; i += 2) {
  request.r(i5225[i + 0], i5225[i + 1], 2, i5224, '')
  }
  i5218.m_AtlasTextures = i5224
  i5218.m_AtlasTextureIndex = i5219[18]
  i5218.m_IsMultiAtlasTexturesEnabled = !!i5219[19]
  i5218.m_GetFontFeatures = !!i5219[20]
  i5218.m_ClearDynamicDataOnBuild = !!i5219[21]
  i5218.m_AtlasWidth = i5219[22]
  i5218.m_AtlasHeight = i5219[23]
  i5218.m_AtlasPadding = i5219[24]
  i5218.m_AtlasRenderMode = i5219[25]
  var i5227 = i5219[26]
  var i5226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.add(request.d('UnityEngine.TextCore.GlyphRect', i5227[i + 0]));
  }
  i5218.m_UsedGlyphRects = i5226
  var i5229 = i5219[27]
  var i5228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5229.length; i += 1) {
    i5228.add(request.d('UnityEngine.TextCore.GlyphRect', i5229[i + 0]));
  }
  i5218.m_FreeGlyphRects = i5228
  i5218.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5219[28], i5218.m_FontFeatureTable)
  i5218.m_ShouldReimportFontFeatures = !!i5219[29]
  var i5231 = i5219[30]
  var i5230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5231.length; i += 2) {
  request.r(i5231[i + 0], i5231[i + 1], 1, i5230, '')
  }
  i5218.m_FallbackFontAssetTable = i5230
  var i5233 = i5219[31]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.push( request.d('TMPro.TMP_FontWeightPair', i5233[i + 0]) );
  }
  i5218.m_FontWeightTable = i5232
  var i5235 = i5219[32]
  var i5234 = []
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.push( request.d('TMPro.TMP_FontWeightPair', i5235[i + 0]) );
  }
  i5218.fontWeights = i5234
  i5218.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5219[33], i5218.m_fontInfo)
  var i5237 = i5219[34]
  var i5236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.add(request.d('TMPro.TMP_Glyph', i5237[i + 0]));
  }
  i5218.m_glyphInfoList = i5236
  i5218.m_KerningTable = request.d('TMPro.KerningTable', i5219[35], i5218.m_KerningTable)
  var i5239 = i5219[36]
  var i5238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5239.length; i += 2) {
  request.r(i5239[i + 0], i5239[i + 1], 1, i5238, '')
  }
  i5218.fallbackFontAssets = i5238
  i5218.m_Version = i5219[37]
  i5218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5219[38], i5218.m_FaceInfo)
  request.r(i5219[39], i5219[40], 0, i5218, 'm_Material')
  return i5218
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5241 = data
  i5240.sourceFontFileName = i5241[0]
  i5240.sourceFontFileGUID = i5241[1]
  i5240.faceIndex = i5241[2]
  i5240.pointSizeSamplingMode = i5241[3]
  i5240.pointSize = i5241[4]
  i5240.padding = i5241[5]
  i5240.paddingMode = i5241[6]
  i5240.packingMode = i5241[7]
  i5240.atlasWidth = i5241[8]
  i5240.atlasHeight = i5241[9]
  i5240.characterSetSelectionMode = i5241[10]
  i5240.characterSequence = i5241[11]
  i5240.referencedFontAssetGUID = i5241[12]
  i5240.referencedTextAssetGUID = i5241[13]
  i5240.fontStyle = i5241[14]
  i5240.fontStyleModifier = i5241[15]
  i5240.renderMode = i5241[16]
  i5240.includeFontFeatures = !!i5241[17]
  return i5240
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5244 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5245 = data
  i5244.m_Index = i5245[0]
  i5244.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5245[1], i5244.m_Metrics)
  i5244.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5245[2], i5244.m_GlyphRect)
  i5244.m_Scale = i5245[3]
  i5244.m_AtlasIndex = i5245[4]
  i5244.m_ClassDefinitionType = i5245[5]
  return i5244
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5246 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5247 = data
  i5246.m_Width = i5247[0]
  i5246.m_Height = i5247[1]
  i5246.m_HorizontalBearingX = i5247[2]
  i5246.m_HorizontalBearingY = i5247[3]
  i5246.m_HorizontalAdvance = i5247[4]
  return i5246
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5248 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5249 = data
  i5248.m_X = i5249[0]
  i5248.m_Y = i5249[1]
  i5248.m_Width = i5249[2]
  i5248.m_Height = i5249[3]
  return i5248
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5252 = root || request.c( 'TMPro.TMP_Character' )
  var i5253 = data
  i5252.m_ElementType = i5253[0]
  i5252.m_Unicode = i5253[1]
  i5252.m_GlyphIndex = i5253[2]
  i5252.m_Scale = i5253[3]
  return i5252
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5258 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5259 = data
  var i5261 = i5259[0]
  var i5260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.add(request.d('TMPro.MultipleSubstitutionRecord', i5261[i + 0]));
  }
  i5258.m_MultipleSubstitutionRecords = i5260
  var i5263 = i5259[1]
  var i5262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.add(request.d('TMPro.LigatureSubstitutionRecord', i5263[i + 0]));
  }
  i5258.m_LigatureSubstitutionRecords = i5262
  var i5265 = i5259[2]
  var i5264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5265.length; i += 1) {
    i5264.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5265[i + 0]));
  }
  i5258.m_GlyphPairAdjustmentRecords = i5264
  var i5267 = i5259[3]
  var i5266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5267.length; i += 1) {
    i5266.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5267[i + 0]));
  }
  i5258.m_MarkToBaseAdjustmentRecords = i5266
  var i5269 = i5259[4]
  var i5268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5269[i + 0]));
  }
  i5258.m_MarkToMarkAdjustmentRecords = i5268
  return i5258
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5272 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5273 = data
  i5272.m_TargetGlyphID = i5273[0]
  i5272.m_SubstituteGlyphIDs = i5273[1]
  return i5272
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5276 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5277 = data
  i5276.m_ComponentGlyphIDs = i5277[0]
  i5276.m_LigatureGlyphID = i5277[1]
  return i5276
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5280 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5281 = data
  i5280.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5281[0], i5280.m_FirstAdjustmentRecord)
  i5280.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5281[1], i5280.m_SecondAdjustmentRecord)
  i5280.m_FeatureLookupFlags = i5281[2]
  return i5280
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5284 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5285 = data
  i5284.m_BaseGlyphID = i5285[0]
  i5284.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5285[1], i5284.m_BaseGlyphAnchorPoint)
  i5284.m_MarkGlyphID = i5285[2]
  i5284.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5285[3], i5284.m_MarkPositionAdjustment)
  return i5284
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5288 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5289 = data
  i5288.m_BaseMarkGlyphID = i5289[0]
  i5288.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5289[1], i5288.m_BaseMarkGlyphAnchorPoint)
  i5288.m_CombiningMarkGlyphID = i5289[2]
  i5288.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5289[3], i5288.m_CombiningMarkPositionAdjustment)
  return i5288
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5294 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5295 = data
  request.r(i5295[0], i5295[1], 0, i5294, 'regularTypeface')
  request.r(i5295[2], i5295[3], 0, i5294, 'italicTypeface')
  return i5294
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5296 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5297 = data
  i5296.Name = i5297[0]
  i5296.PointSize = i5297[1]
  i5296.Scale = i5297[2]
  i5296.CharacterCount = i5297[3]
  i5296.LineHeight = i5297[4]
  i5296.Baseline = i5297[5]
  i5296.Ascender = i5297[6]
  i5296.CapHeight = i5297[7]
  i5296.Descender = i5297[8]
  i5296.CenterLine = i5297[9]
  i5296.SuperscriptOffset = i5297[10]
  i5296.SubscriptOffset = i5297[11]
  i5296.SubSize = i5297[12]
  i5296.Underline = i5297[13]
  i5296.UnderlineThickness = i5297[14]
  i5296.strikethrough = i5297[15]
  i5296.strikethroughThickness = i5297[16]
  i5296.TabWidth = i5297[17]
  i5296.Padding = i5297[18]
  i5296.AtlasWidth = i5297[19]
  i5296.AtlasHeight = i5297[20]
  return i5296
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5300 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5301 = data
  i5300.id = i5301[0]
  i5300.x = i5301[1]
  i5300.y = i5301[2]
  i5300.width = i5301[3]
  i5300.height = i5301[4]
  i5300.xOffset = i5301[5]
  i5300.yOffset = i5301[6]
  i5300.xAdvance = i5301[7]
  i5300.scale = i5301[8]
  return i5300
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5302 = root || request.c( 'TMPro.KerningTable' )
  var i5303 = data
  var i5305 = i5303[0]
  var i5304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5305.length; i += 1) {
    i5304.add(request.d('TMPro.KerningPair', i5305[i + 0]));
  }
  i5302.kerningPairs = i5304
  return i5302
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5308 = root || request.c( 'TMPro.KerningPair' )
  var i5309 = data
  i5308.xOffset = i5309[0]
  i5308.m_FirstGlyph = i5309[1]
  i5308.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5309[2], i5308.m_FirstGlyphAdjustments)
  i5308.m_SecondGlyph = i5309[3]
  i5308.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5309[4], i5308.m_SecondGlyphAdjustments)
  i5308.m_IgnoreSpacingAdjustments = !!i5309[5]
  return i5308
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5311 = data
  i5310.m_FaceIndex = i5311[0]
  i5310.m_FamilyName = i5311[1]
  i5310.m_StyleName = i5311[2]
  i5310.m_PointSize = i5311[3]
  i5310.m_Scale = i5311[4]
  i5310.m_UnitsPerEM = i5311[5]
  i5310.m_LineHeight = i5311[6]
  i5310.m_AscentLine = i5311[7]
  i5310.m_CapLine = i5311[8]
  i5310.m_MeanLine = i5311[9]
  i5310.m_Baseline = i5311[10]
  i5310.m_DescentLine = i5311[11]
  i5310.m_SuperscriptOffset = i5311[12]
  i5310.m_SuperscriptSize = i5311[13]
  i5310.m_SubscriptOffset = i5311[14]
  i5310.m_SubscriptSize = i5311[15]
  i5310.m_UnderlineOffset = i5311[16]
  i5310.m_UnderlineThickness = i5311[17]
  i5310.m_StrikethroughOffset = i5311[18]
  i5310.m_StrikethroughThickness = i5311[19]
  i5310.m_TabWidth = i5311[20]
  return i5310
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5312 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5313 = data
  i5312.m_GlyphIndex = i5313[0]
  i5312.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5313[1], i5312.m_GlyphValueRecord)
  return i5312
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5314 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5315 = data
  i5314.m_XPlacement = i5315[0]
  i5314.m_YPlacement = i5315[1]
  i5314.m_XAdvance = i5315[2]
  i5314.m_YAdvance = i5315[3]
  return i5314
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5316 = root || request.c( 'TMPro.TMP_Settings' )
  var i5317 = data
  i5316.assetVersion = i5317[0]
  i5316.m_TextWrappingMode = i5317[1]
  i5316.m_enableKerning = !!i5317[2]
  var i5319 = i5317[3]
  var i5318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5319.length; i += 1) {
    i5318.add(i5319[i + 0]);
  }
  i5316.m_ActiveFontFeatures = i5318
  i5316.m_enableExtraPadding = !!i5317[4]
  i5316.m_enableTintAllSprites = !!i5317[5]
  i5316.m_enableParseEscapeCharacters = !!i5317[6]
  i5316.m_EnableRaycastTarget = !!i5317[7]
  i5316.m_GetFontFeaturesAtRuntime = !!i5317[8]
  i5316.m_missingGlyphCharacter = i5317[9]
  i5316.m_ClearDynamicDataOnBuild = !!i5317[10]
  i5316.m_warningsDisabled = !!i5317[11]
  request.r(i5317[12], i5317[13], 0, i5316, 'm_defaultFontAsset')
  i5316.m_defaultFontAssetPath = i5317[14]
  i5316.m_defaultFontSize = i5317[15]
  i5316.m_defaultAutoSizeMinRatio = i5317[16]
  i5316.m_defaultAutoSizeMaxRatio = i5317[17]
  i5316.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5317[18], i5317[19] )
  i5316.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5317[20], i5317[21] )
  i5316.m_autoSizeTextContainer = !!i5317[22]
  i5316.m_IsTextObjectScaleStatic = !!i5317[23]
  var i5321 = i5317[24]
  var i5320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5321.length; i += 2) {
  request.r(i5321[i + 0], i5321[i + 1], 1, i5320, '')
  }
  i5316.m_fallbackFontAssets = i5320
  i5316.m_matchMaterialPreset = !!i5317[25]
  i5316.m_HideSubTextObjects = !!i5317[26]
  request.r(i5317[27], i5317[28], 0, i5316, 'm_defaultSpriteAsset')
  i5316.m_defaultSpriteAssetPath = i5317[29]
  i5316.m_enableEmojiSupport = !!i5317[30]
  i5316.m_MissingCharacterSpriteUnicode = i5317[31]
  var i5323 = i5317[32]
  var i5322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5323.length; i += 2) {
  request.r(i5323[i + 0], i5323[i + 1], 1, i5322, '')
  }
  i5316.m_EmojiFallbackTextAssets = i5322
  i5316.m_defaultColorGradientPresetsPath = i5317[33]
  request.r(i5317[34], i5317[35], 0, i5316, 'm_defaultStyleSheet')
  i5316.m_StyleSheetsResourcePath = i5317[36]
  request.r(i5317[37], i5317[38], 0, i5316, 'm_leadingCharacters')
  request.r(i5317[39], i5317[40], 0, i5316, 'm_followingCharacters')
  i5316.m_UseModernHangulLineBreakingRules = !!i5317[41]
  return i5316
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5326 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5327 = data
  request.r(i5327[0], i5327[1], 0, i5326, 'spriteSheet')
  var i5329 = i5327[2]
  var i5328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.add(request.d('TMPro.TMP_Sprite', i5329[i + 0]));
  }
  i5326.spriteInfoList = i5328
  var i5331 = i5327[3]
  var i5330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5331.length; i += 2) {
  request.r(i5331[i + 0], i5331[i + 1], 1, i5330, '')
  }
  i5326.fallbackSpriteAssets = i5330
  var i5333 = i5327[4]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.add(request.d('TMPro.TMP_SpriteCharacter', i5333[i + 0]));
  }
  i5326.m_SpriteCharacterTable = i5332
  var i5335 = i5327[5]
  var i5334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.add(request.d('TMPro.TMP_SpriteGlyph', i5335[i + 0]));
  }
  i5326.m_GlyphTable = i5334
  i5326.m_Version = i5327[6]
  i5326.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5327[7], i5326.m_FaceInfo)
  request.r(i5327[8], i5327[9], 0, i5326, 'm_Material')
  return i5326
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5338 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5339 = data
  i5338.name = i5339[0]
  i5338.hashCode = i5339[1]
  i5338.unicode = i5339[2]
  i5338.pivot = new pc.Vec2( i5339[3], i5339[4] )
  request.r(i5339[5], i5339[6], 0, i5338, 'sprite')
  i5338.id = i5339[7]
  i5338.x = i5339[8]
  i5338.y = i5339[9]
  i5338.width = i5339[10]
  i5338.height = i5339[11]
  i5338.xOffset = i5339[12]
  i5338.yOffset = i5339[13]
  i5338.xAdvance = i5339[14]
  i5338.scale = i5339[15]
  return i5338
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5344 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5345 = data
  i5344.m_Name = i5345[0]
  i5344.m_ElementType = i5345[1]
  i5344.m_Unicode = i5345[2]
  i5344.m_GlyphIndex = i5345[3]
  i5344.m_Scale = i5345[4]
  return i5344
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5348 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5349 = data
  request.r(i5349[0], i5349[1], 0, i5348, 'sprite')
  i5348.m_Index = i5349[2]
  i5348.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5349[3], i5348.m_Metrics)
  i5348.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5349[4], i5348.m_GlyphRect)
  i5348.m_Scale = i5349[5]
  i5348.m_AtlasIndex = i5349[6]
  i5348.m_ClassDefinitionType = i5349[7]
  return i5348
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5350 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5351 = data
  var i5353 = i5351[0]
  var i5352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.add(request.d('TMPro.TMP_Style', i5353[i + 0]));
  }
  i5350.m_StyleList = i5352
  return i5350
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5356 = root || request.c( 'TMPro.TMP_Style' )
  var i5357 = data
  i5356.m_Name = i5357[0]
  i5356.m_HashCode = i5357[1]
  i5356.m_OpeningDefinition = i5357[2]
  i5356.m_ClosingDefinition = i5357[3]
  i5356.m_OpeningTagArray = i5357[4]
  i5356.m_ClosingTagArray = i5357[5]
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5359 = data
  var i5361 = i5359[0]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5361[i + 0]) );
  }
  i5358.files = i5360
  i5358.componentToPrefabIds = i5359[1]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5365 = data
  i5364.path = i5365[0]
  request.r(i5365[1], i5365[2], 0, i5364, 'unityObject')
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5367 = data
  var i5369 = i5367[0]
  var i5368 = []
  for(var i = 0; i < i5369.length; i += 1) {
    i5368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5369[i + 0]) );
  }
  i5366.scriptsExecutionOrder = i5368
  var i5371 = i5367[1]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5371[i + 0]) );
  }
  i5366.sortingLayers = i5370
  var i5373 = i5367[2]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5373[i + 0]) );
  }
  i5366.cullingLayers = i5372
  i5366.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5367[3], i5366.timeSettings)
  i5366.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5367[4], i5366.physicsSettings)
  i5366.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5367[5], i5366.physics2DSettings)
  i5366.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5367[6], i5366.qualitySettings)
  i5366.enableRealtimeShadows = !!i5367[7]
  i5366.enableAutoInstancing = !!i5367[8]
  i5366.enableStaticBatching = !!i5367[9]
  i5366.enableDynamicBatching = !!i5367[10]
  i5366.lightmapEncodingQuality = i5367[11]
  i5366.desiredColorSpace = i5367[12]
  var i5375 = i5367[13]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( i5375[i + 0] );
  }
  i5366.allTags = i5374
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5379 = data
  i5378.name = i5379[0]
  i5378.value = i5379[1]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5383 = data
  i5382.id = i5383[0]
  i5382.name = i5383[1]
  i5382.value = i5383[2]
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5387 = data
  i5386.id = i5387[0]
  i5386.name = i5387[1]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5389 = data
  i5388.fixedDeltaTime = i5389[0]
  i5388.maximumDeltaTime = i5389[1]
  i5388.timeScale = i5389[2]
  i5388.maximumParticleTimestep = i5389[3]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5391 = data
  i5390.gravity = new pc.Vec3( i5391[0], i5391[1], i5391[2] )
  i5390.defaultSolverIterations = i5391[3]
  i5390.bounceThreshold = i5391[4]
  i5390.autoSyncTransforms = !!i5391[5]
  i5390.autoSimulation = !!i5391[6]
  var i5393 = i5391[7]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5393[i + 0]) );
  }
  i5390.collisionMatrix = i5392
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5397 = data
  i5396.enabled = !!i5397[0]
  i5396.layerId = i5397[1]
  i5396.otherLayerId = i5397[2]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5399 = data
  request.r(i5399[0], i5399[1], 0, i5398, 'material')
  i5398.gravity = new pc.Vec2( i5399[2], i5399[3] )
  i5398.positionIterations = i5399[4]
  i5398.velocityIterations = i5399[5]
  i5398.velocityThreshold = i5399[6]
  i5398.maxLinearCorrection = i5399[7]
  i5398.maxAngularCorrection = i5399[8]
  i5398.maxTranslationSpeed = i5399[9]
  i5398.maxRotationSpeed = i5399[10]
  i5398.baumgarteScale = i5399[11]
  i5398.baumgarteTOIScale = i5399[12]
  i5398.timeToSleep = i5399[13]
  i5398.linearSleepTolerance = i5399[14]
  i5398.angularSleepTolerance = i5399[15]
  i5398.defaultContactOffset = i5399[16]
  i5398.autoSimulation = !!i5399[17]
  i5398.queriesHitTriggers = !!i5399[18]
  i5398.queriesStartInColliders = !!i5399[19]
  i5398.callbacksOnDisable = !!i5399[20]
  i5398.reuseCollisionCallbacks = !!i5399[21]
  i5398.autoSyncTransforms = !!i5399[22]
  var i5401 = i5399[23]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 1) {
    i5400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5401[i + 0]) );
  }
  i5398.collisionMatrix = i5400
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5405 = data
  i5404.enabled = !!i5405[0]
  i5404.layerId = i5405[1]
  i5404.otherLayerId = i5405[2]
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5407 = data
  var i5409 = i5407[0]
  var i5408 = []
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5409[i + 0]) );
  }
  i5406.qualityLevels = i5408
  var i5411 = i5407[1]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.push( i5411[i + 0] );
  }
  i5406.names = i5410
  i5406.shadows = i5407[2]
  i5406.anisotropicFiltering = i5407[3]
  i5406.antiAliasing = i5407[4]
  i5406.lodBias = i5407[5]
  i5406.shadowCascades = i5407[6]
  i5406.shadowDistance = i5407[7]
  i5406.shadowmaskMode = i5407[8]
  i5406.shadowProjection = i5407[9]
  i5406.shadowResolution = i5407[10]
  i5406.softParticles = !!i5407[11]
  i5406.softVegetation = !!i5407[12]
  i5406.activeColorSpace = i5407[13]
  i5406.desiredColorSpace = i5407[14]
  i5406.masterTextureLimit = i5407[15]
  i5406.maxQueuedFrames = i5407[16]
  i5406.particleRaycastBudget = i5407[17]
  i5406.pixelLightCount = i5407[18]
  i5406.realtimeReflectionProbes = !!i5407[19]
  i5406.shadowCascade2Split = i5407[20]
  i5406.shadowCascade4Split = new pc.Vec3( i5407[21], i5407[22], i5407[23] )
  i5406.streamingMipmapsActive = !!i5407[24]
  i5406.vSyncCount = i5407[25]
  i5406.asyncUploadBufferSize = i5407[26]
  i5406.asyncUploadTimeSlice = i5407[27]
  i5406.billboardsFaceCameraPosition = !!i5407[28]
  i5406.shadowNearPlaneOffset = i5407[29]
  i5406.streamingMipmapsMemoryBudget = i5407[30]
  i5406.maximumLODLevel = i5407[31]
  i5406.streamingMipmapsAddAllCameras = !!i5407[32]
  i5406.streamingMipmapsMaxLevelReduction = i5407[33]
  i5406.streamingMipmapsRenderersPerFrame = i5407[34]
  i5406.resolutionScalingFixedDPIFactor = i5407[35]
  i5406.streamingMipmapsMaxFileIORequests = i5407[36]
  i5406.currentQualityLevel = i5407[37]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5417 = data
  i5416.weight = i5417[0]
  i5416.vertices = i5417[1]
  i5416.normals = i5417[2]
  i5416.tangents = i5417[3]
  return i5416
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5418 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5419 = data
  i5418.m_XCoordinate = i5419[0]
  i5418.m_YCoordinate = i5419[1]
  return i5418
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5420 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5421 = data
  i5420.m_XPositionAdjustment = i5421[0]
  i5420.m_YPositionAdjustment = i5421[1]
  return i5420
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5422 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5423 = data
  i5422.xPlacement = i5423[0]
  i5422.yPlacement = i5423[1]
  i5422.xAdvance = i5423[2]
  i5422.yAdvance = i5423[3]
  return i5422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[43],"61":[2],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[2],"84":[33],"85":[86],"87":[86],"21":[20],"5":[2],"36":[10],"88":[2],"89":[90],"91":[46],"92":[21],"93":[20],"34":[33,20],"27":[20,28],"94":[20],"95":[28,20],"96":[33],"97":[28,20],"98":[20],"99":[100],"101":[100],"102":[100],"103":[104],"105":[20],"106":[20],"24":[21],"26":[28,20],"107":[20],"23":[21],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[28,20],"118":[20],"119":[20],"120":[20],"121":[20],"122":[28,20],"123":[20],"124":[46],"125":[46],"47":[46],"126":[46],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","UnityEngine.BoxCollider","CurtainManager","UnityEngine.SpriteRenderer","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.U2D.Animation.SpriteSkin","AnimColorController","PlaySound","PlaySoundOnEnable","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","ItemGraphic","ItemMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39823";

Deserializers.projectId = "1370e8ab0839ac744be970f792ec9b97";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLY-TrickyTwist";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cb7ba1cb-e1a7-48a1-9f93-2e946922dbe9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

