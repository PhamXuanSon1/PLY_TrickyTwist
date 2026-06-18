var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointSpring' )
  var i667 = data
  i666.spring = i667[0]
  i666.damper = i667[1]
  i666.targetPosition = i667[2]
  return i666
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor' )
  var i669 = data
  i668.m_TargetVelocity = i669[0]
  i668.m_Force = i669[1]
  i668.m_FreeSpin = i669[2]
  return i668
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointLimits' )
  var i671 = data
  i670.m_Min = i671[0]
  i670.m_Max = i671[1]
  i670.m_Bounciness = i671[2]
  i670.m_BounceMinVelocity = i671[3]
  i670.m_ContactDistance = i671[4]
  i670.minBounce = i671[5]
  i670.maxBounce = i671[6]
  return i670
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointDrive' )
  var i673 = data
  i672.m_PositionSpring = i673[0]
  i672.m_PositionDamper = i673[1]
  i672.m_MaximumForce = i673[2]
  i672.m_UseAcceleration = i673[3]
  return i672
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i675 = data
  i674.m_Spring = i675[0]
  i674.m_Damper = i675[1]
  return i674
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i677 = data
  i676.m_Limit = i677[0]
  i676.m_Bounciness = i677[1]
  i676.m_ContactDistance = i677[2]
  return i676
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i679 = data
  i678.m_ExtremumSlip = i679[0]
  i678.m_ExtremumValue = i679[1]
  i678.m_AsymptoteSlip = i679[2]
  i678.m_AsymptoteValue = i679[3]
  i678.m_Stiffness = i679[4]
  return i678
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i681 = data
  i680.m_LowerAngle = i681[0]
  i680.m_UpperAngle = i681[1]
  return i680
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i683 = data
  i682.m_MotorSpeed = i683[0]
  i682.m_MaximumMotorTorque = i683[1]
  return i682
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i685 = data
  i684.m_DampingRatio = i685[0]
  i684.m_Frequency = i685[1]
  i684.m_Angle = i685[2]
  return i684
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i687 = data
  i686.m_LowerTranslation = i687[0]
  i686.m_UpperTranslation = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i688 = root || new pc.UnityMaterial()
  var i689 = data
  i688.name = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'shader')
  i688.renderQueue = i689[3]
  i688.enableInstancing = !!i689[4]
  var i691 = i689[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i691[i + 0]) );
  }
  i688.floatParameters = i690
  var i693 = i689[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i693[i + 0]) );
  }
  i688.colorParameters = i692
  var i695 = i689[7]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i695[i + 0]) );
  }
  i688.vectorParameters = i694
  var i697 = i689[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i697[i + 0]) );
  }
  i688.textureParameters = i696
  var i699 = i689[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i699[i + 0]) );
  }
  i688.materialFlags = i698
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i703 = data
  i702.name = i703[0]
  i702.value = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i707 = data
  i706.name = i707[0]
  i706.value = new pc.Color(i707[1], i707[2], i707[3], i707[4])
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = new pc.Vec4( i711[1], i711[2], i711[3], i711[4] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'value')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i719 = data
  i718.name = i719[0]
  i718.enabled = !!i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i721 = data
  i720.name = i721[0]
  i720.width = i721[1]
  i720.height = i721[2]
  i720.mipmapCount = i721[3]
  i720.anisoLevel = i721[4]
  i720.filterMode = i721[5]
  i720.hdr = !!i721[6]
  i720.format = i721[7]
  i720.wrapMode = i721[8]
  i720.alphaIsTransparency = !!i721[9]
  i720.alphaSource = i721[10]
  i720.graphicsFormat = i721[11]
  i720.sRGBTexture = !!i721[12]
  i720.desiredColorSpace = i721[13]
  i720.wrapU = i721[14]
  i720.wrapV = i721[15]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i723 = data
  i722.name = i723[0]
  i722.halfPrecision = !!i723[1]
  i722.useSimplification = !!i723[2]
  i722.useUInt32IndexFormat = !!i723[3]
  i722.vertexCount = i723[4]
  i722.aabb = i723[5]
  var i725 = i723[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( !!i725[i + 0] );
  }
  i722.streams = i724
  i722.vertices = i723[7]
  var i727 = i723[8]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i727[i + 0]) );
  }
  i722.subMeshes = i726
  var i729 = i723[9]
  var i728 = []
  for(var i = 0; i < i729.length; i += 16) {
    i728.push( new pc.Mat4().setData(i729[i + 0], i729[i + 1], i729[i + 2], i729[i + 3],  i729[i + 4], i729[i + 5], i729[i + 6], i729[i + 7],  i729[i + 8], i729[i + 9], i729[i + 10], i729[i + 11],  i729[i + 12], i729[i + 13], i729[i + 14], i729[i + 15]) );
  }
  i722.bindposes = i728
  var i731 = i723[10]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i731[i + 0]) );
  }
  i722.blendShapes = i730
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i737 = data
  i736.triangles = i737[0]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i743 = data
  i742.name = i743[0]
  var i745 = i743[1]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i745[i + 0]) );
  }
  i742.frames = i744
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i747 = data
  i746.name = i747[0]
  i746.index = i747[1]
  i746.startup = !!i747[2]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i749 = data
  i748.aspect = i749[0]
  i748.orthographic = !!i749[1]
  i748.orthographicSize = i749[2]
  i748.backgroundColor = new pc.Color(i749[3], i749[4], i749[5], i749[6])
  i748.nearClipPlane = i749[7]
  i748.farClipPlane = i749[8]
  i748.fieldOfView = i749[9]
  i748.depth = i749[10]
  i748.clearFlags = i749[11]
  i748.cullingMask = i749[12]
  i748.rect = i749[13]
  request.r(i749[14], i749[15], 0, i748, 'targetTexture')
  i748.usePhysicalProperties = !!i749[16]
  i748.focalLength = i749[17]
  i748.sensorSize = new pc.Vec2( i749[18], i749[19] )
  i748.lensShift = new pc.Vec2( i749[20], i749[21] )
  i748.gateFit = i749[22]
  i748.commandBufferCount = i749[23]
  i748.cameraType = i749[24]
  i748.enabled = !!i749[25]
  return i748
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i750 = root || request.c( 'AutoCameraFit' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'canvasBtn')
  request.r(i751[2], i751[3], 0, i750, 'targetArea')
  i750.paddingLandscape = i751[4]
  i750.paddingPortrait = i751[5]
  i750.extraPaddingSmallScreen = i751[6]
  i750.smallScreenThreshold = i751[7]
  i750.autoUpdateOnResize = !!i751[8]
  i750.adjustInEditMode = !!i751[9]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i753 = data
  i752.name = i753[0]
  i752.tagId = i753[1]
  i752.enabled = !!i753[2]
  i752.isStatic = !!i753[3]
  i752.layer = i753[4]
  return i752
}

Deserializers["InputManager"] = function (request, data, root) {
  var i754 = root || request.c( 'InputManager' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'mainCamera')
  i754.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i755[2] )
  i754.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i755[3] )
  i754.installLayer = UnityEngine.LayerMask.FromIntegerValue( i755[4] )
  i754.maxDistance = i755[5]
  i754.itemsToGotoStore = i755[6]
  i754.dragSortingOffset = i755[7]
  i754.useDragBounds = !!i755[8]
  request.r(i755[9], i755[10], 0, i754, 'dragBounds')
  return i754
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i756 = root || request.c( 'HandHintMmanager' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 1, i758, '')
  }
  i756.hintItems = i758
  request.r(i757[1], i757[2], 0, i756, 'handHintObject')
  request.r(i757[3], i757[4], 0, i756, 'handAnimator')
  i756.idleTimeToHint = i757[5]
  i756.dragAnimDuration = i757[6]
  request.r(i757[7], i757[8], 0, i756, 'startHintPos')
  request.r(i757[9], i757[10], 0, i756, 'endHintPos')
  return i756
}

Deserializers["GameManager"] = function (request, data, root) {
  var i762 = root || request.c( 'GameManager' )
  var i763 = data
  i762.fxStartVoice = i763[0]
  i762.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i763[1], i762.onLoseGame)
  i762.isGameEnded = !!i763[2]
  return i762
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i765 = data
  i764.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i765[0], i764.m_PersistentCalls)
  return i764
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('UnityEngine.Events.PersistentCall', i769[i + 0]));
  }
  i766.m_Calls = i768
  return i766
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_Target')
  i772.m_TargetAssemblyTypeName = i773[2]
  i772.m_MethodName = i773[3]
  i772.m_Mode = i773[4]
  i772.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i773[5], i772.m_Arguments)
  i772.m_CallState = i773[6]
  return i772
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_ObjectArgument')
  i774.m_ObjectArgumentAssemblyTypeName = i775[2]
  i774.m_IntArgument = i775[3]
  i774.m_FloatArgument = i775[4]
  i774.m_StringArgument = i775[5]
  i774.m_BoolArgument = !!i775[6]
  return i774
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i776 = root || request.c( 'ItemManager' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 1, i778, '')
  }
  i776.items = i778
  i776.totalItemsDropped = i777[1]
  i776.onItemDropped = request.d('UnityEngine.Events.UnityEvent', i777[2], i776.onItemDropped)
  return i776
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i780 = root || request.c( 'Ply_SoundManager' )
  var i781 = data
  i780.fxAudio = request.d('FxAudio', i781[0], i780.fxAudio)
  request.r(i781[1], i781[2], 0, i780, 'bgm1')
  return i780
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i782 = root || request.c( 'FxAudio' )
  var i783 = data
  i782.None = request.d('SoundData', i783[0], i782.None)
  i782.ClickBox = request.d('SoundData', i783[1], i782.ClickBox)
  i782.StartVoice = request.d('SoundData', i783[2], i782.StartVoice)
  i782.voice_lv52_bottle = request.d('SoundData', i783[3], i782.voice_lv52_bottle)
  i782.voice_lv52_fruit = request.d('SoundData', i783[4], i782.voice_lv52_fruit)
  i782.voice_lv52_icecup = request.d('SoundData', i783[5], i782.voice_lv52_icecup)
  i782.voice_lv52_icream = request.d('SoundData', i783[6], i782.voice_lv52_icream)
  i782.voice_lv52_ladle = request.d('SoundData', i783[7], i782.voice_lv52_ladle)
  i782.voice_lv52_milk = request.d('SoundData', i783[8], i782.voice_lv52_milk)
  i782.voice_lv52_shirt = request.d('SoundData', i783[9], i782.voice_lv52_shirt)
  i782.voice_lv52_tofu = request.d('SoundData', i783[10], i782.voice_lv52_tofu)
  i782.voice_lv52_water = request.d('SoundData', i783[11], i782.voice_lv52_water)
  i782.Correct = request.d('SoundData', i783[12], i782.Correct)
  i782.FridgeOpen = request.d('SoundData', i783[13], i782.FridgeOpen)
  i782.water = request.d('SoundData', i783[14], i782.water)
  i782.mouse = request.d('SoundData', i783[15], i782.mouse)
  i782.wrong = request.d('SoundData', i783[16], i782.wrong)
  i782.haa = request.d('SoundData', i783[17], i782.haa)
  return i782
}

Deserializers["SoundData"] = function (request, data, root) {
  var i784 = root || request.c( 'SoundData' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'clip')
  i784.repeatCount = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'clip')
  request.r(i787[2], i787[3], 0, i786, 'outputAudioMixerGroup')
  i786.playOnAwake = !!i787[4]
  i786.loop = !!i787[5]
  i786.time = i787[6]
  i786.volume = i787[7]
  i786.pitch = i787[8]
  i786.enabled = !!i787[9]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i789 = data
  i788.pivot = new pc.Vec2( i789[0], i789[1] )
  i788.anchorMin = new pc.Vec2( i789[2], i789[3] )
  i788.anchorMax = new pc.Vec2( i789[4], i789[5] )
  i788.sizeDelta = new pc.Vec2( i789[6], i789[7] )
  i788.anchoredPosition3D = new pc.Vec3( i789[8], i789[9], i789[10] )
  i788.rotation = new pc.Quat(i789[11], i789[12], i789[13], i789[14])
  i788.scale = new pc.Vec3( i789[15], i789[16], i789[17] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i791 = data
  i790.planeDistance = i791[0]
  i790.referencePixelsPerUnit = i791[1]
  i790.isFallbackOverlay = !!i791[2]
  i790.renderMode = i791[3]
  i790.renderOrder = i791[4]
  i790.sortingLayerName = i791[5]
  i790.sortingOrder = i791[6]
  i790.scaleFactor = i791[7]
  request.r(i791[8], i791[9], 0, i790, 'worldCamera')
  i790.overrideSorting = !!i791[10]
  i790.pixelPerfect = !!i791[11]
  i790.targetDisplay = i791[12]
  i790.overridePixelPerfect = !!i791[13]
  i790.enabled = !!i791[14]
  return i790
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i793 = data
  i792.m_UiScaleMode = i793[0]
  i792.m_ReferencePixelsPerUnit = i793[1]
  i792.m_ScaleFactor = i793[2]
  i792.m_ReferenceResolution = new pc.Vec2( i793[3], i793[4] )
  i792.m_ScreenMatchMode = i793[5]
  i792.m_MatchWidthOrHeight = i793[6]
  i792.m_PhysicalUnit = i793[7]
  i792.m_FallbackScreenDPI = i793[8]
  i792.m_DefaultSpriteDPI = i793[9]
  i792.m_DynamicPixelsPerUnit = i793[10]
  i792.m_PresetInfoIsWorld = !!i793[11]
  return i792
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i795 = data
  i794.m_IgnoreReversedGraphics = !!i795[0]
  i794.m_BlockingObjects = i795[1]
  i794.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i795[2] )
  return i794
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i796 = root || request.c( 'ProgressBarUI' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'fillImage')
  request.r(i797[2], i797[3], 0, i796, 'progressText')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i799 = data
  i798.cullTransparentMesh = !!i799[0]
  return i798
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.Image' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_Sprite')
  i800.m_Type = i801[2]
  i800.m_PreserveAspect = !!i801[3]
  i800.m_FillCenter = !!i801[4]
  i800.m_FillMethod = i801[5]
  i800.m_FillAmount = i801[6]
  i800.m_FillClockwise = !!i801[7]
  i800.m_FillOrigin = i801[8]
  i800.m_UseSpriteMesh = !!i801[9]
  i800.m_PixelsPerUnitMultiplier = i801[10]
  request.r(i801[11], i801[12], 0, i800, 'm_Material')
  i800.m_Maskable = !!i801[13]
  i800.m_Color = new pc.Color(i801[14], i801[15], i801[16], i801[17])
  i800.m_RaycastTarget = !!i801[18]
  i800.m_RaycastPadding = new pc.Vec4( i801[19], i801[20], i801[21], i801[22] )
  return i800
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i803 = data
  i802.m_hasFontAssetChanged = !!i803[0]
  request.r(i803[1], i803[2], 0, i802, 'm_baseMaterial')
  i802.m_maskOffset = new pc.Vec4( i803[3], i803[4], i803[5], i803[6] )
  i802.m_text = i803[7]
  i802.m_isRightToLeft = !!i803[8]
  request.r(i803[9], i803[10], 0, i802, 'm_fontAsset')
  request.r(i803[11], i803[12], 0, i802, 'm_sharedMaterial')
  var i805 = i803[13]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.m_fontSharedMaterials = i804
  request.r(i803[14], i803[15], 0, i802, 'm_fontMaterial')
  var i807 = i803[16]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i802.m_fontMaterials = i806
  i802.m_fontColor32 = UnityEngine.Color32.ConstructColor(i803[17], i803[18], i803[19], i803[20])
  i802.m_fontColor = new pc.Color(i803[21], i803[22], i803[23], i803[24])
  i802.m_enableVertexGradient = !!i803[25]
  i802.m_colorMode = i803[26]
  i802.m_fontColorGradient = request.d('TMPro.VertexGradient', i803[27], i802.m_fontColorGradient)
  request.r(i803[28], i803[29], 0, i802, 'm_fontColorGradientPreset')
  request.r(i803[30], i803[31], 0, i802, 'm_spriteAsset')
  i802.m_tintAllSprites = !!i803[32]
  request.r(i803[33], i803[34], 0, i802, 'm_StyleSheet')
  i802.m_TextStyleHashCode = i803[35]
  i802.m_overrideHtmlColors = !!i803[36]
  i802.m_faceColor = UnityEngine.Color32.ConstructColor(i803[37], i803[38], i803[39], i803[40])
  i802.m_fontSize = i803[41]
  i802.m_fontSizeBase = i803[42]
  i802.m_fontWeight = i803[43]
  i802.m_enableAutoSizing = !!i803[44]
  i802.m_fontSizeMin = i803[45]
  i802.m_fontSizeMax = i803[46]
  i802.m_fontStyle = i803[47]
  i802.m_HorizontalAlignment = i803[48]
  i802.m_VerticalAlignment = i803[49]
  i802.m_textAlignment = i803[50]
  i802.m_characterSpacing = i803[51]
  i802.m_wordSpacing = i803[52]
  i802.m_lineSpacing = i803[53]
  i802.m_lineSpacingMax = i803[54]
  i802.m_paragraphSpacing = i803[55]
  i802.m_charWidthMaxAdj = i803[56]
  i802.m_TextWrappingMode = i803[57]
  i802.m_wordWrappingRatios = i803[58]
  i802.m_overflowMode = i803[59]
  request.r(i803[60], i803[61], 0, i802, 'm_linkedTextComponent')
  request.r(i803[62], i803[63], 0, i802, 'parentLinkedComponent')
  i802.m_enableKerning = !!i803[64]
  var i809 = i803[65]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(i809[i + 0]);
  }
  i802.m_ActiveFontFeatures = i808
  i802.m_enableExtraPadding = !!i803[66]
  i802.checkPaddingRequired = !!i803[67]
  i802.m_isRichText = !!i803[68]
  i802.m_parseCtrlCharacters = !!i803[69]
  i802.m_isOrthographic = !!i803[70]
  i802.m_isCullingEnabled = !!i803[71]
  i802.m_horizontalMapping = i803[72]
  i802.m_verticalMapping = i803[73]
  i802.m_uvLineOffset = i803[74]
  i802.m_geometrySortingOrder = i803[75]
  i802.m_IsTextObjectScaleStatic = !!i803[76]
  i802.m_VertexBufferAutoSizeReduction = !!i803[77]
  i802.m_useMaxVisibleDescender = !!i803[78]
  i802.m_pageToDisplay = i803[79]
  i802.m_margin = new pc.Vec4( i803[80], i803[81], i803[82], i803[83] )
  i802.m_isUsingLegacyAnimationComponent = !!i803[84]
  i802.m_isVolumetricText = !!i803[85]
  request.r(i803[86], i803[87], 0, i802, 'm_Material')
  i802.m_EmojiFallbackSupport = !!i803[88]
  i802.m_Maskable = !!i803[89]
  i802.m_Color = new pc.Color(i803[90], i803[91], i803[92], i803[93])
  i802.m_RaycastTarget = !!i803[94]
  i802.m_RaycastPadding = new pc.Vec4( i803[95], i803[96], i803[97], i803[98] )
  return i802
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.VertexGradient' )
  var i813 = data
  i812.topLeft = new pc.Color(i813[0], i813[1], i813[2], i813[3])
  i812.topRight = new pc.Color(i813[4], i813[5], i813[6], i813[7])
  i812.bottomLeft = new pc.Color(i813[8], i813[9], i813[10], i813[11])
  i812.bottomRight = new pc.Color(i813[12], i813[13], i813[14], i813[15])
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'animatorController')
  request.r(i817[2], i817[3], 0, i816, 'avatar')
  i816.updateMode = i817[4]
  i816.hasTransformHierarchy = !!i817[5]
  i816.applyRootMotion = !!i817[6]
  var i819 = i817[7]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.humanBones = i818
  i816.enabled = !!i817[8]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i823 = data
  i822.color = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  request.r(i823[4], i823[5], 0, i822, 'sprite')
  i822.flipX = !!i823[6]
  i822.flipY = !!i823[7]
  i822.drawMode = i823[8]
  i822.size = new pc.Vec2( i823[9], i823[10] )
  i822.tileMode = i823[11]
  i822.adaptiveModeThreshold = i823[12]
  i822.maskInteraction = i823[13]
  i822.spriteSortPoint = i823[14]
  i822.enabled = !!i823[15]
  request.r(i823[16], i823[17], 0, i822, 'sharedMaterial')
  var i825 = i823[18]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[19]
  i822.shadowCastingMode = i823[20]
  i822.sortingLayerID = i823[21]
  i822.sortingOrder = i823[22]
  i822.lightmapIndex = i823[23]
  i822.lightmapSceneIndex = i823[24]
  i822.lightmapScaleOffset = new pc.Vec4( i823[25], i823[26], i823[27], i823[28] )
  i822.lightProbeUsage = i823[29]
  i822.reflectionProbeUsage = i823[30]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i827 = data
  i826.center = new pc.Vec3( i827[0], i827[1], i827[2] )
  i826.size = new pc.Vec3( i827[3], i827[4], i827[5] )
  i826.enabled = !!i827[6]
  i826.isTrigger = !!i827[7]
  request.r(i827[8], i827[9], 0, i826, 'material')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'additionalVertexStreams')
  i828.enabled = !!i829[2]
  request.r(i829[3], i829[4], 0, i828, 'sharedMaterial')
  var i831 = i829[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[6]
  i828.shadowCastingMode = i829[7]
  i828.sortingLayerID = i829[8]
  i828.sortingOrder = i829[9]
  i828.lightmapIndex = i829[10]
  i828.lightmapSceneIndex = i829[11]
  i828.lightmapScaleOffset = new pc.Vec4( i829[12], i829[13], i829[14], i829[15] )
  i828.lightProbeUsage = i829[16]
  i828.reflectionProbeUsage = i829[17]
  return i828
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TextMeshPro' )
  var i833 = data
  i832._SortingLayer = i833[0]
  i832._SortingLayerID = i833[1]
  i832._SortingOrder = i833[2]
  i832.m_hasFontAssetChanged = !!i833[3]
  request.r(i833[4], i833[5], 0, i832, 'm_renderer')
  i832.m_maskType = i833[6]
  i832.m_text = i833[7]
  i832.m_isRightToLeft = !!i833[8]
  request.r(i833[9], i833[10], 0, i832, 'm_fontAsset')
  request.r(i833[11], i833[12], 0, i832, 'm_sharedMaterial')
  var i835 = i833[13]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.m_fontSharedMaterials = i834
  request.r(i833[14], i833[15], 0, i832, 'm_fontMaterial')
  var i837 = i833[16]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i832.m_fontMaterials = i836
  i832.m_fontColor32 = UnityEngine.Color32.ConstructColor(i833[17], i833[18], i833[19], i833[20])
  i832.m_fontColor = new pc.Color(i833[21], i833[22], i833[23], i833[24])
  i832.m_enableVertexGradient = !!i833[25]
  i832.m_colorMode = i833[26]
  i832.m_fontColorGradient = request.d('TMPro.VertexGradient', i833[27], i832.m_fontColorGradient)
  request.r(i833[28], i833[29], 0, i832, 'm_fontColorGradientPreset')
  request.r(i833[30], i833[31], 0, i832, 'm_spriteAsset')
  i832.m_tintAllSprites = !!i833[32]
  request.r(i833[33], i833[34], 0, i832, 'm_StyleSheet')
  i832.m_TextStyleHashCode = i833[35]
  i832.m_overrideHtmlColors = !!i833[36]
  i832.m_faceColor = UnityEngine.Color32.ConstructColor(i833[37], i833[38], i833[39], i833[40])
  i832.m_fontSize = i833[41]
  i832.m_fontSizeBase = i833[42]
  i832.m_fontWeight = i833[43]
  i832.m_enableAutoSizing = !!i833[44]
  i832.m_fontSizeMin = i833[45]
  i832.m_fontSizeMax = i833[46]
  i832.m_fontStyle = i833[47]
  i832.m_HorizontalAlignment = i833[48]
  i832.m_VerticalAlignment = i833[49]
  i832.m_textAlignment = i833[50]
  i832.m_characterSpacing = i833[51]
  i832.m_wordSpacing = i833[52]
  i832.m_lineSpacing = i833[53]
  i832.m_lineSpacingMax = i833[54]
  i832.m_paragraphSpacing = i833[55]
  i832.m_charWidthMaxAdj = i833[56]
  i832.m_TextWrappingMode = i833[57]
  i832.m_wordWrappingRatios = i833[58]
  i832.m_overflowMode = i833[59]
  request.r(i833[60], i833[61], 0, i832, 'm_linkedTextComponent')
  request.r(i833[62], i833[63], 0, i832, 'parentLinkedComponent')
  i832.m_enableKerning = !!i833[64]
  var i839 = i833[65]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(i839[i + 0]);
  }
  i832.m_ActiveFontFeatures = i838
  i832.m_enableExtraPadding = !!i833[66]
  i832.checkPaddingRequired = !!i833[67]
  i832.m_isRichText = !!i833[68]
  i832.m_parseCtrlCharacters = !!i833[69]
  i832.m_isOrthographic = !!i833[70]
  i832.m_isCullingEnabled = !!i833[71]
  i832.m_horizontalMapping = i833[72]
  i832.m_verticalMapping = i833[73]
  i832.m_uvLineOffset = i833[74]
  i832.m_geometrySortingOrder = i833[75]
  i832.m_IsTextObjectScaleStatic = !!i833[76]
  i832.m_VertexBufferAutoSizeReduction = !!i833[77]
  i832.m_useMaxVisibleDescender = !!i833[78]
  i832.m_pageToDisplay = i833[79]
  i832.m_margin = new pc.Vec4( i833[80], i833[81], i833[82], i833[83] )
  i832.m_isUsingLegacyAnimationComponent = !!i833[84]
  i832.m_isVolumetricText = !!i833[85]
  request.r(i833[86], i833[87], 0, i832, 'm_Material')
  i832.m_EmojiFallbackSupport = !!i833[88]
  i832.m_Maskable = !!i833[89]
  i832.m_Color = new pc.Color(i833[90], i833[91], i833[92], i833[93])
  i832.m_RaycastTarget = !!i833[94]
  i832.m_RaycastPadding = new pc.Vec4( i833[95], i833[96], i833[97], i833[98] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'sharedMesh')
  var i843 = i841[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.bones = i842
  i840.updateWhenOffscreen = !!i841[3]
  i840.localBounds = i841[4]
  request.r(i841[5], i841[6], 0, i840, 'rootBone')
  var i845 = i841[7]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i845[i + 0]) );
  }
  i840.blendShapesWeights = i844
  i840.enabled = !!i841[8]
  request.r(i841[9], i841[10], 0, i840, 'sharedMaterial')
  var i847 = i841[11]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i840.sharedMaterials = i846
  i840.receiveShadows = !!i841[12]
  i840.shadowCastingMode = i841[13]
  i840.sortingLayerID = i841[14]
  i840.sortingOrder = i841[15]
  i840.lightmapIndex = i841[16]
  i840.lightmapSceneIndex = i841[17]
  i840.lightmapScaleOffset = new pc.Vec4( i841[18], i841[19], i841[20], i841[21] )
  i840.lightProbeUsage = i841[22]
  i840.reflectionProbeUsage = i841[23]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i851 = data
  i850.weight = i851[0]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i853 = data
  i852.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i853[0], i852.main)
  i852.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i853[1], i852.colorBySpeed)
  i852.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i853[2], i852.colorOverLifetime)
  i852.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i853[3], i852.emission)
  i852.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i853[4], i852.rotationBySpeed)
  i852.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i853[5], i852.rotationOverLifetime)
  i852.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i853[6], i852.shape)
  i852.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i853[7], i852.sizeBySpeed)
  i852.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i853[8], i852.sizeOverLifetime)
  i852.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i853[9], i852.textureSheetAnimation)
  i852.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i853[10], i852.velocityOverLifetime)
  i852.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i853[11], i852.noise)
  i852.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i853[12], i852.inheritVelocity)
  i852.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i853[13], i852.forceOverLifetime)
  i852.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i853[14], i852.limitVelocityOverLifetime)
  i852.useAutoRandomSeed = !!i853[15]
  i852.randomSeed = i853[16]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemMain()
  var i855 = data
  i854.duration = i855[0]
  i854.loop = !!i855[1]
  i854.prewarm = !!i855[2]
  i854.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.startDelay)
  i854.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.startLifetime)
  i854.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[5], i854.startSpeed)
  i854.startSize3D = !!i855[6]
  i854.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.startSizeX)
  i854.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.startSizeY)
  i854.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.startSizeZ)
  i854.startRotation3D = !!i855[10]
  i854.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[11], i854.startRotationX)
  i854.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[12], i854.startRotationY)
  i854.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[13], i854.startRotationZ)
  i854.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i855[14], i854.startColor)
  i854.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[15], i854.gravityModifier)
  i854.simulationSpace = i855[16]
  request.r(i855[17], i855[18], 0, i854, 'customSimulationSpace')
  i854.simulationSpeed = i855[19]
  i854.useUnscaledTime = !!i855[20]
  i854.scalingMode = i855[21]
  i854.playOnAwake = !!i855[22]
  i854.maxParticles = i855[23]
  i854.emitterVelocityMode = i855[24]
  i854.stopAction = i855[25]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxCurve()
  var i857 = data
  i856.mode = i857[0]
  i856.curveMin = new pc.AnimationCurve( { keys_flow: i857[1] } )
  i856.curveMax = new pc.AnimationCurve( { keys_flow: i857[2] } )
  i856.curveMultiplier = i857[3]
  i856.constantMin = i857[4]
  i856.constantMax = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i858 = root || new pc.MinMaxGradient()
  var i859 = data
  i858.mode = i859[0]
  i858.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[1], i858.gradientMin)
  i858.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[2], i858.gradientMax)
  i858.colorMin = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.colorMax = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i861 = data
  i860.mode = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i863[i + 0]) );
  }
  i860.colorKeys = i862
  var i865 = i861[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i865[i + 0]) );
  }
  i860.alphaKeys = i864
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemColorBySpeed()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i867[1], i866.color)
  i866.range = new pc.Vec2( i867[2], i867[3] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i871 = data
  i870.color = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.time = i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i875 = data
  i874.alpha = i875[0]
  i874.time = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemColorOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i877[1], i876.color)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemEmitter()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.rateOverTime)
  i878.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.rateOverDistance)
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i881[i + 0]) );
  }
  i878.bursts = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemBurst()
  var i885 = data
  i884.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[0], i884.count)
  i884.cycleCount = i885[1]
  i884.minCount = i885[2]
  i884.maxCount = i885[3]
  i884.repeatInterval = i885[4]
  i884.time = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  i886.range = new pc.Vec2( i887[5], i887[6] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemRotationOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemShape()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.shapeType = i891[1]
  i890.randomDirectionAmount = i891[2]
  i890.sphericalDirectionAmount = i891[3]
  i890.randomPositionAmount = i891[4]
  i890.alignToDirection = !!i891[5]
  i890.radius = i891[6]
  i890.radiusMode = i891[7]
  i890.radiusSpread = i891[8]
  i890.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[9], i890.radiusSpeed)
  i890.radiusThickness = i891[10]
  i890.angle = i891[11]
  i890.length = i891[12]
  i890.boxThickness = new pc.Vec3( i891[13], i891[14], i891[15] )
  i890.meshShapeType = i891[16]
  request.r(i891[17], i891[18], 0, i890, 'mesh')
  request.r(i891[19], i891[20], 0, i890, 'meshRenderer')
  request.r(i891[21], i891[22], 0, i890, 'skinnedMeshRenderer')
  i890.useMeshMaterialIndex = !!i891[23]
  i890.meshMaterialIndex = i891[24]
  i890.useMeshColors = !!i891[25]
  i890.normalOffset = i891[26]
  i890.arc = i891[27]
  i890.arcMode = i891[28]
  i890.arcSpread = i891[29]
  i890.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[30], i890.arcSpeed)
  i890.donutRadius = i891[31]
  i890.position = new pc.Vec3( i891[32], i891[33], i891[34] )
  i890.rotation = new pc.Vec3( i891[35], i891[36], i891[37] )
  i890.scale = new pc.Vec3( i891[38], i891[39], i891[40] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeBySpeed()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  i892.range = new pc.Vec2( i893[5], i893[6] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemSizeOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.mode = i897[1]
  i896.animation = i897[2]
  i896.numTilesX = i897[3]
  i896.numTilesY = i897[4]
  i896.useRandomRow = !!i897[5]
  i896.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[6], i896.frameOverTime)
  i896.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.startFrame)
  i896.cycleCount = i897[8]
  i896.rowIndex = i897[9]
  i896.flipU = i897[10]
  i896.flipV = i897[11]
  i896.spriteCount = i897[12]
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.sprites = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.radial)
  i902.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[5], i902.speedModifier)
  i902.space = i903[6]
  i902.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[7], i902.orbitalX)
  i902.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[8], i902.orbitalY)
  i902.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[9], i902.orbitalZ)
  i902.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[10], i902.orbitalOffsetX)
  i902.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[11], i902.orbitalOffsetY)
  i902.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[12], i902.orbitalOffsetZ)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemNoise()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.separateAxes = !!i905[1]
  i904.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.strengthX)
  i904.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.strengthY)
  i904.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[4], i904.strengthZ)
  i904.frequency = i905[5]
  i904.damping = !!i905[6]
  i904.octaveCount = i905[7]
  i904.octaveMultiplier = i905[8]
  i904.octaveScale = i905[9]
  i904.quality = i905[10]
  i904.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[11], i904.scrollSpeed)
  i904.scrollSpeedMultiplier = i905[12]
  i904.remapEnabled = !!i905[13]
  i904.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[14], i904.remapX)
  i904.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[15], i904.remapY)
  i904.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[16], i904.remapZ)
  i904.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[17], i904.positionAmount)
  i904.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[18], i904.rotationAmount)
  i904.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[19], i904.sizeAmount)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemInheritVelocity()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.mode = i907[1]
  i906.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.curve)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemForceOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.space = i909[4]
  i908.randomized = !!i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.limit)
  i910.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.limitX)
  i910.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.limitY)
  i910.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.limitZ)
  i910.dampen = i911[5]
  i910.separateAxes = !!i911[6]
  i910.space = i911[7]
  i910.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.drag)
  i910.multiplyDragByParticleSize = !!i911[9]
  i910.multiplyDragByParticleVelocity = !!i911[10]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'mesh')
  i912.meshCount = i913[2]
  i912.activeVertexStreamsCount = i913[3]
  i912.alignment = i913[4]
  i912.renderMode = i913[5]
  i912.sortMode = i913[6]
  i912.lengthScale = i913[7]
  i912.velocityScale = i913[8]
  i912.cameraVelocityScale = i913[9]
  i912.normalDirection = i913[10]
  i912.sortingFudge = i913[11]
  i912.minParticleSize = i913[12]
  i912.maxParticleSize = i913[13]
  i912.pivot = new pc.Vec3( i913[14], i913[15], i913[16] )
  request.r(i913[17], i913[18], 0, i912, 'trailMaterial')
  i912.applyActiveColorSpace = !!i913[19]
  i912.enabled = !!i913[20]
  request.r(i913[21], i913[22], 0, i912, 'sharedMaterial')
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[24]
  i912.shadowCastingMode = i913[25]
  i912.sortingLayerID = i913[26]
  i912.sortingOrder = i913[27]
  i912.lightmapIndex = i913[28]
  i912.lightmapSceneIndex = i913[29]
  i912.lightmapScaleOffset = new pc.Vec4( i913[30], i913[31], i913[32], i913[33] )
  i912.lightProbeUsage = i913[34]
  i912.reflectionProbeUsage = i913[35]
  return i912
}

Deserializers["ItemController"] = function (request, data, root) {
  var i916 = root || request.c( 'ItemController' )
  var i917 = data
  i916.itemType = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'dropTarget')
  i916.dropDistanceThreshold = i917[3]
  i916.hideSpriteOnDrop = !!i917[4]
  i916.onClick = request.d('UnityEngine.Events.UnityEvent', i917[5], i916.onClick)
  i916.onDrop = request.d('UnityEngine.Events.UnityEvent', i917[6], i916.onDrop)
  i916.onDragStart = request.d('UnityEngine.Events.UnityEvent', i917[7], i916.onDragStart)
  i916.onReturn = request.d('UnityEngine.Events.UnityEvent', i917[8], i916.onReturn)
  i916.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i917[9], i916.onAnimFinished)
  var i919 = i917[10]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('AnimObjectData', i919[i + 0]));
  }
  i916.animationObjects = i918
  var i921 = i917[11]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(i921[i + 0]);
  }
  i916.fxSoundsStartAnim = i920
  var i923 = i917[12]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(i923[i + 0]);
  }
  i916.fxSoundsAfterAnim = i922
  return i916
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i926 = root || request.c( 'AnimObjectData' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'animObj')
  i926.delayFromStart = i927[2]
  i926.durationToDeactivate = i927[3]
  return i926
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i930 = root || request.c( 'ItemGraphic' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i930.spriteRenderers = i932
  i930.sortingOrderOffset = i931[1]
  return i930
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i936 = root || request.c( 'ItemMovement' )
  var i937 = data
  return i936
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Text' )
  var i939 = data
  i938.m_FontData = request.d('UnityEngine.UI.FontData', i939[0], i938.m_FontData)
  i938.m_Text = i939[1]
  request.r(i939[2], i939[3], 0, i938, 'm_Material')
  i938.m_Maskable = !!i939[4]
  i938.m_Color = new pc.Color(i939[5], i939[6], i939[7], i939[8])
  i938.m_RaycastTarget = !!i939[9]
  i938.m_RaycastPadding = new pc.Vec4( i939[10], i939[11], i939[12], i939[13] )
  return i938
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.FontData' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_Font')
  i940.m_FontSize = i941[2]
  i940.m_FontStyle = i941[3]
  i940.m_BestFit = !!i941[4]
  i940.m_MinSize = i941[5]
  i940.m_MaxSize = i941[6]
  i940.m_Alignment = i941[7]
  i940.m_AlignByGeometry = !!i941[8]
  i940.m_RichText = !!i941[9]
  i940.m_HorizontalOverflow = i941[10]
  i940.m_VerticalOverflow = i941[11]
  i940.m_LineSpacing = i941[12]
  return i940
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i942 = root || request.c( 'PlaySound' )
  var i943 = data
  i942.sound1 = i943[0]
  i942.sound2 = i943[1]
  i942.sound3 = i943[2]
  return i942
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_FirstSelected')
  i944.m_sendNavigationEvents = !!i945[2]
  i944.m_DragThreshold = i945[3]
  return i944
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i947 = data
  i946.m_HorizontalAxis = i947[0]
  i946.m_VerticalAxis = i947[1]
  i946.m_SubmitButton = i947[2]
  i946.m_CancelButton = i947[3]
  i946.m_InputActionsPerSecond = i947[4]
  i946.m_RepeatDelay = i947[5]
  i946.m_ForceModuleActive = !!i947[6]
  i946.m_SendPointerHoverToParent = !!i947[7]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i949 = data
  i948.ambientIntensity = i949[0]
  i948.reflectionIntensity = i949[1]
  i948.ambientMode = i949[2]
  i948.ambientLight = new pc.Color(i949[3], i949[4], i949[5], i949[6])
  i948.ambientSkyColor = new pc.Color(i949[7], i949[8], i949[9], i949[10])
  i948.ambientGroundColor = new pc.Color(i949[11], i949[12], i949[13], i949[14])
  i948.ambientEquatorColor = new pc.Color(i949[15], i949[16], i949[17], i949[18])
  i948.fogColor = new pc.Color(i949[19], i949[20], i949[21], i949[22])
  i948.fogEndDistance = i949[23]
  i948.fogStartDistance = i949[24]
  i948.fogDensity = i949[25]
  i948.fog = !!i949[26]
  request.r(i949[27], i949[28], 0, i948, 'skybox')
  i948.fogMode = i949[29]
  var i951 = i949[30]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i951[i + 0]) );
  }
  i948.lightmaps = i950
  i948.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i949[31], i948.lightProbes)
  i948.lightmapsMode = i949[32]
  i948.mixedBakeMode = i949[33]
  i948.environmentLightingMode = i949[34]
  i948.ambientProbe = new pc.SphericalHarmonicsL2(i949[35])
  i948.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i949[36])
  i948.useReferenceAmbientProbe = !!i949[37]
  request.r(i949[38], i949[39], 0, i948, 'customReflection')
  request.r(i949[40], i949[41], 0, i948, 'defaultReflection')
  i948.defaultReflectionMode = i949[42]
  i948.defaultReflectionResolution = i949[43]
  i948.sunLightObjectId = i949[44]
  i948.pixelLightCount = i949[45]
  i948.defaultReflectionHDR = !!i949[46]
  i948.hasLightDataAsset = !!i949[47]
  i948.hasManualGenerate = !!i949[48]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'lightmapColor')
  request.r(i955[2], i955[3], 0, i954, 'lightmapDirection')
  request.r(i955[4], i955[5], 0, i954, 'shadowMask')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i956 = root || new UnityEngine.LightProbes()
  var i957 = data
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i967[i + 0]));
  }
  i964.ShaderCompilationErrors = i966
  i964.name = i965[1]
  i964.guid = i965[2]
  var i969 = i965[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.shaderDefinedKeywords = i968
  var i971 = i965[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i971[i + 0]) );
  }
  i964.passes = i970
  var i973 = i965[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i973[i + 0]) );
  }
  i964.usePasses = i972
  var i975 = i965[6]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i975[i + 0]) );
  }
  i964.defaultParameterValues = i974
  request.r(i965[7], i965[8], 0, i964, 'unityFallbackShader')
  i964.readDepth = !!i965[9]
  i964.hasDepthOnlyPass = !!i965[10]
  i964.isCreatedByShaderGraph = !!i965[11]
  i964.disableBatching = !!i965[12]
  i964.compiled = !!i965[13]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i979 = data
  i978.shaderName = i979[0]
  i978.errorMessage = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i984 = root || new pc.UnityShaderPass()
  var i985 = data
  i984.id = i985[0]
  i984.subShaderIndex = i985[1]
  i984.name = i985[2]
  i984.passType = i985[3]
  i984.grabPassTextureName = i985[4]
  i984.usePass = !!i985[5]
  i984.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[6], i984.zTest)
  i984.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[7], i984.zWrite)
  i984.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[8], i984.culling)
  i984.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i985[9], i984.blending)
  i984.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i985[10], i984.alphaBlending)
  i984.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[11], i984.colorWriteMask)
  i984.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[12], i984.offsetUnits)
  i984.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[13], i984.offsetFactor)
  i984.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[14], i984.stencilRef)
  i984.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[15], i984.stencilReadMask)
  i984.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[16], i984.stencilWriteMask)
  i984.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[17], i984.stencilOp)
  i984.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[18], i984.stencilOpFront)
  i984.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i985[19], i984.stencilOpBack)
  var i987 = i985[20]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i987[i + 0]) );
  }
  i984.tags = i986
  var i989 = i985[21]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.passDefinedKeywords = i988
  var i991 = i985[22]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i991[i + 0]) );
  }
  i984.passDefinedKeywordGroups = i990
  var i993 = i985[23]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i993[i + 0]) );
  }
  i984.variants = i992
  var i995 = i985[24]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i995[i + 0]) );
  }
  i984.excludedVariants = i994
  i984.hasDepthReader = !!i985[25]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i997 = data
  i996.val = i997[0]
  i996.name = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i999 = data
  i998.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[0], i998.src)
  i998.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[1], i998.dst)
  i998.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[2], i998.op)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1001 = data
  i1000.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[0], i1000.pass)
  i1000.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[1], i1000.fail)
  i1000.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[2], i1000.zFail)
  i1000.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1001[3], i1000.comp)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.value = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1008.keywords = i1010
  i1008.hasDiscard = !!i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1015 = data
  i1014.passId = i1015[0]
  i1014.subShaderIndex = i1015[1]
  var i1017 = i1015[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1014.keywords = i1016
  i1014.vertexProgram = i1015[3]
  i1014.fragmentProgram = i1015[4]
  i1014.exportedForWebGl2 = !!i1015[5]
  i1014.readDepth = !!i1015[6]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'shader')
  i1020.pass = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.type = i1025[1]
  i1024.value = new pc.Vec4( i1025[2], i1025[3], i1025[4], i1025[5] )
  i1024.textureValue = i1025[6]
  i1024.shaderPropertyFlag = i1025[7]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1027 = data
  i1026.name = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'texture')
  i1026.aabb = i1027[3]
  i1026.vertices = i1027[4]
  i1026.triangles = i1027[5]
  i1026.textureRect = UnityEngine.Rect.MinMaxRect(i1027[6], i1027[7], i1027[8], i1027[9])
  i1026.packedRect = UnityEngine.Rect.MinMaxRect(i1027[10], i1027[11], i1027[12], i1027[13])
  i1026.border = new pc.Vec4( i1027[14], i1027[15], i1027[16], i1027[17] )
  i1026.transparency = i1027[18]
  i1026.bounds = i1027[19]
  i1026.pixelsPerUnit = i1027[20]
  i1026.textureWidth = i1027[21]
  i1026.textureHeight = i1027[22]
  i1026.nativeSize = new pc.Vec2( i1027[23], i1027[24] )
  i1026.pivot = new pc.Vec2( i1027[25], i1027[26] )
  i1026.textureRectOffset = new pc.Vec2( i1027[27], i1027[28] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1029 = data
  i1028.name = i1029[0]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.wrapMode = i1031[1]
  i1030.isLooping = !!i1031[2]
  i1030.length = i1031[3]
  var i1033 = i1031[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1033[i + 0]) );
  }
  i1030.curves = i1032
  var i1035 = i1031[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1035[i + 0]) );
  }
  i1030.events = i1034
  i1030.halfPrecision = !!i1031[6]
  i1030._frameRate = i1031[7]
  i1030.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1031[8], i1030.localBounds)
  i1030.hasMuscleCurves = !!i1031[9]
  var i1037 = i1031[10]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1030.clipMuscleConstant = i1036
  i1030.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1031[11], i1030.clipBindingConstant)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1041 = data
  i1040.path = i1041[0]
  i1040.hash = i1041[1]
  i1040.componentType = i1041[2]
  i1040.property = i1041[3]
  i1040.keys = i1041[4]
  var i1043 = i1041[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1043[i + 0]) );
  }
  i1040.objectReferenceKeys = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1047 = data
  i1046.time = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'value')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1051 = data
  i1050.functionName = i1051[0]
  i1050.floatParameter = i1051[1]
  i1050.intParameter = i1051[2]
  i1050.stringParameter = i1051[3]
  request.r(i1051[4], i1051[5], 0, i1050, 'objectReferenceParameter')
  i1050.time = i1051[6]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1053 = data
  i1052.center = new pc.Vec3( i1053[0], i1053[1], i1053[2] )
  i1052.extends = new pc.Vec3( i1053[3], i1053[4], i1053[5] )
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1056.genericBindings = i1058
  var i1061 = i1057[1]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.pptrCurveMapping = i1060
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.ascent = i1063[1]
  i1062.originalLineHeight = i1063[2]
  i1062.fontSize = i1063[3]
  var i1065 = i1063[4]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1065[i + 0]) );
  }
  i1062.characterInfo = i1064
  request.r(i1063[5], i1063[6], 0, i1062, 'texture')
  i1062.originalFontSize = i1063[7]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1069 = data
  i1068.index = i1069[0]
  i1068.advance = i1069[1]
  i1068.bearing = i1069[2]
  i1068.glyphWidth = i1069[3]
  i1068.glyphHeight = i1069[4]
  i1068.minX = i1069[5]
  i1068.maxX = i1069[6]
  i1068.minY = i1069[7]
  i1068.maxY = i1069[8]
  i1068.uvBottomLeftX = i1069[9]
  i1068.uvBottomLeftY = i1069[10]
  i1068.uvBottomRightX = i1069[11]
  i1068.uvBottomRightY = i1069[12]
  i1068.uvTopLeftX = i1069[13]
  i1068.uvTopLeftY = i1069[14]
  i1068.uvTopRightX = i1069[15]
  i1068.uvTopRightY = i1069[16]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1071 = data
  i1070.name = i1071[0]
  var i1073 = i1071[1]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1073[i + 0]) );
  }
  i1070.layers = i1072
  var i1075 = i1071[2]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1075[i + 0]) );
  }
  i1070.parameters = i1074
  i1070.animationClips = i1071[3]
  i1070.avatarUnsupported = i1071[4]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.defaultWeight = i1079[1]
  i1078.blendingMode = i1079[2]
  i1078.avatarMask = i1079[3]
  i1078.syncedLayerIndex = i1079[4]
  i1078.syncedLayerAffectsTiming = !!i1079[5]
  i1078.syncedLayers = i1079[6]
  i1078.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1079[7], i1078.stateMachine)
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1081 = data
  i1080.id = i1081[0]
  i1080.name = i1081[1]
  i1080.path = i1081[2]
  var i1083 = i1081[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1083[i + 0]) );
  }
  i1080.states = i1082
  var i1085 = i1081[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1085[i + 0]) );
  }
  i1080.machines = i1084
  var i1087 = i1081[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1087[i + 0]) );
  }
  i1080.entryStateTransitions = i1086
  var i1089 = i1081[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1089[i + 0]) );
  }
  i1080.exitStateTransitions = i1088
  var i1091 = i1081[7]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1091[i + 0]) );
  }
  i1080.anyStateTransitions = i1090
  i1080.defaultStateId = i1081[8]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.cycleOffset = i1095[2]
  i1094.cycleOffsetParameter = i1095[3]
  i1094.cycleOffsetParameterActive = !!i1095[4]
  i1094.mirror = !!i1095[5]
  i1094.mirrorParameter = i1095[6]
  i1094.mirrorParameterActive = !!i1095[7]
  i1094.motionId = i1095[8]
  i1094.nameHash = i1095[9]
  i1094.fullPathHash = i1095[10]
  i1094.speed = i1095[11]
  i1094.speedParameter = i1095[12]
  i1094.speedParameterActive = !!i1095[13]
  i1094.tag = i1095[14]
  i1094.tagHash = i1095[15]
  i1094.writeDefaultValues = !!i1095[16]
  var i1097 = i1095[17]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.behaviours = i1096
  var i1099 = i1095[18]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1099[i + 0]) );
  }
  i1094.transitions = i1098
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1105 = data
  i1104.fullPath = i1105[0]
  i1104.canTransitionToSelf = !!i1105[1]
  i1104.duration = i1105[2]
  i1104.exitTime = i1105[3]
  i1104.hasExitTime = !!i1105[4]
  i1104.hasFixedDuration = !!i1105[5]
  i1104.interruptionSource = i1105[6]
  i1104.offset = i1105[7]
  i1104.orderedInterruption = !!i1105[8]
  i1104.destinationStateId = i1105[9]
  i1104.isExit = !!i1105[10]
  i1104.mute = !!i1105[11]
  i1104.solo = !!i1105[12]
  var i1107 = i1105[13]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1107[i + 0]) );
  }
  i1104.conditions = i1106
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1113 = data
  i1112.destinationStateId = i1113[0]
  i1112.isExit = !!i1113[1]
  i1112.mute = !!i1113[2]
  i1112.solo = !!i1113[3]
  var i1115 = i1113[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1115[i + 0]) );
  }
  i1112.conditions = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1119 = data
  i1118.mode = i1119[0]
  i1118.parameter = i1119[1]
  i1118.threshold = i1119[2]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1123 = data
  i1122.defaultBool = !!i1123[0]
  i1122.defaultFloat = i1123[1]
  i1122.defaultInt = i1123[2]
  i1122.name = i1123[3]
  i1122.nameHash = i1123[4]
  i1122.type = i1123[5]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.bytes64 = i1125[1]
  i1124.data = i1125[2]
  return i1124
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1127 = data
  i1126.normalStyle = i1127[0]
  i1126.normalSpacingOffset = i1127[1]
  i1126.boldStyle = i1127[2]
  i1126.boldSpacing = i1127[3]
  i1126.italicStyle = i1127[4]
  i1126.tabSize = i1127[5]
  request.r(i1127[6], i1127[7], 0, i1126, 'atlas')
  i1126.m_SourceFontFileGUID = i1127[8]
  i1126.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1127[9], i1126.m_CreationSettings)
  request.r(i1127[10], i1127[11], 0, i1126, 'm_SourceFontFile')
  i1126.m_SourceFontFilePath = i1127[12]
  i1126.m_AtlasPopulationMode = i1127[13]
  i1126.InternalDynamicOS = !!i1127[14]
  var i1129 = i1127[15]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.Glyph', i1129[i + 0]));
  }
  i1126.m_GlyphTable = i1128
  var i1131 = i1127[16]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_Character', i1131[i + 0]));
  }
  i1126.m_CharacterTable = i1130
  var i1133 = i1127[17]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 2, i1132, '')
  }
  i1126.m_AtlasTextures = i1132
  i1126.m_AtlasTextureIndex = i1127[18]
  i1126.m_IsMultiAtlasTexturesEnabled = !!i1127[19]
  i1126.m_GetFontFeatures = !!i1127[20]
  i1126.m_ClearDynamicDataOnBuild = !!i1127[21]
  i1126.m_AtlasWidth = i1127[22]
  i1126.m_AtlasHeight = i1127[23]
  i1126.m_AtlasPadding = i1127[24]
  i1126.m_AtlasRenderMode = i1127[25]
  var i1135 = i1127[26]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('UnityEngine.TextCore.GlyphRect', i1135[i + 0]));
  }
  i1126.m_UsedGlyphRects = i1134
  var i1137 = i1127[27]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('UnityEngine.TextCore.GlyphRect', i1137[i + 0]));
  }
  i1126.m_FreeGlyphRects = i1136
  i1126.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1127[28], i1126.m_FontFeatureTable)
  i1126.m_ShouldReimportFontFeatures = !!i1127[29]
  var i1139 = i1127[30]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1126.m_FallbackFontAssetTable = i1138
  var i1141 = i1127[31]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('TMPro.TMP_FontWeightPair', i1141[i + 0]) );
  }
  i1126.m_FontWeightTable = i1140
  var i1143 = i1127[32]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('TMPro.TMP_FontWeightPair', i1143[i + 0]) );
  }
  i1126.fontWeights = i1142
  i1126.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1127[33], i1126.m_fontInfo)
  var i1145 = i1127[34]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Glyph', i1145[i + 0]));
  }
  i1126.m_glyphInfoList = i1144
  i1126.m_KerningTable = request.d('TMPro.KerningTable', i1127[35], i1126.m_KerningTable)
  var i1147 = i1127[36]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1126.fallbackFontAssets = i1146
  i1126.m_Version = i1127[37]
  i1126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1127[38], i1126.m_FaceInfo)
  request.r(i1127[39], i1127[40], 0, i1126, 'm_Material')
  return i1126
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1149 = data
  i1148.sourceFontFileName = i1149[0]
  i1148.sourceFontFileGUID = i1149[1]
  i1148.faceIndex = i1149[2]
  i1148.pointSizeSamplingMode = i1149[3]
  i1148.pointSize = i1149[4]
  i1148.padding = i1149[5]
  i1148.paddingMode = i1149[6]
  i1148.packingMode = i1149[7]
  i1148.atlasWidth = i1149[8]
  i1148.atlasHeight = i1149[9]
  i1148.characterSetSelectionMode = i1149[10]
  i1148.characterSequence = i1149[11]
  i1148.referencedFontAssetGUID = i1149[12]
  i1148.referencedTextAssetGUID = i1149[13]
  i1148.fontStyle = i1149[14]
  i1148.fontStyleModifier = i1149[15]
  i1148.renderMode = i1149[16]
  i1148.includeFontFeatures = !!i1149[17]
  return i1148
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1153 = data
  i1152.m_Index = i1153[0]
  i1152.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1153[1], i1152.m_Metrics)
  i1152.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1153[2], i1152.m_GlyphRect)
  i1152.m_Scale = i1153[3]
  i1152.m_AtlasIndex = i1153[4]
  i1152.m_ClassDefinitionType = i1153[5]
  return i1152
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1155 = data
  i1154.m_Width = i1155[0]
  i1154.m_Height = i1155[1]
  i1154.m_HorizontalBearingX = i1155[2]
  i1154.m_HorizontalBearingY = i1155[3]
  i1154.m_HorizontalAdvance = i1155[4]
  return i1154
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1157 = data
  i1156.m_X = i1157[0]
  i1156.m_Y = i1157[1]
  i1156.m_Width = i1157[2]
  i1156.m_Height = i1157[3]
  return i1156
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_Character' )
  var i1161 = data
  i1160.m_ElementType = i1161[0]
  i1160.m_Unicode = i1161[1]
  i1160.m_GlyphIndex = i1161[2]
  i1160.m_Scale = i1161[3]
  return i1160
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.MultipleSubstitutionRecord', i1169[i + 0]));
  }
  i1166.m_MultipleSubstitutionRecords = i1168
  var i1171 = i1167[1]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.LigatureSubstitutionRecord', i1171[i + 0]));
  }
  i1166.m_LigatureSubstitutionRecords = i1170
  var i1173 = i1167[2]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1173[i + 0]));
  }
  i1166.m_GlyphPairAdjustmentRecords = i1172
  var i1175 = i1167[3]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1175[i + 0]));
  }
  i1166.m_MarkToBaseAdjustmentRecords = i1174
  var i1177 = i1167[4]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1177[i + 0]));
  }
  i1166.m_MarkToMarkAdjustmentRecords = i1176
  return i1166
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1181 = data
  i1180.m_TargetGlyphID = i1181[0]
  i1180.m_SubstituteGlyphIDs = i1181[1]
  return i1180
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1185 = data
  i1184.m_ComponentGlyphIDs = i1185[0]
  i1184.m_LigatureGlyphID = i1185[1]
  return i1184
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1189 = data
  i1188.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1189[0], i1188.m_FirstAdjustmentRecord)
  i1188.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1189[1], i1188.m_SecondAdjustmentRecord)
  i1188.m_FeatureLookupFlags = i1189[2]
  return i1188
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1193 = data
  i1192.m_BaseGlyphID = i1193[0]
  i1192.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1193[1], i1192.m_BaseGlyphAnchorPoint)
  i1192.m_MarkGlyphID = i1193[2]
  i1192.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1193[3], i1192.m_MarkPositionAdjustment)
  return i1192
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1197 = data
  i1196.m_BaseMarkGlyphID = i1197[0]
  i1196.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1197[1], i1196.m_BaseMarkGlyphAnchorPoint)
  i1196.m_CombiningMarkGlyphID = i1197[2]
  i1196.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1197[3], i1196.m_CombiningMarkPositionAdjustment)
  return i1196
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'regularTypeface')
  request.r(i1203[2], i1203[3], 0, i1202, 'italicTypeface')
  return i1202
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1205 = data
  i1204.Name = i1205[0]
  i1204.PointSize = i1205[1]
  i1204.Scale = i1205[2]
  i1204.CharacterCount = i1205[3]
  i1204.LineHeight = i1205[4]
  i1204.Baseline = i1205[5]
  i1204.Ascender = i1205[6]
  i1204.CapHeight = i1205[7]
  i1204.Descender = i1205[8]
  i1204.CenterLine = i1205[9]
  i1204.SuperscriptOffset = i1205[10]
  i1204.SubscriptOffset = i1205[11]
  i1204.SubSize = i1205[12]
  i1204.Underline = i1205[13]
  i1204.UnderlineThickness = i1205[14]
  i1204.strikethrough = i1205[15]
  i1204.strikethroughThickness = i1205[16]
  i1204.TabWidth = i1205[17]
  i1204.Padding = i1205[18]
  i1204.AtlasWidth = i1205[19]
  i1204.AtlasHeight = i1205[20]
  return i1204
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1209 = data
  i1208.id = i1209[0]
  i1208.x = i1209[1]
  i1208.y = i1209[2]
  i1208.width = i1209[3]
  i1208.height = i1209[4]
  i1208.xOffset = i1209[5]
  i1208.yOffset = i1209[6]
  i1208.xAdvance = i1209[7]
  i1208.scale = i1209[8]
  return i1208
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.KerningTable' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.KerningPair', i1213[i + 0]));
  }
  i1210.kerningPairs = i1212
  return i1210
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.KerningPair' )
  var i1217 = data
  i1216.xOffset = i1217[0]
  i1216.m_FirstGlyph = i1217[1]
  i1216.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1217[2], i1216.m_FirstGlyphAdjustments)
  i1216.m_SecondGlyph = i1217[3]
  i1216.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1217[4], i1216.m_SecondGlyphAdjustments)
  i1216.m_IgnoreSpacingAdjustments = !!i1217[5]
  return i1216
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1219 = data
  i1218.m_FaceIndex = i1219[0]
  i1218.m_FamilyName = i1219[1]
  i1218.m_StyleName = i1219[2]
  i1218.m_PointSize = i1219[3]
  i1218.m_Scale = i1219[4]
  i1218.m_UnitsPerEM = i1219[5]
  i1218.m_LineHeight = i1219[6]
  i1218.m_AscentLine = i1219[7]
  i1218.m_CapLine = i1219[8]
  i1218.m_MeanLine = i1219[9]
  i1218.m_Baseline = i1219[10]
  i1218.m_DescentLine = i1219[11]
  i1218.m_SuperscriptOffset = i1219[12]
  i1218.m_SuperscriptSize = i1219[13]
  i1218.m_SubscriptOffset = i1219[14]
  i1218.m_SubscriptSize = i1219[15]
  i1218.m_UnderlineOffset = i1219[16]
  i1218.m_UnderlineThickness = i1219[17]
  i1218.m_StrikethroughOffset = i1219[18]
  i1218.m_StrikethroughThickness = i1219[19]
  i1218.m_TabWidth = i1219[20]
  return i1218
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1221 = data
  i1220.m_GlyphIndex = i1221[0]
  i1220.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1221[1], i1220.m_GlyphValueRecord)
  return i1220
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1223 = data
  i1222.m_XPlacement = i1223[0]
  i1222.m_YPlacement = i1223[1]
  i1222.m_XAdvance = i1223[2]
  i1222.m_YAdvance = i1223[3]
  return i1222
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Settings' )
  var i1225 = data
  i1224.assetVersion = i1225[0]
  i1224.m_TextWrappingMode = i1225[1]
  i1224.m_enableKerning = !!i1225[2]
  var i1227 = i1225[3]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(i1227[i + 0]);
  }
  i1224.m_ActiveFontFeatures = i1226
  i1224.m_enableExtraPadding = !!i1225[4]
  i1224.m_enableTintAllSprites = !!i1225[5]
  i1224.m_enableParseEscapeCharacters = !!i1225[6]
  i1224.m_EnableRaycastTarget = !!i1225[7]
  i1224.m_GetFontFeaturesAtRuntime = !!i1225[8]
  i1224.m_missingGlyphCharacter = i1225[9]
  i1224.m_ClearDynamicDataOnBuild = !!i1225[10]
  i1224.m_warningsDisabled = !!i1225[11]
  request.r(i1225[12], i1225[13], 0, i1224, 'm_defaultFontAsset')
  i1224.m_defaultFontAssetPath = i1225[14]
  i1224.m_defaultFontSize = i1225[15]
  i1224.m_defaultAutoSizeMinRatio = i1225[16]
  i1224.m_defaultAutoSizeMaxRatio = i1225[17]
  i1224.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1225[18], i1225[19] )
  i1224.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1225[20], i1225[21] )
  i1224.m_autoSizeTextContainer = !!i1225[22]
  i1224.m_IsTextObjectScaleStatic = !!i1225[23]
  var i1229 = i1225[24]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1224.m_fallbackFontAssets = i1228
  i1224.m_matchMaterialPreset = !!i1225[25]
  i1224.m_HideSubTextObjects = !!i1225[26]
  request.r(i1225[27], i1225[28], 0, i1224, 'm_defaultSpriteAsset')
  i1224.m_defaultSpriteAssetPath = i1225[29]
  i1224.m_enableEmojiSupport = !!i1225[30]
  i1224.m_MissingCharacterSpriteUnicode = i1225[31]
  var i1231 = i1225[32]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1224.m_EmojiFallbackTextAssets = i1230
  i1224.m_defaultColorGradientPresetsPath = i1225[33]
  request.r(i1225[34], i1225[35], 0, i1224, 'm_defaultStyleSheet')
  i1224.m_StyleSheetsResourcePath = i1225[36]
  request.r(i1225[37], i1225[38], 0, i1224, 'm_leadingCharacters')
  request.r(i1225[39], i1225[40], 0, i1224, 'm_followingCharacters')
  i1224.m_UseModernHangulLineBreakingRules = !!i1225[41]
  return i1224
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'spriteSheet')
  var i1237 = i1235[2]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Sprite', i1237[i + 0]));
  }
  i1234.spriteInfoList = i1236
  var i1239 = i1235[3]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1234.fallbackSpriteAssets = i1238
  var i1241 = i1235[4]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_SpriteCharacter', i1241[i + 0]));
  }
  i1234.m_SpriteCharacterTable = i1240
  var i1243 = i1235[5]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_SpriteGlyph', i1243[i + 0]));
  }
  i1234.m_GlyphTable = i1242
  i1234.m_Version = i1235[6]
  i1234.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1235[7], i1234.m_FaceInfo)
  request.r(i1235[8], i1235[9], 0, i1234, 'm_Material')
  return i1234
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.hashCode = i1247[1]
  i1246.unicode = i1247[2]
  i1246.pivot = new pc.Vec2( i1247[3], i1247[4] )
  request.r(i1247[5], i1247[6], 0, i1246, 'sprite')
  i1246.id = i1247[7]
  i1246.x = i1247[8]
  i1246.y = i1247[9]
  i1246.width = i1247[10]
  i1246.height = i1247[11]
  i1246.xOffset = i1247[12]
  i1246.yOffset = i1247[13]
  i1246.xAdvance = i1247[14]
  i1246.scale = i1247[15]
  return i1246
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1253 = data
  i1252.m_Name = i1253[0]
  i1252.m_ElementType = i1253[1]
  i1252.m_Unicode = i1253[2]
  i1252.m_GlyphIndex = i1253[3]
  i1252.m_Scale = i1253[4]
  return i1252
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'sprite')
  i1256.m_Index = i1257[2]
  i1256.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1257[3], i1256.m_Metrics)
  i1256.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1257[4], i1256.m_GlyphRect)
  i1256.m_Scale = i1257[5]
  i1256.m_AtlasIndex = i1257[6]
  i1256.m_ClassDefinitionType = i1257[7]
  return i1256
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_Style', i1261[i + 0]));
  }
  i1258.m_StyleList = i1260
  return i1258
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_Style' )
  var i1265 = data
  i1264.m_Name = i1265[0]
  i1264.m_HashCode = i1265[1]
  i1264.m_OpeningDefinition = i1265[2]
  i1264.m_ClosingDefinition = i1265[3]
  i1264.m_OpeningTagArray = i1265[4]
  i1264.m_ClosingTagArray = i1265[5]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1269[i + 0]) );
  }
  i1266.files = i1268
  i1266.componentToPrefabIds = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1273 = data
  i1272.path = i1273[0]
  request.r(i1273[1], i1273[2], 0, i1272, 'unityObject')
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1277[i + 0]) );
  }
  i1274.scriptsExecutionOrder = i1276
  var i1279 = i1275[1]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1279[i + 0]) );
  }
  i1274.sortingLayers = i1278
  var i1281 = i1275[2]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1281[i + 0]) );
  }
  i1274.cullingLayers = i1280
  i1274.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1275[3], i1274.timeSettings)
  i1274.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1275[4], i1274.physicsSettings)
  i1274.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1275[5], i1274.physics2DSettings)
  i1274.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1275[6], i1274.qualitySettings)
  i1274.enableRealtimeShadows = !!i1275[7]
  i1274.enableAutoInstancing = !!i1275[8]
  i1274.enableStaticBatching = !!i1275[9]
  i1274.enableDynamicBatching = !!i1275[10]
  i1274.lightmapEncodingQuality = i1275[11]
  i1274.desiredColorSpace = i1275[12]
  var i1283 = i1275[13]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1274.allTags = i1282
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.value = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1291 = data
  i1290.id = i1291[0]
  i1290.name = i1291[1]
  i1290.value = i1291[2]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.name = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1297 = data
  i1296.fixedDeltaTime = i1297[0]
  i1296.maximumDeltaTime = i1297[1]
  i1296.timeScale = i1297[2]
  i1296.maximumParticleTimestep = i1297[3]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1299 = data
  i1298.gravity = new pc.Vec3( i1299[0], i1299[1], i1299[2] )
  i1298.defaultSolverIterations = i1299[3]
  i1298.bounceThreshold = i1299[4]
  i1298.autoSyncTransforms = !!i1299[5]
  i1298.autoSimulation = !!i1299[6]
  var i1301 = i1299[7]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1301[i + 0]) );
  }
  i1298.collisionMatrix = i1300
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1305 = data
  i1304.enabled = !!i1305[0]
  i1304.layerId = i1305[1]
  i1304.otherLayerId = i1305[2]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'material')
  i1306.gravity = new pc.Vec2( i1307[2], i1307[3] )
  i1306.positionIterations = i1307[4]
  i1306.velocityIterations = i1307[5]
  i1306.velocityThreshold = i1307[6]
  i1306.maxLinearCorrection = i1307[7]
  i1306.maxAngularCorrection = i1307[8]
  i1306.maxTranslationSpeed = i1307[9]
  i1306.maxRotationSpeed = i1307[10]
  i1306.baumgarteScale = i1307[11]
  i1306.baumgarteTOIScale = i1307[12]
  i1306.timeToSleep = i1307[13]
  i1306.linearSleepTolerance = i1307[14]
  i1306.angularSleepTolerance = i1307[15]
  i1306.defaultContactOffset = i1307[16]
  i1306.autoSimulation = !!i1307[17]
  i1306.queriesHitTriggers = !!i1307[18]
  i1306.queriesStartInColliders = !!i1307[19]
  i1306.callbacksOnDisable = !!i1307[20]
  i1306.reuseCollisionCallbacks = !!i1307[21]
  i1306.autoSyncTransforms = !!i1307[22]
  var i1309 = i1307[23]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1309[i + 0]) );
  }
  i1306.collisionMatrix = i1308
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.layerId = i1313[1]
  i1312.otherLayerId = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1317[i + 0]) );
  }
  i1314.qualityLevels = i1316
  var i1319 = i1315[1]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1314.names = i1318
  i1314.shadows = i1315[2]
  i1314.anisotropicFiltering = i1315[3]
  i1314.antiAliasing = i1315[4]
  i1314.lodBias = i1315[5]
  i1314.shadowCascades = i1315[6]
  i1314.shadowDistance = i1315[7]
  i1314.shadowmaskMode = i1315[8]
  i1314.shadowProjection = i1315[9]
  i1314.shadowResolution = i1315[10]
  i1314.softParticles = !!i1315[11]
  i1314.softVegetation = !!i1315[12]
  i1314.activeColorSpace = i1315[13]
  i1314.desiredColorSpace = i1315[14]
  i1314.masterTextureLimit = i1315[15]
  i1314.maxQueuedFrames = i1315[16]
  i1314.particleRaycastBudget = i1315[17]
  i1314.pixelLightCount = i1315[18]
  i1314.realtimeReflectionProbes = !!i1315[19]
  i1314.shadowCascade2Split = i1315[20]
  i1314.shadowCascade4Split = new pc.Vec3( i1315[21], i1315[22], i1315[23] )
  i1314.streamingMipmapsActive = !!i1315[24]
  i1314.vSyncCount = i1315[25]
  i1314.asyncUploadBufferSize = i1315[26]
  i1314.asyncUploadTimeSlice = i1315[27]
  i1314.billboardsFaceCameraPosition = !!i1315[28]
  i1314.shadowNearPlaneOffset = i1315[29]
  i1314.streamingMipmapsMemoryBudget = i1315[30]
  i1314.maximumLODLevel = i1315[31]
  i1314.streamingMipmapsAddAllCameras = !!i1315[32]
  i1314.streamingMipmapsMaxLevelReduction = i1315[33]
  i1314.streamingMipmapsRenderersPerFrame = i1315[34]
  i1314.resolutionScalingFixedDPIFactor = i1315[35]
  i1314.streamingMipmapsMaxFileIORequests = i1315[36]
  i1314.currentQualityLevel = i1315[37]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1325 = data
  i1324.weight = i1325[0]
  i1324.vertices = i1325[1]
  i1324.normals = i1325[2]
  i1324.tangents = i1325[3]
  return i1324
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1327 = data
  i1326.m_XCoordinate = i1327[0]
  i1326.m_YCoordinate = i1327[1]
  return i1326
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1329 = data
  i1328.m_XPositionAdjustment = i1329[0]
  i1328.m_YPositionAdjustment = i1329[1]
  return i1328
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1331 = data
  i1330.xPlacement = i1331[0]
  i1330.yPlacement = i1331[1]
  i1330.xAdvance = i1331[2]
  i1330.yAdvance = i1331[3]
  return i1330
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[34],"57":[2],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[2],"80":[32],"81":[82],"83":[82],"18":[17],"5":[2],"84":[30],"85":[2],"86":[87],"88":[43],"89":[18],"90":[17],"33":[32,17],"24":[17,25],"91":[17],"92":[25,17],"93":[32],"94":[25,17],"95":[17],"96":[97],"98":[97],"99":[97],"100":[101],"102":[17],"103":[17],"21":[18],"23":[25,17],"104":[17],"20":[18],"105":[17],"106":[17],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[25,17],"115":[17],"116":[17],"117":[17],"118":[17],"40":[25,17],"119":[17],"120":[43],"121":[43],"44":[43],"122":[43],"123":[2],"124":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","ItemGraphic","ItemMovement","UnityEngine.UI.Text","UnityEngine.Font","PlaySound","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "7.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_TrickyTwist_Lv31";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4762";

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

Deserializers.buildID = "f075cac7-06ea-4b2c-a3a8-d5f8a35b4cc2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

