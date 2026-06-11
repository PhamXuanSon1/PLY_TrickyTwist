var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointSpring' )
  var i677 = data
  i676.spring = i677[0]
  i676.damper = i677[1]
  i676.targetPosition = i677[2]
  return i676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointMotor' )
  var i679 = data
  i678.m_TargetVelocity = i679[0]
  i678.m_Force = i679[1]
  i678.m_FreeSpin = i679[2]
  return i678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointLimits' )
  var i681 = data
  i680.m_Min = i681[0]
  i680.m_Max = i681[1]
  i680.m_Bounciness = i681[2]
  i680.m_BounceMinVelocity = i681[3]
  i680.m_ContactDistance = i681[4]
  i680.minBounce = i681[5]
  i680.maxBounce = i681[6]
  return i680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointDrive' )
  var i683 = data
  i682.m_PositionSpring = i683[0]
  i682.m_PositionDamper = i683[1]
  i682.m_MaximumForce = i683[2]
  i682.m_UseAcceleration = i683[3]
  return i682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i685 = data
  i684.m_Spring = i685[0]
  i684.m_Damper = i685[1]
  return i684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i687 = data
  i686.m_Limit = i687[0]
  i686.m_Bounciness = i687[1]
  i686.m_ContactDistance = i687[2]
  return i686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i689 = data
  i688.m_ExtremumSlip = i689[0]
  i688.m_ExtremumValue = i689[1]
  i688.m_AsymptoteSlip = i689[2]
  i688.m_AsymptoteValue = i689[3]
  i688.m_Stiffness = i689[4]
  return i688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i691 = data
  i690.m_LowerAngle = i691[0]
  i690.m_UpperAngle = i691[1]
  return i690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i693 = data
  i692.m_MotorSpeed = i693[0]
  i692.m_MaximumMotorTorque = i693[1]
  return i692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i695 = data
  i694.m_DampingRatio = i695[0]
  i694.m_Frequency = i695[1]
  i694.m_Angle = i695[2]
  return i694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i697 = data
  i696.m_LowerTranslation = i697[0]
  i696.m_UpperTranslation = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i698 = root || new pc.UnityMaterial()
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'shader')
  i698.renderQueue = i699[3]
  i698.enableInstancing = !!i699[4]
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i701[i + 0]) );
  }
  i698.floatParameters = i700
  var i703 = i699[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i703[i + 0]) );
  }
  i698.colorParameters = i702
  var i705 = i699[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i705[i + 0]) );
  }
  i698.vectorParameters = i704
  var i707 = i699[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i707[i + 0]) );
  }
  i698.textureParameters = i706
  var i709 = i699[9]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i709[i + 0]) );
  }
  i698.materialFlags = i708
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = new pc.Color(i717[1], i717[2], i717[3], i717[4])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Vec4( i721[1], i721[2], i721[3], i721[4] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'value')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i729 = data
  i728.name = i729[0]
  i728.enabled = !!i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i731 = data
  i730.name = i731[0]
  i730.width = i731[1]
  i730.height = i731[2]
  i730.mipmapCount = i731[3]
  i730.anisoLevel = i731[4]
  i730.filterMode = i731[5]
  i730.hdr = !!i731[6]
  i730.format = i731[7]
  i730.wrapMode = i731[8]
  i730.alphaIsTransparency = !!i731[9]
  i730.alphaSource = i731[10]
  i730.graphicsFormat = i731[11]
  i730.sRGBTexture = !!i731[12]
  i730.desiredColorSpace = i731[13]
  i730.wrapU = i731[14]
  i730.wrapV = i731[15]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i733 = data
  i732.name = i733[0]
  i732.halfPrecision = !!i733[1]
  i732.useSimplification = !!i733[2]
  i732.useUInt32IndexFormat = !!i733[3]
  i732.vertexCount = i733[4]
  i732.aabb = i733[5]
  var i735 = i733[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( !!i735[i + 0] );
  }
  i732.streams = i734
  i732.vertices = i733[7]
  var i737 = i733[8]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i737[i + 0]) );
  }
  i732.subMeshes = i736
  var i739 = i733[9]
  var i738 = []
  for(var i = 0; i < i739.length; i += 16) {
    i738.push( new pc.Mat4().setData(i739[i + 0], i739[i + 1], i739[i + 2], i739[i + 3],  i739[i + 4], i739[i + 5], i739[i + 6], i739[i + 7],  i739[i + 8], i739[i + 9], i739[i + 10], i739[i + 11],  i739[i + 12], i739[i + 13], i739[i + 14], i739[i + 15]) );
  }
  i732.bindposes = i738
  var i741 = i733[10]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i741[i + 0]) );
  }
  i732.blendShapes = i740
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i747 = data
  i746.triangles = i747[0]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i753 = data
  i752.name = i753[0]
  var i755 = i753[1]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i755[i + 0]) );
  }
  i752.frames = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i757 = data
  i756.name = i757[0]
  i756.index = i757[1]
  i756.startup = !!i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i759 = data
  i758.aspect = i759[0]
  i758.orthographic = !!i759[1]
  i758.orthographicSize = i759[2]
  i758.backgroundColor = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.nearClipPlane = i759[7]
  i758.farClipPlane = i759[8]
  i758.fieldOfView = i759[9]
  i758.depth = i759[10]
  i758.clearFlags = i759[11]
  i758.cullingMask = i759[12]
  i758.rect = i759[13]
  request.r(i759[14], i759[15], 0, i758, 'targetTexture')
  i758.usePhysicalProperties = !!i759[16]
  i758.focalLength = i759[17]
  i758.sensorSize = new pc.Vec2( i759[18], i759[19] )
  i758.lensShift = new pc.Vec2( i759[20], i759[21] )
  i758.gateFit = i759[22]
  i758.commandBufferCount = i759[23]
  i758.cameraType = i759[24]
  i758.enabled = !!i759[25]
  return i758
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i760 = root || request.c( 'AutoCameraFit' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'canvasBtn')
  request.r(i761[2], i761[3], 0, i760, 'targetArea')
  i760.paddingLandscape = i761[4]
  i760.paddingPortrait = i761[5]
  i760.extraPaddingSmallScreen = i761[6]
  i760.smallScreenThreshold = i761[7]
  i760.autoUpdateOnResize = !!i761[8]
  i760.adjustInEditMode = !!i761[9]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i763 = data
  i762.name = i763[0]
  i762.tagId = i763[1]
  i762.enabled = !!i763[2]
  i762.isStatic = !!i763[3]
  i762.layer = i763[4]
  return i762
}

Deserializers["InputManager"] = function (request, data, root) {
  var i764 = root || request.c( 'InputManager' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'mainCamera')
  i764.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i765[2] )
  i764.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i765[3] )
  i764.maxDistance = i765[4]
  i764.curtainsToGotoStore = i765[5]
  return i764
}

Deserializers["CurtainManager"] = function (request, data, root) {
  var i766 = root || request.c( 'CurtainManager' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i766.curtains = i768
  i766.onCurtainRemoved = request.d('UnityEngine.Events.UnityEvent', i767[1], i766.onCurtainRemoved)
  return i766
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i773 = data
  i772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i773[0], i772.m_PersistentCalls)
  return i772
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.Events.PersistentCall', i777[i + 0]));
  }
  i774.m_Calls = i776
  return i774
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_Target')
  i780.m_TargetAssemblyTypeName = i781[2]
  i780.m_MethodName = i781[3]
  i780.m_Mode = i781[4]
  i780.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i781[5], i780.m_Arguments)
  i780.m_CallState = i781[6]
  return i780
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i782 = root || request.c( 'HandHintMmanager' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i782.hintItems = i784
  request.r(i783[1], i783[2], 0, i782, 'handHintObject')
  request.r(i783[3], i783[4], 0, i782, 'handAnimator')
  i782.idleTimeToHint = i783[5]
  i782.dragAnimDuration = i783[6]
  return i782
}

Deserializers["GameManager"] = function (request, data, root) {
  var i788 = root || request.c( 'GameManager' )
  var i789 = data
  return i788
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i790 = root || request.c( 'ItemManager' )
  var i791 = data
  var i793 = i791[0]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i790.items = i792
  var i795 = i791[1]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('GirlEvolutionData')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('GirlEvolutionData', i795[i + 0]));
  }
  i790.girlEvolutions = i794
  return i790
}

Deserializers["GirlEvolutionData"] = function (request, data, root) {
  var i798 = root || request.c( 'GirlEvolutionData' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'girlObject')
  i798.unlockAtCurtainCount = i799[2]
  return i798
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i800 = root || request.c( 'Ply_SoundManager' )
  var i801 = data
  i800.fxAudio = request.d('FxAudio', i801[0], i800.fxAudio)
  request.r(i801[1], i801[2], 0, i800, 'bgm1')
  return i800
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i802 = root || request.c( 'FxAudio' )
  var i803 = data
  i802.None = request.d('SoundData', i803[0], i802.None)
  i802.ClickBox = request.d('SoundData', i803[1], i802.ClickBox)
  i802.Fan = request.d('SoundData', i803[2], i802.Fan)
  i802.Cream = request.d('SoundData', i803[3], i802.Cream)
  i802.Switch = request.d('SoundData', i803[4], i802.Switch)
  i802.Lighter = request.d('SoundData', i803[5], i802.Lighter)
  i802.Sausage = request.d('SoundData', i803[6], i802.Sausage)
  i802.Scissor = request.d('SoundData', i803[7], i802.Scissor)
  i802.Watertap = request.d('SoundData', i803[8], i802.Watertap)
  i802.Dog = request.d('SoundData', i803[9], i802.Dog)
  i802.Curtain = request.d('SoundData', i803[10], i802.Curtain)
  i802.Flame = request.d('SoundData', i803[11], i802.Flame)
  return i802
}

Deserializers["SoundData"] = function (request, data, root) {
  var i804 = root || request.c( 'SoundData' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'clip')
  i804.repeatCount = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'clip')
  request.r(i807[2], i807[3], 0, i806, 'outputAudioMixerGroup')
  i806.playOnAwake = !!i807[4]
  i806.loop = !!i807[5]
  i806.time = i807[6]
  i806.volume = i807[7]
  i806.pitch = i807[8]
  i806.enabled = !!i807[9]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i809 = data
  i808.pivot = new pc.Vec2( i809[0], i809[1] )
  i808.anchorMin = new pc.Vec2( i809[2], i809[3] )
  i808.anchorMax = new pc.Vec2( i809[4], i809[5] )
  i808.sizeDelta = new pc.Vec2( i809[6], i809[7] )
  i808.anchoredPosition3D = new pc.Vec3( i809[8], i809[9], i809[10] )
  i808.rotation = new pc.Quat(i809[11], i809[12], i809[13], i809[14])
  i808.scale = new pc.Vec3( i809[15], i809[16], i809[17] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i811 = data
  i810.planeDistance = i811[0]
  i810.referencePixelsPerUnit = i811[1]
  i810.isFallbackOverlay = !!i811[2]
  i810.renderMode = i811[3]
  i810.renderOrder = i811[4]
  i810.sortingLayerName = i811[5]
  i810.sortingOrder = i811[6]
  i810.scaleFactor = i811[7]
  request.r(i811[8], i811[9], 0, i810, 'worldCamera')
  i810.overrideSorting = !!i811[10]
  i810.pixelPerfect = !!i811[11]
  i810.targetDisplay = i811[12]
  i810.overridePixelPerfect = !!i811[13]
  i810.enabled = !!i811[14]
  return i810
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i813 = data
  i812.m_UiScaleMode = i813[0]
  i812.m_ReferencePixelsPerUnit = i813[1]
  i812.m_ScaleFactor = i813[2]
  i812.m_ReferenceResolution = new pc.Vec2( i813[3], i813[4] )
  i812.m_ScreenMatchMode = i813[5]
  i812.m_MatchWidthOrHeight = i813[6]
  i812.m_PhysicalUnit = i813[7]
  i812.m_FallbackScreenDPI = i813[8]
  i812.m_DefaultSpriteDPI = i813[9]
  i812.m_DynamicPixelsPerUnit = i813[10]
  i812.m_PresetInfoIsWorld = !!i813[11]
  return i812
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i815 = data
  i814.m_IgnoreReversedGraphics = !!i815[0]
  i814.m_BlockingObjects = i815[1]
  i814.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i815[2] )
  return i814
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i816 = root || request.c( 'ProgressBarUI' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'fillImage')
  request.r(i817[2], i817[3], 0, i816, 'progressText')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i819 = data
  i818.cullTransparentMesh = !!i819[0]
  return i818
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Image' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'm_Sprite')
  i820.m_Type = i821[2]
  i820.m_PreserveAspect = !!i821[3]
  i820.m_FillCenter = !!i821[4]
  i820.m_FillMethod = i821[5]
  i820.m_FillAmount = i821[6]
  i820.m_FillClockwise = !!i821[7]
  i820.m_FillOrigin = i821[8]
  i820.m_UseSpriteMesh = !!i821[9]
  i820.m_PixelsPerUnitMultiplier = i821[10]
  request.r(i821[11], i821[12], 0, i820, 'm_Material')
  i820.m_Maskable = !!i821[13]
  i820.m_Color = new pc.Color(i821[14], i821[15], i821[16], i821[17])
  i820.m_RaycastTarget = !!i821[18]
  i820.m_RaycastPadding = new pc.Vec4( i821[19], i821[20], i821[21], i821[22] )
  return i820
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i823 = data
  i822.m_hasFontAssetChanged = !!i823[0]
  request.r(i823[1], i823[2], 0, i822, 'm_baseMaterial')
  i822.m_maskOffset = new pc.Vec4( i823[3], i823[4], i823[5], i823[6] )
  i822.m_text = i823[7]
  i822.m_isRightToLeft = !!i823[8]
  request.r(i823[9], i823[10], 0, i822, 'm_fontAsset')
  request.r(i823[11], i823[12], 0, i822, 'm_sharedMaterial')
  var i825 = i823[13]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.m_fontSharedMaterials = i824
  request.r(i823[14], i823[15], 0, i822, 'm_fontMaterial')
  var i827 = i823[16]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i822.m_fontMaterials = i826
  i822.m_fontColor32 = UnityEngine.Color32.ConstructColor(i823[17], i823[18], i823[19], i823[20])
  i822.m_fontColor = new pc.Color(i823[21], i823[22], i823[23], i823[24])
  i822.m_enableVertexGradient = !!i823[25]
  i822.m_colorMode = i823[26]
  i822.m_fontColorGradient = request.d('TMPro.VertexGradient', i823[27], i822.m_fontColorGradient)
  request.r(i823[28], i823[29], 0, i822, 'm_fontColorGradientPreset')
  request.r(i823[30], i823[31], 0, i822, 'm_spriteAsset')
  i822.m_tintAllSprites = !!i823[32]
  request.r(i823[33], i823[34], 0, i822, 'm_StyleSheet')
  i822.m_TextStyleHashCode = i823[35]
  i822.m_overrideHtmlColors = !!i823[36]
  i822.m_faceColor = UnityEngine.Color32.ConstructColor(i823[37], i823[38], i823[39], i823[40])
  i822.m_fontSize = i823[41]
  i822.m_fontSizeBase = i823[42]
  i822.m_fontWeight = i823[43]
  i822.m_enableAutoSizing = !!i823[44]
  i822.m_fontSizeMin = i823[45]
  i822.m_fontSizeMax = i823[46]
  i822.m_fontStyle = i823[47]
  i822.m_HorizontalAlignment = i823[48]
  i822.m_VerticalAlignment = i823[49]
  i822.m_textAlignment = i823[50]
  i822.m_characterSpacing = i823[51]
  i822.m_wordSpacing = i823[52]
  i822.m_lineSpacing = i823[53]
  i822.m_lineSpacingMax = i823[54]
  i822.m_paragraphSpacing = i823[55]
  i822.m_charWidthMaxAdj = i823[56]
  i822.m_TextWrappingMode = i823[57]
  i822.m_wordWrappingRatios = i823[58]
  i822.m_overflowMode = i823[59]
  request.r(i823[60], i823[61], 0, i822, 'm_linkedTextComponent')
  request.r(i823[62], i823[63], 0, i822, 'parentLinkedComponent')
  i822.m_enableKerning = !!i823[64]
  var i829 = i823[65]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(i829[i + 0]);
  }
  i822.m_ActiveFontFeatures = i828
  i822.m_enableExtraPadding = !!i823[66]
  i822.checkPaddingRequired = !!i823[67]
  i822.m_isRichText = !!i823[68]
  i822.m_parseCtrlCharacters = !!i823[69]
  i822.m_isOrthographic = !!i823[70]
  i822.m_isCullingEnabled = !!i823[71]
  i822.m_horizontalMapping = i823[72]
  i822.m_verticalMapping = i823[73]
  i822.m_uvLineOffset = i823[74]
  i822.m_geometrySortingOrder = i823[75]
  i822.m_IsTextObjectScaleStatic = !!i823[76]
  i822.m_VertexBufferAutoSizeReduction = !!i823[77]
  i822.m_useMaxVisibleDescender = !!i823[78]
  i822.m_pageToDisplay = i823[79]
  i822.m_margin = new pc.Vec4( i823[80], i823[81], i823[82], i823[83] )
  i822.m_isUsingLegacyAnimationComponent = !!i823[84]
  i822.m_isVolumetricText = !!i823[85]
  request.r(i823[86], i823[87], 0, i822, 'm_Material')
  i822.m_EmojiFallbackSupport = !!i823[88]
  i822.m_Maskable = !!i823[89]
  i822.m_Color = new pc.Color(i823[90], i823[91], i823[92], i823[93])
  i822.m_RaycastTarget = !!i823[94]
  i822.m_RaycastPadding = new pc.Vec4( i823[95], i823[96], i823[97], i823[98] )
  return i822
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.VertexGradient' )
  var i833 = data
  i832.topLeft = new pc.Color(i833[0], i833[1], i833[2], i833[3])
  i832.topRight = new pc.Color(i833[4], i833[5], i833[6], i833[7])
  i832.bottomLeft = new pc.Color(i833[8], i833[9], i833[10], i833[11])
  i832.bottomRight = new pc.Color(i833[12], i833[13], i833[14], i833[15])
  return i832
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Button' )
  var i837 = data
  i836.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i837[0], i836.m_OnClick)
  i836.m_Navigation = request.d('UnityEngine.UI.Navigation', i837[1], i836.m_Navigation)
  i836.m_Transition = i837[2]
  i836.m_Colors = request.d('UnityEngine.UI.ColorBlock', i837[3], i836.m_Colors)
  i836.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i837[4], i836.m_SpriteState)
  i836.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i837[5], i836.m_AnimationTriggers)
  i836.m_Interactable = !!i837[6]
  request.r(i837[7], i837[8], 0, i836, 'm_TargetGraphic')
  return i836
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i839 = data
  i838.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i839[0], i838.m_PersistentCalls)
  return i838
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_ObjectArgument')
  i840.m_ObjectArgumentAssemblyTypeName = i841[2]
  i840.m_IntArgument = i841[3]
  i840.m_FloatArgument = i841[4]
  i840.m_StringArgument = i841[5]
  i840.m_BoolArgument = !!i841[6]
  return i840
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i843 = data
  i842.m_Mode = i843[0]
  i842.m_WrapAround = !!i843[1]
  request.r(i843[2], i843[3], 0, i842, 'm_SelectOnUp')
  request.r(i843[4], i843[5], 0, i842, 'm_SelectOnDown')
  request.r(i843[6], i843[7], 0, i842, 'm_SelectOnLeft')
  request.r(i843[8], i843[9], 0, i842, 'm_SelectOnRight')
  return i842
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i845 = data
  i844.m_NormalColor = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  i844.m_HighlightedColor = new pc.Color(i845[4], i845[5], i845[6], i845[7])
  i844.m_PressedColor = new pc.Color(i845[8], i845[9], i845[10], i845[11])
  i844.m_SelectedColor = new pc.Color(i845[12], i845[13], i845[14], i845[15])
  i844.m_DisabledColor = new pc.Color(i845[16], i845[17], i845[18], i845[19])
  i844.m_ColorMultiplier = i845[20]
  i844.m_FadeDuration = i845[21]
  return i844
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_HighlightedSprite')
  request.r(i847[2], i847[3], 0, i846, 'm_PressedSprite')
  request.r(i847[4], i847[5], 0, i846, 'm_SelectedSprite')
  request.r(i847[6], i847[7], 0, i846, 'm_DisabledSprite')
  return i846
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i849 = data
  i848.m_NormalTrigger = i849[0]
  i848.m_HighlightedTrigger = i849[1]
  i848.m_PressedTrigger = i849[2]
  i848.m_SelectedTrigger = i849[3]
  i848.m_DisabledTrigger = i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'animatorController')
  request.r(i851[2], i851[3], 0, i850, 'avatar')
  i850.updateMode = i851[4]
  i850.hasTransformHierarchy = !!i851[5]
  i850.applyRootMotion = !!i851[6]
  var i853 = i851[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.humanBones = i852
  i850.enabled = !!i851[8]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i857 = data
  i856.color = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  request.r(i857[4], i857[5], 0, i856, 'sprite')
  i856.flipX = !!i857[6]
  i856.flipY = !!i857[7]
  i856.drawMode = i857[8]
  i856.size = new pc.Vec2( i857[9], i857[10] )
  i856.tileMode = i857[11]
  i856.adaptiveModeThreshold = i857[12]
  i856.maskInteraction = i857[13]
  i856.spriteSortPoint = i857[14]
  i856.enabled = !!i857[15]
  request.r(i857[16], i857[17], 0, i856, 'sharedMaterial')
  var i859 = i857[18]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[19]
  i856.shadowCastingMode = i857[20]
  i856.sortingLayerID = i857[21]
  i856.sortingOrder = i857[22]
  i856.lightmapIndex = i857[23]
  i856.lightmapSceneIndex = i857[24]
  i856.lightmapScaleOffset = new pc.Vec4( i857[25], i857[26], i857[27], i857[28] )
  i856.lightProbeUsage = i857[29]
  i856.reflectionProbeUsage = i857[30]
  return i856
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_RootBone')
  var i863 = i861[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.m_BoneTransforms = i862
  i860.m_AlwaysUpdate = !!i861[3]
  i860.m_AutoRebind = !!i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.size = new pc.Vec3( i865[3], i865[4], i865[5] )
  i864.enabled = !!i865[6]
  i864.isTrigger = !!i865[7]
  request.r(i865[8], i865[9], 0, i864, 'material')
  return i864
}

Deserializers["AnimColorController"] = function (request, data, root) {
  var i866 = root || request.c( 'AnimColorController' )
  var i867 = data
  var i869 = i867[0]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i866.partsToColor = i868
  return i866
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i870 = root || request.c( 'PlaySound' )
  var i871 = data
  i870.fxType = i871[0]
  return i870
}

Deserializers["PlaySoundOnEnable"] = function (request, data, root) {
  var i872 = root || request.c( 'PlaySoundOnEnable' )
  var i873 = data
  i872.soundToPlay = i873[0]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i875 = data
  i874.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i875[0], i874.main)
  i874.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i875[1], i874.colorBySpeed)
  i874.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i875[2], i874.colorOverLifetime)
  i874.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i875[3], i874.emission)
  i874.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i875[4], i874.rotationBySpeed)
  i874.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i875[5], i874.rotationOverLifetime)
  i874.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i875[6], i874.shape)
  i874.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i875[7], i874.sizeBySpeed)
  i874.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i875[8], i874.sizeOverLifetime)
  i874.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i875[9], i874.textureSheetAnimation)
  i874.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i875[10], i874.velocityOverLifetime)
  i874.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i875[11], i874.noise)
  i874.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i875[12], i874.inheritVelocity)
  i874.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i875[13], i874.forceOverLifetime)
  i874.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i875[14], i874.limitVelocityOverLifetime)
  i874.useAutoRandomSeed = !!i875[15]
  i874.randomSeed = i875[16]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemMain()
  var i877 = data
  i876.duration = i877[0]
  i876.loop = !!i877[1]
  i876.prewarm = !!i877[2]
  i876.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.startDelay)
  i876.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[4], i876.startLifetime)
  i876.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[5], i876.startSpeed)
  i876.startSize3D = !!i877[6]
  i876.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[7], i876.startSizeX)
  i876.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[8], i876.startSizeY)
  i876.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[9], i876.startSizeZ)
  i876.startRotation3D = !!i877[10]
  i876.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[11], i876.startRotationX)
  i876.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[12], i876.startRotationY)
  i876.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[13], i876.startRotationZ)
  i876.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i877[14], i876.startColor)
  i876.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[15], i876.gravityModifier)
  i876.simulationSpace = i877[16]
  request.r(i877[17], i877[18], 0, i876, 'customSimulationSpace')
  i876.simulationSpeed = i877[19]
  i876.useUnscaledTime = !!i877[20]
  i876.scalingMode = i877[21]
  i876.playOnAwake = !!i877[22]
  i876.maxParticles = i877[23]
  i876.emitterVelocityMode = i877[24]
  i876.stopAction = i877[25]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i878 = root || new pc.MinMaxCurve()
  var i879 = data
  i878.mode = i879[0]
  i878.curveMin = new pc.AnimationCurve( { keys_flow: i879[1] } )
  i878.curveMax = new pc.AnimationCurve( { keys_flow: i879[2] } )
  i878.curveMultiplier = i879[3]
  i878.constantMin = i879[4]
  i878.constantMax = i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i880 = root || new pc.MinMaxGradient()
  var i881 = data
  i880.mode = i881[0]
  i880.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i881[1], i880.gradientMin)
  i880.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i881[2], i880.gradientMax)
  i880.colorMin = new pc.Color(i881[3], i881[4], i881[5], i881[6])
  i880.colorMax = new pc.Color(i881[7], i881[8], i881[9], i881[10])
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i883 = data
  i882.mode = i883[0]
  var i885 = i883[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i885[i + 0]) );
  }
  i882.colorKeys = i884
  var i887 = i883[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i887[i + 0]) );
  }
  i882.alphaKeys = i886
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemColorBySpeed()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i889[1], i888.color)
  i888.range = new pc.Vec2( i889[2], i889[3] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i893 = data
  i892.color = new pc.Color(i893[0], i893[1], i893[2], i893[3])
  i892.time = i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i897 = data
  i896.alpha = i897[0]
  i896.time = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemColorOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i899[1], i898.color)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemEmitter()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.rateOverTime)
  i900.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.rateOverDistance)
  var i903 = i901[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i903[i + 0]) );
  }
  i900.bursts = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemBurst()
  var i907 = data
  i906.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[0], i906.count)
  i906.cycleCount = i907[1]
  i906.minCount = i907[2]
  i906.maxCount = i907[3]
  i906.repeatInterval = i907[4]
  i906.time = i907[5]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemRotationBySpeed()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.separateAxes = !!i909[4]
  i908.range = new pc.Vec2( i909[5], i909[6] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemRotationOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.x)
  i910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.y)
  i910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.z)
  i910.separateAxes = !!i911[4]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemShape()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.shapeType = i913[1]
  i912.randomDirectionAmount = i913[2]
  i912.sphericalDirectionAmount = i913[3]
  i912.randomPositionAmount = i913[4]
  i912.alignToDirection = !!i913[5]
  i912.radius = i913[6]
  i912.radiusMode = i913[7]
  i912.radiusSpread = i913[8]
  i912.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[9], i912.radiusSpeed)
  i912.radiusThickness = i913[10]
  i912.angle = i913[11]
  i912.length = i913[12]
  i912.boxThickness = new pc.Vec3( i913[13], i913[14], i913[15] )
  i912.meshShapeType = i913[16]
  request.r(i913[17], i913[18], 0, i912, 'mesh')
  request.r(i913[19], i913[20], 0, i912, 'meshRenderer')
  request.r(i913[21], i913[22], 0, i912, 'skinnedMeshRenderer')
  i912.useMeshMaterialIndex = !!i913[23]
  i912.meshMaterialIndex = i913[24]
  i912.useMeshColors = !!i913[25]
  i912.normalOffset = i913[26]
  i912.arc = i913[27]
  i912.arcMode = i913[28]
  i912.arcSpread = i913[29]
  i912.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[30], i912.arcSpeed)
  i912.donutRadius = i913[31]
  i912.position = new pc.Vec3( i913[32], i913[33], i913[34] )
  i912.rotation = new pc.Vec3( i913[35], i913[36], i913[37] )
  i912.scale = new pc.Vec3( i913[38], i913[39], i913[40] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemSizeBySpeed()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.x)
  i914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.y)
  i914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.z)
  i914.separateAxes = !!i915[4]
  i914.range = new pc.Vec2( i915[5], i915[6] )
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemSizeOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.separateAxes = !!i917[4]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.mode = i919[1]
  i918.animation = i919[2]
  i918.numTilesX = i919[3]
  i918.numTilesY = i919[4]
  i918.useRandomRow = !!i919[5]
  i918.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[6], i918.frameOverTime)
  i918.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[7], i918.startFrame)
  i918.cycleCount = i919[8]
  i918.rowIndex = i919[9]
  i918.flipU = i919[10]
  i918.flipV = i919[11]
  i918.spriteCount = i919[12]
  var i921 = i919[13]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.sprites = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[1], i924.x)
  i924.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.y)
  i924.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.z)
  i924.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.radial)
  i924.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[5], i924.speedModifier)
  i924.space = i925[6]
  i924.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[7], i924.orbitalX)
  i924.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[8], i924.orbitalY)
  i924.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[9], i924.orbitalZ)
  i924.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[10], i924.orbitalOffsetX)
  i924.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[11], i924.orbitalOffsetY)
  i924.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[12], i924.orbitalOffsetZ)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemNoise()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.separateAxes = !!i927[1]
  i926.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.strengthX)
  i926.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.strengthY)
  i926.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[4], i926.strengthZ)
  i926.frequency = i927[5]
  i926.damping = !!i927[6]
  i926.octaveCount = i927[7]
  i926.octaveMultiplier = i927[8]
  i926.octaveScale = i927[9]
  i926.quality = i927[10]
  i926.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[11], i926.scrollSpeed)
  i926.scrollSpeedMultiplier = i927[12]
  i926.remapEnabled = !!i927[13]
  i926.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[14], i926.remapX)
  i926.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[15], i926.remapY)
  i926.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[16], i926.remapZ)
  i926.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[17], i926.positionAmount)
  i926.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[18], i926.rotationAmount)
  i926.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[19], i926.sizeAmount)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemInheritVelocity()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.mode = i929[1]
  i928.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.curve)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemForceOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.x)
  i930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.y)
  i930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.z)
  i930.space = i931[4]
  i930.randomized = !!i931[5]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[1], i932.limit)
  i932.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.limitX)
  i932.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[3], i932.limitY)
  i932.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[4], i932.limitZ)
  i932.dampen = i933[5]
  i932.separateAxes = !!i933[6]
  i932.space = i933[7]
  i932.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[8], i932.drag)
  i932.multiplyDragByParticleSize = !!i933[9]
  i932.multiplyDragByParticleVelocity = !!i933[10]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'mesh')
  i934.meshCount = i935[2]
  i934.activeVertexStreamsCount = i935[3]
  i934.alignment = i935[4]
  i934.renderMode = i935[5]
  i934.sortMode = i935[6]
  i934.lengthScale = i935[7]
  i934.velocityScale = i935[8]
  i934.cameraVelocityScale = i935[9]
  i934.normalDirection = i935[10]
  i934.sortingFudge = i935[11]
  i934.minParticleSize = i935[12]
  i934.maxParticleSize = i935[13]
  i934.pivot = new pc.Vec3( i935[14], i935[15], i935[16] )
  request.r(i935[17], i935[18], 0, i934, 'trailMaterial')
  i934.applyActiveColorSpace = !!i935[19]
  i934.enabled = !!i935[20]
  request.r(i935[21], i935[22], 0, i934, 'sharedMaterial')
  var i937 = i935[23]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.sharedMaterials = i936
  i934.receiveShadows = !!i935[24]
  i934.shadowCastingMode = i935[25]
  i934.sortingLayerID = i935[26]
  i934.sortingOrder = i935[27]
  i934.lightmapIndex = i935[28]
  i934.lightmapSceneIndex = i935[29]
  i934.lightmapScaleOffset = new pc.Vec4( i935[30], i935[31], i935[32], i935[33] )
  i934.lightProbeUsage = i935[34]
  i934.reflectionProbeUsage = i935[35]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'sharedMesh')
  var i941 = i939[2]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.bones = i940
  i938.updateWhenOffscreen = !!i939[3]
  i938.localBounds = i939[4]
  request.r(i939[5], i939[6], 0, i938, 'rootBone')
  var i943 = i939[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i943[i + 0]) );
  }
  i938.blendShapesWeights = i942
  i938.enabled = !!i939[8]
  request.r(i939[9], i939[10], 0, i938, 'sharedMaterial')
  var i945 = i939[11]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i938.sharedMaterials = i944
  i938.receiveShadows = !!i939[12]
  i938.shadowCastingMode = i939[13]
  i938.sortingLayerID = i939[14]
  i938.sortingOrder = i939[15]
  i938.lightmapIndex = i939[16]
  i938.lightmapSceneIndex = i939[17]
  i938.lightmapScaleOffset = new pc.Vec4( i939[18], i939[19], i939[20], i939[21] )
  i938.lightProbeUsage = i939[22]
  i938.reflectionProbeUsage = i939[23]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i949 = data
  i948.weight = i949[0]
  return i948
}

Deserializers["ItemController"] = function (request, data, root) {
  var i950 = root || request.c( 'ItemController' )
  var i951 = data
  i950.itemType = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'dropTarget')
  i950.onClick = request.d('UnityEngine.Events.UnityEvent', i951[3], i950.onClick)
  i950.onDrop = request.d('UnityEngine.Events.UnityEvent', i951[4], i950.onDrop)
  i950.onDragStart = request.d('UnityEngine.Events.UnityEvent', i951[5], i950.onDragStart)
  i950.onReturn = request.d('UnityEngine.Events.UnityEvent', i951[6], i950.onReturn)
  var i953 = i951[7]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('AnimObjectData', i953[i + 0]));
  }
  i950.animationObjects = i952
  i950.fxSoundType = i951[8]
  return i950
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i956 = root || request.c( 'AnimObjectData' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'animObj')
  i956.delayFromStart = i957[2]
  i956.durationToDeactivate = i957[3]
  return i956
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i958 = root || request.c( 'ItemGraphic' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.spriteRenderers = i960
  i958.sortingOrderOffset = i959[1]
  return i958
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i962 = root || request.c( 'ItemMovement' )
  var i963 = data
  return i962
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_FirstSelected')
  i964.m_sendNavigationEvents = !!i965[2]
  i964.m_DragThreshold = i965[3]
  return i964
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i967 = data
  i966.m_HorizontalAxis = i967[0]
  i966.m_VerticalAxis = i967[1]
  i966.m_SubmitButton = i967[2]
  i966.m_CancelButton = i967[3]
  i966.m_InputActionsPerSecond = i967[4]
  i966.m_RepeatDelay = i967[5]
  i966.m_ForceModuleActive = !!i967[6]
  i966.m_SendPointerHoverToParent = !!i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i969 = data
  i968.ambientIntensity = i969[0]
  i968.reflectionIntensity = i969[1]
  i968.ambientMode = i969[2]
  i968.ambientLight = new pc.Color(i969[3], i969[4], i969[5], i969[6])
  i968.ambientSkyColor = new pc.Color(i969[7], i969[8], i969[9], i969[10])
  i968.ambientGroundColor = new pc.Color(i969[11], i969[12], i969[13], i969[14])
  i968.ambientEquatorColor = new pc.Color(i969[15], i969[16], i969[17], i969[18])
  i968.fogColor = new pc.Color(i969[19], i969[20], i969[21], i969[22])
  i968.fogEndDistance = i969[23]
  i968.fogStartDistance = i969[24]
  i968.fogDensity = i969[25]
  i968.fog = !!i969[26]
  request.r(i969[27], i969[28], 0, i968, 'skybox')
  i968.fogMode = i969[29]
  var i971 = i969[30]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i971[i + 0]) );
  }
  i968.lightmaps = i970
  i968.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i969[31], i968.lightProbes)
  i968.lightmapsMode = i969[32]
  i968.mixedBakeMode = i969[33]
  i968.environmentLightingMode = i969[34]
  i968.ambientProbe = new pc.SphericalHarmonicsL2(i969[35])
  i968.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i969[36])
  i968.useReferenceAmbientProbe = !!i969[37]
  request.r(i969[38], i969[39], 0, i968, 'customReflection')
  request.r(i969[40], i969[41], 0, i968, 'defaultReflection')
  i968.defaultReflectionMode = i969[42]
  i968.defaultReflectionResolution = i969[43]
  i968.sunLightObjectId = i969[44]
  i968.pixelLightCount = i969[45]
  i968.defaultReflectionHDR = !!i969[46]
  i968.hasLightDataAsset = !!i969[47]
  i968.hasManualGenerate = !!i969[48]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'lightmapColor')
  request.r(i975[2], i975[3], 0, i974, 'lightmapDirection')
  request.r(i975[4], i975[5], 0, i974, 'shadowMask')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i976 = root || new UnityEngine.LightProbes()
  var i977 = data
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i987[i + 0]));
  }
  i984.ShaderCompilationErrors = i986
  i984.name = i985[1]
  i984.guid = i985[2]
  var i989 = i985[3]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.shaderDefinedKeywords = i988
  var i991 = i985[4]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i991[i + 0]) );
  }
  i984.passes = i990
  var i993 = i985[5]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i993[i + 0]) );
  }
  i984.usePasses = i992
  var i995 = i985[6]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i995[i + 0]) );
  }
  i984.defaultParameterValues = i994
  request.r(i985[7], i985[8], 0, i984, 'unityFallbackShader')
  i984.readDepth = !!i985[9]
  i984.hasDepthOnlyPass = !!i985[10]
  i984.isCreatedByShaderGraph = !!i985[11]
  i984.disableBatching = !!i985[12]
  i984.compiled = !!i985[13]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i999 = data
  i998.shaderName = i999[0]
  i998.errorMessage = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1004 = root || new pc.UnityShaderPass()
  var i1005 = data
  i1004.id = i1005[0]
  i1004.subShaderIndex = i1005[1]
  i1004.name = i1005[2]
  i1004.passType = i1005[3]
  i1004.grabPassTextureName = i1005[4]
  i1004.usePass = !!i1005[5]
  i1004.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[6], i1004.zTest)
  i1004.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[7], i1004.zWrite)
  i1004.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[8], i1004.culling)
  i1004.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1005[9], i1004.blending)
  i1004.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1005[10], i1004.alphaBlending)
  i1004.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[11], i1004.colorWriteMask)
  i1004.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[12], i1004.offsetUnits)
  i1004.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[13], i1004.offsetFactor)
  i1004.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[14], i1004.stencilRef)
  i1004.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[15], i1004.stencilReadMask)
  i1004.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[16], i1004.stencilWriteMask)
  i1004.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[17], i1004.stencilOp)
  i1004.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[18], i1004.stencilOpFront)
  i1004.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[19], i1004.stencilOpBack)
  var i1007 = i1005[20]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1007[i + 0]) );
  }
  i1004.tags = i1006
  var i1009 = i1005[21]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.passDefinedKeywords = i1008
  var i1011 = i1005[22]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1011[i + 0]) );
  }
  i1004.passDefinedKeywordGroups = i1010
  var i1013 = i1005[23]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1013[i + 0]) );
  }
  i1004.variants = i1012
  var i1015 = i1005[24]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1015[i + 0]) );
  }
  i1004.excludedVariants = i1014
  i1004.hasDepthReader = !!i1005[25]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1017 = data
  i1016.val = i1017[0]
  i1016.name = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1019 = data
  i1018.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[0], i1018.src)
  i1018.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[1], i1018.dst)
  i1018.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[2], i1018.op)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1021 = data
  i1020.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[0], i1020.pass)
  i1020.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[1], i1020.fail)
  i1020.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[2], i1020.zFail)
  i1020.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[3], i1020.comp)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.keywords = i1030
  i1028.hasDiscard = !!i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1035 = data
  i1034.passId = i1035[0]
  i1034.subShaderIndex = i1035[1]
  var i1037 = i1035[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.keywords = i1036
  i1034.vertexProgram = i1035[3]
  i1034.fragmentProgram = i1035[4]
  i1034.exportedForWebGl2 = !!i1035[5]
  i1034.readDepth = !!i1035[6]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'shader')
  i1040.pass = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.type = i1045[1]
  i1044.value = new pc.Vec4( i1045[2], i1045[3], i1045[4], i1045[5] )
  i1044.textureValue = i1045[6]
  i1044.shaderPropertyFlag = i1045[7]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1047 = data
  i1046.name = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'texture')
  i1046.aabb = i1047[3]
  i1046.vertices = i1047[4]
  i1046.triangles = i1047[5]
  i1046.textureRect = UnityEngine.Rect.MinMaxRect(i1047[6], i1047[7], i1047[8], i1047[9])
  i1046.packedRect = UnityEngine.Rect.MinMaxRect(i1047[10], i1047[11], i1047[12], i1047[13])
  i1046.border = new pc.Vec4( i1047[14], i1047[15], i1047[16], i1047[17] )
  i1046.transparency = i1047[18]
  i1046.bounds = i1047[19]
  i1046.pixelsPerUnit = i1047[20]
  i1046.textureWidth = i1047[21]
  i1046.textureHeight = i1047[22]
  i1046.nativeSize = new pc.Vec2( i1047[23], i1047[24] )
  i1046.pivot = new pc.Vec2( i1047[25], i1047[26] )
  i1046.textureRectOffset = new pc.Vec2( i1047[27], i1047[28] )
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1049 = data
  i1048.name = i1049[0]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.wrapMode = i1051[1]
  i1050.isLooping = !!i1051[2]
  i1050.length = i1051[3]
  var i1053 = i1051[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1053[i + 0]) );
  }
  i1050.curves = i1052
  var i1055 = i1051[5]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1055[i + 0]) );
  }
  i1050.events = i1054
  i1050.halfPrecision = !!i1051[6]
  i1050._frameRate = i1051[7]
  i1050.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1051[8], i1050.localBounds)
  i1050.hasMuscleCurves = !!i1051[9]
  var i1057 = i1051[10]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1050.clipMuscleConstant = i1056
  i1050.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1051[11], i1050.clipBindingConstant)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1061 = data
  i1060.path = i1061[0]
  i1060.hash = i1061[1]
  i1060.componentType = i1061[2]
  i1060.property = i1061[3]
  i1060.keys = i1061[4]
  var i1063 = i1061[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1063[i + 0]) );
  }
  i1060.objectReferenceKeys = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1067 = data
  i1066.time = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'value')
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1071 = data
  i1070.functionName = i1071[0]
  i1070.floatParameter = i1071[1]
  i1070.intParameter = i1071[2]
  i1070.stringParameter = i1071[3]
  request.r(i1071[4], i1071[5], 0, i1070, 'objectReferenceParameter')
  i1070.time = i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1073 = data
  i1072.center = new pc.Vec3( i1073[0], i1073[1], i1073[2] )
  i1072.extends = new pc.Vec3( i1073[3], i1073[4], i1073[5] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1076.genericBindings = i1078
  var i1081 = i1077[1]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1076.pptrCurveMapping = i1080
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.ascent = i1083[1]
  i1082.originalLineHeight = i1083[2]
  i1082.fontSize = i1083[3]
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1085[i + 0]) );
  }
  i1082.characterInfo = i1084
  request.r(i1083[5], i1083[6], 0, i1082, 'texture')
  i1082.originalFontSize = i1083[7]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1089 = data
  i1088.index = i1089[0]
  i1088.advance = i1089[1]
  i1088.bearing = i1089[2]
  i1088.glyphWidth = i1089[3]
  i1088.glyphHeight = i1089[4]
  i1088.minX = i1089[5]
  i1088.maxX = i1089[6]
  i1088.minY = i1089[7]
  i1088.maxY = i1089[8]
  i1088.uvBottomLeftX = i1089[9]
  i1088.uvBottomLeftY = i1089[10]
  i1088.uvBottomRightX = i1089[11]
  i1088.uvBottomRightY = i1089[12]
  i1088.uvTopLeftX = i1089[13]
  i1088.uvTopLeftY = i1089[14]
  i1088.uvTopRightX = i1089[15]
  i1088.uvTopRightY = i1089[16]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1091 = data
  i1090.name = i1091[0]
  var i1093 = i1091[1]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1093[i + 0]) );
  }
  i1090.layers = i1092
  var i1095 = i1091[2]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1095[i + 0]) );
  }
  i1090.parameters = i1094
  i1090.animationClips = i1091[3]
  i1090.avatarUnsupported = i1091[4]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.defaultWeight = i1099[1]
  i1098.blendingMode = i1099[2]
  i1098.avatarMask = i1099[3]
  i1098.syncedLayerIndex = i1099[4]
  i1098.syncedLayerAffectsTiming = !!i1099[5]
  i1098.syncedLayers = i1099[6]
  i1098.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1099[7], i1098.stateMachine)
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1101 = data
  i1100.id = i1101[0]
  i1100.name = i1101[1]
  i1100.path = i1101[2]
  var i1103 = i1101[3]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1103[i + 0]) );
  }
  i1100.states = i1102
  var i1105 = i1101[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1105[i + 0]) );
  }
  i1100.machines = i1104
  var i1107 = i1101[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1107[i + 0]) );
  }
  i1100.entryStateTransitions = i1106
  var i1109 = i1101[6]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1109[i + 0]) );
  }
  i1100.exitStateTransitions = i1108
  var i1111 = i1101[7]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1111[i + 0]) );
  }
  i1100.anyStateTransitions = i1110
  i1100.defaultStateId = i1101[8]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  i1114.cycleOffset = i1115[2]
  i1114.cycleOffsetParameter = i1115[3]
  i1114.cycleOffsetParameterActive = !!i1115[4]
  i1114.mirror = !!i1115[5]
  i1114.mirrorParameter = i1115[6]
  i1114.mirrorParameterActive = !!i1115[7]
  i1114.motionId = i1115[8]
  i1114.nameHash = i1115[9]
  i1114.fullPathHash = i1115[10]
  i1114.speed = i1115[11]
  i1114.speedParameter = i1115[12]
  i1114.speedParameterActive = !!i1115[13]
  i1114.tag = i1115[14]
  i1114.tagHash = i1115[15]
  i1114.writeDefaultValues = !!i1115[16]
  var i1117 = i1115[17]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 2, i1116, '')
  }
  i1114.behaviours = i1116
  var i1119 = i1115[18]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1119[i + 0]) );
  }
  i1114.transitions = i1118
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1125 = data
  i1124.fullPath = i1125[0]
  i1124.canTransitionToSelf = !!i1125[1]
  i1124.duration = i1125[2]
  i1124.exitTime = i1125[3]
  i1124.hasExitTime = !!i1125[4]
  i1124.hasFixedDuration = !!i1125[5]
  i1124.interruptionSource = i1125[6]
  i1124.offset = i1125[7]
  i1124.orderedInterruption = !!i1125[8]
  i1124.destinationStateId = i1125[9]
  i1124.isExit = !!i1125[10]
  i1124.mute = !!i1125[11]
  i1124.solo = !!i1125[12]
  var i1127 = i1125[13]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1127[i + 0]) );
  }
  i1124.conditions = i1126
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1133 = data
  i1132.destinationStateId = i1133[0]
  i1132.isExit = !!i1133[1]
  i1132.mute = !!i1133[2]
  i1132.solo = !!i1133[3]
  var i1135 = i1133[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1135[i + 0]) );
  }
  i1132.conditions = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1139 = data
  i1138.defaultBool = !!i1139[0]
  i1138.defaultFloat = i1139[1]
  i1138.defaultInt = i1139[2]
  i1138.name = i1139[3]
  i1138.nameHash = i1139[4]
  i1138.type = i1139[5]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1143 = data
  i1142.mode = i1143[0]
  i1142.parameter = i1143[1]
  i1142.threshold = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.bytes64 = i1145[1]
  i1144.data = i1145[2]
  return i1144
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1147 = data
  i1146.normalStyle = i1147[0]
  i1146.normalSpacingOffset = i1147[1]
  i1146.boldStyle = i1147[2]
  i1146.boldSpacing = i1147[3]
  i1146.italicStyle = i1147[4]
  i1146.tabSize = i1147[5]
  request.r(i1147[6], i1147[7], 0, i1146, 'atlas')
  i1146.m_SourceFontFileGUID = i1147[8]
  i1146.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1147[9], i1146.m_CreationSettings)
  request.r(i1147[10], i1147[11], 0, i1146, 'm_SourceFontFile')
  i1146.m_SourceFontFilePath = i1147[12]
  i1146.m_AtlasPopulationMode = i1147[13]
  i1146.InternalDynamicOS = !!i1147[14]
  var i1149 = i1147[15]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('UnityEngine.TextCore.Glyph', i1149[i + 0]));
  }
  i1146.m_GlyphTable = i1148
  var i1151 = i1147[16]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_Character', i1151[i + 0]));
  }
  i1146.m_CharacterTable = i1150
  var i1153 = i1147[17]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 2, i1152, '')
  }
  i1146.m_AtlasTextures = i1152
  i1146.m_AtlasTextureIndex = i1147[18]
  i1146.m_IsMultiAtlasTexturesEnabled = !!i1147[19]
  i1146.m_GetFontFeatures = !!i1147[20]
  i1146.m_ClearDynamicDataOnBuild = !!i1147[21]
  i1146.m_AtlasWidth = i1147[22]
  i1146.m_AtlasHeight = i1147[23]
  i1146.m_AtlasPadding = i1147[24]
  i1146.m_AtlasRenderMode = i1147[25]
  var i1155 = i1147[26]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('UnityEngine.TextCore.GlyphRect', i1155[i + 0]));
  }
  i1146.m_UsedGlyphRects = i1154
  var i1157 = i1147[27]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('UnityEngine.TextCore.GlyphRect', i1157[i + 0]));
  }
  i1146.m_FreeGlyphRects = i1156
  i1146.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1147[28], i1146.m_FontFeatureTable)
  i1146.m_ShouldReimportFontFeatures = !!i1147[29]
  var i1159 = i1147[30]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 1, i1158, '')
  }
  i1146.m_FallbackFontAssetTable = i1158
  var i1161 = i1147[31]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('TMPro.TMP_FontWeightPair', i1161[i + 0]) );
  }
  i1146.m_FontWeightTable = i1160
  var i1163 = i1147[32]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('TMPro.TMP_FontWeightPair', i1163[i + 0]) );
  }
  i1146.fontWeights = i1162
  i1146.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1147[33], i1146.m_fontInfo)
  var i1165 = i1147[34]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_Glyph', i1165[i + 0]));
  }
  i1146.m_glyphInfoList = i1164
  i1146.m_KerningTable = request.d('TMPro.KerningTable', i1147[35], i1146.m_KerningTable)
  var i1167 = i1147[36]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1146.fallbackFontAssets = i1166
  i1146.m_Version = i1147[37]
  i1146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1147[38], i1146.m_FaceInfo)
  request.r(i1147[39], i1147[40], 0, i1146, 'm_Material')
  return i1146
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1169 = data
  i1168.sourceFontFileName = i1169[0]
  i1168.sourceFontFileGUID = i1169[1]
  i1168.faceIndex = i1169[2]
  i1168.pointSizeSamplingMode = i1169[3]
  i1168.pointSize = i1169[4]
  i1168.padding = i1169[5]
  i1168.paddingMode = i1169[6]
  i1168.packingMode = i1169[7]
  i1168.atlasWidth = i1169[8]
  i1168.atlasHeight = i1169[9]
  i1168.characterSetSelectionMode = i1169[10]
  i1168.characterSequence = i1169[11]
  i1168.referencedFontAssetGUID = i1169[12]
  i1168.referencedTextAssetGUID = i1169[13]
  i1168.fontStyle = i1169[14]
  i1168.fontStyleModifier = i1169[15]
  i1168.renderMode = i1169[16]
  i1168.includeFontFeatures = !!i1169[17]
  return i1168
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1173 = data
  i1172.m_Index = i1173[0]
  i1172.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1173[1], i1172.m_Metrics)
  i1172.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1173[2], i1172.m_GlyphRect)
  i1172.m_Scale = i1173[3]
  i1172.m_AtlasIndex = i1173[4]
  i1172.m_ClassDefinitionType = i1173[5]
  return i1172
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1175 = data
  i1174.m_Width = i1175[0]
  i1174.m_Height = i1175[1]
  i1174.m_HorizontalBearingX = i1175[2]
  i1174.m_HorizontalBearingY = i1175[3]
  i1174.m_HorizontalAdvance = i1175[4]
  return i1174
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1177 = data
  i1176.m_X = i1177[0]
  i1176.m_Y = i1177[1]
  i1176.m_Width = i1177[2]
  i1176.m_Height = i1177[3]
  return i1176
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Character' )
  var i1181 = data
  i1180.m_ElementType = i1181[0]
  i1180.m_Unicode = i1181[1]
  i1180.m_GlyphIndex = i1181[2]
  i1180.m_Scale = i1181[3]
  return i1180
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.MultipleSubstitutionRecord', i1189[i + 0]));
  }
  i1186.m_MultipleSubstitutionRecords = i1188
  var i1191 = i1187[1]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.LigatureSubstitutionRecord', i1191[i + 0]));
  }
  i1186.m_LigatureSubstitutionRecords = i1190
  var i1193 = i1187[2]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1193[i + 0]));
  }
  i1186.m_GlyphPairAdjustmentRecords = i1192
  var i1195 = i1187[3]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1195[i + 0]));
  }
  i1186.m_MarkToBaseAdjustmentRecords = i1194
  var i1197 = i1187[4]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1197[i + 0]));
  }
  i1186.m_MarkToMarkAdjustmentRecords = i1196
  return i1186
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1201 = data
  i1200.m_TargetGlyphID = i1201[0]
  i1200.m_SubstituteGlyphIDs = i1201[1]
  return i1200
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1205 = data
  i1204.m_ComponentGlyphIDs = i1205[0]
  i1204.m_LigatureGlyphID = i1205[1]
  return i1204
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1209 = data
  i1208.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1209[0], i1208.m_FirstAdjustmentRecord)
  i1208.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1209[1], i1208.m_SecondAdjustmentRecord)
  i1208.m_FeatureLookupFlags = i1209[2]
  return i1208
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1213 = data
  i1212.m_BaseGlyphID = i1213[0]
  i1212.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1213[1], i1212.m_BaseGlyphAnchorPoint)
  i1212.m_MarkGlyphID = i1213[2]
  i1212.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1213[3], i1212.m_MarkPositionAdjustment)
  return i1212
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1217 = data
  i1216.m_BaseMarkGlyphID = i1217[0]
  i1216.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1217[1], i1216.m_BaseMarkGlyphAnchorPoint)
  i1216.m_CombiningMarkGlyphID = i1217[2]
  i1216.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1217[3], i1216.m_CombiningMarkPositionAdjustment)
  return i1216
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'regularTypeface')
  request.r(i1223[2], i1223[3], 0, i1222, 'italicTypeface')
  return i1222
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1225 = data
  i1224.Name = i1225[0]
  i1224.PointSize = i1225[1]
  i1224.Scale = i1225[2]
  i1224.CharacterCount = i1225[3]
  i1224.LineHeight = i1225[4]
  i1224.Baseline = i1225[5]
  i1224.Ascender = i1225[6]
  i1224.CapHeight = i1225[7]
  i1224.Descender = i1225[8]
  i1224.CenterLine = i1225[9]
  i1224.SuperscriptOffset = i1225[10]
  i1224.SubscriptOffset = i1225[11]
  i1224.SubSize = i1225[12]
  i1224.Underline = i1225[13]
  i1224.UnderlineThickness = i1225[14]
  i1224.strikethrough = i1225[15]
  i1224.strikethroughThickness = i1225[16]
  i1224.TabWidth = i1225[17]
  i1224.Padding = i1225[18]
  i1224.AtlasWidth = i1225[19]
  i1224.AtlasHeight = i1225[20]
  return i1224
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1229 = data
  i1228.id = i1229[0]
  i1228.x = i1229[1]
  i1228.y = i1229[2]
  i1228.width = i1229[3]
  i1228.height = i1229[4]
  i1228.xOffset = i1229[5]
  i1228.yOffset = i1229[6]
  i1228.xAdvance = i1229[7]
  i1228.scale = i1229[8]
  return i1228
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.KerningTable' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.KerningPair', i1233[i + 0]));
  }
  i1230.kerningPairs = i1232
  return i1230
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.KerningPair' )
  var i1237 = data
  i1236.xOffset = i1237[0]
  i1236.m_FirstGlyph = i1237[1]
  i1236.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1237[2], i1236.m_FirstGlyphAdjustments)
  i1236.m_SecondGlyph = i1237[3]
  i1236.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1237[4], i1236.m_SecondGlyphAdjustments)
  i1236.m_IgnoreSpacingAdjustments = !!i1237[5]
  return i1236
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1239 = data
  i1238.m_FaceIndex = i1239[0]
  i1238.m_FamilyName = i1239[1]
  i1238.m_StyleName = i1239[2]
  i1238.m_PointSize = i1239[3]
  i1238.m_Scale = i1239[4]
  i1238.m_UnitsPerEM = i1239[5]
  i1238.m_LineHeight = i1239[6]
  i1238.m_AscentLine = i1239[7]
  i1238.m_CapLine = i1239[8]
  i1238.m_MeanLine = i1239[9]
  i1238.m_Baseline = i1239[10]
  i1238.m_DescentLine = i1239[11]
  i1238.m_SuperscriptOffset = i1239[12]
  i1238.m_SuperscriptSize = i1239[13]
  i1238.m_SubscriptOffset = i1239[14]
  i1238.m_SubscriptSize = i1239[15]
  i1238.m_UnderlineOffset = i1239[16]
  i1238.m_UnderlineThickness = i1239[17]
  i1238.m_StrikethroughOffset = i1239[18]
  i1238.m_StrikethroughThickness = i1239[19]
  i1238.m_TabWidth = i1239[20]
  return i1238
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_Settings' )
  var i1241 = data
  i1240.assetVersion = i1241[0]
  i1240.m_TextWrappingMode = i1241[1]
  i1240.m_enableKerning = !!i1241[2]
  var i1243 = i1241[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(i1243[i + 0]);
  }
  i1240.m_ActiveFontFeatures = i1242
  i1240.m_enableExtraPadding = !!i1241[4]
  i1240.m_enableTintAllSprites = !!i1241[5]
  i1240.m_enableParseEscapeCharacters = !!i1241[6]
  i1240.m_EnableRaycastTarget = !!i1241[7]
  i1240.m_GetFontFeaturesAtRuntime = !!i1241[8]
  i1240.m_missingGlyphCharacter = i1241[9]
  i1240.m_ClearDynamicDataOnBuild = !!i1241[10]
  i1240.m_warningsDisabled = !!i1241[11]
  request.r(i1241[12], i1241[13], 0, i1240, 'm_defaultFontAsset')
  i1240.m_defaultFontAssetPath = i1241[14]
  i1240.m_defaultFontSize = i1241[15]
  i1240.m_defaultAutoSizeMinRatio = i1241[16]
  i1240.m_defaultAutoSizeMaxRatio = i1241[17]
  i1240.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1241[18], i1241[19] )
  i1240.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1241[20], i1241[21] )
  i1240.m_autoSizeTextContainer = !!i1241[22]
  i1240.m_IsTextObjectScaleStatic = !!i1241[23]
  var i1245 = i1241[24]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1240.m_fallbackFontAssets = i1244
  i1240.m_matchMaterialPreset = !!i1241[25]
  i1240.m_HideSubTextObjects = !!i1241[26]
  request.r(i1241[27], i1241[28], 0, i1240, 'm_defaultSpriteAsset')
  i1240.m_defaultSpriteAssetPath = i1241[29]
  i1240.m_enableEmojiSupport = !!i1241[30]
  i1240.m_MissingCharacterSpriteUnicode = i1241[31]
  var i1247 = i1241[32]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1240.m_EmojiFallbackTextAssets = i1246
  i1240.m_defaultColorGradientPresetsPath = i1241[33]
  request.r(i1241[34], i1241[35], 0, i1240, 'm_defaultStyleSheet')
  i1240.m_StyleSheetsResourcePath = i1241[36]
  request.r(i1241[37], i1241[38], 0, i1240, 'm_leadingCharacters')
  request.r(i1241[39], i1241[40], 0, i1240, 'm_followingCharacters')
  i1240.m_UseModernHangulLineBreakingRules = !!i1241[41]
  return i1240
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1251 = data
  i1250.m_GlyphIndex = i1251[0]
  i1250.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1251[1], i1250.m_GlyphValueRecord)
  return i1250
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1253 = data
  i1252.m_XPlacement = i1253[0]
  i1252.m_YPlacement = i1253[1]
  i1252.m_XAdvance = i1253[2]
  i1252.m_YAdvance = i1253[3]
  return i1252
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'spriteSheet')
  var i1257 = i1255[2]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_Sprite', i1257[i + 0]));
  }
  i1254.spriteInfoList = i1256
  var i1259 = i1255[3]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1254.fallbackSpriteAssets = i1258
  var i1261 = i1255[4]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_SpriteCharacter', i1261[i + 0]));
  }
  i1254.m_SpriteCharacterTable = i1260
  var i1263 = i1255[5]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_SpriteGlyph', i1263[i + 0]));
  }
  i1254.m_GlyphTable = i1262
  i1254.m_Version = i1255[6]
  i1254.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1255[7], i1254.m_FaceInfo)
  request.r(i1255[8], i1255[9], 0, i1254, 'm_Material')
  return i1254
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.hashCode = i1267[1]
  i1266.unicode = i1267[2]
  i1266.pivot = new pc.Vec2( i1267[3], i1267[4] )
  request.r(i1267[5], i1267[6], 0, i1266, 'sprite')
  i1266.id = i1267[7]
  i1266.x = i1267[8]
  i1266.y = i1267[9]
  i1266.width = i1267[10]
  i1266.height = i1267[11]
  i1266.xOffset = i1267[12]
  i1266.yOffset = i1267[13]
  i1266.xAdvance = i1267[14]
  i1266.scale = i1267[15]
  return i1266
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1273 = data
  i1272.m_Name = i1273[0]
  i1272.m_ElementType = i1273[1]
  i1272.m_Unicode = i1273[2]
  i1272.m_GlyphIndex = i1273[3]
  i1272.m_Scale = i1273[4]
  return i1272
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'sprite')
  i1276.m_Index = i1277[2]
  i1276.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1277[3], i1276.m_Metrics)
  i1276.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1277[4], i1276.m_GlyphRect)
  i1276.m_Scale = i1277[5]
  i1276.m_AtlasIndex = i1277[6]
  i1276.m_ClassDefinitionType = i1277[7]
  return i1276
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.TMP_Style', i1281[i + 0]));
  }
  i1278.m_StyleList = i1280
  return i1278
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_Style' )
  var i1285 = data
  i1284.m_Name = i1285[0]
  i1284.m_HashCode = i1285[1]
  i1284.m_OpeningDefinition = i1285[2]
  i1284.m_ClosingDefinition = i1285[3]
  i1284.m_OpeningTagArray = i1285[4]
  i1284.m_ClosingTagArray = i1285[5]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1289[i + 0]) );
  }
  i1286.files = i1288
  i1286.componentToPrefabIds = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1293 = data
  i1292.path = i1293[0]
  request.r(i1293[1], i1293[2], 0, i1292, 'unityObject')
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1297[i + 0]) );
  }
  i1294.scriptsExecutionOrder = i1296
  var i1299 = i1295[1]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1299[i + 0]) );
  }
  i1294.sortingLayers = i1298
  var i1301 = i1295[2]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1301[i + 0]) );
  }
  i1294.cullingLayers = i1300
  i1294.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1295[3], i1294.timeSettings)
  i1294.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1295[4], i1294.physicsSettings)
  i1294.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1295[5], i1294.physics2DSettings)
  i1294.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1295[6], i1294.qualitySettings)
  i1294.enableRealtimeShadows = !!i1295[7]
  i1294.enableAutoInstancing = !!i1295[8]
  i1294.enableStaticBatching = !!i1295[9]
  i1294.enableDynamicBatching = !!i1295[10]
  i1294.lightmapEncodingQuality = i1295[11]
  i1294.desiredColorSpace = i1295[12]
  var i1303 = i1295[13]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( i1303[i + 0] );
  }
  i1294.allTags = i1302
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.value = i1307[1]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.name = i1311[1]
  i1310.value = i1311[2]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1317 = data
  i1316.fixedDeltaTime = i1317[0]
  i1316.maximumDeltaTime = i1317[1]
  i1316.timeScale = i1317[2]
  i1316.maximumParticleTimestep = i1317[3]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1319 = data
  i1318.gravity = new pc.Vec3( i1319[0], i1319[1], i1319[2] )
  i1318.defaultSolverIterations = i1319[3]
  i1318.bounceThreshold = i1319[4]
  i1318.autoSyncTransforms = !!i1319[5]
  i1318.autoSimulation = !!i1319[6]
  var i1321 = i1319[7]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1321[i + 0]) );
  }
  i1318.collisionMatrix = i1320
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1325 = data
  i1324.enabled = !!i1325[0]
  i1324.layerId = i1325[1]
  i1324.otherLayerId = i1325[2]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1327 = data
  request.r(i1327[0], i1327[1], 0, i1326, 'material')
  i1326.gravity = new pc.Vec2( i1327[2], i1327[3] )
  i1326.positionIterations = i1327[4]
  i1326.velocityIterations = i1327[5]
  i1326.velocityThreshold = i1327[6]
  i1326.maxLinearCorrection = i1327[7]
  i1326.maxAngularCorrection = i1327[8]
  i1326.maxTranslationSpeed = i1327[9]
  i1326.maxRotationSpeed = i1327[10]
  i1326.baumgarteScale = i1327[11]
  i1326.baumgarteTOIScale = i1327[12]
  i1326.timeToSleep = i1327[13]
  i1326.linearSleepTolerance = i1327[14]
  i1326.angularSleepTolerance = i1327[15]
  i1326.defaultContactOffset = i1327[16]
  i1326.autoSimulation = !!i1327[17]
  i1326.queriesHitTriggers = !!i1327[18]
  i1326.queriesStartInColliders = !!i1327[19]
  i1326.callbacksOnDisable = !!i1327[20]
  i1326.reuseCollisionCallbacks = !!i1327[21]
  i1326.autoSyncTransforms = !!i1327[22]
  var i1329 = i1327[23]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1329[i + 0]) );
  }
  i1326.collisionMatrix = i1328
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1333 = data
  i1332.enabled = !!i1333[0]
  i1332.layerId = i1333[1]
  i1332.otherLayerId = i1333[2]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1337[i + 0]) );
  }
  i1334.qualityLevels = i1336
  var i1339 = i1335[1]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1334.names = i1338
  i1334.shadows = i1335[2]
  i1334.anisotropicFiltering = i1335[3]
  i1334.antiAliasing = i1335[4]
  i1334.lodBias = i1335[5]
  i1334.shadowCascades = i1335[6]
  i1334.shadowDistance = i1335[7]
  i1334.shadowmaskMode = i1335[8]
  i1334.shadowProjection = i1335[9]
  i1334.shadowResolution = i1335[10]
  i1334.softParticles = !!i1335[11]
  i1334.softVegetation = !!i1335[12]
  i1334.activeColorSpace = i1335[13]
  i1334.desiredColorSpace = i1335[14]
  i1334.masterTextureLimit = i1335[15]
  i1334.maxQueuedFrames = i1335[16]
  i1334.particleRaycastBudget = i1335[17]
  i1334.pixelLightCount = i1335[18]
  i1334.realtimeReflectionProbes = !!i1335[19]
  i1334.shadowCascade2Split = i1335[20]
  i1334.shadowCascade4Split = new pc.Vec3( i1335[21], i1335[22], i1335[23] )
  i1334.streamingMipmapsActive = !!i1335[24]
  i1334.vSyncCount = i1335[25]
  i1334.asyncUploadBufferSize = i1335[26]
  i1334.asyncUploadTimeSlice = i1335[27]
  i1334.billboardsFaceCameraPosition = !!i1335[28]
  i1334.shadowNearPlaneOffset = i1335[29]
  i1334.streamingMipmapsMemoryBudget = i1335[30]
  i1334.maximumLODLevel = i1335[31]
  i1334.streamingMipmapsAddAllCameras = !!i1335[32]
  i1334.streamingMipmapsMaxLevelReduction = i1335[33]
  i1334.streamingMipmapsRenderersPerFrame = i1335[34]
  i1334.resolutionScalingFixedDPIFactor = i1335[35]
  i1334.streamingMipmapsMaxFileIORequests = i1335[36]
  i1334.currentQualityLevel = i1335[37]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1345 = data
  i1344.weight = i1345[0]
  i1344.vertices = i1345[1]
  i1344.normals = i1345[2]
  i1344.tangents = i1345[3]
  return i1344
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1347 = data
  i1346.m_XCoordinate = i1347[0]
  i1346.m_YCoordinate = i1347[1]
  return i1346
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1349 = data
  i1348.m_XPositionAdjustment = i1349[0]
  i1348.m_YPositionAdjustment = i1349[1]
  return i1348
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1351 = data
  i1350.xPlacement = i1351[0]
  i1350.yPlacement = i1351[1]
  i1350.xAdvance = i1351[2]
  i1350.yAdvance = i1351[3]
  return i1350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[41],"59":[2],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[2],"82":[83],"84":[85],"86":[85],"20":[19],"5":[2],"33":[9],"87":[2],"88":[89],"90":[44],"91":[20],"92":[19],"93":[83,19],"26":[19,27],"94":[19],"95":[27,19],"96":[83],"97":[27,19],"98":[19],"99":[100],"101":[100],"102":[100],"103":[31],"104":[19],"105":[19],"23":[20],"25":[27,19],"106":[19],"22":[20],"107":[19],"108":[19],"109":[19],"110":[19],"111":[19],"112":[19],"113":[19],"114":[19],"115":[19],"116":[27,19],"117":[19],"118":[19],"119":[19],"120":[19],"121":[27,19],"122":[19],"123":[44],"124":[44],"45":[44],"125":[44],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","CurtainManager","UnityEngine.SpriteRenderer","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Button","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.BoxCollider","AnimColorController","PlaySound","PlaySoundOnEnable","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","ItemGraphic","ItemMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1739";

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

Deserializers.buildID = "4fa942c8-7c31-4475-9573-53fd8da12ca9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

