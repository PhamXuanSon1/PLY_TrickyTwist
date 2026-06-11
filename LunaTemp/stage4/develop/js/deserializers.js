var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSpring' )
  var i665 = data
  i664.spring = i665[0]
  i664.damper = i665[1]
  i664.targetPosition = i665[2]
  return i664
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor' )
  var i667 = data
  i666.m_TargetVelocity = i667[0]
  i666.m_Force = i667[1]
  i666.m_FreeSpin = i667[2]
  return i666
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointLimits' )
  var i669 = data
  i668.m_Min = i669[0]
  i668.m_Max = i669[1]
  i668.m_Bounciness = i669[2]
  i668.m_BounceMinVelocity = i669[3]
  i668.m_ContactDistance = i669[4]
  i668.minBounce = i669[5]
  i668.maxBounce = i669[6]
  return i668
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointDrive' )
  var i671 = data
  i670.m_PositionSpring = i671[0]
  i670.m_PositionDamper = i671[1]
  i670.m_MaximumForce = i671[2]
  i670.m_UseAcceleration = i671[3]
  return i670
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i673 = data
  i672.m_Spring = i673[0]
  i672.m_Damper = i673[1]
  return i672
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i675 = data
  i674.m_Limit = i675[0]
  i674.m_Bounciness = i675[1]
  i674.m_ContactDistance = i675[2]
  return i674
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i677 = data
  i676.m_ExtremumSlip = i677[0]
  i676.m_ExtremumValue = i677[1]
  i676.m_AsymptoteSlip = i677[2]
  i676.m_AsymptoteValue = i677[3]
  i676.m_Stiffness = i677[4]
  return i676
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i679 = data
  i678.m_LowerAngle = i679[0]
  i678.m_UpperAngle = i679[1]
  return i678
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i681 = data
  i680.m_MotorSpeed = i681[0]
  i680.m_MaximumMotorTorque = i681[1]
  return i680
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i683 = data
  i682.m_DampingRatio = i683[0]
  i682.m_Frequency = i683[1]
  i682.m_Angle = i683[2]
  return i682
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i685 = data
  i684.m_LowerTranslation = i685[0]
  i684.m_UpperTranslation = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i686 = root || new pc.UnityMaterial()
  var i687 = data
  i686.name = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'shader')
  i686.renderQueue = i687[3]
  i686.enableInstancing = !!i687[4]
  var i689 = i687[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i689[i + 0]) );
  }
  i686.floatParameters = i688
  var i691 = i687[6]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i691[i + 0]) );
  }
  i686.colorParameters = i690
  var i693 = i687[7]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i693[i + 0]) );
  }
  i686.vectorParameters = i692
  var i695 = i687[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i695[i + 0]) );
  }
  i686.textureParameters = i694
  var i697 = i687[9]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i697[i + 0]) );
  }
  i686.materialFlags = i696
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = new pc.Color(i705[1], i705[2], i705[3], i705[4])
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Vec4( i709[1], i709[2], i709[3], i709[4] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i713 = data
  i712.name = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'value')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i717 = data
  i716.name = i717[0]
  i716.enabled = !!i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i719 = data
  i718.name = i719[0]
  i718.width = i719[1]
  i718.height = i719[2]
  i718.mipmapCount = i719[3]
  i718.anisoLevel = i719[4]
  i718.filterMode = i719[5]
  i718.hdr = !!i719[6]
  i718.format = i719[7]
  i718.wrapMode = i719[8]
  i718.alphaIsTransparency = !!i719[9]
  i718.alphaSource = i719[10]
  i718.graphicsFormat = i719[11]
  i718.sRGBTexture = !!i719[12]
  i718.desiredColorSpace = i719[13]
  i718.wrapU = i719[14]
  i718.wrapV = i719[15]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i721 = data
  i720.name = i721[0]
  i720.halfPrecision = !!i721[1]
  i720.useSimplification = !!i721[2]
  i720.useUInt32IndexFormat = !!i721[3]
  i720.vertexCount = i721[4]
  i720.aabb = i721[5]
  var i723 = i721[6]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( !!i723[i + 0] );
  }
  i720.streams = i722
  i720.vertices = i721[7]
  var i725 = i721[8]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i725[i + 0]) );
  }
  i720.subMeshes = i724
  var i727 = i721[9]
  var i726 = []
  for(var i = 0; i < i727.length; i += 16) {
    i726.push( new pc.Mat4().setData(i727[i + 0], i727[i + 1], i727[i + 2], i727[i + 3],  i727[i + 4], i727[i + 5], i727[i + 6], i727[i + 7],  i727[i + 8], i727[i + 9], i727[i + 10], i727[i + 11],  i727[i + 12], i727[i + 13], i727[i + 14], i727[i + 15]) );
  }
  i720.bindposes = i726
  var i729 = i721[10]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i729[i + 0]) );
  }
  i720.blendShapes = i728
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i735 = data
  i734.triangles = i735[0]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i741 = data
  i740.name = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i743[i + 0]) );
  }
  i740.frames = i742
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i745 = data
  i744.name = i745[0]
  i744.index = i745[1]
  i744.startup = !!i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i747 = data
  i746.aspect = i747[0]
  i746.orthographic = !!i747[1]
  i746.orthographicSize = i747[2]
  i746.backgroundColor = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.nearClipPlane = i747[7]
  i746.farClipPlane = i747[8]
  i746.fieldOfView = i747[9]
  i746.depth = i747[10]
  i746.clearFlags = i747[11]
  i746.cullingMask = i747[12]
  i746.rect = i747[13]
  request.r(i747[14], i747[15], 0, i746, 'targetTexture')
  i746.usePhysicalProperties = !!i747[16]
  i746.focalLength = i747[17]
  i746.sensorSize = new pc.Vec2( i747[18], i747[19] )
  i746.lensShift = new pc.Vec2( i747[20], i747[21] )
  i746.gateFit = i747[22]
  i746.commandBufferCount = i747[23]
  i746.cameraType = i747[24]
  i746.enabled = !!i747[25]
  return i746
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i748 = root || request.c( 'AutoCameraFit' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'canvasBtn')
  request.r(i749[2], i749[3], 0, i748, 'targetArea')
  i748.paddingLandscape = i749[4]
  i748.paddingPortrait = i749[5]
  i748.extraPaddingSmallScreen = i749[6]
  i748.smallScreenThreshold = i749[7]
  i748.autoUpdateOnResize = !!i749[8]
  i748.adjustInEditMode = !!i749[9]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i751 = data
  i750.name = i751[0]
  i750.tagId = i751[1]
  i750.enabled = !!i751[2]
  i750.isStatic = !!i751[3]
  i750.layer = i751[4]
  return i750
}

Deserializers["InputManager"] = function (request, data, root) {
  var i752 = root || request.c( 'InputManager' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'mainCamera')
  i752.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i753[2] )
  i752.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i753[3] )
  i752.installLayer = UnityEngine.LayerMask.FromIntegerValue( i753[4] )
  i752.maxDistance = i753[5]
  i752.curtainsToGotoStore = i753[6]
  return i752
}

Deserializers["CurtainManager"] = function (request, data, root) {
  var i754 = root || request.c( 'CurtainManager' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i754.curtains = i756
  i754.onCurtainRemoved = request.d('UnityEngine.Events.UnityEvent', i755[1], i754.onCurtainRemoved)
  return i754
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i761 = data
  i760.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i761[0], i760.m_PersistentCalls)
  return i760
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i763 = data
  var i765 = i763[0]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UnityEngine.Events.PersistentCall', i765[i + 0]));
  }
  i762.m_Calls = i764
  return i762
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_Target')
  i768.m_TargetAssemblyTypeName = i769[2]
  i768.m_MethodName = i769[3]
  i768.m_Mode = i769[4]
  i768.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i769[5], i768.m_Arguments)
  i768.m_CallState = i769[6]
  return i768
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i770 = root || request.c( 'HandHintMmanager' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770.hintItems = i772
  request.r(i771[1], i771[2], 0, i770, 'handHintObject')
  request.r(i771[3], i771[4], 0, i770, 'handAnimator')
  i770.idleTimeToHint = i771[5]
  i770.dragAnimDuration = i771[6]
  return i770
}

Deserializers["GameManager"] = function (request, data, root) {
  var i776 = root || request.c( 'GameManager' )
  var i777 = data
  return i776
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i778 = root || request.c( 'ItemManager' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i778.items = i780
  var i783 = i779[1]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('GirlEvolutionData')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('GirlEvolutionData', i783[i + 0]));
  }
  i778.girlEvolutions = i782
  return i778
}

Deserializers["GirlEvolutionData"] = function (request, data, root) {
  var i786 = root || request.c( 'GirlEvolutionData' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'girlObject')
  i786.unlockAtCurtainCount = i787[2]
  return i786
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i788 = root || request.c( 'Ply_SoundManager' )
  var i789 = data
  i788.fxAudio = request.d('FxAudio', i789[0], i788.fxAudio)
  request.r(i789[1], i789[2], 0, i788, 'bgm1')
  return i788
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i790 = root || request.c( 'FxAudio' )
  var i791 = data
  i790.None = request.d('SoundData', i791[0], i790.None)
  i790.ClickBox = request.d('SoundData', i791[1], i790.ClickBox)
  i790.Fan = request.d('SoundData', i791[2], i790.Fan)
  i790.Cream = request.d('SoundData', i791[3], i790.Cream)
  i790.Switch = request.d('SoundData', i791[4], i790.Switch)
  i790.Lighter = request.d('SoundData', i791[5], i790.Lighter)
  i790.Sausage = request.d('SoundData', i791[6], i790.Sausage)
  i790.Scissor = request.d('SoundData', i791[7], i790.Scissor)
  i790.Watertap = request.d('SoundData', i791[8], i790.Watertap)
  i790.Dog = request.d('SoundData', i791[9], i790.Dog)
  i790.Curtain = request.d('SoundData', i791[10], i790.Curtain)
  i790.Flame = request.d('SoundData', i791[11], i790.Flame)
  return i790
}

Deserializers["SoundData"] = function (request, data, root) {
  var i792 = root || request.c( 'SoundData' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'clip')
  i792.repeatCount = i793[2]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'clip')
  request.r(i795[2], i795[3], 0, i794, 'outputAudioMixerGroup')
  i794.playOnAwake = !!i795[4]
  i794.loop = !!i795[5]
  i794.time = i795[6]
  i794.volume = i795[7]
  i794.pitch = i795[8]
  i794.enabled = !!i795[9]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i797 = data
  i796.pivot = new pc.Vec2( i797[0], i797[1] )
  i796.anchorMin = new pc.Vec2( i797[2], i797[3] )
  i796.anchorMax = new pc.Vec2( i797[4], i797[5] )
  i796.sizeDelta = new pc.Vec2( i797[6], i797[7] )
  i796.anchoredPosition3D = new pc.Vec3( i797[8], i797[9], i797[10] )
  i796.rotation = new pc.Quat(i797[11], i797[12], i797[13], i797[14])
  i796.scale = new pc.Vec3( i797[15], i797[16], i797[17] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i799 = data
  i798.planeDistance = i799[0]
  i798.referencePixelsPerUnit = i799[1]
  i798.isFallbackOverlay = !!i799[2]
  i798.renderMode = i799[3]
  i798.renderOrder = i799[4]
  i798.sortingLayerName = i799[5]
  i798.sortingOrder = i799[6]
  i798.scaleFactor = i799[7]
  request.r(i799[8], i799[9], 0, i798, 'worldCamera')
  i798.overrideSorting = !!i799[10]
  i798.pixelPerfect = !!i799[11]
  i798.targetDisplay = i799[12]
  i798.overridePixelPerfect = !!i799[13]
  i798.enabled = !!i799[14]
  return i798
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i801 = data
  i800.m_UiScaleMode = i801[0]
  i800.m_ReferencePixelsPerUnit = i801[1]
  i800.m_ScaleFactor = i801[2]
  i800.m_ReferenceResolution = new pc.Vec2( i801[3], i801[4] )
  i800.m_ScreenMatchMode = i801[5]
  i800.m_MatchWidthOrHeight = i801[6]
  i800.m_PhysicalUnit = i801[7]
  i800.m_FallbackScreenDPI = i801[8]
  i800.m_DefaultSpriteDPI = i801[9]
  i800.m_DynamicPixelsPerUnit = i801[10]
  i800.m_PresetInfoIsWorld = !!i801[11]
  return i800
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i803 = data
  i802.m_IgnoreReversedGraphics = !!i803[0]
  i802.m_BlockingObjects = i803[1]
  i802.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i803[2] )
  return i802
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i804 = root || request.c( 'ProgressBarUI' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'fillImage')
  request.r(i805[2], i805[3], 0, i804, 'progressText')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i807 = data
  i806.cullTransparentMesh = !!i807[0]
  return i806
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Image' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Sprite')
  i808.m_Type = i809[2]
  i808.m_PreserveAspect = !!i809[3]
  i808.m_FillCenter = !!i809[4]
  i808.m_FillMethod = i809[5]
  i808.m_FillAmount = i809[6]
  i808.m_FillClockwise = !!i809[7]
  i808.m_FillOrigin = i809[8]
  i808.m_UseSpriteMesh = !!i809[9]
  i808.m_PixelsPerUnitMultiplier = i809[10]
  request.r(i809[11], i809[12], 0, i808, 'm_Material')
  i808.m_Maskable = !!i809[13]
  i808.m_Color = new pc.Color(i809[14], i809[15], i809[16], i809[17])
  i808.m_RaycastTarget = !!i809[18]
  i808.m_RaycastPadding = new pc.Vec4( i809[19], i809[20], i809[21], i809[22] )
  return i808
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i811 = data
  i810.m_hasFontAssetChanged = !!i811[0]
  request.r(i811[1], i811[2], 0, i810, 'm_baseMaterial')
  i810.m_maskOffset = new pc.Vec4( i811[3], i811[4], i811[5], i811[6] )
  i810.m_text = i811[7]
  i810.m_isRightToLeft = !!i811[8]
  request.r(i811[9], i811[10], 0, i810, 'm_fontAsset')
  request.r(i811[11], i811[12], 0, i810, 'm_sharedMaterial')
  var i813 = i811[13]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.m_fontSharedMaterials = i812
  request.r(i811[14], i811[15], 0, i810, 'm_fontMaterial')
  var i815 = i811[16]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i810.m_fontMaterials = i814
  i810.m_fontColor32 = UnityEngine.Color32.ConstructColor(i811[17], i811[18], i811[19], i811[20])
  i810.m_fontColor = new pc.Color(i811[21], i811[22], i811[23], i811[24])
  i810.m_enableVertexGradient = !!i811[25]
  i810.m_colorMode = i811[26]
  i810.m_fontColorGradient = request.d('TMPro.VertexGradient', i811[27], i810.m_fontColorGradient)
  request.r(i811[28], i811[29], 0, i810, 'm_fontColorGradientPreset')
  request.r(i811[30], i811[31], 0, i810, 'm_spriteAsset')
  i810.m_tintAllSprites = !!i811[32]
  request.r(i811[33], i811[34], 0, i810, 'm_StyleSheet')
  i810.m_TextStyleHashCode = i811[35]
  i810.m_overrideHtmlColors = !!i811[36]
  i810.m_faceColor = UnityEngine.Color32.ConstructColor(i811[37], i811[38], i811[39], i811[40])
  i810.m_fontSize = i811[41]
  i810.m_fontSizeBase = i811[42]
  i810.m_fontWeight = i811[43]
  i810.m_enableAutoSizing = !!i811[44]
  i810.m_fontSizeMin = i811[45]
  i810.m_fontSizeMax = i811[46]
  i810.m_fontStyle = i811[47]
  i810.m_HorizontalAlignment = i811[48]
  i810.m_VerticalAlignment = i811[49]
  i810.m_textAlignment = i811[50]
  i810.m_characterSpacing = i811[51]
  i810.m_wordSpacing = i811[52]
  i810.m_lineSpacing = i811[53]
  i810.m_lineSpacingMax = i811[54]
  i810.m_paragraphSpacing = i811[55]
  i810.m_charWidthMaxAdj = i811[56]
  i810.m_TextWrappingMode = i811[57]
  i810.m_wordWrappingRatios = i811[58]
  i810.m_overflowMode = i811[59]
  request.r(i811[60], i811[61], 0, i810, 'm_linkedTextComponent')
  request.r(i811[62], i811[63], 0, i810, 'parentLinkedComponent')
  i810.m_enableKerning = !!i811[64]
  var i817 = i811[65]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(i817[i + 0]);
  }
  i810.m_ActiveFontFeatures = i816
  i810.m_enableExtraPadding = !!i811[66]
  i810.checkPaddingRequired = !!i811[67]
  i810.m_isRichText = !!i811[68]
  i810.m_parseCtrlCharacters = !!i811[69]
  i810.m_isOrthographic = !!i811[70]
  i810.m_isCullingEnabled = !!i811[71]
  i810.m_horizontalMapping = i811[72]
  i810.m_verticalMapping = i811[73]
  i810.m_uvLineOffset = i811[74]
  i810.m_geometrySortingOrder = i811[75]
  i810.m_IsTextObjectScaleStatic = !!i811[76]
  i810.m_VertexBufferAutoSizeReduction = !!i811[77]
  i810.m_useMaxVisibleDescender = !!i811[78]
  i810.m_pageToDisplay = i811[79]
  i810.m_margin = new pc.Vec4( i811[80], i811[81], i811[82], i811[83] )
  i810.m_isUsingLegacyAnimationComponent = !!i811[84]
  i810.m_isVolumetricText = !!i811[85]
  request.r(i811[86], i811[87], 0, i810, 'm_Material')
  i810.m_EmojiFallbackSupport = !!i811[88]
  i810.m_Maskable = !!i811[89]
  i810.m_Color = new pc.Color(i811[90], i811[91], i811[92], i811[93])
  i810.m_RaycastTarget = !!i811[94]
  i810.m_RaycastPadding = new pc.Vec4( i811[95], i811[96], i811[97], i811[98] )
  return i810
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.VertexGradient' )
  var i821 = data
  i820.topLeft = new pc.Color(i821[0], i821[1], i821[2], i821[3])
  i820.topRight = new pc.Color(i821[4], i821[5], i821[6], i821[7])
  i820.bottomLeft = new pc.Color(i821[8], i821[9], i821[10], i821[11])
  i820.bottomRight = new pc.Color(i821[12], i821[13], i821[14], i821[15])
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i825 = data
  i824.color = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  request.r(i825[4], i825[5], 0, i824, 'sprite')
  i824.flipX = !!i825[6]
  i824.flipY = !!i825[7]
  i824.drawMode = i825[8]
  i824.size = new pc.Vec2( i825[9], i825[10] )
  i824.tileMode = i825[11]
  i824.adaptiveModeThreshold = i825[12]
  i824.maskInteraction = i825[13]
  i824.spriteSortPoint = i825[14]
  i824.enabled = !!i825[15]
  request.r(i825[16], i825[17], 0, i824, 'sharedMaterial')
  var i827 = i825[18]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[19]
  i824.shadowCastingMode = i825[20]
  i824.sortingLayerID = i825[21]
  i824.sortingOrder = i825[22]
  i824.lightmapIndex = i825[23]
  i824.lightmapSceneIndex = i825[24]
  i824.lightmapScaleOffset = new pc.Vec4( i825[25], i825[26], i825[27], i825[28] )
  i824.lightProbeUsage = i825[29]
  i824.reflectionProbeUsage = i825[30]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i829 = data
  i828.center = new pc.Vec3( i829[0], i829[1], i829[2] )
  i828.size = new pc.Vec3( i829[3], i829[4], i829[5] )
  i828.enabled = !!i829[6]
  i828.isTrigger = !!i829[7]
  request.r(i829[8], i829[9], 0, i828, 'material')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'animatorController')
  request.r(i831[2], i831[3], 0, i830, 'avatar')
  i830.updateMode = i831[4]
  i830.hasTransformHierarchy = !!i831[5]
  i830.applyRootMotion = !!i831[6]
  var i833 = i831[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.humanBones = i832
  i830.enabled = !!i831[8]
  return i830
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_RootBone')
  var i839 = i837[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.m_BoneTransforms = i838
  i836.m_AlwaysUpdate = !!i837[3]
  i836.m_AutoRebind = !!i837[4]
  return i836
}

Deserializers["AnimColorController"] = function (request, data, root) {
  var i840 = root || request.c( 'AnimColorController' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 1, i842, '')
  }
  i840.partsToColor = i842
  return i840
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i844 = root || request.c( 'PlaySound' )
  var i845 = data
  i844.fxType = i845[0]
  return i844
}

Deserializers["PlaySoundOnEnable"] = function (request, data, root) {
  var i846 = root || request.c( 'PlaySoundOnEnable' )
  var i847 = data
  i846.soundToPlay = i847[0]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i849 = data
  i848.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i849[0], i848.main)
  i848.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i849[1], i848.colorBySpeed)
  i848.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i849[2], i848.colorOverLifetime)
  i848.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i849[3], i848.emission)
  i848.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i849[4], i848.rotationBySpeed)
  i848.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i849[5], i848.rotationOverLifetime)
  i848.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i849[6], i848.shape)
  i848.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i849[7], i848.sizeBySpeed)
  i848.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i849[8], i848.sizeOverLifetime)
  i848.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i849[9], i848.textureSheetAnimation)
  i848.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i849[10], i848.velocityOverLifetime)
  i848.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i849[11], i848.noise)
  i848.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i849[12], i848.inheritVelocity)
  i848.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i849[13], i848.forceOverLifetime)
  i848.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i849[14], i848.limitVelocityOverLifetime)
  i848.useAutoRandomSeed = !!i849[15]
  i848.randomSeed = i849[16]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemMain()
  var i851 = data
  i850.duration = i851[0]
  i850.loop = !!i851[1]
  i850.prewarm = !!i851[2]
  i850.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.startDelay)
  i850.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.startLifetime)
  i850.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[5], i850.startSpeed)
  i850.startSize3D = !!i851[6]
  i850.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.startSizeX)
  i850.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.startSizeY)
  i850.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[9], i850.startSizeZ)
  i850.startRotation3D = !!i851[10]
  i850.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[11], i850.startRotationX)
  i850.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[12], i850.startRotationY)
  i850.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[13], i850.startRotationZ)
  i850.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i851[14], i850.startColor)
  i850.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[15], i850.gravityModifier)
  i850.simulationSpace = i851[16]
  request.r(i851[17], i851[18], 0, i850, 'customSimulationSpace')
  i850.simulationSpeed = i851[19]
  i850.useUnscaledTime = !!i851[20]
  i850.scalingMode = i851[21]
  i850.playOnAwake = !!i851[22]
  i850.maxParticles = i851[23]
  i850.emitterVelocityMode = i851[24]
  i850.stopAction = i851[25]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i852 = root || new pc.MinMaxCurve()
  var i853 = data
  i852.mode = i853[0]
  i852.curveMin = new pc.AnimationCurve( { keys_flow: i853[1] } )
  i852.curveMax = new pc.AnimationCurve( { keys_flow: i853[2] } )
  i852.curveMultiplier = i853[3]
  i852.constantMin = i853[4]
  i852.constantMax = i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i854 = root || new pc.MinMaxGradient()
  var i855 = data
  i854.mode = i855[0]
  i854.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[1], i854.gradientMin)
  i854.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[2], i854.gradientMax)
  i854.colorMin = new pc.Color(i855[3], i855[4], i855[5], i855[6])
  i854.colorMax = new pc.Color(i855[7], i855[8], i855[9], i855[10])
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i857 = data
  i856.mode = i857[0]
  var i859 = i857[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i859[i + 0]) );
  }
  i856.colorKeys = i858
  var i861 = i857[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i861[i + 0]) );
  }
  i856.alphaKeys = i860
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemColorBySpeed()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i863[1], i862.color)
  i862.range = new pc.Vec2( i863[2], i863[3] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i867 = data
  i866.color = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.time = i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i871 = data
  i870.alpha = i871[0]
  i870.time = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemColorOverLifetime()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i873[1], i872.color)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemEmitter()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.rateOverTime)
  i874.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.rateOverDistance)
  var i877 = i875[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i877[i + 0]) );
  }
  i874.bursts = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemBurst()
  var i881 = data
  i880.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[0], i880.count)
  i880.cycleCount = i881[1]
  i880.minCount = i881[2]
  i880.maxCount = i881[3]
  i880.repeatInterval = i881[4]
  i880.time = i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemRotationBySpeed()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.x)
  i882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.y)
  i882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.z)
  i882.separateAxes = !!i883[4]
  i882.range = new pc.Vec2( i883[5], i883[6] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemRotationOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemShape()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.shapeType = i887[1]
  i886.randomDirectionAmount = i887[2]
  i886.sphericalDirectionAmount = i887[3]
  i886.randomPositionAmount = i887[4]
  i886.alignToDirection = !!i887[5]
  i886.radius = i887[6]
  i886.radiusMode = i887[7]
  i886.radiusSpread = i887[8]
  i886.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[9], i886.radiusSpeed)
  i886.radiusThickness = i887[10]
  i886.angle = i887[11]
  i886.length = i887[12]
  i886.boxThickness = new pc.Vec3( i887[13], i887[14], i887[15] )
  i886.meshShapeType = i887[16]
  request.r(i887[17], i887[18], 0, i886, 'mesh')
  request.r(i887[19], i887[20], 0, i886, 'meshRenderer')
  request.r(i887[21], i887[22], 0, i886, 'skinnedMeshRenderer')
  i886.useMeshMaterialIndex = !!i887[23]
  i886.meshMaterialIndex = i887[24]
  i886.useMeshColors = !!i887[25]
  i886.normalOffset = i887[26]
  i886.arc = i887[27]
  i886.arcMode = i887[28]
  i886.arcSpread = i887[29]
  i886.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[30], i886.arcSpeed)
  i886.donutRadius = i887[31]
  i886.position = new pc.Vec3( i887[32], i887[33], i887[34] )
  i886.rotation = new pc.Vec3( i887[35], i887[36], i887[37] )
  i886.scale = new pc.Vec3( i887[38], i887[39], i887[40] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemSizeBySpeed()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  i888.range = new pc.Vec2( i889[5], i889[6] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemSizeOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.mode = i893[1]
  i892.animation = i893[2]
  i892.numTilesX = i893[3]
  i892.numTilesY = i893[4]
  i892.useRandomRow = !!i893[5]
  i892.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[6], i892.frameOverTime)
  i892.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[7], i892.startFrame)
  i892.cycleCount = i893[8]
  i892.rowIndex = i893[9]
  i892.flipU = i893[10]
  i892.flipV = i893[11]
  i892.spriteCount = i893[12]
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.sprites = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.radial)
  i898.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[5], i898.speedModifier)
  i898.space = i899[6]
  i898.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[7], i898.orbitalX)
  i898.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[8], i898.orbitalY)
  i898.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.orbitalZ)
  i898.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[10], i898.orbitalOffsetX)
  i898.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.orbitalOffsetY)
  i898.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[12], i898.orbitalOffsetZ)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemNoise()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.separateAxes = !!i901[1]
  i900.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.strengthX)
  i900.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.strengthY)
  i900.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[4], i900.strengthZ)
  i900.frequency = i901[5]
  i900.damping = !!i901[6]
  i900.octaveCount = i901[7]
  i900.octaveMultiplier = i901[8]
  i900.octaveScale = i901[9]
  i900.quality = i901[10]
  i900.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[11], i900.scrollSpeed)
  i900.scrollSpeedMultiplier = i901[12]
  i900.remapEnabled = !!i901[13]
  i900.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[14], i900.remapX)
  i900.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[15], i900.remapY)
  i900.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[16], i900.remapZ)
  i900.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[17], i900.positionAmount)
  i900.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[18], i900.rotationAmount)
  i900.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[19], i900.sizeAmount)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemInheritVelocity()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.mode = i903[1]
  i902.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.curve)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemForceOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.space = i905[4]
  i904.randomized = !!i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.limit)
  i906.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.limitX)
  i906.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.limitY)
  i906.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.limitZ)
  i906.dampen = i907[5]
  i906.separateAxes = !!i907[6]
  i906.space = i907[7]
  i906.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.drag)
  i906.multiplyDragByParticleSize = !!i907[9]
  i906.multiplyDragByParticleVelocity = !!i907[10]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'mesh')
  i908.meshCount = i909[2]
  i908.activeVertexStreamsCount = i909[3]
  i908.alignment = i909[4]
  i908.renderMode = i909[5]
  i908.sortMode = i909[6]
  i908.lengthScale = i909[7]
  i908.velocityScale = i909[8]
  i908.cameraVelocityScale = i909[9]
  i908.normalDirection = i909[10]
  i908.sortingFudge = i909[11]
  i908.minParticleSize = i909[12]
  i908.maxParticleSize = i909[13]
  i908.pivot = new pc.Vec3( i909[14], i909[15], i909[16] )
  request.r(i909[17], i909[18], 0, i908, 'trailMaterial')
  i908.applyActiveColorSpace = !!i909[19]
  i908.enabled = !!i909[20]
  request.r(i909[21], i909[22], 0, i908, 'sharedMaterial')
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[24]
  i908.shadowCastingMode = i909[25]
  i908.sortingLayerID = i909[26]
  i908.sortingOrder = i909[27]
  i908.lightmapIndex = i909[28]
  i908.lightmapSceneIndex = i909[29]
  i908.lightmapScaleOffset = new pc.Vec4( i909[30], i909[31], i909[32], i909[33] )
  i908.lightProbeUsage = i909[34]
  i908.reflectionProbeUsage = i909[35]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'sharedMesh')
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.bones = i914
  i912.updateWhenOffscreen = !!i913[3]
  i912.localBounds = i913[4]
  request.r(i913[5], i913[6], 0, i912, 'rootBone')
  var i917 = i913[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i917[i + 0]) );
  }
  i912.blendShapesWeights = i916
  i912.enabled = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'sharedMaterial')
  var i919 = i913[11]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i912.sharedMaterials = i918
  i912.receiveShadows = !!i913[12]
  i912.shadowCastingMode = i913[13]
  i912.sortingLayerID = i913[14]
  i912.sortingOrder = i913[15]
  i912.lightmapIndex = i913[16]
  i912.lightmapSceneIndex = i913[17]
  i912.lightmapScaleOffset = new pc.Vec4( i913[18], i913[19], i913[20], i913[21] )
  i912.lightProbeUsage = i913[22]
  i912.reflectionProbeUsage = i913[23]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i923 = data
  i922.weight = i923[0]
  return i922
}

Deserializers["ItemController"] = function (request, data, root) {
  var i924 = root || request.c( 'ItemController' )
  var i925 = data
  i924.itemType = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'dropTarget')
  i924.onClick = request.d('UnityEngine.Events.UnityEvent', i925[3], i924.onClick)
  i924.onDrop = request.d('UnityEngine.Events.UnityEvent', i925[4], i924.onDrop)
  i924.onDragStart = request.d('UnityEngine.Events.UnityEvent', i925[5], i924.onDragStart)
  i924.onReturn = request.d('UnityEngine.Events.UnityEvent', i925[6], i924.onReturn)
  var i927 = i925[7]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('AnimObjectData', i927[i + 0]));
  }
  i924.animationObjects = i926
  i924.fxSoundType = i925[8]
  return i924
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'm_ObjectArgument')
  i928.m_ObjectArgumentAssemblyTypeName = i929[2]
  i928.m_IntArgument = i929[3]
  i928.m_FloatArgument = i929[4]
  i928.m_StringArgument = i929[5]
  i928.m_BoolArgument = !!i929[6]
  return i928
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i932 = root || request.c( 'AnimObjectData' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'animObj')
  i932.delayFromStart = i933[2]
  i932.durationToDeactivate = i933[3]
  return i932
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i934 = root || request.c( 'ItemGraphic' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.spriteRenderers = i936
  i934.sortingOrderOffset = i935[1]
  return i934
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i938 = root || request.c( 'ItemMovement' )
  var i939 = data
  return i938
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_FirstSelected')
  i940.m_sendNavigationEvents = !!i941[2]
  i940.m_DragThreshold = i941[3]
  return i940
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i943 = data
  i942.m_HorizontalAxis = i943[0]
  i942.m_VerticalAxis = i943[1]
  i942.m_SubmitButton = i943[2]
  i942.m_CancelButton = i943[3]
  i942.m_InputActionsPerSecond = i943[4]
  i942.m_RepeatDelay = i943[5]
  i942.m_ForceModuleActive = !!i943[6]
  i942.m_SendPointerHoverToParent = !!i943[7]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i945 = data
  i944.ambientIntensity = i945[0]
  i944.reflectionIntensity = i945[1]
  i944.ambientMode = i945[2]
  i944.ambientLight = new pc.Color(i945[3], i945[4], i945[5], i945[6])
  i944.ambientSkyColor = new pc.Color(i945[7], i945[8], i945[9], i945[10])
  i944.ambientGroundColor = new pc.Color(i945[11], i945[12], i945[13], i945[14])
  i944.ambientEquatorColor = new pc.Color(i945[15], i945[16], i945[17], i945[18])
  i944.fogColor = new pc.Color(i945[19], i945[20], i945[21], i945[22])
  i944.fogEndDistance = i945[23]
  i944.fogStartDistance = i945[24]
  i944.fogDensity = i945[25]
  i944.fog = !!i945[26]
  request.r(i945[27], i945[28], 0, i944, 'skybox')
  i944.fogMode = i945[29]
  var i947 = i945[30]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i947[i + 0]) );
  }
  i944.lightmaps = i946
  i944.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i945[31], i944.lightProbes)
  i944.lightmapsMode = i945[32]
  i944.mixedBakeMode = i945[33]
  i944.environmentLightingMode = i945[34]
  i944.ambientProbe = new pc.SphericalHarmonicsL2(i945[35])
  i944.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i945[36])
  i944.useReferenceAmbientProbe = !!i945[37]
  request.r(i945[38], i945[39], 0, i944, 'customReflection')
  request.r(i945[40], i945[41], 0, i944, 'defaultReflection')
  i944.defaultReflectionMode = i945[42]
  i944.defaultReflectionResolution = i945[43]
  i944.sunLightObjectId = i945[44]
  i944.pixelLightCount = i945[45]
  i944.defaultReflectionHDR = !!i945[46]
  i944.hasLightDataAsset = !!i945[47]
  i944.hasManualGenerate = !!i945[48]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'lightmapColor')
  request.r(i951[2], i951[3], 0, i950, 'lightmapDirection')
  request.r(i951[4], i951[5], 0, i950, 'shadowMask')
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i952 = root || new UnityEngine.LightProbes()
  var i953 = data
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i963[i + 0]));
  }
  i960.ShaderCompilationErrors = i962
  i960.name = i961[1]
  i960.guid = i961[2]
  var i965 = i961[3]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.shaderDefinedKeywords = i964
  var i967 = i961[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i967[i + 0]) );
  }
  i960.passes = i966
  var i969 = i961[5]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i969[i + 0]) );
  }
  i960.usePasses = i968
  var i971 = i961[6]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i971[i + 0]) );
  }
  i960.defaultParameterValues = i970
  request.r(i961[7], i961[8], 0, i960, 'unityFallbackShader')
  i960.readDepth = !!i961[9]
  i960.hasDepthOnlyPass = !!i961[10]
  i960.isCreatedByShaderGraph = !!i961[11]
  i960.disableBatching = !!i961[12]
  i960.compiled = !!i961[13]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i975 = data
  i974.shaderName = i975[0]
  i974.errorMessage = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i980 = root || new pc.UnityShaderPass()
  var i981 = data
  i980.id = i981[0]
  i980.subShaderIndex = i981[1]
  i980.name = i981[2]
  i980.passType = i981[3]
  i980.grabPassTextureName = i981[4]
  i980.usePass = !!i981[5]
  i980.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[6], i980.zTest)
  i980.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[7], i980.zWrite)
  i980.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[8], i980.culling)
  i980.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i981[9], i980.blending)
  i980.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i981[10], i980.alphaBlending)
  i980.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[11], i980.colorWriteMask)
  i980.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[12], i980.offsetUnits)
  i980.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[13], i980.offsetFactor)
  i980.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[14], i980.stencilRef)
  i980.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[15], i980.stencilReadMask)
  i980.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[16], i980.stencilWriteMask)
  i980.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[17], i980.stencilOp)
  i980.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[18], i980.stencilOpFront)
  i980.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i981[19], i980.stencilOpBack)
  var i983 = i981[20]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i983[i + 0]) );
  }
  i980.tags = i982
  var i985 = i981[21]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i980.passDefinedKeywords = i984
  var i987 = i981[22]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i987[i + 0]) );
  }
  i980.passDefinedKeywordGroups = i986
  var i989 = i981[23]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i989[i + 0]) );
  }
  i980.variants = i988
  var i991 = i981[24]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i991[i + 0]) );
  }
  i980.excludedVariants = i990
  i980.hasDepthReader = !!i981[25]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i993 = data
  i992.val = i993[0]
  i992.name = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i995 = data
  i994.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[0], i994.src)
  i994.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[1], i994.dst)
  i994.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[2], i994.op)
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i997 = data
  i996.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[0], i996.pass)
  i996.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[1], i996.fail)
  i996.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[2], i996.zFail)
  i996.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[3], i996.comp)
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.value = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.keywords = i1006
  i1004.hasDiscard = !!i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1011 = data
  i1010.passId = i1011[0]
  i1010.subShaderIndex = i1011[1]
  var i1013 = i1011[2]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1010.keywords = i1012
  i1010.vertexProgram = i1011[3]
  i1010.fragmentProgram = i1011[4]
  i1010.exportedForWebGl2 = !!i1011[5]
  i1010.readDepth = !!i1011[6]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'shader')
  i1016.pass = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.type = i1021[1]
  i1020.value = new pc.Vec4( i1021[2], i1021[3], i1021[4], i1021[5] )
  i1020.textureValue = i1021[6]
  i1020.shaderPropertyFlag = i1021[7]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1023 = data
  i1022.name = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'texture')
  i1022.aabb = i1023[3]
  i1022.vertices = i1023[4]
  i1022.triangles = i1023[5]
  i1022.textureRect = UnityEngine.Rect.MinMaxRect(i1023[6], i1023[7], i1023[8], i1023[9])
  i1022.packedRect = UnityEngine.Rect.MinMaxRect(i1023[10], i1023[11], i1023[12], i1023[13])
  i1022.border = new pc.Vec4( i1023[14], i1023[15], i1023[16], i1023[17] )
  i1022.transparency = i1023[18]
  i1022.bounds = i1023[19]
  i1022.pixelsPerUnit = i1023[20]
  i1022.textureWidth = i1023[21]
  i1022.textureHeight = i1023[22]
  i1022.nativeSize = new pc.Vec2( i1023[23], i1023[24] )
  i1022.pivot = new pc.Vec2( i1023[25], i1023[26] )
  i1022.textureRectOffset = new pc.Vec2( i1023[27], i1023[28] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1025 = data
  i1024.name = i1025[0]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.wrapMode = i1027[1]
  i1026.isLooping = !!i1027[2]
  i1026.length = i1027[3]
  var i1029 = i1027[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1029[i + 0]) );
  }
  i1026.curves = i1028
  var i1031 = i1027[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1031[i + 0]) );
  }
  i1026.events = i1030
  i1026.halfPrecision = !!i1027[6]
  i1026._frameRate = i1027[7]
  i1026.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1027[8], i1026.localBounds)
  i1026.hasMuscleCurves = !!i1027[9]
  var i1033 = i1027[10]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1026.clipMuscleConstant = i1032
  i1026.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1027[11], i1026.clipBindingConstant)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1037 = data
  i1036.path = i1037[0]
  i1036.hash = i1037[1]
  i1036.componentType = i1037[2]
  i1036.property = i1037[3]
  i1036.keys = i1037[4]
  var i1039 = i1037[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1039[i + 0]) );
  }
  i1036.objectReferenceKeys = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1043 = data
  i1042.time = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'value')
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1047 = data
  i1046.functionName = i1047[0]
  i1046.floatParameter = i1047[1]
  i1046.intParameter = i1047[2]
  i1046.stringParameter = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'objectReferenceParameter')
  i1046.time = i1047[6]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1049 = data
  i1048.center = new pc.Vec3( i1049[0], i1049[1], i1049[2] )
  i1048.extends = new pc.Vec3( i1049[3], i1049[4], i1049[5] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1052.genericBindings = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1052.pptrCurveMapping = i1056
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.ascent = i1059[1]
  i1058.originalLineHeight = i1059[2]
  i1058.fontSize = i1059[3]
  var i1061 = i1059[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1061[i + 0]) );
  }
  i1058.characterInfo = i1060
  request.r(i1059[5], i1059[6], 0, i1058, 'texture')
  i1058.originalFontSize = i1059[7]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1065 = data
  i1064.index = i1065[0]
  i1064.advance = i1065[1]
  i1064.bearing = i1065[2]
  i1064.glyphWidth = i1065[3]
  i1064.glyphHeight = i1065[4]
  i1064.minX = i1065[5]
  i1064.maxX = i1065[6]
  i1064.minY = i1065[7]
  i1064.maxY = i1065[8]
  i1064.uvBottomLeftX = i1065[9]
  i1064.uvBottomLeftY = i1065[10]
  i1064.uvBottomRightX = i1065[11]
  i1064.uvBottomRightY = i1065[12]
  i1064.uvTopLeftX = i1065[13]
  i1064.uvTopLeftY = i1065[14]
  i1064.uvTopRightX = i1065[15]
  i1064.uvTopRightY = i1065[16]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1067 = data
  i1066.name = i1067[0]
  var i1069 = i1067[1]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1069[i + 0]) );
  }
  i1066.layers = i1068
  var i1071 = i1067[2]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1071[i + 0]) );
  }
  i1066.parameters = i1070
  i1066.animationClips = i1067[3]
  i1066.avatarUnsupported = i1067[4]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.defaultWeight = i1075[1]
  i1074.blendingMode = i1075[2]
  i1074.avatarMask = i1075[3]
  i1074.syncedLayerIndex = i1075[4]
  i1074.syncedLayerAffectsTiming = !!i1075[5]
  i1074.syncedLayers = i1075[6]
  i1074.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1075[7], i1074.stateMachine)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1077 = data
  i1076.id = i1077[0]
  i1076.name = i1077[1]
  i1076.path = i1077[2]
  var i1079 = i1077[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1079[i + 0]) );
  }
  i1076.states = i1078
  var i1081 = i1077[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1081[i + 0]) );
  }
  i1076.machines = i1080
  var i1083 = i1077[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1083[i + 0]) );
  }
  i1076.entryStateTransitions = i1082
  var i1085 = i1077[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1085[i + 0]) );
  }
  i1076.exitStateTransitions = i1084
  var i1087 = i1077[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1087[i + 0]) );
  }
  i1076.anyStateTransitions = i1086
  i1076.defaultStateId = i1077[8]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1091 = data
  i1090.id = i1091[0]
  i1090.name = i1091[1]
  i1090.cycleOffset = i1091[2]
  i1090.cycleOffsetParameter = i1091[3]
  i1090.cycleOffsetParameterActive = !!i1091[4]
  i1090.mirror = !!i1091[5]
  i1090.mirrorParameter = i1091[6]
  i1090.mirrorParameterActive = !!i1091[7]
  i1090.motionId = i1091[8]
  i1090.nameHash = i1091[9]
  i1090.fullPathHash = i1091[10]
  i1090.speed = i1091[11]
  i1090.speedParameter = i1091[12]
  i1090.speedParameterActive = !!i1091[13]
  i1090.tag = i1091[14]
  i1090.tagHash = i1091[15]
  i1090.writeDefaultValues = !!i1091[16]
  var i1093 = i1091[17]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1090.behaviours = i1092
  var i1095 = i1091[18]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1095[i + 0]) );
  }
  i1090.transitions = i1094
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1101 = data
  i1100.fullPath = i1101[0]
  i1100.canTransitionToSelf = !!i1101[1]
  i1100.duration = i1101[2]
  i1100.exitTime = i1101[3]
  i1100.hasExitTime = !!i1101[4]
  i1100.hasFixedDuration = !!i1101[5]
  i1100.interruptionSource = i1101[6]
  i1100.offset = i1101[7]
  i1100.orderedInterruption = !!i1101[8]
  i1100.destinationStateId = i1101[9]
  i1100.isExit = !!i1101[10]
  i1100.mute = !!i1101[11]
  i1100.solo = !!i1101[12]
  var i1103 = i1101[13]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1103[i + 0]) );
  }
  i1100.conditions = i1102
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1109 = data
  i1108.destinationStateId = i1109[0]
  i1108.isExit = !!i1109[1]
  i1108.mute = !!i1109[2]
  i1108.solo = !!i1109[3]
  var i1111 = i1109[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1111[i + 0]) );
  }
  i1108.conditions = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1115 = data
  i1114.defaultBool = !!i1115[0]
  i1114.defaultFloat = i1115[1]
  i1114.defaultInt = i1115[2]
  i1114.name = i1115[3]
  i1114.nameHash = i1115[4]
  i1114.type = i1115[5]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1119 = data
  i1118.mode = i1119[0]
  i1118.parameter = i1119[1]
  i1118.threshold = i1119[2]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.bytes64 = i1121[1]
  i1120.data = i1121[2]
  return i1120
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1123 = data
  i1122.normalStyle = i1123[0]
  i1122.normalSpacingOffset = i1123[1]
  i1122.boldStyle = i1123[2]
  i1122.boldSpacing = i1123[3]
  i1122.italicStyle = i1123[4]
  i1122.tabSize = i1123[5]
  request.r(i1123[6], i1123[7], 0, i1122, 'atlas')
  i1122.m_SourceFontFileGUID = i1123[8]
  i1122.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1123[9], i1122.m_CreationSettings)
  request.r(i1123[10], i1123[11], 0, i1122, 'm_SourceFontFile')
  i1122.m_SourceFontFilePath = i1123[12]
  i1122.m_AtlasPopulationMode = i1123[13]
  i1122.InternalDynamicOS = !!i1123[14]
  var i1125 = i1123[15]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.Glyph', i1125[i + 0]));
  }
  i1122.m_GlyphTable = i1124
  var i1127 = i1123[16]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_Character', i1127[i + 0]));
  }
  i1122.m_CharacterTable = i1126
  var i1129 = i1123[17]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1122.m_AtlasTextures = i1128
  i1122.m_AtlasTextureIndex = i1123[18]
  i1122.m_IsMultiAtlasTexturesEnabled = !!i1123[19]
  i1122.m_GetFontFeatures = !!i1123[20]
  i1122.m_ClearDynamicDataOnBuild = !!i1123[21]
  i1122.m_AtlasWidth = i1123[22]
  i1122.m_AtlasHeight = i1123[23]
  i1122.m_AtlasPadding = i1123[24]
  i1122.m_AtlasRenderMode = i1123[25]
  var i1131 = i1123[26]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('UnityEngine.TextCore.GlyphRect', i1131[i + 0]));
  }
  i1122.m_UsedGlyphRects = i1130
  var i1133 = i1123[27]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('UnityEngine.TextCore.GlyphRect', i1133[i + 0]));
  }
  i1122.m_FreeGlyphRects = i1132
  i1122.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1123[28], i1122.m_FontFeatureTable)
  i1122.m_ShouldReimportFontFeatures = !!i1123[29]
  var i1135 = i1123[30]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1122.m_FallbackFontAssetTable = i1134
  var i1137 = i1123[31]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('TMPro.TMP_FontWeightPair', i1137[i + 0]) );
  }
  i1122.m_FontWeightTable = i1136
  var i1139 = i1123[32]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('TMPro.TMP_FontWeightPair', i1139[i + 0]) );
  }
  i1122.fontWeights = i1138
  i1122.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1123[33], i1122.m_fontInfo)
  var i1141 = i1123[34]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Glyph', i1141[i + 0]));
  }
  i1122.m_glyphInfoList = i1140
  i1122.m_KerningTable = request.d('TMPro.KerningTable', i1123[35], i1122.m_KerningTable)
  var i1143 = i1123[36]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1122.fallbackFontAssets = i1142
  i1122.m_Version = i1123[37]
  i1122.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1123[38], i1122.m_FaceInfo)
  request.r(i1123[39], i1123[40], 0, i1122, 'm_Material')
  return i1122
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1145 = data
  i1144.sourceFontFileName = i1145[0]
  i1144.sourceFontFileGUID = i1145[1]
  i1144.faceIndex = i1145[2]
  i1144.pointSizeSamplingMode = i1145[3]
  i1144.pointSize = i1145[4]
  i1144.padding = i1145[5]
  i1144.paddingMode = i1145[6]
  i1144.packingMode = i1145[7]
  i1144.atlasWidth = i1145[8]
  i1144.atlasHeight = i1145[9]
  i1144.characterSetSelectionMode = i1145[10]
  i1144.characterSequence = i1145[11]
  i1144.referencedFontAssetGUID = i1145[12]
  i1144.referencedTextAssetGUID = i1145[13]
  i1144.fontStyle = i1145[14]
  i1144.fontStyleModifier = i1145[15]
  i1144.renderMode = i1145[16]
  i1144.includeFontFeatures = !!i1145[17]
  return i1144
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1149 = data
  i1148.m_Index = i1149[0]
  i1148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1149[1], i1148.m_Metrics)
  i1148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1149[2], i1148.m_GlyphRect)
  i1148.m_Scale = i1149[3]
  i1148.m_AtlasIndex = i1149[4]
  i1148.m_ClassDefinitionType = i1149[5]
  return i1148
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1151 = data
  i1150.m_Width = i1151[0]
  i1150.m_Height = i1151[1]
  i1150.m_HorizontalBearingX = i1151[2]
  i1150.m_HorizontalBearingY = i1151[3]
  i1150.m_HorizontalAdvance = i1151[4]
  return i1150
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1153 = data
  i1152.m_X = i1153[0]
  i1152.m_Y = i1153[1]
  i1152.m_Width = i1153[2]
  i1152.m_Height = i1153[3]
  return i1152
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Character' )
  var i1157 = data
  i1156.m_ElementType = i1157[0]
  i1156.m_Unicode = i1157[1]
  i1156.m_GlyphIndex = i1157[2]
  i1156.m_Scale = i1157[3]
  return i1156
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.MultipleSubstitutionRecord', i1165[i + 0]));
  }
  i1162.m_MultipleSubstitutionRecords = i1164
  var i1167 = i1163[1]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('TMPro.LigatureSubstitutionRecord', i1167[i + 0]));
  }
  i1162.m_LigatureSubstitutionRecords = i1166
  var i1169 = i1163[2]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1169[i + 0]));
  }
  i1162.m_GlyphPairAdjustmentRecords = i1168
  var i1171 = i1163[3]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1171[i + 0]));
  }
  i1162.m_MarkToBaseAdjustmentRecords = i1170
  var i1173 = i1163[4]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1173[i + 0]));
  }
  i1162.m_MarkToMarkAdjustmentRecords = i1172
  return i1162
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1177 = data
  i1176.m_TargetGlyphID = i1177[0]
  i1176.m_SubstituteGlyphIDs = i1177[1]
  return i1176
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1181 = data
  i1180.m_ComponentGlyphIDs = i1181[0]
  i1180.m_LigatureGlyphID = i1181[1]
  return i1180
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1185 = data
  i1184.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1185[0], i1184.m_FirstAdjustmentRecord)
  i1184.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1185[1], i1184.m_SecondAdjustmentRecord)
  i1184.m_FeatureLookupFlags = i1185[2]
  return i1184
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1189 = data
  i1188.m_BaseGlyphID = i1189[0]
  i1188.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1189[1], i1188.m_BaseGlyphAnchorPoint)
  i1188.m_MarkGlyphID = i1189[2]
  i1188.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1189[3], i1188.m_MarkPositionAdjustment)
  return i1188
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1193 = data
  i1192.m_BaseMarkGlyphID = i1193[0]
  i1192.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1193[1], i1192.m_BaseMarkGlyphAnchorPoint)
  i1192.m_CombiningMarkGlyphID = i1193[2]
  i1192.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1193[3], i1192.m_CombiningMarkPositionAdjustment)
  return i1192
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'regularTypeface')
  request.r(i1199[2], i1199[3], 0, i1198, 'italicTypeface')
  return i1198
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1201 = data
  i1200.Name = i1201[0]
  i1200.PointSize = i1201[1]
  i1200.Scale = i1201[2]
  i1200.CharacterCount = i1201[3]
  i1200.LineHeight = i1201[4]
  i1200.Baseline = i1201[5]
  i1200.Ascender = i1201[6]
  i1200.CapHeight = i1201[7]
  i1200.Descender = i1201[8]
  i1200.CenterLine = i1201[9]
  i1200.SuperscriptOffset = i1201[10]
  i1200.SubscriptOffset = i1201[11]
  i1200.SubSize = i1201[12]
  i1200.Underline = i1201[13]
  i1200.UnderlineThickness = i1201[14]
  i1200.strikethrough = i1201[15]
  i1200.strikethroughThickness = i1201[16]
  i1200.TabWidth = i1201[17]
  i1200.Padding = i1201[18]
  i1200.AtlasWidth = i1201[19]
  i1200.AtlasHeight = i1201[20]
  return i1200
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.x = i1205[1]
  i1204.y = i1205[2]
  i1204.width = i1205[3]
  i1204.height = i1205[4]
  i1204.xOffset = i1205[5]
  i1204.yOffset = i1205[6]
  i1204.xAdvance = i1205[7]
  i1204.scale = i1205[8]
  return i1204
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.KerningTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.KerningPair', i1209[i + 0]));
  }
  i1206.kerningPairs = i1208
  return i1206
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.KerningPair' )
  var i1213 = data
  i1212.xOffset = i1213[0]
  i1212.m_FirstGlyph = i1213[1]
  i1212.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[2], i1212.m_FirstGlyphAdjustments)
  i1212.m_SecondGlyph = i1213[3]
  i1212.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1213[4], i1212.m_SecondGlyphAdjustments)
  i1212.m_IgnoreSpacingAdjustments = !!i1213[5]
  return i1212
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1215 = data
  i1214.m_FaceIndex = i1215[0]
  i1214.m_FamilyName = i1215[1]
  i1214.m_StyleName = i1215[2]
  i1214.m_PointSize = i1215[3]
  i1214.m_Scale = i1215[4]
  i1214.m_UnitsPerEM = i1215[5]
  i1214.m_LineHeight = i1215[6]
  i1214.m_AscentLine = i1215[7]
  i1214.m_CapLine = i1215[8]
  i1214.m_MeanLine = i1215[9]
  i1214.m_Baseline = i1215[10]
  i1214.m_DescentLine = i1215[11]
  i1214.m_SuperscriptOffset = i1215[12]
  i1214.m_SuperscriptSize = i1215[13]
  i1214.m_SubscriptOffset = i1215[14]
  i1214.m_SubscriptSize = i1215[15]
  i1214.m_UnderlineOffset = i1215[16]
  i1214.m_UnderlineThickness = i1215[17]
  i1214.m_StrikethroughOffset = i1215[18]
  i1214.m_StrikethroughThickness = i1215[19]
  i1214.m_TabWidth = i1215[20]
  return i1214
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Settings' )
  var i1217 = data
  i1216.assetVersion = i1217[0]
  i1216.m_TextWrappingMode = i1217[1]
  i1216.m_enableKerning = !!i1217[2]
  var i1219 = i1217[3]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(i1219[i + 0]);
  }
  i1216.m_ActiveFontFeatures = i1218
  i1216.m_enableExtraPadding = !!i1217[4]
  i1216.m_enableTintAllSprites = !!i1217[5]
  i1216.m_enableParseEscapeCharacters = !!i1217[6]
  i1216.m_EnableRaycastTarget = !!i1217[7]
  i1216.m_GetFontFeaturesAtRuntime = !!i1217[8]
  i1216.m_missingGlyphCharacter = i1217[9]
  i1216.m_ClearDynamicDataOnBuild = !!i1217[10]
  i1216.m_warningsDisabled = !!i1217[11]
  request.r(i1217[12], i1217[13], 0, i1216, 'm_defaultFontAsset')
  i1216.m_defaultFontAssetPath = i1217[14]
  i1216.m_defaultFontSize = i1217[15]
  i1216.m_defaultAutoSizeMinRatio = i1217[16]
  i1216.m_defaultAutoSizeMaxRatio = i1217[17]
  i1216.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1217[18], i1217[19] )
  i1216.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1217[20], i1217[21] )
  i1216.m_autoSizeTextContainer = !!i1217[22]
  i1216.m_IsTextObjectScaleStatic = !!i1217[23]
  var i1221 = i1217[24]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 1, i1220, '')
  }
  i1216.m_fallbackFontAssets = i1220
  i1216.m_matchMaterialPreset = !!i1217[25]
  i1216.m_HideSubTextObjects = !!i1217[26]
  request.r(i1217[27], i1217[28], 0, i1216, 'm_defaultSpriteAsset')
  i1216.m_defaultSpriteAssetPath = i1217[29]
  i1216.m_enableEmojiSupport = !!i1217[30]
  i1216.m_MissingCharacterSpriteUnicode = i1217[31]
  var i1223 = i1217[32]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 1, i1222, '')
  }
  i1216.m_EmojiFallbackTextAssets = i1222
  i1216.m_defaultColorGradientPresetsPath = i1217[33]
  request.r(i1217[34], i1217[35], 0, i1216, 'm_defaultStyleSheet')
  i1216.m_StyleSheetsResourcePath = i1217[36]
  request.r(i1217[37], i1217[38], 0, i1216, 'm_leadingCharacters')
  request.r(i1217[39], i1217[40], 0, i1216, 'm_followingCharacters')
  i1216.m_UseModernHangulLineBreakingRules = !!i1217[41]
  return i1216
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1227 = data
  i1226.m_GlyphIndex = i1227[0]
  i1226.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1227[1], i1226.m_GlyphValueRecord)
  return i1226
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1229 = data
  i1228.m_XPlacement = i1229[0]
  i1228.m_YPlacement = i1229[1]
  i1228.m_XAdvance = i1229[2]
  i1228.m_YAdvance = i1229[3]
  return i1228
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'spriteSheet')
  var i1233 = i1231[2]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Sprite', i1233[i + 0]));
  }
  i1230.spriteInfoList = i1232
  var i1235 = i1231[3]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1230.fallbackSpriteAssets = i1234
  var i1237 = i1231[4]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_SpriteCharacter', i1237[i + 0]));
  }
  i1230.m_SpriteCharacterTable = i1236
  var i1239 = i1231[5]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_SpriteGlyph', i1239[i + 0]));
  }
  i1230.m_GlyphTable = i1238
  i1230.m_Version = i1231[6]
  i1230.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1231[7], i1230.m_FaceInfo)
  request.r(i1231[8], i1231[9], 0, i1230, 'm_Material')
  return i1230
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.hashCode = i1243[1]
  i1242.unicode = i1243[2]
  i1242.pivot = new pc.Vec2( i1243[3], i1243[4] )
  request.r(i1243[5], i1243[6], 0, i1242, 'sprite')
  i1242.id = i1243[7]
  i1242.x = i1243[8]
  i1242.y = i1243[9]
  i1242.width = i1243[10]
  i1242.height = i1243[11]
  i1242.xOffset = i1243[12]
  i1242.yOffset = i1243[13]
  i1242.xAdvance = i1243[14]
  i1242.scale = i1243[15]
  return i1242
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1249 = data
  i1248.m_Name = i1249[0]
  i1248.m_ElementType = i1249[1]
  i1248.m_Unicode = i1249[2]
  i1248.m_GlyphIndex = i1249[3]
  i1248.m_Scale = i1249[4]
  return i1248
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1253 = data
  request.r(i1253[0], i1253[1], 0, i1252, 'sprite')
  i1252.m_Index = i1253[2]
  i1252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1253[3], i1252.m_Metrics)
  i1252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1253[4], i1252.m_GlyphRect)
  i1252.m_Scale = i1253[5]
  i1252.m_AtlasIndex = i1253[6]
  i1252.m_ClassDefinitionType = i1253[7]
  return i1252
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_Style', i1257[i + 0]));
  }
  i1254.m_StyleList = i1256
  return i1254
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_Style' )
  var i1261 = data
  i1260.m_Name = i1261[0]
  i1260.m_HashCode = i1261[1]
  i1260.m_OpeningDefinition = i1261[2]
  i1260.m_ClosingDefinition = i1261[3]
  i1260.m_OpeningTagArray = i1261[4]
  i1260.m_ClosingTagArray = i1261[5]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1265[i + 0]) );
  }
  i1262.files = i1264
  i1262.componentToPrefabIds = i1263[1]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1269 = data
  i1268.path = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, 'unityObject')
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1273[i + 0]) );
  }
  i1270.scriptsExecutionOrder = i1272
  var i1275 = i1271[1]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1275[i + 0]) );
  }
  i1270.sortingLayers = i1274
  var i1277 = i1271[2]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1277[i + 0]) );
  }
  i1270.cullingLayers = i1276
  i1270.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1271[3], i1270.timeSettings)
  i1270.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1271[4], i1270.physicsSettings)
  i1270.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1271[5], i1270.physics2DSettings)
  i1270.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1271[6], i1270.qualitySettings)
  i1270.enableRealtimeShadows = !!i1271[7]
  i1270.enableAutoInstancing = !!i1271[8]
  i1270.enableStaticBatching = !!i1271[9]
  i1270.enableDynamicBatching = !!i1271[10]
  i1270.lightmapEncodingQuality = i1271[11]
  i1270.desiredColorSpace = i1271[12]
  var i1279 = i1271[13]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( i1279[i + 0] );
  }
  i1270.allTags = i1278
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.value = i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.name = i1287[1]
  i1286.value = i1287[2]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1291 = data
  i1290.id = i1291[0]
  i1290.name = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1293 = data
  i1292.fixedDeltaTime = i1293[0]
  i1292.maximumDeltaTime = i1293[1]
  i1292.timeScale = i1293[2]
  i1292.maximumParticleTimestep = i1293[3]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1295 = data
  i1294.gravity = new pc.Vec3( i1295[0], i1295[1], i1295[2] )
  i1294.defaultSolverIterations = i1295[3]
  i1294.bounceThreshold = i1295[4]
  i1294.autoSyncTransforms = !!i1295[5]
  i1294.autoSimulation = !!i1295[6]
  var i1297 = i1295[7]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1297[i + 0]) );
  }
  i1294.collisionMatrix = i1296
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1301 = data
  i1300.enabled = !!i1301[0]
  i1300.layerId = i1301[1]
  i1300.otherLayerId = i1301[2]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'material')
  i1302.gravity = new pc.Vec2( i1303[2], i1303[3] )
  i1302.positionIterations = i1303[4]
  i1302.velocityIterations = i1303[5]
  i1302.velocityThreshold = i1303[6]
  i1302.maxLinearCorrection = i1303[7]
  i1302.maxAngularCorrection = i1303[8]
  i1302.maxTranslationSpeed = i1303[9]
  i1302.maxRotationSpeed = i1303[10]
  i1302.baumgarteScale = i1303[11]
  i1302.baumgarteTOIScale = i1303[12]
  i1302.timeToSleep = i1303[13]
  i1302.linearSleepTolerance = i1303[14]
  i1302.angularSleepTolerance = i1303[15]
  i1302.defaultContactOffset = i1303[16]
  i1302.autoSimulation = !!i1303[17]
  i1302.queriesHitTriggers = !!i1303[18]
  i1302.queriesStartInColliders = !!i1303[19]
  i1302.callbacksOnDisable = !!i1303[20]
  i1302.reuseCollisionCallbacks = !!i1303[21]
  i1302.autoSyncTransforms = !!i1303[22]
  var i1305 = i1303[23]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1305[i + 0]) );
  }
  i1302.collisionMatrix = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1309 = data
  i1308.enabled = !!i1309[0]
  i1308.layerId = i1309[1]
  i1308.otherLayerId = i1309[2]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1313[i + 0]) );
  }
  i1310.qualityLevels = i1312
  var i1315 = i1311[1]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1310.names = i1314
  i1310.shadows = i1311[2]
  i1310.anisotropicFiltering = i1311[3]
  i1310.antiAliasing = i1311[4]
  i1310.lodBias = i1311[5]
  i1310.shadowCascades = i1311[6]
  i1310.shadowDistance = i1311[7]
  i1310.shadowmaskMode = i1311[8]
  i1310.shadowProjection = i1311[9]
  i1310.shadowResolution = i1311[10]
  i1310.softParticles = !!i1311[11]
  i1310.softVegetation = !!i1311[12]
  i1310.activeColorSpace = i1311[13]
  i1310.desiredColorSpace = i1311[14]
  i1310.masterTextureLimit = i1311[15]
  i1310.maxQueuedFrames = i1311[16]
  i1310.particleRaycastBudget = i1311[17]
  i1310.pixelLightCount = i1311[18]
  i1310.realtimeReflectionProbes = !!i1311[19]
  i1310.shadowCascade2Split = i1311[20]
  i1310.shadowCascade4Split = new pc.Vec3( i1311[21], i1311[22], i1311[23] )
  i1310.streamingMipmapsActive = !!i1311[24]
  i1310.vSyncCount = i1311[25]
  i1310.asyncUploadBufferSize = i1311[26]
  i1310.asyncUploadTimeSlice = i1311[27]
  i1310.billboardsFaceCameraPosition = !!i1311[28]
  i1310.shadowNearPlaneOffset = i1311[29]
  i1310.streamingMipmapsMemoryBudget = i1311[30]
  i1310.maximumLODLevel = i1311[31]
  i1310.streamingMipmapsAddAllCameras = !!i1311[32]
  i1310.streamingMipmapsMaxLevelReduction = i1311[33]
  i1310.streamingMipmapsRenderersPerFrame = i1311[34]
  i1310.resolutionScalingFixedDPIFactor = i1311[35]
  i1310.streamingMipmapsMaxFileIORequests = i1311[36]
  i1310.currentQualityLevel = i1311[37]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1321 = data
  i1320.weight = i1321[0]
  i1320.vertices = i1321[1]
  i1320.normals = i1321[2]
  i1320.tangents = i1321[3]
  return i1320
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1323 = data
  i1322.m_XCoordinate = i1323[0]
  i1322.m_YCoordinate = i1323[1]
  return i1322
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1325 = data
  i1324.m_XPositionAdjustment = i1325[0]
  i1324.m_YPositionAdjustment = i1325[1]
  return i1324
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1327 = data
  i1326.xPlacement = i1327[0]
  i1326.yPlacement = i1327[1]
  i1326.xAdvance = i1327[2]
  i1326.yAdvance = i1327[3]
  return i1326
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[40],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[82],"83":[84],"85":[84],"20":[19],"5":[2],"33":[9],"86":[2],"87":[88],"89":[43],"90":[20],"91":[19],"92":[82,19],"26":[19,27],"93":[19],"94":[27,19],"95":[82],"96":[27,19],"97":[19],"98":[99],"100":[99],"101":[99],"102":[103],"104":[19],"105":[19],"23":[20],"25":[27,19],"106":[19],"22":[20],"107":[19],"108":[19],"109":[19],"110":[19],"111":[19],"112":[19],"113":[19],"114":[19],"115":[19],"116":[27,19],"117":[19],"118":[19],"119":[19],"120":[19],"121":[27,19],"122":[19],"123":[43],"124":[43],"44":[43],"125":[43],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","CurtainManager","UnityEngine.SpriteRenderer","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","AnimColorController","PlaySound","PlaySoundOnEnable","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","ItemGraphic","ItemMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_TrickyTwist_LV74";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1737";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4643";

Deserializers.runtimeAnalysisExcludedModules = "prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLY-TrickyTwist";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d97278d1-3837-467c-9ad9-9c21c3db6e6f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

