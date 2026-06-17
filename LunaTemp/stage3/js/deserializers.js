var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointSpring' )
  var i719 = data
  i718.spring = i719[0]
  i718.damper = i719[1]
  i718.targetPosition = i719[2]
  return i718
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointMotor' )
  var i721 = data
  i720.m_TargetVelocity = i721[0]
  i720.m_Force = i721[1]
  i720.m_FreeSpin = i721[2]
  return i720
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointLimits' )
  var i723 = data
  i722.m_Min = i723[0]
  i722.m_Max = i723[1]
  i722.m_Bounciness = i723[2]
  i722.m_BounceMinVelocity = i723[3]
  i722.m_ContactDistance = i723[4]
  i722.minBounce = i723[5]
  i722.maxBounce = i723[6]
  return i722
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointDrive' )
  var i725 = data
  i724.m_PositionSpring = i725[0]
  i724.m_PositionDamper = i725[1]
  i724.m_MaximumForce = i725[2]
  i724.m_UseAcceleration = i725[3]
  return i724
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i727 = data
  i726.m_Spring = i727[0]
  i726.m_Damper = i727[1]
  return i726
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i729 = data
  i728.m_Limit = i729[0]
  i728.m_Bounciness = i729[1]
  i728.m_ContactDistance = i729[2]
  return i728
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i731 = data
  i730.m_ExtremumSlip = i731[0]
  i730.m_ExtremumValue = i731[1]
  i730.m_AsymptoteSlip = i731[2]
  i730.m_AsymptoteValue = i731[3]
  i730.m_Stiffness = i731[4]
  return i730
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i733 = data
  i732.m_LowerAngle = i733[0]
  i732.m_UpperAngle = i733[1]
  return i732
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i735 = data
  i734.m_MotorSpeed = i735[0]
  i734.m_MaximumMotorTorque = i735[1]
  return i734
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i737 = data
  i736.m_DampingRatio = i737[0]
  i736.m_Frequency = i737[1]
  i736.m_Angle = i737[2]
  return i736
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i739 = data
  i738.m_LowerTranslation = i739[0]
  i738.m_UpperTranslation = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i741 = data
  i740.position = new pc.Vec3( i741[0], i741[1], i741[2] )
  i740.scale = new pc.Vec3( i741[3], i741[4], i741[5] )
  i740.rotation = new pc.Quat(i741[6], i741[7], i741[8], i741[9])
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i743 = data
  i742.aspect = i743[0]
  i742.orthographic = !!i743[1]
  i742.orthographicSize = i743[2]
  i742.backgroundColor = new pc.Color(i743[3], i743[4], i743[5], i743[6])
  i742.nearClipPlane = i743[7]
  i742.farClipPlane = i743[8]
  i742.fieldOfView = i743[9]
  i742.depth = i743[10]
  i742.clearFlags = i743[11]
  i742.cullingMask = i743[12]
  i742.rect = i743[13]
  request.r(i743[14], i743[15], 0, i742, 'targetTexture')
  i742.usePhysicalProperties = !!i743[16]
  i742.focalLength = i743[17]
  i742.sensorSize = new pc.Vec2( i743[18], i743[19] )
  i742.lensShift = new pc.Vec2( i743[20], i743[21] )
  i742.gateFit = i743[22]
  i742.commandBufferCount = i743[23]
  i742.cameraType = i743[24]
  i742.enabled = !!i743[25]
  return i742
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i744 = root || request.c( 'AutoCameraFit' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'canvasBtn')
  request.r(i745[2], i745[3], 0, i744, 'targetArea')
  i744.paddingLandscape = i745[4]
  i744.paddingPortrait = i745[5]
  i744.extraPaddingSmallScreen = i745[6]
  i744.smallScreenThreshold = i745[7]
  i744.autoUpdateOnResize = !!i745[8]
  i744.adjustInEditMode = !!i745[9]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i747 = data
  i746.name = i747[0]
  i746.tagId = i747[1]
  i746.enabled = !!i747[2]
  i746.isStatic = !!i747[3]
  i746.layer = i747[4]
  return i746
}

Deserializers["InputManager"] = function (request, data, root) {
  var i748 = root || request.c( 'InputManager' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'mainCamera')
  i748.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i749[2] )
  i748.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i749[3] )
  i748.installLayer = UnityEngine.LayerMask.FromIntegerValue( i749[4] )
  i748.maxDistance = i749[5]
  i748.itemsToGotoStore = i749[6]
  i748.dragSortingOffset = i749[7]
  i748.useDragBounds = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'dragBounds')
  return i748
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i750 = root || request.c( 'HandHintMmanager' )
  var i751 = data
  var i753 = i751[0]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i750.hintItems = i752
  request.r(i751[1], i751[2], 0, i750, 'handHintObject')
  request.r(i751[3], i751[4], 0, i750, 'handAnimator')
  i750.idleTimeToHint = i751[5]
  i750.dragAnimDuration = i751[6]
  request.r(i751[7], i751[8], 0, i750, 'startHintPos')
  request.r(i751[9], i751[10], 0, i750, 'endHintPos')
  return i750
}

Deserializers["GameManager"] = function (request, data, root) {
  var i756 = root || request.c( 'GameManager' )
  var i757 = data
  i756.fxStartVoice = i757[0]
  i756.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i757[1], i756.onLoseGame)
  i756.isGameEnded = !!i757[2]
  return i756
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.Events.PersistentCall', i763[i + 0]));
  }
  i760.m_Calls = i762
  return i760
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Target')
  i766.m_TargetAssemblyTypeName = i767[2]
  i766.m_MethodName = i767[3]
  i766.m_Mode = i767[4]
  i766.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i767[5], i766.m_Arguments)
  i766.m_CallState = i767[6]
  return i766
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_ObjectArgument')
  i768.m_ObjectArgumentAssemblyTypeName = i769[2]
  i768.m_IntArgument = i769[3]
  i768.m_FloatArgument = i769[4]
  i768.m_StringArgument = i769[5]
  i768.m_BoolArgument = !!i769[6]
  return i768
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i770 = root || request.c( 'ItemManager' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770.items = i772
  i770.totalItemsDropped = i771[1]
  i770.onItemDropped = request.d('UnityEngine.Events.UnityEvent', i771[2], i770.onItemDropped)
  return i770
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i774 = root || request.c( 'Ply_SoundManager' )
  var i775 = data
  i774.fxAudio = request.d('FxAudio', i775[0], i774.fxAudio)
  request.r(i775[1], i775[2], 0, i774, 'bgm1')
  return i774
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i776 = root || request.c( 'FxAudio' )
  var i777 = data
  i776.None = request.d('SoundData', i777[0], i776.None)
  i776.ClickBox = request.d('SoundData', i777[1], i776.ClickBox)
  i776.StartVoice = request.d('SoundData', i777[2], i776.StartVoice)
  i776.voice_lv52_bottle = request.d('SoundData', i777[3], i776.voice_lv52_bottle)
  i776.voice_lv52_fruit = request.d('SoundData', i777[4], i776.voice_lv52_fruit)
  i776.voice_lv52_icecup = request.d('SoundData', i777[5], i776.voice_lv52_icecup)
  i776.voice_lv52_icream = request.d('SoundData', i777[6], i776.voice_lv52_icream)
  i776.voice_lv52_ladle = request.d('SoundData', i777[7], i776.voice_lv52_ladle)
  i776.voice_lv52_milk = request.d('SoundData', i777[8], i776.voice_lv52_milk)
  i776.voice_lv52_shirt = request.d('SoundData', i777[9], i776.voice_lv52_shirt)
  i776.voice_lv52_tofu = request.d('SoundData', i777[10], i776.voice_lv52_tofu)
  i776.voice_lv52_water = request.d('SoundData', i777[11], i776.voice_lv52_water)
  i776.Correct = request.d('SoundData', i777[12], i776.Correct)
  i776.FridgeOpen = request.d('SoundData', i777[13], i776.FridgeOpen)
  i776.water = request.d('SoundData', i777[14], i776.water)
  i776.mouse = request.d('SoundData', i777[15], i776.mouse)
  i776.wrong = request.d('SoundData', i777[16], i776.wrong)
  i776.haa = request.d('SoundData', i777[17], i776.haa)
  return i776
}

Deserializers["SoundData"] = function (request, data, root) {
  var i778 = root || request.c( 'SoundData' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'clip')
  i778.repeatCount = i779[2]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'clip')
  request.r(i781[2], i781[3], 0, i780, 'outputAudioMixerGroup')
  i780.playOnAwake = !!i781[4]
  i780.loop = !!i781[5]
  i780.time = i781[6]
  i780.volume = i781[7]
  i780.pitch = i781[8]
  i780.enabled = !!i781[9]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i783 = data
  i782.pivot = new pc.Vec2( i783[0], i783[1] )
  i782.anchorMin = new pc.Vec2( i783[2], i783[3] )
  i782.anchorMax = new pc.Vec2( i783[4], i783[5] )
  i782.sizeDelta = new pc.Vec2( i783[6], i783[7] )
  i782.anchoredPosition3D = new pc.Vec3( i783[8], i783[9], i783[10] )
  i782.rotation = new pc.Quat(i783[11], i783[12], i783[13], i783[14])
  i782.scale = new pc.Vec3( i783[15], i783[16], i783[17] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i785 = data
  i784.planeDistance = i785[0]
  i784.referencePixelsPerUnit = i785[1]
  i784.isFallbackOverlay = !!i785[2]
  i784.renderMode = i785[3]
  i784.renderOrder = i785[4]
  i784.sortingLayerName = i785[5]
  i784.sortingOrder = i785[6]
  i784.scaleFactor = i785[7]
  request.r(i785[8], i785[9], 0, i784, 'worldCamera')
  i784.overrideSorting = !!i785[10]
  i784.pixelPerfect = !!i785[11]
  i784.targetDisplay = i785[12]
  i784.overridePixelPerfect = !!i785[13]
  i784.enabled = !!i785[14]
  return i784
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i787 = data
  i786.m_UiScaleMode = i787[0]
  i786.m_ReferencePixelsPerUnit = i787[1]
  i786.m_ScaleFactor = i787[2]
  i786.m_ReferenceResolution = new pc.Vec2( i787[3], i787[4] )
  i786.m_ScreenMatchMode = i787[5]
  i786.m_MatchWidthOrHeight = i787[6]
  i786.m_PhysicalUnit = i787[7]
  i786.m_FallbackScreenDPI = i787[8]
  i786.m_DefaultSpriteDPI = i787[9]
  i786.m_DynamicPixelsPerUnit = i787[10]
  i786.m_PresetInfoIsWorld = !!i787[11]
  return i786
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i789 = data
  i788.m_IgnoreReversedGraphics = !!i789[0]
  i788.m_BlockingObjects = i789[1]
  i788.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i789[2] )
  return i788
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i790 = root || request.c( 'ProgressBarUI' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'fillImage')
  request.r(i791[2], i791[3], 0, i790, 'progressText')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i793 = data
  i792.cullTransparentMesh = !!i793[0]
  return i792
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Image' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_Sprite')
  i794.m_Type = i795[2]
  i794.m_PreserveAspect = !!i795[3]
  i794.m_FillCenter = !!i795[4]
  i794.m_FillMethod = i795[5]
  i794.m_FillAmount = i795[6]
  i794.m_FillClockwise = !!i795[7]
  i794.m_FillOrigin = i795[8]
  i794.m_UseSpriteMesh = !!i795[9]
  i794.m_PixelsPerUnitMultiplier = i795[10]
  request.r(i795[11], i795[12], 0, i794, 'm_Material')
  i794.m_Maskable = !!i795[13]
  i794.m_Color = new pc.Color(i795[14], i795[15], i795[16], i795[17])
  i794.m_RaycastTarget = !!i795[18]
  i794.m_RaycastPadding = new pc.Vec4( i795[19], i795[20], i795[21], i795[22] )
  return i794
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i797 = data
  i796.m_hasFontAssetChanged = !!i797[0]
  request.r(i797[1], i797[2], 0, i796, 'm_baseMaterial')
  i796.m_maskOffset = new pc.Vec4( i797[3], i797[4], i797[5], i797[6] )
  i796.m_text = i797[7]
  i796.m_isRightToLeft = !!i797[8]
  request.r(i797[9], i797[10], 0, i796, 'm_fontAsset')
  request.r(i797[11], i797[12], 0, i796, 'm_sharedMaterial')
  var i799 = i797[13]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.m_fontSharedMaterials = i798
  request.r(i797[14], i797[15], 0, i796, 'm_fontMaterial')
  var i801 = i797[16]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i796.m_fontMaterials = i800
  i796.m_fontColor32 = UnityEngine.Color32.ConstructColor(i797[17], i797[18], i797[19], i797[20])
  i796.m_fontColor = new pc.Color(i797[21], i797[22], i797[23], i797[24])
  i796.m_enableVertexGradient = !!i797[25]
  i796.m_colorMode = i797[26]
  i796.m_fontColorGradient = request.d('TMPro.VertexGradient', i797[27], i796.m_fontColorGradient)
  request.r(i797[28], i797[29], 0, i796, 'm_fontColorGradientPreset')
  request.r(i797[30], i797[31], 0, i796, 'm_spriteAsset')
  i796.m_tintAllSprites = !!i797[32]
  request.r(i797[33], i797[34], 0, i796, 'm_StyleSheet')
  i796.m_TextStyleHashCode = i797[35]
  i796.m_overrideHtmlColors = !!i797[36]
  i796.m_faceColor = UnityEngine.Color32.ConstructColor(i797[37], i797[38], i797[39], i797[40])
  i796.m_fontSize = i797[41]
  i796.m_fontSizeBase = i797[42]
  i796.m_fontWeight = i797[43]
  i796.m_enableAutoSizing = !!i797[44]
  i796.m_fontSizeMin = i797[45]
  i796.m_fontSizeMax = i797[46]
  i796.m_fontStyle = i797[47]
  i796.m_HorizontalAlignment = i797[48]
  i796.m_VerticalAlignment = i797[49]
  i796.m_textAlignment = i797[50]
  i796.m_characterSpacing = i797[51]
  i796.m_wordSpacing = i797[52]
  i796.m_lineSpacing = i797[53]
  i796.m_lineSpacingMax = i797[54]
  i796.m_paragraphSpacing = i797[55]
  i796.m_charWidthMaxAdj = i797[56]
  i796.m_TextWrappingMode = i797[57]
  i796.m_wordWrappingRatios = i797[58]
  i796.m_overflowMode = i797[59]
  request.r(i797[60], i797[61], 0, i796, 'm_linkedTextComponent')
  request.r(i797[62], i797[63], 0, i796, 'parentLinkedComponent')
  i796.m_enableKerning = !!i797[64]
  var i803 = i797[65]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(i803[i + 0]);
  }
  i796.m_ActiveFontFeatures = i802
  i796.m_enableExtraPadding = !!i797[66]
  i796.checkPaddingRequired = !!i797[67]
  i796.m_isRichText = !!i797[68]
  i796.m_parseCtrlCharacters = !!i797[69]
  i796.m_isOrthographic = !!i797[70]
  i796.m_isCullingEnabled = !!i797[71]
  i796.m_horizontalMapping = i797[72]
  i796.m_verticalMapping = i797[73]
  i796.m_uvLineOffset = i797[74]
  i796.m_geometrySortingOrder = i797[75]
  i796.m_IsTextObjectScaleStatic = !!i797[76]
  i796.m_VertexBufferAutoSizeReduction = !!i797[77]
  i796.m_useMaxVisibleDescender = !!i797[78]
  i796.m_pageToDisplay = i797[79]
  i796.m_margin = new pc.Vec4( i797[80], i797[81], i797[82], i797[83] )
  i796.m_isUsingLegacyAnimationComponent = !!i797[84]
  i796.m_isVolumetricText = !!i797[85]
  request.r(i797[86], i797[87], 0, i796, 'm_Material')
  i796.m_EmojiFallbackSupport = !!i797[88]
  i796.m_Maskable = !!i797[89]
  i796.m_Color = new pc.Color(i797[90], i797[91], i797[92], i797[93])
  i796.m_RaycastTarget = !!i797[94]
  i796.m_RaycastPadding = new pc.Vec4( i797[95], i797[96], i797[97], i797[98] )
  return i796
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.VertexGradient' )
  var i807 = data
  i806.topLeft = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.topRight = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.bottomLeft = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.bottomRight = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'animatorController')
  request.r(i811[2], i811[3], 0, i810, 'avatar')
  i810.updateMode = i811[4]
  i810.hasTransformHierarchy = !!i811[5]
  i810.applyRootMotion = !!i811[6]
  var i813 = i811[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.humanBones = i812
  i810.enabled = !!i811[8]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i817 = data
  i816.color = new pc.Color(i817[0], i817[1], i817[2], i817[3])
  request.r(i817[4], i817[5], 0, i816, 'sprite')
  i816.flipX = !!i817[6]
  i816.flipY = !!i817[7]
  i816.drawMode = i817[8]
  i816.size = new pc.Vec2( i817[9], i817[10] )
  i816.tileMode = i817[11]
  i816.adaptiveModeThreshold = i817[12]
  i816.maskInteraction = i817[13]
  i816.spriteSortPoint = i817[14]
  i816.enabled = !!i817[15]
  request.r(i817[16], i817[17], 0, i816, 'sharedMaterial')
  var i819 = i817[18]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[19]
  i816.shadowCastingMode = i817[20]
  i816.sortingLayerID = i817[21]
  i816.sortingOrder = i817[22]
  i816.lightmapIndex = i817[23]
  i816.lightmapSceneIndex = i817[24]
  i816.lightmapScaleOffset = new pc.Vec4( i817[25], i817[26], i817[27], i817[28] )
  i816.lightProbeUsage = i817[29]
  i816.reflectionProbeUsage = i817[30]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.size = new pc.Vec3( i821[3], i821[4], i821[5] )
  i820.enabled = !!i821[6]
  i820.isTrigger = !!i821[7]
  request.r(i821[8], i821[9], 0, i820, 'material')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'additionalVertexStreams')
  i822.enabled = !!i823[2]
  request.r(i823[3], i823[4], 0, i822, 'sharedMaterial')
  var i825 = i823[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[6]
  i822.shadowCastingMode = i823[7]
  i822.sortingLayerID = i823[8]
  i822.sortingOrder = i823[9]
  i822.lightmapIndex = i823[10]
  i822.lightmapSceneIndex = i823[11]
  i822.lightmapScaleOffset = new pc.Vec4( i823[12], i823[13], i823[14], i823[15] )
  i822.lightProbeUsage = i823[16]
  i822.reflectionProbeUsage = i823[17]
  return i822
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TextMeshPro' )
  var i827 = data
  i826._SortingLayer = i827[0]
  i826._SortingLayerID = i827[1]
  i826._SortingOrder = i827[2]
  i826.m_hasFontAssetChanged = !!i827[3]
  request.r(i827[4], i827[5], 0, i826, 'm_renderer')
  i826.m_maskType = i827[6]
  i826.m_text = i827[7]
  i826.m_isRightToLeft = !!i827[8]
  request.r(i827[9], i827[10], 0, i826, 'm_fontAsset')
  request.r(i827[11], i827[12], 0, i826, 'm_sharedMaterial')
  var i829 = i827[13]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.m_fontSharedMaterials = i828
  request.r(i827[14], i827[15], 0, i826, 'm_fontMaterial')
  var i831 = i827[16]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i826.m_fontMaterials = i830
  i826.m_fontColor32 = UnityEngine.Color32.ConstructColor(i827[17], i827[18], i827[19], i827[20])
  i826.m_fontColor = new pc.Color(i827[21], i827[22], i827[23], i827[24])
  i826.m_enableVertexGradient = !!i827[25]
  i826.m_colorMode = i827[26]
  i826.m_fontColorGradient = request.d('TMPro.VertexGradient', i827[27], i826.m_fontColorGradient)
  request.r(i827[28], i827[29], 0, i826, 'm_fontColorGradientPreset')
  request.r(i827[30], i827[31], 0, i826, 'm_spriteAsset')
  i826.m_tintAllSprites = !!i827[32]
  request.r(i827[33], i827[34], 0, i826, 'm_StyleSheet')
  i826.m_TextStyleHashCode = i827[35]
  i826.m_overrideHtmlColors = !!i827[36]
  i826.m_faceColor = UnityEngine.Color32.ConstructColor(i827[37], i827[38], i827[39], i827[40])
  i826.m_fontSize = i827[41]
  i826.m_fontSizeBase = i827[42]
  i826.m_fontWeight = i827[43]
  i826.m_enableAutoSizing = !!i827[44]
  i826.m_fontSizeMin = i827[45]
  i826.m_fontSizeMax = i827[46]
  i826.m_fontStyle = i827[47]
  i826.m_HorizontalAlignment = i827[48]
  i826.m_VerticalAlignment = i827[49]
  i826.m_textAlignment = i827[50]
  i826.m_characterSpacing = i827[51]
  i826.m_wordSpacing = i827[52]
  i826.m_lineSpacing = i827[53]
  i826.m_lineSpacingMax = i827[54]
  i826.m_paragraphSpacing = i827[55]
  i826.m_charWidthMaxAdj = i827[56]
  i826.m_TextWrappingMode = i827[57]
  i826.m_wordWrappingRatios = i827[58]
  i826.m_overflowMode = i827[59]
  request.r(i827[60], i827[61], 0, i826, 'm_linkedTextComponent')
  request.r(i827[62], i827[63], 0, i826, 'parentLinkedComponent')
  i826.m_enableKerning = !!i827[64]
  var i833 = i827[65]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(i833[i + 0]);
  }
  i826.m_ActiveFontFeatures = i832
  i826.m_enableExtraPadding = !!i827[66]
  i826.checkPaddingRequired = !!i827[67]
  i826.m_isRichText = !!i827[68]
  i826.m_parseCtrlCharacters = !!i827[69]
  i826.m_isOrthographic = !!i827[70]
  i826.m_isCullingEnabled = !!i827[71]
  i826.m_horizontalMapping = i827[72]
  i826.m_verticalMapping = i827[73]
  i826.m_uvLineOffset = i827[74]
  i826.m_geometrySortingOrder = i827[75]
  i826.m_IsTextObjectScaleStatic = !!i827[76]
  i826.m_VertexBufferAutoSizeReduction = !!i827[77]
  i826.m_useMaxVisibleDescender = !!i827[78]
  i826.m_pageToDisplay = i827[79]
  i826.m_margin = new pc.Vec4( i827[80], i827[81], i827[82], i827[83] )
  i826.m_isUsingLegacyAnimationComponent = !!i827[84]
  i826.m_isVolumetricText = !!i827[85]
  request.r(i827[86], i827[87], 0, i826, 'm_Material')
  i826.m_EmojiFallbackSupport = !!i827[88]
  i826.m_Maskable = !!i827[89]
  i826.m_Color = new pc.Color(i827[90], i827[91], i827[92], i827[93])
  i826.m_RaycastTarget = !!i827[94]
  i826.m_RaycastPadding = new pc.Vec4( i827[95], i827[96], i827[97], i827[98] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'sharedMesh')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'sharedMesh')
  var i839 = i837[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.bones = i838
  i836.updateWhenOffscreen = !!i837[3]
  i836.localBounds = i837[4]
  request.r(i837[5], i837[6], 0, i836, 'rootBone')
  var i841 = i837[7]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i841[i + 0]) );
  }
  i836.blendShapesWeights = i840
  i836.enabled = !!i837[8]
  request.r(i837[9], i837[10], 0, i836, 'sharedMaterial')
  var i843 = i837[11]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i836.sharedMaterials = i842
  i836.receiveShadows = !!i837[12]
  i836.shadowCastingMode = i837[13]
  i836.sortingLayerID = i837[14]
  i836.sortingOrder = i837[15]
  i836.lightmapIndex = i837[16]
  i836.lightmapSceneIndex = i837[17]
  i836.lightmapScaleOffset = new pc.Vec4( i837[18], i837[19], i837[20], i837[21] )
  i836.lightProbeUsage = i837[22]
  i836.reflectionProbeUsage = i837[23]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i847 = data
  i846.weight = i847[0]
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

Deserializers["ItemController"] = function (request, data, root) {
  var i912 = root || request.c( 'ItemController' )
  var i913 = data
  i912.itemType = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'dropTarget')
  i912.dropDistanceThreshold = i913[3]
  i912.hideSpriteOnDrop = !!i913[4]
  i912.onClick = request.d('UnityEngine.Events.UnityEvent', i913[5], i912.onClick)
  i912.onDrop = request.d('UnityEngine.Events.UnityEvent', i913[6], i912.onDrop)
  i912.onDragStart = request.d('UnityEngine.Events.UnityEvent', i913[7], i912.onDragStart)
  i912.onReturn = request.d('UnityEngine.Events.UnityEvent', i913[8], i912.onReturn)
  i912.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i913[9], i912.onAnimFinished)
  var i915 = i913[10]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('AnimObjectData', i915[i + 0]));
  }
  i912.animationObjects = i914
  var i917 = i913[11]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(i917[i + 0]);
  }
  i912.fxSoundsStartAnim = i916
  var i919 = i913[12]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(i919[i + 0]);
  }
  i912.fxSoundsAfterAnim = i918
  return i912
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i922 = root || request.c( 'AnimObjectData' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'animObj')
  i922.delayFromStart = i923[2]
  i922.durationToDeactivate = i923[3]
  return i922
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i926 = root || request.c( 'ItemGraphic' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i926.spriteRenderers = i928
  i926.sortingOrderOffset = i927[1]
  return i926
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i932 = root || request.c( 'ItemMovement' )
  var i933 = data
  return i932
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.Text' )
  var i935 = data
  i934.m_FontData = request.d('UnityEngine.UI.FontData', i935[0], i934.m_FontData)
  i934.m_Text = i935[1]
  request.r(i935[2], i935[3], 0, i934, 'm_Material')
  i934.m_Maskable = !!i935[4]
  i934.m_Color = new pc.Color(i935[5], i935[6], i935[7], i935[8])
  i934.m_RaycastTarget = !!i935[9]
  i934.m_RaycastPadding = new pc.Vec4( i935[10], i935[11], i935[12], i935[13] )
  return i934
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.FontData' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_Font')
  i936.m_FontSize = i937[2]
  i936.m_FontStyle = i937[3]
  i936.m_BestFit = !!i937[4]
  i936.m_MinSize = i937[5]
  i936.m_MaxSize = i937[6]
  i936.m_Alignment = i937[7]
  i936.m_AlignByGeometry = !!i937[8]
  i936.m_RichText = !!i937[9]
  i936.m_HorizontalOverflow = i937[10]
  i936.m_VerticalOverflow = i937[11]
  i936.m_LineSpacing = i937[12]
  return i936
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i938 = root || request.c( 'PlaySound' )
  var i939 = data
  i938.sound1 = i939[0]
  i938.sound2 = i939[1]
  i938.sound3 = i939[2]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i944 = root || new pc.UnityMaterial()
  var i945 = data
  i944.name = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'shader')
  i944.renderQueue = i945[3]
  i944.enableInstancing = !!i945[4]
  var i947 = i945[5]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i947[i + 0]) );
  }
  i944.floatParameters = i946
  var i949 = i945[6]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i949[i + 0]) );
  }
  i944.colorParameters = i948
  var i951 = i945[7]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i951[i + 0]) );
  }
  i944.vectorParameters = i950
  var i953 = i945[8]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i953[i + 0]) );
  }
  i944.textureParameters = i952
  var i955 = i945[9]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i955[i + 0]) );
  }
  i944.materialFlags = i954
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i959 = data
  i958.name = i959[0]
  i958.value = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i963 = data
  i962.name = i963[0]
  i962.value = new pc.Color(i963[1], i963[2], i963[3], i963[4])
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i967 = data
  i966.name = i967[0]
  i966.value = new pc.Vec4( i967[1], i967[2], i967[3], i967[4] )
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i971 = data
  i970.name = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'value')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i975 = data
  i974.name = i975[0]
  i974.enabled = !!i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i977 = data
  i976.name = i977[0]
  i976.width = i977[1]
  i976.height = i977[2]
  i976.mipmapCount = i977[3]
  i976.anisoLevel = i977[4]
  i976.filterMode = i977[5]
  i976.hdr = !!i977[6]
  i976.format = i977[7]
  i976.wrapMode = i977[8]
  i976.alphaIsTransparency = !!i977[9]
  i976.alphaSource = i977[10]
  i976.graphicsFormat = i977[11]
  i976.sRGBTexture = !!i977[12]
  i976.desiredColorSpace = i977[13]
  i976.wrapU = i977[14]
  i976.wrapV = i977[15]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i979 = data
  i978.name = i979[0]
  i978.halfPrecision = !!i979[1]
  i978.useSimplification = !!i979[2]
  i978.useUInt32IndexFormat = !!i979[3]
  i978.vertexCount = i979[4]
  i978.aabb = i979[5]
  var i981 = i979[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( !!i981[i + 0] );
  }
  i978.streams = i980
  i978.vertices = i979[7]
  var i983 = i979[8]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i983[i + 0]) );
  }
  i978.subMeshes = i982
  var i985 = i979[9]
  var i984 = []
  for(var i = 0; i < i985.length; i += 16) {
    i984.push( new pc.Mat4().setData(i985[i + 0], i985[i + 1], i985[i + 2], i985[i + 3],  i985[i + 4], i985[i + 5], i985[i + 6], i985[i + 7],  i985[i + 8], i985[i + 9], i985[i + 10], i985[i + 11],  i985[i + 12], i985[i + 13], i985[i + 14], i985[i + 15]) );
  }
  i978.bindposes = i984
  var i987 = i979[10]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i987[i + 0]) );
  }
  i978.blendShapes = i986
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i993 = data
  i992.triangles = i993[0]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i999 = data
  i998.name = i999[0]
  var i1001 = i999[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1001[i + 0]) );
  }
  i998.frames = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.index = i1003[1]
  i1002.startup = !!i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1005 = data
  i1004.ambientIntensity = i1005[0]
  i1004.reflectionIntensity = i1005[1]
  i1004.ambientMode = i1005[2]
  i1004.ambientLight = new pc.Color(i1005[3], i1005[4], i1005[5], i1005[6])
  i1004.ambientSkyColor = new pc.Color(i1005[7], i1005[8], i1005[9], i1005[10])
  i1004.ambientGroundColor = new pc.Color(i1005[11], i1005[12], i1005[13], i1005[14])
  i1004.ambientEquatorColor = new pc.Color(i1005[15], i1005[16], i1005[17], i1005[18])
  i1004.fogColor = new pc.Color(i1005[19], i1005[20], i1005[21], i1005[22])
  i1004.fogEndDistance = i1005[23]
  i1004.fogStartDistance = i1005[24]
  i1004.fogDensity = i1005[25]
  i1004.fog = !!i1005[26]
  request.r(i1005[27], i1005[28], 0, i1004, 'skybox')
  i1004.fogMode = i1005[29]
  var i1007 = i1005[30]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1007[i + 0]) );
  }
  i1004.lightmaps = i1006
  i1004.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1005[31], i1004.lightProbes)
  i1004.lightmapsMode = i1005[32]
  i1004.mixedBakeMode = i1005[33]
  i1004.environmentLightingMode = i1005[34]
  i1004.ambientProbe = new pc.SphericalHarmonicsL2(i1005[35])
  i1004.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1005[36])
  i1004.useReferenceAmbientProbe = !!i1005[37]
  request.r(i1005[38], i1005[39], 0, i1004, 'customReflection')
  request.r(i1005[40], i1005[41], 0, i1004, 'defaultReflection')
  i1004.defaultReflectionMode = i1005[42]
  i1004.defaultReflectionResolution = i1005[43]
  i1004.sunLightObjectId = i1005[44]
  i1004.pixelLightCount = i1005[45]
  i1004.defaultReflectionHDR = !!i1005[46]
  i1004.hasLightDataAsset = !!i1005[47]
  i1004.hasManualGenerate = !!i1005[48]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'lightmapColor')
  request.r(i1011[2], i1011[3], 0, i1010, 'lightmapDirection')
  request.r(i1011[4], i1011[5], 0, i1010, 'shadowMask')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1012 = root || new UnityEngine.LightProbes()
  var i1013 = data
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1023[i + 0]));
  }
  i1020.ShaderCompilationErrors = i1022
  i1020.name = i1021[1]
  i1020.guid = i1021[2]
  var i1025 = i1021[3]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.shaderDefinedKeywords = i1024
  var i1027 = i1021[4]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1027[i + 0]) );
  }
  i1020.passes = i1026
  var i1029 = i1021[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1029[i + 0]) );
  }
  i1020.usePasses = i1028
  var i1031 = i1021[6]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1031[i + 0]) );
  }
  i1020.defaultParameterValues = i1030
  request.r(i1021[7], i1021[8], 0, i1020, 'unityFallbackShader')
  i1020.readDepth = !!i1021[9]
  i1020.hasDepthOnlyPass = !!i1021[10]
  i1020.isCreatedByShaderGraph = !!i1021[11]
  i1020.disableBatching = !!i1021[12]
  i1020.compiled = !!i1021[13]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1035 = data
  i1034.shaderName = i1035[0]
  i1034.errorMessage = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1040 = root || new pc.UnityShaderPass()
  var i1041 = data
  i1040.id = i1041[0]
  i1040.subShaderIndex = i1041[1]
  i1040.name = i1041[2]
  i1040.passType = i1041[3]
  i1040.grabPassTextureName = i1041[4]
  i1040.usePass = !!i1041[5]
  i1040.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[6], i1040.zTest)
  i1040.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[7], i1040.zWrite)
  i1040.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[8], i1040.culling)
  i1040.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[9], i1040.blending)
  i1040.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[10], i1040.alphaBlending)
  i1040.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[11], i1040.colorWriteMask)
  i1040.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[12], i1040.offsetUnits)
  i1040.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[13], i1040.offsetFactor)
  i1040.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[14], i1040.stencilRef)
  i1040.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[15], i1040.stencilReadMask)
  i1040.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[16], i1040.stencilWriteMask)
  i1040.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[17], i1040.stencilOp)
  i1040.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[18], i1040.stencilOpFront)
  i1040.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[19], i1040.stencilOpBack)
  var i1043 = i1041[20]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1043[i + 0]) );
  }
  i1040.tags = i1042
  var i1045 = i1041[21]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.passDefinedKeywords = i1044
  var i1047 = i1041[22]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1047[i + 0]) );
  }
  i1040.passDefinedKeywordGroups = i1046
  var i1049 = i1041[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1049[i + 0]) );
  }
  i1040.variants = i1048
  var i1051 = i1041[24]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1040.excludedVariants = i1050
  i1040.hasDepthReader = !!i1041[25]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1053 = data
  i1052.val = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1055 = data
  i1054.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.src)
  i1054.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.dst)
  i1054.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.op)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1057 = data
  i1056.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.pass)
  i1056.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.fail)
  i1056.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.zFail)
  i1056.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[3], i1056.comp)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.hasDiscard = !!i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1071 = data
  i1070.passId = i1071[0]
  i1070.subShaderIndex = i1071[1]
  var i1073 = i1071[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1070.keywords = i1072
  i1070.vertexProgram = i1071[3]
  i1070.fragmentProgram = i1071[4]
  i1070.exportedForWebGl2 = !!i1071[5]
  i1070.readDepth = !!i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'shader')
  i1076.pass = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.type = i1081[1]
  i1080.value = new pc.Vec4( i1081[2], i1081[3], i1081[4], i1081[5] )
  i1080.textureValue = i1081[6]
  i1080.shaderPropertyFlag = i1081[7]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1083 = data
  i1082.name = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'texture')
  i1082.aabb = i1083[3]
  i1082.vertices = i1083[4]
  i1082.triangles = i1083[5]
  i1082.textureRect = UnityEngine.Rect.MinMaxRect(i1083[6], i1083[7], i1083[8], i1083[9])
  i1082.packedRect = UnityEngine.Rect.MinMaxRect(i1083[10], i1083[11], i1083[12], i1083[13])
  i1082.border = new pc.Vec4( i1083[14], i1083[15], i1083[16], i1083[17] )
  i1082.transparency = i1083[18]
  i1082.bounds = i1083[19]
  i1082.pixelsPerUnit = i1083[20]
  i1082.textureWidth = i1083[21]
  i1082.textureHeight = i1083[22]
  i1082.nativeSize = new pc.Vec2( i1083[23], i1083[24] )
  i1082.pivot = new pc.Vec2( i1083[25], i1083[26] )
  i1082.textureRectOffset = new pc.Vec2( i1083[27], i1083[28] )
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1085 = data
  i1084.name = i1085[0]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.wrapMode = i1087[1]
  i1086.isLooping = !!i1087[2]
  i1086.length = i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1089[i + 0]) );
  }
  i1086.curves = i1088
  var i1091 = i1087[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1091[i + 0]) );
  }
  i1086.events = i1090
  i1086.halfPrecision = !!i1087[6]
  i1086._frameRate = i1087[7]
  i1086.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1087[8], i1086.localBounds)
  i1086.hasMuscleCurves = !!i1087[9]
  var i1093 = i1087[10]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1086.clipMuscleConstant = i1092
  i1086.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1087[11], i1086.clipBindingConstant)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1097 = data
  i1096.path = i1097[0]
  i1096.hash = i1097[1]
  i1096.componentType = i1097[2]
  i1096.property = i1097[3]
  i1096.keys = i1097[4]
  var i1099 = i1097[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1099[i + 0]) );
  }
  i1096.objectReferenceKeys = i1098
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1103 = data
  i1102.time = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'value')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1107 = data
  i1106.functionName = i1107[0]
  i1106.floatParameter = i1107[1]
  i1106.intParameter = i1107[2]
  i1106.stringParameter = i1107[3]
  request.r(i1107[4], i1107[5], 0, i1106, 'objectReferenceParameter')
  i1106.time = i1107[6]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1109 = data
  i1108.center = new pc.Vec3( i1109[0], i1109[1], i1109[2] )
  i1108.extends = new pc.Vec3( i1109[3], i1109[4], i1109[5] )
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.genericBindings = i1114
  var i1117 = i1113[1]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1112.pptrCurveMapping = i1116
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.ascent = i1119[1]
  i1118.originalLineHeight = i1119[2]
  i1118.fontSize = i1119[3]
  var i1121 = i1119[4]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1121[i + 0]) );
  }
  i1118.characterInfo = i1120
  request.r(i1119[5], i1119[6], 0, i1118, 'texture')
  i1118.originalFontSize = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1125 = data
  i1124.index = i1125[0]
  i1124.advance = i1125[1]
  i1124.bearing = i1125[2]
  i1124.glyphWidth = i1125[3]
  i1124.glyphHeight = i1125[4]
  i1124.minX = i1125[5]
  i1124.maxX = i1125[6]
  i1124.minY = i1125[7]
  i1124.maxY = i1125[8]
  i1124.uvBottomLeftX = i1125[9]
  i1124.uvBottomLeftY = i1125[10]
  i1124.uvBottomRightX = i1125[11]
  i1124.uvBottomRightY = i1125[12]
  i1124.uvTopLeftX = i1125[13]
  i1124.uvTopLeftY = i1125[14]
  i1124.uvTopRightX = i1125[15]
  i1124.uvTopRightY = i1125[16]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1127 = data
  i1126.name = i1127[0]
  var i1129 = i1127[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1129[i + 0]) );
  }
  i1126.layers = i1128
  var i1131 = i1127[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1131[i + 0]) );
  }
  i1126.parameters = i1130
  i1126.animationClips = i1127[3]
  i1126.avatarUnsupported = i1127[4]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.defaultWeight = i1135[1]
  i1134.blendingMode = i1135[2]
  i1134.avatarMask = i1135[3]
  i1134.syncedLayerIndex = i1135[4]
  i1134.syncedLayerAffectsTiming = !!i1135[5]
  i1134.syncedLayers = i1135[6]
  i1134.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1135[7], i1134.stateMachine)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.name = i1137[1]
  i1136.path = i1137[2]
  var i1139 = i1137[3]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1139[i + 0]) );
  }
  i1136.states = i1138
  var i1141 = i1137[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1141[i + 0]) );
  }
  i1136.machines = i1140
  var i1143 = i1137[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1143[i + 0]) );
  }
  i1136.entryStateTransitions = i1142
  var i1145 = i1137[6]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1145[i + 0]) );
  }
  i1136.exitStateTransitions = i1144
  var i1147 = i1137[7]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1147[i + 0]) );
  }
  i1136.anyStateTransitions = i1146
  i1136.defaultStateId = i1137[8]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  i1150.cycleOffset = i1151[2]
  i1150.cycleOffsetParameter = i1151[3]
  i1150.cycleOffsetParameterActive = !!i1151[4]
  i1150.mirror = !!i1151[5]
  i1150.mirrorParameter = i1151[6]
  i1150.mirrorParameterActive = !!i1151[7]
  i1150.motionId = i1151[8]
  i1150.nameHash = i1151[9]
  i1150.fullPathHash = i1151[10]
  i1150.speed = i1151[11]
  i1150.speedParameter = i1151[12]
  i1150.speedParameterActive = !!i1151[13]
  i1150.tag = i1151[14]
  i1150.tagHash = i1151[15]
  i1150.writeDefaultValues = !!i1151[16]
  var i1153 = i1151[17]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 2, i1152, '')
  }
  i1150.behaviours = i1152
  var i1155 = i1151[18]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1155[i + 0]) );
  }
  i1150.transitions = i1154
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1161 = data
  i1160.fullPath = i1161[0]
  i1160.canTransitionToSelf = !!i1161[1]
  i1160.duration = i1161[2]
  i1160.exitTime = i1161[3]
  i1160.hasExitTime = !!i1161[4]
  i1160.hasFixedDuration = !!i1161[5]
  i1160.interruptionSource = i1161[6]
  i1160.offset = i1161[7]
  i1160.orderedInterruption = !!i1161[8]
  i1160.destinationStateId = i1161[9]
  i1160.isExit = !!i1161[10]
  i1160.mute = !!i1161[11]
  i1160.solo = !!i1161[12]
  var i1163 = i1161[13]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1163[i + 0]) );
  }
  i1160.conditions = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1169 = data
  i1168.destinationStateId = i1169[0]
  i1168.isExit = !!i1169[1]
  i1168.mute = !!i1169[2]
  i1168.solo = !!i1169[3]
  var i1171 = i1169[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1171[i + 0]) );
  }
  i1168.conditions = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1175 = data
  i1174.defaultBool = !!i1175[0]
  i1174.defaultFloat = i1175[1]
  i1174.defaultInt = i1175[2]
  i1174.name = i1175[3]
  i1174.nameHash = i1175[4]
  i1174.type = i1175[5]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1179 = data
  i1178.mode = i1179[0]
  i1178.parameter = i1179[1]
  i1178.threshold = i1179[2]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.bytes64 = i1181[1]
  i1180.data = i1181[2]
  return i1180
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1183 = data
  i1182.normalStyle = i1183[0]
  i1182.normalSpacingOffset = i1183[1]
  i1182.boldStyle = i1183[2]
  i1182.boldSpacing = i1183[3]
  i1182.italicStyle = i1183[4]
  i1182.tabSize = i1183[5]
  request.r(i1183[6], i1183[7], 0, i1182, 'atlas')
  i1182.m_SourceFontFileGUID = i1183[8]
  i1182.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1183[9], i1182.m_CreationSettings)
  request.r(i1183[10], i1183[11], 0, i1182, 'm_SourceFontFile')
  i1182.m_SourceFontFilePath = i1183[12]
  i1182.m_AtlasPopulationMode = i1183[13]
  i1182.InternalDynamicOS = !!i1183[14]
  var i1185 = i1183[15]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('UnityEngine.TextCore.Glyph', i1185[i + 0]));
  }
  i1182.m_GlyphTable = i1184
  var i1187 = i1183[16]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('TMPro.TMP_Character', i1187[i + 0]));
  }
  i1182.m_CharacterTable = i1186
  var i1189 = i1183[17]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1182.m_AtlasTextures = i1188
  i1182.m_AtlasTextureIndex = i1183[18]
  i1182.m_IsMultiAtlasTexturesEnabled = !!i1183[19]
  i1182.m_GetFontFeatures = !!i1183[20]
  i1182.m_ClearDynamicDataOnBuild = !!i1183[21]
  i1182.m_AtlasWidth = i1183[22]
  i1182.m_AtlasHeight = i1183[23]
  i1182.m_AtlasPadding = i1183[24]
  i1182.m_AtlasRenderMode = i1183[25]
  var i1191 = i1183[26]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.GlyphRect', i1191[i + 0]));
  }
  i1182.m_UsedGlyphRects = i1190
  var i1193 = i1183[27]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.GlyphRect', i1193[i + 0]));
  }
  i1182.m_FreeGlyphRects = i1192
  i1182.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1183[28], i1182.m_FontFeatureTable)
  i1182.m_ShouldReimportFontFeatures = !!i1183[29]
  var i1195 = i1183[30]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1182.m_FallbackFontAssetTable = i1194
  var i1197 = i1183[31]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('TMPro.TMP_FontWeightPair', i1197[i + 0]) );
  }
  i1182.m_FontWeightTable = i1196
  var i1199 = i1183[32]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('TMPro.TMP_FontWeightPair', i1199[i + 0]) );
  }
  i1182.fontWeights = i1198
  i1182.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1183[33], i1182.m_fontInfo)
  var i1201 = i1183[34]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Glyph', i1201[i + 0]));
  }
  i1182.m_glyphInfoList = i1200
  i1182.m_KerningTable = request.d('TMPro.KerningTable', i1183[35], i1182.m_KerningTable)
  var i1203 = i1183[36]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1182.fallbackFontAssets = i1202
  i1182.m_Version = i1183[37]
  i1182.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1183[38], i1182.m_FaceInfo)
  request.r(i1183[39], i1183[40], 0, i1182, 'm_Material')
  return i1182
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1205 = data
  i1204.sourceFontFileName = i1205[0]
  i1204.sourceFontFileGUID = i1205[1]
  i1204.faceIndex = i1205[2]
  i1204.pointSizeSamplingMode = i1205[3]
  i1204.pointSize = i1205[4]
  i1204.padding = i1205[5]
  i1204.paddingMode = i1205[6]
  i1204.packingMode = i1205[7]
  i1204.atlasWidth = i1205[8]
  i1204.atlasHeight = i1205[9]
  i1204.characterSetSelectionMode = i1205[10]
  i1204.characterSequence = i1205[11]
  i1204.referencedFontAssetGUID = i1205[12]
  i1204.referencedTextAssetGUID = i1205[13]
  i1204.fontStyle = i1205[14]
  i1204.fontStyleModifier = i1205[15]
  i1204.renderMode = i1205[16]
  i1204.includeFontFeatures = !!i1205[17]
  return i1204
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1209 = data
  i1208.m_Index = i1209[0]
  i1208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1209[1], i1208.m_Metrics)
  i1208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1209[2], i1208.m_GlyphRect)
  i1208.m_Scale = i1209[3]
  i1208.m_AtlasIndex = i1209[4]
  i1208.m_ClassDefinitionType = i1209[5]
  return i1208
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1211 = data
  i1210.m_Width = i1211[0]
  i1210.m_Height = i1211[1]
  i1210.m_HorizontalBearingX = i1211[2]
  i1210.m_HorizontalBearingY = i1211[3]
  i1210.m_HorizontalAdvance = i1211[4]
  return i1210
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1213 = data
  i1212.m_X = i1213[0]
  i1212.m_Y = i1213[1]
  i1212.m_Width = i1213[2]
  i1212.m_Height = i1213[3]
  return i1212
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Character' )
  var i1217 = data
  i1216.m_ElementType = i1217[0]
  i1216.m_Unicode = i1217[1]
  i1216.m_GlyphIndex = i1217[2]
  i1216.m_Scale = i1217[3]
  return i1216
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.MultipleSubstitutionRecord', i1225[i + 0]));
  }
  i1222.m_MultipleSubstitutionRecords = i1224
  var i1227 = i1223[1]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.LigatureSubstitutionRecord', i1227[i + 0]));
  }
  i1222.m_LigatureSubstitutionRecords = i1226
  var i1229 = i1223[2]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1229[i + 0]));
  }
  i1222.m_GlyphPairAdjustmentRecords = i1228
  var i1231 = i1223[3]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1231[i + 0]));
  }
  i1222.m_MarkToBaseAdjustmentRecords = i1230
  var i1233 = i1223[4]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1233[i + 0]));
  }
  i1222.m_MarkToMarkAdjustmentRecords = i1232
  return i1222
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1237 = data
  i1236.m_TargetGlyphID = i1237[0]
  i1236.m_SubstituteGlyphIDs = i1237[1]
  return i1236
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1241 = data
  i1240.m_ComponentGlyphIDs = i1241[0]
  i1240.m_LigatureGlyphID = i1241[1]
  return i1240
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1245 = data
  i1244.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1245[0], i1244.m_FirstAdjustmentRecord)
  i1244.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1245[1], i1244.m_SecondAdjustmentRecord)
  i1244.m_FeatureLookupFlags = i1245[2]
  return i1244
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1247 = data
  i1246.m_GlyphIndex = i1247[0]
  i1246.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1247[1], i1246.m_GlyphValueRecord)
  return i1246
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1249 = data
  i1248.m_XPlacement = i1249[0]
  i1248.m_YPlacement = i1249[1]
  i1248.m_XAdvance = i1249[2]
  i1248.m_YAdvance = i1249[3]
  return i1248
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1253 = data
  i1252.m_BaseGlyphID = i1253[0]
  i1252.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1253[1], i1252.m_BaseGlyphAnchorPoint)
  i1252.m_MarkGlyphID = i1253[2]
  i1252.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1253[3], i1252.m_MarkPositionAdjustment)
  return i1252
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1257 = data
  i1256.m_BaseMarkGlyphID = i1257[0]
  i1256.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1257[1], i1256.m_BaseMarkGlyphAnchorPoint)
  i1256.m_CombiningMarkGlyphID = i1257[2]
  i1256.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1257[3], i1256.m_CombiningMarkPositionAdjustment)
  return i1256
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'regularTypeface')
  request.r(i1263[2], i1263[3], 0, i1262, 'italicTypeface')
  return i1262
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1265 = data
  i1264.Name = i1265[0]
  i1264.PointSize = i1265[1]
  i1264.Scale = i1265[2]
  i1264.CharacterCount = i1265[3]
  i1264.LineHeight = i1265[4]
  i1264.Baseline = i1265[5]
  i1264.Ascender = i1265[6]
  i1264.CapHeight = i1265[7]
  i1264.Descender = i1265[8]
  i1264.CenterLine = i1265[9]
  i1264.SuperscriptOffset = i1265[10]
  i1264.SubscriptOffset = i1265[11]
  i1264.SubSize = i1265[12]
  i1264.Underline = i1265[13]
  i1264.UnderlineThickness = i1265[14]
  i1264.strikethrough = i1265[15]
  i1264.strikethroughThickness = i1265[16]
  i1264.TabWidth = i1265[17]
  i1264.Padding = i1265[18]
  i1264.AtlasWidth = i1265[19]
  i1264.AtlasHeight = i1265[20]
  return i1264
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1269 = data
  i1268.id = i1269[0]
  i1268.x = i1269[1]
  i1268.y = i1269[2]
  i1268.width = i1269[3]
  i1268.height = i1269[4]
  i1268.xOffset = i1269[5]
  i1268.yOffset = i1269[6]
  i1268.xAdvance = i1269[7]
  i1268.scale = i1269[8]
  return i1268
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.KerningTable' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.KerningPair', i1273[i + 0]));
  }
  i1270.kerningPairs = i1272
  return i1270
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.KerningPair' )
  var i1277 = data
  i1276.xOffset = i1277[0]
  i1276.m_FirstGlyph = i1277[1]
  i1276.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1277[2], i1276.m_FirstGlyphAdjustments)
  i1276.m_SecondGlyph = i1277[3]
  i1276.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1277[4], i1276.m_SecondGlyphAdjustments)
  i1276.m_IgnoreSpacingAdjustments = !!i1277[5]
  return i1276
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1279 = data
  i1278.m_FaceIndex = i1279[0]
  i1278.m_FamilyName = i1279[1]
  i1278.m_StyleName = i1279[2]
  i1278.m_PointSize = i1279[3]
  i1278.m_Scale = i1279[4]
  i1278.m_UnitsPerEM = i1279[5]
  i1278.m_LineHeight = i1279[6]
  i1278.m_AscentLine = i1279[7]
  i1278.m_CapLine = i1279[8]
  i1278.m_MeanLine = i1279[9]
  i1278.m_Baseline = i1279[10]
  i1278.m_DescentLine = i1279[11]
  i1278.m_SuperscriptOffset = i1279[12]
  i1278.m_SuperscriptSize = i1279[13]
  i1278.m_SubscriptOffset = i1279[14]
  i1278.m_SubscriptSize = i1279[15]
  i1278.m_UnderlineOffset = i1279[16]
  i1278.m_UnderlineThickness = i1279[17]
  i1278.m_StrikethroughOffset = i1279[18]
  i1278.m_StrikethroughThickness = i1279[19]
  i1278.m_TabWidth = i1279[20]
  return i1278
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Settings' )
  var i1281 = data
  i1280.assetVersion = i1281[0]
  i1280.m_TextWrappingMode = i1281[1]
  i1280.m_enableKerning = !!i1281[2]
  var i1283 = i1281[3]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(i1283[i + 0]);
  }
  i1280.m_ActiveFontFeatures = i1282
  i1280.m_enableExtraPadding = !!i1281[4]
  i1280.m_enableTintAllSprites = !!i1281[5]
  i1280.m_enableParseEscapeCharacters = !!i1281[6]
  i1280.m_EnableRaycastTarget = !!i1281[7]
  i1280.m_GetFontFeaturesAtRuntime = !!i1281[8]
  i1280.m_missingGlyphCharacter = i1281[9]
  i1280.m_ClearDynamicDataOnBuild = !!i1281[10]
  i1280.m_warningsDisabled = !!i1281[11]
  request.r(i1281[12], i1281[13], 0, i1280, 'm_defaultFontAsset')
  i1280.m_defaultFontAssetPath = i1281[14]
  i1280.m_defaultFontSize = i1281[15]
  i1280.m_defaultAutoSizeMinRatio = i1281[16]
  i1280.m_defaultAutoSizeMaxRatio = i1281[17]
  i1280.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1281[18], i1281[19] )
  i1280.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1281[20], i1281[21] )
  i1280.m_autoSizeTextContainer = !!i1281[22]
  i1280.m_IsTextObjectScaleStatic = !!i1281[23]
  var i1285 = i1281[24]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1280.m_fallbackFontAssets = i1284
  i1280.m_matchMaterialPreset = !!i1281[25]
  i1280.m_HideSubTextObjects = !!i1281[26]
  request.r(i1281[27], i1281[28], 0, i1280, 'm_defaultSpriteAsset')
  i1280.m_defaultSpriteAssetPath = i1281[29]
  i1280.m_enableEmojiSupport = !!i1281[30]
  i1280.m_MissingCharacterSpriteUnicode = i1281[31]
  var i1287 = i1281[32]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1280.m_EmojiFallbackTextAssets = i1286
  i1280.m_defaultColorGradientPresetsPath = i1281[33]
  request.r(i1281[34], i1281[35], 0, i1280, 'm_defaultStyleSheet')
  i1280.m_StyleSheetsResourcePath = i1281[36]
  request.r(i1281[37], i1281[38], 0, i1280, 'm_leadingCharacters')
  request.r(i1281[39], i1281[40], 0, i1280, 'm_followingCharacters')
  i1280.m_UseModernHangulLineBreakingRules = !!i1281[41]
  return i1280
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'spriteSheet')
  var i1293 = i1291[2]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Sprite', i1293[i + 0]));
  }
  i1290.spriteInfoList = i1292
  var i1295 = i1291[3]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1290.fallbackSpriteAssets = i1294
  var i1297 = i1291[4]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.TMP_SpriteCharacter', i1297[i + 0]));
  }
  i1290.m_SpriteCharacterTable = i1296
  var i1299 = i1291[5]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_SpriteGlyph', i1299[i + 0]));
  }
  i1290.m_GlyphTable = i1298
  i1290.m_Version = i1291[6]
  i1290.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1291[7], i1290.m_FaceInfo)
  request.r(i1291[8], i1291[9], 0, i1290, 'm_Material')
  return i1290
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.hashCode = i1303[1]
  i1302.unicode = i1303[2]
  i1302.pivot = new pc.Vec2( i1303[3], i1303[4] )
  request.r(i1303[5], i1303[6], 0, i1302, 'sprite')
  i1302.id = i1303[7]
  i1302.x = i1303[8]
  i1302.y = i1303[9]
  i1302.width = i1303[10]
  i1302.height = i1303[11]
  i1302.xOffset = i1303[12]
  i1302.yOffset = i1303[13]
  i1302.xAdvance = i1303[14]
  i1302.scale = i1303[15]
  return i1302
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1309 = data
  i1308.m_Name = i1309[0]
  i1308.m_ElementType = i1309[1]
  i1308.m_Unicode = i1309[2]
  i1308.m_GlyphIndex = i1309[3]
  i1308.m_Scale = i1309[4]
  return i1308
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'sprite')
  i1312.m_Index = i1313[2]
  i1312.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1313[3], i1312.m_Metrics)
  i1312.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1313[4], i1312.m_GlyphRect)
  i1312.m_Scale = i1313[5]
  i1312.m_AtlasIndex = i1313[6]
  i1312.m_ClassDefinitionType = i1313[7]
  return i1312
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Style', i1317[i + 0]));
  }
  i1314.m_StyleList = i1316
  return i1314
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Style' )
  var i1321 = data
  i1320.m_Name = i1321[0]
  i1320.m_HashCode = i1321[1]
  i1320.m_OpeningDefinition = i1321[2]
  i1320.m_ClosingDefinition = i1321[3]
  i1320.m_OpeningTagArray = i1321[4]
  i1320.m_ClosingTagArray = i1321[5]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1325[i + 0]) );
  }
  i1322.files = i1324
  i1322.componentToPrefabIds = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1329 = data
  i1328.path = i1329[0]
  request.r(i1329[1], i1329[2], 0, i1328, 'unityObject')
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1333[i + 0]) );
  }
  i1330.scriptsExecutionOrder = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1335[i + 0]) );
  }
  i1330.sortingLayers = i1334
  var i1337 = i1331[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1337[i + 0]) );
  }
  i1330.cullingLayers = i1336
  i1330.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1331[3], i1330.timeSettings)
  i1330.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1331[4], i1330.physicsSettings)
  i1330.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1331[5], i1330.physics2DSettings)
  i1330.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1331[6], i1330.qualitySettings)
  i1330.enableRealtimeShadows = !!i1331[7]
  i1330.enableAutoInstancing = !!i1331[8]
  i1330.enableStaticBatching = !!i1331[9]
  i1330.enableDynamicBatching = !!i1331[10]
  i1330.lightmapEncodingQuality = i1331[11]
  i1330.desiredColorSpace = i1331[12]
  var i1339 = i1331[13]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1330.allTags = i1338
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.value = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  i1346.value = i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1351 = data
  i1350.id = i1351[0]
  i1350.name = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1353 = data
  i1352.fixedDeltaTime = i1353[0]
  i1352.maximumDeltaTime = i1353[1]
  i1352.timeScale = i1353[2]
  i1352.maximumParticleTimestep = i1353[3]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1355 = data
  i1354.gravity = new pc.Vec3( i1355[0], i1355[1], i1355[2] )
  i1354.defaultSolverIterations = i1355[3]
  i1354.bounceThreshold = i1355[4]
  i1354.autoSyncTransforms = !!i1355[5]
  i1354.autoSimulation = !!i1355[6]
  var i1357 = i1355[7]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'material')
  i1362.gravity = new pc.Vec2( i1363[2], i1363[3] )
  i1362.positionIterations = i1363[4]
  i1362.velocityIterations = i1363[5]
  i1362.velocityThreshold = i1363[6]
  i1362.maxLinearCorrection = i1363[7]
  i1362.maxAngularCorrection = i1363[8]
  i1362.maxTranslationSpeed = i1363[9]
  i1362.maxRotationSpeed = i1363[10]
  i1362.baumgarteScale = i1363[11]
  i1362.baumgarteTOIScale = i1363[12]
  i1362.timeToSleep = i1363[13]
  i1362.linearSleepTolerance = i1363[14]
  i1362.angularSleepTolerance = i1363[15]
  i1362.defaultContactOffset = i1363[16]
  i1362.autoSimulation = !!i1363[17]
  i1362.queriesHitTriggers = !!i1363[18]
  i1362.queriesStartInColliders = !!i1363[19]
  i1362.callbacksOnDisable = !!i1363[20]
  i1362.reuseCollisionCallbacks = !!i1363[21]
  i1362.autoSyncTransforms = !!i1363[22]
  var i1365 = i1363[23]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1365[i + 0]) );
  }
  i1362.collisionMatrix = i1364
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.layerId = i1369[1]
  i1368.otherLayerId = i1369[2]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1373[i + 0]) );
  }
  i1370.qualityLevels = i1372
  var i1375 = i1371[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1370.names = i1374
  i1370.shadows = i1371[2]
  i1370.anisotropicFiltering = i1371[3]
  i1370.antiAliasing = i1371[4]
  i1370.lodBias = i1371[5]
  i1370.shadowCascades = i1371[6]
  i1370.shadowDistance = i1371[7]
  i1370.shadowmaskMode = i1371[8]
  i1370.shadowProjection = i1371[9]
  i1370.shadowResolution = i1371[10]
  i1370.softParticles = !!i1371[11]
  i1370.softVegetation = !!i1371[12]
  i1370.activeColorSpace = i1371[13]
  i1370.desiredColorSpace = i1371[14]
  i1370.masterTextureLimit = i1371[15]
  i1370.maxQueuedFrames = i1371[16]
  i1370.particleRaycastBudget = i1371[17]
  i1370.pixelLightCount = i1371[18]
  i1370.realtimeReflectionProbes = !!i1371[19]
  i1370.shadowCascade2Split = i1371[20]
  i1370.shadowCascade4Split = new pc.Vec3( i1371[21], i1371[22], i1371[23] )
  i1370.streamingMipmapsActive = !!i1371[24]
  i1370.vSyncCount = i1371[25]
  i1370.asyncUploadBufferSize = i1371[26]
  i1370.asyncUploadTimeSlice = i1371[27]
  i1370.billboardsFaceCameraPosition = !!i1371[28]
  i1370.shadowNearPlaneOffset = i1371[29]
  i1370.streamingMipmapsMemoryBudget = i1371[30]
  i1370.maximumLODLevel = i1371[31]
  i1370.streamingMipmapsAddAllCameras = !!i1371[32]
  i1370.streamingMipmapsMaxLevelReduction = i1371[33]
  i1370.streamingMipmapsRenderersPerFrame = i1371[34]
  i1370.resolutionScalingFixedDPIFactor = i1371[35]
  i1370.streamingMipmapsMaxFileIORequests = i1371[36]
  i1370.currentQualityLevel = i1371[37]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1381 = data
  i1380.weight = i1381[0]
  i1380.vertices = i1381[1]
  i1380.normals = i1381[2]
  i1380.tangents = i1381[3]
  return i1380
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1383 = data
  i1382.m_XCoordinate = i1383[0]
  i1382.m_YCoordinate = i1383[1]
  return i1382
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1385 = data
  i1384.m_XPositionAdjustment = i1385[0]
  i1384.m_YPositionAdjustment = i1385[1]
  return i1384
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1386 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1387 = data
  i1386.xPlacement = i1387[0]
  i1386.yPlacement = i1387[1]
  i1386.xAdvance = i1387[2]
  i1386.yAdvance = i1387[3]
  return i1386
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

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

Deserializers.buildID = "87a68e4a-a2ef-40b1-aaab-865c4b7632b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

