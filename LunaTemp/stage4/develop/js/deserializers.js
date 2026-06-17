var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSpring' )
  var i669 = data
  i668.spring = i669[0]
  i668.damper = i669[1]
  i668.targetPosition = i669[2]
  return i668
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointMotor' )
  var i671 = data
  i670.m_TargetVelocity = i671[0]
  i670.m_Force = i671[1]
  i670.m_FreeSpin = i671[2]
  return i670
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointLimits' )
  var i673 = data
  i672.m_Min = i673[0]
  i672.m_Max = i673[1]
  i672.m_Bounciness = i673[2]
  i672.m_BounceMinVelocity = i673[3]
  i672.m_ContactDistance = i673[4]
  i672.minBounce = i673[5]
  i672.maxBounce = i673[6]
  return i672
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointDrive' )
  var i675 = data
  i674.m_PositionSpring = i675[0]
  i674.m_PositionDamper = i675[1]
  i674.m_MaximumForce = i675[2]
  i674.m_UseAcceleration = i675[3]
  return i674
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i677 = data
  i676.m_Spring = i677[0]
  i676.m_Damper = i677[1]
  return i676
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i679 = data
  i678.m_Limit = i679[0]
  i678.m_Bounciness = i679[1]
  i678.m_ContactDistance = i679[2]
  return i678
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i681 = data
  i680.m_ExtremumSlip = i681[0]
  i680.m_ExtremumValue = i681[1]
  i680.m_AsymptoteSlip = i681[2]
  i680.m_AsymptoteValue = i681[3]
  i680.m_Stiffness = i681[4]
  return i680
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i683 = data
  i682.m_LowerAngle = i683[0]
  i682.m_UpperAngle = i683[1]
  return i682
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i685 = data
  i684.m_MotorSpeed = i685[0]
  i684.m_MaximumMotorTorque = i685[1]
  return i684
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i687 = data
  i686.m_DampingRatio = i687[0]
  i686.m_Frequency = i687[1]
  i686.m_Angle = i687[2]
  return i686
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i689 = data
  i688.m_LowerTranslation = i689[0]
  i688.m_UpperTranslation = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i690 = root || new pc.UnityMaterial()
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'shader')
  i690.renderQueue = i691[3]
  i690.enableInstancing = !!i691[4]
  var i693 = i691[5]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i693[i + 0]) );
  }
  i690.floatParameters = i692
  var i695 = i691[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i695[i + 0]) );
  }
  i690.colorParameters = i694
  var i697 = i691[7]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i697[i + 0]) );
  }
  i690.vectorParameters = i696
  var i699 = i691[8]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i699[i + 0]) );
  }
  i690.textureParameters = i698
  var i701 = i691[9]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i701[i + 0]) );
  }
  i690.materialFlags = i700
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Color(i709[1], i709[2], i709[3], i709[4])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = new pc.Vec4( i713[1], i713[2], i713[3], i713[4] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'value')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i721 = data
  i720.name = i721[0]
  i720.enabled = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i723 = data
  i722.name = i723[0]
  i722.width = i723[1]
  i722.height = i723[2]
  i722.mipmapCount = i723[3]
  i722.anisoLevel = i723[4]
  i722.filterMode = i723[5]
  i722.hdr = !!i723[6]
  i722.format = i723[7]
  i722.wrapMode = i723[8]
  i722.alphaIsTransparency = !!i723[9]
  i722.alphaSource = i723[10]
  i722.graphicsFormat = i723[11]
  i722.sRGBTexture = !!i723[12]
  i722.desiredColorSpace = i723[13]
  i722.wrapU = i723[14]
  i722.wrapV = i723[15]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i725 = data
  i724.name = i725[0]
  i724.halfPrecision = !!i725[1]
  i724.useSimplification = !!i725[2]
  i724.useUInt32IndexFormat = !!i725[3]
  i724.vertexCount = i725[4]
  i724.aabb = i725[5]
  var i727 = i725[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( !!i727[i + 0] );
  }
  i724.streams = i726
  i724.vertices = i725[7]
  var i729 = i725[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i729[i + 0]) );
  }
  i724.subMeshes = i728
  var i731 = i725[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 16) {
    i730.push( new pc.Mat4().setData(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3],  i731[i + 4], i731[i + 5], i731[i + 6], i731[i + 7],  i731[i + 8], i731[i + 9], i731[i + 10], i731[i + 11],  i731[i + 12], i731[i + 13], i731[i + 14], i731[i + 15]) );
  }
  i724.bindposes = i730
  var i733 = i725[10]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i733[i + 0]) );
  }
  i724.blendShapes = i732
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i739 = data
  i738.triangles = i739[0]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i745 = data
  i744.name = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i747[i + 0]) );
  }
  i744.frames = i746
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i749 = data
  i748.name = i749[0]
  i748.index = i749[1]
  i748.startup = !!i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i751 = data
  i750.aspect = i751[0]
  i750.orthographic = !!i751[1]
  i750.orthographicSize = i751[2]
  i750.backgroundColor = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.nearClipPlane = i751[7]
  i750.farClipPlane = i751[8]
  i750.fieldOfView = i751[9]
  i750.depth = i751[10]
  i750.clearFlags = i751[11]
  i750.cullingMask = i751[12]
  i750.rect = i751[13]
  request.r(i751[14], i751[15], 0, i750, 'targetTexture')
  i750.usePhysicalProperties = !!i751[16]
  i750.focalLength = i751[17]
  i750.sensorSize = new pc.Vec2( i751[18], i751[19] )
  i750.lensShift = new pc.Vec2( i751[20], i751[21] )
  i750.gateFit = i751[22]
  i750.commandBufferCount = i751[23]
  i750.cameraType = i751[24]
  i750.enabled = !!i751[25]
  return i750
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i752 = root || request.c( 'AutoCameraFit' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'canvasBtn')
  request.r(i753[2], i753[3], 0, i752, 'targetArea')
  i752.paddingLandscape = i753[4]
  i752.paddingPortrait = i753[5]
  i752.extraPaddingSmallScreen = i753[6]
  i752.smallScreenThreshold = i753[7]
  i752.autoUpdateOnResize = !!i753[8]
  i752.adjustInEditMode = !!i753[9]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i755 = data
  i754.name = i755[0]
  i754.tagId = i755[1]
  i754.enabled = !!i755[2]
  i754.isStatic = !!i755[3]
  i754.layer = i755[4]
  return i754
}

Deserializers["InputManager"] = function (request, data, root) {
  var i756 = root || request.c( 'InputManager' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'mainCamera')
  i756.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i757[2] )
  i756.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i757[3] )
  i756.installLayer = UnityEngine.LayerMask.FromIntegerValue( i757[4] )
  i756.maxDistance = i757[5]
  i756.itemsToGotoStore = i757[6]
  i756.dragSortingOffset = i757[7]
  i756.useDragBounds = !!i757[8]
  request.r(i757[9], i757[10], 0, i756, 'dragBounds')
  return i756
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i758 = root || request.c( 'HandHintMmanager' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 1, i760, '')
  }
  i758.hintItems = i760
  request.r(i759[1], i759[2], 0, i758, 'handHintObject')
  request.r(i759[3], i759[4], 0, i758, 'handAnimator')
  i758.idleTimeToHint = i759[5]
  i758.dragAnimDuration = i759[6]
  request.r(i759[7], i759[8], 0, i758, 'startHintPos')
  request.r(i759[9], i759[10], 0, i758, 'endHintPos')
  return i758
}

Deserializers["GameManager"] = function (request, data, root) {
  var i764 = root || request.c( 'GameManager' )
  var i765 = data
  i764.fxStartVoice = i765[0]
  i764.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i765[1], i764.onLoseGame)
  i764.isGameEnded = !!i765[2]
  return i764
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i767 = data
  i766.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i767[0], i766.m_PersistentCalls)
  return i766
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i769 = data
  var i771 = i769[0]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('UnityEngine.Events.PersistentCall', i771[i + 0]));
  }
  i768.m_Calls = i770
  return i768
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_Target')
  i774.m_TargetAssemblyTypeName = i775[2]
  i774.m_MethodName = i775[3]
  i774.m_Mode = i775[4]
  i774.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i775[5], i774.m_Arguments)
  i774.m_CallState = i775[6]
  return i774
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_ObjectArgument')
  i776.m_ObjectArgumentAssemblyTypeName = i777[2]
  i776.m_IntArgument = i777[3]
  i776.m_FloatArgument = i777[4]
  i776.m_StringArgument = i777[5]
  i776.m_BoolArgument = !!i777[6]
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
  i778.totalItemsDropped = i779[1]
  i778.onItemDropped = request.d('UnityEngine.Events.UnityEvent', i779[2], i778.onItemDropped)
  return i778
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i782 = root || request.c( 'Ply_SoundManager' )
  var i783 = data
  i782.fxAudio = request.d('FxAudio', i783[0], i782.fxAudio)
  request.r(i783[1], i783[2], 0, i782, 'bgm1')
  return i782
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i784 = root || request.c( 'FxAudio' )
  var i785 = data
  i784.None = request.d('SoundData', i785[0], i784.None)
  i784.ClickBox = request.d('SoundData', i785[1], i784.ClickBox)
  i784.StartVoice = request.d('SoundData', i785[2], i784.StartVoice)
  i784.voice_lv52_bottle = request.d('SoundData', i785[3], i784.voice_lv52_bottle)
  i784.voice_lv52_fruit = request.d('SoundData', i785[4], i784.voice_lv52_fruit)
  i784.voice_lv52_icecup = request.d('SoundData', i785[5], i784.voice_lv52_icecup)
  i784.voice_lv52_icream = request.d('SoundData', i785[6], i784.voice_lv52_icream)
  i784.voice_lv52_ladle = request.d('SoundData', i785[7], i784.voice_lv52_ladle)
  i784.voice_lv52_milk = request.d('SoundData', i785[8], i784.voice_lv52_milk)
  i784.voice_lv52_shirt = request.d('SoundData', i785[9], i784.voice_lv52_shirt)
  i784.voice_lv52_tofu = request.d('SoundData', i785[10], i784.voice_lv52_tofu)
  i784.voice_lv52_water = request.d('SoundData', i785[11], i784.voice_lv52_water)
  i784.Correct = request.d('SoundData', i785[12], i784.Correct)
  i784.FridgeOpen = request.d('SoundData', i785[13], i784.FridgeOpen)
  i784.water = request.d('SoundData', i785[14], i784.water)
  i784.mouse = request.d('SoundData', i785[15], i784.mouse)
  i784.wrong = request.d('SoundData', i785[16], i784.wrong)
  i784.haa = request.d('SoundData', i785[17], i784.haa)
  return i784
}

Deserializers["SoundData"] = function (request, data, root) {
  var i786 = root || request.c( 'SoundData' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'clip')
  i786.repeatCount = i787[2]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'clip')
  request.r(i789[2], i789[3], 0, i788, 'outputAudioMixerGroup')
  i788.playOnAwake = !!i789[4]
  i788.loop = !!i789[5]
  i788.time = i789[6]
  i788.volume = i789[7]
  i788.pitch = i789[8]
  i788.enabled = !!i789[9]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i791 = data
  i790.pivot = new pc.Vec2( i791[0], i791[1] )
  i790.anchorMin = new pc.Vec2( i791[2], i791[3] )
  i790.anchorMax = new pc.Vec2( i791[4], i791[5] )
  i790.sizeDelta = new pc.Vec2( i791[6], i791[7] )
  i790.anchoredPosition3D = new pc.Vec3( i791[8], i791[9], i791[10] )
  i790.rotation = new pc.Quat(i791[11], i791[12], i791[13], i791[14])
  i790.scale = new pc.Vec3( i791[15], i791[16], i791[17] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i793 = data
  i792.planeDistance = i793[0]
  i792.referencePixelsPerUnit = i793[1]
  i792.isFallbackOverlay = !!i793[2]
  i792.renderMode = i793[3]
  i792.renderOrder = i793[4]
  i792.sortingLayerName = i793[5]
  i792.sortingOrder = i793[6]
  i792.scaleFactor = i793[7]
  request.r(i793[8], i793[9], 0, i792, 'worldCamera')
  i792.overrideSorting = !!i793[10]
  i792.pixelPerfect = !!i793[11]
  i792.targetDisplay = i793[12]
  i792.overridePixelPerfect = !!i793[13]
  i792.enabled = !!i793[14]
  return i792
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i795 = data
  i794.m_UiScaleMode = i795[0]
  i794.m_ReferencePixelsPerUnit = i795[1]
  i794.m_ScaleFactor = i795[2]
  i794.m_ReferenceResolution = new pc.Vec2( i795[3], i795[4] )
  i794.m_ScreenMatchMode = i795[5]
  i794.m_MatchWidthOrHeight = i795[6]
  i794.m_PhysicalUnit = i795[7]
  i794.m_FallbackScreenDPI = i795[8]
  i794.m_DefaultSpriteDPI = i795[9]
  i794.m_DynamicPixelsPerUnit = i795[10]
  i794.m_PresetInfoIsWorld = !!i795[11]
  return i794
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i797 = data
  i796.m_IgnoreReversedGraphics = !!i797[0]
  i796.m_BlockingObjects = i797[1]
  i796.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i797[2] )
  return i796
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i798 = root || request.c( 'ProgressBarUI' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'fillImage')
  request.r(i799[2], i799[3], 0, i798, 'progressText')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i801 = data
  i800.cullTransparentMesh = !!i801[0]
  return i800
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.Image' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Sprite')
  i802.m_Type = i803[2]
  i802.m_PreserveAspect = !!i803[3]
  i802.m_FillCenter = !!i803[4]
  i802.m_FillMethod = i803[5]
  i802.m_FillAmount = i803[6]
  i802.m_FillClockwise = !!i803[7]
  i802.m_FillOrigin = i803[8]
  i802.m_UseSpriteMesh = !!i803[9]
  i802.m_PixelsPerUnitMultiplier = i803[10]
  request.r(i803[11], i803[12], 0, i802, 'm_Material')
  i802.m_Maskable = !!i803[13]
  i802.m_Color = new pc.Color(i803[14], i803[15], i803[16], i803[17])
  i802.m_RaycastTarget = !!i803[18]
  i802.m_RaycastPadding = new pc.Vec4( i803[19], i803[20], i803[21], i803[22] )
  return i802
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i805 = data
  i804.m_hasFontAssetChanged = !!i805[0]
  request.r(i805[1], i805[2], 0, i804, 'm_baseMaterial')
  i804.m_maskOffset = new pc.Vec4( i805[3], i805[4], i805[5], i805[6] )
  i804.m_text = i805[7]
  i804.m_isRightToLeft = !!i805[8]
  request.r(i805[9], i805[10], 0, i804, 'm_fontAsset')
  request.r(i805[11], i805[12], 0, i804, 'm_sharedMaterial')
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.m_fontSharedMaterials = i806
  request.r(i805[14], i805[15], 0, i804, 'm_fontMaterial')
  var i809 = i805[16]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i804.m_fontMaterials = i808
  i804.m_fontColor32 = UnityEngine.Color32.ConstructColor(i805[17], i805[18], i805[19], i805[20])
  i804.m_fontColor = new pc.Color(i805[21], i805[22], i805[23], i805[24])
  i804.m_enableVertexGradient = !!i805[25]
  i804.m_colorMode = i805[26]
  i804.m_fontColorGradient = request.d('TMPro.VertexGradient', i805[27], i804.m_fontColorGradient)
  request.r(i805[28], i805[29], 0, i804, 'm_fontColorGradientPreset')
  request.r(i805[30], i805[31], 0, i804, 'm_spriteAsset')
  i804.m_tintAllSprites = !!i805[32]
  request.r(i805[33], i805[34], 0, i804, 'm_StyleSheet')
  i804.m_TextStyleHashCode = i805[35]
  i804.m_overrideHtmlColors = !!i805[36]
  i804.m_faceColor = UnityEngine.Color32.ConstructColor(i805[37], i805[38], i805[39], i805[40])
  i804.m_fontSize = i805[41]
  i804.m_fontSizeBase = i805[42]
  i804.m_fontWeight = i805[43]
  i804.m_enableAutoSizing = !!i805[44]
  i804.m_fontSizeMin = i805[45]
  i804.m_fontSizeMax = i805[46]
  i804.m_fontStyle = i805[47]
  i804.m_HorizontalAlignment = i805[48]
  i804.m_VerticalAlignment = i805[49]
  i804.m_textAlignment = i805[50]
  i804.m_characterSpacing = i805[51]
  i804.m_wordSpacing = i805[52]
  i804.m_lineSpacing = i805[53]
  i804.m_lineSpacingMax = i805[54]
  i804.m_paragraphSpacing = i805[55]
  i804.m_charWidthMaxAdj = i805[56]
  i804.m_TextWrappingMode = i805[57]
  i804.m_wordWrappingRatios = i805[58]
  i804.m_overflowMode = i805[59]
  request.r(i805[60], i805[61], 0, i804, 'm_linkedTextComponent')
  request.r(i805[62], i805[63], 0, i804, 'parentLinkedComponent')
  i804.m_enableKerning = !!i805[64]
  var i811 = i805[65]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(i811[i + 0]);
  }
  i804.m_ActiveFontFeatures = i810
  i804.m_enableExtraPadding = !!i805[66]
  i804.checkPaddingRequired = !!i805[67]
  i804.m_isRichText = !!i805[68]
  i804.m_parseCtrlCharacters = !!i805[69]
  i804.m_isOrthographic = !!i805[70]
  i804.m_isCullingEnabled = !!i805[71]
  i804.m_horizontalMapping = i805[72]
  i804.m_verticalMapping = i805[73]
  i804.m_uvLineOffset = i805[74]
  i804.m_geometrySortingOrder = i805[75]
  i804.m_IsTextObjectScaleStatic = !!i805[76]
  i804.m_VertexBufferAutoSizeReduction = !!i805[77]
  i804.m_useMaxVisibleDescender = !!i805[78]
  i804.m_pageToDisplay = i805[79]
  i804.m_margin = new pc.Vec4( i805[80], i805[81], i805[82], i805[83] )
  i804.m_isUsingLegacyAnimationComponent = !!i805[84]
  i804.m_isVolumetricText = !!i805[85]
  request.r(i805[86], i805[87], 0, i804, 'm_Material')
  i804.m_EmojiFallbackSupport = !!i805[88]
  i804.m_Maskable = !!i805[89]
  i804.m_Color = new pc.Color(i805[90], i805[91], i805[92], i805[93])
  i804.m_RaycastTarget = !!i805[94]
  i804.m_RaycastPadding = new pc.Vec4( i805[95], i805[96], i805[97], i805[98] )
  return i804
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.VertexGradient' )
  var i815 = data
  i814.topLeft = new pc.Color(i815[0], i815[1], i815[2], i815[3])
  i814.topRight = new pc.Color(i815[4], i815[5], i815[6], i815[7])
  i814.bottomLeft = new pc.Color(i815[8], i815[9], i815[10], i815[11])
  i814.bottomRight = new pc.Color(i815[12], i815[13], i815[14], i815[15])
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'animatorController')
  request.r(i819[2], i819[3], 0, i818, 'avatar')
  i818.updateMode = i819[4]
  i818.hasTransformHierarchy = !!i819[5]
  i818.applyRootMotion = !!i819[6]
  var i821 = i819[7]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.humanBones = i820
  i818.enabled = !!i819[8]
  return i818
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'additionalVertexStreams')
  i830.enabled = !!i831[2]
  request.r(i831[3], i831[4], 0, i830, 'sharedMaterial')
  var i833 = i831[5]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sharedMaterials = i832
  i830.receiveShadows = !!i831[6]
  i830.shadowCastingMode = i831[7]
  i830.sortingLayerID = i831[8]
  i830.sortingOrder = i831[9]
  i830.lightmapIndex = i831[10]
  i830.lightmapSceneIndex = i831[11]
  i830.lightmapScaleOffset = new pc.Vec4( i831[12], i831[13], i831[14], i831[15] )
  i830.lightProbeUsage = i831[16]
  i830.reflectionProbeUsage = i831[17]
  return i830
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TextMeshPro' )
  var i835 = data
  i834._SortingLayer = i835[0]
  i834._SortingLayerID = i835[1]
  i834._SortingOrder = i835[2]
  i834.m_hasFontAssetChanged = !!i835[3]
  request.r(i835[4], i835[5], 0, i834, 'm_renderer')
  i834.m_maskType = i835[6]
  i834.m_text = i835[7]
  i834.m_isRightToLeft = !!i835[8]
  request.r(i835[9], i835[10], 0, i834, 'm_fontAsset')
  request.r(i835[11], i835[12], 0, i834, 'm_sharedMaterial')
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.m_fontSharedMaterials = i836
  request.r(i835[14], i835[15], 0, i834, 'm_fontMaterial')
  var i839 = i835[16]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i834.m_fontMaterials = i838
  i834.m_fontColor32 = UnityEngine.Color32.ConstructColor(i835[17], i835[18], i835[19], i835[20])
  i834.m_fontColor = new pc.Color(i835[21], i835[22], i835[23], i835[24])
  i834.m_enableVertexGradient = !!i835[25]
  i834.m_colorMode = i835[26]
  i834.m_fontColorGradient = request.d('TMPro.VertexGradient', i835[27], i834.m_fontColorGradient)
  request.r(i835[28], i835[29], 0, i834, 'm_fontColorGradientPreset')
  request.r(i835[30], i835[31], 0, i834, 'm_spriteAsset')
  i834.m_tintAllSprites = !!i835[32]
  request.r(i835[33], i835[34], 0, i834, 'm_StyleSheet')
  i834.m_TextStyleHashCode = i835[35]
  i834.m_overrideHtmlColors = !!i835[36]
  i834.m_faceColor = UnityEngine.Color32.ConstructColor(i835[37], i835[38], i835[39], i835[40])
  i834.m_fontSize = i835[41]
  i834.m_fontSizeBase = i835[42]
  i834.m_fontWeight = i835[43]
  i834.m_enableAutoSizing = !!i835[44]
  i834.m_fontSizeMin = i835[45]
  i834.m_fontSizeMax = i835[46]
  i834.m_fontStyle = i835[47]
  i834.m_HorizontalAlignment = i835[48]
  i834.m_VerticalAlignment = i835[49]
  i834.m_textAlignment = i835[50]
  i834.m_characterSpacing = i835[51]
  i834.m_wordSpacing = i835[52]
  i834.m_lineSpacing = i835[53]
  i834.m_lineSpacingMax = i835[54]
  i834.m_paragraphSpacing = i835[55]
  i834.m_charWidthMaxAdj = i835[56]
  i834.m_TextWrappingMode = i835[57]
  i834.m_wordWrappingRatios = i835[58]
  i834.m_overflowMode = i835[59]
  request.r(i835[60], i835[61], 0, i834, 'm_linkedTextComponent')
  request.r(i835[62], i835[63], 0, i834, 'parentLinkedComponent')
  i834.m_enableKerning = !!i835[64]
  var i841 = i835[65]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(i841[i + 0]);
  }
  i834.m_ActiveFontFeatures = i840
  i834.m_enableExtraPadding = !!i835[66]
  i834.checkPaddingRequired = !!i835[67]
  i834.m_isRichText = !!i835[68]
  i834.m_parseCtrlCharacters = !!i835[69]
  i834.m_isOrthographic = !!i835[70]
  i834.m_isCullingEnabled = !!i835[71]
  i834.m_horizontalMapping = i835[72]
  i834.m_verticalMapping = i835[73]
  i834.m_uvLineOffset = i835[74]
  i834.m_geometrySortingOrder = i835[75]
  i834.m_IsTextObjectScaleStatic = !!i835[76]
  i834.m_VertexBufferAutoSizeReduction = !!i835[77]
  i834.m_useMaxVisibleDescender = !!i835[78]
  i834.m_pageToDisplay = i835[79]
  i834.m_margin = new pc.Vec4( i835[80], i835[81], i835[82], i835[83] )
  i834.m_isUsingLegacyAnimationComponent = !!i835[84]
  i834.m_isVolumetricText = !!i835[85]
  request.r(i835[86], i835[87], 0, i834, 'm_Material')
  i834.m_EmojiFallbackSupport = !!i835[88]
  i834.m_Maskable = !!i835[89]
  i834.m_Color = new pc.Color(i835[90], i835[91], i835[92], i835[93])
  i834.m_RaycastTarget = !!i835[94]
  i834.m_RaycastPadding = new pc.Vec4( i835[95], i835[96], i835[97], i835[98] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'sharedMesh')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'sharedMesh')
  var i847 = i845[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.bones = i846
  i844.updateWhenOffscreen = !!i845[3]
  i844.localBounds = i845[4]
  request.r(i845[5], i845[6], 0, i844, 'rootBone')
  var i849 = i845[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i849[i + 0]) );
  }
  i844.blendShapesWeights = i848
  i844.enabled = !!i845[8]
  request.r(i845[9], i845[10], 0, i844, 'sharedMaterial')
  var i851 = i845[11]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i844.sharedMaterials = i850
  i844.receiveShadows = !!i845[12]
  i844.shadowCastingMode = i845[13]
  i844.sortingLayerID = i845[14]
  i844.sortingOrder = i845[15]
  i844.lightmapIndex = i845[16]
  i844.lightmapSceneIndex = i845[17]
  i844.lightmapScaleOffset = new pc.Vec4( i845[18], i845[19], i845[20], i845[21] )
  i844.lightProbeUsage = i845[22]
  i844.reflectionProbeUsage = i845[23]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i855 = data
  i854.weight = i855[0]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i857 = data
  i856.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i857[0], i856.main)
  i856.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i857[1], i856.colorBySpeed)
  i856.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i857[2], i856.colorOverLifetime)
  i856.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i857[3], i856.emission)
  i856.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i857[4], i856.rotationBySpeed)
  i856.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i857[5], i856.rotationOverLifetime)
  i856.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i857[6], i856.shape)
  i856.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i857[7], i856.sizeBySpeed)
  i856.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i857[8], i856.sizeOverLifetime)
  i856.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i857[9], i856.textureSheetAnimation)
  i856.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i857[10], i856.velocityOverLifetime)
  i856.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i857[11], i856.noise)
  i856.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i857[12], i856.inheritVelocity)
  i856.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i857[13], i856.forceOverLifetime)
  i856.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i857[14], i856.limitVelocityOverLifetime)
  i856.useAutoRandomSeed = !!i857[15]
  i856.randomSeed = i857[16]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemMain()
  var i859 = data
  i858.duration = i859[0]
  i858.loop = !!i859[1]
  i858.prewarm = !!i859[2]
  i858.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.startDelay)
  i858.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.startLifetime)
  i858.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[5], i858.startSpeed)
  i858.startSize3D = !!i859[6]
  i858.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[7], i858.startSizeX)
  i858.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.startSizeY)
  i858.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[9], i858.startSizeZ)
  i858.startRotation3D = !!i859[10]
  i858.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[11], i858.startRotationX)
  i858.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[12], i858.startRotationY)
  i858.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[13], i858.startRotationZ)
  i858.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[14], i858.startColor)
  i858.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[15], i858.gravityModifier)
  i858.simulationSpace = i859[16]
  request.r(i859[17], i859[18], 0, i858, 'customSimulationSpace')
  i858.simulationSpeed = i859[19]
  i858.useUnscaledTime = !!i859[20]
  i858.scalingMode = i859[21]
  i858.playOnAwake = !!i859[22]
  i858.maxParticles = i859[23]
  i858.emitterVelocityMode = i859[24]
  i858.stopAction = i859[25]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i860 = root || new pc.MinMaxCurve()
  var i861 = data
  i860.mode = i861[0]
  i860.curveMin = new pc.AnimationCurve( { keys_flow: i861[1] } )
  i860.curveMax = new pc.AnimationCurve( { keys_flow: i861[2] } )
  i860.curveMultiplier = i861[3]
  i860.constantMin = i861[4]
  i860.constantMax = i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i862 = root || new pc.MinMaxGradient()
  var i863 = data
  i862.mode = i863[0]
  i862.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[1], i862.gradientMin)
  i862.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[2], i862.gradientMax)
  i862.colorMin = new pc.Color(i863[3], i863[4], i863[5], i863[6])
  i862.colorMax = new pc.Color(i863[7], i863[8], i863[9], i863[10])
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i865 = data
  i864.mode = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i867[i + 0]) );
  }
  i864.colorKeys = i866
  var i869 = i865[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i869[i + 0]) );
  }
  i864.alphaKeys = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  i870.range = new pc.Vec2( i871[2], i871[3] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i875 = data
  i874.color = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.time = i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i879 = data
  i878.alpha = i879[0]
  i878.time = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemColorOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i881[1], i880.color)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemEmitter()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.rateOverTime)
  i882.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.rateOverDistance)
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i885[i + 0]) );
  }
  i882.bursts = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemBurst()
  var i889 = data
  i888.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[0], i888.count)
  i888.cycleCount = i889[1]
  i888.minCount = i889[2]
  i888.maxCount = i889[3]
  i888.repeatInterval = i889[4]
  i888.time = i889[5]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemRotationBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemRotationOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemShape()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.shapeType = i895[1]
  i894.randomDirectionAmount = i895[2]
  i894.sphericalDirectionAmount = i895[3]
  i894.randomPositionAmount = i895[4]
  i894.alignToDirection = !!i895[5]
  i894.radius = i895[6]
  i894.radiusMode = i895[7]
  i894.radiusSpread = i895[8]
  i894.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[9], i894.radiusSpeed)
  i894.radiusThickness = i895[10]
  i894.angle = i895[11]
  i894.length = i895[12]
  i894.boxThickness = new pc.Vec3( i895[13], i895[14], i895[15] )
  i894.meshShapeType = i895[16]
  request.r(i895[17], i895[18], 0, i894, 'mesh')
  request.r(i895[19], i895[20], 0, i894, 'meshRenderer')
  request.r(i895[21], i895[22], 0, i894, 'skinnedMeshRenderer')
  i894.useMeshMaterialIndex = !!i895[23]
  i894.meshMaterialIndex = i895[24]
  i894.useMeshColors = !!i895[25]
  i894.normalOffset = i895[26]
  i894.arc = i895[27]
  i894.arcMode = i895[28]
  i894.arcSpread = i895[29]
  i894.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[30], i894.arcSpeed)
  i894.donutRadius = i895[31]
  i894.position = new pc.Vec3( i895[32], i895[33], i895[34] )
  i894.rotation = new pc.Vec3( i895[35], i895[36], i895[37] )
  i894.scale = new pc.Vec3( i895[38], i895[39], i895[40] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemSizeBySpeed()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.separateAxes = !!i897[4]
  i896.range = new pc.Vec2( i897[5], i897[6] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemSizeOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.separateAxes = !!i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.mode = i901[1]
  i900.animation = i901[2]
  i900.numTilesX = i901[3]
  i900.numTilesY = i901[4]
  i900.useRandomRow = !!i901[5]
  i900.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[6], i900.frameOverTime)
  i900.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[7], i900.startFrame)
  i900.cycleCount = i901[8]
  i900.rowIndex = i901[9]
  i900.flipU = i901[10]
  i900.flipV = i901[11]
  i900.spriteCount = i901[12]
  var i903 = i901[13]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sprites = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.radial)
  i906.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[5], i906.speedModifier)
  i906.space = i907[6]
  i906.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[7], i906.orbitalX)
  i906.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.orbitalY)
  i906.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[9], i906.orbitalZ)
  i906.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[10], i906.orbitalOffsetX)
  i906.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[11], i906.orbitalOffsetY)
  i906.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[12], i906.orbitalOffsetZ)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemNoise()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.separateAxes = !!i909[1]
  i908.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.strengthX)
  i908.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.strengthY)
  i908.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.strengthZ)
  i908.frequency = i909[5]
  i908.damping = !!i909[6]
  i908.octaveCount = i909[7]
  i908.octaveMultiplier = i909[8]
  i908.octaveScale = i909[9]
  i908.quality = i909[10]
  i908.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.scrollSpeed)
  i908.scrollSpeedMultiplier = i909[12]
  i908.remapEnabled = !!i909[13]
  i908.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[14], i908.remapX)
  i908.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[15], i908.remapY)
  i908.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[16], i908.remapZ)
  i908.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[17], i908.positionAmount)
  i908.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[18], i908.rotationAmount)
  i908.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[19], i908.sizeAmount)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemInheritVelocity()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.mode = i911[1]
  i910.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.curve)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemForceOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.space = i913[4]
  i912.randomized = !!i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.limit)
  i914.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.limitX)
  i914.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.limitY)
  i914.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[4], i914.limitZ)
  i914.dampen = i915[5]
  i914.separateAxes = !!i915[6]
  i914.space = i915[7]
  i914.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[8], i914.drag)
  i914.multiplyDragByParticleSize = !!i915[9]
  i914.multiplyDragByParticleVelocity = !!i915[10]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'mesh')
  i916.meshCount = i917[2]
  i916.activeVertexStreamsCount = i917[3]
  i916.alignment = i917[4]
  i916.renderMode = i917[5]
  i916.sortMode = i917[6]
  i916.lengthScale = i917[7]
  i916.velocityScale = i917[8]
  i916.cameraVelocityScale = i917[9]
  i916.normalDirection = i917[10]
  i916.sortingFudge = i917[11]
  i916.minParticleSize = i917[12]
  i916.maxParticleSize = i917[13]
  i916.pivot = new pc.Vec3( i917[14], i917[15], i917[16] )
  request.r(i917[17], i917[18], 0, i916, 'trailMaterial')
  i916.applyActiveColorSpace = !!i917[19]
  i916.enabled = !!i917[20]
  request.r(i917[21], i917[22], 0, i916, 'sharedMaterial')
  var i919 = i917[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sharedMaterials = i918
  i916.receiveShadows = !!i917[24]
  i916.shadowCastingMode = i917[25]
  i916.sortingLayerID = i917[26]
  i916.sortingOrder = i917[27]
  i916.lightmapIndex = i917[28]
  i916.lightmapSceneIndex = i917[29]
  i916.lightmapScaleOffset = new pc.Vec4( i917[30], i917[31], i917[32], i917[33] )
  i916.lightProbeUsage = i917[34]
  i916.reflectionProbeUsage = i917[35]
  return i916
}

Deserializers["ItemController"] = function (request, data, root) {
  var i920 = root || request.c( 'ItemController' )
  var i921 = data
  i920.itemType = i921[0]
  request.r(i921[1], i921[2], 0, i920, 'dropTarget')
  i920.dropDistanceThreshold = i921[3]
  i920.hideSpriteOnDrop = !!i921[4]
  i920.onClick = request.d('UnityEngine.Events.UnityEvent', i921[5], i920.onClick)
  i920.onDrop = request.d('UnityEngine.Events.UnityEvent', i921[6], i920.onDrop)
  i920.onDragStart = request.d('UnityEngine.Events.UnityEvent', i921[7], i920.onDragStart)
  i920.onReturn = request.d('UnityEngine.Events.UnityEvent', i921[8], i920.onReturn)
  i920.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i921[9], i920.onAnimFinished)
  var i923 = i921[10]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('AnimObjectData', i923[i + 0]));
  }
  i920.animationObjects = i922
  var i925 = i921[11]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(i925[i + 0]);
  }
  i920.fxSoundsStartAnim = i924
  var i927 = i921[12]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(i927[i + 0]);
  }
  i920.fxSoundsAfterAnim = i926
  return i920
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i930 = root || request.c( 'AnimObjectData' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'animObj')
  i930.delayFromStart = i931[2]
  i930.durationToDeactivate = i931[3]
  return i930
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
  var i940 = root || request.c( 'ItemMovement' )
  var i941 = data
  return i940
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Text' )
  var i943 = data
  i942.m_FontData = request.d('UnityEngine.UI.FontData', i943[0], i942.m_FontData)
  i942.m_Text = i943[1]
  request.r(i943[2], i943[3], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[4]
  i942.m_Color = new pc.Color(i943[5], i943[6], i943[7], i943[8])
  i942.m_RaycastTarget = !!i943[9]
  i942.m_RaycastPadding = new pc.Vec4( i943[10], i943[11], i943[12], i943[13] )
  return i942
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.FontData' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_Font')
  i944.m_FontSize = i945[2]
  i944.m_FontStyle = i945[3]
  i944.m_BestFit = !!i945[4]
  i944.m_MinSize = i945[5]
  i944.m_MaxSize = i945[6]
  i944.m_Alignment = i945[7]
  i944.m_AlignByGeometry = !!i945[8]
  i944.m_RichText = !!i945[9]
  i944.m_HorizontalOverflow = i945[10]
  i944.m_VerticalOverflow = i945[11]
  i944.m_LineSpacing = i945[12]
  return i944
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i946 = root || request.c( 'PlaySound' )
  var i947 = data
  i946.sound1 = i947[0]
  i946.sound2 = i947[1]
  i946.sound3 = i947[2]
  return i946
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_FirstSelected')
  i948.m_sendNavigationEvents = !!i949[2]
  i948.m_DragThreshold = i949[3]
  return i948
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i951 = data
  i950.m_HorizontalAxis = i951[0]
  i950.m_VerticalAxis = i951[1]
  i950.m_SubmitButton = i951[2]
  i950.m_CancelButton = i951[3]
  i950.m_InputActionsPerSecond = i951[4]
  i950.m_RepeatDelay = i951[5]
  i950.m_ForceModuleActive = !!i951[6]
  i950.m_SendPointerHoverToParent = !!i951[7]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i953 = data
  i952.ambientIntensity = i953[0]
  i952.reflectionIntensity = i953[1]
  i952.ambientMode = i953[2]
  i952.ambientLight = new pc.Color(i953[3], i953[4], i953[5], i953[6])
  i952.ambientSkyColor = new pc.Color(i953[7], i953[8], i953[9], i953[10])
  i952.ambientGroundColor = new pc.Color(i953[11], i953[12], i953[13], i953[14])
  i952.ambientEquatorColor = new pc.Color(i953[15], i953[16], i953[17], i953[18])
  i952.fogColor = new pc.Color(i953[19], i953[20], i953[21], i953[22])
  i952.fogEndDistance = i953[23]
  i952.fogStartDistance = i953[24]
  i952.fogDensity = i953[25]
  i952.fog = !!i953[26]
  request.r(i953[27], i953[28], 0, i952, 'skybox')
  i952.fogMode = i953[29]
  var i955 = i953[30]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i955[i + 0]) );
  }
  i952.lightmaps = i954
  i952.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i953[31], i952.lightProbes)
  i952.lightmapsMode = i953[32]
  i952.mixedBakeMode = i953[33]
  i952.environmentLightingMode = i953[34]
  i952.ambientProbe = new pc.SphericalHarmonicsL2(i953[35])
  i952.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i953[36])
  i952.useReferenceAmbientProbe = !!i953[37]
  request.r(i953[38], i953[39], 0, i952, 'customReflection')
  request.r(i953[40], i953[41], 0, i952, 'defaultReflection')
  i952.defaultReflectionMode = i953[42]
  i952.defaultReflectionResolution = i953[43]
  i952.sunLightObjectId = i953[44]
  i952.pixelLightCount = i953[45]
  i952.defaultReflectionHDR = !!i953[46]
  i952.hasLightDataAsset = !!i953[47]
  i952.hasManualGenerate = !!i953[48]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'lightmapColor')
  request.r(i959[2], i959[3], 0, i958, 'lightmapDirection')
  request.r(i959[4], i959[5], 0, i958, 'shadowMask')
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i960 = root || new UnityEngine.LightProbes()
  var i961 = data
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i971[i + 0]));
  }
  i968.ShaderCompilationErrors = i970
  i968.name = i969[1]
  i968.guid = i969[2]
  var i973 = i969[3]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i968.shaderDefinedKeywords = i972
  var i975 = i969[4]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i975[i + 0]) );
  }
  i968.passes = i974
  var i977 = i969[5]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i977[i + 0]) );
  }
  i968.usePasses = i976
  var i979 = i969[6]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i979[i + 0]) );
  }
  i968.defaultParameterValues = i978
  request.r(i969[7], i969[8], 0, i968, 'unityFallbackShader')
  i968.readDepth = !!i969[9]
  i968.hasDepthOnlyPass = !!i969[10]
  i968.isCreatedByShaderGraph = !!i969[11]
  i968.disableBatching = !!i969[12]
  i968.compiled = !!i969[13]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i983 = data
  i982.shaderName = i983[0]
  i982.errorMessage = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i988 = root || new pc.UnityShaderPass()
  var i989 = data
  i988.id = i989[0]
  i988.subShaderIndex = i989[1]
  i988.name = i989[2]
  i988.passType = i989[3]
  i988.grabPassTextureName = i989[4]
  i988.usePass = !!i989[5]
  i988.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[6], i988.zTest)
  i988.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[7], i988.zWrite)
  i988.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[8], i988.culling)
  i988.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i989[9], i988.blending)
  i988.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i989[10], i988.alphaBlending)
  i988.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[11], i988.colorWriteMask)
  i988.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[12], i988.offsetUnits)
  i988.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[13], i988.offsetFactor)
  i988.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[14], i988.stencilRef)
  i988.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[15], i988.stencilReadMask)
  i988.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[16], i988.stencilWriteMask)
  i988.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[17], i988.stencilOp)
  i988.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[18], i988.stencilOpFront)
  i988.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[19], i988.stencilOpBack)
  var i991 = i989[20]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i991[i + 0]) );
  }
  i988.tags = i990
  var i993 = i989[21]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i988.passDefinedKeywords = i992
  var i995 = i989[22]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i995[i + 0]) );
  }
  i988.passDefinedKeywordGroups = i994
  var i997 = i989[23]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i997[i + 0]) );
  }
  i988.variants = i996
  var i999 = i989[24]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i999[i + 0]) );
  }
  i988.excludedVariants = i998
  i988.hasDepthReader = !!i989[25]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1001 = data
  i1000.val = i1001[0]
  i1000.name = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1003 = data
  i1002.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[0], i1002.src)
  i1002.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[1], i1002.dst)
  i1002.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[2], i1002.op)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1005 = data
  i1004.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[0], i1004.pass)
  i1004.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[1], i1004.fail)
  i1004.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[2], i1004.zFail)
  i1004.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[3], i1004.comp)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.value = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1012.keywords = i1014
  i1012.hasDiscard = !!i1013[1]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1019 = data
  i1018.passId = i1019[0]
  i1018.subShaderIndex = i1019[1]
  var i1021 = i1019[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1018.keywords = i1020
  i1018.vertexProgram = i1019[3]
  i1018.fragmentProgram = i1019[4]
  i1018.exportedForWebGl2 = !!i1019[5]
  i1018.readDepth = !!i1019[6]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'shader')
  i1024.pass = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.type = i1029[1]
  i1028.value = new pc.Vec4( i1029[2], i1029[3], i1029[4], i1029[5] )
  i1028.textureValue = i1029[6]
  i1028.shaderPropertyFlag = i1029[7]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1031 = data
  i1030.name = i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'texture')
  i1030.aabb = i1031[3]
  i1030.vertices = i1031[4]
  i1030.triangles = i1031[5]
  i1030.textureRect = UnityEngine.Rect.MinMaxRect(i1031[6], i1031[7], i1031[8], i1031[9])
  i1030.packedRect = UnityEngine.Rect.MinMaxRect(i1031[10], i1031[11], i1031[12], i1031[13])
  i1030.border = new pc.Vec4( i1031[14], i1031[15], i1031[16], i1031[17] )
  i1030.transparency = i1031[18]
  i1030.bounds = i1031[19]
  i1030.pixelsPerUnit = i1031[20]
  i1030.textureWidth = i1031[21]
  i1030.textureHeight = i1031[22]
  i1030.nativeSize = new pc.Vec2( i1031[23], i1031[24] )
  i1030.pivot = new pc.Vec2( i1031[25], i1031[26] )
  i1030.textureRectOffset = new pc.Vec2( i1031[27], i1031[28] )
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1033 = data
  i1032.name = i1033[0]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.wrapMode = i1035[1]
  i1034.isLooping = !!i1035[2]
  i1034.length = i1035[3]
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1037[i + 0]) );
  }
  i1034.curves = i1036
  var i1039 = i1035[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1039[i + 0]) );
  }
  i1034.events = i1038
  i1034.halfPrecision = !!i1035[6]
  i1034._frameRate = i1035[7]
  i1034.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1035[8], i1034.localBounds)
  i1034.hasMuscleCurves = !!i1035[9]
  var i1041 = i1035[10]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1034.clipMuscleConstant = i1040
  i1034.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1035[11], i1034.clipBindingConstant)
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1045 = data
  i1044.path = i1045[0]
  i1044.hash = i1045[1]
  i1044.componentType = i1045[2]
  i1044.property = i1045[3]
  i1044.keys = i1045[4]
  var i1047 = i1045[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1047[i + 0]) );
  }
  i1044.objectReferenceKeys = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1051 = data
  i1050.time = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'value')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1055 = data
  i1054.functionName = i1055[0]
  i1054.floatParameter = i1055[1]
  i1054.intParameter = i1055[2]
  i1054.stringParameter = i1055[3]
  request.r(i1055[4], i1055[5], 0, i1054, 'objectReferenceParameter')
  i1054.time = i1055[6]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1057 = data
  i1056.center = new pc.Vec3( i1057[0], i1057[1], i1057[2] )
  i1056.extends = new pc.Vec3( i1057[3], i1057[4], i1057[5] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.genericBindings = i1062
  var i1065 = i1061[1]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.pptrCurveMapping = i1064
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.ascent = i1067[1]
  i1066.originalLineHeight = i1067[2]
  i1066.fontSize = i1067[3]
  var i1069 = i1067[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1069[i + 0]) );
  }
  i1066.characterInfo = i1068
  request.r(i1067[5], i1067[6], 0, i1066, 'texture')
  i1066.originalFontSize = i1067[7]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1073 = data
  i1072.index = i1073[0]
  i1072.advance = i1073[1]
  i1072.bearing = i1073[2]
  i1072.glyphWidth = i1073[3]
  i1072.glyphHeight = i1073[4]
  i1072.minX = i1073[5]
  i1072.maxX = i1073[6]
  i1072.minY = i1073[7]
  i1072.maxY = i1073[8]
  i1072.uvBottomLeftX = i1073[9]
  i1072.uvBottomLeftY = i1073[10]
  i1072.uvBottomRightX = i1073[11]
  i1072.uvBottomRightY = i1073[12]
  i1072.uvTopLeftX = i1073[13]
  i1072.uvTopLeftY = i1073[14]
  i1072.uvTopRightX = i1073[15]
  i1072.uvTopRightY = i1073[16]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1075 = data
  i1074.name = i1075[0]
  var i1077 = i1075[1]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1077[i + 0]) );
  }
  i1074.layers = i1076
  var i1079 = i1075[2]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1079[i + 0]) );
  }
  i1074.parameters = i1078
  i1074.animationClips = i1075[3]
  i1074.avatarUnsupported = i1075[4]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.defaultWeight = i1083[1]
  i1082.blendingMode = i1083[2]
  i1082.avatarMask = i1083[3]
  i1082.syncedLayerIndex = i1083[4]
  i1082.syncedLayerAffectsTiming = !!i1083[5]
  i1082.syncedLayers = i1083[6]
  i1082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[7], i1082.stateMachine)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.name = i1085[1]
  i1084.path = i1085[2]
  var i1087 = i1085[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1087[i + 0]) );
  }
  i1084.states = i1086
  var i1089 = i1085[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1089[i + 0]) );
  }
  i1084.machines = i1088
  var i1091 = i1085[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1091[i + 0]) );
  }
  i1084.entryStateTransitions = i1090
  var i1093 = i1085[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1093[i + 0]) );
  }
  i1084.exitStateTransitions = i1092
  var i1095 = i1085[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1095[i + 0]) );
  }
  i1084.anyStateTransitions = i1094
  i1084.defaultStateId = i1085[8]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  i1098.cycleOffset = i1099[2]
  i1098.cycleOffsetParameter = i1099[3]
  i1098.cycleOffsetParameterActive = !!i1099[4]
  i1098.mirror = !!i1099[5]
  i1098.mirrorParameter = i1099[6]
  i1098.mirrorParameterActive = !!i1099[7]
  i1098.motionId = i1099[8]
  i1098.nameHash = i1099[9]
  i1098.fullPathHash = i1099[10]
  i1098.speed = i1099[11]
  i1098.speedParameter = i1099[12]
  i1098.speedParameterActive = !!i1099[13]
  i1098.tag = i1099[14]
  i1098.tagHash = i1099[15]
  i1098.writeDefaultValues = !!i1099[16]
  var i1101 = i1099[17]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.behaviours = i1100
  var i1103 = i1099[18]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1103[i + 0]) );
  }
  i1098.transitions = i1102
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1109 = data
  i1108.fullPath = i1109[0]
  i1108.canTransitionToSelf = !!i1109[1]
  i1108.duration = i1109[2]
  i1108.exitTime = i1109[3]
  i1108.hasExitTime = !!i1109[4]
  i1108.hasFixedDuration = !!i1109[5]
  i1108.interruptionSource = i1109[6]
  i1108.offset = i1109[7]
  i1108.orderedInterruption = !!i1109[8]
  i1108.destinationStateId = i1109[9]
  i1108.isExit = !!i1109[10]
  i1108.mute = !!i1109[11]
  i1108.solo = !!i1109[12]
  var i1111 = i1109[13]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1111[i + 0]) );
  }
  i1108.conditions = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1117 = data
  i1116.destinationStateId = i1117[0]
  i1116.isExit = !!i1117[1]
  i1116.mute = !!i1117[2]
  i1116.solo = !!i1117[3]
  var i1119 = i1117[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1119[i + 0]) );
  }
  i1116.conditions = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1123 = data
  i1122.mode = i1123[0]
  i1122.parameter = i1123[1]
  i1122.threshold = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1127 = data
  i1126.defaultBool = !!i1127[0]
  i1126.defaultFloat = i1127[1]
  i1126.defaultInt = i1127[2]
  i1126.name = i1127[3]
  i1126.nameHash = i1127[4]
  i1126.type = i1127[5]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.bytes64 = i1129[1]
  i1128.data = i1129[2]
  return i1128
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1131 = data
  i1130.normalStyle = i1131[0]
  i1130.normalSpacingOffset = i1131[1]
  i1130.boldStyle = i1131[2]
  i1130.boldSpacing = i1131[3]
  i1130.italicStyle = i1131[4]
  i1130.tabSize = i1131[5]
  request.r(i1131[6], i1131[7], 0, i1130, 'atlas')
  i1130.m_SourceFontFileGUID = i1131[8]
  i1130.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1131[9], i1130.m_CreationSettings)
  request.r(i1131[10], i1131[11], 0, i1130, 'm_SourceFontFile')
  i1130.m_SourceFontFilePath = i1131[12]
  i1130.m_AtlasPopulationMode = i1131[13]
  i1130.InternalDynamicOS = !!i1131[14]
  var i1133 = i1131[15]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('UnityEngine.TextCore.Glyph', i1133[i + 0]));
  }
  i1130.m_GlyphTable = i1132
  var i1135 = i1131[16]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.TMP_Character', i1135[i + 0]));
  }
  i1130.m_CharacterTable = i1134
  var i1137 = i1131[17]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1130.m_AtlasTextures = i1136
  i1130.m_AtlasTextureIndex = i1131[18]
  i1130.m_IsMultiAtlasTexturesEnabled = !!i1131[19]
  i1130.m_GetFontFeatures = !!i1131[20]
  i1130.m_ClearDynamicDataOnBuild = !!i1131[21]
  i1130.m_AtlasWidth = i1131[22]
  i1130.m_AtlasHeight = i1131[23]
  i1130.m_AtlasPadding = i1131[24]
  i1130.m_AtlasRenderMode = i1131[25]
  var i1139 = i1131[26]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('UnityEngine.TextCore.GlyphRect', i1139[i + 0]));
  }
  i1130.m_UsedGlyphRects = i1138
  var i1141 = i1131[27]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('UnityEngine.TextCore.GlyphRect', i1141[i + 0]));
  }
  i1130.m_FreeGlyphRects = i1140
  i1130.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1131[28], i1130.m_FontFeatureTable)
  i1130.m_ShouldReimportFontFeatures = !!i1131[29]
  var i1143 = i1131[30]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1130.m_FallbackFontAssetTable = i1142
  var i1145 = i1131[31]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('TMPro.TMP_FontWeightPair', i1145[i + 0]) );
  }
  i1130.m_FontWeightTable = i1144
  var i1147 = i1131[32]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('TMPro.TMP_FontWeightPair', i1147[i + 0]) );
  }
  i1130.fontWeights = i1146
  i1130.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1131[33], i1130.m_fontInfo)
  var i1149 = i1131[34]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_Glyph', i1149[i + 0]));
  }
  i1130.m_glyphInfoList = i1148
  i1130.m_KerningTable = request.d('TMPro.KerningTable', i1131[35], i1130.m_KerningTable)
  var i1151 = i1131[36]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1130.fallbackFontAssets = i1150
  i1130.m_Version = i1131[37]
  i1130.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1131[38], i1130.m_FaceInfo)
  request.r(i1131[39], i1131[40], 0, i1130, 'm_Material')
  return i1130
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1153 = data
  i1152.sourceFontFileName = i1153[0]
  i1152.sourceFontFileGUID = i1153[1]
  i1152.faceIndex = i1153[2]
  i1152.pointSizeSamplingMode = i1153[3]
  i1152.pointSize = i1153[4]
  i1152.padding = i1153[5]
  i1152.paddingMode = i1153[6]
  i1152.packingMode = i1153[7]
  i1152.atlasWidth = i1153[8]
  i1152.atlasHeight = i1153[9]
  i1152.characterSetSelectionMode = i1153[10]
  i1152.characterSequence = i1153[11]
  i1152.referencedFontAssetGUID = i1153[12]
  i1152.referencedTextAssetGUID = i1153[13]
  i1152.fontStyle = i1153[14]
  i1152.fontStyleModifier = i1153[15]
  i1152.renderMode = i1153[16]
  i1152.includeFontFeatures = !!i1153[17]
  return i1152
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1157 = data
  i1156.m_Index = i1157[0]
  i1156.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1157[1], i1156.m_Metrics)
  i1156.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1157[2], i1156.m_GlyphRect)
  i1156.m_Scale = i1157[3]
  i1156.m_AtlasIndex = i1157[4]
  i1156.m_ClassDefinitionType = i1157[5]
  return i1156
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1159 = data
  i1158.m_Width = i1159[0]
  i1158.m_Height = i1159[1]
  i1158.m_HorizontalBearingX = i1159[2]
  i1158.m_HorizontalBearingY = i1159[3]
  i1158.m_HorizontalAdvance = i1159[4]
  return i1158
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1161 = data
  i1160.m_X = i1161[0]
  i1160.m_Y = i1161[1]
  i1160.m_Width = i1161[2]
  i1160.m_Height = i1161[3]
  return i1160
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_Character' )
  var i1165 = data
  i1164.m_ElementType = i1165[0]
  i1164.m_Unicode = i1165[1]
  i1164.m_GlyphIndex = i1165[2]
  i1164.m_Scale = i1165[3]
  return i1164
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('TMPro.MultipleSubstitutionRecord', i1173[i + 0]));
  }
  i1170.m_MultipleSubstitutionRecords = i1172
  var i1175 = i1171[1]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.LigatureSubstitutionRecord', i1175[i + 0]));
  }
  i1170.m_LigatureSubstitutionRecords = i1174
  var i1177 = i1171[2]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1177[i + 0]));
  }
  i1170.m_GlyphPairAdjustmentRecords = i1176
  var i1179 = i1171[3]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1179[i + 0]));
  }
  i1170.m_MarkToBaseAdjustmentRecords = i1178
  var i1181 = i1171[4]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1181[i + 0]));
  }
  i1170.m_MarkToMarkAdjustmentRecords = i1180
  return i1170
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1185 = data
  i1184.m_TargetGlyphID = i1185[0]
  i1184.m_SubstituteGlyphIDs = i1185[1]
  return i1184
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1189 = data
  i1188.m_ComponentGlyphIDs = i1189[0]
  i1188.m_LigatureGlyphID = i1189[1]
  return i1188
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1193 = data
  i1192.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1193[0], i1192.m_FirstAdjustmentRecord)
  i1192.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1193[1], i1192.m_SecondAdjustmentRecord)
  i1192.m_FeatureLookupFlags = i1193[2]
  return i1192
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1197 = data
  i1196.m_BaseGlyphID = i1197[0]
  i1196.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1197[1], i1196.m_BaseGlyphAnchorPoint)
  i1196.m_MarkGlyphID = i1197[2]
  i1196.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1197[3], i1196.m_MarkPositionAdjustment)
  return i1196
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1201 = data
  i1200.m_BaseMarkGlyphID = i1201[0]
  i1200.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1201[1], i1200.m_BaseMarkGlyphAnchorPoint)
  i1200.m_CombiningMarkGlyphID = i1201[2]
  i1200.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1201[3], i1200.m_CombiningMarkPositionAdjustment)
  return i1200
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'regularTypeface')
  request.r(i1207[2], i1207[3], 0, i1206, 'italicTypeface')
  return i1206
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1209 = data
  i1208.Name = i1209[0]
  i1208.PointSize = i1209[1]
  i1208.Scale = i1209[2]
  i1208.CharacterCount = i1209[3]
  i1208.LineHeight = i1209[4]
  i1208.Baseline = i1209[5]
  i1208.Ascender = i1209[6]
  i1208.CapHeight = i1209[7]
  i1208.Descender = i1209[8]
  i1208.CenterLine = i1209[9]
  i1208.SuperscriptOffset = i1209[10]
  i1208.SubscriptOffset = i1209[11]
  i1208.SubSize = i1209[12]
  i1208.Underline = i1209[13]
  i1208.UnderlineThickness = i1209[14]
  i1208.strikethrough = i1209[15]
  i1208.strikethroughThickness = i1209[16]
  i1208.TabWidth = i1209[17]
  i1208.Padding = i1209[18]
  i1208.AtlasWidth = i1209[19]
  i1208.AtlasHeight = i1209[20]
  return i1208
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1213 = data
  i1212.id = i1213[0]
  i1212.x = i1213[1]
  i1212.y = i1213[2]
  i1212.width = i1213[3]
  i1212.height = i1213[4]
  i1212.xOffset = i1213[5]
  i1212.yOffset = i1213[6]
  i1212.xAdvance = i1213[7]
  i1212.scale = i1213[8]
  return i1212
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.KerningTable' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.KerningPair', i1217[i + 0]));
  }
  i1214.kerningPairs = i1216
  return i1214
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.KerningPair' )
  var i1221 = data
  i1220.xOffset = i1221[0]
  i1220.m_FirstGlyph = i1221[1]
  i1220.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1221[2], i1220.m_FirstGlyphAdjustments)
  i1220.m_SecondGlyph = i1221[3]
  i1220.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1221[4], i1220.m_SecondGlyphAdjustments)
  i1220.m_IgnoreSpacingAdjustments = !!i1221[5]
  return i1220
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1223 = data
  i1222.m_FaceIndex = i1223[0]
  i1222.m_FamilyName = i1223[1]
  i1222.m_StyleName = i1223[2]
  i1222.m_PointSize = i1223[3]
  i1222.m_Scale = i1223[4]
  i1222.m_UnitsPerEM = i1223[5]
  i1222.m_LineHeight = i1223[6]
  i1222.m_AscentLine = i1223[7]
  i1222.m_CapLine = i1223[8]
  i1222.m_MeanLine = i1223[9]
  i1222.m_Baseline = i1223[10]
  i1222.m_DescentLine = i1223[11]
  i1222.m_SuperscriptOffset = i1223[12]
  i1222.m_SuperscriptSize = i1223[13]
  i1222.m_SubscriptOffset = i1223[14]
  i1222.m_SubscriptSize = i1223[15]
  i1222.m_UnderlineOffset = i1223[16]
  i1222.m_UnderlineThickness = i1223[17]
  i1222.m_StrikethroughOffset = i1223[18]
  i1222.m_StrikethroughThickness = i1223[19]
  i1222.m_TabWidth = i1223[20]
  return i1222
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1225 = data
  i1224.m_GlyphIndex = i1225[0]
  i1224.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1225[1], i1224.m_GlyphValueRecord)
  return i1224
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1227 = data
  i1226.m_XPlacement = i1227[0]
  i1226.m_YPlacement = i1227[1]
  i1226.m_XAdvance = i1227[2]
  i1226.m_YAdvance = i1227[3]
  return i1226
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_Settings' )
  var i1229 = data
  i1228.assetVersion = i1229[0]
  i1228.m_TextWrappingMode = i1229[1]
  i1228.m_enableKerning = !!i1229[2]
  var i1231 = i1229[3]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(i1231[i + 0]);
  }
  i1228.m_ActiveFontFeatures = i1230
  i1228.m_enableExtraPadding = !!i1229[4]
  i1228.m_enableTintAllSprites = !!i1229[5]
  i1228.m_enableParseEscapeCharacters = !!i1229[6]
  i1228.m_EnableRaycastTarget = !!i1229[7]
  i1228.m_GetFontFeaturesAtRuntime = !!i1229[8]
  i1228.m_missingGlyphCharacter = i1229[9]
  i1228.m_ClearDynamicDataOnBuild = !!i1229[10]
  i1228.m_warningsDisabled = !!i1229[11]
  request.r(i1229[12], i1229[13], 0, i1228, 'm_defaultFontAsset')
  i1228.m_defaultFontAssetPath = i1229[14]
  i1228.m_defaultFontSize = i1229[15]
  i1228.m_defaultAutoSizeMinRatio = i1229[16]
  i1228.m_defaultAutoSizeMaxRatio = i1229[17]
  i1228.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1229[18], i1229[19] )
  i1228.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1229[20], i1229[21] )
  i1228.m_autoSizeTextContainer = !!i1229[22]
  i1228.m_IsTextObjectScaleStatic = !!i1229[23]
  var i1233 = i1229[24]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1228.m_fallbackFontAssets = i1232
  i1228.m_matchMaterialPreset = !!i1229[25]
  i1228.m_HideSubTextObjects = !!i1229[26]
  request.r(i1229[27], i1229[28], 0, i1228, 'm_defaultSpriteAsset')
  i1228.m_defaultSpriteAssetPath = i1229[29]
  i1228.m_enableEmojiSupport = !!i1229[30]
  i1228.m_MissingCharacterSpriteUnicode = i1229[31]
  var i1235 = i1229[32]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1228.m_EmojiFallbackTextAssets = i1234
  i1228.m_defaultColorGradientPresetsPath = i1229[33]
  request.r(i1229[34], i1229[35], 0, i1228, 'm_defaultStyleSheet')
  i1228.m_StyleSheetsResourcePath = i1229[36]
  request.r(i1229[37], i1229[38], 0, i1228, 'm_leadingCharacters')
  request.r(i1229[39], i1229[40], 0, i1228, 'm_followingCharacters')
  i1228.m_UseModernHangulLineBreakingRules = !!i1229[41]
  return i1228
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'spriteSheet')
  var i1241 = i1239[2]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_Sprite', i1241[i + 0]));
  }
  i1238.spriteInfoList = i1240
  var i1243 = i1239[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1238.fallbackSpriteAssets = i1242
  var i1245 = i1239[4]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_SpriteCharacter', i1245[i + 0]));
  }
  i1238.m_SpriteCharacterTable = i1244
  var i1247 = i1239[5]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_SpriteGlyph', i1247[i + 0]));
  }
  i1238.m_GlyphTable = i1246
  i1238.m_Version = i1239[6]
  i1238.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1239[7], i1238.m_FaceInfo)
  request.r(i1239[8], i1239[9], 0, i1238, 'm_Material')
  return i1238
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.hashCode = i1251[1]
  i1250.unicode = i1251[2]
  i1250.pivot = new pc.Vec2( i1251[3], i1251[4] )
  request.r(i1251[5], i1251[6], 0, i1250, 'sprite')
  i1250.id = i1251[7]
  i1250.x = i1251[8]
  i1250.y = i1251[9]
  i1250.width = i1251[10]
  i1250.height = i1251[11]
  i1250.xOffset = i1251[12]
  i1250.yOffset = i1251[13]
  i1250.xAdvance = i1251[14]
  i1250.scale = i1251[15]
  return i1250
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1257 = data
  i1256.m_Name = i1257[0]
  i1256.m_ElementType = i1257[1]
  i1256.m_Unicode = i1257[2]
  i1256.m_GlyphIndex = i1257[3]
  i1256.m_Scale = i1257[4]
  return i1256
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'sprite')
  i1260.m_Index = i1261[2]
  i1260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1261[3], i1260.m_Metrics)
  i1260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1261[4], i1260.m_GlyphRect)
  i1260.m_Scale = i1261[5]
  i1260.m_AtlasIndex = i1261[6]
  i1260.m_ClassDefinitionType = i1261[7]
  return i1260
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_Style', i1265[i + 0]));
  }
  i1262.m_StyleList = i1264
  return i1262
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_Style' )
  var i1269 = data
  i1268.m_Name = i1269[0]
  i1268.m_HashCode = i1269[1]
  i1268.m_OpeningDefinition = i1269[2]
  i1268.m_ClosingDefinition = i1269[3]
  i1268.m_OpeningTagArray = i1269[4]
  i1268.m_ClosingTagArray = i1269[5]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1273[i + 0]) );
  }
  i1270.files = i1272
  i1270.componentToPrefabIds = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1277 = data
  i1276.path = i1277[0]
  request.r(i1277[1], i1277[2], 0, i1276, 'unityObject')
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1281[i + 0]) );
  }
  i1278.scriptsExecutionOrder = i1280
  var i1283 = i1279[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1283[i + 0]) );
  }
  i1278.sortingLayers = i1282
  var i1285 = i1279[2]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1285[i + 0]) );
  }
  i1278.cullingLayers = i1284
  i1278.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1279[3], i1278.timeSettings)
  i1278.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1279[4], i1278.physicsSettings)
  i1278.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1279[5], i1278.physics2DSettings)
  i1278.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1279[6], i1278.qualitySettings)
  i1278.enableRealtimeShadows = !!i1279[7]
  i1278.enableAutoInstancing = !!i1279[8]
  i1278.enableStaticBatching = !!i1279[9]
  i1278.enableDynamicBatching = !!i1279[10]
  i1278.lightmapEncodingQuality = i1279[11]
  i1278.desiredColorSpace = i1279[12]
  var i1287 = i1279[13]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( i1287[i + 0] );
  }
  i1278.allTags = i1286
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.value = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.name = i1295[1]
  i1294.value = i1295[2]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1299 = data
  i1298.id = i1299[0]
  i1298.name = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1301 = data
  i1300.fixedDeltaTime = i1301[0]
  i1300.maximumDeltaTime = i1301[1]
  i1300.timeScale = i1301[2]
  i1300.maximumParticleTimestep = i1301[3]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1303 = data
  i1302.gravity = new pc.Vec3( i1303[0], i1303[1], i1303[2] )
  i1302.defaultSolverIterations = i1303[3]
  i1302.bounceThreshold = i1303[4]
  i1302.autoSyncTransforms = !!i1303[5]
  i1302.autoSimulation = !!i1303[6]
  var i1305 = i1303[7]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1305[i + 0]) );
  }
  i1302.collisionMatrix = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1309 = data
  i1308.enabled = !!i1309[0]
  i1308.layerId = i1309[1]
  i1308.otherLayerId = i1309[2]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'material')
  i1310.gravity = new pc.Vec2( i1311[2], i1311[3] )
  i1310.positionIterations = i1311[4]
  i1310.velocityIterations = i1311[5]
  i1310.velocityThreshold = i1311[6]
  i1310.maxLinearCorrection = i1311[7]
  i1310.maxAngularCorrection = i1311[8]
  i1310.maxTranslationSpeed = i1311[9]
  i1310.maxRotationSpeed = i1311[10]
  i1310.baumgarteScale = i1311[11]
  i1310.baumgarteTOIScale = i1311[12]
  i1310.timeToSleep = i1311[13]
  i1310.linearSleepTolerance = i1311[14]
  i1310.angularSleepTolerance = i1311[15]
  i1310.defaultContactOffset = i1311[16]
  i1310.autoSimulation = !!i1311[17]
  i1310.queriesHitTriggers = !!i1311[18]
  i1310.queriesStartInColliders = !!i1311[19]
  i1310.callbacksOnDisable = !!i1311[20]
  i1310.reuseCollisionCallbacks = !!i1311[21]
  i1310.autoSyncTransforms = !!i1311[22]
  var i1313 = i1311[23]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1313[i + 0]) );
  }
  i1310.collisionMatrix = i1312
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1317 = data
  i1316.enabled = !!i1317[0]
  i1316.layerId = i1317[1]
  i1316.otherLayerId = i1317[2]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1321[i + 0]) );
  }
  i1318.qualityLevels = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( i1323[i + 0] );
  }
  i1318.names = i1322
  i1318.shadows = i1319[2]
  i1318.anisotropicFiltering = i1319[3]
  i1318.antiAliasing = i1319[4]
  i1318.lodBias = i1319[5]
  i1318.shadowCascades = i1319[6]
  i1318.shadowDistance = i1319[7]
  i1318.shadowmaskMode = i1319[8]
  i1318.shadowProjection = i1319[9]
  i1318.shadowResolution = i1319[10]
  i1318.softParticles = !!i1319[11]
  i1318.softVegetation = !!i1319[12]
  i1318.activeColorSpace = i1319[13]
  i1318.desiredColorSpace = i1319[14]
  i1318.masterTextureLimit = i1319[15]
  i1318.maxQueuedFrames = i1319[16]
  i1318.particleRaycastBudget = i1319[17]
  i1318.pixelLightCount = i1319[18]
  i1318.realtimeReflectionProbes = !!i1319[19]
  i1318.shadowCascade2Split = i1319[20]
  i1318.shadowCascade4Split = new pc.Vec3( i1319[21], i1319[22], i1319[23] )
  i1318.streamingMipmapsActive = !!i1319[24]
  i1318.vSyncCount = i1319[25]
  i1318.asyncUploadBufferSize = i1319[26]
  i1318.asyncUploadTimeSlice = i1319[27]
  i1318.billboardsFaceCameraPosition = !!i1319[28]
  i1318.shadowNearPlaneOffset = i1319[29]
  i1318.streamingMipmapsMemoryBudget = i1319[30]
  i1318.maximumLODLevel = i1319[31]
  i1318.streamingMipmapsAddAllCameras = !!i1319[32]
  i1318.streamingMipmapsMaxLevelReduction = i1319[33]
  i1318.streamingMipmapsRenderersPerFrame = i1319[34]
  i1318.resolutionScalingFixedDPIFactor = i1319[35]
  i1318.streamingMipmapsMaxFileIORequests = i1319[36]
  i1318.currentQualityLevel = i1319[37]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1329 = data
  i1328.weight = i1329[0]
  i1328.vertices = i1329[1]
  i1328.normals = i1329[2]
  i1328.tangents = i1329[3]
  return i1328
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1331 = data
  i1330.m_XCoordinate = i1331[0]
  i1330.m_YCoordinate = i1331[1]
  return i1330
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1333 = data
  i1332.m_XPositionAdjustment = i1333[0]
  i1332.m_YPositionAdjustment = i1333[1]
  return i1332
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1335 = data
  i1334.xPlacement = i1335[0]
  i1334.yPlacement = i1335[1]
  i1334.xAdvance = i1335[2]
  i1334.yAdvance = i1335[3]
  return i1334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[35],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[32],"82":[83],"84":[83],"18":[17],"5":[2],"85":[30],"86":[2],"87":[88],"89":[44],"90":[18],"91":[17],"33":[32,17],"24":[17,25],"92":[17],"93":[25,17],"94":[32],"95":[25,17],"96":[17],"97":[98],"99":[98],"100":[98],"101":[102],"103":[17],"104":[17],"21":[18],"23":[25,17],"105":[17],"20":[18],"106":[17],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[25,17],"116":[17],"117":[17],"118":[17],"119":[17],"41":[25,17],"120":[17],"121":[44],"122":[44],"45":[44],"123":[44],"124":[2],"125":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","ItemGraphic","ItemMovement","UnityEngine.UI.Text","UnityEngine.Font","PlaySound","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "6.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_TrickyTwist_Lv31";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4767";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs";

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

Deserializers.buildID = "154cc74d-d070-44c1-8577-2b652ed8daa9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

