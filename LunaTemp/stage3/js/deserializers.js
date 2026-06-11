var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSpring' )
  var i429 = data
  i428.spring = i429[0]
  i428.damper = i429[1]
  i428.targetPosition = i429[2]
  return i428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor' )
  var i431 = data
  i430.m_TargetVelocity = i431[0]
  i430.m_Force = i431[1]
  i430.m_FreeSpin = i431[2]
  return i430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointLimits' )
  var i433 = data
  i432.m_Min = i433[0]
  i432.m_Max = i433[1]
  i432.m_Bounciness = i433[2]
  i432.m_BounceMinVelocity = i433[3]
  i432.m_ContactDistance = i433[4]
  i432.minBounce = i433[5]
  i432.maxBounce = i433[6]
  return i432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointDrive' )
  var i435 = data
  i434.m_PositionSpring = i435[0]
  i434.m_PositionDamper = i435[1]
  i434.m_MaximumForce = i435[2]
  i434.m_UseAcceleration = i435[3]
  return i434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i437 = data
  i436.m_Spring = i437[0]
  i436.m_Damper = i437[1]
  return i436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i439 = data
  i438.m_Limit = i439[0]
  i438.m_Bounciness = i439[1]
  i438.m_ContactDistance = i439[2]
  return i438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i441 = data
  i440.m_ExtremumSlip = i441[0]
  i440.m_ExtremumValue = i441[1]
  i440.m_AsymptoteSlip = i441[2]
  i440.m_AsymptoteValue = i441[3]
  i440.m_Stiffness = i441[4]
  return i440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i443 = data
  i442.m_LowerAngle = i443[0]
  i442.m_UpperAngle = i443[1]
  return i442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i445 = data
  i444.m_MotorSpeed = i445[0]
  i444.m_MaximumMotorTorque = i445[1]
  return i444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i447 = data
  i446.m_DampingRatio = i447[0]
  i446.m_Frequency = i447[1]
  i446.m_Angle = i447[2]
  return i446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i449 = data
  i448.m_LowerTranslation = i449[0]
  i448.m_UpperTranslation = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i450 = root || new pc.UnityMaterial()
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'shader')
  i450.renderQueue = i451[3]
  i450.enableInstancing = !!i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i453[i + 0]) );
  }
  i450.floatParameters = i452
  var i455 = i451[6]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i455[i + 0]) );
  }
  i450.colorParameters = i454
  var i457 = i451[7]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i457[i + 0]) );
  }
  i450.vectorParameters = i456
  var i459 = i451[8]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i459[i + 0]) );
  }
  i450.textureParameters = i458
  var i461 = i451[9]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i461[i + 0]) );
  }
  i450.materialFlags = i460
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Color(i469[1], i469[2], i469[3], i469[4])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Vec4( i473[1], i473[2], i473[3], i473[4] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'value')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i481 = data
  i480.name = i481[0]
  i480.enabled = !!i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i483 = data
  i482.name = i483[0]
  i482.width = i483[1]
  i482.height = i483[2]
  i482.mipmapCount = i483[3]
  i482.anisoLevel = i483[4]
  i482.filterMode = i483[5]
  i482.hdr = !!i483[6]
  i482.format = i483[7]
  i482.wrapMode = i483[8]
  i482.alphaIsTransparency = !!i483[9]
  i482.alphaSource = i483[10]
  i482.graphicsFormat = i483[11]
  i482.sRGBTexture = !!i483[12]
  i482.desiredColorSpace = i483[13]
  i482.wrapU = i483[14]
  i482.wrapV = i483[15]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i485 = data
  i484.name = i485[0]
  i484.halfPrecision = !!i485[1]
  i484.useSimplification = !!i485[2]
  i484.useUInt32IndexFormat = !!i485[3]
  i484.vertexCount = i485[4]
  i484.aabb = i485[5]
  var i487 = i485[6]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( !!i487[i + 0] );
  }
  i484.streams = i486
  i484.vertices = i485[7]
  var i489 = i485[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i489[i + 0]) );
  }
  i484.subMeshes = i488
  var i491 = i485[9]
  var i490 = []
  for(var i = 0; i < i491.length; i += 16) {
    i490.push( new pc.Mat4().setData(i491[i + 0], i491[i + 1], i491[i + 2], i491[i + 3],  i491[i + 4], i491[i + 5], i491[i + 6], i491[i + 7],  i491[i + 8], i491[i + 9], i491[i + 10], i491[i + 11],  i491[i + 12], i491[i + 13], i491[i + 14], i491[i + 15]) );
  }
  i484.bindposes = i490
  var i493 = i485[10]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i493[i + 0]) );
  }
  i484.blendShapes = i492
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i499 = data
  i498.triangles = i499[0]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i505 = data
  i504.name = i505[0]
  var i507 = i505[1]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i507[i + 0]) );
  }
  i504.frames = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i509 = data
  i508.position = new pc.Vec3( i509[0], i509[1], i509[2] )
  i508.scale = new pc.Vec3( i509[3], i509[4], i509[5] )
  i508.rotation = new pc.Quat(i509[6], i509[7], i509[8], i509[9])
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'animatorController')
  request.r(i511[2], i511[3], 0, i510, 'avatar')
  i510.updateMode = i511[4]
  i510.hasTransformHierarchy = !!i511[5]
  i510.applyRootMotion = !!i511[6]
  var i513 = i511[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i510.humanBones = i512
  i510.enabled = !!i511[8]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'sharedMesh')
  var i519 = i517[2]
  var i518 = []
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 2, i518, '')
  }
  i516.bones = i518
  i516.updateWhenOffscreen = !!i517[3]
  i516.localBounds = i517[4]
  request.r(i517[5], i517[6], 0, i516, 'rootBone')
  var i521 = i517[7]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i521[i + 0]) );
  }
  i516.blendShapesWeights = i520
  i516.enabled = !!i517[8]
  request.r(i517[9], i517[10], 0, i516, 'sharedMaterial')
  var i523 = i517[11]
  var i522 = []
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 2, i522, '')
  }
  i516.sharedMaterials = i522
  i516.receiveShadows = !!i517[12]
  i516.shadowCastingMode = i517[13]
  i516.sortingLayerID = i517[14]
  i516.sortingOrder = i517[15]
  i516.lightmapIndex = i517[16]
  i516.lightmapSceneIndex = i517[17]
  i516.lightmapScaleOffset = new pc.Vec4( i517[18], i517[19], i517[20], i517[21] )
  i516.lightProbeUsage = i517[22]
  i516.reflectionProbeUsage = i517[23]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i527 = data
  i526.weight = i527[0]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i531 = data
  i530.name = i531[0]
  i530.tagId = i531[1]
  i530.enabled = !!i531[2]
  i530.isStatic = !!i531[3]
  i530.layer = i531[4]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i533 = data
  i532.name = i533[0]
  i532.index = i533[1]
  i532.startup = !!i533[2]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i535 = data
  i534.aspect = i535[0]
  i534.orthographic = !!i535[1]
  i534.orthographicSize = i535[2]
  i534.backgroundColor = new pc.Color(i535[3], i535[4], i535[5], i535[6])
  i534.nearClipPlane = i535[7]
  i534.farClipPlane = i535[8]
  i534.fieldOfView = i535[9]
  i534.depth = i535[10]
  i534.clearFlags = i535[11]
  i534.cullingMask = i535[12]
  i534.rect = i535[13]
  request.r(i535[14], i535[15], 0, i534, 'targetTexture')
  i534.usePhysicalProperties = !!i535[16]
  i534.focalLength = i535[17]
  i534.sensorSize = new pc.Vec2( i535[18], i535[19] )
  i534.lensShift = new pc.Vec2( i535[20], i535[21] )
  i534.gateFit = i535[22]
  i534.commandBufferCount = i535[23]
  i534.cameraType = i535[24]
  i534.enabled = !!i535[25]
  return i534
}

Deserializers["InputManager"] = function (request, data, root) {
  var i536 = root || request.c( 'InputManager' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'mainCamera')
  i536.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i537[2] )
  i536.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i537[3] )
  i536.maxDistance = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i539 = data
  i538.color = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  request.r(i539[4], i539[5], 0, i538, 'sprite')
  i538.flipX = !!i539[6]
  i538.flipY = !!i539[7]
  i538.drawMode = i539[8]
  i538.size = new pc.Vec2( i539[9], i539[10] )
  i538.tileMode = i539[11]
  i538.adaptiveModeThreshold = i539[12]
  i538.maskInteraction = i539[13]
  i538.spriteSortPoint = i539[14]
  i538.enabled = !!i539[15]
  request.r(i539[16], i539[17], 0, i538, 'sharedMaterial')
  var i541 = i539[18]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.sharedMaterials = i540
  i538.receiveShadows = !!i539[19]
  i538.shadowCastingMode = i539[20]
  i538.sortingLayerID = i539[21]
  i538.sortingOrder = i539[22]
  i538.lightmapIndex = i539[23]
  i538.lightmapSceneIndex = i539[24]
  i538.lightmapScaleOffset = new pc.Vec4( i539[25], i539[26], i539[27], i539[28] )
  i538.lightProbeUsage = i539[29]
  i538.reflectionProbeUsage = i539[30]
  return i538
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_RootBone')
  var i545 = i543[2]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.m_BoneTransforms = i544
  i542.m_AlwaysUpdate = !!i543[3]
  i542.m_AutoRebind = !!i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i547 = data
  i546.center = new pc.Vec3( i547[0], i547[1], i547[2] )
  i546.size = new pc.Vec3( i547[3], i547[4], i547[5] )
  i546.enabled = !!i547[6]
  i546.isTrigger = !!i547[7]
  request.r(i547[8], i547[9], 0, i546, 'material')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i549 = data
  i548.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i549[0], i548.main)
  i548.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i549[1], i548.colorBySpeed)
  i548.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i549[2], i548.colorOverLifetime)
  i548.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i549[3], i548.emission)
  i548.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i549[4], i548.rotationBySpeed)
  i548.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i549[5], i548.rotationOverLifetime)
  i548.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i549[6], i548.shape)
  i548.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i549[7], i548.sizeBySpeed)
  i548.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i549[8], i548.sizeOverLifetime)
  i548.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i549[9], i548.textureSheetAnimation)
  i548.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i549[10], i548.velocityOverLifetime)
  i548.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i549[11], i548.noise)
  i548.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i549[12], i548.inheritVelocity)
  i548.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i549[13], i548.forceOverLifetime)
  i548.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i549[14], i548.limitVelocityOverLifetime)
  i548.useAutoRandomSeed = !!i549[15]
  i548.randomSeed = i549[16]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemMain()
  var i551 = data
  i550.duration = i551[0]
  i550.loop = !!i551[1]
  i550.prewarm = !!i551[2]
  i550.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[3], i550.startDelay)
  i550.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[4], i550.startLifetime)
  i550.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[5], i550.startSpeed)
  i550.startSize3D = !!i551[6]
  i550.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[7], i550.startSizeX)
  i550.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[8], i550.startSizeY)
  i550.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[9], i550.startSizeZ)
  i550.startRotation3D = !!i551[10]
  i550.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[11], i550.startRotationX)
  i550.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[12], i550.startRotationY)
  i550.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[13], i550.startRotationZ)
  i550.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i551[14], i550.startColor)
  i550.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[15], i550.gravityModifier)
  i550.simulationSpace = i551[16]
  request.r(i551[17], i551[18], 0, i550, 'customSimulationSpace')
  i550.simulationSpeed = i551[19]
  i550.useUnscaledTime = !!i551[20]
  i550.scalingMode = i551[21]
  i550.playOnAwake = !!i551[22]
  i550.maxParticles = i551[23]
  i550.emitterVelocityMode = i551[24]
  i550.stopAction = i551[25]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i552 = root || new pc.MinMaxCurve()
  var i553 = data
  i552.mode = i553[0]
  i552.curveMin = new pc.AnimationCurve( { keys_flow: i553[1] } )
  i552.curveMax = new pc.AnimationCurve( { keys_flow: i553[2] } )
  i552.curveMultiplier = i553[3]
  i552.constantMin = i553[4]
  i552.constantMax = i553[5]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i554 = root || new pc.MinMaxGradient()
  var i555 = data
  i554.mode = i555[0]
  i554.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i555[1], i554.gradientMin)
  i554.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i555[2], i554.gradientMax)
  i554.colorMin = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.colorMax = new pc.Color(i555[7], i555[8], i555[9], i555[10])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i557 = data
  i556.mode = i557[0]
  var i559 = i557[1]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i559[i + 0]) );
  }
  i556.colorKeys = i558
  var i561 = i557[2]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i561[i + 0]) );
  }
  i556.alphaKeys = i560
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemColorBySpeed()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[1], i562.color)
  i562.range = new pc.Vec2( i563[2], i563[3] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i567 = data
  i566.color = new pc.Color(i567[0], i567[1], i567[2], i567[3])
  i566.time = i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i571 = data
  i570.alpha = i571[0]
  i570.time = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemColorOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i573[1], i572.color)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemEmitter()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.rateOverTime)
  i574.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.rateOverDistance)
  var i577 = i575[3]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i577[i + 0]) );
  }
  i574.bursts = i576
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemBurst()
  var i581 = data
  i580.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[0], i580.count)
  i580.cycleCount = i581[1]
  i580.minCount = i581[2]
  i580.maxCount = i581[3]
  i580.repeatInterval = i581[4]
  i580.time = i581[5]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemRotationBySpeed()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.x)
  i582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.y)
  i582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.z)
  i582.separateAxes = !!i583[4]
  i582.range = new pc.Vec2( i583[5], i583[6] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemRotationOverLifetime()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.separateAxes = !!i585[4]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemShape()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.shapeType = i587[1]
  i586.randomDirectionAmount = i587[2]
  i586.sphericalDirectionAmount = i587[3]
  i586.randomPositionAmount = i587[4]
  i586.alignToDirection = !!i587[5]
  i586.radius = i587[6]
  i586.radiusMode = i587[7]
  i586.radiusSpread = i587[8]
  i586.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[9], i586.radiusSpeed)
  i586.radiusThickness = i587[10]
  i586.angle = i587[11]
  i586.length = i587[12]
  i586.boxThickness = new pc.Vec3( i587[13], i587[14], i587[15] )
  i586.meshShapeType = i587[16]
  request.r(i587[17], i587[18], 0, i586, 'mesh')
  request.r(i587[19], i587[20], 0, i586, 'meshRenderer')
  request.r(i587[21], i587[22], 0, i586, 'skinnedMeshRenderer')
  i586.useMeshMaterialIndex = !!i587[23]
  i586.meshMaterialIndex = i587[24]
  i586.useMeshColors = !!i587[25]
  i586.normalOffset = i587[26]
  i586.arc = i587[27]
  i586.arcMode = i587[28]
  i586.arcSpread = i587[29]
  i586.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[30], i586.arcSpeed)
  i586.donutRadius = i587[31]
  i586.position = new pc.Vec3( i587[32], i587[33], i587[34] )
  i586.rotation = new pc.Vec3( i587[35], i587[36], i587[37] )
  i586.scale = new pc.Vec3( i587[38], i587[39], i587[40] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemSizeBySpeed()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.separateAxes = !!i589[4]
  i588.range = new pc.Vec2( i589[5], i589[6] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemSizeOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.separateAxes = !!i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.mode = i593[1]
  i592.animation = i593[2]
  i592.numTilesX = i593[3]
  i592.numTilesY = i593[4]
  i592.useRandomRow = !!i593[5]
  i592.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[6], i592.frameOverTime)
  i592.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[7], i592.startFrame)
  i592.cycleCount = i593[8]
  i592.rowIndex = i593[9]
  i592.flipU = i593[10]
  i592.flipV = i593[11]
  i592.spriteCount = i593[12]
  var i595 = i593[13]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sprites = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.x)
  i598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.y)
  i598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[3], i598.z)
  i598.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[4], i598.radial)
  i598.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[5], i598.speedModifier)
  i598.space = i599[6]
  i598.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[7], i598.orbitalX)
  i598.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[8], i598.orbitalY)
  i598.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[9], i598.orbitalZ)
  i598.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[10], i598.orbitalOffsetX)
  i598.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[11], i598.orbitalOffsetY)
  i598.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[12], i598.orbitalOffsetZ)
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemNoise()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.separateAxes = !!i601[1]
  i600.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.strengthX)
  i600.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.strengthY)
  i600.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.strengthZ)
  i600.frequency = i601[5]
  i600.damping = !!i601[6]
  i600.octaveCount = i601[7]
  i600.octaveMultiplier = i601[8]
  i600.octaveScale = i601[9]
  i600.quality = i601[10]
  i600.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.scrollSpeed)
  i600.scrollSpeedMultiplier = i601[12]
  i600.remapEnabled = !!i601[13]
  i600.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[14], i600.remapX)
  i600.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[15], i600.remapY)
  i600.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[16], i600.remapZ)
  i600.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[17], i600.positionAmount)
  i600.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[18], i600.rotationAmount)
  i600.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[19], i600.sizeAmount)
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemInheritVelocity()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.mode = i603[1]
  i602.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.curve)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemForceOverLifetime()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[1], i604.x)
  i604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.y)
  i604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.z)
  i604.space = i605[4]
  i604.randomized = !!i605[5]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.limit)
  i606.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.limitX)
  i606.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.limitY)
  i606.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[4], i606.limitZ)
  i606.dampen = i607[5]
  i606.separateAxes = !!i607[6]
  i606.space = i607[7]
  i606.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[8], i606.drag)
  i606.multiplyDragByParticleSize = !!i607[9]
  i606.multiplyDragByParticleVelocity = !!i607[10]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'mesh')
  i608.meshCount = i609[2]
  i608.activeVertexStreamsCount = i609[3]
  i608.alignment = i609[4]
  i608.renderMode = i609[5]
  i608.sortMode = i609[6]
  i608.lengthScale = i609[7]
  i608.velocityScale = i609[8]
  i608.cameraVelocityScale = i609[9]
  i608.normalDirection = i609[10]
  i608.sortingFudge = i609[11]
  i608.minParticleSize = i609[12]
  i608.maxParticleSize = i609[13]
  i608.pivot = new pc.Vec3( i609[14], i609[15], i609[16] )
  request.r(i609[17], i609[18], 0, i608, 'trailMaterial')
  i608.applyActiveColorSpace = !!i609[19]
  i608.enabled = !!i609[20]
  request.r(i609[21], i609[22], 0, i608, 'sharedMaterial')
  var i611 = i609[23]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.sharedMaterials = i610
  i608.receiveShadows = !!i609[24]
  i608.shadowCastingMode = i609[25]
  i608.sortingLayerID = i609[26]
  i608.sortingOrder = i609[27]
  i608.lightmapIndex = i609[28]
  i608.lightmapSceneIndex = i609[29]
  i608.lightmapScaleOffset = new pc.Vec4( i609[30], i609[31], i609[32], i609[33] )
  i608.lightProbeUsage = i609[34]
  i608.reflectionProbeUsage = i609[35]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i613 = data
  i612.usedByComposite = !!i613[0]
  i612.autoTiling = !!i613[1]
  i612.size = new pc.Vec2( i613[2], i613[3] )
  i612.edgeRadius = i613[4]
  i612.enabled = !!i613[5]
  i612.isTrigger = !!i613[6]
  i612.usedByEffector = !!i613[7]
  i612.density = i613[8]
  i612.offset = new pc.Vec2( i613[9], i613[10] )
  request.r(i613[11], i613[12], 0, i612, 'material')
  return i612
}

Deserializers["ItemController"] = function (request, data, root) {
  var i614 = root || request.c( 'ItemController' )
  var i615 = data
  i614.itemType = i615[0]
  var i617 = i615[1]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i617.length; i += 1) {
    i616.add(request.d('AnimObjectData', i617[i + 0]));
  }
  i614.animationObjects = i616
  return i614
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i620 = root || request.c( 'AnimObjectData' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'animObj')
  i620.delayFromStart = i621[2]
  i620.durationToDeactivate = i621[3]
  return i620
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i622 = root || request.c( 'ItemMovement' )
  var i623 = data
  return i622
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i624 = root || request.c( 'ItemGraphic' )
  var i625 = data
  var i627 = i625[0]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.spriteRenderers = i626
  i624.sortingOrderOffset = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i631 = data
  i630.ambientIntensity = i631[0]
  i630.reflectionIntensity = i631[1]
  i630.ambientMode = i631[2]
  i630.ambientLight = new pc.Color(i631[3], i631[4], i631[5], i631[6])
  i630.ambientSkyColor = new pc.Color(i631[7], i631[8], i631[9], i631[10])
  i630.ambientGroundColor = new pc.Color(i631[11], i631[12], i631[13], i631[14])
  i630.ambientEquatorColor = new pc.Color(i631[15], i631[16], i631[17], i631[18])
  i630.fogColor = new pc.Color(i631[19], i631[20], i631[21], i631[22])
  i630.fogEndDistance = i631[23]
  i630.fogStartDistance = i631[24]
  i630.fogDensity = i631[25]
  i630.fog = !!i631[26]
  request.r(i631[27], i631[28], 0, i630, 'skybox')
  i630.fogMode = i631[29]
  var i633 = i631[30]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i633[i + 0]) );
  }
  i630.lightmaps = i632
  i630.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i631[31], i630.lightProbes)
  i630.lightmapsMode = i631[32]
  i630.mixedBakeMode = i631[33]
  i630.environmentLightingMode = i631[34]
  i630.ambientProbe = new pc.SphericalHarmonicsL2(i631[35])
  i630.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i631[36])
  i630.useReferenceAmbientProbe = !!i631[37]
  request.r(i631[38], i631[39], 0, i630, 'customReflection')
  request.r(i631[40], i631[41], 0, i630, 'defaultReflection')
  i630.defaultReflectionMode = i631[42]
  i630.defaultReflectionResolution = i631[43]
  i630.sunLightObjectId = i631[44]
  i630.pixelLightCount = i631[45]
  i630.defaultReflectionHDR = !!i631[46]
  i630.hasLightDataAsset = !!i631[47]
  i630.hasManualGenerate = !!i631[48]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'lightmapColor')
  request.r(i637[2], i637[3], 0, i636, 'lightmapDirection')
  request.r(i637[4], i637[5], 0, i636, 'shadowMask')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i638 = root || new UnityEngine.LightProbes()
  var i639 = data
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.hasDepthOnlyPass = !!i647[10]
  i646.isCreatedByShaderGraph = !!i647[11]
  i646.disableBatching = !!i647[12]
  i646.compiled = !!i647[13]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i666 = root || new pc.UnityShaderPass()
  var i667 = data
  i666.id = i667[0]
  i666.subShaderIndex = i667[1]
  i666.name = i667[2]
  i666.passType = i667[3]
  i666.grabPassTextureName = i667[4]
  i666.usePass = !!i667[5]
  i666.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[6], i666.zTest)
  i666.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[7], i666.zWrite)
  i666.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[8], i666.culling)
  i666.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[9], i666.blending)
  i666.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[10], i666.alphaBlending)
  i666.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[11], i666.colorWriteMask)
  i666.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[12], i666.offsetUnits)
  i666.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[13], i666.offsetFactor)
  i666.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[14], i666.stencilRef)
  i666.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[15], i666.stencilReadMask)
  i666.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[16], i666.stencilWriteMask)
  i666.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[17], i666.stencilOp)
  i666.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[18], i666.stencilOpFront)
  i666.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[19], i666.stencilOpBack)
  var i669 = i667[20]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i669[i + 0]) );
  }
  i666.tags = i668
  var i671 = i667[21]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.passDefinedKeywords = i670
  var i673 = i667[22]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i673[i + 0]) );
  }
  i666.passDefinedKeywordGroups = i672
  var i675 = i667[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i666.variants = i674
  var i677 = i667[24]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i666.excludedVariants = i676
  i666.hasDepthReader = !!i667[25]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i679 = data
  i678.val = i679[0]
  i678.name = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i681 = data
  i680.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.src)
  i680.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.dst)
  i680.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.op)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i683 = data
  i682.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.pass)
  i682.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.fail)
  i682.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.zFail)
  i682.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[3], i682.comp)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i690.keywords = i692
  i690.hasDiscard = !!i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i697 = data
  i696.passId = i697[0]
  i696.subShaderIndex = i697[1]
  var i699 = i697[2]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.vertexProgram = i697[3]
  i696.fragmentProgram = i697[4]
  i696.exportedForWebGl2 = !!i697[5]
  i696.readDepth = !!i697[6]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'shader')
  i702.pass = i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i707 = data
  i706.name = i707[0]
  i706.type = i707[1]
  i706.value = new pc.Vec4( i707[2], i707[3], i707[4], i707[5] )
  i706.textureValue = i707[6]
  i706.shaderPropertyFlag = i707[7]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i709 = data
  i708.name = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'texture')
  i708.aabb = i709[3]
  i708.vertices = i709[4]
  i708.triangles = i709[5]
  i708.textureRect = UnityEngine.Rect.MinMaxRect(i709[6], i709[7], i709[8], i709[9])
  i708.packedRect = UnityEngine.Rect.MinMaxRect(i709[10], i709[11], i709[12], i709[13])
  i708.border = new pc.Vec4( i709[14], i709[15], i709[16], i709[17] )
  i708.transparency = i709[18]
  i708.bounds = i709[19]
  i708.pixelsPerUnit = i709[20]
  i708.textureWidth = i709[21]
  i708.textureHeight = i709[22]
  i708.nativeSize = new pc.Vec2( i709[23], i709[24] )
  i708.pivot = new pc.Vec2( i709[25], i709[26] )
  i708.textureRectOffset = new pc.Vec2( i709[27], i709[28] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i711 = data
  i710.name = i711[0]
  i710.wrapMode = i711[1]
  i710.isLooping = !!i711[2]
  i710.length = i711[3]
  var i713 = i711[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i713[i + 0]) );
  }
  i710.curves = i712
  var i715 = i711[5]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i715[i + 0]) );
  }
  i710.events = i714
  i710.halfPrecision = !!i711[6]
  i710._frameRate = i711[7]
  i710.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i711[8], i710.localBounds)
  i710.hasMuscleCurves = !!i711[9]
  var i717 = i711[10]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i710.clipMuscleConstant = i716
  i710.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i711[11], i710.clipBindingConstant)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i721 = data
  i720.path = i721[0]
  i720.hash = i721[1]
  i720.componentType = i721[2]
  i720.property = i721[3]
  i720.keys = i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i723[i + 0]) );
  }
  i720.objectReferenceKeys = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i727 = data
  i726.time = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'value')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i731 = data
  i730.functionName = i731[0]
  i730.floatParameter = i731[1]
  i730.intParameter = i731[2]
  i730.stringParameter = i731[3]
  request.r(i731[4], i731[5], 0, i730, 'objectReferenceParameter')
  i730.time = i731[6]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i733 = data
  i732.center = new pc.Vec3( i733[0], i733[1], i733[2] )
  i732.extends = new pc.Vec3( i733[3], i733[4], i733[5] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.genericBindings = i738
  var i741 = i737[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.pptrCurveMapping = i740
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i743 = data
  i742.name = i743[0]
  var i745 = i743[1]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i745[i + 0]) );
  }
  i742.layers = i744
  var i747 = i743[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i747[i + 0]) );
  }
  i742.parameters = i746
  i742.animationClips = i743[3]
  i742.avatarUnsupported = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i751 = data
  i750.name = i751[0]
  i750.defaultWeight = i751[1]
  i750.blendingMode = i751[2]
  i750.avatarMask = i751[3]
  i750.syncedLayerIndex = i751[4]
  i750.syncedLayerAffectsTiming = !!i751[5]
  i750.syncedLayers = i751[6]
  i750.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i751[7], i750.stateMachine)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i753 = data
  i752.id = i753[0]
  i752.name = i753[1]
  i752.path = i753[2]
  var i755 = i753[3]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i755[i + 0]) );
  }
  i752.states = i754
  var i757 = i753[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i757[i + 0]) );
  }
  i752.machines = i756
  var i759 = i753[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i759[i + 0]) );
  }
  i752.entryStateTransitions = i758
  var i761 = i753[6]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i761[i + 0]) );
  }
  i752.exitStateTransitions = i760
  var i763 = i753[7]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i763[i + 0]) );
  }
  i752.anyStateTransitions = i762
  i752.defaultStateId = i753[8]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i767 = data
  i766.id = i767[0]
  i766.name = i767[1]
  i766.cycleOffset = i767[2]
  i766.cycleOffsetParameter = i767[3]
  i766.cycleOffsetParameterActive = !!i767[4]
  i766.mirror = !!i767[5]
  i766.mirrorParameter = i767[6]
  i766.mirrorParameterActive = !!i767[7]
  i766.motionId = i767[8]
  i766.nameHash = i767[9]
  i766.fullPathHash = i767[10]
  i766.speed = i767[11]
  i766.speedParameter = i767[12]
  i766.speedParameterActive = !!i767[13]
  i766.tag = i767[14]
  i766.tagHash = i767[15]
  i766.writeDefaultValues = !!i767[16]
  var i769 = i767[17]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.behaviours = i768
  var i771 = i767[18]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i771[i + 0]) );
  }
  i766.transitions = i770
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i777 = data
  i776.fullPath = i777[0]
  i776.canTransitionToSelf = !!i777[1]
  i776.duration = i777[2]
  i776.exitTime = i777[3]
  i776.hasExitTime = !!i777[4]
  i776.hasFixedDuration = !!i777[5]
  i776.interruptionSource = i777[6]
  i776.offset = i777[7]
  i776.orderedInterruption = !!i777[8]
  i776.destinationStateId = i777[9]
  i776.isExit = !!i777[10]
  i776.mute = !!i777[11]
  i776.solo = !!i777[12]
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i779[i + 0]) );
  }
  i776.conditions = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i785 = data
  i784.destinationStateId = i785[0]
  i784.isExit = !!i785[1]
  i784.mute = !!i785[2]
  i784.solo = !!i785[3]
  var i787 = i785[4]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i787[i + 0]) );
  }
  i784.conditions = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i791 = data
  i790.defaultBool = !!i791[0]
  i790.defaultFloat = i791[1]
  i790.defaultInt = i791[2]
  i790.name = i791[3]
  i790.nameHash = i791[4]
  i790.type = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i795[i + 0]) );
  }
  i792.files = i794
  i792.componentToPrefabIds = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i799 = data
  i798.path = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'unityObject')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i803[i + 0]) );
  }
  i800.scriptsExecutionOrder = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i805[i + 0]) );
  }
  i800.sortingLayers = i804
  var i807 = i801[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i807[i + 0]) );
  }
  i800.cullingLayers = i806
  i800.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i801[3], i800.timeSettings)
  i800.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i801[4], i800.physicsSettings)
  i800.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i801[5], i800.physics2DSettings)
  i800.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i801[6], i800.qualitySettings)
  i800.enableRealtimeShadows = !!i801[7]
  i800.enableAutoInstancing = !!i801[8]
  i800.enableStaticBatching = !!i801[9]
  i800.enableDynamicBatching = !!i801[10]
  i800.lightmapEncodingQuality = i801[11]
  i800.desiredColorSpace = i801[12]
  var i809 = i801[13]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i800.allTags = i808
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.value = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i823 = data
  i822.fixedDeltaTime = i823[0]
  i822.maximumDeltaTime = i823[1]
  i822.timeScale = i823[2]
  i822.maximumParticleTimestep = i823[3]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i825 = data
  i824.gravity = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.defaultSolverIterations = i825[3]
  i824.bounceThreshold = i825[4]
  i824.autoSyncTransforms = !!i825[5]
  i824.autoSimulation = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i827[i + 0]) );
  }
  i824.collisionMatrix = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i831 = data
  i830.enabled = !!i831[0]
  i830.layerId = i831[1]
  i830.otherLayerId = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'material')
  i832.gravity = new pc.Vec2( i833[2], i833[3] )
  i832.positionIterations = i833[4]
  i832.velocityIterations = i833[5]
  i832.velocityThreshold = i833[6]
  i832.maxLinearCorrection = i833[7]
  i832.maxAngularCorrection = i833[8]
  i832.maxTranslationSpeed = i833[9]
  i832.maxRotationSpeed = i833[10]
  i832.baumgarteScale = i833[11]
  i832.baumgarteTOIScale = i833[12]
  i832.timeToSleep = i833[13]
  i832.linearSleepTolerance = i833[14]
  i832.angularSleepTolerance = i833[15]
  i832.defaultContactOffset = i833[16]
  i832.autoSimulation = !!i833[17]
  i832.queriesHitTriggers = !!i833[18]
  i832.queriesStartInColliders = !!i833[19]
  i832.callbacksOnDisable = !!i833[20]
  i832.reuseCollisionCallbacks = !!i833[21]
  i832.autoSyncTransforms = !!i833[22]
  var i835 = i833[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i835[i + 0]) );
  }
  i832.collisionMatrix = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i839 = data
  i838.enabled = !!i839[0]
  i838.layerId = i839[1]
  i838.otherLayerId = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i843[i + 0]) );
  }
  i840.qualityLevels = i842
  var i845 = i841[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i840.names = i844
  i840.shadows = i841[2]
  i840.anisotropicFiltering = i841[3]
  i840.antiAliasing = i841[4]
  i840.lodBias = i841[5]
  i840.shadowCascades = i841[6]
  i840.shadowDistance = i841[7]
  i840.shadowmaskMode = i841[8]
  i840.shadowProjection = i841[9]
  i840.shadowResolution = i841[10]
  i840.softParticles = !!i841[11]
  i840.softVegetation = !!i841[12]
  i840.activeColorSpace = i841[13]
  i840.desiredColorSpace = i841[14]
  i840.masterTextureLimit = i841[15]
  i840.maxQueuedFrames = i841[16]
  i840.particleRaycastBudget = i841[17]
  i840.pixelLightCount = i841[18]
  i840.realtimeReflectionProbes = !!i841[19]
  i840.shadowCascade2Split = i841[20]
  i840.shadowCascade4Split = new pc.Vec3( i841[21], i841[22], i841[23] )
  i840.streamingMipmapsActive = !!i841[24]
  i840.vSyncCount = i841[25]
  i840.asyncUploadBufferSize = i841[26]
  i840.asyncUploadTimeSlice = i841[27]
  i840.billboardsFaceCameraPosition = !!i841[28]
  i840.shadowNearPlaneOffset = i841[29]
  i840.streamingMipmapsMemoryBudget = i841[30]
  i840.maximumLODLevel = i841[31]
  i840.streamingMipmapsAddAllCameras = !!i841[32]
  i840.streamingMipmapsMaxLevelReduction = i841[33]
  i840.streamingMipmapsRenderersPerFrame = i841[34]
  i840.resolutionScalingFixedDPIFactor = i841[35]
  i840.streamingMipmapsMaxFileIORequests = i841[36]
  i840.currentQualityLevel = i841[37]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i851 = data
  i850.weight = i851[0]
  i850.vertices = i851[1]
  i850.normals = i851[2]
  i850.tangents = i851[3]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i855 = data
  i854.mode = i855[0]
  i854.parameter = i855[1]
  i854.threshold = i855[2]
  return i854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"23":[24],"25":[24],"26":[24],"27":[24],"28":[24],"29":[24],"30":[5],"31":[8],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[40],"48":[40],"49":[40],"50":[40],"51":[40],"52":[40],"53":[8],"54":[55],"56":[57],"58":[57],"59":[60],"14":[12],"61":[8],"62":[63],"64":[65],"66":[59],"67":[60],"68":[55,60],"69":[60,70],"71":[60],"72":[70,60],"73":[55],"74":[70,60],"75":[60],"76":[77],"78":[77],"79":[77],"80":[81],"82":[60],"83":[60],"84":[59],"85":[70,60],"86":[60],"87":[59],"88":[60],"89":[60],"90":[60],"91":[60],"92":[60],"93":[60],"94":[60],"95":[60],"96":[60],"97":[70,60],"98":[60],"99":[60],"100":[60],"101":[60],"102":[70,60],"103":[60],"104":[65],"105":[65],"106":[65],"107":[65],"108":[8],"109":[8]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","InputManager","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.BoxCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider2D","ItemController","UnityEngine.GameObject","ItemMovement","ItemGraphic","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1915";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3681";

Deserializers.runtimeAnalysisExcludedModules = "reflection, prefabs";

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

Deserializers.buildID = "8ff7bc16-3207-4b1c-b2eb-99ed2b30645f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

