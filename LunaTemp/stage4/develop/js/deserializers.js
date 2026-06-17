var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSpring' )
  var i671 = data
  i670.spring = i671[0]
  i670.damper = i671[1]
  i670.targetPosition = i671[2]
  return i670
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointMotor' )
  var i673 = data
  i672.m_TargetVelocity = i673[0]
  i672.m_Force = i673[1]
  i672.m_FreeSpin = i673[2]
  return i672
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointLimits' )
  var i675 = data
  i674.m_Min = i675[0]
  i674.m_Max = i675[1]
  i674.m_Bounciness = i675[2]
  i674.m_BounceMinVelocity = i675[3]
  i674.m_ContactDistance = i675[4]
  i674.minBounce = i675[5]
  i674.maxBounce = i675[6]
  return i674
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointDrive' )
  var i677 = data
  i676.m_PositionSpring = i677[0]
  i676.m_PositionDamper = i677[1]
  i676.m_MaximumForce = i677[2]
  i676.m_UseAcceleration = i677[3]
  return i676
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i679 = data
  i678.m_Spring = i679[0]
  i678.m_Damper = i679[1]
  return i678
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i681 = data
  i680.m_Limit = i681[0]
  i680.m_Bounciness = i681[1]
  i680.m_ContactDistance = i681[2]
  return i680
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i683 = data
  i682.m_ExtremumSlip = i683[0]
  i682.m_ExtremumValue = i683[1]
  i682.m_AsymptoteSlip = i683[2]
  i682.m_AsymptoteValue = i683[3]
  i682.m_Stiffness = i683[4]
  return i682
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i685 = data
  i684.m_LowerAngle = i685[0]
  i684.m_UpperAngle = i685[1]
  return i684
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i687 = data
  i686.m_MotorSpeed = i687[0]
  i686.m_MaximumMotorTorque = i687[1]
  return i686
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i689 = data
  i688.m_DampingRatio = i689[0]
  i688.m_Frequency = i689[1]
  i688.m_Angle = i689[2]
  return i688
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i691 = data
  i690.m_LowerTranslation = i691[0]
  i690.m_UpperTranslation = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i693 = data
  i692.position = new pc.Vec3( i693[0], i693[1], i693[2] )
  i692.scale = new pc.Vec3( i693[3], i693[4], i693[5] )
  i692.rotation = new pc.Quat(i693[6], i693[7], i693[8], i693[9])
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i695 = data
  i694.aspect = i695[0]
  i694.orthographic = !!i695[1]
  i694.orthographicSize = i695[2]
  i694.backgroundColor = new pc.Color(i695[3], i695[4], i695[5], i695[6])
  i694.nearClipPlane = i695[7]
  i694.farClipPlane = i695[8]
  i694.fieldOfView = i695[9]
  i694.depth = i695[10]
  i694.clearFlags = i695[11]
  i694.cullingMask = i695[12]
  i694.rect = i695[13]
  request.r(i695[14], i695[15], 0, i694, 'targetTexture')
  i694.usePhysicalProperties = !!i695[16]
  i694.focalLength = i695[17]
  i694.sensorSize = new pc.Vec2( i695[18], i695[19] )
  i694.lensShift = new pc.Vec2( i695[20], i695[21] )
  i694.gateFit = i695[22]
  i694.commandBufferCount = i695[23]
  i694.cameraType = i695[24]
  i694.enabled = !!i695[25]
  return i694
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i696 = root || request.c( 'AutoCameraFit' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'canvasBtn')
  request.r(i697[2], i697[3], 0, i696, 'targetArea')
  i696.paddingLandscape = i697[4]
  i696.paddingPortrait = i697[5]
  i696.extraPaddingSmallScreen = i697[6]
  i696.smallScreenThreshold = i697[7]
  i696.autoUpdateOnResize = !!i697[8]
  i696.adjustInEditMode = !!i697[9]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i699 = data
  i698.name = i699[0]
  i698.tagId = i699[1]
  i698.enabled = !!i699[2]
  i698.isStatic = !!i699[3]
  i698.layer = i699[4]
  return i698
}

Deserializers["InputManager"] = function (request, data, root) {
  var i700 = root || request.c( 'InputManager' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'mainCamera')
  i700.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i701[2] )
  i700.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i701[3] )
  i700.installLayer = UnityEngine.LayerMask.FromIntegerValue( i701[4] )
  i700.maxDistance = i701[5]
  i700.itemsToGotoStore = i701[6]
  i700.dragSortingOffset = i701[7]
  i700.useDragBounds = !!i701[8]
  request.r(i701[9], i701[10], 0, i700, 'dragBounds')
  return i700
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i702 = root || request.c( 'HandHintMmanager' )
  var i703 = data
  var i705 = i703[0]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i702.hintItems = i704
  request.r(i703[1], i703[2], 0, i702, 'handHintObject')
  request.r(i703[3], i703[4], 0, i702, 'handAnimator')
  i702.idleTimeToHint = i703[5]
  i702.dragAnimDuration = i703[6]
  request.r(i703[7], i703[8], 0, i702, 'startHintPos')
  request.r(i703[9], i703[10], 0, i702, 'endHintPos')
  return i702
}

Deserializers["GameManager"] = function (request, data, root) {
  var i708 = root || request.c( 'GameManager' )
  var i709 = data
  i708.fxStartVoice = i709[0]
  i708.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i709[1], i708.onLoseGame)
  i708.isGameEnded = !!i709[2]
  return i708
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i711 = data
  i710.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i711[0], i710.m_PersistentCalls)
  return i710
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i713 = data
  var i715 = i713[0]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('UnityEngine.Events.PersistentCall', i715[i + 0]));
  }
  i712.m_Calls = i714
  return i712
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_Target')
  i718.m_TargetAssemblyTypeName = i719[2]
  i718.m_MethodName = i719[3]
  i718.m_Mode = i719[4]
  i718.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i719[5], i718.m_Arguments)
  i718.m_CallState = i719[6]
  return i718
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_ObjectArgument')
  i720.m_ObjectArgumentAssemblyTypeName = i721[2]
  i720.m_IntArgument = i721[3]
  i720.m_FloatArgument = i721[4]
  i720.m_StringArgument = i721[5]
  i720.m_BoolArgument = !!i721[6]
  return i720
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i722 = root || request.c( 'ItemManager' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i722.items = i724
  i722.totalItemsDropped = i723[1]
  i722.onItemDropped = request.d('UnityEngine.Events.UnityEvent', i723[2], i722.onItemDropped)
  return i722
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i726 = root || request.c( 'Ply_SoundManager' )
  var i727 = data
  i726.fxAudio = request.d('FxAudio', i727[0], i726.fxAudio)
  request.r(i727[1], i727[2], 0, i726, 'bgm1')
  return i726
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i728 = root || request.c( 'FxAudio' )
  var i729 = data
  i728.None = request.d('SoundData', i729[0], i728.None)
  i728.ClickBox = request.d('SoundData', i729[1], i728.ClickBox)
  i728.StartVoice = request.d('SoundData', i729[2], i728.StartVoice)
  i728.voice_lv52_bottle = request.d('SoundData', i729[3], i728.voice_lv52_bottle)
  i728.voice_lv52_fruit = request.d('SoundData', i729[4], i728.voice_lv52_fruit)
  i728.voice_lv52_icecup = request.d('SoundData', i729[5], i728.voice_lv52_icecup)
  i728.voice_lv52_icream = request.d('SoundData', i729[6], i728.voice_lv52_icream)
  i728.voice_lv52_ladle = request.d('SoundData', i729[7], i728.voice_lv52_ladle)
  i728.voice_lv52_milk = request.d('SoundData', i729[8], i728.voice_lv52_milk)
  i728.voice_lv52_shirt = request.d('SoundData', i729[9], i728.voice_lv52_shirt)
  i728.voice_lv52_tofu = request.d('SoundData', i729[10], i728.voice_lv52_tofu)
  i728.voice_lv52_water = request.d('SoundData', i729[11], i728.voice_lv52_water)
  i728.Correct = request.d('SoundData', i729[12], i728.Correct)
  i728.FridgeOpen = request.d('SoundData', i729[13], i728.FridgeOpen)
  i728.water = request.d('SoundData', i729[14], i728.water)
  i728.mouse = request.d('SoundData', i729[15], i728.mouse)
  i728.wrong = request.d('SoundData', i729[16], i728.wrong)
  i728.haa = request.d('SoundData', i729[17], i728.haa)
  return i728
}

Deserializers["SoundData"] = function (request, data, root) {
  var i730 = root || request.c( 'SoundData' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'clip')
  i730.repeatCount = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'clip')
  request.r(i733[2], i733[3], 0, i732, 'outputAudioMixerGroup')
  i732.playOnAwake = !!i733[4]
  i732.loop = !!i733[5]
  i732.time = i733[6]
  i732.volume = i733[7]
  i732.pitch = i733[8]
  i732.enabled = !!i733[9]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i735 = data
  i734.pivot = new pc.Vec2( i735[0], i735[1] )
  i734.anchorMin = new pc.Vec2( i735[2], i735[3] )
  i734.anchorMax = new pc.Vec2( i735[4], i735[5] )
  i734.sizeDelta = new pc.Vec2( i735[6], i735[7] )
  i734.anchoredPosition3D = new pc.Vec3( i735[8], i735[9], i735[10] )
  i734.rotation = new pc.Quat(i735[11], i735[12], i735[13], i735[14])
  i734.scale = new pc.Vec3( i735[15], i735[16], i735[17] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i737 = data
  i736.planeDistance = i737[0]
  i736.referencePixelsPerUnit = i737[1]
  i736.isFallbackOverlay = !!i737[2]
  i736.renderMode = i737[3]
  i736.renderOrder = i737[4]
  i736.sortingLayerName = i737[5]
  i736.sortingOrder = i737[6]
  i736.scaleFactor = i737[7]
  request.r(i737[8], i737[9], 0, i736, 'worldCamera')
  i736.overrideSorting = !!i737[10]
  i736.pixelPerfect = !!i737[11]
  i736.targetDisplay = i737[12]
  i736.overridePixelPerfect = !!i737[13]
  i736.enabled = !!i737[14]
  return i736
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i739 = data
  i738.m_UiScaleMode = i739[0]
  i738.m_ReferencePixelsPerUnit = i739[1]
  i738.m_ScaleFactor = i739[2]
  i738.m_ReferenceResolution = new pc.Vec2( i739[3], i739[4] )
  i738.m_ScreenMatchMode = i739[5]
  i738.m_MatchWidthOrHeight = i739[6]
  i738.m_PhysicalUnit = i739[7]
  i738.m_FallbackScreenDPI = i739[8]
  i738.m_DefaultSpriteDPI = i739[9]
  i738.m_DynamicPixelsPerUnit = i739[10]
  i738.m_PresetInfoIsWorld = !!i739[11]
  return i738
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i741 = data
  i740.m_IgnoreReversedGraphics = !!i741[0]
  i740.m_BlockingObjects = i741[1]
  i740.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i741[2] )
  return i740
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i742 = root || request.c( 'ProgressBarUI' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'fillImage')
  request.r(i743[2], i743[3], 0, i742, 'progressText')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i745 = data
  i744.cullTransparentMesh = !!i745[0]
  return i744
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Image' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Sprite')
  i746.m_Type = i747[2]
  i746.m_PreserveAspect = !!i747[3]
  i746.m_FillCenter = !!i747[4]
  i746.m_FillMethod = i747[5]
  i746.m_FillAmount = i747[6]
  i746.m_FillClockwise = !!i747[7]
  i746.m_FillOrigin = i747[8]
  i746.m_UseSpriteMesh = !!i747[9]
  i746.m_PixelsPerUnitMultiplier = i747[10]
  request.r(i747[11], i747[12], 0, i746, 'm_Material')
  i746.m_Maskable = !!i747[13]
  i746.m_Color = new pc.Color(i747[14], i747[15], i747[16], i747[17])
  i746.m_RaycastTarget = !!i747[18]
  i746.m_RaycastPadding = new pc.Vec4( i747[19], i747[20], i747[21], i747[22] )
  return i746
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i749 = data
  i748.m_hasFontAssetChanged = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'm_baseMaterial')
  i748.m_maskOffset = new pc.Vec4( i749[3], i749[4], i749[5], i749[6] )
  i748.m_text = i749[7]
  i748.m_isRightToLeft = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'm_fontAsset')
  request.r(i749[11], i749[12], 0, i748, 'm_sharedMaterial')
  var i751 = i749[13]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.m_fontSharedMaterials = i750
  request.r(i749[14], i749[15], 0, i748, 'm_fontMaterial')
  var i753 = i749[16]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.m_fontMaterials = i752
  i748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i749[17], i749[18], i749[19], i749[20])
  i748.m_fontColor = new pc.Color(i749[21], i749[22], i749[23], i749[24])
  i748.m_enableVertexGradient = !!i749[25]
  i748.m_colorMode = i749[26]
  i748.m_fontColorGradient = request.d('TMPro.VertexGradient', i749[27], i748.m_fontColorGradient)
  request.r(i749[28], i749[29], 0, i748, 'm_fontColorGradientPreset')
  request.r(i749[30], i749[31], 0, i748, 'm_spriteAsset')
  i748.m_tintAllSprites = !!i749[32]
  request.r(i749[33], i749[34], 0, i748, 'm_StyleSheet')
  i748.m_TextStyleHashCode = i749[35]
  i748.m_overrideHtmlColors = !!i749[36]
  i748.m_faceColor = UnityEngine.Color32.ConstructColor(i749[37], i749[38], i749[39], i749[40])
  i748.m_fontSize = i749[41]
  i748.m_fontSizeBase = i749[42]
  i748.m_fontWeight = i749[43]
  i748.m_enableAutoSizing = !!i749[44]
  i748.m_fontSizeMin = i749[45]
  i748.m_fontSizeMax = i749[46]
  i748.m_fontStyle = i749[47]
  i748.m_HorizontalAlignment = i749[48]
  i748.m_VerticalAlignment = i749[49]
  i748.m_textAlignment = i749[50]
  i748.m_characterSpacing = i749[51]
  i748.m_wordSpacing = i749[52]
  i748.m_lineSpacing = i749[53]
  i748.m_lineSpacingMax = i749[54]
  i748.m_paragraphSpacing = i749[55]
  i748.m_charWidthMaxAdj = i749[56]
  i748.m_TextWrappingMode = i749[57]
  i748.m_wordWrappingRatios = i749[58]
  i748.m_overflowMode = i749[59]
  request.r(i749[60], i749[61], 0, i748, 'm_linkedTextComponent')
  request.r(i749[62], i749[63], 0, i748, 'parentLinkedComponent')
  i748.m_enableKerning = !!i749[64]
  var i755 = i749[65]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(i755[i + 0]);
  }
  i748.m_ActiveFontFeatures = i754
  i748.m_enableExtraPadding = !!i749[66]
  i748.checkPaddingRequired = !!i749[67]
  i748.m_isRichText = !!i749[68]
  i748.m_parseCtrlCharacters = !!i749[69]
  i748.m_isOrthographic = !!i749[70]
  i748.m_isCullingEnabled = !!i749[71]
  i748.m_horizontalMapping = i749[72]
  i748.m_verticalMapping = i749[73]
  i748.m_uvLineOffset = i749[74]
  i748.m_geometrySortingOrder = i749[75]
  i748.m_IsTextObjectScaleStatic = !!i749[76]
  i748.m_VertexBufferAutoSizeReduction = !!i749[77]
  i748.m_useMaxVisibleDescender = !!i749[78]
  i748.m_pageToDisplay = i749[79]
  i748.m_margin = new pc.Vec4( i749[80], i749[81], i749[82], i749[83] )
  i748.m_isUsingLegacyAnimationComponent = !!i749[84]
  i748.m_isVolumetricText = !!i749[85]
  request.r(i749[86], i749[87], 0, i748, 'm_Material')
  i748.m_EmojiFallbackSupport = !!i749[88]
  i748.m_Maskable = !!i749[89]
  i748.m_Color = new pc.Color(i749[90], i749[91], i749[92], i749[93])
  i748.m_RaycastTarget = !!i749[94]
  i748.m_RaycastPadding = new pc.Vec4( i749[95], i749[96], i749[97], i749[98] )
  return i748
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.VertexGradient' )
  var i759 = data
  i758.topLeft = new pc.Color(i759[0], i759[1], i759[2], i759[3])
  i758.topRight = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.bottomLeft = new pc.Color(i759[8], i759[9], i759[10], i759[11])
  i758.bottomRight = new pc.Color(i759[12], i759[13], i759[14], i759[15])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'animatorController')
  request.r(i763[2], i763[3], 0, i762, 'avatar')
  i762.updateMode = i763[4]
  i762.hasTransformHierarchy = !!i763[5]
  i762.applyRootMotion = !!i763[6]
  var i765 = i763[7]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.humanBones = i764
  i762.enabled = !!i763[8]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i769 = data
  i768.color = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  request.r(i769[4], i769[5], 0, i768, 'sprite')
  i768.flipX = !!i769[6]
  i768.flipY = !!i769[7]
  i768.drawMode = i769[8]
  i768.size = new pc.Vec2( i769[9], i769[10] )
  i768.tileMode = i769[11]
  i768.adaptiveModeThreshold = i769[12]
  i768.maskInteraction = i769[13]
  i768.spriteSortPoint = i769[14]
  i768.enabled = !!i769[15]
  request.r(i769[16], i769[17], 0, i768, 'sharedMaterial')
  var i771 = i769[18]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.sharedMaterials = i770
  i768.receiveShadows = !!i769[19]
  i768.shadowCastingMode = i769[20]
  i768.sortingLayerID = i769[21]
  i768.sortingOrder = i769[22]
  i768.lightmapIndex = i769[23]
  i768.lightmapSceneIndex = i769[24]
  i768.lightmapScaleOffset = new pc.Vec4( i769[25], i769[26], i769[27], i769[28] )
  i768.lightProbeUsage = i769[29]
  i768.reflectionProbeUsage = i769[30]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i773 = data
  i772.center = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.size = new pc.Vec3( i773[3], i773[4], i773[5] )
  i772.enabled = !!i773[6]
  i772.isTrigger = !!i773[7]
  request.r(i773[8], i773[9], 0, i772, 'material')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'additionalVertexStreams')
  i774.enabled = !!i775[2]
  request.r(i775[3], i775[4], 0, i774, 'sharedMaterial')
  var i777 = i775[5]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sharedMaterials = i776
  i774.receiveShadows = !!i775[6]
  i774.shadowCastingMode = i775[7]
  i774.sortingLayerID = i775[8]
  i774.sortingOrder = i775[9]
  i774.lightmapIndex = i775[10]
  i774.lightmapSceneIndex = i775[11]
  i774.lightmapScaleOffset = new pc.Vec4( i775[12], i775[13], i775[14], i775[15] )
  i774.lightProbeUsage = i775[16]
  i774.reflectionProbeUsage = i775[17]
  return i774
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TextMeshPro' )
  var i779 = data
  i778._SortingLayer = i779[0]
  i778._SortingLayerID = i779[1]
  i778._SortingOrder = i779[2]
  i778.m_hasFontAssetChanged = !!i779[3]
  request.r(i779[4], i779[5], 0, i778, 'm_renderer')
  i778.m_maskType = i779[6]
  i778.m_text = i779[7]
  i778.m_isRightToLeft = !!i779[8]
  request.r(i779[9], i779[10], 0, i778, 'm_fontAsset')
  request.r(i779[11], i779[12], 0, i778, 'm_sharedMaterial')
  var i781 = i779[13]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.m_fontSharedMaterials = i780
  request.r(i779[14], i779[15], 0, i778, 'm_fontMaterial')
  var i783 = i779[16]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i778.m_fontMaterials = i782
  i778.m_fontColor32 = UnityEngine.Color32.ConstructColor(i779[17], i779[18], i779[19], i779[20])
  i778.m_fontColor = new pc.Color(i779[21], i779[22], i779[23], i779[24])
  i778.m_enableVertexGradient = !!i779[25]
  i778.m_colorMode = i779[26]
  i778.m_fontColorGradient = request.d('TMPro.VertexGradient', i779[27], i778.m_fontColorGradient)
  request.r(i779[28], i779[29], 0, i778, 'm_fontColorGradientPreset')
  request.r(i779[30], i779[31], 0, i778, 'm_spriteAsset')
  i778.m_tintAllSprites = !!i779[32]
  request.r(i779[33], i779[34], 0, i778, 'm_StyleSheet')
  i778.m_TextStyleHashCode = i779[35]
  i778.m_overrideHtmlColors = !!i779[36]
  i778.m_faceColor = UnityEngine.Color32.ConstructColor(i779[37], i779[38], i779[39], i779[40])
  i778.m_fontSize = i779[41]
  i778.m_fontSizeBase = i779[42]
  i778.m_fontWeight = i779[43]
  i778.m_enableAutoSizing = !!i779[44]
  i778.m_fontSizeMin = i779[45]
  i778.m_fontSizeMax = i779[46]
  i778.m_fontStyle = i779[47]
  i778.m_HorizontalAlignment = i779[48]
  i778.m_VerticalAlignment = i779[49]
  i778.m_textAlignment = i779[50]
  i778.m_characterSpacing = i779[51]
  i778.m_wordSpacing = i779[52]
  i778.m_lineSpacing = i779[53]
  i778.m_lineSpacingMax = i779[54]
  i778.m_paragraphSpacing = i779[55]
  i778.m_charWidthMaxAdj = i779[56]
  i778.m_TextWrappingMode = i779[57]
  i778.m_wordWrappingRatios = i779[58]
  i778.m_overflowMode = i779[59]
  request.r(i779[60], i779[61], 0, i778, 'm_linkedTextComponent')
  request.r(i779[62], i779[63], 0, i778, 'parentLinkedComponent')
  i778.m_enableKerning = !!i779[64]
  var i785 = i779[65]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(i785[i + 0]);
  }
  i778.m_ActiveFontFeatures = i784
  i778.m_enableExtraPadding = !!i779[66]
  i778.checkPaddingRequired = !!i779[67]
  i778.m_isRichText = !!i779[68]
  i778.m_parseCtrlCharacters = !!i779[69]
  i778.m_isOrthographic = !!i779[70]
  i778.m_isCullingEnabled = !!i779[71]
  i778.m_horizontalMapping = i779[72]
  i778.m_verticalMapping = i779[73]
  i778.m_uvLineOffset = i779[74]
  i778.m_geometrySortingOrder = i779[75]
  i778.m_IsTextObjectScaleStatic = !!i779[76]
  i778.m_VertexBufferAutoSizeReduction = !!i779[77]
  i778.m_useMaxVisibleDescender = !!i779[78]
  i778.m_pageToDisplay = i779[79]
  i778.m_margin = new pc.Vec4( i779[80], i779[81], i779[82], i779[83] )
  i778.m_isUsingLegacyAnimationComponent = !!i779[84]
  i778.m_isVolumetricText = !!i779[85]
  request.r(i779[86], i779[87], 0, i778, 'm_Material')
  i778.m_EmojiFallbackSupport = !!i779[88]
  i778.m_Maskable = !!i779[89]
  i778.m_Color = new pc.Color(i779[90], i779[91], i779[92], i779[93])
  i778.m_RaycastTarget = !!i779[94]
  i778.m_RaycastPadding = new pc.Vec4( i779[95], i779[96], i779[97], i779[98] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'sharedMesh')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'sharedMesh')
  var i791 = i789[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.bones = i790
  i788.updateWhenOffscreen = !!i789[3]
  i788.localBounds = i789[4]
  request.r(i789[5], i789[6], 0, i788, 'rootBone')
  var i793 = i789[7]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i793[i + 0]) );
  }
  i788.blendShapesWeights = i792
  i788.enabled = !!i789[8]
  request.r(i789[9], i789[10], 0, i788, 'sharedMaterial')
  var i795 = i789[11]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i788.sharedMaterials = i794
  i788.receiveShadows = !!i789[12]
  i788.shadowCastingMode = i789[13]
  i788.sortingLayerID = i789[14]
  i788.sortingOrder = i789[15]
  i788.lightmapIndex = i789[16]
  i788.lightmapSceneIndex = i789[17]
  i788.lightmapScaleOffset = new pc.Vec4( i789[18], i789[19], i789[20], i789[21] )
  i788.lightProbeUsage = i789[22]
  i788.reflectionProbeUsage = i789[23]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i799 = data
  i798.weight = i799[0]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i801 = data
  i800.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i801[0], i800.main)
  i800.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i801[1], i800.colorBySpeed)
  i800.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i801[2], i800.colorOverLifetime)
  i800.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i801[3], i800.emission)
  i800.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i801[4], i800.rotationBySpeed)
  i800.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i801[5], i800.rotationOverLifetime)
  i800.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i801[6], i800.shape)
  i800.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i801[7], i800.sizeBySpeed)
  i800.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i801[8], i800.sizeOverLifetime)
  i800.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i801[9], i800.textureSheetAnimation)
  i800.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i801[10], i800.velocityOverLifetime)
  i800.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i801[11], i800.noise)
  i800.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i801[12], i800.inheritVelocity)
  i800.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i801[13], i800.forceOverLifetime)
  i800.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i801[14], i800.limitVelocityOverLifetime)
  i800.useAutoRandomSeed = !!i801[15]
  i800.randomSeed = i801[16]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemMain()
  var i803 = data
  i802.duration = i803[0]
  i802.loop = !!i803[1]
  i802.prewarm = !!i803[2]
  i802.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.startDelay)
  i802.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.startLifetime)
  i802.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[5], i802.startSpeed)
  i802.startSize3D = !!i803[6]
  i802.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.startSizeX)
  i802.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[8], i802.startSizeY)
  i802.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.startSizeZ)
  i802.startRotation3D = !!i803[10]
  i802.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.startRotationX)
  i802.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[12], i802.startRotationY)
  i802.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[13], i802.startRotationZ)
  i802.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i803[14], i802.startColor)
  i802.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[15], i802.gravityModifier)
  i802.simulationSpace = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'customSimulationSpace')
  i802.simulationSpeed = i803[19]
  i802.useUnscaledTime = !!i803[20]
  i802.scalingMode = i803[21]
  i802.playOnAwake = !!i803[22]
  i802.maxParticles = i803[23]
  i802.emitterVelocityMode = i803[24]
  i802.stopAction = i803[25]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i804 = root || new pc.MinMaxCurve()
  var i805 = data
  i804.mode = i805[0]
  i804.curveMin = new pc.AnimationCurve( { keys_flow: i805[1] } )
  i804.curveMax = new pc.AnimationCurve( { keys_flow: i805[2] } )
  i804.curveMultiplier = i805[3]
  i804.constantMin = i805[4]
  i804.constantMax = i805[5]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i806 = root || new pc.MinMaxGradient()
  var i807 = data
  i806.mode = i807[0]
  i806.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i807[1], i806.gradientMin)
  i806.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i807[2], i806.gradientMax)
  i806.colorMin = new pc.Color(i807[3], i807[4], i807[5], i807[6])
  i806.colorMax = new pc.Color(i807[7], i807[8], i807[9], i807[10])
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i809 = data
  i808.mode = i809[0]
  var i811 = i809[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i811[i + 0]) );
  }
  i808.colorKeys = i810
  var i813 = i809[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i813[i + 0]) );
  }
  i808.alphaKeys = i812
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemColorBySpeed()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i815[1], i814.color)
  i814.range = new pc.Vec2( i815[2], i815[3] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i819 = data
  i818.color = new pc.Color(i819[0], i819[1], i819[2], i819[3])
  i818.time = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i823 = data
  i822.alpha = i823[0]
  i822.time = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemColorOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i825[1], i824.color)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemEmitter()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.rateOverTime)
  i826.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.rateOverDistance)
  var i829 = i827[3]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i829[i + 0]) );
  }
  i826.bursts = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemBurst()
  var i833 = data
  i832.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[0], i832.count)
  i832.cycleCount = i833[1]
  i832.minCount = i833[2]
  i832.maxCount = i833[3]
  i832.repeatInterval = i833[4]
  i832.time = i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemRotationBySpeed()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.separateAxes = !!i835[4]
  i834.range = new pc.Vec2( i835[5], i835[6] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemRotationOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.separateAxes = !!i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemShape()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.shapeType = i839[1]
  i838.randomDirectionAmount = i839[2]
  i838.sphericalDirectionAmount = i839[3]
  i838.randomPositionAmount = i839[4]
  i838.alignToDirection = !!i839[5]
  i838.radius = i839[6]
  i838.radiusMode = i839[7]
  i838.radiusSpread = i839[8]
  i838.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[9], i838.radiusSpeed)
  i838.radiusThickness = i839[10]
  i838.angle = i839[11]
  i838.length = i839[12]
  i838.boxThickness = new pc.Vec3( i839[13], i839[14], i839[15] )
  i838.meshShapeType = i839[16]
  request.r(i839[17], i839[18], 0, i838, 'mesh')
  request.r(i839[19], i839[20], 0, i838, 'meshRenderer')
  request.r(i839[21], i839[22], 0, i838, 'skinnedMeshRenderer')
  i838.useMeshMaterialIndex = !!i839[23]
  i838.meshMaterialIndex = i839[24]
  i838.useMeshColors = !!i839[25]
  i838.normalOffset = i839[26]
  i838.arc = i839[27]
  i838.arcMode = i839[28]
  i838.arcSpread = i839[29]
  i838.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[30], i838.arcSpeed)
  i838.donutRadius = i839[31]
  i838.position = new pc.Vec3( i839[32], i839[33], i839[34] )
  i838.rotation = new pc.Vec3( i839[35], i839[36], i839[37] )
  i838.scale = new pc.Vec3( i839[38], i839[39], i839[40] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemSizeBySpeed()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.separateAxes = !!i841[4]
  i840.range = new pc.Vec2( i841[5], i841[6] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemSizeOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.separateAxes = !!i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.mode = i845[1]
  i844.animation = i845[2]
  i844.numTilesX = i845[3]
  i844.numTilesY = i845[4]
  i844.useRandomRow = !!i845[5]
  i844.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[6], i844.frameOverTime)
  i844.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[7], i844.startFrame)
  i844.cycleCount = i845[8]
  i844.rowIndex = i845[9]
  i844.flipU = i845[10]
  i844.flipV = i845[11]
  i844.spriteCount = i845[12]
  var i847 = i845[13]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sprites = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.x)
  i850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.y)
  i850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.z)
  i850.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.radial)
  i850.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[5], i850.speedModifier)
  i850.space = i851[6]
  i850.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.orbitalX)
  i850.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.orbitalY)
  i850.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[9], i850.orbitalZ)
  i850.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[10], i850.orbitalOffsetX)
  i850.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[11], i850.orbitalOffsetY)
  i850.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[12], i850.orbitalOffsetZ)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemNoise()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.separateAxes = !!i853[1]
  i852.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.strengthX)
  i852.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.strengthY)
  i852.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[4], i852.strengthZ)
  i852.frequency = i853[5]
  i852.damping = !!i853[6]
  i852.octaveCount = i853[7]
  i852.octaveMultiplier = i853[8]
  i852.octaveScale = i853[9]
  i852.quality = i853[10]
  i852.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[11], i852.scrollSpeed)
  i852.scrollSpeedMultiplier = i853[12]
  i852.remapEnabled = !!i853[13]
  i852.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[14], i852.remapX)
  i852.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[15], i852.remapY)
  i852.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[16], i852.remapZ)
  i852.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[17], i852.positionAmount)
  i852.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[18], i852.rotationAmount)
  i852.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[19], i852.sizeAmount)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemInheritVelocity()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.mode = i855[1]
  i854.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.curve)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemForceOverLifetime()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[1], i856.x)
  i856.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.y)
  i856.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[3], i856.z)
  i856.space = i857[4]
  i856.randomized = !!i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.limit)
  i858.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.limitX)
  i858.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.limitY)
  i858.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.limitZ)
  i858.dampen = i859[5]
  i858.separateAxes = !!i859[6]
  i858.space = i859[7]
  i858.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.drag)
  i858.multiplyDragByParticleSize = !!i859[9]
  i858.multiplyDragByParticleVelocity = !!i859[10]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'mesh')
  i860.meshCount = i861[2]
  i860.activeVertexStreamsCount = i861[3]
  i860.alignment = i861[4]
  i860.renderMode = i861[5]
  i860.sortMode = i861[6]
  i860.lengthScale = i861[7]
  i860.velocityScale = i861[8]
  i860.cameraVelocityScale = i861[9]
  i860.normalDirection = i861[10]
  i860.sortingFudge = i861[11]
  i860.minParticleSize = i861[12]
  i860.maxParticleSize = i861[13]
  i860.pivot = new pc.Vec3( i861[14], i861[15], i861[16] )
  request.r(i861[17], i861[18], 0, i860, 'trailMaterial')
  i860.applyActiveColorSpace = !!i861[19]
  i860.enabled = !!i861[20]
  request.r(i861[21], i861[22], 0, i860, 'sharedMaterial')
  var i863 = i861[23]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.sharedMaterials = i862
  i860.receiveShadows = !!i861[24]
  i860.shadowCastingMode = i861[25]
  i860.sortingLayerID = i861[26]
  i860.sortingOrder = i861[27]
  i860.lightmapIndex = i861[28]
  i860.lightmapSceneIndex = i861[29]
  i860.lightmapScaleOffset = new pc.Vec4( i861[30], i861[31], i861[32], i861[33] )
  i860.lightProbeUsage = i861[34]
  i860.reflectionProbeUsage = i861[35]
  return i860
}

Deserializers["ItemController"] = function (request, data, root) {
  var i864 = root || request.c( 'ItemController' )
  var i865 = data
  i864.itemType = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'dropTarget')
  i864.dropDistanceThreshold = i865[3]
  i864.hideSpriteOnDrop = !!i865[4]
  i864.onClick = request.d('UnityEngine.Events.UnityEvent', i865[5], i864.onClick)
  i864.onDrop = request.d('UnityEngine.Events.UnityEvent', i865[6], i864.onDrop)
  i864.onDragStart = request.d('UnityEngine.Events.UnityEvent', i865[7], i864.onDragStart)
  i864.onReturn = request.d('UnityEngine.Events.UnityEvent', i865[8], i864.onReturn)
  i864.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i865[9], i864.onAnimFinished)
  var i867 = i865[10]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('AnimObjectData', i867[i + 0]));
  }
  i864.animationObjects = i866
  var i869 = i865[11]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(i869[i + 0]);
  }
  i864.fxSoundsStartAnim = i868
  var i871 = i865[12]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(i871[i + 0]);
  }
  i864.fxSoundsAfterAnim = i870
  return i864
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i874 = root || request.c( 'AnimObjectData' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'animObj')
  i874.delayFromStart = i875[2]
  i874.durationToDeactivate = i875[3]
  return i874
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i878 = root || request.c( 'ItemGraphic' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i878.spriteRenderers = i880
  i878.sortingOrderOffset = i879[1]
  return i878
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i884 = root || request.c( 'ItemMovement' )
  var i885 = data
  return i884
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Text' )
  var i887 = data
  i886.m_FontData = request.d('UnityEngine.UI.FontData', i887[0], i886.m_FontData)
  i886.m_Text = i887[1]
  request.r(i887[2], i887[3], 0, i886, 'm_Material')
  i886.m_Maskable = !!i887[4]
  i886.m_Color = new pc.Color(i887[5], i887[6], i887[7], i887[8])
  i886.m_RaycastTarget = !!i887[9]
  i886.m_RaycastPadding = new pc.Vec4( i887[10], i887[11], i887[12], i887[13] )
  return i886
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.FontData' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_Font')
  i888.m_FontSize = i889[2]
  i888.m_FontStyle = i889[3]
  i888.m_BestFit = !!i889[4]
  i888.m_MinSize = i889[5]
  i888.m_MaxSize = i889[6]
  i888.m_Alignment = i889[7]
  i888.m_AlignByGeometry = !!i889[8]
  i888.m_RichText = !!i889[9]
  i888.m_HorizontalOverflow = i889[10]
  i888.m_VerticalOverflow = i889[11]
  i888.m_LineSpacing = i889[12]
  return i888
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i890 = root || request.c( 'PlaySound' )
  var i891 = data
  i890.sound1 = i891[0]
  i890.sound2 = i891[1]
  i890.sound3 = i891[2]
  return i890
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_FirstSelected')
  i892.m_sendNavigationEvents = !!i893[2]
  i892.m_DragThreshold = i893[3]
  return i892
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i895 = data
  i894.m_HorizontalAxis = i895[0]
  i894.m_VerticalAxis = i895[1]
  i894.m_SubmitButton = i895[2]
  i894.m_CancelButton = i895[3]
  i894.m_InputActionsPerSecond = i895[4]
  i894.m_RepeatDelay = i895[5]
  i894.m_ForceModuleActive = !!i895[6]
  i894.m_SendPointerHoverToParent = !!i895[7]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i896 = root || new pc.UnityMaterial()
  var i897 = data
  i896.name = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'shader')
  i896.renderQueue = i897[3]
  i896.enableInstancing = !!i897[4]
  var i899 = i897[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i899[i + 0]) );
  }
  i896.floatParameters = i898
  var i901 = i897[6]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i901[i + 0]) );
  }
  i896.colorParameters = i900
  var i903 = i897[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i903[i + 0]) );
  }
  i896.vectorParameters = i902
  var i905 = i897[8]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i905[i + 0]) );
  }
  i896.textureParameters = i904
  var i907 = i897[9]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i907[i + 0]) );
  }
  i896.materialFlags = i906
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i911 = data
  i910.name = i911[0]
  i910.value = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i915 = data
  i914.name = i915[0]
  i914.value = new pc.Color(i915[1], i915[2], i915[3], i915[4])
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i919 = data
  i918.name = i919[0]
  i918.value = new pc.Vec4( i919[1], i919[2], i919[3], i919[4] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i923 = data
  i922.name = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'value')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i927 = data
  i926.name = i927[0]
  i926.enabled = !!i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i929 = data
  i928.name = i929[0]
  i928.width = i929[1]
  i928.height = i929[2]
  i928.mipmapCount = i929[3]
  i928.anisoLevel = i929[4]
  i928.filterMode = i929[5]
  i928.hdr = !!i929[6]
  i928.format = i929[7]
  i928.wrapMode = i929[8]
  i928.alphaIsTransparency = !!i929[9]
  i928.alphaSource = i929[10]
  i928.graphicsFormat = i929[11]
  i928.sRGBTexture = !!i929[12]
  i928.desiredColorSpace = i929[13]
  i928.wrapU = i929[14]
  i928.wrapV = i929[15]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i931 = data
  i930.name = i931[0]
  i930.halfPrecision = !!i931[1]
  i930.useSimplification = !!i931[2]
  i930.useUInt32IndexFormat = !!i931[3]
  i930.vertexCount = i931[4]
  i930.aabb = i931[5]
  var i933 = i931[6]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( !!i933[i + 0] );
  }
  i930.streams = i932
  i930.vertices = i931[7]
  var i935 = i931[8]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i935[i + 0]) );
  }
  i930.subMeshes = i934
  var i937 = i931[9]
  var i936 = []
  for(var i = 0; i < i937.length; i += 16) {
    i936.push( new pc.Mat4().setData(i937[i + 0], i937[i + 1], i937[i + 2], i937[i + 3],  i937[i + 4], i937[i + 5], i937[i + 6], i937[i + 7],  i937[i + 8], i937[i + 9], i937[i + 10], i937[i + 11],  i937[i + 12], i937[i + 13], i937[i + 14], i937[i + 15]) );
  }
  i930.bindposes = i936
  var i939 = i931[10]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i939[i + 0]) );
  }
  i930.blendShapes = i938
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i945 = data
  i944.triangles = i945[0]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i951 = data
  i950.name = i951[0]
  var i953 = i951[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i953[i + 0]) );
  }
  i950.frames = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i955 = data
  i954.name = i955[0]
  i954.index = i955[1]
  i954.startup = !!i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i957 = data
  i956.ambientIntensity = i957[0]
  i956.reflectionIntensity = i957[1]
  i956.ambientMode = i957[2]
  i956.ambientLight = new pc.Color(i957[3], i957[4], i957[5], i957[6])
  i956.ambientSkyColor = new pc.Color(i957[7], i957[8], i957[9], i957[10])
  i956.ambientGroundColor = new pc.Color(i957[11], i957[12], i957[13], i957[14])
  i956.ambientEquatorColor = new pc.Color(i957[15], i957[16], i957[17], i957[18])
  i956.fogColor = new pc.Color(i957[19], i957[20], i957[21], i957[22])
  i956.fogEndDistance = i957[23]
  i956.fogStartDistance = i957[24]
  i956.fogDensity = i957[25]
  i956.fog = !!i957[26]
  request.r(i957[27], i957[28], 0, i956, 'skybox')
  i956.fogMode = i957[29]
  var i959 = i957[30]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i959[i + 0]) );
  }
  i956.lightmaps = i958
  i956.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i957[31], i956.lightProbes)
  i956.lightmapsMode = i957[32]
  i956.mixedBakeMode = i957[33]
  i956.environmentLightingMode = i957[34]
  i956.ambientProbe = new pc.SphericalHarmonicsL2(i957[35])
  i956.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i957[36])
  i956.useReferenceAmbientProbe = !!i957[37]
  request.r(i957[38], i957[39], 0, i956, 'customReflection')
  request.r(i957[40], i957[41], 0, i956, 'defaultReflection')
  i956.defaultReflectionMode = i957[42]
  i956.defaultReflectionResolution = i957[43]
  i956.sunLightObjectId = i957[44]
  i956.pixelLightCount = i957[45]
  i956.defaultReflectionHDR = !!i957[46]
  i956.hasLightDataAsset = !!i957[47]
  i956.hasManualGenerate = !!i957[48]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'lightmapColor')
  request.r(i963[2], i963[3], 0, i962, 'lightmapDirection')
  request.r(i963[4], i963[5], 0, i962, 'shadowMask')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i964 = root || new UnityEngine.LightProbes()
  var i965 = data
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i973 = data
  var i975 = i973[0]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i975[i + 0]));
  }
  i972.ShaderCompilationErrors = i974
  i972.name = i973[1]
  i972.guid = i973[2]
  var i977 = i973[3]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i972.shaderDefinedKeywords = i976
  var i979 = i973[4]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i979[i + 0]) );
  }
  i972.passes = i978
  var i981 = i973[5]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i981[i + 0]) );
  }
  i972.usePasses = i980
  var i983 = i973[6]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i983[i + 0]) );
  }
  i972.defaultParameterValues = i982
  request.r(i973[7], i973[8], 0, i972, 'unityFallbackShader')
  i972.readDepth = !!i973[9]
  i972.hasDepthOnlyPass = !!i973[10]
  i972.isCreatedByShaderGraph = !!i973[11]
  i972.disableBatching = !!i973[12]
  i972.compiled = !!i973[13]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i987 = data
  i986.shaderName = i987[0]
  i986.errorMessage = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i992 = root || new pc.UnityShaderPass()
  var i993 = data
  i992.id = i993[0]
  i992.subShaderIndex = i993[1]
  i992.name = i993[2]
  i992.passType = i993[3]
  i992.grabPassTextureName = i993[4]
  i992.usePass = !!i993[5]
  i992.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[6], i992.zTest)
  i992.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[7], i992.zWrite)
  i992.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[8], i992.culling)
  i992.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i993[9], i992.blending)
  i992.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i993[10], i992.alphaBlending)
  i992.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[11], i992.colorWriteMask)
  i992.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[12], i992.offsetUnits)
  i992.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[13], i992.offsetFactor)
  i992.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[14], i992.stencilRef)
  i992.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[15], i992.stencilReadMask)
  i992.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[16], i992.stencilWriteMask)
  i992.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i993[17], i992.stencilOp)
  i992.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i993[18], i992.stencilOpFront)
  i992.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i993[19], i992.stencilOpBack)
  var i995 = i993[20]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i995[i + 0]) );
  }
  i992.tags = i994
  var i997 = i993[21]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i992.passDefinedKeywords = i996
  var i999 = i993[22]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i999[i + 0]) );
  }
  i992.passDefinedKeywordGroups = i998
  var i1001 = i993[23]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1001[i + 0]) );
  }
  i992.variants = i1000
  var i1003 = i993[24]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1003[i + 0]) );
  }
  i992.excludedVariants = i1002
  i992.hasDepthReader = !!i993[25]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1005 = data
  i1004.val = i1005[0]
  i1004.name = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1007 = data
  i1006.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[0], i1006.src)
  i1006.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[1], i1006.dst)
  i1006.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[2], i1006.op)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1009 = data
  i1008.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[0], i1008.pass)
  i1008.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[1], i1008.fail)
  i1008.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[2], i1008.zFail)
  i1008.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[3], i1008.comp)
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.value = i1013[1]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.keywords = i1018
  i1016.hasDiscard = !!i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1023 = data
  i1022.passId = i1023[0]
  i1022.subShaderIndex = i1023[1]
  var i1025 = i1023[2]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1022.keywords = i1024
  i1022.vertexProgram = i1023[3]
  i1022.fragmentProgram = i1023[4]
  i1022.exportedForWebGl2 = !!i1023[5]
  i1022.readDepth = !!i1023[6]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'shader')
  i1028.pass = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.type = i1033[1]
  i1032.value = new pc.Vec4( i1033[2], i1033[3], i1033[4], i1033[5] )
  i1032.textureValue = i1033[6]
  i1032.shaderPropertyFlag = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1035 = data
  i1034.name = i1035[0]
  request.r(i1035[1], i1035[2], 0, i1034, 'texture')
  i1034.aabb = i1035[3]
  i1034.vertices = i1035[4]
  i1034.triangles = i1035[5]
  i1034.textureRect = UnityEngine.Rect.MinMaxRect(i1035[6], i1035[7], i1035[8], i1035[9])
  i1034.packedRect = UnityEngine.Rect.MinMaxRect(i1035[10], i1035[11], i1035[12], i1035[13])
  i1034.border = new pc.Vec4( i1035[14], i1035[15], i1035[16], i1035[17] )
  i1034.transparency = i1035[18]
  i1034.bounds = i1035[19]
  i1034.pixelsPerUnit = i1035[20]
  i1034.textureWidth = i1035[21]
  i1034.textureHeight = i1035[22]
  i1034.nativeSize = new pc.Vec2( i1035[23], i1035[24] )
  i1034.pivot = new pc.Vec2( i1035[25], i1035[26] )
  i1034.textureRectOffset = new pc.Vec2( i1035[27], i1035[28] )
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1037 = data
  i1036.name = i1037[0]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.wrapMode = i1039[1]
  i1038.isLooping = !!i1039[2]
  i1038.length = i1039[3]
  var i1041 = i1039[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1041[i + 0]) );
  }
  i1038.curves = i1040
  var i1043 = i1039[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1043[i + 0]) );
  }
  i1038.events = i1042
  i1038.halfPrecision = !!i1039[6]
  i1038._frameRate = i1039[7]
  i1038.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1039[8], i1038.localBounds)
  i1038.hasMuscleCurves = !!i1039[9]
  var i1045 = i1039[10]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1038.clipMuscleConstant = i1044
  i1038.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1039[11], i1038.clipBindingConstant)
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1049 = data
  i1048.path = i1049[0]
  i1048.hash = i1049[1]
  i1048.componentType = i1049[2]
  i1048.property = i1049[3]
  i1048.keys = i1049[4]
  var i1051 = i1049[5]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1051[i + 0]) );
  }
  i1048.objectReferenceKeys = i1050
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1055 = data
  i1054.time = i1055[0]
  request.r(i1055[1], i1055[2], 0, i1054, 'value')
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1059 = data
  i1058.functionName = i1059[0]
  i1058.floatParameter = i1059[1]
  i1058.intParameter = i1059[2]
  i1058.stringParameter = i1059[3]
  request.r(i1059[4], i1059[5], 0, i1058, 'objectReferenceParameter')
  i1058.time = i1059[6]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1061 = data
  i1060.center = new pc.Vec3( i1061[0], i1061[1], i1061[2] )
  i1060.extends = new pc.Vec3( i1061[3], i1061[4], i1061[5] )
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.genericBindings = i1066
  var i1069 = i1065[1]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( i1069[i + 0] );
  }
  i1064.pptrCurveMapping = i1068
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.ascent = i1071[1]
  i1070.originalLineHeight = i1071[2]
  i1070.fontSize = i1071[3]
  var i1073 = i1071[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1073[i + 0]) );
  }
  i1070.characterInfo = i1072
  request.r(i1071[5], i1071[6], 0, i1070, 'texture')
  i1070.originalFontSize = i1071[7]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1077 = data
  i1076.index = i1077[0]
  i1076.advance = i1077[1]
  i1076.bearing = i1077[2]
  i1076.glyphWidth = i1077[3]
  i1076.glyphHeight = i1077[4]
  i1076.minX = i1077[5]
  i1076.maxX = i1077[6]
  i1076.minY = i1077[7]
  i1076.maxY = i1077[8]
  i1076.uvBottomLeftX = i1077[9]
  i1076.uvBottomLeftY = i1077[10]
  i1076.uvBottomRightX = i1077[11]
  i1076.uvBottomRightY = i1077[12]
  i1076.uvTopLeftX = i1077[13]
  i1076.uvTopLeftY = i1077[14]
  i1076.uvTopRightX = i1077[15]
  i1076.uvTopRightY = i1077[16]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1079 = data
  i1078.name = i1079[0]
  var i1081 = i1079[1]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1081[i + 0]) );
  }
  i1078.layers = i1080
  var i1083 = i1079[2]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1083[i + 0]) );
  }
  i1078.parameters = i1082
  i1078.animationClips = i1079[3]
  i1078.avatarUnsupported = i1079[4]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.defaultWeight = i1087[1]
  i1086.blendingMode = i1087[2]
  i1086.avatarMask = i1087[3]
  i1086.syncedLayerIndex = i1087[4]
  i1086.syncedLayerAffectsTiming = !!i1087[5]
  i1086.syncedLayers = i1087[6]
  i1086.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1087[7], i1086.stateMachine)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1089 = data
  i1088.id = i1089[0]
  i1088.name = i1089[1]
  i1088.path = i1089[2]
  var i1091 = i1089[3]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1091[i + 0]) );
  }
  i1088.states = i1090
  var i1093 = i1089[4]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1093[i + 0]) );
  }
  i1088.machines = i1092
  var i1095 = i1089[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1095[i + 0]) );
  }
  i1088.entryStateTransitions = i1094
  var i1097 = i1089[6]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1097[i + 0]) );
  }
  i1088.exitStateTransitions = i1096
  var i1099 = i1089[7]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1099[i + 0]) );
  }
  i1088.anyStateTransitions = i1098
  i1088.defaultStateId = i1089[8]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  i1102.cycleOffset = i1103[2]
  i1102.cycleOffsetParameter = i1103[3]
  i1102.cycleOffsetParameterActive = !!i1103[4]
  i1102.mirror = !!i1103[5]
  i1102.mirrorParameter = i1103[6]
  i1102.mirrorParameterActive = !!i1103[7]
  i1102.motionId = i1103[8]
  i1102.nameHash = i1103[9]
  i1102.fullPathHash = i1103[10]
  i1102.speed = i1103[11]
  i1102.speedParameter = i1103[12]
  i1102.speedParameterActive = !!i1103[13]
  i1102.tag = i1103[14]
  i1102.tagHash = i1103[15]
  i1102.writeDefaultValues = !!i1103[16]
  var i1105 = i1103[17]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.behaviours = i1104
  var i1107 = i1103[18]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1107[i + 0]) );
  }
  i1102.transitions = i1106
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1113 = data
  i1112.fullPath = i1113[0]
  i1112.canTransitionToSelf = !!i1113[1]
  i1112.duration = i1113[2]
  i1112.exitTime = i1113[3]
  i1112.hasExitTime = !!i1113[4]
  i1112.hasFixedDuration = !!i1113[5]
  i1112.interruptionSource = i1113[6]
  i1112.offset = i1113[7]
  i1112.orderedInterruption = !!i1113[8]
  i1112.destinationStateId = i1113[9]
  i1112.isExit = !!i1113[10]
  i1112.mute = !!i1113[11]
  i1112.solo = !!i1113[12]
  var i1115 = i1113[13]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1115[i + 0]) );
  }
  i1112.conditions = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1121 = data
  i1120.destinationStateId = i1121[0]
  i1120.isExit = !!i1121[1]
  i1120.mute = !!i1121[2]
  i1120.solo = !!i1121[3]
  var i1123 = i1121[4]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1123[i + 0]) );
  }
  i1120.conditions = i1122
  return i1120
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

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1131 = data
  i1130.mode = i1131[0]
  i1130.parameter = i1131[1]
  i1130.threshold = i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.bytes64 = i1133[1]
  i1132.data = i1133[2]
  return i1132
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1135 = data
  i1134.normalStyle = i1135[0]
  i1134.normalSpacingOffset = i1135[1]
  i1134.boldStyle = i1135[2]
  i1134.boldSpacing = i1135[3]
  i1134.italicStyle = i1135[4]
  i1134.tabSize = i1135[5]
  request.r(i1135[6], i1135[7], 0, i1134, 'atlas')
  i1134.m_SourceFontFileGUID = i1135[8]
  i1134.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1135[9], i1134.m_CreationSettings)
  request.r(i1135[10], i1135[11], 0, i1134, 'm_SourceFontFile')
  i1134.m_SourceFontFilePath = i1135[12]
  i1134.m_AtlasPopulationMode = i1135[13]
  i1134.InternalDynamicOS = !!i1135[14]
  var i1137 = i1135[15]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('UnityEngine.TextCore.Glyph', i1137[i + 0]));
  }
  i1134.m_GlyphTable = i1136
  var i1139 = i1135[16]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('TMPro.TMP_Character', i1139[i + 0]));
  }
  i1134.m_CharacterTable = i1138
  var i1141 = i1135[17]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1134.m_AtlasTextures = i1140
  i1134.m_AtlasTextureIndex = i1135[18]
  i1134.m_IsMultiAtlasTexturesEnabled = !!i1135[19]
  i1134.m_GetFontFeatures = !!i1135[20]
  i1134.m_ClearDynamicDataOnBuild = !!i1135[21]
  i1134.m_AtlasWidth = i1135[22]
  i1134.m_AtlasHeight = i1135[23]
  i1134.m_AtlasPadding = i1135[24]
  i1134.m_AtlasRenderMode = i1135[25]
  var i1143 = i1135[26]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('UnityEngine.TextCore.GlyphRect', i1143[i + 0]));
  }
  i1134.m_UsedGlyphRects = i1142
  var i1145 = i1135[27]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('UnityEngine.TextCore.GlyphRect', i1145[i + 0]));
  }
  i1134.m_FreeGlyphRects = i1144
  i1134.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1135[28], i1134.m_FontFeatureTable)
  i1134.m_ShouldReimportFontFeatures = !!i1135[29]
  var i1147 = i1135[30]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1134.m_FallbackFontAssetTable = i1146
  var i1149 = i1135[31]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('TMPro.TMP_FontWeightPair', i1149[i + 0]) );
  }
  i1134.m_FontWeightTable = i1148
  var i1151 = i1135[32]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('TMPro.TMP_FontWeightPair', i1151[i + 0]) );
  }
  i1134.fontWeights = i1150
  i1134.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1135[33], i1134.m_fontInfo)
  var i1153 = i1135[34]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.TMP_Glyph', i1153[i + 0]));
  }
  i1134.m_glyphInfoList = i1152
  i1134.m_KerningTable = request.d('TMPro.KerningTable', i1135[35], i1134.m_KerningTable)
  var i1155 = i1135[36]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1134.fallbackFontAssets = i1154
  i1134.m_Version = i1135[37]
  i1134.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1135[38], i1134.m_FaceInfo)
  request.r(i1135[39], i1135[40], 0, i1134, 'm_Material')
  return i1134
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1157 = data
  i1156.sourceFontFileName = i1157[0]
  i1156.sourceFontFileGUID = i1157[1]
  i1156.faceIndex = i1157[2]
  i1156.pointSizeSamplingMode = i1157[3]
  i1156.pointSize = i1157[4]
  i1156.padding = i1157[5]
  i1156.paddingMode = i1157[6]
  i1156.packingMode = i1157[7]
  i1156.atlasWidth = i1157[8]
  i1156.atlasHeight = i1157[9]
  i1156.characterSetSelectionMode = i1157[10]
  i1156.characterSequence = i1157[11]
  i1156.referencedFontAssetGUID = i1157[12]
  i1156.referencedTextAssetGUID = i1157[13]
  i1156.fontStyle = i1157[14]
  i1156.fontStyleModifier = i1157[15]
  i1156.renderMode = i1157[16]
  i1156.includeFontFeatures = !!i1157[17]
  return i1156
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1161 = data
  i1160.m_Index = i1161[0]
  i1160.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1161[1], i1160.m_Metrics)
  i1160.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1161[2], i1160.m_GlyphRect)
  i1160.m_Scale = i1161[3]
  i1160.m_AtlasIndex = i1161[4]
  i1160.m_ClassDefinitionType = i1161[5]
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

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1171 = data
  i1170.m_X = i1171[0]
  i1170.m_Y = i1171[1]
  i1170.m_Width = i1171[2]
  i1170.m_Height = i1171[3]
  return i1170
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.MultipleSubstitutionRecord', i1175[i + 0]));
  }
  i1172.m_MultipleSubstitutionRecords = i1174
  var i1177 = i1173[1]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.LigatureSubstitutionRecord', i1177[i + 0]));
  }
  i1172.m_LigatureSubstitutionRecords = i1176
  var i1179 = i1173[2]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1179[i + 0]));
  }
  i1172.m_GlyphPairAdjustmentRecords = i1178
  var i1181 = i1173[3]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1181[i + 0]));
  }
  i1172.m_MarkToBaseAdjustmentRecords = i1180
  var i1183 = i1173[4]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1183[i + 0]));
  }
  i1172.m_MarkToMarkAdjustmentRecords = i1182
  return i1172
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1187 = data
  i1186.m_TargetGlyphID = i1187[0]
  i1186.m_SubstituteGlyphIDs = i1187[1]
  return i1186
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1191 = data
  i1190.m_ComponentGlyphIDs = i1191[0]
  i1190.m_LigatureGlyphID = i1191[1]
  return i1190
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1195 = data
  i1194.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1195[0], i1194.m_FirstAdjustmentRecord)
  i1194.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1195[1], i1194.m_SecondAdjustmentRecord)
  i1194.m_FeatureLookupFlags = i1195[2]
  return i1194
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1197 = data
  i1196.m_GlyphIndex = i1197[0]
  i1196.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1197[1], i1196.m_GlyphValueRecord)
  return i1196
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1199 = data
  i1198.m_XPlacement = i1199[0]
  i1198.m_YPlacement = i1199[1]
  i1198.m_XAdvance = i1199[2]
  i1198.m_YAdvance = i1199[3]
  return i1198
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1203 = data
  i1202.m_BaseGlyphID = i1203[0]
  i1202.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1203[1], i1202.m_BaseGlyphAnchorPoint)
  i1202.m_MarkGlyphID = i1203[2]
  i1202.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1203[3], i1202.m_MarkPositionAdjustment)
  return i1202
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1207 = data
  i1206.m_BaseMarkGlyphID = i1207[0]
  i1206.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1207[1], i1206.m_BaseMarkGlyphAnchorPoint)
  i1206.m_CombiningMarkGlyphID = i1207[2]
  i1206.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1207[3], i1206.m_CombiningMarkPositionAdjustment)
  return i1206
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'regularTypeface')
  request.r(i1213[2], i1213[3], 0, i1212, 'italicTypeface')
  return i1212
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1215 = data
  i1214.Name = i1215[0]
  i1214.PointSize = i1215[1]
  i1214.Scale = i1215[2]
  i1214.CharacterCount = i1215[3]
  i1214.LineHeight = i1215[4]
  i1214.Baseline = i1215[5]
  i1214.Ascender = i1215[6]
  i1214.CapHeight = i1215[7]
  i1214.Descender = i1215[8]
  i1214.CenterLine = i1215[9]
  i1214.SuperscriptOffset = i1215[10]
  i1214.SubscriptOffset = i1215[11]
  i1214.SubSize = i1215[12]
  i1214.Underline = i1215[13]
  i1214.UnderlineThickness = i1215[14]
  i1214.strikethrough = i1215[15]
  i1214.strikethroughThickness = i1215[16]
  i1214.TabWidth = i1215[17]
  i1214.Padding = i1215[18]
  i1214.AtlasWidth = i1215[19]
  i1214.AtlasHeight = i1215[20]
  return i1214
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.x = i1219[1]
  i1218.y = i1219[2]
  i1218.width = i1219[3]
  i1218.height = i1219[4]
  i1218.xOffset = i1219[5]
  i1218.yOffset = i1219[6]
  i1218.xAdvance = i1219[7]
  i1218.scale = i1219[8]
  return i1218
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.KerningTable' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.KerningPair', i1223[i + 0]));
  }
  i1220.kerningPairs = i1222
  return i1220
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.KerningPair' )
  var i1227 = data
  i1226.xOffset = i1227[0]
  i1226.m_FirstGlyph = i1227[1]
  i1226.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1227[2], i1226.m_FirstGlyphAdjustments)
  i1226.m_SecondGlyph = i1227[3]
  i1226.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1227[4], i1226.m_SecondGlyphAdjustments)
  i1226.m_IgnoreSpacingAdjustments = !!i1227[5]
  return i1226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1229 = data
  i1228.m_FaceIndex = i1229[0]
  i1228.m_FamilyName = i1229[1]
  i1228.m_StyleName = i1229[2]
  i1228.m_PointSize = i1229[3]
  i1228.m_Scale = i1229[4]
  i1228.m_UnitsPerEM = i1229[5]
  i1228.m_LineHeight = i1229[6]
  i1228.m_AscentLine = i1229[7]
  i1228.m_CapLine = i1229[8]
  i1228.m_MeanLine = i1229[9]
  i1228.m_Baseline = i1229[10]
  i1228.m_DescentLine = i1229[11]
  i1228.m_SuperscriptOffset = i1229[12]
  i1228.m_SuperscriptSize = i1229[13]
  i1228.m_SubscriptOffset = i1229[14]
  i1228.m_SubscriptSize = i1229[15]
  i1228.m_UnderlineOffset = i1229[16]
  i1228.m_UnderlineThickness = i1229[17]
  i1228.m_StrikethroughOffset = i1229[18]
  i1228.m_StrikethroughThickness = i1229[19]
  i1228.m_TabWidth = i1229[20]
  return i1228
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1231 = data
  i1230.m_Width = i1231[0]
  i1230.m_Height = i1231[1]
  i1230.m_HorizontalBearingX = i1231[2]
  i1230.m_HorizontalBearingY = i1231[3]
  i1230.m_HorizontalAdvance = i1231[4]
  return i1230
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_Settings' )
  var i1233 = data
  i1232.assetVersion = i1233[0]
  i1232.m_TextWrappingMode = i1233[1]
  i1232.m_enableKerning = !!i1233[2]
  var i1235 = i1233[3]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(i1235[i + 0]);
  }
  i1232.m_ActiveFontFeatures = i1234
  i1232.m_enableExtraPadding = !!i1233[4]
  i1232.m_enableTintAllSprites = !!i1233[5]
  i1232.m_enableParseEscapeCharacters = !!i1233[6]
  i1232.m_EnableRaycastTarget = !!i1233[7]
  i1232.m_GetFontFeaturesAtRuntime = !!i1233[8]
  i1232.m_missingGlyphCharacter = i1233[9]
  i1232.m_ClearDynamicDataOnBuild = !!i1233[10]
  i1232.m_warningsDisabled = !!i1233[11]
  request.r(i1233[12], i1233[13], 0, i1232, 'm_defaultFontAsset')
  i1232.m_defaultFontAssetPath = i1233[14]
  i1232.m_defaultFontSize = i1233[15]
  i1232.m_defaultAutoSizeMinRatio = i1233[16]
  i1232.m_defaultAutoSizeMaxRatio = i1233[17]
  i1232.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1233[18], i1233[19] )
  i1232.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1233[20], i1233[21] )
  i1232.m_autoSizeTextContainer = !!i1233[22]
  i1232.m_IsTextObjectScaleStatic = !!i1233[23]
  var i1237 = i1233[24]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1232.m_fallbackFontAssets = i1236
  i1232.m_matchMaterialPreset = !!i1233[25]
  i1232.m_HideSubTextObjects = !!i1233[26]
  request.r(i1233[27], i1233[28], 0, i1232, 'm_defaultSpriteAsset')
  i1232.m_defaultSpriteAssetPath = i1233[29]
  i1232.m_enableEmojiSupport = !!i1233[30]
  i1232.m_MissingCharacterSpriteUnicode = i1233[31]
  var i1239 = i1233[32]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1232.m_EmojiFallbackTextAssets = i1238
  i1232.m_defaultColorGradientPresetsPath = i1233[33]
  request.r(i1233[34], i1233[35], 0, i1232, 'm_defaultStyleSheet')
  i1232.m_StyleSheetsResourcePath = i1233[36]
  request.r(i1233[37], i1233[38], 0, i1232, 'm_leadingCharacters')
  request.r(i1233[39], i1233[40], 0, i1232, 'm_followingCharacters')
  i1232.m_UseModernHangulLineBreakingRules = !!i1233[41]
  return i1232
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'spriteSheet')
  var i1245 = i1243[2]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Sprite', i1245[i + 0]));
  }
  i1242.spriteInfoList = i1244
  var i1247 = i1243[3]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1242.fallbackSpriteAssets = i1246
  var i1249 = i1243[4]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('TMPro.TMP_SpriteCharacter', i1249[i + 0]));
  }
  i1242.m_SpriteCharacterTable = i1248
  var i1251 = i1243[5]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_SpriteGlyph', i1251[i + 0]));
  }
  i1242.m_GlyphTable = i1250
  i1242.m_Version = i1243[6]
  i1242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1243[7], i1242.m_FaceInfo)
  request.r(i1243[8], i1243[9], 0, i1242, 'm_Material')
  return i1242
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1255 = data
  i1254.name = i1255[0]
  i1254.hashCode = i1255[1]
  i1254.unicode = i1255[2]
  i1254.pivot = new pc.Vec2( i1255[3], i1255[4] )
  request.r(i1255[5], i1255[6], 0, i1254, 'sprite')
  i1254.id = i1255[7]
  i1254.x = i1255[8]
  i1254.y = i1255[9]
  i1254.width = i1255[10]
  i1254.height = i1255[11]
  i1254.xOffset = i1255[12]
  i1254.yOffset = i1255[13]
  i1254.xAdvance = i1255[14]
  i1254.scale = i1255[15]
  return i1254
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1261 = data
  i1260.m_Name = i1261[0]
  i1260.m_ElementType = i1261[1]
  i1260.m_Unicode = i1261[2]
  i1260.m_GlyphIndex = i1261[3]
  i1260.m_Scale = i1261[4]
  return i1260
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'sprite')
  i1264.m_Index = i1265[2]
  i1264.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1265[3], i1264.m_Metrics)
  i1264.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1265[4], i1264.m_GlyphRect)
  i1264.m_Scale = i1265[5]
  i1264.m_AtlasIndex = i1265[6]
  i1264.m_ClassDefinitionType = i1265[7]
  return i1264
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Style', i1269[i + 0]));
  }
  i1266.m_StyleList = i1268
  return i1266
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Style' )
  var i1273 = data
  i1272.m_Name = i1273[0]
  i1272.m_HashCode = i1273[1]
  i1272.m_OpeningDefinition = i1273[2]
  i1272.m_ClosingDefinition = i1273[3]
  i1272.m_OpeningTagArray = i1273[4]
  i1272.m_ClosingTagArray = i1273[5]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1277[i + 0]) );
  }
  i1274.files = i1276
  i1274.componentToPrefabIds = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1281 = data
  i1280.path = i1281[0]
  request.r(i1281[1], i1281[2], 0, i1280, 'unityObject')
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1285[i + 0]) );
  }
  i1282.scriptsExecutionOrder = i1284
  var i1287 = i1283[1]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1287[i + 0]) );
  }
  i1282.sortingLayers = i1286
  var i1289 = i1283[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1289[i + 0]) );
  }
  i1282.cullingLayers = i1288
  i1282.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1283[3], i1282.timeSettings)
  i1282.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1283[4], i1282.physicsSettings)
  i1282.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1283[5], i1282.physics2DSettings)
  i1282.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1283[6], i1282.qualitySettings)
  i1282.enableRealtimeShadows = !!i1283[7]
  i1282.enableAutoInstancing = !!i1283[8]
  i1282.enableStaticBatching = !!i1283[9]
  i1282.enableDynamicBatching = !!i1283[10]
  i1282.lightmapEncodingQuality = i1283[11]
  i1282.desiredColorSpace = i1283[12]
  var i1291 = i1283[13]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1282.allTags = i1290
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.value = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1299 = data
  i1298.id = i1299[0]
  i1298.name = i1299[1]
  i1298.value = i1299[2]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1303 = data
  i1302.id = i1303[0]
  i1302.name = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1305 = data
  i1304.fixedDeltaTime = i1305[0]
  i1304.maximumDeltaTime = i1305[1]
  i1304.timeScale = i1305[2]
  i1304.maximumParticleTimestep = i1305[3]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1307 = data
  i1306.gravity = new pc.Vec3( i1307[0], i1307[1], i1307[2] )
  i1306.defaultSolverIterations = i1307[3]
  i1306.bounceThreshold = i1307[4]
  i1306.autoSyncTransforms = !!i1307[5]
  i1306.autoSimulation = !!i1307[6]
  var i1309 = i1307[7]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1309[i + 0]) );
  }
  i1306.collisionMatrix = i1308
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.layerId = i1313[1]
  i1312.otherLayerId = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'material')
  i1314.gravity = new pc.Vec2( i1315[2], i1315[3] )
  i1314.positionIterations = i1315[4]
  i1314.velocityIterations = i1315[5]
  i1314.velocityThreshold = i1315[6]
  i1314.maxLinearCorrection = i1315[7]
  i1314.maxAngularCorrection = i1315[8]
  i1314.maxTranslationSpeed = i1315[9]
  i1314.maxRotationSpeed = i1315[10]
  i1314.baumgarteScale = i1315[11]
  i1314.baumgarteTOIScale = i1315[12]
  i1314.timeToSleep = i1315[13]
  i1314.linearSleepTolerance = i1315[14]
  i1314.angularSleepTolerance = i1315[15]
  i1314.defaultContactOffset = i1315[16]
  i1314.autoSimulation = !!i1315[17]
  i1314.queriesHitTriggers = !!i1315[18]
  i1314.queriesStartInColliders = !!i1315[19]
  i1314.callbacksOnDisable = !!i1315[20]
  i1314.reuseCollisionCallbacks = !!i1315[21]
  i1314.autoSyncTransforms = !!i1315[22]
  var i1317 = i1315[23]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1317[i + 0]) );
  }
  i1314.collisionMatrix = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.layerId = i1321[1]
  i1320.otherLayerId = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1325[i + 0]) );
  }
  i1322.qualityLevels = i1324
  var i1327 = i1323[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1322.names = i1326
  i1322.shadows = i1323[2]
  i1322.anisotropicFiltering = i1323[3]
  i1322.antiAliasing = i1323[4]
  i1322.lodBias = i1323[5]
  i1322.shadowCascades = i1323[6]
  i1322.shadowDistance = i1323[7]
  i1322.shadowmaskMode = i1323[8]
  i1322.shadowProjection = i1323[9]
  i1322.shadowResolution = i1323[10]
  i1322.softParticles = !!i1323[11]
  i1322.softVegetation = !!i1323[12]
  i1322.activeColorSpace = i1323[13]
  i1322.desiredColorSpace = i1323[14]
  i1322.masterTextureLimit = i1323[15]
  i1322.maxQueuedFrames = i1323[16]
  i1322.particleRaycastBudget = i1323[17]
  i1322.pixelLightCount = i1323[18]
  i1322.realtimeReflectionProbes = !!i1323[19]
  i1322.shadowCascade2Split = i1323[20]
  i1322.shadowCascade4Split = new pc.Vec3( i1323[21], i1323[22], i1323[23] )
  i1322.streamingMipmapsActive = !!i1323[24]
  i1322.vSyncCount = i1323[25]
  i1322.asyncUploadBufferSize = i1323[26]
  i1322.asyncUploadTimeSlice = i1323[27]
  i1322.billboardsFaceCameraPosition = !!i1323[28]
  i1322.shadowNearPlaneOffset = i1323[29]
  i1322.streamingMipmapsMemoryBudget = i1323[30]
  i1322.maximumLODLevel = i1323[31]
  i1322.streamingMipmapsAddAllCameras = !!i1323[32]
  i1322.streamingMipmapsMaxLevelReduction = i1323[33]
  i1322.streamingMipmapsRenderersPerFrame = i1323[34]
  i1322.resolutionScalingFixedDPIFactor = i1323[35]
  i1322.streamingMipmapsMaxFileIORequests = i1323[36]
  i1322.currentQualityLevel = i1323[37]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1333 = data
  i1332.weight = i1333[0]
  i1332.vertices = i1333[1]
  i1332.normals = i1333[2]
  i1332.tangents = i1333[3]
  return i1332
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1335 = data
  i1334.m_XCoordinate = i1335[0]
  i1334.m_YCoordinate = i1335[1]
  return i1334
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1337 = data
  i1336.m_XPositionAdjustment = i1337[0]
  i1336.m_YPositionAdjustment = i1337[1]
  return i1336
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1339 = data
  i1338.xPlacement = i1339[0]
  i1338.yPlacement = i1339[1]
  i1338.xAdvance = i1339[2]
  i1338.yAdvance = i1339[3]
  return i1338
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[34],"58":[1],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[1],"81":[30],"82":[83],"84":[83],"16":[15],"4":[1],"85":[28],"86":[1],"87":[88],"89":[42],"90":[16],"91":[15],"31":[30,15],"22":[15,23],"92":[15],"93":[23,15],"94":[30],"95":[23,15],"96":[15],"97":[98],"99":[98],"100":[98],"101":[102],"103":[15],"104":[15],"19":[16],"21":[23,15],"105":[15],"18":[16],"106":[15],"107":[15],"108":[15],"109":[15],"110":[15],"111":[15],"112":[15],"113":[15],"114":[15],"115":[23,15],"116":[15],"117":[15],"118":[15],"119":[15],"39":[23,15],"120":[15],"121":[42],"122":[42],"43":[42],"123":[42],"124":[1],"125":[1]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","InputManager","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","ItemGraphic","ItemMovement","UnityEngine.UI.Text","UnityEngine.Font","PlaySound","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Shader","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "6.4";

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

Deserializers.buildID = "35bfbe8d-4388-4a20-bf15-afe0ed429b30";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

