var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.JointSpring' )
  var i3341 = data
  i3340.spring = i3341[0]
  i3340.damper = i3341[1]
  i3340.targetPosition = i3341[2]
  return i3340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.JointMotor' )
  var i3343 = data
  i3342.m_TargetVelocity = i3343[0]
  i3342.m_Force = i3343[1]
  i3342.m_FreeSpin = i3343[2]
  return i3342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.JointLimits' )
  var i3345 = data
  i3344.m_Min = i3345[0]
  i3344.m_Max = i3345[1]
  i3344.m_Bounciness = i3345[2]
  i3344.m_BounceMinVelocity = i3345[3]
  i3344.m_ContactDistance = i3345[4]
  i3344.minBounce = i3345[5]
  i3344.maxBounce = i3345[6]
  return i3344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.JointDrive' )
  var i3347 = data
  i3346.m_PositionSpring = i3347[0]
  i3346.m_PositionDamper = i3347[1]
  i3346.m_MaximumForce = i3347[2]
  i3346.m_UseAcceleration = i3347[3]
  return i3346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3349 = data
  i3348.m_Spring = i3349[0]
  i3348.m_Damper = i3349[1]
  return i3348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3351 = data
  i3350.m_Limit = i3351[0]
  i3350.m_Bounciness = i3351[1]
  i3350.m_ContactDistance = i3351[2]
  return i3350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3353 = data
  i3352.m_ExtremumSlip = i3353[0]
  i3352.m_ExtremumValue = i3353[1]
  i3352.m_AsymptoteSlip = i3353[2]
  i3352.m_AsymptoteValue = i3353[3]
  i3352.m_Stiffness = i3353[4]
  return i3352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3355 = data
  i3354.m_LowerAngle = i3355[0]
  i3354.m_UpperAngle = i3355[1]
  return i3354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3357 = data
  i3356.m_MotorSpeed = i3357[0]
  i3356.m_MaximumMotorTorque = i3357[1]
  return i3356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3359 = data
  i3358.m_DampingRatio = i3359[0]
  i3358.m_Frequency = i3359[1]
  i3358.m_Angle = i3359[2]
  return i3358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3361 = data
  i3360.m_LowerTranslation = i3361[0]
  i3360.m_UpperTranslation = i3361[1]
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3362 = root || new pc.UnityMaterial()
  var i3363 = data
  i3362.name = i3363[0]
  request.r(i3363[1], i3363[2], 0, i3362, 'shader')
  i3362.renderQueue = i3363[3]
  i3362.enableInstancing = !!i3363[4]
  var i3365 = i3363[5]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 1) {
    i3364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3365[i + 0]) );
  }
  i3362.floatParameters = i3364
  var i3367 = i3363[6]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3367[i + 0]) );
  }
  i3362.colorParameters = i3366
  var i3369 = i3363[7]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3369[i + 0]) );
  }
  i3362.vectorParameters = i3368
  var i3371 = i3363[8]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3371[i + 0]) );
  }
  i3362.textureParameters = i3370
  var i3373 = i3363[9]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3373[i + 0]) );
  }
  i3362.materialFlags = i3372
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3377 = data
  i3376.name = i3377[0]
  i3376.value = i3377[1]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3381 = data
  i3380.name = i3381[0]
  i3380.value = new pc.Color(i3381[1], i3381[2], i3381[3], i3381[4])
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3385 = data
  i3384.name = i3385[0]
  i3384.value = new pc.Vec4( i3385[1], i3385[2], i3385[3], i3385[4] )
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3389 = data
  i3388.name = i3389[0]
  request.r(i3389[1], i3389[2], 0, i3388, 'value')
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3393 = data
  i3392.name = i3393[0]
  i3392.enabled = !!i3393[1]
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3395 = data
  i3394.name = i3395[0]
  i3394.width = i3395[1]
  i3394.height = i3395[2]
  i3394.mipmapCount = i3395[3]
  i3394.anisoLevel = i3395[4]
  i3394.filterMode = i3395[5]
  i3394.hdr = !!i3395[6]
  i3394.format = i3395[7]
  i3394.wrapMode = i3395[8]
  i3394.alphaIsTransparency = !!i3395[9]
  i3394.alphaSource = i3395[10]
  i3394.graphicsFormat = i3395[11]
  i3394.sRGBTexture = !!i3395[12]
  i3394.desiredColorSpace = i3395[13]
  i3394.wrapU = i3395[14]
  i3394.wrapV = i3395[15]
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3397 = data
  i3396.name = i3397[0]
  i3396.halfPrecision = !!i3397[1]
  i3396.useSimplification = !!i3397[2]
  i3396.useUInt32IndexFormat = !!i3397[3]
  i3396.vertexCount = i3397[4]
  i3396.aabb = i3397[5]
  var i3399 = i3397[6]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.push( !!i3399[i + 0] );
  }
  i3396.streams = i3398
  i3396.vertices = i3397[7]
  var i3401 = i3397[8]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3401[i + 0]) );
  }
  i3396.subMeshes = i3400
  var i3403 = i3397[9]
  var i3402 = []
  for(var i = 0; i < i3403.length; i += 16) {
    i3402.push( new pc.Mat4().setData(i3403[i + 0], i3403[i + 1], i3403[i + 2], i3403[i + 3],  i3403[i + 4], i3403[i + 5], i3403[i + 6], i3403[i + 7],  i3403[i + 8], i3403[i + 9], i3403[i + 10], i3403[i + 11],  i3403[i + 12], i3403[i + 13], i3403[i + 14], i3403[i + 15]) );
  }
  i3396.bindposes = i3402
  var i3405 = i3397[10]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3405[i + 0]) );
  }
  i3396.blendShapes = i3404
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3411 = data
  i3410.triangles = i3411[0]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3417 = data
  i3416.name = i3417[0]
  var i3419 = i3417[1]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3419[i + 0]) );
  }
  i3416.frames = i3418
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3421 = data
  i3420.name = i3421[0]
  i3420.index = i3421[1]
  i3420.startup = !!i3421[2]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3423 = data
  i3422.aspect = i3423[0]
  i3422.orthographic = !!i3423[1]
  i3422.orthographicSize = i3423[2]
  i3422.backgroundColor = new pc.Color(i3423[3], i3423[4], i3423[5], i3423[6])
  i3422.nearClipPlane = i3423[7]
  i3422.farClipPlane = i3423[8]
  i3422.fieldOfView = i3423[9]
  i3422.depth = i3423[10]
  i3422.clearFlags = i3423[11]
  i3422.cullingMask = i3423[12]
  i3422.rect = i3423[13]
  request.r(i3423[14], i3423[15], 0, i3422, 'targetTexture')
  i3422.usePhysicalProperties = !!i3423[16]
  i3422.focalLength = i3423[17]
  i3422.sensorSize = new pc.Vec2( i3423[18], i3423[19] )
  i3422.lensShift = new pc.Vec2( i3423[20], i3423[21] )
  i3422.gateFit = i3423[22]
  i3422.commandBufferCount = i3423[23]
  i3422.cameraType = i3423[24]
  i3422.enabled = !!i3423[25]
  return i3422
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i3424 = root || request.c( 'AutoCameraFit' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'canvasBtn')
  request.r(i3425[2], i3425[3], 0, i3424, 'targetArea')
  i3424.paddingLandscape = i3425[4]
  i3424.paddingPortrait = i3425[5]
  i3424.extraPaddingSmallScreen = i3425[6]
  i3424.smallScreenThreshold = i3425[7]
  i3424.autoUpdateOnResize = !!i3425[8]
  i3424.adjustInEditMode = !!i3425[9]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.tagId = i3427[1]
  i3426.enabled = !!i3427[2]
  i3426.isStatic = !!i3427[3]
  i3426.layer = i3427[4]
  return i3426
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3428 = root || request.c( 'InputManager' )
  var i3429 = data
  request.r(i3429[0], i3429[1], 0, i3428, 'mainCamera')
  i3428.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3429[2] )
  i3428.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i3429[3] )
  i3428.installLayer = UnityEngine.LayerMask.FromIntegerValue( i3429[4] )
  i3428.maxDistance = i3429[5]
  i3428.itemsToGotoStore = i3429[6]
  i3428.dragSortingOffset = i3429[7]
  i3428.useDragBounds = !!i3429[8]
  request.r(i3429[9], i3429[10], 0, i3428, 'dragBounds')
  return i3428
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i3430 = root || request.c( 'HandHintMmanager' )
  var i3431 = data
  var i3433 = i3431[0]
  var i3432 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i3433.length; i += 2) {
  request.r(i3433[i + 0], i3433[i + 1], 1, i3432, '')
  }
  i3430.hintItems = i3432
  request.r(i3431[1], i3431[2], 0, i3430, 'handHintObject')
  request.r(i3431[3], i3431[4], 0, i3430, 'handAnimator')
  i3430.idleTimeToHint = i3431[5]
  i3430.dragAnimDuration = i3431[6]
  request.r(i3431[7], i3431[8], 0, i3430, 'startHintPos')
  request.r(i3431[9], i3431[10], 0, i3430, 'endHintPos')
  return i3430
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3436 = root || request.c( 'GameManager' )
  var i3437 = data
  i3436.fxStartVoice = i3437[0]
  i3436.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i3437[1], i3436.onLoseGame)
  i3436.isGameEnded = !!i3437[2]
  return i3436
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3438 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3439 = data
  i3438.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3439[0], i3438.m_PersistentCalls)
  return i3438
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3440 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3441 = data
  var i3443 = i3441[0]
  var i3442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3443.length; i += 1) {
    i3442.add(request.d('UnityEngine.Events.PersistentCall', i3443[i + 0]));
  }
  i3440.m_Calls = i3442
  return i3440
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, 'm_Target')
  i3446.m_TargetAssemblyTypeName = i3447[2]
  i3446.m_MethodName = i3447[3]
  i3446.m_Mode = i3447[4]
  i3446.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3447[5], i3446.m_Arguments)
  i3446.m_CallState = i3447[6]
  return i3446
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'm_ObjectArgument')
  i3448.m_ObjectArgumentAssemblyTypeName = i3449[2]
  i3448.m_IntArgument = i3449[3]
  i3448.m_FloatArgument = i3449[4]
  i3448.m_StringArgument = i3449[5]
  i3448.m_BoolArgument = !!i3449[6]
  return i3448
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i3450 = root || request.c( 'ItemManager' )
  var i3451 = data
  var i3453 = i3451[0]
  var i3452 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 1, i3452, '')
  }
  i3450.items = i3452
  i3450.totalItemsDropped = i3451[1]
  i3450.onItemDropped = request.d('UnityEngine.Events.UnityEvent', i3451[2], i3450.onItemDropped)
  return i3450
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3454 = root || request.c( 'Ply_SoundManager' )
  var i3455 = data
  i3454.fxAudio = request.d('FxAudio', i3455[0], i3454.fxAudio)
  request.r(i3455[1], i3455[2], 0, i3454, 'bgm1')
  return i3454
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i3456 = root || request.c( 'FxAudio' )
  var i3457 = data
  i3456.None = request.d('SoundData', i3457[0], i3456.None)
  i3456.ClickBox = request.d('SoundData', i3457[1], i3456.ClickBox)
  i3456.StartVoice = request.d('SoundData', i3457[2], i3456.StartVoice)
  i3456.voice_lv52_bottle = request.d('SoundData', i3457[3], i3456.voice_lv52_bottle)
  i3456.voice_lv52_fruit = request.d('SoundData', i3457[4], i3456.voice_lv52_fruit)
  i3456.voice_lv52_icecup = request.d('SoundData', i3457[5], i3456.voice_lv52_icecup)
  i3456.voice_lv52_icream = request.d('SoundData', i3457[6], i3456.voice_lv52_icream)
  i3456.voice_lv52_ladle = request.d('SoundData', i3457[7], i3456.voice_lv52_ladle)
  i3456.voice_lv52_milk = request.d('SoundData', i3457[8], i3456.voice_lv52_milk)
  i3456.voice_lv52_shirt = request.d('SoundData', i3457[9], i3456.voice_lv52_shirt)
  i3456.voice_lv52_tofu = request.d('SoundData', i3457[10], i3456.voice_lv52_tofu)
  i3456.voice_lv52_water = request.d('SoundData', i3457[11], i3456.voice_lv52_water)
  i3456.Correct = request.d('SoundData', i3457[12], i3456.Correct)
  i3456.FridgeOpen = request.d('SoundData', i3457[13], i3456.FridgeOpen)
  i3456.water = request.d('SoundData', i3457[14], i3456.water)
  i3456.mouse = request.d('SoundData', i3457[15], i3456.mouse)
  i3456.wrong = request.d('SoundData', i3457[16], i3456.wrong)
  i3456.haa = request.d('SoundData', i3457[17], i3456.haa)
  return i3456
}

Deserializers["SoundData"] = function (request, data, root) {
  var i3458 = root || request.c( 'SoundData' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'clip')
  i3458.repeatCount = i3459[2]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'clip')
  request.r(i3461[2], i3461[3], 0, i3460, 'outputAudioMixerGroup')
  i3460.playOnAwake = !!i3461[4]
  i3460.loop = !!i3461[5]
  i3460.time = i3461[6]
  i3460.volume = i3461[7]
  i3460.pitch = i3461[8]
  i3460.enabled = !!i3461[9]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3463 = data
  i3462.pivot = new pc.Vec2( i3463[0], i3463[1] )
  i3462.anchorMin = new pc.Vec2( i3463[2], i3463[3] )
  i3462.anchorMax = new pc.Vec2( i3463[4], i3463[5] )
  i3462.sizeDelta = new pc.Vec2( i3463[6], i3463[7] )
  i3462.anchoredPosition3D = new pc.Vec3( i3463[8], i3463[9], i3463[10] )
  i3462.rotation = new pc.Quat(i3463[11], i3463[12], i3463[13], i3463[14])
  i3462.scale = new pc.Vec3( i3463[15], i3463[16], i3463[17] )
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3465 = data
  i3464.planeDistance = i3465[0]
  i3464.referencePixelsPerUnit = i3465[1]
  i3464.isFallbackOverlay = !!i3465[2]
  i3464.renderMode = i3465[3]
  i3464.renderOrder = i3465[4]
  i3464.sortingLayerName = i3465[5]
  i3464.sortingOrder = i3465[6]
  i3464.scaleFactor = i3465[7]
  request.r(i3465[8], i3465[9], 0, i3464, 'worldCamera')
  i3464.overrideSorting = !!i3465[10]
  i3464.pixelPerfect = !!i3465[11]
  i3464.targetDisplay = i3465[12]
  i3464.overridePixelPerfect = !!i3465[13]
  i3464.enabled = !!i3465[14]
  return i3464
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3467 = data
  i3466.m_UiScaleMode = i3467[0]
  i3466.m_ReferencePixelsPerUnit = i3467[1]
  i3466.m_ScaleFactor = i3467[2]
  i3466.m_ReferenceResolution = new pc.Vec2( i3467[3], i3467[4] )
  i3466.m_ScreenMatchMode = i3467[5]
  i3466.m_MatchWidthOrHeight = i3467[6]
  i3466.m_PhysicalUnit = i3467[7]
  i3466.m_FallbackScreenDPI = i3467[8]
  i3466.m_DefaultSpriteDPI = i3467[9]
  i3466.m_DynamicPixelsPerUnit = i3467[10]
  i3466.m_PresetInfoIsWorld = !!i3467[11]
  return i3466
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3469 = data
  i3468.m_IgnoreReversedGraphics = !!i3469[0]
  i3468.m_BlockingObjects = i3469[1]
  i3468.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3469[2] )
  return i3468
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i3470 = root || request.c( 'ProgressBarUI' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'fillImage')
  request.r(i3471[2], i3471[3], 0, i3470, 'progressText')
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3473 = data
  i3472.cullTransparentMesh = !!i3473[0]
  return i3472
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.UI.Image' )
  var i3475 = data
  request.r(i3475[0], i3475[1], 0, i3474, 'm_Sprite')
  i3474.m_Type = i3475[2]
  i3474.m_PreserveAspect = !!i3475[3]
  i3474.m_FillCenter = !!i3475[4]
  i3474.m_FillMethod = i3475[5]
  i3474.m_FillAmount = i3475[6]
  i3474.m_FillClockwise = !!i3475[7]
  i3474.m_FillOrigin = i3475[8]
  i3474.m_UseSpriteMesh = !!i3475[9]
  i3474.m_PixelsPerUnitMultiplier = i3475[10]
  request.r(i3475[11], i3475[12], 0, i3474, 'm_Material')
  i3474.m_Maskable = !!i3475[13]
  i3474.m_Color = new pc.Color(i3475[14], i3475[15], i3475[16], i3475[17])
  i3474.m_RaycastTarget = !!i3475[18]
  i3474.m_RaycastPadding = new pc.Vec4( i3475[19], i3475[20], i3475[21], i3475[22] )
  return i3474
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3476 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3477 = data
  i3476.m_hasFontAssetChanged = !!i3477[0]
  request.r(i3477[1], i3477[2], 0, i3476, 'm_baseMaterial')
  i3476.m_maskOffset = new pc.Vec4( i3477[3], i3477[4], i3477[5], i3477[6] )
  i3476.m_text = i3477[7]
  i3476.m_isRightToLeft = !!i3477[8]
  request.r(i3477[9], i3477[10], 0, i3476, 'm_fontAsset')
  request.r(i3477[11], i3477[12], 0, i3476, 'm_sharedMaterial')
  var i3479 = i3477[13]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 2) {
  request.r(i3479[i + 0], i3479[i + 1], 2, i3478, '')
  }
  i3476.m_fontSharedMaterials = i3478
  request.r(i3477[14], i3477[15], 0, i3476, 'm_fontMaterial')
  var i3481 = i3477[16]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 2) {
  request.r(i3481[i + 0], i3481[i + 1], 2, i3480, '')
  }
  i3476.m_fontMaterials = i3480
  i3476.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3477[17], i3477[18], i3477[19], i3477[20])
  i3476.m_fontColor = new pc.Color(i3477[21], i3477[22], i3477[23], i3477[24])
  i3476.m_enableVertexGradient = !!i3477[25]
  i3476.m_colorMode = i3477[26]
  i3476.m_fontColorGradient = request.d('TMPro.VertexGradient', i3477[27], i3476.m_fontColorGradient)
  request.r(i3477[28], i3477[29], 0, i3476, 'm_fontColorGradientPreset')
  request.r(i3477[30], i3477[31], 0, i3476, 'm_spriteAsset')
  i3476.m_tintAllSprites = !!i3477[32]
  request.r(i3477[33], i3477[34], 0, i3476, 'm_StyleSheet')
  i3476.m_TextStyleHashCode = i3477[35]
  i3476.m_overrideHtmlColors = !!i3477[36]
  i3476.m_faceColor = UnityEngine.Color32.ConstructColor(i3477[37], i3477[38], i3477[39], i3477[40])
  i3476.m_fontSize = i3477[41]
  i3476.m_fontSizeBase = i3477[42]
  i3476.m_fontWeight = i3477[43]
  i3476.m_enableAutoSizing = !!i3477[44]
  i3476.m_fontSizeMin = i3477[45]
  i3476.m_fontSizeMax = i3477[46]
  i3476.m_fontStyle = i3477[47]
  i3476.m_HorizontalAlignment = i3477[48]
  i3476.m_VerticalAlignment = i3477[49]
  i3476.m_textAlignment = i3477[50]
  i3476.m_characterSpacing = i3477[51]
  i3476.m_wordSpacing = i3477[52]
  i3476.m_lineSpacing = i3477[53]
  i3476.m_lineSpacingMax = i3477[54]
  i3476.m_paragraphSpacing = i3477[55]
  i3476.m_charWidthMaxAdj = i3477[56]
  i3476.m_TextWrappingMode = i3477[57]
  i3476.m_wordWrappingRatios = i3477[58]
  i3476.m_overflowMode = i3477[59]
  request.r(i3477[60], i3477[61], 0, i3476, 'm_linkedTextComponent')
  request.r(i3477[62], i3477[63], 0, i3476, 'parentLinkedComponent')
  i3476.m_enableKerning = !!i3477[64]
  var i3483 = i3477[65]
  var i3482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.add(i3483[i + 0]);
  }
  i3476.m_ActiveFontFeatures = i3482
  i3476.m_enableExtraPadding = !!i3477[66]
  i3476.checkPaddingRequired = !!i3477[67]
  i3476.m_isRichText = !!i3477[68]
  i3476.m_parseCtrlCharacters = !!i3477[69]
  i3476.m_isOrthographic = !!i3477[70]
  i3476.m_isCullingEnabled = !!i3477[71]
  i3476.m_horizontalMapping = i3477[72]
  i3476.m_verticalMapping = i3477[73]
  i3476.m_uvLineOffset = i3477[74]
  i3476.m_geometrySortingOrder = i3477[75]
  i3476.m_IsTextObjectScaleStatic = !!i3477[76]
  i3476.m_VertexBufferAutoSizeReduction = !!i3477[77]
  i3476.m_useMaxVisibleDescender = !!i3477[78]
  i3476.m_pageToDisplay = i3477[79]
  i3476.m_margin = new pc.Vec4( i3477[80], i3477[81], i3477[82], i3477[83] )
  i3476.m_isUsingLegacyAnimationComponent = !!i3477[84]
  i3476.m_isVolumetricText = !!i3477[85]
  request.r(i3477[86], i3477[87], 0, i3476, 'm_Material')
  i3476.m_EmojiFallbackSupport = !!i3477[88]
  i3476.m_Maskable = !!i3477[89]
  i3476.m_Color = new pc.Color(i3477[90], i3477[91], i3477[92], i3477[93])
  i3476.m_RaycastTarget = !!i3477[94]
  i3476.m_RaycastPadding = new pc.Vec4( i3477[95], i3477[96], i3477[97], i3477[98] )
  return i3476
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3486 = root || request.c( 'TMPro.VertexGradient' )
  var i3487 = data
  i3486.topLeft = new pc.Color(i3487[0], i3487[1], i3487[2], i3487[3])
  i3486.topRight = new pc.Color(i3487[4], i3487[5], i3487[6], i3487[7])
  i3486.bottomLeft = new pc.Color(i3487[8], i3487[9], i3487[10], i3487[11])
  i3486.bottomRight = new pc.Color(i3487[12], i3487[13], i3487[14], i3487[15])
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'animatorController')
  request.r(i3491[2], i3491[3], 0, i3490, 'avatar')
  i3490.updateMode = i3491[4]
  i3490.hasTransformHierarchy = !!i3491[5]
  i3490.applyRootMotion = !!i3491[6]
  var i3493 = i3491[7]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 2) {
  request.r(i3493[i + 0], i3493[i + 1], 2, i3492, '')
  }
  i3490.humanBones = i3492
  i3490.enabled = !!i3491[8]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3497 = data
  i3496.color = new pc.Color(i3497[0], i3497[1], i3497[2], i3497[3])
  request.r(i3497[4], i3497[5], 0, i3496, 'sprite')
  i3496.flipX = !!i3497[6]
  i3496.flipY = !!i3497[7]
  i3496.drawMode = i3497[8]
  i3496.size = new pc.Vec2( i3497[9], i3497[10] )
  i3496.tileMode = i3497[11]
  i3496.adaptiveModeThreshold = i3497[12]
  i3496.maskInteraction = i3497[13]
  i3496.spriteSortPoint = i3497[14]
  i3496.enabled = !!i3497[15]
  request.r(i3497[16], i3497[17], 0, i3496, 'sharedMaterial')
  var i3499 = i3497[18]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 2, i3498, '')
  }
  i3496.sharedMaterials = i3498
  i3496.receiveShadows = !!i3497[19]
  i3496.shadowCastingMode = i3497[20]
  i3496.sortingLayerID = i3497[21]
  i3496.sortingOrder = i3497[22]
  i3496.lightmapIndex = i3497[23]
  i3496.lightmapSceneIndex = i3497[24]
  i3496.lightmapScaleOffset = new pc.Vec4( i3497[25], i3497[26], i3497[27], i3497[28] )
  i3496.lightProbeUsage = i3497[29]
  i3496.reflectionProbeUsage = i3497[30]
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3501 = data
  i3500.center = new pc.Vec3( i3501[0], i3501[1], i3501[2] )
  i3500.size = new pc.Vec3( i3501[3], i3501[4], i3501[5] )
  i3500.enabled = !!i3501[6]
  i3500.isTrigger = !!i3501[7]
  request.r(i3501[8], i3501[9], 0, i3500, 'material')
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3503 = data
  request.r(i3503[0], i3503[1], 0, i3502, 'additionalVertexStreams')
  i3502.enabled = !!i3503[2]
  request.r(i3503[3], i3503[4], 0, i3502, 'sharedMaterial')
  var i3505 = i3503[5]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 2) {
  request.r(i3505[i + 0], i3505[i + 1], 2, i3504, '')
  }
  i3502.sharedMaterials = i3504
  i3502.receiveShadows = !!i3503[6]
  i3502.shadowCastingMode = i3503[7]
  i3502.sortingLayerID = i3503[8]
  i3502.sortingOrder = i3503[9]
  i3502.lightmapIndex = i3503[10]
  i3502.lightmapSceneIndex = i3503[11]
  i3502.lightmapScaleOffset = new pc.Vec4( i3503[12], i3503[13], i3503[14], i3503[15] )
  i3502.lightProbeUsage = i3503[16]
  i3502.reflectionProbeUsage = i3503[17]
  return i3502
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3506 = root || request.c( 'TMPro.TextMeshPro' )
  var i3507 = data
  i3506._SortingLayer = i3507[0]
  i3506._SortingLayerID = i3507[1]
  i3506._SortingOrder = i3507[2]
  i3506.m_hasFontAssetChanged = !!i3507[3]
  request.r(i3507[4], i3507[5], 0, i3506, 'm_renderer')
  i3506.m_maskType = i3507[6]
  i3506.m_text = i3507[7]
  i3506.m_isRightToLeft = !!i3507[8]
  request.r(i3507[9], i3507[10], 0, i3506, 'm_fontAsset')
  request.r(i3507[11], i3507[12], 0, i3506, 'm_sharedMaterial')
  var i3509 = i3507[13]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 2) {
  request.r(i3509[i + 0], i3509[i + 1], 2, i3508, '')
  }
  i3506.m_fontSharedMaterials = i3508
  request.r(i3507[14], i3507[15], 0, i3506, 'm_fontMaterial')
  var i3511 = i3507[16]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 2) {
  request.r(i3511[i + 0], i3511[i + 1], 2, i3510, '')
  }
  i3506.m_fontMaterials = i3510
  i3506.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3507[17], i3507[18], i3507[19], i3507[20])
  i3506.m_fontColor = new pc.Color(i3507[21], i3507[22], i3507[23], i3507[24])
  i3506.m_enableVertexGradient = !!i3507[25]
  i3506.m_colorMode = i3507[26]
  i3506.m_fontColorGradient = request.d('TMPro.VertexGradient', i3507[27], i3506.m_fontColorGradient)
  request.r(i3507[28], i3507[29], 0, i3506, 'm_fontColorGradientPreset')
  request.r(i3507[30], i3507[31], 0, i3506, 'm_spriteAsset')
  i3506.m_tintAllSprites = !!i3507[32]
  request.r(i3507[33], i3507[34], 0, i3506, 'm_StyleSheet')
  i3506.m_TextStyleHashCode = i3507[35]
  i3506.m_overrideHtmlColors = !!i3507[36]
  i3506.m_faceColor = UnityEngine.Color32.ConstructColor(i3507[37], i3507[38], i3507[39], i3507[40])
  i3506.m_fontSize = i3507[41]
  i3506.m_fontSizeBase = i3507[42]
  i3506.m_fontWeight = i3507[43]
  i3506.m_enableAutoSizing = !!i3507[44]
  i3506.m_fontSizeMin = i3507[45]
  i3506.m_fontSizeMax = i3507[46]
  i3506.m_fontStyle = i3507[47]
  i3506.m_HorizontalAlignment = i3507[48]
  i3506.m_VerticalAlignment = i3507[49]
  i3506.m_textAlignment = i3507[50]
  i3506.m_characterSpacing = i3507[51]
  i3506.m_wordSpacing = i3507[52]
  i3506.m_lineSpacing = i3507[53]
  i3506.m_lineSpacingMax = i3507[54]
  i3506.m_paragraphSpacing = i3507[55]
  i3506.m_charWidthMaxAdj = i3507[56]
  i3506.m_TextWrappingMode = i3507[57]
  i3506.m_wordWrappingRatios = i3507[58]
  i3506.m_overflowMode = i3507[59]
  request.r(i3507[60], i3507[61], 0, i3506, 'm_linkedTextComponent')
  request.r(i3507[62], i3507[63], 0, i3506, 'parentLinkedComponent')
  i3506.m_enableKerning = !!i3507[64]
  var i3513 = i3507[65]
  var i3512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.add(i3513[i + 0]);
  }
  i3506.m_ActiveFontFeatures = i3512
  i3506.m_enableExtraPadding = !!i3507[66]
  i3506.checkPaddingRequired = !!i3507[67]
  i3506.m_isRichText = !!i3507[68]
  i3506.m_parseCtrlCharacters = !!i3507[69]
  i3506.m_isOrthographic = !!i3507[70]
  i3506.m_isCullingEnabled = !!i3507[71]
  i3506.m_horizontalMapping = i3507[72]
  i3506.m_verticalMapping = i3507[73]
  i3506.m_uvLineOffset = i3507[74]
  i3506.m_geometrySortingOrder = i3507[75]
  i3506.m_IsTextObjectScaleStatic = !!i3507[76]
  i3506.m_VertexBufferAutoSizeReduction = !!i3507[77]
  i3506.m_useMaxVisibleDescender = !!i3507[78]
  i3506.m_pageToDisplay = i3507[79]
  i3506.m_margin = new pc.Vec4( i3507[80], i3507[81], i3507[82], i3507[83] )
  i3506.m_isUsingLegacyAnimationComponent = !!i3507[84]
  i3506.m_isVolumetricText = !!i3507[85]
  request.r(i3507[86], i3507[87], 0, i3506, 'm_Material')
  i3506.m_EmojiFallbackSupport = !!i3507[88]
  i3506.m_Maskable = !!i3507[89]
  i3506.m_Color = new pc.Color(i3507[90], i3507[91], i3507[92], i3507[93])
  i3506.m_RaycastTarget = !!i3507[94]
  i3506.m_RaycastPadding = new pc.Vec4( i3507[95], i3507[96], i3507[97], i3507[98] )
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3515 = data
  request.r(i3515[0], i3515[1], 0, i3514, 'sharedMesh')
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3517 = data
  request.r(i3517[0], i3517[1], 0, i3516, 'sharedMesh')
  var i3519 = i3517[2]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 2, i3518, '')
  }
  i3516.bones = i3518
  i3516.updateWhenOffscreen = !!i3517[3]
  i3516.localBounds = i3517[4]
  request.r(i3517[5], i3517[6], 0, i3516, 'rootBone')
  var i3521 = i3517[7]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3521[i + 0]) );
  }
  i3516.blendShapesWeights = i3520
  i3516.enabled = !!i3517[8]
  request.r(i3517[9], i3517[10], 0, i3516, 'sharedMaterial')
  var i3523 = i3517[11]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 2) {
  request.r(i3523[i + 0], i3523[i + 1], 2, i3522, '')
  }
  i3516.sharedMaterials = i3522
  i3516.receiveShadows = !!i3517[12]
  i3516.shadowCastingMode = i3517[13]
  i3516.sortingLayerID = i3517[14]
  i3516.sortingOrder = i3517[15]
  i3516.lightmapIndex = i3517[16]
  i3516.lightmapSceneIndex = i3517[17]
  i3516.lightmapScaleOffset = new pc.Vec4( i3517[18], i3517[19], i3517[20], i3517[21] )
  i3516.lightProbeUsage = i3517[22]
  i3516.reflectionProbeUsage = i3517[23]
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3527 = data
  i3526.weight = i3527[0]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3529 = data
  i3528.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3529[0], i3528.main)
  i3528.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3529[1], i3528.colorBySpeed)
  i3528.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3529[2], i3528.colorOverLifetime)
  i3528.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3529[3], i3528.emission)
  i3528.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3529[4], i3528.rotationBySpeed)
  i3528.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3529[5], i3528.rotationOverLifetime)
  i3528.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3529[6], i3528.shape)
  i3528.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3529[7], i3528.sizeBySpeed)
  i3528.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3529[8], i3528.sizeOverLifetime)
  i3528.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3529[9], i3528.textureSheetAnimation)
  i3528.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3529[10], i3528.velocityOverLifetime)
  i3528.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3529[11], i3528.noise)
  i3528.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3529[12], i3528.inheritVelocity)
  i3528.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3529[13], i3528.forceOverLifetime)
  i3528.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3529[14], i3528.limitVelocityOverLifetime)
  i3528.useAutoRandomSeed = !!i3529[15]
  i3528.randomSeed = i3529[16]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3530 = root || new pc.ParticleSystemMain()
  var i3531 = data
  i3530.duration = i3531[0]
  i3530.loop = !!i3531[1]
  i3530.prewarm = !!i3531[2]
  i3530.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[3], i3530.startDelay)
  i3530.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[4], i3530.startLifetime)
  i3530.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[5], i3530.startSpeed)
  i3530.startSize3D = !!i3531[6]
  i3530.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[7], i3530.startSizeX)
  i3530.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[8], i3530.startSizeY)
  i3530.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[9], i3530.startSizeZ)
  i3530.startRotation3D = !!i3531[10]
  i3530.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[11], i3530.startRotationX)
  i3530.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[12], i3530.startRotationY)
  i3530.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[13], i3530.startRotationZ)
  i3530.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3531[14], i3530.startColor)
  i3530.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[15], i3530.gravityModifier)
  i3530.simulationSpace = i3531[16]
  request.r(i3531[17], i3531[18], 0, i3530, 'customSimulationSpace')
  i3530.simulationSpeed = i3531[19]
  i3530.useUnscaledTime = !!i3531[20]
  i3530.scalingMode = i3531[21]
  i3530.playOnAwake = !!i3531[22]
  i3530.maxParticles = i3531[23]
  i3530.emitterVelocityMode = i3531[24]
  i3530.stopAction = i3531[25]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3532 = root || new pc.MinMaxCurve()
  var i3533 = data
  i3532.mode = i3533[0]
  i3532.curveMin = new pc.AnimationCurve( { keys_flow: i3533[1] } )
  i3532.curveMax = new pc.AnimationCurve( { keys_flow: i3533[2] } )
  i3532.curveMultiplier = i3533[3]
  i3532.constantMin = i3533[4]
  i3532.constantMax = i3533[5]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3534 = root || new pc.MinMaxGradient()
  var i3535 = data
  i3534.mode = i3535[0]
  i3534.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3535[1], i3534.gradientMin)
  i3534.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3535[2], i3534.gradientMax)
  i3534.colorMin = new pc.Color(i3535[3], i3535[4], i3535[5], i3535[6])
  i3534.colorMax = new pc.Color(i3535[7], i3535[8], i3535[9], i3535[10])
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3537 = data
  i3536.mode = i3537[0]
  var i3539 = i3537[1]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3539[i + 0]) );
  }
  i3536.colorKeys = i3538
  var i3541 = i3537[2]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3541[i + 0]) );
  }
  i3536.alphaKeys = i3540
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3542 = root || new pc.ParticleSystemColorBySpeed()
  var i3543 = data
  i3542.enabled = !!i3543[0]
  i3542.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3543[1], i3542.color)
  i3542.range = new pc.Vec2( i3543[2], i3543[3] )
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3547 = data
  i3546.color = new pc.Color(i3547[0], i3547[1], i3547[2], i3547[3])
  i3546.time = i3547[4]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3551 = data
  i3550.alpha = i3551[0]
  i3550.time = i3551[1]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3552 = root || new pc.ParticleSystemColorOverLifetime()
  var i3553 = data
  i3552.enabled = !!i3553[0]
  i3552.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3553[1], i3552.color)
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3554 = root || new pc.ParticleSystemEmitter()
  var i3555 = data
  i3554.enabled = !!i3555[0]
  i3554.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[1], i3554.rateOverTime)
  i3554.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[2], i3554.rateOverDistance)
  var i3557 = i3555[3]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3557[i + 0]) );
  }
  i3554.bursts = i3556
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3560 = root || new pc.ParticleSystemBurst()
  var i3561 = data
  i3560.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[0], i3560.count)
  i3560.cycleCount = i3561[1]
  i3560.minCount = i3561[2]
  i3560.maxCount = i3561[3]
  i3560.repeatInterval = i3561[4]
  i3560.time = i3561[5]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3562 = root || new pc.ParticleSystemRotationBySpeed()
  var i3563 = data
  i3562.enabled = !!i3563[0]
  i3562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[1], i3562.x)
  i3562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[2], i3562.y)
  i3562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[3], i3562.z)
  i3562.separateAxes = !!i3563[4]
  i3562.range = new pc.Vec2( i3563[5], i3563[6] )
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3564 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[1], i3564.x)
  i3564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[2], i3564.y)
  i3564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[3], i3564.z)
  i3564.separateAxes = !!i3565[4]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemShape()
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.shapeType = i3567[1]
  i3566.randomDirectionAmount = i3567[2]
  i3566.sphericalDirectionAmount = i3567[3]
  i3566.randomPositionAmount = i3567[4]
  i3566.alignToDirection = !!i3567[5]
  i3566.radius = i3567[6]
  i3566.radiusMode = i3567[7]
  i3566.radiusSpread = i3567[8]
  i3566.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[9], i3566.radiusSpeed)
  i3566.radiusThickness = i3567[10]
  i3566.angle = i3567[11]
  i3566.length = i3567[12]
  i3566.boxThickness = new pc.Vec3( i3567[13], i3567[14], i3567[15] )
  i3566.meshShapeType = i3567[16]
  request.r(i3567[17], i3567[18], 0, i3566, 'mesh')
  request.r(i3567[19], i3567[20], 0, i3566, 'meshRenderer')
  request.r(i3567[21], i3567[22], 0, i3566, 'skinnedMeshRenderer')
  i3566.useMeshMaterialIndex = !!i3567[23]
  i3566.meshMaterialIndex = i3567[24]
  i3566.useMeshColors = !!i3567[25]
  i3566.normalOffset = i3567[26]
  i3566.arc = i3567[27]
  i3566.arcMode = i3567[28]
  i3566.arcSpread = i3567[29]
  i3566.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[30], i3566.arcSpeed)
  i3566.donutRadius = i3567[31]
  i3566.position = new pc.Vec3( i3567[32], i3567[33], i3567[34] )
  i3566.rotation = new pc.Vec3( i3567[35], i3567[36], i3567[37] )
  i3566.scale = new pc.Vec3( i3567[38], i3567[39], i3567[40] )
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemSizeBySpeed()
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[1], i3568.x)
  i3568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[2], i3568.y)
  i3568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.z)
  i3568.separateAxes = !!i3569[4]
  i3568.range = new pc.Vec2( i3569[5], i3569[6] )
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3570 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[1], i3570.x)
  i3570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[2], i3570.y)
  i3570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[3], i3570.z)
  i3570.separateAxes = !!i3571[4]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3572 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3573 = data
  i3572.enabled = !!i3573[0]
  i3572.mode = i3573[1]
  i3572.animation = i3573[2]
  i3572.numTilesX = i3573[3]
  i3572.numTilesY = i3573[4]
  i3572.useRandomRow = !!i3573[5]
  i3572.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3573[6], i3572.frameOverTime)
  i3572.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3573[7], i3572.startFrame)
  i3572.cycleCount = i3573[8]
  i3572.rowIndex = i3573[9]
  i3572.flipU = i3573[10]
  i3572.flipV = i3573[11]
  i3572.spriteCount = i3573[12]
  var i3575 = i3573[13]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 2) {
  request.r(i3575[i + 0], i3575[i + 1], 2, i3574, '')
  }
  i3572.sprites = i3574
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3578 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[1], i3578.x)
  i3578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[2], i3578.y)
  i3578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[3], i3578.z)
  i3578.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[4], i3578.radial)
  i3578.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[5], i3578.speedModifier)
  i3578.space = i3579[6]
  i3578.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[7], i3578.orbitalX)
  i3578.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[8], i3578.orbitalY)
  i3578.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[9], i3578.orbitalZ)
  i3578.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[10], i3578.orbitalOffsetX)
  i3578.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[11], i3578.orbitalOffsetY)
  i3578.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[12], i3578.orbitalOffsetZ)
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3580 = root || new pc.ParticleSystemNoise()
  var i3581 = data
  i3580.enabled = !!i3581[0]
  i3580.separateAxes = !!i3581[1]
  i3580.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[2], i3580.strengthX)
  i3580.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[3], i3580.strengthY)
  i3580.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[4], i3580.strengthZ)
  i3580.frequency = i3581[5]
  i3580.damping = !!i3581[6]
  i3580.octaveCount = i3581[7]
  i3580.octaveMultiplier = i3581[8]
  i3580.octaveScale = i3581[9]
  i3580.quality = i3581[10]
  i3580.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[11], i3580.scrollSpeed)
  i3580.scrollSpeedMultiplier = i3581[12]
  i3580.remapEnabled = !!i3581[13]
  i3580.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[14], i3580.remapX)
  i3580.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[15], i3580.remapY)
  i3580.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[16], i3580.remapZ)
  i3580.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[17], i3580.positionAmount)
  i3580.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[18], i3580.rotationAmount)
  i3580.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3581[19], i3580.sizeAmount)
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3582 = root || new pc.ParticleSystemInheritVelocity()
  var i3583 = data
  i3582.enabled = !!i3583[0]
  i3582.mode = i3583[1]
  i3582.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3583[2], i3582.curve)
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3584 = root || new pc.ParticleSystemForceOverLifetime()
  var i3585 = data
  i3584.enabled = !!i3585[0]
  i3584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[1], i3584.x)
  i3584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[2], i3584.y)
  i3584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3585[3], i3584.z)
  i3584.space = i3585[4]
  i3584.randomized = !!i3585[5]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3586 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3587 = data
  i3586.enabled = !!i3587[0]
  i3586.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[1], i3586.limit)
  i3586.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[2], i3586.limitX)
  i3586.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[3], i3586.limitY)
  i3586.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[4], i3586.limitZ)
  i3586.dampen = i3587[5]
  i3586.separateAxes = !!i3587[6]
  i3586.space = i3587[7]
  i3586.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3587[8], i3586.drag)
  i3586.multiplyDragByParticleSize = !!i3587[9]
  i3586.multiplyDragByParticleVelocity = !!i3587[10]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'mesh')
  i3588.meshCount = i3589[2]
  i3588.activeVertexStreamsCount = i3589[3]
  i3588.alignment = i3589[4]
  i3588.renderMode = i3589[5]
  i3588.sortMode = i3589[6]
  i3588.lengthScale = i3589[7]
  i3588.velocityScale = i3589[8]
  i3588.cameraVelocityScale = i3589[9]
  i3588.normalDirection = i3589[10]
  i3588.sortingFudge = i3589[11]
  i3588.minParticleSize = i3589[12]
  i3588.maxParticleSize = i3589[13]
  i3588.pivot = new pc.Vec3( i3589[14], i3589[15], i3589[16] )
  request.r(i3589[17], i3589[18], 0, i3588, 'trailMaterial')
  i3588.applyActiveColorSpace = !!i3589[19]
  i3588.enabled = !!i3589[20]
  request.r(i3589[21], i3589[22], 0, i3588, 'sharedMaterial')
  var i3591 = i3589[23]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 2, i3590, '')
  }
  i3588.sharedMaterials = i3590
  i3588.receiveShadows = !!i3589[24]
  i3588.shadowCastingMode = i3589[25]
  i3588.sortingLayerID = i3589[26]
  i3588.sortingOrder = i3589[27]
  i3588.lightmapIndex = i3589[28]
  i3588.lightmapSceneIndex = i3589[29]
  i3588.lightmapScaleOffset = new pc.Vec4( i3589[30], i3589[31], i3589[32], i3589[33] )
  i3588.lightProbeUsage = i3589[34]
  i3588.reflectionProbeUsage = i3589[35]
  return i3588
}

Deserializers["ItemController"] = function (request, data, root) {
  var i3592 = root || request.c( 'ItemController' )
  var i3593 = data
  i3592.itemType = i3593[0]
  request.r(i3593[1], i3593[2], 0, i3592, 'dropTarget')
  i3592.dropDistanceThreshold = i3593[3]
  i3592.hideSpriteOnDrop = !!i3593[4]
  i3592.onClick = request.d('UnityEngine.Events.UnityEvent', i3593[5], i3592.onClick)
  i3592.onDrop = request.d('UnityEngine.Events.UnityEvent', i3593[6], i3592.onDrop)
  i3592.onDragStart = request.d('UnityEngine.Events.UnityEvent', i3593[7], i3592.onDragStart)
  i3592.onReturn = request.d('UnityEngine.Events.UnityEvent', i3593[8], i3592.onReturn)
  i3592.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i3593[9], i3592.onAnimFinished)
  var i3595 = i3593[10]
  var i3594 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.add(request.d('AnimObjectData', i3595[i + 0]));
  }
  i3592.animationObjects = i3594
  var i3597 = i3593[11]
  var i3596 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.add(i3597[i + 0]);
  }
  i3592.fxSoundsStartAnim = i3596
  var i3599 = i3593[12]
  var i3598 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.add(i3599[i + 0]);
  }
  i3592.fxSoundsAfterAnim = i3598
  return i3592
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i3602 = root || request.c( 'AnimObjectData' )
  var i3603 = data
  request.r(i3603[0], i3603[1], 0, i3602, 'animObj')
  i3602.delayFromStart = i3603[2]
  i3602.durationToDeactivate = i3603[3]
  return i3602
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i3606 = root || request.c( 'ItemGraphic' )
  var i3607 = data
  var i3609 = i3607[0]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i3609.length; i += 2) {
  request.r(i3609[i + 0], i3609[i + 1], 1, i3608, '')
  }
  i3606.spriteRenderers = i3608
  i3606.sortingOrderOffset = i3607[1]
  return i3606
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i3612 = root || request.c( 'ItemMovement' )
  var i3613 = data
  return i3612
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.UI.Text' )
  var i3615 = data
  i3614.m_FontData = request.d('UnityEngine.UI.FontData', i3615[0], i3614.m_FontData)
  i3614.m_Text = i3615[1]
  request.r(i3615[2], i3615[3], 0, i3614, 'm_Material')
  i3614.m_Maskable = !!i3615[4]
  i3614.m_Color = new pc.Color(i3615[5], i3615[6], i3615[7], i3615[8])
  i3614.m_RaycastTarget = !!i3615[9]
  i3614.m_RaycastPadding = new pc.Vec4( i3615[10], i3615[11], i3615[12], i3615[13] )
  return i3614
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'm_Font')
  i3616.m_FontSize = i3617[2]
  i3616.m_FontStyle = i3617[3]
  i3616.m_BestFit = !!i3617[4]
  i3616.m_MinSize = i3617[5]
  i3616.m_MaxSize = i3617[6]
  i3616.m_Alignment = i3617[7]
  i3616.m_AlignByGeometry = !!i3617[8]
  i3616.m_RichText = !!i3617[9]
  i3616.m_HorizontalOverflow = i3617[10]
  i3616.m_VerticalOverflow = i3617[11]
  i3616.m_LineSpacing = i3617[12]
  return i3616
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i3618 = root || request.c( 'PlaySound' )
  var i3619 = data
  i3618.sound1 = i3619[0]
  i3618.sound2 = i3619[1]
  i3618.sound3 = i3619[2]
  return i3618
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'm_FirstSelected')
  i3620.m_sendNavigationEvents = !!i3621[2]
  i3620.m_DragThreshold = i3621[3]
  return i3620
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3623 = data
  i3622.m_HorizontalAxis = i3623[0]
  i3622.m_VerticalAxis = i3623[1]
  i3622.m_SubmitButton = i3623[2]
  i3622.m_CancelButton = i3623[3]
  i3622.m_InputActionsPerSecond = i3623[4]
  i3622.m_RepeatDelay = i3623[5]
  i3622.m_ForceModuleActive = !!i3623[6]
  i3622.m_SendPointerHoverToParent = !!i3623[7]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3625 = data
  i3624.ambientIntensity = i3625[0]
  i3624.reflectionIntensity = i3625[1]
  i3624.ambientMode = i3625[2]
  i3624.ambientLight = new pc.Color(i3625[3], i3625[4], i3625[5], i3625[6])
  i3624.ambientSkyColor = new pc.Color(i3625[7], i3625[8], i3625[9], i3625[10])
  i3624.ambientGroundColor = new pc.Color(i3625[11], i3625[12], i3625[13], i3625[14])
  i3624.ambientEquatorColor = new pc.Color(i3625[15], i3625[16], i3625[17], i3625[18])
  i3624.fogColor = new pc.Color(i3625[19], i3625[20], i3625[21], i3625[22])
  i3624.fogEndDistance = i3625[23]
  i3624.fogStartDistance = i3625[24]
  i3624.fogDensity = i3625[25]
  i3624.fog = !!i3625[26]
  request.r(i3625[27], i3625[28], 0, i3624, 'skybox')
  i3624.fogMode = i3625[29]
  var i3627 = i3625[30]
  var i3626 = []
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3627[i + 0]) );
  }
  i3624.lightmaps = i3626
  i3624.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3625[31], i3624.lightProbes)
  i3624.lightmapsMode = i3625[32]
  i3624.mixedBakeMode = i3625[33]
  i3624.environmentLightingMode = i3625[34]
  i3624.ambientProbe = new pc.SphericalHarmonicsL2(i3625[35])
  i3624.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3625[36])
  i3624.useReferenceAmbientProbe = !!i3625[37]
  request.r(i3625[38], i3625[39], 0, i3624, 'customReflection')
  request.r(i3625[40], i3625[41], 0, i3624, 'defaultReflection')
  i3624.defaultReflectionMode = i3625[42]
  i3624.defaultReflectionResolution = i3625[43]
  i3624.sunLightObjectId = i3625[44]
  i3624.pixelLightCount = i3625[45]
  i3624.defaultReflectionHDR = !!i3625[46]
  i3624.hasLightDataAsset = !!i3625[47]
  i3624.hasManualGenerate = !!i3625[48]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'lightmapColor')
  request.r(i3631[2], i3631[3], 0, i3630, 'lightmapDirection')
  request.r(i3631[4], i3631[5], 0, i3630, 'shadowMask')
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3632 = root || new UnityEngine.LightProbes()
  var i3633 = data
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3641 = data
  var i3643 = i3641[0]
  var i3642 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3643[i + 0]));
  }
  i3640.ShaderCompilationErrors = i3642
  i3640.name = i3641[1]
  i3640.guid = i3641[2]
  var i3645 = i3641[3]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( i3645[i + 0] );
  }
  i3640.shaderDefinedKeywords = i3644
  var i3647 = i3641[4]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3647[i + 0]) );
  }
  i3640.passes = i3646
  var i3649 = i3641[5]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3649[i + 0]) );
  }
  i3640.usePasses = i3648
  var i3651 = i3641[6]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3651[i + 0]) );
  }
  i3640.defaultParameterValues = i3650
  request.r(i3641[7], i3641[8], 0, i3640, 'unityFallbackShader')
  i3640.readDepth = !!i3641[9]
  i3640.hasDepthOnlyPass = !!i3641[10]
  i3640.isCreatedByShaderGraph = !!i3641[11]
  i3640.disableBatching = !!i3641[12]
  i3640.compiled = !!i3641[13]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3655 = data
  i3654.shaderName = i3655[0]
  i3654.errorMessage = i3655[1]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3660 = root || new pc.UnityShaderPass()
  var i3661 = data
  i3660.id = i3661[0]
  i3660.subShaderIndex = i3661[1]
  i3660.name = i3661[2]
  i3660.passType = i3661[3]
  i3660.grabPassTextureName = i3661[4]
  i3660.usePass = !!i3661[5]
  i3660.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[6], i3660.zTest)
  i3660.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[7], i3660.zWrite)
  i3660.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[8], i3660.culling)
  i3660.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3661[9], i3660.blending)
  i3660.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3661[10], i3660.alphaBlending)
  i3660.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[11], i3660.colorWriteMask)
  i3660.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[12], i3660.offsetUnits)
  i3660.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[13], i3660.offsetFactor)
  i3660.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[14], i3660.stencilRef)
  i3660.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[15], i3660.stencilReadMask)
  i3660.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3661[16], i3660.stencilWriteMask)
  i3660.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3661[17], i3660.stencilOp)
  i3660.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3661[18], i3660.stencilOpFront)
  i3660.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3661[19], i3660.stencilOpBack)
  var i3663 = i3661[20]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3663[i + 0]) );
  }
  i3660.tags = i3662
  var i3665 = i3661[21]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( i3665[i + 0] );
  }
  i3660.passDefinedKeywords = i3664
  var i3667 = i3661[22]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3667[i + 0]) );
  }
  i3660.passDefinedKeywordGroups = i3666
  var i3669 = i3661[23]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3669[i + 0]) );
  }
  i3660.variants = i3668
  var i3671 = i3661[24]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3671[i + 0]) );
  }
  i3660.excludedVariants = i3670
  i3660.hasDepthReader = !!i3661[25]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3673 = data
  i3672.val = i3673[0]
  i3672.name = i3673[1]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3675 = data
  i3674.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[0], i3674.src)
  i3674.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[1], i3674.dst)
  i3674.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[2], i3674.op)
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3677 = data
  i3676.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[0], i3676.pass)
  i3676.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[1], i3676.fail)
  i3676.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[2], i3676.zFail)
  i3676.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[3], i3676.comp)
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3681 = data
  i3680.name = i3681[0]
  i3680.value = i3681[1]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3685 = data
  var i3687 = i3685[0]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( i3687[i + 0] );
  }
  i3684.keywords = i3686
  i3684.hasDiscard = !!i3685[1]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3691 = data
  i3690.passId = i3691[0]
  i3690.subShaderIndex = i3691[1]
  var i3693 = i3691[2]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( i3693[i + 0] );
  }
  i3690.keywords = i3692
  i3690.vertexProgram = i3691[3]
  i3690.fragmentProgram = i3691[4]
  i3690.exportedForWebGl2 = !!i3691[5]
  i3690.readDepth = !!i3691[6]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3697 = data
  request.r(i3697[0], i3697[1], 0, i3696, 'shader')
  i3696.pass = i3697[2]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3701 = data
  i3700.name = i3701[0]
  i3700.type = i3701[1]
  i3700.value = new pc.Vec4( i3701[2], i3701[3], i3701[4], i3701[5] )
  i3700.textureValue = i3701[6]
  i3700.shaderPropertyFlag = i3701[7]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3703 = data
  i3702.name = i3703[0]
  request.r(i3703[1], i3703[2], 0, i3702, 'texture')
  i3702.aabb = i3703[3]
  i3702.vertices = i3703[4]
  i3702.triangles = i3703[5]
  i3702.textureRect = UnityEngine.Rect.MinMaxRect(i3703[6], i3703[7], i3703[8], i3703[9])
  i3702.packedRect = UnityEngine.Rect.MinMaxRect(i3703[10], i3703[11], i3703[12], i3703[13])
  i3702.border = new pc.Vec4( i3703[14], i3703[15], i3703[16], i3703[17] )
  i3702.transparency = i3703[18]
  i3702.bounds = i3703[19]
  i3702.pixelsPerUnit = i3703[20]
  i3702.textureWidth = i3703[21]
  i3702.textureHeight = i3703[22]
  i3702.nativeSize = new pc.Vec2( i3703[23], i3703[24] )
  i3702.pivot = new pc.Vec2( i3703[25], i3703[26] )
  i3702.textureRectOffset = new pc.Vec2( i3703[27], i3703[28] )
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3705 = data
  i3704.name = i3705[0]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3707 = data
  i3706.name = i3707[0]
  i3706.wrapMode = i3707[1]
  i3706.isLooping = !!i3707[2]
  i3706.length = i3707[3]
  var i3709 = i3707[4]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3709[i + 0]) );
  }
  i3706.curves = i3708
  var i3711 = i3707[5]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3711[i + 0]) );
  }
  i3706.events = i3710
  i3706.halfPrecision = !!i3707[6]
  i3706._frameRate = i3707[7]
  i3706.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3707[8], i3706.localBounds)
  i3706.hasMuscleCurves = !!i3707[9]
  var i3713 = i3707[10]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( i3713[i + 0] );
  }
  i3706.clipMuscleConstant = i3712
  i3706.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3707[11], i3706.clipBindingConstant)
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3717 = data
  i3716.path = i3717[0]
  i3716.hash = i3717[1]
  i3716.componentType = i3717[2]
  i3716.property = i3717[3]
  i3716.keys = i3717[4]
  var i3719 = i3717[5]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3719[i + 0]) );
  }
  i3716.objectReferenceKeys = i3718
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3723 = data
  i3722.time = i3723[0]
  request.r(i3723[1], i3723[2], 0, i3722, 'value')
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3727 = data
  i3726.functionName = i3727[0]
  i3726.floatParameter = i3727[1]
  i3726.intParameter = i3727[2]
  i3726.stringParameter = i3727[3]
  request.r(i3727[4], i3727[5], 0, i3726, 'objectReferenceParameter')
  i3726.time = i3727[6]
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3729 = data
  i3728.center = new pc.Vec3( i3729[0], i3729[1], i3729[2] )
  i3728.extends = new pc.Vec3( i3729[3], i3729[4], i3729[5] )
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3733 = data
  var i3735 = i3733[0]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( i3735[i + 0] );
  }
  i3732.genericBindings = i3734
  var i3737 = i3733[1]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( i3737[i + 0] );
  }
  i3732.pptrCurveMapping = i3736
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3739 = data
  i3738.name = i3739[0]
  i3738.ascent = i3739[1]
  i3738.originalLineHeight = i3739[2]
  i3738.fontSize = i3739[3]
  var i3741 = i3739[4]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3741[i + 0]) );
  }
  i3738.characterInfo = i3740
  request.r(i3739[5], i3739[6], 0, i3738, 'texture')
  i3738.originalFontSize = i3739[7]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3745 = data
  i3744.index = i3745[0]
  i3744.advance = i3745[1]
  i3744.bearing = i3745[2]
  i3744.glyphWidth = i3745[3]
  i3744.glyphHeight = i3745[4]
  i3744.minX = i3745[5]
  i3744.maxX = i3745[6]
  i3744.minY = i3745[7]
  i3744.maxY = i3745[8]
  i3744.uvBottomLeftX = i3745[9]
  i3744.uvBottomLeftY = i3745[10]
  i3744.uvBottomRightX = i3745[11]
  i3744.uvBottomRightY = i3745[12]
  i3744.uvTopLeftX = i3745[13]
  i3744.uvTopLeftY = i3745[14]
  i3744.uvTopRightX = i3745[15]
  i3744.uvTopRightY = i3745[16]
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3747 = data
  i3746.name = i3747[0]
  var i3749 = i3747[1]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3749[i + 0]) );
  }
  i3746.layers = i3748
  var i3751 = i3747[2]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3751[i + 0]) );
  }
  i3746.parameters = i3750
  i3746.animationClips = i3747[3]
  i3746.avatarUnsupported = i3747[4]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3755 = data
  i3754.name = i3755[0]
  i3754.defaultWeight = i3755[1]
  i3754.blendingMode = i3755[2]
  i3754.avatarMask = i3755[3]
  i3754.syncedLayerIndex = i3755[4]
  i3754.syncedLayerAffectsTiming = !!i3755[5]
  i3754.syncedLayers = i3755[6]
  i3754.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3755[7], i3754.stateMachine)
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3757 = data
  i3756.id = i3757[0]
  i3756.name = i3757[1]
  i3756.path = i3757[2]
  var i3759 = i3757[3]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3759[i + 0]) );
  }
  i3756.states = i3758
  var i3761 = i3757[4]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3761[i + 0]) );
  }
  i3756.machines = i3760
  var i3763 = i3757[5]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3763[i + 0]) );
  }
  i3756.entryStateTransitions = i3762
  var i3765 = i3757[6]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3765[i + 0]) );
  }
  i3756.exitStateTransitions = i3764
  var i3767 = i3757[7]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3767[i + 0]) );
  }
  i3756.anyStateTransitions = i3766
  i3756.defaultStateId = i3757[8]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3771 = data
  i3770.id = i3771[0]
  i3770.name = i3771[1]
  i3770.cycleOffset = i3771[2]
  i3770.cycleOffsetParameter = i3771[3]
  i3770.cycleOffsetParameterActive = !!i3771[4]
  i3770.mirror = !!i3771[5]
  i3770.mirrorParameter = i3771[6]
  i3770.mirrorParameterActive = !!i3771[7]
  i3770.motionId = i3771[8]
  i3770.nameHash = i3771[9]
  i3770.fullPathHash = i3771[10]
  i3770.speed = i3771[11]
  i3770.speedParameter = i3771[12]
  i3770.speedParameterActive = !!i3771[13]
  i3770.tag = i3771[14]
  i3770.tagHash = i3771[15]
  i3770.writeDefaultValues = !!i3771[16]
  var i3773 = i3771[17]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 2) {
  request.r(i3773[i + 0], i3773[i + 1], 2, i3772, '')
  }
  i3770.behaviours = i3772
  var i3775 = i3771[18]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3775[i + 0]) );
  }
  i3770.transitions = i3774
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3781 = data
  i3780.fullPath = i3781[0]
  i3780.canTransitionToSelf = !!i3781[1]
  i3780.duration = i3781[2]
  i3780.exitTime = i3781[3]
  i3780.hasExitTime = !!i3781[4]
  i3780.hasFixedDuration = !!i3781[5]
  i3780.interruptionSource = i3781[6]
  i3780.offset = i3781[7]
  i3780.orderedInterruption = !!i3781[8]
  i3780.destinationStateId = i3781[9]
  i3780.isExit = !!i3781[10]
  i3780.mute = !!i3781[11]
  i3780.solo = !!i3781[12]
  var i3783 = i3781[13]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3783[i + 0]) );
  }
  i3780.conditions = i3782
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3789 = data
  i3788.destinationStateId = i3789[0]
  i3788.isExit = !!i3789[1]
  i3788.mute = !!i3789[2]
  i3788.solo = !!i3789[3]
  var i3791 = i3789[4]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3791[i + 0]) );
  }
  i3788.conditions = i3790
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3795 = data
  i3794.mode = i3795[0]
  i3794.parameter = i3795[1]
  i3794.threshold = i3795[2]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3799 = data
  i3798.defaultBool = !!i3799[0]
  i3798.defaultFloat = i3799[1]
  i3798.defaultInt = i3799[2]
  i3798.name = i3799[3]
  i3798.nameHash = i3799[4]
  i3798.type = i3799[5]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.bytes64 = i3801[1]
  i3800.data = i3801[2]
  return i3800
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3802 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3803 = data
  i3802.normalStyle = i3803[0]
  i3802.normalSpacingOffset = i3803[1]
  i3802.boldStyle = i3803[2]
  i3802.boldSpacing = i3803[3]
  i3802.italicStyle = i3803[4]
  i3802.tabSize = i3803[5]
  request.r(i3803[6], i3803[7], 0, i3802, 'atlas')
  i3802.m_SourceFontFileGUID = i3803[8]
  i3802.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3803[9], i3802.m_CreationSettings)
  request.r(i3803[10], i3803[11], 0, i3802, 'm_SourceFontFile')
  i3802.m_SourceFontFilePath = i3803[12]
  i3802.m_AtlasPopulationMode = i3803[13]
  i3802.InternalDynamicOS = !!i3803[14]
  var i3805 = i3803[15]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.add(request.d('UnityEngine.TextCore.Glyph', i3805[i + 0]));
  }
  i3802.m_GlyphTable = i3804
  var i3807 = i3803[16]
  var i3806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.add(request.d('TMPro.TMP_Character', i3807[i + 0]));
  }
  i3802.m_CharacterTable = i3806
  var i3809 = i3803[17]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 2) {
  request.r(i3809[i + 0], i3809[i + 1], 2, i3808, '')
  }
  i3802.m_AtlasTextures = i3808
  i3802.m_AtlasTextureIndex = i3803[18]
  i3802.m_IsMultiAtlasTexturesEnabled = !!i3803[19]
  i3802.m_GetFontFeatures = !!i3803[20]
  i3802.m_ClearDynamicDataOnBuild = !!i3803[21]
  i3802.m_AtlasWidth = i3803[22]
  i3802.m_AtlasHeight = i3803[23]
  i3802.m_AtlasPadding = i3803[24]
  i3802.m_AtlasRenderMode = i3803[25]
  var i3811 = i3803[26]
  var i3810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.add(request.d('UnityEngine.TextCore.GlyphRect', i3811[i + 0]));
  }
  i3802.m_UsedGlyphRects = i3810
  var i3813 = i3803[27]
  var i3812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.add(request.d('UnityEngine.TextCore.GlyphRect', i3813[i + 0]));
  }
  i3802.m_FreeGlyphRects = i3812
  i3802.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3803[28], i3802.m_FontFeatureTable)
  i3802.m_ShouldReimportFontFeatures = !!i3803[29]
  var i3815 = i3803[30]
  var i3814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 1, i3814, '')
  }
  i3802.m_FallbackFontAssetTable = i3814
  var i3817 = i3803[31]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('TMPro.TMP_FontWeightPair', i3817[i + 0]) );
  }
  i3802.m_FontWeightTable = i3816
  var i3819 = i3803[32]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('TMPro.TMP_FontWeightPair', i3819[i + 0]) );
  }
  i3802.fontWeights = i3818
  i3802.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3803[33], i3802.m_fontInfo)
  var i3821 = i3803[34]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.add(request.d('TMPro.TMP_Glyph', i3821[i + 0]));
  }
  i3802.m_glyphInfoList = i3820
  i3802.m_KerningTable = request.d('TMPro.KerningTable', i3803[35], i3802.m_KerningTable)
  var i3823 = i3803[36]
  var i3822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3823.length; i += 2) {
  request.r(i3823[i + 0], i3823[i + 1], 1, i3822, '')
  }
  i3802.fallbackFontAssets = i3822
  i3802.m_Version = i3803[37]
  i3802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3803[38], i3802.m_FaceInfo)
  request.r(i3803[39], i3803[40], 0, i3802, 'm_Material')
  return i3802
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3824 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3825 = data
  i3824.sourceFontFileName = i3825[0]
  i3824.sourceFontFileGUID = i3825[1]
  i3824.faceIndex = i3825[2]
  i3824.pointSizeSamplingMode = i3825[3]
  i3824.pointSize = i3825[4]
  i3824.padding = i3825[5]
  i3824.paddingMode = i3825[6]
  i3824.packingMode = i3825[7]
  i3824.atlasWidth = i3825[8]
  i3824.atlasHeight = i3825[9]
  i3824.characterSetSelectionMode = i3825[10]
  i3824.characterSequence = i3825[11]
  i3824.referencedFontAssetGUID = i3825[12]
  i3824.referencedTextAssetGUID = i3825[13]
  i3824.fontStyle = i3825[14]
  i3824.fontStyleModifier = i3825[15]
  i3824.renderMode = i3825[16]
  i3824.includeFontFeatures = !!i3825[17]
  return i3824
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3829 = data
  i3828.m_Index = i3829[0]
  i3828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3829[1], i3828.m_Metrics)
  i3828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3829[2], i3828.m_GlyphRect)
  i3828.m_Scale = i3829[3]
  i3828.m_AtlasIndex = i3829[4]
  i3828.m_ClassDefinitionType = i3829[5]
  return i3828
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3830 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3831 = data
  i3830.m_Width = i3831[0]
  i3830.m_Height = i3831[1]
  i3830.m_HorizontalBearingX = i3831[2]
  i3830.m_HorizontalBearingY = i3831[3]
  i3830.m_HorizontalAdvance = i3831[4]
  return i3830
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3833 = data
  i3832.m_X = i3833[0]
  i3832.m_Y = i3833[1]
  i3832.m_Width = i3833[2]
  i3832.m_Height = i3833[3]
  return i3832
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3836 = root || request.c( 'TMPro.TMP_Character' )
  var i3837 = data
  i3836.m_ElementType = i3837[0]
  i3836.m_Unicode = i3837[1]
  i3836.m_GlyphIndex = i3837[2]
  i3836.m_Scale = i3837[3]
  return i3836
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3842 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3843 = data
  var i3845 = i3843[0]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.add(request.d('TMPro.MultipleSubstitutionRecord', i3845[i + 0]));
  }
  i3842.m_MultipleSubstitutionRecords = i3844
  var i3847 = i3843[1]
  var i3846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.add(request.d('TMPro.LigatureSubstitutionRecord', i3847[i + 0]));
  }
  i3842.m_LigatureSubstitutionRecords = i3846
  var i3849 = i3843[2]
  var i3848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3849[i + 0]));
  }
  i3842.m_GlyphPairAdjustmentRecords = i3848
  var i3851 = i3843[3]
  var i3850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3851[i + 0]));
  }
  i3842.m_MarkToBaseAdjustmentRecords = i3850
  var i3853 = i3843[4]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3853[i + 0]));
  }
  i3842.m_MarkToMarkAdjustmentRecords = i3852
  return i3842
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3856 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3857 = data
  i3856.m_TargetGlyphID = i3857[0]
  i3856.m_SubstituteGlyphIDs = i3857[1]
  return i3856
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3860 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3861 = data
  i3860.m_ComponentGlyphIDs = i3861[0]
  i3860.m_LigatureGlyphID = i3861[1]
  return i3860
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3865 = data
  i3864.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3865[0], i3864.m_FirstAdjustmentRecord)
  i3864.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3865[1], i3864.m_SecondAdjustmentRecord)
  i3864.m_FeatureLookupFlags = i3865[2]
  return i3864
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3869 = data
  i3868.m_BaseGlyphID = i3869[0]
  i3868.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3869[1], i3868.m_BaseGlyphAnchorPoint)
  i3868.m_MarkGlyphID = i3869[2]
  i3868.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3869[3], i3868.m_MarkPositionAdjustment)
  return i3868
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3873 = data
  i3872.m_BaseMarkGlyphID = i3873[0]
  i3872.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3873[1], i3872.m_BaseMarkGlyphAnchorPoint)
  i3872.m_CombiningMarkGlyphID = i3873[2]
  i3872.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3873[3], i3872.m_CombiningMarkPositionAdjustment)
  return i3872
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3878 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3879 = data
  request.r(i3879[0], i3879[1], 0, i3878, 'regularTypeface')
  request.r(i3879[2], i3879[3], 0, i3878, 'italicTypeface')
  return i3878
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3880 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3881 = data
  i3880.Name = i3881[0]
  i3880.PointSize = i3881[1]
  i3880.Scale = i3881[2]
  i3880.CharacterCount = i3881[3]
  i3880.LineHeight = i3881[4]
  i3880.Baseline = i3881[5]
  i3880.Ascender = i3881[6]
  i3880.CapHeight = i3881[7]
  i3880.Descender = i3881[8]
  i3880.CenterLine = i3881[9]
  i3880.SuperscriptOffset = i3881[10]
  i3880.SubscriptOffset = i3881[11]
  i3880.SubSize = i3881[12]
  i3880.Underline = i3881[13]
  i3880.UnderlineThickness = i3881[14]
  i3880.strikethrough = i3881[15]
  i3880.strikethroughThickness = i3881[16]
  i3880.TabWidth = i3881[17]
  i3880.Padding = i3881[18]
  i3880.AtlasWidth = i3881[19]
  i3880.AtlasHeight = i3881[20]
  return i3880
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3885 = data
  i3884.id = i3885[0]
  i3884.x = i3885[1]
  i3884.y = i3885[2]
  i3884.width = i3885[3]
  i3884.height = i3885[4]
  i3884.xOffset = i3885[5]
  i3884.yOffset = i3885[6]
  i3884.xAdvance = i3885[7]
  i3884.scale = i3885[8]
  return i3884
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3886 = root || request.c( 'TMPro.KerningTable' )
  var i3887 = data
  var i3889 = i3887[0]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('TMPro.KerningPair', i3889[i + 0]));
  }
  i3886.kerningPairs = i3888
  return i3886
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3892 = root || request.c( 'TMPro.KerningPair' )
  var i3893 = data
  i3892.xOffset = i3893[0]
  i3892.m_FirstGlyph = i3893[1]
  i3892.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3893[2], i3892.m_FirstGlyphAdjustments)
  i3892.m_SecondGlyph = i3893[3]
  i3892.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3893[4], i3892.m_SecondGlyphAdjustments)
  i3892.m_IgnoreSpacingAdjustments = !!i3893[5]
  return i3892
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3895 = data
  i3894.m_FaceIndex = i3895[0]
  i3894.m_FamilyName = i3895[1]
  i3894.m_StyleName = i3895[2]
  i3894.m_PointSize = i3895[3]
  i3894.m_Scale = i3895[4]
  i3894.m_UnitsPerEM = i3895[5]
  i3894.m_LineHeight = i3895[6]
  i3894.m_AscentLine = i3895[7]
  i3894.m_CapLine = i3895[8]
  i3894.m_MeanLine = i3895[9]
  i3894.m_Baseline = i3895[10]
  i3894.m_DescentLine = i3895[11]
  i3894.m_SuperscriptOffset = i3895[12]
  i3894.m_SuperscriptSize = i3895[13]
  i3894.m_SubscriptOffset = i3895[14]
  i3894.m_SubscriptSize = i3895[15]
  i3894.m_UnderlineOffset = i3895[16]
  i3894.m_UnderlineThickness = i3895[17]
  i3894.m_StrikethroughOffset = i3895[18]
  i3894.m_StrikethroughThickness = i3895[19]
  i3894.m_TabWidth = i3895[20]
  return i3894
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3897 = data
  i3896.m_GlyphIndex = i3897[0]
  i3896.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3897[1], i3896.m_GlyphValueRecord)
  return i3896
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3898 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3899 = data
  i3898.m_XPlacement = i3899[0]
  i3898.m_YPlacement = i3899[1]
  i3898.m_XAdvance = i3899[2]
  i3898.m_YAdvance = i3899[3]
  return i3898
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3900 = root || request.c( 'TMPro.TMP_Settings' )
  var i3901 = data
  i3900.assetVersion = i3901[0]
  i3900.m_TextWrappingMode = i3901[1]
  i3900.m_enableKerning = !!i3901[2]
  var i3903 = i3901[3]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.add(i3903[i + 0]);
  }
  i3900.m_ActiveFontFeatures = i3902
  i3900.m_enableExtraPadding = !!i3901[4]
  i3900.m_enableTintAllSprites = !!i3901[5]
  i3900.m_enableParseEscapeCharacters = !!i3901[6]
  i3900.m_EnableRaycastTarget = !!i3901[7]
  i3900.m_GetFontFeaturesAtRuntime = !!i3901[8]
  i3900.m_missingGlyphCharacter = i3901[9]
  i3900.m_ClearDynamicDataOnBuild = !!i3901[10]
  i3900.m_warningsDisabled = !!i3901[11]
  request.r(i3901[12], i3901[13], 0, i3900, 'm_defaultFontAsset')
  i3900.m_defaultFontAssetPath = i3901[14]
  i3900.m_defaultFontSize = i3901[15]
  i3900.m_defaultAutoSizeMinRatio = i3901[16]
  i3900.m_defaultAutoSizeMaxRatio = i3901[17]
  i3900.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3901[18], i3901[19] )
  i3900.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3901[20], i3901[21] )
  i3900.m_autoSizeTextContainer = !!i3901[22]
  i3900.m_IsTextObjectScaleStatic = !!i3901[23]
  var i3905 = i3901[24]
  var i3904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3905.length; i += 2) {
  request.r(i3905[i + 0], i3905[i + 1], 1, i3904, '')
  }
  i3900.m_fallbackFontAssets = i3904
  i3900.m_matchMaterialPreset = !!i3901[25]
  i3900.m_HideSubTextObjects = !!i3901[26]
  request.r(i3901[27], i3901[28], 0, i3900, 'm_defaultSpriteAsset')
  i3900.m_defaultSpriteAssetPath = i3901[29]
  i3900.m_enableEmojiSupport = !!i3901[30]
  i3900.m_MissingCharacterSpriteUnicode = i3901[31]
  var i3907 = i3901[32]
  var i3906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3907.length; i += 2) {
  request.r(i3907[i + 0], i3907[i + 1], 1, i3906, '')
  }
  i3900.m_EmojiFallbackTextAssets = i3906
  i3900.m_defaultColorGradientPresetsPath = i3901[33]
  request.r(i3901[34], i3901[35], 0, i3900, 'm_defaultStyleSheet')
  i3900.m_StyleSheetsResourcePath = i3901[36]
  request.r(i3901[37], i3901[38], 0, i3900, 'm_leadingCharacters')
  request.r(i3901[39], i3901[40], 0, i3900, 'm_followingCharacters')
  i3900.m_UseModernHangulLineBreakingRules = !!i3901[41]
  return i3900
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3911 = data
  request.r(i3911[0], i3911[1], 0, i3910, 'spriteSheet')
  var i3913 = i3911[2]
  var i3912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.add(request.d('TMPro.TMP_Sprite', i3913[i + 0]));
  }
  i3910.spriteInfoList = i3912
  var i3915 = i3911[3]
  var i3914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3915.length; i += 2) {
  request.r(i3915[i + 0], i3915[i + 1], 1, i3914, '')
  }
  i3910.fallbackSpriteAssets = i3914
  var i3917 = i3911[4]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.add(request.d('TMPro.TMP_SpriteCharacter', i3917[i + 0]));
  }
  i3910.m_SpriteCharacterTable = i3916
  var i3919 = i3911[5]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.add(request.d('TMPro.TMP_SpriteGlyph', i3919[i + 0]));
  }
  i3910.m_GlyphTable = i3918
  i3910.m_Version = i3911[6]
  i3910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3911[7], i3910.m_FaceInfo)
  request.r(i3911[8], i3911[9], 0, i3910, 'm_Material')
  return i3910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3923 = data
  i3922.name = i3923[0]
  i3922.hashCode = i3923[1]
  i3922.unicode = i3923[2]
  i3922.pivot = new pc.Vec2( i3923[3], i3923[4] )
  request.r(i3923[5], i3923[6], 0, i3922, 'sprite')
  i3922.id = i3923[7]
  i3922.x = i3923[8]
  i3922.y = i3923[9]
  i3922.width = i3923[10]
  i3922.height = i3923[11]
  i3922.xOffset = i3923[12]
  i3922.yOffset = i3923[13]
  i3922.xAdvance = i3923[14]
  i3922.scale = i3923[15]
  return i3922
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3928 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3929 = data
  i3928.m_Name = i3929[0]
  i3928.m_ElementType = i3929[1]
  i3928.m_Unicode = i3929[2]
  i3928.m_GlyphIndex = i3929[3]
  i3928.m_Scale = i3929[4]
  return i3928
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3933 = data
  request.r(i3933[0], i3933[1], 0, i3932, 'sprite')
  i3932.m_Index = i3933[2]
  i3932.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3933[3], i3932.m_Metrics)
  i3932.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3933[4], i3932.m_GlyphRect)
  i3932.m_Scale = i3933[5]
  i3932.m_AtlasIndex = i3933[6]
  i3932.m_ClassDefinitionType = i3933[7]
  return i3932
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.add(request.d('TMPro.TMP_Style', i3937[i + 0]));
  }
  i3934.m_StyleList = i3936
  return i3934
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TMP_Style' )
  var i3941 = data
  i3940.m_Name = i3941[0]
  i3940.m_HashCode = i3941[1]
  i3940.m_OpeningDefinition = i3941[2]
  i3940.m_ClosingDefinition = i3941[3]
  i3940.m_OpeningTagArray = i3941[4]
  i3940.m_ClosingTagArray = i3941[5]
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3943 = data
  var i3945 = i3943[0]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3945[i + 0]) );
  }
  i3942.files = i3944
  i3942.componentToPrefabIds = i3943[1]
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3949 = data
  i3948.path = i3949[0]
  request.r(i3949[1], i3949[2], 0, i3948, 'unityObject')
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3951 = data
  var i3953 = i3951[0]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3953[i + 0]) );
  }
  i3950.scriptsExecutionOrder = i3952
  var i3955 = i3951[1]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3955[i + 0]) );
  }
  i3950.sortingLayers = i3954
  var i3957 = i3951[2]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3957[i + 0]) );
  }
  i3950.cullingLayers = i3956
  i3950.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3951[3], i3950.timeSettings)
  i3950.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3951[4], i3950.physicsSettings)
  i3950.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3951[5], i3950.physics2DSettings)
  i3950.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3951[6], i3950.qualitySettings)
  i3950.enableRealtimeShadows = !!i3951[7]
  i3950.enableAutoInstancing = !!i3951[8]
  i3950.enableStaticBatching = !!i3951[9]
  i3950.enableDynamicBatching = !!i3951[10]
  i3950.lightmapEncodingQuality = i3951[11]
  i3950.desiredColorSpace = i3951[12]
  var i3959 = i3951[13]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( i3959[i + 0] );
  }
  i3950.allTags = i3958
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3963 = data
  i3962.name = i3963[0]
  i3962.value = i3963[1]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3967 = data
  i3966.id = i3967[0]
  i3966.name = i3967[1]
  i3966.value = i3967[2]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3971 = data
  i3970.id = i3971[0]
  i3970.name = i3971[1]
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3973 = data
  i3972.fixedDeltaTime = i3973[0]
  i3972.maximumDeltaTime = i3973[1]
  i3972.timeScale = i3973[2]
  i3972.maximumParticleTimestep = i3973[3]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3975 = data
  i3974.gravity = new pc.Vec3( i3975[0], i3975[1], i3975[2] )
  i3974.defaultSolverIterations = i3975[3]
  i3974.bounceThreshold = i3975[4]
  i3974.autoSyncTransforms = !!i3975[5]
  i3974.autoSimulation = !!i3975[6]
  var i3977 = i3975[7]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3977[i + 0]) );
  }
  i3974.collisionMatrix = i3976
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3981 = data
  i3980.enabled = !!i3981[0]
  i3980.layerId = i3981[1]
  i3980.otherLayerId = i3981[2]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3983 = data
  request.r(i3983[0], i3983[1], 0, i3982, 'material')
  i3982.gravity = new pc.Vec2( i3983[2], i3983[3] )
  i3982.positionIterations = i3983[4]
  i3982.velocityIterations = i3983[5]
  i3982.velocityThreshold = i3983[6]
  i3982.maxLinearCorrection = i3983[7]
  i3982.maxAngularCorrection = i3983[8]
  i3982.maxTranslationSpeed = i3983[9]
  i3982.maxRotationSpeed = i3983[10]
  i3982.baumgarteScale = i3983[11]
  i3982.baumgarteTOIScale = i3983[12]
  i3982.timeToSleep = i3983[13]
  i3982.linearSleepTolerance = i3983[14]
  i3982.angularSleepTolerance = i3983[15]
  i3982.defaultContactOffset = i3983[16]
  i3982.autoSimulation = !!i3983[17]
  i3982.queriesHitTriggers = !!i3983[18]
  i3982.queriesStartInColliders = !!i3983[19]
  i3982.callbacksOnDisable = !!i3983[20]
  i3982.reuseCollisionCallbacks = !!i3983[21]
  i3982.autoSyncTransforms = !!i3983[22]
  var i3985 = i3983[23]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3985[i + 0]) );
  }
  i3982.collisionMatrix = i3984
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3989 = data
  i3988.enabled = !!i3989[0]
  i3988.layerId = i3989[1]
  i3988.otherLayerId = i3989[2]
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3991 = data
  var i3993 = i3991[0]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3993[i + 0]) );
  }
  i3990.qualityLevels = i3992
  var i3995 = i3991[1]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( i3995[i + 0] );
  }
  i3990.names = i3994
  i3990.shadows = i3991[2]
  i3990.anisotropicFiltering = i3991[3]
  i3990.antiAliasing = i3991[4]
  i3990.lodBias = i3991[5]
  i3990.shadowCascades = i3991[6]
  i3990.shadowDistance = i3991[7]
  i3990.shadowmaskMode = i3991[8]
  i3990.shadowProjection = i3991[9]
  i3990.shadowResolution = i3991[10]
  i3990.softParticles = !!i3991[11]
  i3990.softVegetation = !!i3991[12]
  i3990.activeColorSpace = i3991[13]
  i3990.desiredColorSpace = i3991[14]
  i3990.masterTextureLimit = i3991[15]
  i3990.maxQueuedFrames = i3991[16]
  i3990.particleRaycastBudget = i3991[17]
  i3990.pixelLightCount = i3991[18]
  i3990.realtimeReflectionProbes = !!i3991[19]
  i3990.shadowCascade2Split = i3991[20]
  i3990.shadowCascade4Split = new pc.Vec3( i3991[21], i3991[22], i3991[23] )
  i3990.streamingMipmapsActive = !!i3991[24]
  i3990.vSyncCount = i3991[25]
  i3990.asyncUploadBufferSize = i3991[26]
  i3990.asyncUploadTimeSlice = i3991[27]
  i3990.billboardsFaceCameraPosition = !!i3991[28]
  i3990.shadowNearPlaneOffset = i3991[29]
  i3990.streamingMipmapsMemoryBudget = i3991[30]
  i3990.maximumLODLevel = i3991[31]
  i3990.streamingMipmapsAddAllCameras = !!i3991[32]
  i3990.streamingMipmapsMaxLevelReduction = i3991[33]
  i3990.streamingMipmapsRenderersPerFrame = i3991[34]
  i3990.resolutionScalingFixedDPIFactor = i3991[35]
  i3990.streamingMipmapsMaxFileIORequests = i3991[36]
  i3990.currentQualityLevel = i3991[37]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4001 = data
  i4000.weight = i4001[0]
  i4000.vertices = i4001[1]
  i4000.normals = i4001[2]
  i4000.tangents = i4001[3]
  return i4000
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4003 = data
  i4002.m_XCoordinate = i4003[0]
  i4002.m_YCoordinate = i4003[1]
  return i4002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4005 = data
  i4004.m_XPositionAdjustment = i4005[0]
  i4004.m_YPositionAdjustment = i4005[1]
  return i4004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4007 = data
  i4006.xPlacement = i4007[0]
  i4006.yPlacement = i4007[1]
  i4006.xAdvance = i4007[2]
  i4006.yAdvance = i4007[3]
  return i4006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[35],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[32],"82":[83],"84":[83],"18":[17],"5":[2],"85":[30],"86":[2],"87":[88],"89":[44],"90":[18],"91":[17],"33":[32,17],"24":[17,25],"92":[17],"93":[25,17],"94":[32],"95":[25,17],"96":[17],"97":[98],"99":[98],"100":[98],"101":[102],"103":[17],"104":[17],"21":[18],"23":[25,17],"105":[17],"20":[18],"106":[17],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[25,17],"116":[17],"117":[17],"118":[17],"119":[17],"41":[25,17],"120":[17],"121":[44],"122":[44],"45":[44],"123":[44],"124":[2],"125":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","ItemGraphic","ItemMovement","UnityEngine.UI.Text","UnityEngine.Font","PlaySound","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "5e0779dd-c768-4250-8279-16a180c7870c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

