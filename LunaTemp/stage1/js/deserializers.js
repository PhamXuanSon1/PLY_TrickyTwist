var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointSpring' )
  var i415 = data
  i414.spring = i415[0]
  i414.damper = i415[1]
  i414.targetPosition = i415[2]
  return i414
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointMotor' )
  var i417 = data
  i416.m_TargetVelocity = i417[0]
  i416.m_Force = i417[1]
  i416.m_FreeSpin = i417[2]
  return i416
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointLimits' )
  var i419 = data
  i418.m_Min = i419[0]
  i418.m_Max = i419[1]
  i418.m_Bounciness = i419[2]
  i418.m_BounceMinVelocity = i419[3]
  i418.m_ContactDistance = i419[4]
  i418.minBounce = i419[5]
  i418.maxBounce = i419[6]
  return i418
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointDrive' )
  var i421 = data
  i420.m_PositionSpring = i421[0]
  i420.m_PositionDamper = i421[1]
  i420.m_MaximumForce = i421[2]
  i420.m_UseAcceleration = i421[3]
  return i420
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i423 = data
  i422.m_Spring = i423[0]
  i422.m_Damper = i423[1]
  return i422
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i425 = data
  i424.m_Limit = i425[0]
  i424.m_Bounciness = i425[1]
  i424.m_ContactDistance = i425[2]
  return i424
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i427 = data
  i426.m_ExtremumSlip = i427[0]
  i426.m_ExtremumValue = i427[1]
  i426.m_AsymptoteSlip = i427[2]
  i426.m_AsymptoteValue = i427[3]
  i426.m_Stiffness = i427[4]
  return i426
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i429 = data
  i428.m_LowerAngle = i429[0]
  i428.m_UpperAngle = i429[1]
  return i428
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i431 = data
  i430.m_MotorSpeed = i431[0]
  i430.m_MaximumMotorTorque = i431[1]
  return i430
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i433 = data
  i432.m_DampingRatio = i433[0]
  i432.m_Frequency = i433[1]
  i432.m_Angle = i433[2]
  return i432
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i435 = data
  i434.m_LowerTranslation = i435[0]
  i434.m_UpperTranslation = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i436 = root || new pc.UnityMaterial()
  var i437 = data
  i436.name = i437[0]
  request.r(i437[1], i437[2], 0, i436, 'shader')
  i436.renderQueue = i437[3]
  i436.enableInstancing = !!i437[4]
  var i439 = i437[5]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i439[i + 0]) );
  }
  i436.floatParameters = i438
  var i441 = i437[6]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i441[i + 0]) );
  }
  i436.colorParameters = i440
  var i443 = i437[7]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i443[i + 0]) );
  }
  i436.vectorParameters = i442
  var i445 = i437[8]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i445[i + 0]) );
  }
  i436.textureParameters = i444
  var i447 = i437[9]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i447[i + 0]) );
  }
  i436.materialFlags = i446
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Color(i455[1], i455[2], i455[3], i455[4])
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i459 = data
  i458.name = i459[0]
  i458.value = new pc.Vec4( i459[1], i459[2], i459[3], i459[4] )
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i463 = data
  i462.name = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'value')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i467 = data
  i466.name = i467[0]
  i466.enabled = !!i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i469 = data
  i468.name = i469[0]
  i468.width = i469[1]
  i468.height = i469[2]
  i468.mipmapCount = i469[3]
  i468.anisoLevel = i469[4]
  i468.filterMode = i469[5]
  i468.hdr = !!i469[6]
  i468.format = i469[7]
  i468.wrapMode = i469[8]
  i468.alphaIsTransparency = !!i469[9]
  i468.alphaSource = i469[10]
  i468.graphicsFormat = i469[11]
  i468.sRGBTexture = !!i469[12]
  i468.desiredColorSpace = i469[13]
  i468.wrapU = i469[14]
  i468.wrapV = i469[15]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i471 = data
  i470.name = i471[0]
  i470.halfPrecision = !!i471[1]
  i470.useSimplification = !!i471[2]
  i470.useUInt32IndexFormat = !!i471[3]
  i470.vertexCount = i471[4]
  i470.aabb = i471[5]
  var i473 = i471[6]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( !!i473[i + 0] );
  }
  i470.streams = i472
  i470.vertices = i471[7]
  var i475 = i471[8]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i475[i + 0]) );
  }
  i470.subMeshes = i474
  var i477 = i471[9]
  var i476 = []
  for(var i = 0; i < i477.length; i += 16) {
    i476.push( new pc.Mat4().setData(i477[i + 0], i477[i + 1], i477[i + 2], i477[i + 3],  i477[i + 4], i477[i + 5], i477[i + 6], i477[i + 7],  i477[i + 8], i477[i + 9], i477[i + 10], i477[i + 11],  i477[i + 12], i477[i + 13], i477[i + 14], i477[i + 15]) );
  }
  i470.bindposes = i476
  var i479 = i471[10]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i479[i + 0]) );
  }
  i470.blendShapes = i478
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i485 = data
  i484.triangles = i485[0]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i491 = data
  i490.name = i491[0]
  var i493 = i491[1]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i493[i + 0]) );
  }
  i490.frames = i492
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i495 = data
  i494.name = i495[0]
  i494.index = i495[1]
  i494.startup = !!i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i497 = data
  i496.aspect = i497[0]
  i496.orthographic = !!i497[1]
  i496.orthographicSize = i497[2]
  i496.backgroundColor = new pc.Color(i497[3], i497[4], i497[5], i497[6])
  i496.nearClipPlane = i497[7]
  i496.farClipPlane = i497[8]
  i496.fieldOfView = i497[9]
  i496.depth = i497[10]
  i496.clearFlags = i497[11]
  i496.cullingMask = i497[12]
  i496.rect = i497[13]
  request.r(i497[14], i497[15], 0, i496, 'targetTexture')
  i496.usePhysicalProperties = !!i497[16]
  i496.focalLength = i497[17]
  i496.sensorSize = new pc.Vec2( i497[18], i497[19] )
  i496.lensShift = new pc.Vec2( i497[20], i497[21] )
  i496.gateFit = i497[22]
  i496.commandBufferCount = i497[23]
  i496.cameraType = i497[24]
  i496.enabled = !!i497[25]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i499 = data
  i498.name = i499[0]
  i498.tagId = i499[1]
  i498.enabled = !!i499[2]
  i498.isStatic = !!i499[3]
  i498.layer = i499[4]
  return i498
}

Deserializers["InputManager"] = function (request, data, root) {
  var i500 = root || request.c( 'InputManager' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'mainCamera')
  i500.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i501[2] )
  i500.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i501[3] )
  i500.maxDistance = i501[4]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'animatorController')
  request.r(i503[2], i503[3], 0, i502, 'avatar')
  i502.updateMode = i503[4]
  i502.hasTransformHierarchy = !!i503[5]
  i502.applyRootMotion = !!i503[6]
  var i505 = i503[7]
  var i504 = []
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 2, i504, '')
  }
  i502.humanBones = i504
  i502.enabled = !!i503[8]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i509 = data
  i508.color = new pc.Color(i509[0], i509[1], i509[2], i509[3])
  request.r(i509[4], i509[5], 0, i508, 'sprite')
  i508.flipX = !!i509[6]
  i508.flipY = !!i509[7]
  i508.drawMode = i509[8]
  i508.size = new pc.Vec2( i509[9], i509[10] )
  i508.tileMode = i509[11]
  i508.adaptiveModeThreshold = i509[12]
  i508.maskInteraction = i509[13]
  i508.spriteSortPoint = i509[14]
  i508.enabled = !!i509[15]
  request.r(i509[16], i509[17], 0, i508, 'sharedMaterial')
  var i511 = i509[18]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i508.sharedMaterials = i510
  i508.receiveShadows = !!i509[19]
  i508.shadowCastingMode = i509[20]
  i508.sortingLayerID = i509[21]
  i508.sortingOrder = i509[22]
  i508.lightmapIndex = i509[23]
  i508.lightmapSceneIndex = i509[24]
  i508.lightmapScaleOffset = new pc.Vec4( i509[25], i509[26], i509[27], i509[28] )
  i508.lightProbeUsage = i509[29]
  i508.reflectionProbeUsage = i509[30]
  return i508
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_RootBone')
  var i517 = i515[2]
  var i516 = []
  for(var i = 0; i < i517.length; i += 2) {
  request.r(i517[i + 0], i517[i + 1], 2, i516, '')
  }
  i514.m_BoneTransforms = i516
  i514.m_AlwaysUpdate = !!i515[3]
  i514.m_AutoRebind = !!i515[4]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i519 = data
  i518.center = new pc.Vec3( i519[0], i519[1], i519[2] )
  i518.size = new pc.Vec3( i519[3], i519[4], i519[5] )
  i518.enabled = !!i519[6]
  i518.isTrigger = !!i519[7]
  request.r(i519[8], i519[9], 0, i518, 'material')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i521 = data
  i520.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i521[0], i520.main)
  i520.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i521[1], i520.colorBySpeed)
  i520.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i521[2], i520.colorOverLifetime)
  i520.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i521[3], i520.emission)
  i520.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i521[4], i520.rotationBySpeed)
  i520.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i521[5], i520.rotationOverLifetime)
  i520.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i521[6], i520.shape)
  i520.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i521[7], i520.sizeBySpeed)
  i520.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i521[8], i520.sizeOverLifetime)
  i520.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i521[9], i520.textureSheetAnimation)
  i520.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i521[10], i520.velocityOverLifetime)
  i520.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i521[11], i520.noise)
  i520.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i521[12], i520.inheritVelocity)
  i520.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i521[13], i520.forceOverLifetime)
  i520.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i521[14], i520.limitVelocityOverLifetime)
  i520.useAutoRandomSeed = !!i521[15]
  i520.randomSeed = i521[16]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemMain()
  var i523 = data
  i522.duration = i523[0]
  i522.loop = !!i523[1]
  i522.prewarm = !!i523[2]
  i522.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.startDelay)
  i522.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[4], i522.startLifetime)
  i522.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[5], i522.startSpeed)
  i522.startSize3D = !!i523[6]
  i522.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[7], i522.startSizeX)
  i522.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[8], i522.startSizeY)
  i522.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[9], i522.startSizeZ)
  i522.startRotation3D = !!i523[10]
  i522.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[11], i522.startRotationX)
  i522.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[12], i522.startRotationY)
  i522.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[13], i522.startRotationZ)
  i522.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i523[14], i522.startColor)
  i522.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[15], i522.gravityModifier)
  i522.simulationSpace = i523[16]
  request.r(i523[17], i523[18], 0, i522, 'customSimulationSpace')
  i522.simulationSpeed = i523[19]
  i522.useUnscaledTime = !!i523[20]
  i522.scalingMode = i523[21]
  i522.playOnAwake = !!i523[22]
  i522.maxParticles = i523[23]
  i522.emitterVelocityMode = i523[24]
  i522.stopAction = i523[25]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i524 = root || new pc.MinMaxCurve()
  var i525 = data
  i524.mode = i525[0]
  i524.curveMin = new pc.AnimationCurve( { keys_flow: i525[1] } )
  i524.curveMax = new pc.AnimationCurve( { keys_flow: i525[2] } )
  i524.curveMultiplier = i525[3]
  i524.constantMin = i525[4]
  i524.constantMax = i525[5]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i526 = root || new pc.MinMaxGradient()
  var i527 = data
  i526.mode = i527[0]
  i526.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i527[1], i526.gradientMin)
  i526.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i527[2], i526.gradientMax)
  i526.colorMin = new pc.Color(i527[3], i527[4], i527[5], i527[6])
  i526.colorMax = new pc.Color(i527[7], i527[8], i527[9], i527[10])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i529 = data
  i528.mode = i529[0]
  var i531 = i529[1]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i531[i + 0]) );
  }
  i528.colorKeys = i530
  var i533 = i529[2]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i533[i + 0]) );
  }
  i528.alphaKeys = i532
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemColorBySpeed()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i535[1], i534.color)
  i534.range = new pc.Vec2( i535[2], i535[3] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i539 = data
  i538.color = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.time = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i543 = data
  i542.alpha = i543[0]
  i542.time = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemColorOverLifetime()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i545[1], i544.color)
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemEmitter()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[1], i546.rateOverTime)
  i546.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[2], i546.rateOverDistance)
  var i549 = i547[3]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i549[i + 0]) );
  }
  i546.bursts = i548
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemBurst()
  var i553 = data
  i552.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[0], i552.count)
  i552.cycleCount = i553[1]
  i552.minCount = i553[2]
  i552.maxCount = i553[3]
  i552.repeatInterval = i553[4]
  i552.time = i553[5]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemRotationBySpeed()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  i554.range = new pc.Vec2( i555[5], i555[6] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemRotationOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemShape()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.shapeType = i559[1]
  i558.randomDirectionAmount = i559[2]
  i558.sphericalDirectionAmount = i559[3]
  i558.randomPositionAmount = i559[4]
  i558.alignToDirection = !!i559[5]
  i558.radius = i559[6]
  i558.radiusMode = i559[7]
  i558.radiusSpread = i559[8]
  i558.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[9], i558.radiusSpeed)
  i558.radiusThickness = i559[10]
  i558.angle = i559[11]
  i558.length = i559[12]
  i558.boxThickness = new pc.Vec3( i559[13], i559[14], i559[15] )
  i558.meshShapeType = i559[16]
  request.r(i559[17], i559[18], 0, i558, 'mesh')
  request.r(i559[19], i559[20], 0, i558, 'meshRenderer')
  request.r(i559[21], i559[22], 0, i558, 'skinnedMeshRenderer')
  i558.useMeshMaterialIndex = !!i559[23]
  i558.meshMaterialIndex = i559[24]
  i558.useMeshColors = !!i559[25]
  i558.normalOffset = i559[26]
  i558.arc = i559[27]
  i558.arcMode = i559[28]
  i558.arcSpread = i559[29]
  i558.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[30], i558.arcSpeed)
  i558.donutRadius = i559[31]
  i558.position = new pc.Vec3( i559[32], i559[33], i559[34] )
  i558.rotation = new pc.Vec3( i559[35], i559[36], i559[37] )
  i558.scale = new pc.Vec3( i559[38], i559[39], i559[40] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemSizeBySpeed()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  i560.range = new pc.Vec2( i561[5], i561[6] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemSizeOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.mode = i565[1]
  i564.animation = i565[2]
  i564.numTilesX = i565[3]
  i564.numTilesY = i565[4]
  i564.useRandomRow = !!i565[5]
  i564.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[6], i564.frameOverTime)
  i564.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[7], i564.startFrame)
  i564.cycleCount = i565[8]
  i564.rowIndex = i565[9]
  i564.flipU = i565[10]
  i564.flipV = i565[11]
  i564.spriteCount = i565[12]
  var i567 = i565[13]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.sprites = i566
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[4], i570.radial)
  i570.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[5], i570.speedModifier)
  i570.space = i571[6]
  i570.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[7], i570.orbitalX)
  i570.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[8], i570.orbitalY)
  i570.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[9], i570.orbitalZ)
  i570.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[10], i570.orbitalOffsetX)
  i570.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[11], i570.orbitalOffsetY)
  i570.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[12], i570.orbitalOffsetZ)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemNoise()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.separateAxes = !!i573[1]
  i572.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.strengthX)
  i572.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.strengthY)
  i572.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.strengthZ)
  i572.frequency = i573[5]
  i572.damping = !!i573[6]
  i572.octaveCount = i573[7]
  i572.octaveMultiplier = i573[8]
  i572.octaveScale = i573[9]
  i572.quality = i573[10]
  i572.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[11], i572.scrollSpeed)
  i572.scrollSpeedMultiplier = i573[12]
  i572.remapEnabled = !!i573[13]
  i572.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[14], i572.remapX)
  i572.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[15], i572.remapY)
  i572.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[16], i572.remapZ)
  i572.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[17], i572.positionAmount)
  i572.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[18], i572.rotationAmount)
  i572.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[19], i572.sizeAmount)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemInheritVelocity()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.mode = i575[1]
  i574.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.curve)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemForceOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.space = i577[4]
  i576.randomized = !!i577[5]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.limit)
  i578.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.limitX)
  i578.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.limitY)
  i578.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[4], i578.limitZ)
  i578.dampen = i579[5]
  i578.separateAxes = !!i579[6]
  i578.space = i579[7]
  i578.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[8], i578.drag)
  i578.multiplyDragByParticleSize = !!i579[9]
  i578.multiplyDragByParticleVelocity = !!i579[10]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'mesh')
  i580.meshCount = i581[2]
  i580.activeVertexStreamsCount = i581[3]
  i580.alignment = i581[4]
  i580.renderMode = i581[5]
  i580.sortMode = i581[6]
  i580.lengthScale = i581[7]
  i580.velocityScale = i581[8]
  i580.cameraVelocityScale = i581[9]
  i580.normalDirection = i581[10]
  i580.sortingFudge = i581[11]
  i580.minParticleSize = i581[12]
  i580.maxParticleSize = i581[13]
  i580.pivot = new pc.Vec3( i581[14], i581[15], i581[16] )
  request.r(i581[17], i581[18], 0, i580, 'trailMaterial')
  i580.applyActiveColorSpace = !!i581[19]
  i580.enabled = !!i581[20]
  request.r(i581[21], i581[22], 0, i580, 'sharedMaterial')
  var i583 = i581[23]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.sharedMaterials = i582
  i580.receiveShadows = !!i581[24]
  i580.shadowCastingMode = i581[25]
  i580.sortingLayerID = i581[26]
  i580.sortingOrder = i581[27]
  i580.lightmapIndex = i581[28]
  i580.lightmapSceneIndex = i581[29]
  i580.lightmapScaleOffset = new pc.Vec4( i581[30], i581[31], i581[32], i581[33] )
  i580.lightProbeUsage = i581[34]
  i580.reflectionProbeUsage = i581[35]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i585 = data
  i584.usedByComposite = !!i585[0]
  i584.autoTiling = !!i585[1]
  i584.size = new pc.Vec2( i585[2], i585[3] )
  i584.edgeRadius = i585[4]
  i584.enabled = !!i585[5]
  i584.isTrigger = !!i585[6]
  i584.usedByEffector = !!i585[7]
  i584.density = i585[8]
  i584.offset = new pc.Vec2( i585[9], i585[10] )
  request.r(i585[11], i585[12], 0, i584, 'material')
  return i584
}

Deserializers["ItemController"] = function (request, data, root) {
  var i586 = root || request.c( 'ItemController' )
  var i587 = data
  i586.itemType = i587[0]
  var i589 = i587[1]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('AnimObjectData', i589[i + 0]));
  }
  i586.animationObjects = i588
  return i586
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i592 = root || request.c( 'AnimObjectData' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'animObj')
  i592.delayFromStart = i593[2]
  i592.durationToDeactivate = i593[3]
  return i592
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i594 = root || request.c( 'ItemGraphic' )
  var i595 = data
  var i597 = i595[0]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i594.spriteRenderers = i596
  i594.sortingOrderOffset = i595[1]
  return i594
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i600 = root || request.c( 'ItemMovement' )
  var i601 = data
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i603 = data
  i602.ambientIntensity = i603[0]
  i602.reflectionIntensity = i603[1]
  i602.ambientMode = i603[2]
  i602.ambientLight = new pc.Color(i603[3], i603[4], i603[5], i603[6])
  i602.ambientSkyColor = new pc.Color(i603[7], i603[8], i603[9], i603[10])
  i602.ambientGroundColor = new pc.Color(i603[11], i603[12], i603[13], i603[14])
  i602.ambientEquatorColor = new pc.Color(i603[15], i603[16], i603[17], i603[18])
  i602.fogColor = new pc.Color(i603[19], i603[20], i603[21], i603[22])
  i602.fogEndDistance = i603[23]
  i602.fogStartDistance = i603[24]
  i602.fogDensity = i603[25]
  i602.fog = !!i603[26]
  request.r(i603[27], i603[28], 0, i602, 'skybox')
  i602.fogMode = i603[29]
  var i605 = i603[30]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i605[i + 0]) );
  }
  i602.lightmaps = i604
  i602.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i603[31], i602.lightProbes)
  i602.lightmapsMode = i603[32]
  i602.mixedBakeMode = i603[33]
  i602.environmentLightingMode = i603[34]
  i602.ambientProbe = new pc.SphericalHarmonicsL2(i603[35])
  i602.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i603[36])
  i602.useReferenceAmbientProbe = !!i603[37]
  request.r(i603[38], i603[39], 0, i602, 'customReflection')
  request.r(i603[40], i603[41], 0, i602, 'defaultReflection')
  i602.defaultReflectionMode = i603[42]
  i602.defaultReflectionResolution = i603[43]
  i602.sunLightObjectId = i603[44]
  i602.pixelLightCount = i603[45]
  i602.defaultReflectionHDR = !!i603[46]
  i602.hasLightDataAsset = !!i603[47]
  i602.hasManualGenerate = !!i603[48]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'lightmapColor')
  request.r(i609[2], i609[3], 0, i608, 'lightmapDirection')
  request.r(i609[4], i609[5], 0, i608, 'shadowMask')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i610 = root || new UnityEngine.LightProbes()
  var i611 = data
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i619 = data
  var i621 = i619[0]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i621[i + 0]));
  }
  i618.ShaderCompilationErrors = i620
  i618.name = i619[1]
  i618.guid = i619[2]
  var i623 = i619[3]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i618.shaderDefinedKeywords = i622
  var i625 = i619[4]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i625[i + 0]) );
  }
  i618.passes = i624
  var i627 = i619[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i627[i + 0]) );
  }
  i618.usePasses = i626
  var i629 = i619[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i629[i + 0]) );
  }
  i618.defaultParameterValues = i628
  request.r(i619[7], i619[8], 0, i618, 'unityFallbackShader')
  i618.readDepth = !!i619[9]
  i618.hasDepthOnlyPass = !!i619[10]
  i618.isCreatedByShaderGraph = !!i619[11]
  i618.disableBatching = !!i619[12]
  i618.compiled = !!i619[13]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i633 = data
  i632.shaderName = i633[0]
  i632.errorMessage = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i638 = root || new pc.UnityShaderPass()
  var i639 = data
  i638.id = i639[0]
  i638.subShaderIndex = i639[1]
  i638.name = i639[2]
  i638.passType = i639[3]
  i638.grabPassTextureName = i639[4]
  i638.usePass = !!i639[5]
  i638.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[6], i638.zTest)
  i638.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[7], i638.zWrite)
  i638.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[8], i638.culling)
  i638.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[9], i638.blending)
  i638.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[10], i638.alphaBlending)
  i638.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[11], i638.colorWriteMask)
  i638.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[12], i638.offsetUnits)
  i638.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[13], i638.offsetFactor)
  i638.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[14], i638.stencilRef)
  i638.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[15], i638.stencilReadMask)
  i638.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[16], i638.stencilWriteMask)
  i638.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[17], i638.stencilOp)
  i638.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[18], i638.stencilOpFront)
  i638.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[19], i638.stencilOpBack)
  var i641 = i639[20]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i641[i + 0]) );
  }
  i638.tags = i640
  var i643 = i639[21]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.passDefinedKeywords = i642
  var i645 = i639[22]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i645[i + 0]) );
  }
  i638.passDefinedKeywordGroups = i644
  var i647 = i639[23]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i647[i + 0]) );
  }
  i638.variants = i646
  var i649 = i639[24]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i649[i + 0]) );
  }
  i638.excludedVariants = i648
  i638.hasDepthReader = !!i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i651 = data
  i650.val = i651[0]
  i650.name = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i653 = data
  i652.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[0], i652.src)
  i652.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[1], i652.dst)
  i652.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[2], i652.op)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i655 = data
  i654.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[0], i654.pass)
  i654.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[1], i654.fail)
  i654.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[2], i654.zFail)
  i654.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[3], i654.comp)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i659 = data
  i658.name = i659[0]
  i658.value = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i662.keywords = i664
  i662.hasDiscard = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i669 = data
  i668.passId = i669[0]
  i668.subShaderIndex = i669[1]
  var i671 = i669[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.keywords = i670
  i668.vertexProgram = i669[3]
  i668.fragmentProgram = i669[4]
  i668.exportedForWebGl2 = !!i669[5]
  i668.readDepth = !!i669[6]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'shader')
  i674.pass = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i679 = data
  i678.name = i679[0]
  i678.type = i679[1]
  i678.value = new pc.Vec4( i679[2], i679[3], i679[4], i679[5] )
  i678.textureValue = i679[6]
  i678.shaderPropertyFlag = i679[7]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i681 = data
  i680.name = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'texture')
  i680.aabb = i681[3]
  i680.vertices = i681[4]
  i680.triangles = i681[5]
  i680.textureRect = UnityEngine.Rect.MinMaxRect(i681[6], i681[7], i681[8], i681[9])
  i680.packedRect = UnityEngine.Rect.MinMaxRect(i681[10], i681[11], i681[12], i681[13])
  i680.border = new pc.Vec4( i681[14], i681[15], i681[16], i681[17] )
  i680.transparency = i681[18]
  i680.bounds = i681[19]
  i680.pixelsPerUnit = i681[20]
  i680.textureWidth = i681[21]
  i680.textureHeight = i681[22]
  i680.nativeSize = new pc.Vec2( i681[23], i681[24] )
  i680.pivot = new pc.Vec2( i681[25], i681[26] )
  i680.textureRectOffset = new pc.Vec2( i681[27], i681[28] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i683 = data
  i682.name = i683[0]
  i682.wrapMode = i683[1]
  i682.isLooping = !!i683[2]
  i682.length = i683[3]
  var i685 = i683[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i685[i + 0]) );
  }
  i682.curves = i684
  var i687 = i683[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i687[i + 0]) );
  }
  i682.events = i686
  i682.halfPrecision = !!i683[6]
  i682._frameRate = i683[7]
  i682.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i683[8], i682.localBounds)
  i682.hasMuscleCurves = !!i683[9]
  var i689 = i683[10]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i682.clipMuscleConstant = i688
  i682.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i683[11], i682.clipBindingConstant)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i693 = data
  i692.path = i693[0]
  i692.hash = i693[1]
  i692.componentType = i693[2]
  i692.property = i693[3]
  i692.keys = i693[4]
  var i695 = i693[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i695[i + 0]) );
  }
  i692.objectReferenceKeys = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i699 = data
  i698.time = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'value')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i703 = data
  i702.functionName = i703[0]
  i702.floatParameter = i703[1]
  i702.intParameter = i703[2]
  i702.stringParameter = i703[3]
  request.r(i703[4], i703[5], 0, i702, 'objectReferenceParameter')
  i702.time = i703[6]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i705 = data
  i704.center = new pc.Vec3( i705[0], i705[1], i705[2] )
  i704.extends = new pc.Vec3( i705[3], i705[4], i705[5] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i709 = data
  var i711 = i709[0]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i708.genericBindings = i710
  var i713 = i709[1]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.pptrCurveMapping = i712
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i715 = data
  i714.name = i715[0]
  var i717 = i715[1]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i717[i + 0]) );
  }
  i714.layers = i716
  var i719 = i715[2]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i719[i + 0]) );
  }
  i714.parameters = i718
  i714.animationClips = i715[3]
  i714.avatarUnsupported = i715[4]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i723 = data
  i722.name = i723[0]
  i722.defaultWeight = i723[1]
  i722.blendingMode = i723[2]
  i722.avatarMask = i723[3]
  i722.syncedLayerIndex = i723[4]
  i722.syncedLayerAffectsTiming = !!i723[5]
  i722.syncedLayers = i723[6]
  i722.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i723[7], i722.stateMachine)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i725 = data
  i724.id = i725[0]
  i724.name = i725[1]
  i724.path = i725[2]
  var i727 = i725[3]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i727[i + 0]) );
  }
  i724.states = i726
  var i729 = i725[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i729[i + 0]) );
  }
  i724.machines = i728
  var i731 = i725[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i731[i + 0]) );
  }
  i724.entryStateTransitions = i730
  var i733 = i725[6]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i733[i + 0]) );
  }
  i724.exitStateTransitions = i732
  var i735 = i725[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i735[i + 0]) );
  }
  i724.anyStateTransitions = i734
  i724.defaultStateId = i725[8]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i739 = data
  i738.id = i739[0]
  i738.name = i739[1]
  i738.cycleOffset = i739[2]
  i738.cycleOffsetParameter = i739[3]
  i738.cycleOffsetParameterActive = !!i739[4]
  i738.mirror = !!i739[5]
  i738.mirrorParameter = i739[6]
  i738.mirrorParameterActive = !!i739[7]
  i738.motionId = i739[8]
  i738.nameHash = i739[9]
  i738.fullPathHash = i739[10]
  i738.speed = i739[11]
  i738.speedParameter = i739[12]
  i738.speedParameterActive = !!i739[13]
  i738.tag = i739[14]
  i738.tagHash = i739[15]
  i738.writeDefaultValues = !!i739[16]
  var i741 = i739[17]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.behaviours = i740
  var i743 = i739[18]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i743[i + 0]) );
  }
  i738.transitions = i742
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i749 = data
  i748.fullPath = i749[0]
  i748.canTransitionToSelf = !!i749[1]
  i748.duration = i749[2]
  i748.exitTime = i749[3]
  i748.hasExitTime = !!i749[4]
  i748.hasFixedDuration = !!i749[5]
  i748.interruptionSource = i749[6]
  i748.offset = i749[7]
  i748.orderedInterruption = !!i749[8]
  i748.destinationStateId = i749[9]
  i748.isExit = !!i749[10]
  i748.mute = !!i749[11]
  i748.solo = !!i749[12]
  var i751 = i749[13]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i751[i + 0]) );
  }
  i748.conditions = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i757 = data
  i756.destinationStateId = i757[0]
  i756.isExit = !!i757[1]
  i756.mute = !!i757[2]
  i756.solo = !!i757[3]
  var i759 = i757[4]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i759[i + 0]) );
  }
  i756.conditions = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i763 = data
  i762.defaultBool = !!i763[0]
  i762.defaultFloat = i763[1]
  i762.defaultInt = i763[2]
  i762.name = i763[3]
  i762.nameHash = i763[4]
  i762.type = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i767[i + 0]) );
  }
  i764.files = i766
  i764.componentToPrefabIds = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i771 = data
  i770.path = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'unityObject')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i775[i + 0]) );
  }
  i772.scriptsExecutionOrder = i774
  var i777 = i773[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i777[i + 0]) );
  }
  i772.sortingLayers = i776
  var i779 = i773[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i779[i + 0]) );
  }
  i772.cullingLayers = i778
  i772.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i773[3], i772.timeSettings)
  i772.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i773[4], i772.physicsSettings)
  i772.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i773[5], i772.physics2DSettings)
  i772.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i773[6], i772.qualitySettings)
  i772.enableRealtimeShadows = !!i773[7]
  i772.enableAutoInstancing = !!i773[8]
  i772.enableStaticBatching = !!i773[9]
  i772.enableDynamicBatching = !!i773[10]
  i772.lightmapEncodingQuality = i773[11]
  i772.desiredColorSpace = i773[12]
  var i781 = i773[13]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i772.allTags = i780
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i785 = data
  i784.name = i785[0]
  i784.value = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  i788.value = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i793 = data
  i792.id = i793[0]
  i792.name = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i795 = data
  i794.fixedDeltaTime = i795[0]
  i794.maximumDeltaTime = i795[1]
  i794.timeScale = i795[2]
  i794.maximumParticleTimestep = i795[3]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i797 = data
  i796.gravity = new pc.Vec3( i797[0], i797[1], i797[2] )
  i796.defaultSolverIterations = i797[3]
  i796.bounceThreshold = i797[4]
  i796.autoSyncTransforms = !!i797[5]
  i796.autoSimulation = !!i797[6]
  var i799 = i797[7]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i799[i + 0]) );
  }
  i796.collisionMatrix = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i803 = data
  i802.enabled = !!i803[0]
  i802.layerId = i803[1]
  i802.otherLayerId = i803[2]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'material')
  i804.gravity = new pc.Vec2( i805[2], i805[3] )
  i804.positionIterations = i805[4]
  i804.velocityIterations = i805[5]
  i804.velocityThreshold = i805[6]
  i804.maxLinearCorrection = i805[7]
  i804.maxAngularCorrection = i805[8]
  i804.maxTranslationSpeed = i805[9]
  i804.maxRotationSpeed = i805[10]
  i804.baumgarteScale = i805[11]
  i804.baumgarteTOIScale = i805[12]
  i804.timeToSleep = i805[13]
  i804.linearSleepTolerance = i805[14]
  i804.angularSleepTolerance = i805[15]
  i804.defaultContactOffset = i805[16]
  i804.autoSimulation = !!i805[17]
  i804.queriesHitTriggers = !!i805[18]
  i804.queriesStartInColliders = !!i805[19]
  i804.callbacksOnDisable = !!i805[20]
  i804.reuseCollisionCallbacks = !!i805[21]
  i804.autoSyncTransforms = !!i805[22]
  var i807 = i805[23]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i807[i + 0]) );
  }
  i804.collisionMatrix = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i811 = data
  i810.enabled = !!i811[0]
  i810.layerId = i811[1]
  i810.otherLayerId = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i815[i + 0]) );
  }
  i812.qualityLevels = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.names = i816
  i812.shadows = i813[2]
  i812.anisotropicFiltering = i813[3]
  i812.antiAliasing = i813[4]
  i812.lodBias = i813[5]
  i812.shadowCascades = i813[6]
  i812.shadowDistance = i813[7]
  i812.shadowmaskMode = i813[8]
  i812.shadowProjection = i813[9]
  i812.shadowResolution = i813[10]
  i812.softParticles = !!i813[11]
  i812.softVegetation = !!i813[12]
  i812.activeColorSpace = i813[13]
  i812.desiredColorSpace = i813[14]
  i812.masterTextureLimit = i813[15]
  i812.maxQueuedFrames = i813[16]
  i812.particleRaycastBudget = i813[17]
  i812.pixelLightCount = i813[18]
  i812.realtimeReflectionProbes = !!i813[19]
  i812.shadowCascade2Split = i813[20]
  i812.shadowCascade4Split = new pc.Vec3( i813[21], i813[22], i813[23] )
  i812.streamingMipmapsActive = !!i813[24]
  i812.vSyncCount = i813[25]
  i812.asyncUploadBufferSize = i813[26]
  i812.asyncUploadTimeSlice = i813[27]
  i812.billboardsFaceCameraPosition = !!i813[28]
  i812.shadowNearPlaneOffset = i813[29]
  i812.streamingMipmapsMemoryBudget = i813[30]
  i812.maximumLODLevel = i813[31]
  i812.streamingMipmapsAddAllCameras = !!i813[32]
  i812.streamingMipmapsMaxLevelReduction = i813[33]
  i812.streamingMipmapsRenderersPerFrame = i813[34]
  i812.resolutionScalingFixedDPIFactor = i813[35]
  i812.streamingMipmapsMaxFileIORequests = i813[36]
  i812.currentQualityLevel = i813[37]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i823 = data
  i822.weight = i823[0]
  i822.vertices = i823[1]
  i822.normals = i823[2]
  i822.tangents = i823[3]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i827 = data
  i826.mode = i827[0]
  i826.parameter = i827[1]
  i826.threshold = i827[2]
  return i826
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[30],"31":[2],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[40],"48":[40],"49":[40],"50":[40],"51":[40],"52":[40],"53":[2],"54":[55],"56":[57],"58":[57],"59":[60],"11":[8],"61":[2],"62":[63],"64":[65],"66":[59],"67":[60],"68":[55,60],"69":[60,70],"71":[60],"72":[70,60],"73":[55],"74":[70,60],"75":[60],"76":[77],"78":[77],"79":[77],"80":[81],"82":[60],"83":[60],"84":[59],"85":[70,60],"86":[60],"87":[59],"88":[60],"89":[60],"90":[60],"91":[60],"92":[60],"93":[60],"94":[60],"95":[60],"96":[60],"97":[70,60],"98":[60],"99":[60],"100":[60],"101":[60],"102":[70,60],"103":[60],"104":[65],"105":[65],"106":[65],"107":[65],"108":[2],"109":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","InputManager","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.BoxCollider2D","ItemController","UnityEngine.GameObject","ItemGraphic","ItemMovement","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "dacda247-8e09-4863-a92a-458bc77b913b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

