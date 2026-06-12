var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointSpring' )
  var i679 = data
  i678.spring = i679[0]
  i678.damper = i679[1]
  i678.targetPosition = i679[2]
  return i678
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor' )
  var i681 = data
  i680.m_TargetVelocity = i681[0]
  i680.m_Force = i681[1]
  i680.m_FreeSpin = i681[2]
  return i680
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointLimits' )
  var i683 = data
  i682.m_Min = i683[0]
  i682.m_Max = i683[1]
  i682.m_Bounciness = i683[2]
  i682.m_BounceMinVelocity = i683[3]
  i682.m_ContactDistance = i683[4]
  i682.minBounce = i683[5]
  i682.maxBounce = i683[6]
  return i682
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointDrive' )
  var i685 = data
  i684.m_PositionSpring = i685[0]
  i684.m_PositionDamper = i685[1]
  i684.m_MaximumForce = i685[2]
  i684.m_UseAcceleration = i685[3]
  return i684
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i687 = data
  i686.m_Spring = i687[0]
  i686.m_Damper = i687[1]
  return i686
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i689 = data
  i688.m_Limit = i689[0]
  i688.m_Bounciness = i689[1]
  i688.m_ContactDistance = i689[2]
  return i688
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i691 = data
  i690.m_ExtremumSlip = i691[0]
  i690.m_ExtremumValue = i691[1]
  i690.m_AsymptoteSlip = i691[2]
  i690.m_AsymptoteValue = i691[3]
  i690.m_Stiffness = i691[4]
  return i690
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i693 = data
  i692.m_LowerAngle = i693[0]
  i692.m_UpperAngle = i693[1]
  return i692
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i695 = data
  i694.m_MotorSpeed = i695[0]
  i694.m_MaximumMotorTorque = i695[1]
  return i694
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i697 = data
  i696.m_DampingRatio = i697[0]
  i696.m_Frequency = i697[1]
  i696.m_Angle = i697[2]
  return i696
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i699 = data
  i698.m_LowerTranslation = i699[0]
  i698.m_UpperTranslation = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i700 = root || new pc.UnityMaterial()
  var i701 = data
  i700.name = i701[0]
  request.r(i701[1], i701[2], 0, i700, 'shader')
  i700.renderQueue = i701[3]
  i700.enableInstancing = !!i701[4]
  var i703 = i701[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i703[i + 0]) );
  }
  i700.floatParameters = i702
  var i705 = i701[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i705[i + 0]) );
  }
  i700.colorParameters = i704
  var i707 = i701[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i707[i + 0]) );
  }
  i700.vectorParameters = i706
  var i709 = i701[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i709[i + 0]) );
  }
  i700.textureParameters = i708
  var i711 = i701[9]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i711[i + 0]) );
  }
  i700.materialFlags = i710
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Color(i719[1], i719[2], i719[3], i719[4])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i723 = data
  i722.name = i723[0]
  i722.value = new pc.Vec4( i723[1], i723[2], i723[3], i723[4] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'value')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i731 = data
  i730.name = i731[0]
  i730.enabled = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i733 = data
  i732.name = i733[0]
  i732.width = i733[1]
  i732.height = i733[2]
  i732.mipmapCount = i733[3]
  i732.anisoLevel = i733[4]
  i732.filterMode = i733[5]
  i732.hdr = !!i733[6]
  i732.format = i733[7]
  i732.wrapMode = i733[8]
  i732.alphaIsTransparency = !!i733[9]
  i732.alphaSource = i733[10]
  i732.graphicsFormat = i733[11]
  i732.sRGBTexture = !!i733[12]
  i732.desiredColorSpace = i733[13]
  i732.wrapU = i733[14]
  i732.wrapV = i733[15]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i735 = data
  i734.name = i735[0]
  i734.halfPrecision = !!i735[1]
  i734.useSimplification = !!i735[2]
  i734.useUInt32IndexFormat = !!i735[3]
  i734.vertexCount = i735[4]
  i734.aabb = i735[5]
  var i737 = i735[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( !!i737[i + 0] );
  }
  i734.streams = i736
  i734.vertices = i735[7]
  var i739 = i735[8]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i739[i + 0]) );
  }
  i734.subMeshes = i738
  var i741 = i735[9]
  var i740 = []
  for(var i = 0; i < i741.length; i += 16) {
    i740.push( new pc.Mat4().setData(i741[i + 0], i741[i + 1], i741[i + 2], i741[i + 3],  i741[i + 4], i741[i + 5], i741[i + 6], i741[i + 7],  i741[i + 8], i741[i + 9], i741[i + 10], i741[i + 11],  i741[i + 12], i741[i + 13], i741[i + 14], i741[i + 15]) );
  }
  i734.bindposes = i740
  var i743 = i735[10]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i743[i + 0]) );
  }
  i734.blendShapes = i742
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i749 = data
  i748.triangles = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i755 = data
  i754.name = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i757[i + 0]) );
  }
  i754.frames = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i759 = data
  i758.name = i759[0]
  i758.index = i759[1]
  i758.startup = !!i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i761 = data
  i760.aspect = i761[0]
  i760.orthographic = !!i761[1]
  i760.orthographicSize = i761[2]
  i760.backgroundColor = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.nearClipPlane = i761[7]
  i760.farClipPlane = i761[8]
  i760.fieldOfView = i761[9]
  i760.depth = i761[10]
  i760.clearFlags = i761[11]
  i760.cullingMask = i761[12]
  i760.rect = i761[13]
  request.r(i761[14], i761[15], 0, i760, 'targetTexture')
  i760.usePhysicalProperties = !!i761[16]
  i760.focalLength = i761[17]
  i760.sensorSize = new pc.Vec2( i761[18], i761[19] )
  i760.lensShift = new pc.Vec2( i761[20], i761[21] )
  i760.gateFit = i761[22]
  i760.commandBufferCount = i761[23]
  i760.cameraType = i761[24]
  i760.enabled = !!i761[25]
  return i760
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i762 = root || request.c( 'AutoCameraFit' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'canvasBtn')
  request.r(i763[2], i763[3], 0, i762, 'targetArea')
  i762.paddingLandscape = i763[4]
  i762.paddingPortrait = i763[5]
  i762.extraPaddingSmallScreen = i763[6]
  i762.smallScreenThreshold = i763[7]
  i762.autoUpdateOnResize = !!i763[8]
  i762.adjustInEditMode = !!i763[9]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i765 = data
  i764.name = i765[0]
  i764.tagId = i765[1]
  i764.enabled = !!i765[2]
  i764.isStatic = !!i765[3]
  i764.layer = i765[4]
  return i764
}

Deserializers["InputManager"] = function (request, data, root) {
  var i766 = root || request.c( 'InputManager' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'mainCamera')
  i766.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i767[2] )
  i766.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i767[3] )
  i766.installLayer = UnityEngine.LayerMask.FromIntegerValue( i767[4] )
  i766.maxDistance = i767[5]
  i766.curtainsToGotoStore = i767[6]
  request.r(i767[7], i767[8], 0, i766, 'dragBounds')
  return i766
}

Deserializers["CurtainManager"] = function (request, data, root) {
  var i768 = root || request.c( 'CurtainManager' )
  var i769 = data
  var i771 = i769[0]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768.curtains = i770
  i768.onCurtainRemoved = request.d('UnityEngine.Events.UnityEvent', i769[1], i768.onCurtainRemoved)
  return i768
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i775 = data
  i774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i775[0], i774.m_PersistentCalls)
  return i774
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.Events.PersistentCall', i779[i + 0]));
  }
  i776.m_Calls = i778
  return i776
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_Target')
  i782.m_TargetAssemblyTypeName = i783[2]
  i782.m_MethodName = i783[3]
  i782.m_Mode = i783[4]
  i782.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i783[5], i782.m_Arguments)
  i782.m_CallState = i783[6]
  return i782
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i784 = root || request.c( 'HandHintMmanager' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i784.hintItems = i786
  request.r(i785[1], i785[2], 0, i784, 'handHintObject')
  request.r(i785[3], i785[4], 0, i784, 'handAnimator')
  i784.idleTimeToHint = i785[5]
  i784.dragAnimDuration = i785[6]
  request.r(i785[7], i785[8], 0, i784, 'startHintPos')
  request.r(i785[9], i785[10], 0, i784, 'endHintPos')
  return i784
}

Deserializers["GameManager"] = function (request, data, root) {
  var i790 = root || request.c( 'GameManager' )
  var i791 = data
  return i790
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i792 = root || request.c( 'ItemManager' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i792.items = i794
  var i797 = i793[1]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('GirlEvolutionData')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('GirlEvolutionData', i797[i + 0]));
  }
  i792.girlEvolutions = i796
  return i792
}

Deserializers["GirlEvolutionData"] = function (request, data, root) {
  var i800 = root || request.c( 'GirlEvolutionData' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'girlObject')
  i800.unlockAtCurtainCount = i801[2]
  return i800
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i802 = root || request.c( 'Ply_SoundManager' )
  var i803 = data
  i802.fxAudio = request.d('FxAudio', i803[0], i802.fxAudio)
  request.r(i803[1], i803[2], 0, i802, 'bgm1')
  return i802
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i804 = root || request.c( 'FxAudio' )
  var i805 = data
  i804.None = request.d('SoundData', i805[0], i804.None)
  i804.ClickBox = request.d('SoundData', i805[1], i804.ClickBox)
  i804.Fan = request.d('SoundData', i805[2], i804.Fan)
  i804.Cream = request.d('SoundData', i805[3], i804.Cream)
  i804.Switch = request.d('SoundData', i805[4], i804.Switch)
  i804.Lighter = request.d('SoundData', i805[5], i804.Lighter)
  i804.Sausage = request.d('SoundData', i805[6], i804.Sausage)
  i804.Scissor = request.d('SoundData', i805[7], i804.Scissor)
  i804.Watertap = request.d('SoundData', i805[8], i804.Watertap)
  i804.Dog = request.d('SoundData', i805[9], i804.Dog)
  i804.Curtain = request.d('SoundData', i805[10], i804.Curtain)
  i804.Flame = request.d('SoundData', i805[11], i804.Flame)
  i804.Women1 = request.d('SoundData', i805[12], i804.Women1)
  i804.Women2 = request.d('SoundData', i805[13], i804.Women2)
  i804.Women3 = request.d('SoundData', i805[14], i804.Women3)
  i804.Women4 = request.d('SoundData', i805[15], i804.Women4)
  i804.Women5 = request.d('SoundData', i805[16], i804.Women5)
  i804.Women6 = request.d('SoundData', i805[17], i804.Women6)
  i804.Women7 = request.d('SoundData', i805[18], i804.Women7)
  return i804
}

Deserializers["SoundData"] = function (request, data, root) {
  var i806 = root || request.c( 'SoundData' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'clip')
  i806.repeatCount = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'clip')
  request.r(i809[2], i809[3], 0, i808, 'outputAudioMixerGroup')
  i808.playOnAwake = !!i809[4]
  i808.loop = !!i809[5]
  i808.time = i809[6]
  i808.volume = i809[7]
  i808.pitch = i809[8]
  i808.enabled = !!i809[9]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i811 = data
  i810.pivot = new pc.Vec2( i811[0], i811[1] )
  i810.anchorMin = new pc.Vec2( i811[2], i811[3] )
  i810.anchorMax = new pc.Vec2( i811[4], i811[5] )
  i810.sizeDelta = new pc.Vec2( i811[6], i811[7] )
  i810.anchoredPosition3D = new pc.Vec3( i811[8], i811[9], i811[10] )
  i810.rotation = new pc.Quat(i811[11], i811[12], i811[13], i811[14])
  i810.scale = new pc.Vec3( i811[15], i811[16], i811[17] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i813 = data
  i812.planeDistance = i813[0]
  i812.referencePixelsPerUnit = i813[1]
  i812.isFallbackOverlay = !!i813[2]
  i812.renderMode = i813[3]
  i812.renderOrder = i813[4]
  i812.sortingLayerName = i813[5]
  i812.sortingOrder = i813[6]
  i812.scaleFactor = i813[7]
  request.r(i813[8], i813[9], 0, i812, 'worldCamera')
  i812.overrideSorting = !!i813[10]
  i812.pixelPerfect = !!i813[11]
  i812.targetDisplay = i813[12]
  i812.overridePixelPerfect = !!i813[13]
  i812.enabled = !!i813[14]
  return i812
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i815 = data
  i814.m_UiScaleMode = i815[0]
  i814.m_ReferencePixelsPerUnit = i815[1]
  i814.m_ScaleFactor = i815[2]
  i814.m_ReferenceResolution = new pc.Vec2( i815[3], i815[4] )
  i814.m_ScreenMatchMode = i815[5]
  i814.m_MatchWidthOrHeight = i815[6]
  i814.m_PhysicalUnit = i815[7]
  i814.m_FallbackScreenDPI = i815[8]
  i814.m_DefaultSpriteDPI = i815[9]
  i814.m_DynamicPixelsPerUnit = i815[10]
  i814.m_PresetInfoIsWorld = !!i815[11]
  return i814
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i817 = data
  i816.m_IgnoreReversedGraphics = !!i817[0]
  i816.m_BlockingObjects = i817[1]
  i816.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i817[2] )
  return i816
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i818 = root || request.c( 'ProgressBarUI' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'fillImage')
  request.r(i819[2], i819[3], 0, i818, 'progressText')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i821 = data
  i820.cullTransparentMesh = !!i821[0]
  return i820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Image' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Sprite')
  i822.m_Type = i823[2]
  i822.m_PreserveAspect = !!i823[3]
  i822.m_FillCenter = !!i823[4]
  i822.m_FillMethod = i823[5]
  i822.m_FillAmount = i823[6]
  i822.m_FillClockwise = !!i823[7]
  i822.m_FillOrigin = i823[8]
  i822.m_UseSpriteMesh = !!i823[9]
  i822.m_PixelsPerUnitMultiplier = i823[10]
  request.r(i823[11], i823[12], 0, i822, 'm_Material')
  i822.m_Maskable = !!i823[13]
  i822.m_Color = new pc.Color(i823[14], i823[15], i823[16], i823[17])
  i822.m_RaycastTarget = !!i823[18]
  i822.m_RaycastPadding = new pc.Vec4( i823[19], i823[20], i823[21], i823[22] )
  return i822
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i825 = data
  i824.m_hasFontAssetChanged = !!i825[0]
  request.r(i825[1], i825[2], 0, i824, 'm_baseMaterial')
  i824.m_maskOffset = new pc.Vec4( i825[3], i825[4], i825[5], i825[6] )
  i824.m_text = i825[7]
  i824.m_isRightToLeft = !!i825[8]
  request.r(i825[9], i825[10], 0, i824, 'm_fontAsset')
  request.r(i825[11], i825[12], 0, i824, 'm_sharedMaterial')
  var i827 = i825[13]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.m_fontSharedMaterials = i826
  request.r(i825[14], i825[15], 0, i824, 'm_fontMaterial')
  var i829 = i825[16]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i824.m_fontMaterials = i828
  i824.m_fontColor32 = UnityEngine.Color32.ConstructColor(i825[17], i825[18], i825[19], i825[20])
  i824.m_fontColor = new pc.Color(i825[21], i825[22], i825[23], i825[24])
  i824.m_enableVertexGradient = !!i825[25]
  i824.m_colorMode = i825[26]
  i824.m_fontColorGradient = request.d('TMPro.VertexGradient', i825[27], i824.m_fontColorGradient)
  request.r(i825[28], i825[29], 0, i824, 'm_fontColorGradientPreset')
  request.r(i825[30], i825[31], 0, i824, 'm_spriteAsset')
  i824.m_tintAllSprites = !!i825[32]
  request.r(i825[33], i825[34], 0, i824, 'm_StyleSheet')
  i824.m_TextStyleHashCode = i825[35]
  i824.m_overrideHtmlColors = !!i825[36]
  i824.m_faceColor = UnityEngine.Color32.ConstructColor(i825[37], i825[38], i825[39], i825[40])
  i824.m_fontSize = i825[41]
  i824.m_fontSizeBase = i825[42]
  i824.m_fontWeight = i825[43]
  i824.m_enableAutoSizing = !!i825[44]
  i824.m_fontSizeMin = i825[45]
  i824.m_fontSizeMax = i825[46]
  i824.m_fontStyle = i825[47]
  i824.m_HorizontalAlignment = i825[48]
  i824.m_VerticalAlignment = i825[49]
  i824.m_textAlignment = i825[50]
  i824.m_characterSpacing = i825[51]
  i824.m_wordSpacing = i825[52]
  i824.m_lineSpacing = i825[53]
  i824.m_lineSpacingMax = i825[54]
  i824.m_paragraphSpacing = i825[55]
  i824.m_charWidthMaxAdj = i825[56]
  i824.m_TextWrappingMode = i825[57]
  i824.m_wordWrappingRatios = i825[58]
  i824.m_overflowMode = i825[59]
  request.r(i825[60], i825[61], 0, i824, 'm_linkedTextComponent')
  request.r(i825[62], i825[63], 0, i824, 'parentLinkedComponent')
  i824.m_enableKerning = !!i825[64]
  var i831 = i825[65]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(i831[i + 0]);
  }
  i824.m_ActiveFontFeatures = i830
  i824.m_enableExtraPadding = !!i825[66]
  i824.checkPaddingRequired = !!i825[67]
  i824.m_isRichText = !!i825[68]
  i824.m_parseCtrlCharacters = !!i825[69]
  i824.m_isOrthographic = !!i825[70]
  i824.m_isCullingEnabled = !!i825[71]
  i824.m_horizontalMapping = i825[72]
  i824.m_verticalMapping = i825[73]
  i824.m_uvLineOffset = i825[74]
  i824.m_geometrySortingOrder = i825[75]
  i824.m_IsTextObjectScaleStatic = !!i825[76]
  i824.m_VertexBufferAutoSizeReduction = !!i825[77]
  i824.m_useMaxVisibleDescender = !!i825[78]
  i824.m_pageToDisplay = i825[79]
  i824.m_margin = new pc.Vec4( i825[80], i825[81], i825[82], i825[83] )
  i824.m_isUsingLegacyAnimationComponent = !!i825[84]
  i824.m_isVolumetricText = !!i825[85]
  request.r(i825[86], i825[87], 0, i824, 'm_Material')
  i824.m_EmojiFallbackSupport = !!i825[88]
  i824.m_Maskable = !!i825[89]
  i824.m_Color = new pc.Color(i825[90], i825[91], i825[92], i825[93])
  i824.m_RaycastTarget = !!i825[94]
  i824.m_RaycastPadding = new pc.Vec4( i825[95], i825[96], i825[97], i825[98] )
  return i824
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.VertexGradient' )
  var i835 = data
  i834.topLeft = new pc.Color(i835[0], i835[1], i835[2], i835[3])
  i834.topRight = new pc.Color(i835[4], i835[5], i835[6], i835[7])
  i834.bottomLeft = new pc.Color(i835[8], i835[9], i835[10], i835[11])
  i834.bottomRight = new pc.Color(i835[12], i835[13], i835[14], i835[15])
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'animatorController')
  request.r(i839[2], i839[3], 0, i838, 'avatar')
  i838.updateMode = i839[4]
  i838.hasTransformHierarchy = !!i839[5]
  i838.applyRootMotion = !!i839[6]
  var i841 = i839[7]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.humanBones = i840
  i838.enabled = !!i839[8]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i845 = data
  i844.color = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  request.r(i845[4], i845[5], 0, i844, 'sprite')
  i844.flipX = !!i845[6]
  i844.flipY = !!i845[7]
  i844.drawMode = i845[8]
  i844.size = new pc.Vec2( i845[9], i845[10] )
  i844.tileMode = i845[11]
  i844.adaptiveModeThreshold = i845[12]
  i844.maskInteraction = i845[13]
  i844.spriteSortPoint = i845[14]
  i844.enabled = !!i845[15]
  request.r(i845[16], i845[17], 0, i844, 'sharedMaterial')
  var i847 = i845[18]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[19]
  i844.shadowCastingMode = i845[20]
  i844.sortingLayerID = i845[21]
  i844.sortingOrder = i845[22]
  i844.lightmapIndex = i845[23]
  i844.lightmapSceneIndex = i845[24]
  i844.lightmapScaleOffset = new pc.Vec4( i845[25], i845[26], i845[27], i845[28] )
  i844.lightProbeUsage = i845[29]
  i844.reflectionProbeUsage = i845[30]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.size = new pc.Vec3( i849[3], i849[4], i849[5] )
  i848.enabled = !!i849[6]
  i848.isTrigger = !!i849[7]
  request.r(i849[8], i849[9], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'additionalVertexStreams')
  i850.enabled = !!i851[2]
  request.r(i851[3], i851[4], 0, i850, 'sharedMaterial')
  var i853 = i851[5]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.sharedMaterials = i852
  i850.receiveShadows = !!i851[6]
  i850.shadowCastingMode = i851[7]
  i850.sortingLayerID = i851[8]
  i850.sortingOrder = i851[9]
  i850.lightmapIndex = i851[10]
  i850.lightmapSceneIndex = i851[11]
  i850.lightmapScaleOffset = new pc.Vec4( i851[12], i851[13], i851[14], i851[15] )
  i850.lightProbeUsage = i851[16]
  i850.reflectionProbeUsage = i851[17]
  return i850
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TextMeshPro' )
  var i855 = data
  i854._SortingLayer = i855[0]
  i854._SortingLayerID = i855[1]
  i854._SortingOrder = i855[2]
  i854.m_hasFontAssetChanged = !!i855[3]
  request.r(i855[4], i855[5], 0, i854, 'm_renderer')
  i854.m_maskType = i855[6]
  i854.m_text = i855[7]
  i854.m_isRightToLeft = !!i855[8]
  request.r(i855[9], i855[10], 0, i854, 'm_fontAsset')
  request.r(i855[11], i855[12], 0, i854, 'm_sharedMaterial')
  var i857 = i855[13]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.m_fontSharedMaterials = i856
  request.r(i855[14], i855[15], 0, i854, 'm_fontMaterial')
  var i859 = i855[16]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.m_fontMaterials = i858
  i854.m_fontColor32 = UnityEngine.Color32.ConstructColor(i855[17], i855[18], i855[19], i855[20])
  i854.m_fontColor = new pc.Color(i855[21], i855[22], i855[23], i855[24])
  i854.m_enableVertexGradient = !!i855[25]
  i854.m_colorMode = i855[26]
  i854.m_fontColorGradient = request.d('TMPro.VertexGradient', i855[27], i854.m_fontColorGradient)
  request.r(i855[28], i855[29], 0, i854, 'm_fontColorGradientPreset')
  request.r(i855[30], i855[31], 0, i854, 'm_spriteAsset')
  i854.m_tintAllSprites = !!i855[32]
  request.r(i855[33], i855[34], 0, i854, 'm_StyleSheet')
  i854.m_TextStyleHashCode = i855[35]
  i854.m_overrideHtmlColors = !!i855[36]
  i854.m_faceColor = UnityEngine.Color32.ConstructColor(i855[37], i855[38], i855[39], i855[40])
  i854.m_fontSize = i855[41]
  i854.m_fontSizeBase = i855[42]
  i854.m_fontWeight = i855[43]
  i854.m_enableAutoSizing = !!i855[44]
  i854.m_fontSizeMin = i855[45]
  i854.m_fontSizeMax = i855[46]
  i854.m_fontStyle = i855[47]
  i854.m_HorizontalAlignment = i855[48]
  i854.m_VerticalAlignment = i855[49]
  i854.m_textAlignment = i855[50]
  i854.m_characterSpacing = i855[51]
  i854.m_wordSpacing = i855[52]
  i854.m_lineSpacing = i855[53]
  i854.m_lineSpacingMax = i855[54]
  i854.m_paragraphSpacing = i855[55]
  i854.m_charWidthMaxAdj = i855[56]
  i854.m_TextWrappingMode = i855[57]
  i854.m_wordWrappingRatios = i855[58]
  i854.m_overflowMode = i855[59]
  request.r(i855[60], i855[61], 0, i854, 'm_linkedTextComponent')
  request.r(i855[62], i855[63], 0, i854, 'parentLinkedComponent')
  i854.m_enableKerning = !!i855[64]
  var i861 = i855[65]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(i861[i + 0]);
  }
  i854.m_ActiveFontFeatures = i860
  i854.m_enableExtraPadding = !!i855[66]
  i854.checkPaddingRequired = !!i855[67]
  i854.m_isRichText = !!i855[68]
  i854.m_parseCtrlCharacters = !!i855[69]
  i854.m_isOrthographic = !!i855[70]
  i854.m_isCullingEnabled = !!i855[71]
  i854.m_horizontalMapping = i855[72]
  i854.m_verticalMapping = i855[73]
  i854.m_uvLineOffset = i855[74]
  i854.m_geometrySortingOrder = i855[75]
  i854.m_IsTextObjectScaleStatic = !!i855[76]
  i854.m_VertexBufferAutoSizeReduction = !!i855[77]
  i854.m_useMaxVisibleDescender = !!i855[78]
  i854.m_pageToDisplay = i855[79]
  i854.m_margin = new pc.Vec4( i855[80], i855[81], i855[82], i855[83] )
  i854.m_isUsingLegacyAnimationComponent = !!i855[84]
  i854.m_isVolumetricText = !!i855[85]
  request.r(i855[86], i855[87], 0, i854, 'm_Material')
  i854.m_EmojiFallbackSupport = !!i855[88]
  i854.m_Maskable = !!i855[89]
  i854.m_Color = new pc.Color(i855[90], i855[91], i855[92], i855[93])
  i854.m_RaycastTarget = !!i855[94]
  i854.m_RaycastPadding = new pc.Vec4( i855[95], i855[96], i855[97], i855[98] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'sharedMesh')
  return i862
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_RootBone')
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.m_BoneTransforms = i866
  i864.m_AlwaysUpdate = !!i865[3]
  i864.m_AutoRebind = !!i865[4]
  return i864
}

Deserializers["AnimColorController"] = function (request, data, root) {
  var i868 = root || request.c( 'AnimColorController' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i868.partsToColor = i870
  return i868
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i872 = root || request.c( 'PlaySound' )
  var i873 = data
  i872.fxType = i873[0]
  i872.sound2 = i873[1]
  i872.sound3 = i873[2]
  return i872
}

Deserializers["PlaySoundOnEnable"] = function (request, data, root) {
  var i874 = root || request.c( 'PlaySoundOnEnable' )
  var i875 = data
  i874.soundToPlay = i875[0]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i877 = data
  i876.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i877[0], i876.main)
  i876.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i877[1], i876.colorBySpeed)
  i876.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i877[2], i876.colorOverLifetime)
  i876.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i877[3], i876.emission)
  i876.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i877[4], i876.rotationBySpeed)
  i876.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i877[5], i876.rotationOverLifetime)
  i876.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i877[6], i876.shape)
  i876.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i877[7], i876.sizeBySpeed)
  i876.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i877[8], i876.sizeOverLifetime)
  i876.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i877[9], i876.textureSheetAnimation)
  i876.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i877[10], i876.velocityOverLifetime)
  i876.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i877[11], i876.noise)
  i876.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i877[12], i876.inheritVelocity)
  i876.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i877[13], i876.forceOverLifetime)
  i876.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i877[14], i876.limitVelocityOverLifetime)
  i876.useAutoRandomSeed = !!i877[15]
  i876.randomSeed = i877[16]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemMain()
  var i879 = data
  i878.duration = i879[0]
  i878.loop = !!i879[1]
  i878.prewarm = !!i879[2]
  i878.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[3], i878.startDelay)
  i878.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[4], i878.startLifetime)
  i878.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[5], i878.startSpeed)
  i878.startSize3D = !!i879[6]
  i878.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[7], i878.startSizeX)
  i878.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[8], i878.startSizeY)
  i878.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[9], i878.startSizeZ)
  i878.startRotation3D = !!i879[10]
  i878.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[11], i878.startRotationX)
  i878.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[12], i878.startRotationY)
  i878.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[13], i878.startRotationZ)
  i878.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i879[14], i878.startColor)
  i878.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[15], i878.gravityModifier)
  i878.simulationSpace = i879[16]
  request.r(i879[17], i879[18], 0, i878, 'customSimulationSpace')
  i878.simulationSpeed = i879[19]
  i878.useUnscaledTime = !!i879[20]
  i878.scalingMode = i879[21]
  i878.playOnAwake = !!i879[22]
  i878.maxParticles = i879[23]
  i878.emitterVelocityMode = i879[24]
  i878.stopAction = i879[25]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i880 = root || new pc.MinMaxCurve()
  var i881 = data
  i880.mode = i881[0]
  i880.curveMin = new pc.AnimationCurve( { keys_flow: i881[1] } )
  i880.curveMax = new pc.AnimationCurve( { keys_flow: i881[2] } )
  i880.curveMultiplier = i881[3]
  i880.constantMin = i881[4]
  i880.constantMax = i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i882 = root || new pc.MinMaxGradient()
  var i883 = data
  i882.mode = i883[0]
  i882.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i883[1], i882.gradientMin)
  i882.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i883[2], i882.gradientMax)
  i882.colorMin = new pc.Color(i883[3], i883[4], i883[5], i883[6])
  i882.colorMax = new pc.Color(i883[7], i883[8], i883[9], i883[10])
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i885 = data
  i884.mode = i885[0]
  var i887 = i885[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i887[i + 0]) );
  }
  i884.colorKeys = i886
  var i889 = i885[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i889[i + 0]) );
  }
  i884.alphaKeys = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemColorBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i891[1], i890.color)
  i890.range = new pc.Vec2( i891[2], i891[3] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i895 = data
  i894.color = new pc.Color(i895[0], i895[1], i895[2], i895[3])
  i894.time = i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i899 = data
  i898.alpha = i899[0]
  i898.time = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemColorOverLifetime()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i901[1], i900.color)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemEmitter()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.rateOverTime)
  i902.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.rateOverDistance)
  var i905 = i903[3]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i905[i + 0]) );
  }
  i902.bursts = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemBurst()
  var i909 = data
  i908.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[0], i908.count)
  i908.cycleCount = i909[1]
  i908.minCount = i909[2]
  i908.maxCount = i909[3]
  i908.repeatInterval = i909[4]
  i908.time = i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemRotationBySpeed()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.x)
  i910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.y)
  i910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.z)
  i910.separateAxes = !!i911[4]
  i910.range = new pc.Vec2( i911[5], i911[6] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemRotationOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.separateAxes = !!i913[4]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemShape()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.shapeType = i915[1]
  i914.randomDirectionAmount = i915[2]
  i914.sphericalDirectionAmount = i915[3]
  i914.randomPositionAmount = i915[4]
  i914.alignToDirection = !!i915[5]
  i914.radius = i915[6]
  i914.radiusMode = i915[7]
  i914.radiusSpread = i915[8]
  i914.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[9], i914.radiusSpeed)
  i914.radiusThickness = i915[10]
  i914.angle = i915[11]
  i914.length = i915[12]
  i914.boxThickness = new pc.Vec3( i915[13], i915[14], i915[15] )
  i914.meshShapeType = i915[16]
  request.r(i915[17], i915[18], 0, i914, 'mesh')
  request.r(i915[19], i915[20], 0, i914, 'meshRenderer')
  request.r(i915[21], i915[22], 0, i914, 'skinnedMeshRenderer')
  i914.useMeshMaterialIndex = !!i915[23]
  i914.meshMaterialIndex = i915[24]
  i914.useMeshColors = !!i915[25]
  i914.normalOffset = i915[26]
  i914.arc = i915[27]
  i914.arcMode = i915[28]
  i914.arcSpread = i915[29]
  i914.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[30], i914.arcSpeed)
  i914.donutRadius = i915[31]
  i914.position = new pc.Vec3( i915[32], i915[33], i915[34] )
  i914.rotation = new pc.Vec3( i915[35], i915[36], i915[37] )
  i914.scale = new pc.Vec3( i915[38], i915[39], i915[40] )
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemSizeBySpeed()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.separateAxes = !!i917[4]
  i916.range = new pc.Vec2( i917[5], i917[6] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemSizeOverLifetime()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[1], i918.x)
  i918.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[2], i918.y)
  i918.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.z)
  i918.separateAxes = !!i919[4]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.mode = i921[1]
  i920.animation = i921[2]
  i920.numTilesX = i921[3]
  i920.numTilesY = i921[4]
  i920.useRandomRow = !!i921[5]
  i920.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[6], i920.frameOverTime)
  i920.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[7], i920.startFrame)
  i920.cycleCount = i921[8]
  i920.rowIndex = i921[9]
  i920.flipU = i921[10]
  i920.flipV = i921[11]
  i920.spriteCount = i921[12]
  var i923 = i921[13]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i920.sprites = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[1], i926.x)
  i926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.y)
  i926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.z)
  i926.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[4], i926.radial)
  i926.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[5], i926.speedModifier)
  i926.space = i927[6]
  i926.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[7], i926.orbitalX)
  i926.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[8], i926.orbitalY)
  i926.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[9], i926.orbitalZ)
  i926.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[10], i926.orbitalOffsetX)
  i926.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[11], i926.orbitalOffsetY)
  i926.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[12], i926.orbitalOffsetZ)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemNoise()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.separateAxes = !!i929[1]
  i928.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.strengthX)
  i928.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.strengthY)
  i928.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[4], i928.strengthZ)
  i928.frequency = i929[5]
  i928.damping = !!i929[6]
  i928.octaveCount = i929[7]
  i928.octaveMultiplier = i929[8]
  i928.octaveScale = i929[9]
  i928.quality = i929[10]
  i928.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[11], i928.scrollSpeed)
  i928.scrollSpeedMultiplier = i929[12]
  i928.remapEnabled = !!i929[13]
  i928.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[14], i928.remapX)
  i928.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[15], i928.remapY)
  i928.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[16], i928.remapZ)
  i928.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[17], i928.positionAmount)
  i928.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[18], i928.rotationAmount)
  i928.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[19], i928.sizeAmount)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemInheritVelocity()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.mode = i931[1]
  i930.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.curve)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemForceOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[1], i932.x)
  i932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.y)
  i932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[3], i932.z)
  i932.space = i933[4]
  i932.randomized = !!i933[5]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[1], i934.limit)
  i934.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.limitX)
  i934.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[3], i934.limitY)
  i934.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[4], i934.limitZ)
  i934.dampen = i935[5]
  i934.separateAxes = !!i935[6]
  i934.space = i935[7]
  i934.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[8], i934.drag)
  i934.multiplyDragByParticleSize = !!i935[9]
  i934.multiplyDragByParticleVelocity = !!i935[10]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'mesh')
  i936.meshCount = i937[2]
  i936.activeVertexStreamsCount = i937[3]
  i936.alignment = i937[4]
  i936.renderMode = i937[5]
  i936.sortMode = i937[6]
  i936.lengthScale = i937[7]
  i936.velocityScale = i937[8]
  i936.cameraVelocityScale = i937[9]
  i936.normalDirection = i937[10]
  i936.sortingFudge = i937[11]
  i936.minParticleSize = i937[12]
  i936.maxParticleSize = i937[13]
  i936.pivot = new pc.Vec3( i937[14], i937[15], i937[16] )
  request.r(i937[17], i937[18], 0, i936, 'trailMaterial')
  i936.applyActiveColorSpace = !!i937[19]
  i936.enabled = !!i937[20]
  request.r(i937[21], i937[22], 0, i936, 'sharedMaterial')
  var i939 = i937[23]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.sharedMaterials = i938
  i936.receiveShadows = !!i937[24]
  i936.shadowCastingMode = i937[25]
  i936.sortingLayerID = i937[26]
  i936.sortingOrder = i937[27]
  i936.lightmapIndex = i937[28]
  i936.lightmapSceneIndex = i937[29]
  i936.lightmapScaleOffset = new pc.Vec4( i937[30], i937[31], i937[32], i937[33] )
  i936.lightProbeUsage = i937[34]
  i936.reflectionProbeUsage = i937[35]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'sharedMesh')
  var i943 = i941[2]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.bones = i942
  i940.updateWhenOffscreen = !!i941[3]
  i940.localBounds = i941[4]
  request.r(i941[5], i941[6], 0, i940, 'rootBone')
  var i945 = i941[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i945[i + 0]) );
  }
  i940.blendShapesWeights = i944
  i940.enabled = !!i941[8]
  request.r(i941[9], i941[10], 0, i940, 'sharedMaterial')
  var i947 = i941[11]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i940.sharedMaterials = i946
  i940.receiveShadows = !!i941[12]
  i940.shadowCastingMode = i941[13]
  i940.sortingLayerID = i941[14]
  i940.sortingOrder = i941[15]
  i940.lightmapIndex = i941[16]
  i940.lightmapSceneIndex = i941[17]
  i940.lightmapScaleOffset = new pc.Vec4( i941[18], i941[19], i941[20], i941[21] )
  i940.lightProbeUsage = i941[22]
  i940.reflectionProbeUsage = i941[23]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i951 = data
  i950.weight = i951[0]
  return i950
}

Deserializers["ItemController"] = function (request, data, root) {
  var i952 = root || request.c( 'ItemController' )
  var i953 = data
  i952.itemType = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'dropTarget')
  i952.onClick = request.d('UnityEngine.Events.UnityEvent', i953[3], i952.onClick)
  i952.onDrop = request.d('UnityEngine.Events.UnityEvent', i953[4], i952.onDrop)
  i952.onDragStart = request.d('UnityEngine.Events.UnityEvent', i953[5], i952.onDragStart)
  i952.onReturn = request.d('UnityEngine.Events.UnityEvent', i953[6], i952.onReturn)
  var i955 = i953[7]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('AnimObjectData', i955[i + 0]));
  }
  i952.animationObjects = i954
  i952.fxSoundType = i953[8]
  return i952
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_ObjectArgument')
  i956.m_ObjectArgumentAssemblyTypeName = i957[2]
  i956.m_IntArgument = i957[3]
  i956.m_FloatArgument = i957[4]
  i956.m_StringArgument = i957[5]
  i956.m_BoolArgument = !!i957[6]
  return i956
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i960 = root || request.c( 'AnimObjectData' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'animObj')
  i960.delayFromStart = i961[2]
  i960.durationToDeactivate = i961[3]
  return i960
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i962 = root || request.c( 'ItemGraphic' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.spriteRenderers = i964
  i962.sortingOrderOffset = i963[1]
  return i962
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i966 = root || request.c( 'ItemMovement' )
  var i967 = data
  return i966
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_FirstSelected')
  i968.m_sendNavigationEvents = !!i969[2]
  i968.m_DragThreshold = i969[3]
  return i968
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i971 = data
  i970.m_HorizontalAxis = i971[0]
  i970.m_VerticalAxis = i971[1]
  i970.m_SubmitButton = i971[2]
  i970.m_CancelButton = i971[3]
  i970.m_InputActionsPerSecond = i971[4]
  i970.m_RepeatDelay = i971[5]
  i970.m_ForceModuleActive = !!i971[6]
  i970.m_SendPointerHoverToParent = !!i971[7]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i973 = data
  i972.ambientIntensity = i973[0]
  i972.reflectionIntensity = i973[1]
  i972.ambientMode = i973[2]
  i972.ambientLight = new pc.Color(i973[3], i973[4], i973[5], i973[6])
  i972.ambientSkyColor = new pc.Color(i973[7], i973[8], i973[9], i973[10])
  i972.ambientGroundColor = new pc.Color(i973[11], i973[12], i973[13], i973[14])
  i972.ambientEquatorColor = new pc.Color(i973[15], i973[16], i973[17], i973[18])
  i972.fogColor = new pc.Color(i973[19], i973[20], i973[21], i973[22])
  i972.fogEndDistance = i973[23]
  i972.fogStartDistance = i973[24]
  i972.fogDensity = i973[25]
  i972.fog = !!i973[26]
  request.r(i973[27], i973[28], 0, i972, 'skybox')
  i972.fogMode = i973[29]
  var i975 = i973[30]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i975[i + 0]) );
  }
  i972.lightmaps = i974
  i972.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i973[31], i972.lightProbes)
  i972.lightmapsMode = i973[32]
  i972.mixedBakeMode = i973[33]
  i972.environmentLightingMode = i973[34]
  i972.ambientProbe = new pc.SphericalHarmonicsL2(i973[35])
  i972.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i973[36])
  i972.useReferenceAmbientProbe = !!i973[37]
  request.r(i973[38], i973[39], 0, i972, 'customReflection')
  request.r(i973[40], i973[41], 0, i972, 'defaultReflection')
  i972.defaultReflectionMode = i973[42]
  i972.defaultReflectionResolution = i973[43]
  i972.sunLightObjectId = i973[44]
  i972.pixelLightCount = i973[45]
  i972.defaultReflectionHDR = !!i973[46]
  i972.hasLightDataAsset = !!i973[47]
  i972.hasManualGenerate = !!i973[48]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'lightmapColor')
  request.r(i979[2], i979[3], 0, i978, 'lightmapDirection')
  request.r(i979[4], i979[5], 0, i978, 'shadowMask')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i980 = root || new UnityEngine.LightProbes()
  var i981 = data
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i991[i + 0]));
  }
  i988.ShaderCompilationErrors = i990
  i988.name = i989[1]
  i988.guid = i989[2]
  var i993 = i989[3]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i988.shaderDefinedKeywords = i992
  var i995 = i989[4]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i995[i + 0]) );
  }
  i988.passes = i994
  var i997 = i989[5]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i997[i + 0]) );
  }
  i988.usePasses = i996
  var i999 = i989[6]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i999[i + 0]) );
  }
  i988.defaultParameterValues = i998
  request.r(i989[7], i989[8], 0, i988, 'unityFallbackShader')
  i988.readDepth = !!i989[9]
  i988.hasDepthOnlyPass = !!i989[10]
  i988.isCreatedByShaderGraph = !!i989[11]
  i988.disableBatching = !!i989[12]
  i988.compiled = !!i989[13]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1003 = data
  i1002.shaderName = i1003[0]
  i1002.errorMessage = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1008 = root || new pc.UnityShaderPass()
  var i1009 = data
  i1008.id = i1009[0]
  i1008.subShaderIndex = i1009[1]
  i1008.name = i1009[2]
  i1008.passType = i1009[3]
  i1008.grabPassTextureName = i1009[4]
  i1008.usePass = !!i1009[5]
  i1008.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[6], i1008.zTest)
  i1008.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[7], i1008.zWrite)
  i1008.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[8], i1008.culling)
  i1008.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1009[9], i1008.blending)
  i1008.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1009[10], i1008.alphaBlending)
  i1008.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[11], i1008.colorWriteMask)
  i1008.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[12], i1008.offsetUnits)
  i1008.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[13], i1008.offsetFactor)
  i1008.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[14], i1008.stencilRef)
  i1008.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[15], i1008.stencilReadMask)
  i1008.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[16], i1008.stencilWriteMask)
  i1008.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[17], i1008.stencilOp)
  i1008.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[18], i1008.stencilOpFront)
  i1008.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[19], i1008.stencilOpBack)
  var i1011 = i1009[20]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1011[i + 0]) );
  }
  i1008.tags = i1010
  var i1013 = i1009[21]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1008.passDefinedKeywords = i1012
  var i1015 = i1009[22]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1015[i + 0]) );
  }
  i1008.passDefinedKeywordGroups = i1014
  var i1017 = i1009[23]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1017[i + 0]) );
  }
  i1008.variants = i1016
  var i1019 = i1009[24]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1019[i + 0]) );
  }
  i1008.excludedVariants = i1018
  i1008.hasDepthReader = !!i1009[25]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1021 = data
  i1020.val = i1021[0]
  i1020.name = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1023 = data
  i1022.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[0], i1022.src)
  i1022.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[1], i1022.dst)
  i1022.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[2], i1022.op)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1025 = data
  i1024.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[0], i1024.pass)
  i1024.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[1], i1024.fail)
  i1024.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[2], i1024.zFail)
  i1024.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[3], i1024.comp)
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.value = i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1032.keywords = i1034
  i1032.hasDiscard = !!i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1039 = data
  i1038.passId = i1039[0]
  i1038.subShaderIndex = i1039[1]
  var i1041 = i1039[2]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.keywords = i1040
  i1038.vertexProgram = i1039[3]
  i1038.fragmentProgram = i1039[4]
  i1038.exportedForWebGl2 = !!i1039[5]
  i1038.readDepth = !!i1039[6]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'shader')
  i1044.pass = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.type = i1049[1]
  i1048.value = new pc.Vec4( i1049[2], i1049[3], i1049[4], i1049[5] )
  i1048.textureValue = i1049[6]
  i1048.shaderPropertyFlag = i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1051 = data
  i1050.name = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'texture')
  i1050.aabb = i1051[3]
  i1050.vertices = i1051[4]
  i1050.triangles = i1051[5]
  i1050.textureRect = UnityEngine.Rect.MinMaxRect(i1051[6], i1051[7], i1051[8], i1051[9])
  i1050.packedRect = UnityEngine.Rect.MinMaxRect(i1051[10], i1051[11], i1051[12], i1051[13])
  i1050.border = new pc.Vec4( i1051[14], i1051[15], i1051[16], i1051[17] )
  i1050.transparency = i1051[18]
  i1050.bounds = i1051[19]
  i1050.pixelsPerUnit = i1051[20]
  i1050.textureWidth = i1051[21]
  i1050.textureHeight = i1051[22]
  i1050.nativeSize = new pc.Vec2( i1051[23], i1051[24] )
  i1050.pivot = new pc.Vec2( i1051[25], i1051[26] )
  i1050.textureRectOffset = new pc.Vec2( i1051[27], i1051[28] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1053 = data
  i1052.name = i1053[0]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.wrapMode = i1055[1]
  i1054.isLooping = !!i1055[2]
  i1054.length = i1055[3]
  var i1057 = i1055[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1057[i + 0]) );
  }
  i1054.curves = i1056
  var i1059 = i1055[5]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1059[i + 0]) );
  }
  i1054.events = i1058
  i1054.halfPrecision = !!i1055[6]
  i1054._frameRate = i1055[7]
  i1054.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1055[8], i1054.localBounds)
  i1054.hasMuscleCurves = !!i1055[9]
  var i1061 = i1055[10]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1054.clipMuscleConstant = i1060
  i1054.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1055[11], i1054.clipBindingConstant)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1065 = data
  i1064.path = i1065[0]
  i1064.hash = i1065[1]
  i1064.componentType = i1065[2]
  i1064.property = i1065[3]
  i1064.keys = i1065[4]
  var i1067 = i1065[5]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1067[i + 0]) );
  }
  i1064.objectReferenceKeys = i1066
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1071 = data
  i1070.time = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, 'value')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1075 = data
  i1074.functionName = i1075[0]
  i1074.floatParameter = i1075[1]
  i1074.intParameter = i1075[2]
  i1074.stringParameter = i1075[3]
  request.r(i1075[4], i1075[5], 0, i1074, 'objectReferenceParameter')
  i1074.time = i1075[6]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1077 = data
  i1076.center = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.extends = new pc.Vec3( i1077[3], i1077[4], i1077[5] )
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.genericBindings = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.pptrCurveMapping = i1084
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.ascent = i1087[1]
  i1086.originalLineHeight = i1087[2]
  i1086.fontSize = i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1089[i + 0]) );
  }
  i1086.characterInfo = i1088
  request.r(i1087[5], i1087[6], 0, i1086, 'texture')
  i1086.originalFontSize = i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1093 = data
  i1092.index = i1093[0]
  i1092.advance = i1093[1]
  i1092.bearing = i1093[2]
  i1092.glyphWidth = i1093[3]
  i1092.glyphHeight = i1093[4]
  i1092.minX = i1093[5]
  i1092.maxX = i1093[6]
  i1092.minY = i1093[7]
  i1092.maxY = i1093[8]
  i1092.uvBottomLeftX = i1093[9]
  i1092.uvBottomLeftY = i1093[10]
  i1092.uvBottomRightX = i1093[11]
  i1092.uvBottomRightY = i1093[12]
  i1092.uvTopLeftX = i1093[13]
  i1092.uvTopLeftY = i1093[14]
  i1092.uvTopRightX = i1093[15]
  i1092.uvTopRightY = i1093[16]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1095 = data
  i1094.name = i1095[0]
  var i1097 = i1095[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1097[i + 0]) );
  }
  i1094.layers = i1096
  var i1099 = i1095[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1099[i + 0]) );
  }
  i1094.parameters = i1098
  i1094.animationClips = i1095[3]
  i1094.avatarUnsupported = i1095[4]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.defaultWeight = i1103[1]
  i1102.blendingMode = i1103[2]
  i1102.avatarMask = i1103[3]
  i1102.syncedLayerIndex = i1103[4]
  i1102.syncedLayerAffectsTiming = !!i1103[5]
  i1102.syncedLayers = i1103[6]
  i1102.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1103[7], i1102.stateMachine)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1105 = data
  i1104.id = i1105[0]
  i1104.name = i1105[1]
  i1104.path = i1105[2]
  var i1107 = i1105[3]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1107[i + 0]) );
  }
  i1104.states = i1106
  var i1109 = i1105[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1109[i + 0]) );
  }
  i1104.machines = i1108
  var i1111 = i1105[5]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1111[i + 0]) );
  }
  i1104.entryStateTransitions = i1110
  var i1113 = i1105[6]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1113[i + 0]) );
  }
  i1104.exitStateTransitions = i1112
  var i1115 = i1105[7]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1115[i + 0]) );
  }
  i1104.anyStateTransitions = i1114
  i1104.defaultStateId = i1105[8]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1119 = data
  i1118.id = i1119[0]
  i1118.name = i1119[1]
  i1118.cycleOffset = i1119[2]
  i1118.cycleOffsetParameter = i1119[3]
  i1118.cycleOffsetParameterActive = !!i1119[4]
  i1118.mirror = !!i1119[5]
  i1118.mirrorParameter = i1119[6]
  i1118.mirrorParameterActive = !!i1119[7]
  i1118.motionId = i1119[8]
  i1118.nameHash = i1119[9]
  i1118.fullPathHash = i1119[10]
  i1118.speed = i1119[11]
  i1118.speedParameter = i1119[12]
  i1118.speedParameterActive = !!i1119[13]
  i1118.tag = i1119[14]
  i1118.tagHash = i1119[15]
  i1118.writeDefaultValues = !!i1119[16]
  var i1121 = i1119[17]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1118.behaviours = i1120
  var i1123 = i1119[18]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1123[i + 0]) );
  }
  i1118.transitions = i1122
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1129 = data
  i1128.fullPath = i1129[0]
  i1128.canTransitionToSelf = !!i1129[1]
  i1128.duration = i1129[2]
  i1128.exitTime = i1129[3]
  i1128.hasExitTime = !!i1129[4]
  i1128.hasFixedDuration = !!i1129[5]
  i1128.interruptionSource = i1129[6]
  i1128.offset = i1129[7]
  i1128.orderedInterruption = !!i1129[8]
  i1128.destinationStateId = i1129[9]
  i1128.isExit = !!i1129[10]
  i1128.mute = !!i1129[11]
  i1128.solo = !!i1129[12]
  var i1131 = i1129[13]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1131[i + 0]) );
  }
  i1128.conditions = i1130
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1137 = data
  i1136.destinationStateId = i1137[0]
  i1136.isExit = !!i1137[1]
  i1136.mute = !!i1137[2]
  i1136.solo = !!i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1139[i + 0]) );
  }
  i1136.conditions = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1143 = data
  i1142.defaultBool = !!i1143[0]
  i1142.defaultFloat = i1143[1]
  i1142.defaultInt = i1143[2]
  i1142.name = i1143[3]
  i1142.nameHash = i1143[4]
  i1142.type = i1143[5]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1147 = data
  i1146.mode = i1147[0]
  i1146.parameter = i1147[1]
  i1146.threshold = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.bytes64 = i1149[1]
  i1148.data = i1149[2]
  return i1148
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1151 = data
  i1150.normalStyle = i1151[0]
  i1150.normalSpacingOffset = i1151[1]
  i1150.boldStyle = i1151[2]
  i1150.boldSpacing = i1151[3]
  i1150.italicStyle = i1151[4]
  i1150.tabSize = i1151[5]
  request.r(i1151[6], i1151[7], 0, i1150, 'atlas')
  i1150.m_SourceFontFileGUID = i1151[8]
  i1150.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1151[9], i1150.m_CreationSettings)
  request.r(i1151[10], i1151[11], 0, i1150, 'm_SourceFontFile')
  i1150.m_SourceFontFilePath = i1151[12]
  i1150.m_AtlasPopulationMode = i1151[13]
  i1150.InternalDynamicOS = !!i1151[14]
  var i1153 = i1151[15]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('UnityEngine.TextCore.Glyph', i1153[i + 0]));
  }
  i1150.m_GlyphTable = i1152
  var i1155 = i1151[16]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.TMP_Character', i1155[i + 0]));
  }
  i1150.m_CharacterTable = i1154
  var i1157 = i1151[17]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 2, i1156, '')
  }
  i1150.m_AtlasTextures = i1156
  i1150.m_AtlasTextureIndex = i1151[18]
  i1150.m_IsMultiAtlasTexturesEnabled = !!i1151[19]
  i1150.m_GetFontFeatures = !!i1151[20]
  i1150.m_ClearDynamicDataOnBuild = !!i1151[21]
  i1150.m_AtlasWidth = i1151[22]
  i1150.m_AtlasHeight = i1151[23]
  i1150.m_AtlasPadding = i1151[24]
  i1150.m_AtlasRenderMode = i1151[25]
  var i1159 = i1151[26]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('UnityEngine.TextCore.GlyphRect', i1159[i + 0]));
  }
  i1150.m_UsedGlyphRects = i1158
  var i1161 = i1151[27]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('UnityEngine.TextCore.GlyphRect', i1161[i + 0]));
  }
  i1150.m_FreeGlyphRects = i1160
  i1150.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1151[28], i1150.m_FontFeatureTable)
  i1150.m_ShouldReimportFontFeatures = !!i1151[29]
  var i1163 = i1151[30]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1150.m_FallbackFontAssetTable = i1162
  var i1165 = i1151[31]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('TMPro.TMP_FontWeightPair', i1165[i + 0]) );
  }
  i1150.m_FontWeightTable = i1164
  var i1167 = i1151[32]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('TMPro.TMP_FontWeightPair', i1167[i + 0]) );
  }
  i1150.fontWeights = i1166
  i1150.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1151[33], i1150.m_fontInfo)
  var i1169 = i1151[34]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_Glyph', i1169[i + 0]));
  }
  i1150.m_glyphInfoList = i1168
  i1150.m_KerningTable = request.d('TMPro.KerningTable', i1151[35], i1150.m_KerningTable)
  var i1171 = i1151[36]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1150.fallbackFontAssets = i1170
  i1150.m_Version = i1151[37]
  i1150.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1151[38], i1150.m_FaceInfo)
  request.r(i1151[39], i1151[40], 0, i1150, 'm_Material')
  return i1150
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1173 = data
  i1172.sourceFontFileName = i1173[0]
  i1172.sourceFontFileGUID = i1173[1]
  i1172.faceIndex = i1173[2]
  i1172.pointSizeSamplingMode = i1173[3]
  i1172.pointSize = i1173[4]
  i1172.padding = i1173[5]
  i1172.paddingMode = i1173[6]
  i1172.packingMode = i1173[7]
  i1172.atlasWidth = i1173[8]
  i1172.atlasHeight = i1173[9]
  i1172.characterSetSelectionMode = i1173[10]
  i1172.characterSequence = i1173[11]
  i1172.referencedFontAssetGUID = i1173[12]
  i1172.referencedTextAssetGUID = i1173[13]
  i1172.fontStyle = i1173[14]
  i1172.fontStyleModifier = i1173[15]
  i1172.renderMode = i1173[16]
  i1172.includeFontFeatures = !!i1173[17]
  return i1172
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1177 = data
  i1176.m_Index = i1177[0]
  i1176.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1177[1], i1176.m_Metrics)
  i1176.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1177[2], i1176.m_GlyphRect)
  i1176.m_Scale = i1177[3]
  i1176.m_AtlasIndex = i1177[4]
  i1176.m_ClassDefinitionType = i1177[5]
  return i1176
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1179 = data
  i1178.m_Width = i1179[0]
  i1178.m_Height = i1179[1]
  i1178.m_HorizontalBearingX = i1179[2]
  i1178.m_HorizontalBearingY = i1179[3]
  i1178.m_HorizontalAdvance = i1179[4]
  return i1178
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1181 = data
  i1180.m_X = i1181[0]
  i1180.m_Y = i1181[1]
  i1180.m_Width = i1181[2]
  i1180.m_Height = i1181[3]
  return i1180
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_Character' )
  var i1185 = data
  i1184.m_ElementType = i1185[0]
  i1184.m_Unicode = i1185[1]
  i1184.m_GlyphIndex = i1185[2]
  i1184.m_Scale = i1185[3]
  return i1184
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.MultipleSubstitutionRecord', i1193[i + 0]));
  }
  i1190.m_MultipleSubstitutionRecords = i1192
  var i1195 = i1191[1]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.LigatureSubstitutionRecord', i1195[i + 0]));
  }
  i1190.m_LigatureSubstitutionRecords = i1194
  var i1197 = i1191[2]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1197[i + 0]));
  }
  i1190.m_GlyphPairAdjustmentRecords = i1196
  var i1199 = i1191[3]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1199[i + 0]));
  }
  i1190.m_MarkToBaseAdjustmentRecords = i1198
  var i1201 = i1191[4]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1201[i + 0]));
  }
  i1190.m_MarkToMarkAdjustmentRecords = i1200
  return i1190
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1205 = data
  i1204.m_TargetGlyphID = i1205[0]
  i1204.m_SubstituteGlyphIDs = i1205[1]
  return i1204
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1209 = data
  i1208.m_ComponentGlyphIDs = i1209[0]
  i1208.m_LigatureGlyphID = i1209[1]
  return i1208
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1213 = data
  i1212.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1213[0], i1212.m_FirstAdjustmentRecord)
  i1212.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1213[1], i1212.m_SecondAdjustmentRecord)
  i1212.m_FeatureLookupFlags = i1213[2]
  return i1212
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1217 = data
  i1216.m_BaseGlyphID = i1217[0]
  i1216.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1217[1], i1216.m_BaseGlyphAnchorPoint)
  i1216.m_MarkGlyphID = i1217[2]
  i1216.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1217[3], i1216.m_MarkPositionAdjustment)
  return i1216
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1221 = data
  i1220.m_BaseMarkGlyphID = i1221[0]
  i1220.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1221[1], i1220.m_BaseMarkGlyphAnchorPoint)
  i1220.m_CombiningMarkGlyphID = i1221[2]
  i1220.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1221[3], i1220.m_CombiningMarkPositionAdjustment)
  return i1220
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'regularTypeface')
  request.r(i1227[2], i1227[3], 0, i1226, 'italicTypeface')
  return i1226
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1229 = data
  i1228.Name = i1229[0]
  i1228.PointSize = i1229[1]
  i1228.Scale = i1229[2]
  i1228.CharacterCount = i1229[3]
  i1228.LineHeight = i1229[4]
  i1228.Baseline = i1229[5]
  i1228.Ascender = i1229[6]
  i1228.CapHeight = i1229[7]
  i1228.Descender = i1229[8]
  i1228.CenterLine = i1229[9]
  i1228.SuperscriptOffset = i1229[10]
  i1228.SubscriptOffset = i1229[11]
  i1228.SubSize = i1229[12]
  i1228.Underline = i1229[13]
  i1228.UnderlineThickness = i1229[14]
  i1228.strikethrough = i1229[15]
  i1228.strikethroughThickness = i1229[16]
  i1228.TabWidth = i1229[17]
  i1228.Padding = i1229[18]
  i1228.AtlasWidth = i1229[19]
  i1228.AtlasHeight = i1229[20]
  return i1228
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1233 = data
  i1232.id = i1233[0]
  i1232.x = i1233[1]
  i1232.y = i1233[2]
  i1232.width = i1233[3]
  i1232.height = i1233[4]
  i1232.xOffset = i1233[5]
  i1232.yOffset = i1233[6]
  i1232.xAdvance = i1233[7]
  i1232.scale = i1233[8]
  return i1232
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.KerningTable' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.KerningPair', i1237[i + 0]));
  }
  i1234.kerningPairs = i1236
  return i1234
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.KerningPair' )
  var i1241 = data
  i1240.xOffset = i1241[0]
  i1240.m_FirstGlyph = i1241[1]
  i1240.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1241[2], i1240.m_FirstGlyphAdjustments)
  i1240.m_SecondGlyph = i1241[3]
  i1240.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1241[4], i1240.m_SecondGlyphAdjustments)
  i1240.m_IgnoreSpacingAdjustments = !!i1241[5]
  return i1240
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1243 = data
  i1242.m_FaceIndex = i1243[0]
  i1242.m_FamilyName = i1243[1]
  i1242.m_StyleName = i1243[2]
  i1242.m_PointSize = i1243[3]
  i1242.m_Scale = i1243[4]
  i1242.m_UnitsPerEM = i1243[5]
  i1242.m_LineHeight = i1243[6]
  i1242.m_AscentLine = i1243[7]
  i1242.m_CapLine = i1243[8]
  i1242.m_MeanLine = i1243[9]
  i1242.m_Baseline = i1243[10]
  i1242.m_DescentLine = i1243[11]
  i1242.m_SuperscriptOffset = i1243[12]
  i1242.m_SuperscriptSize = i1243[13]
  i1242.m_SubscriptOffset = i1243[14]
  i1242.m_SubscriptSize = i1243[15]
  i1242.m_UnderlineOffset = i1243[16]
  i1242.m_UnderlineThickness = i1243[17]
  i1242.m_StrikethroughOffset = i1243[18]
  i1242.m_StrikethroughThickness = i1243[19]
  i1242.m_TabWidth = i1243[20]
  return i1242
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1245 = data
  i1244.m_GlyphIndex = i1245[0]
  i1244.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1245[1], i1244.m_GlyphValueRecord)
  return i1244
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1247 = data
  i1246.m_XPlacement = i1247[0]
  i1246.m_YPlacement = i1247[1]
  i1246.m_XAdvance = i1247[2]
  i1246.m_YAdvance = i1247[3]
  return i1246
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Settings' )
  var i1249 = data
  i1248.assetVersion = i1249[0]
  i1248.m_TextWrappingMode = i1249[1]
  i1248.m_enableKerning = !!i1249[2]
  var i1251 = i1249[3]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(i1251[i + 0]);
  }
  i1248.m_ActiveFontFeatures = i1250
  i1248.m_enableExtraPadding = !!i1249[4]
  i1248.m_enableTintAllSprites = !!i1249[5]
  i1248.m_enableParseEscapeCharacters = !!i1249[6]
  i1248.m_EnableRaycastTarget = !!i1249[7]
  i1248.m_GetFontFeaturesAtRuntime = !!i1249[8]
  i1248.m_missingGlyphCharacter = i1249[9]
  i1248.m_ClearDynamicDataOnBuild = !!i1249[10]
  i1248.m_warningsDisabled = !!i1249[11]
  request.r(i1249[12], i1249[13], 0, i1248, 'm_defaultFontAsset')
  i1248.m_defaultFontAssetPath = i1249[14]
  i1248.m_defaultFontSize = i1249[15]
  i1248.m_defaultAutoSizeMinRatio = i1249[16]
  i1248.m_defaultAutoSizeMaxRatio = i1249[17]
  i1248.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1249[18], i1249[19] )
  i1248.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1249[20], i1249[21] )
  i1248.m_autoSizeTextContainer = !!i1249[22]
  i1248.m_IsTextObjectScaleStatic = !!i1249[23]
  var i1253 = i1249[24]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1248.m_fallbackFontAssets = i1252
  i1248.m_matchMaterialPreset = !!i1249[25]
  i1248.m_HideSubTextObjects = !!i1249[26]
  request.r(i1249[27], i1249[28], 0, i1248, 'm_defaultSpriteAsset')
  i1248.m_defaultSpriteAssetPath = i1249[29]
  i1248.m_enableEmojiSupport = !!i1249[30]
  i1248.m_MissingCharacterSpriteUnicode = i1249[31]
  var i1255 = i1249[32]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1248.m_EmojiFallbackTextAssets = i1254
  i1248.m_defaultColorGradientPresetsPath = i1249[33]
  request.r(i1249[34], i1249[35], 0, i1248, 'm_defaultStyleSheet')
  i1248.m_StyleSheetsResourcePath = i1249[36]
  request.r(i1249[37], i1249[38], 0, i1248, 'm_leadingCharacters')
  request.r(i1249[39], i1249[40], 0, i1248, 'm_followingCharacters')
  i1248.m_UseModernHangulLineBreakingRules = !!i1249[41]
  return i1248
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'spriteSheet')
  var i1261 = i1259[2]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_Sprite', i1261[i + 0]));
  }
  i1258.spriteInfoList = i1260
  var i1263 = i1259[3]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1258.fallbackSpriteAssets = i1262
  var i1265 = i1259[4]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_SpriteCharacter', i1265[i + 0]));
  }
  i1258.m_SpriteCharacterTable = i1264
  var i1267 = i1259[5]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.TMP_SpriteGlyph', i1267[i + 0]));
  }
  i1258.m_GlyphTable = i1266
  i1258.m_Version = i1259[6]
  i1258.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1259[7], i1258.m_FaceInfo)
  request.r(i1259[8], i1259[9], 0, i1258, 'm_Material')
  return i1258
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.hashCode = i1271[1]
  i1270.unicode = i1271[2]
  i1270.pivot = new pc.Vec2( i1271[3], i1271[4] )
  request.r(i1271[5], i1271[6], 0, i1270, 'sprite')
  i1270.id = i1271[7]
  i1270.x = i1271[8]
  i1270.y = i1271[9]
  i1270.width = i1271[10]
  i1270.height = i1271[11]
  i1270.xOffset = i1271[12]
  i1270.yOffset = i1271[13]
  i1270.xAdvance = i1271[14]
  i1270.scale = i1271[15]
  return i1270
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1277 = data
  i1276.m_Name = i1277[0]
  i1276.m_ElementType = i1277[1]
  i1276.m_Unicode = i1277[2]
  i1276.m_GlyphIndex = i1277[3]
  i1276.m_Scale = i1277[4]
  return i1276
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'sprite')
  i1280.m_Index = i1281[2]
  i1280.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1281[3], i1280.m_Metrics)
  i1280.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1281[4], i1280.m_GlyphRect)
  i1280.m_Scale = i1281[5]
  i1280.m_AtlasIndex = i1281[6]
  i1280.m_ClassDefinitionType = i1281[7]
  return i1280
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Style', i1285[i + 0]));
  }
  i1282.m_StyleList = i1284
  return i1282
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_Style' )
  var i1289 = data
  i1288.m_Name = i1289[0]
  i1288.m_HashCode = i1289[1]
  i1288.m_OpeningDefinition = i1289[2]
  i1288.m_ClosingDefinition = i1289[3]
  i1288.m_OpeningTagArray = i1289[4]
  i1288.m_ClosingTagArray = i1289[5]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1293[i + 0]) );
  }
  i1290.files = i1292
  i1290.componentToPrefabIds = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1297 = data
  i1296.path = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'unityObject')
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1301[i + 0]) );
  }
  i1298.scriptsExecutionOrder = i1300
  var i1303 = i1299[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1303[i + 0]) );
  }
  i1298.sortingLayers = i1302
  var i1305 = i1299[2]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1305[i + 0]) );
  }
  i1298.cullingLayers = i1304
  i1298.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1299[3], i1298.timeSettings)
  i1298.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1299[4], i1298.physicsSettings)
  i1298.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1299[5], i1298.physics2DSettings)
  i1298.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1299[6], i1298.qualitySettings)
  i1298.enableRealtimeShadows = !!i1299[7]
  i1298.enableAutoInstancing = !!i1299[8]
  i1298.enableStaticBatching = !!i1299[9]
  i1298.enableDynamicBatching = !!i1299[10]
  i1298.lightmapEncodingQuality = i1299[11]
  i1298.desiredColorSpace = i1299[12]
  var i1307 = i1299[13]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1298.allTags = i1306
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.value = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  i1314.value = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1321 = data
  i1320.fixedDeltaTime = i1321[0]
  i1320.maximumDeltaTime = i1321[1]
  i1320.timeScale = i1321[2]
  i1320.maximumParticleTimestep = i1321[3]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1323 = data
  i1322.gravity = new pc.Vec3( i1323[0], i1323[1], i1323[2] )
  i1322.defaultSolverIterations = i1323[3]
  i1322.bounceThreshold = i1323[4]
  i1322.autoSyncTransforms = !!i1323[5]
  i1322.autoSimulation = !!i1323[6]
  var i1325 = i1323[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'material')
  i1330.gravity = new pc.Vec2( i1331[2], i1331[3] )
  i1330.positionIterations = i1331[4]
  i1330.velocityIterations = i1331[5]
  i1330.velocityThreshold = i1331[6]
  i1330.maxLinearCorrection = i1331[7]
  i1330.maxAngularCorrection = i1331[8]
  i1330.maxTranslationSpeed = i1331[9]
  i1330.maxRotationSpeed = i1331[10]
  i1330.baumgarteScale = i1331[11]
  i1330.baumgarteTOIScale = i1331[12]
  i1330.timeToSleep = i1331[13]
  i1330.linearSleepTolerance = i1331[14]
  i1330.angularSleepTolerance = i1331[15]
  i1330.defaultContactOffset = i1331[16]
  i1330.autoSimulation = !!i1331[17]
  i1330.queriesHitTriggers = !!i1331[18]
  i1330.queriesStartInColliders = !!i1331[19]
  i1330.callbacksOnDisable = !!i1331[20]
  i1330.reuseCollisionCallbacks = !!i1331[21]
  i1330.autoSyncTransforms = !!i1331[22]
  var i1333 = i1331[23]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1341[i + 0]) );
  }
  i1338.qualityLevels = i1340
  var i1343 = i1339[1]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( i1343[i + 0] );
  }
  i1338.names = i1342
  i1338.shadows = i1339[2]
  i1338.anisotropicFiltering = i1339[3]
  i1338.antiAliasing = i1339[4]
  i1338.lodBias = i1339[5]
  i1338.shadowCascades = i1339[6]
  i1338.shadowDistance = i1339[7]
  i1338.shadowmaskMode = i1339[8]
  i1338.shadowProjection = i1339[9]
  i1338.shadowResolution = i1339[10]
  i1338.softParticles = !!i1339[11]
  i1338.softVegetation = !!i1339[12]
  i1338.activeColorSpace = i1339[13]
  i1338.desiredColorSpace = i1339[14]
  i1338.masterTextureLimit = i1339[15]
  i1338.maxQueuedFrames = i1339[16]
  i1338.particleRaycastBudget = i1339[17]
  i1338.pixelLightCount = i1339[18]
  i1338.realtimeReflectionProbes = !!i1339[19]
  i1338.shadowCascade2Split = i1339[20]
  i1338.shadowCascade4Split = new pc.Vec3( i1339[21], i1339[22], i1339[23] )
  i1338.streamingMipmapsActive = !!i1339[24]
  i1338.vSyncCount = i1339[25]
  i1338.asyncUploadBufferSize = i1339[26]
  i1338.asyncUploadTimeSlice = i1339[27]
  i1338.billboardsFaceCameraPosition = !!i1339[28]
  i1338.shadowNearPlaneOffset = i1339[29]
  i1338.streamingMipmapsMemoryBudget = i1339[30]
  i1338.maximumLODLevel = i1339[31]
  i1338.streamingMipmapsAddAllCameras = !!i1339[32]
  i1338.streamingMipmapsMaxLevelReduction = i1339[33]
  i1338.streamingMipmapsRenderersPerFrame = i1339[34]
  i1338.resolutionScalingFixedDPIFactor = i1339[35]
  i1338.streamingMipmapsMaxFileIORequests = i1339[36]
  i1338.currentQualityLevel = i1339[37]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1349 = data
  i1348.weight = i1349[0]
  i1348.vertices = i1349[1]
  i1348.normals = i1349[2]
  i1348.tangents = i1349[3]
  return i1348
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1351 = data
  i1350.m_XCoordinate = i1351[0]
  i1350.m_YCoordinate = i1351[1]
  return i1350
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1353 = data
  i1352.m_XPositionAdjustment = i1353[0]
  i1352.m_YPositionAdjustment = i1353[1]
  return i1352
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1355 = data
  i1354.xPlacement = i1355[0]
  i1354.yPlacement = i1355[1]
  i1354.xAdvance = i1355[2]
  i1354.yAdvance = i1355[3]
  return i1354
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[43],"61":[2],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[2],"84":[33],"85":[86],"87":[86],"21":[20],"5":[2],"36":[10],"88":[2],"89":[90],"91":[46],"92":[21],"93":[20],"34":[33,20],"27":[20,28],"94":[20],"95":[28,20],"96":[33],"97":[28,20],"98":[20],"99":[100],"101":[100],"102":[100],"103":[104],"105":[20],"106":[20],"24":[21],"26":[28,20],"107":[20],"23":[21],"108":[20],"109":[20],"110":[20],"111":[20],"112":[20],"113":[20],"114":[20],"115":[20],"116":[20],"117":[28,20],"118":[20],"119":[20],"120":[20],"121":[20],"122":[28,20],"123":[20],"124":[46],"125":[46],"47":[46],"126":[46],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","UnityEngine.BoxCollider","CurtainManager","UnityEngine.SpriteRenderer","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.U2D.Animation.SpriteSkin","AnimColorController","PlaySound","PlaySoundOnEnable","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","ItemGraphic","ItemMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "1.1";

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

Deserializers.buildID = "bb6dc6a4-00e5-4a5e-bb56-443b63f889c4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

