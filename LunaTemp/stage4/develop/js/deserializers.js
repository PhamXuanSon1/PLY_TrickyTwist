var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.JointSpring' )
  var i1993 = data
  i1992.spring = i1993[0]
  i1992.damper = i1993[1]
  i1992.targetPosition = i1993[2]
  return i1992
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.JointMotor' )
  var i1995 = data
  i1994.m_TargetVelocity = i1995[0]
  i1994.m_Force = i1995[1]
  i1994.m_FreeSpin = i1995[2]
  return i1994
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.JointLimits' )
  var i1997 = data
  i1996.m_Min = i1997[0]
  i1996.m_Max = i1997[1]
  i1996.m_Bounciness = i1997[2]
  i1996.m_BounceMinVelocity = i1997[3]
  i1996.m_ContactDistance = i1997[4]
  i1996.minBounce = i1997[5]
  i1996.maxBounce = i1997[6]
  return i1996
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.JointDrive' )
  var i1999 = data
  i1998.m_PositionSpring = i1999[0]
  i1998.m_PositionDamper = i1999[1]
  i1998.m_MaximumForce = i1999[2]
  i1998.m_UseAcceleration = i1999[3]
  return i1998
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2001 = data
  i2000.m_Spring = i2001[0]
  i2000.m_Damper = i2001[1]
  return i2000
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2003 = data
  i2002.m_Limit = i2003[0]
  i2002.m_Bounciness = i2003[1]
  i2002.m_ContactDistance = i2003[2]
  return i2002
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2005 = data
  i2004.m_ExtremumSlip = i2005[0]
  i2004.m_ExtremumValue = i2005[1]
  i2004.m_AsymptoteSlip = i2005[2]
  i2004.m_AsymptoteValue = i2005[3]
  i2004.m_Stiffness = i2005[4]
  return i2004
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2007 = data
  i2006.m_LowerAngle = i2007[0]
  i2006.m_UpperAngle = i2007[1]
  return i2006
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2009 = data
  i2008.m_MotorSpeed = i2009[0]
  i2008.m_MaximumMotorTorque = i2009[1]
  return i2008
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2011 = data
  i2010.m_DampingRatio = i2011[0]
  i2010.m_Frequency = i2011[1]
  i2010.m_Angle = i2011[2]
  return i2010
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2013 = data
  i2012.m_LowerTranslation = i2013[0]
  i2012.m_UpperTranslation = i2013[1]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2014 = root || new pc.UnityMaterial()
  var i2015 = data
  i2014.name = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'shader')
  i2014.renderQueue = i2015[3]
  i2014.enableInstancing = !!i2015[4]
  var i2017 = i2015[5]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2017[i + 0]) );
  }
  i2014.floatParameters = i2016
  var i2019 = i2015[6]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2019[i + 0]) );
  }
  i2014.colorParameters = i2018
  var i2021 = i2015[7]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2021[i + 0]) );
  }
  i2014.vectorParameters = i2020
  var i2023 = i2015[8]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2023[i + 0]) );
  }
  i2014.textureParameters = i2022
  var i2025 = i2015[9]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2025[i + 0]) );
  }
  i2014.materialFlags = i2024
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.value = i2029[1]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2033 = data
  i2032.name = i2033[0]
  i2032.value = new pc.Color(i2033[1], i2033[2], i2033[3], i2033[4])
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2037 = data
  i2036.name = i2037[0]
  i2036.value = new pc.Vec4( i2037[1], i2037[2], i2037[3], i2037[4] )
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2041 = data
  i2040.name = i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'value')
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2045 = data
  i2044.name = i2045[0]
  i2044.enabled = !!i2045[1]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.width = i2047[1]
  i2046.height = i2047[2]
  i2046.mipmapCount = i2047[3]
  i2046.anisoLevel = i2047[4]
  i2046.filterMode = i2047[5]
  i2046.hdr = !!i2047[6]
  i2046.format = i2047[7]
  i2046.wrapMode = i2047[8]
  i2046.alphaIsTransparency = !!i2047[9]
  i2046.alphaSource = i2047[10]
  i2046.graphicsFormat = i2047[11]
  i2046.sRGBTexture = !!i2047[12]
  i2046.desiredColorSpace = i2047[13]
  i2046.wrapU = i2047[14]
  i2046.wrapV = i2047[15]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.halfPrecision = !!i2049[1]
  i2048.useSimplification = !!i2049[2]
  i2048.useUInt32IndexFormat = !!i2049[3]
  i2048.vertexCount = i2049[4]
  i2048.aabb = i2049[5]
  var i2051 = i2049[6]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( !!i2051[i + 0] );
  }
  i2048.streams = i2050
  i2048.vertices = i2049[7]
  var i2053 = i2049[8]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2053[i + 0]) );
  }
  i2048.subMeshes = i2052
  var i2055 = i2049[9]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 16) {
    i2054.push( new pc.Mat4().setData(i2055[i + 0], i2055[i + 1], i2055[i + 2], i2055[i + 3],  i2055[i + 4], i2055[i + 5], i2055[i + 6], i2055[i + 7],  i2055[i + 8], i2055[i + 9], i2055[i + 10], i2055[i + 11],  i2055[i + 12], i2055[i + 13], i2055[i + 14], i2055[i + 15]) );
  }
  i2048.bindposes = i2054
  var i2057 = i2049[10]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2057[i + 0]) );
  }
  i2048.blendShapes = i2056
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2063 = data
  i2062.triangles = i2063[0]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2069 = data
  i2068.name = i2069[0]
  var i2071 = i2069[1]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2071[i + 0]) );
  }
  i2068.frames = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.index = i2073[1]
  i2072.startup = !!i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2075 = data
  i2074.aspect = i2075[0]
  i2074.orthographic = !!i2075[1]
  i2074.orthographicSize = i2075[2]
  i2074.backgroundColor = new pc.Color(i2075[3], i2075[4], i2075[5], i2075[6])
  i2074.nearClipPlane = i2075[7]
  i2074.farClipPlane = i2075[8]
  i2074.fieldOfView = i2075[9]
  i2074.depth = i2075[10]
  i2074.clearFlags = i2075[11]
  i2074.cullingMask = i2075[12]
  i2074.rect = i2075[13]
  request.r(i2075[14], i2075[15], 0, i2074, 'targetTexture')
  i2074.usePhysicalProperties = !!i2075[16]
  i2074.focalLength = i2075[17]
  i2074.sensorSize = new pc.Vec2( i2075[18], i2075[19] )
  i2074.lensShift = new pc.Vec2( i2075[20], i2075[21] )
  i2074.gateFit = i2075[22]
  i2074.commandBufferCount = i2075[23]
  i2074.cameraType = i2075[24]
  i2074.enabled = !!i2075[25]
  return i2074
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2076 = root || request.c( 'AutoCameraFit' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'canvasBtn')
  request.r(i2077[2], i2077[3], 0, i2076, 'targetArea')
  i2076.paddingLandscape = i2077[4]
  i2076.paddingPortrait = i2077[5]
  i2076.extraPaddingSmallScreen = i2077[6]
  i2076.smallScreenThreshold = i2077[7]
  i2076.autoUpdateOnResize = !!i2077[8]
  i2076.adjustInEditMode = !!i2077[9]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2079 = data
  i2078.name = i2079[0]
  i2078.tagId = i2079[1]
  i2078.enabled = !!i2079[2]
  i2078.isStatic = !!i2079[3]
  i2078.layer = i2079[4]
  return i2078
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2080 = root || request.c( 'InputManager' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'mainCamera')
  i2080.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2081[2] )
  i2080.CurtainLayer = UnityEngine.LayerMask.FromIntegerValue( i2081[3] )
  i2080.installLayer = UnityEngine.LayerMask.FromIntegerValue( i2081[4] )
  i2080.maxDistance = i2081[5]
  i2080.curtainsToGotoStore = i2081[6]
  return i2080
}

Deserializers["CurtainManager"] = function (request, data, root) {
  var i2082 = root || request.c( 'CurtainManager' )
  var i2083 = data
  var i2085 = i2083[0]
  var i2084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 1, i2084, '')
  }
  i2082.curtains = i2084
  i2082.onCurtainRemoved = request.d('UnityEngine.Events.UnityEvent', i2083[1], i2082.onCurtainRemoved)
  return i2082
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2089 = data
  i2088.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2089[0], i2088.m_PersistentCalls)
  return i2088
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('UnityEngine.Events.PersistentCall', i2093[i + 0]));
  }
  i2090.m_Calls = i2092
  return i2090
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'm_Target')
  i2096.m_TargetAssemblyTypeName = i2097[2]
  i2096.m_MethodName = i2097[3]
  i2096.m_Mode = i2097[4]
  i2096.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2097[5], i2096.m_Arguments)
  i2096.m_CallState = i2097[6]
  return i2096
}

Deserializers["HandHintMmanager"] = function (request, data, root) {
  var i2098 = root || request.c( 'HandHintMmanager' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 1, i2100, '')
  }
  i2098.hintItems = i2100
  request.r(i2099[1], i2099[2], 0, i2098, 'handHintObject')
  request.r(i2099[3], i2099[4], 0, i2098, 'handAnimator')
  i2098.idleTimeToHint = i2099[5]
  i2098.dragAnimDuration = i2099[6]
  request.r(i2099[7], i2099[8], 0, i2098, 'startHintPos')
  request.r(i2099[9], i2099[10], 0, i2098, 'endHintPos')
  return i2098
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2104 = root || request.c( 'GameManager' )
  var i2105 = data
  return i2104
}

Deserializers["ItemManager"] = function (request, data, root) {
  var i2106 = root || request.c( 'ItemManager' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 1, i2108, '')
  }
  i2106.items = i2108
  var i2111 = i2107[1]
  var i2110 = new (System.Collections.Generic.List$1(Bridge.ns('GirlEvolutionData')))
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.add(request.d('GirlEvolutionData', i2111[i + 0]));
  }
  i2106.girlEvolutions = i2110
  return i2106
}

Deserializers["GirlEvolutionData"] = function (request, data, root) {
  var i2114 = root || request.c( 'GirlEvolutionData' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'girlObject')
  i2114.unlockAtCurtainCount = i2115[2]
  return i2114
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2116 = root || request.c( 'Ply_SoundManager' )
  var i2117 = data
  i2116.fxAudio = request.d('FxAudio', i2117[0], i2116.fxAudio)
  request.r(i2117[1], i2117[2], 0, i2116, 'bgm1')
  return i2116
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2118 = root || request.c( 'FxAudio' )
  var i2119 = data
  i2118.None = request.d('SoundData', i2119[0], i2118.None)
  i2118.ClickBox = request.d('SoundData', i2119[1], i2118.ClickBox)
  i2118.Fan = request.d('SoundData', i2119[2], i2118.Fan)
  i2118.Cream = request.d('SoundData', i2119[3], i2118.Cream)
  i2118.Switch = request.d('SoundData', i2119[4], i2118.Switch)
  i2118.Lighter = request.d('SoundData', i2119[5], i2118.Lighter)
  i2118.Sausage = request.d('SoundData', i2119[6], i2118.Sausage)
  i2118.Scissor = request.d('SoundData', i2119[7], i2118.Scissor)
  i2118.Watertap = request.d('SoundData', i2119[8], i2118.Watertap)
  i2118.Dog = request.d('SoundData', i2119[9], i2118.Dog)
  i2118.Curtain = request.d('SoundData', i2119[10], i2118.Curtain)
  i2118.Flame = request.d('SoundData', i2119[11], i2118.Flame)
  i2118.Women1 = request.d('SoundData', i2119[12], i2118.Women1)
  i2118.Women2 = request.d('SoundData', i2119[13], i2118.Women2)
  i2118.Women3 = request.d('SoundData', i2119[14], i2118.Women3)
  i2118.Women4 = request.d('SoundData', i2119[15], i2118.Women4)
  i2118.Women5 = request.d('SoundData', i2119[16], i2118.Women5)
  i2118.Women6 = request.d('SoundData', i2119[17], i2118.Women6)
  i2118.Women7 = request.d('SoundData', i2119[18], i2118.Women7)
  return i2118
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2120 = root || request.c( 'SoundData' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'clip')
  i2120.repeatCount = i2121[2]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'clip')
  request.r(i2123[2], i2123[3], 0, i2122, 'outputAudioMixerGroup')
  i2122.playOnAwake = !!i2123[4]
  i2122.loop = !!i2123[5]
  i2122.time = i2123[6]
  i2122.volume = i2123[7]
  i2122.pitch = i2123[8]
  i2122.enabled = !!i2123[9]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2125 = data
  i2124.pivot = new pc.Vec2( i2125[0], i2125[1] )
  i2124.anchorMin = new pc.Vec2( i2125[2], i2125[3] )
  i2124.anchorMax = new pc.Vec2( i2125[4], i2125[5] )
  i2124.sizeDelta = new pc.Vec2( i2125[6], i2125[7] )
  i2124.anchoredPosition3D = new pc.Vec3( i2125[8], i2125[9], i2125[10] )
  i2124.rotation = new pc.Quat(i2125[11], i2125[12], i2125[13], i2125[14])
  i2124.scale = new pc.Vec3( i2125[15], i2125[16], i2125[17] )
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2127 = data
  i2126.planeDistance = i2127[0]
  i2126.referencePixelsPerUnit = i2127[1]
  i2126.isFallbackOverlay = !!i2127[2]
  i2126.renderMode = i2127[3]
  i2126.renderOrder = i2127[4]
  i2126.sortingLayerName = i2127[5]
  i2126.sortingOrder = i2127[6]
  i2126.scaleFactor = i2127[7]
  request.r(i2127[8], i2127[9], 0, i2126, 'worldCamera')
  i2126.overrideSorting = !!i2127[10]
  i2126.pixelPerfect = !!i2127[11]
  i2126.targetDisplay = i2127[12]
  i2126.overridePixelPerfect = !!i2127[13]
  i2126.enabled = !!i2127[14]
  return i2126
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2129 = data
  i2128.m_UiScaleMode = i2129[0]
  i2128.m_ReferencePixelsPerUnit = i2129[1]
  i2128.m_ScaleFactor = i2129[2]
  i2128.m_ReferenceResolution = new pc.Vec2( i2129[3], i2129[4] )
  i2128.m_ScreenMatchMode = i2129[5]
  i2128.m_MatchWidthOrHeight = i2129[6]
  i2128.m_PhysicalUnit = i2129[7]
  i2128.m_FallbackScreenDPI = i2129[8]
  i2128.m_DefaultSpriteDPI = i2129[9]
  i2128.m_DynamicPixelsPerUnit = i2129[10]
  i2128.m_PresetInfoIsWorld = !!i2129[11]
  return i2128
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2131 = data
  i2130.m_IgnoreReversedGraphics = !!i2131[0]
  i2130.m_BlockingObjects = i2131[1]
  i2130.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2131[2] )
  return i2130
}

Deserializers["ProgressBarUI"] = function (request, data, root) {
  var i2132 = root || request.c( 'ProgressBarUI' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'fillImage')
  request.r(i2133[2], i2133[3], 0, i2132, 'progressText')
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2135 = data
  i2134.cullTransparentMesh = !!i2135[0]
  return i2134
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.Image' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'm_Sprite')
  i2136.m_Type = i2137[2]
  i2136.m_PreserveAspect = !!i2137[3]
  i2136.m_FillCenter = !!i2137[4]
  i2136.m_FillMethod = i2137[5]
  i2136.m_FillAmount = i2137[6]
  i2136.m_FillClockwise = !!i2137[7]
  i2136.m_FillOrigin = i2137[8]
  i2136.m_UseSpriteMesh = !!i2137[9]
  i2136.m_PixelsPerUnitMultiplier = i2137[10]
  request.r(i2137[11], i2137[12], 0, i2136, 'm_Material')
  i2136.m_Maskable = !!i2137[13]
  i2136.m_Color = new pc.Color(i2137[14], i2137[15], i2137[16], i2137[17])
  i2136.m_RaycastTarget = !!i2137[18]
  i2136.m_RaycastPadding = new pc.Vec4( i2137[19], i2137[20], i2137[21], i2137[22] )
  return i2136
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2139 = data
  i2138.m_hasFontAssetChanged = !!i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'm_baseMaterial')
  i2138.m_maskOffset = new pc.Vec4( i2139[3], i2139[4], i2139[5], i2139[6] )
  i2138.m_text = i2139[7]
  i2138.m_isRightToLeft = !!i2139[8]
  request.r(i2139[9], i2139[10], 0, i2138, 'm_fontAsset')
  request.r(i2139[11], i2139[12], 0, i2138, 'm_sharedMaterial')
  var i2141 = i2139[13]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 2, i2140, '')
  }
  i2138.m_fontSharedMaterials = i2140
  request.r(i2139[14], i2139[15], 0, i2138, 'm_fontMaterial')
  var i2143 = i2139[16]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2138.m_fontMaterials = i2142
  i2138.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2139[17], i2139[18], i2139[19], i2139[20])
  i2138.m_fontColor = new pc.Color(i2139[21], i2139[22], i2139[23], i2139[24])
  i2138.m_enableVertexGradient = !!i2139[25]
  i2138.m_colorMode = i2139[26]
  i2138.m_fontColorGradient = request.d('TMPro.VertexGradient', i2139[27], i2138.m_fontColorGradient)
  request.r(i2139[28], i2139[29], 0, i2138, 'm_fontColorGradientPreset')
  request.r(i2139[30], i2139[31], 0, i2138, 'm_spriteAsset')
  i2138.m_tintAllSprites = !!i2139[32]
  request.r(i2139[33], i2139[34], 0, i2138, 'm_StyleSheet')
  i2138.m_TextStyleHashCode = i2139[35]
  i2138.m_overrideHtmlColors = !!i2139[36]
  i2138.m_faceColor = UnityEngine.Color32.ConstructColor(i2139[37], i2139[38], i2139[39], i2139[40])
  i2138.m_fontSize = i2139[41]
  i2138.m_fontSizeBase = i2139[42]
  i2138.m_fontWeight = i2139[43]
  i2138.m_enableAutoSizing = !!i2139[44]
  i2138.m_fontSizeMin = i2139[45]
  i2138.m_fontSizeMax = i2139[46]
  i2138.m_fontStyle = i2139[47]
  i2138.m_HorizontalAlignment = i2139[48]
  i2138.m_VerticalAlignment = i2139[49]
  i2138.m_textAlignment = i2139[50]
  i2138.m_characterSpacing = i2139[51]
  i2138.m_wordSpacing = i2139[52]
  i2138.m_lineSpacing = i2139[53]
  i2138.m_lineSpacingMax = i2139[54]
  i2138.m_paragraphSpacing = i2139[55]
  i2138.m_charWidthMaxAdj = i2139[56]
  i2138.m_TextWrappingMode = i2139[57]
  i2138.m_wordWrappingRatios = i2139[58]
  i2138.m_overflowMode = i2139[59]
  request.r(i2139[60], i2139[61], 0, i2138, 'm_linkedTextComponent')
  request.r(i2139[62], i2139[63], 0, i2138, 'parentLinkedComponent')
  i2138.m_enableKerning = !!i2139[64]
  var i2145 = i2139[65]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(i2145[i + 0]);
  }
  i2138.m_ActiveFontFeatures = i2144
  i2138.m_enableExtraPadding = !!i2139[66]
  i2138.checkPaddingRequired = !!i2139[67]
  i2138.m_isRichText = !!i2139[68]
  i2138.m_parseCtrlCharacters = !!i2139[69]
  i2138.m_isOrthographic = !!i2139[70]
  i2138.m_isCullingEnabled = !!i2139[71]
  i2138.m_horizontalMapping = i2139[72]
  i2138.m_verticalMapping = i2139[73]
  i2138.m_uvLineOffset = i2139[74]
  i2138.m_geometrySortingOrder = i2139[75]
  i2138.m_IsTextObjectScaleStatic = !!i2139[76]
  i2138.m_VertexBufferAutoSizeReduction = !!i2139[77]
  i2138.m_useMaxVisibleDescender = !!i2139[78]
  i2138.m_pageToDisplay = i2139[79]
  i2138.m_margin = new pc.Vec4( i2139[80], i2139[81], i2139[82], i2139[83] )
  i2138.m_isUsingLegacyAnimationComponent = !!i2139[84]
  i2138.m_isVolumetricText = !!i2139[85]
  request.r(i2139[86], i2139[87], 0, i2138, 'm_Material')
  i2138.m_EmojiFallbackSupport = !!i2139[88]
  i2138.m_Maskable = !!i2139[89]
  i2138.m_Color = new pc.Color(i2139[90], i2139[91], i2139[92], i2139[93])
  i2138.m_RaycastTarget = !!i2139[94]
  i2138.m_RaycastPadding = new pc.Vec4( i2139[95], i2139[96], i2139[97], i2139[98] )
  return i2138
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.VertexGradient' )
  var i2149 = data
  i2148.topLeft = new pc.Color(i2149[0], i2149[1], i2149[2], i2149[3])
  i2148.topRight = new pc.Color(i2149[4], i2149[5], i2149[6], i2149[7])
  i2148.bottomLeft = new pc.Color(i2149[8], i2149[9], i2149[10], i2149[11])
  i2148.bottomRight = new pc.Color(i2149[12], i2149[13], i2149[14], i2149[15])
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2153 = data
  i2152.color = new pc.Color(i2153[0], i2153[1], i2153[2], i2153[3])
  request.r(i2153[4], i2153[5], 0, i2152, 'sprite')
  i2152.flipX = !!i2153[6]
  i2152.flipY = !!i2153[7]
  i2152.drawMode = i2153[8]
  i2152.size = new pc.Vec2( i2153[9], i2153[10] )
  i2152.tileMode = i2153[11]
  i2152.adaptiveModeThreshold = i2153[12]
  i2152.maskInteraction = i2153[13]
  i2152.spriteSortPoint = i2153[14]
  i2152.enabled = !!i2153[15]
  request.r(i2153[16], i2153[17], 0, i2152, 'sharedMaterial')
  var i2155 = i2153[18]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 2) {
  request.r(i2155[i + 0], i2155[i + 1], 2, i2154, '')
  }
  i2152.sharedMaterials = i2154
  i2152.receiveShadows = !!i2153[19]
  i2152.shadowCastingMode = i2153[20]
  i2152.sortingLayerID = i2153[21]
  i2152.sortingOrder = i2153[22]
  i2152.lightmapIndex = i2153[23]
  i2152.lightmapSceneIndex = i2153[24]
  i2152.lightmapScaleOffset = new pc.Vec4( i2153[25], i2153[26], i2153[27], i2153[28] )
  i2152.lightProbeUsage = i2153[29]
  i2152.reflectionProbeUsage = i2153[30]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2157 = data
  i2156.center = new pc.Vec3( i2157[0], i2157[1], i2157[2] )
  i2156.size = new pc.Vec3( i2157[3], i2157[4], i2157[5] )
  i2156.enabled = !!i2157[6]
  i2156.isTrigger = !!i2157[7]
  request.r(i2157[8], i2157[9], 0, i2156, 'material')
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'animatorController')
  request.r(i2159[2], i2159[3], 0, i2158, 'avatar')
  i2158.updateMode = i2159[4]
  i2158.hasTransformHierarchy = !!i2159[5]
  i2158.applyRootMotion = !!i2159[6]
  var i2161 = i2159[7]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2158.humanBones = i2160
  i2158.enabled = !!i2159[8]
  return i2158
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'm_RootBone')
  var i2167 = i2165[2]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.m_BoneTransforms = i2166
  i2164.m_AlwaysUpdate = !!i2165[3]
  i2164.m_AutoRebind = !!i2165[4]
  return i2164
}

Deserializers["AnimColorController"] = function (request, data, root) {
  var i2168 = root || request.c( 'AnimColorController' )
  var i2169 = data
  var i2171 = i2169[0]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 1, i2170, '')
  }
  i2168.partsToColor = i2170
  return i2168
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i2172 = root || request.c( 'PlaySound' )
  var i2173 = data
  i2172.fxType = i2173[0]
  i2172.sound2 = i2173[1]
  i2172.sound3 = i2173[2]
  return i2172
}

Deserializers["PlaySoundOnEnable"] = function (request, data, root) {
  var i2174 = root || request.c( 'PlaySoundOnEnable' )
  var i2175 = data
  i2174.soundToPlay = i2175[0]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2177 = data
  i2176.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2177[0], i2176.main)
  i2176.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2177[1], i2176.colorBySpeed)
  i2176.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2177[2], i2176.colorOverLifetime)
  i2176.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2177[3], i2176.emission)
  i2176.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2177[4], i2176.rotationBySpeed)
  i2176.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2177[5], i2176.rotationOverLifetime)
  i2176.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2177[6], i2176.shape)
  i2176.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2177[7], i2176.sizeBySpeed)
  i2176.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2177[8], i2176.sizeOverLifetime)
  i2176.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2177[9], i2176.textureSheetAnimation)
  i2176.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2177[10], i2176.velocityOverLifetime)
  i2176.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2177[11], i2176.noise)
  i2176.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2177[12], i2176.inheritVelocity)
  i2176.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2177[13], i2176.forceOverLifetime)
  i2176.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2177[14], i2176.limitVelocityOverLifetime)
  i2176.useAutoRandomSeed = !!i2177[15]
  i2176.randomSeed = i2177[16]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemMain()
  var i2179 = data
  i2178.duration = i2179[0]
  i2178.loop = !!i2179[1]
  i2178.prewarm = !!i2179[2]
  i2178.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[3], i2178.startDelay)
  i2178.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[4], i2178.startLifetime)
  i2178.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[5], i2178.startSpeed)
  i2178.startSize3D = !!i2179[6]
  i2178.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[7], i2178.startSizeX)
  i2178.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[8], i2178.startSizeY)
  i2178.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[9], i2178.startSizeZ)
  i2178.startRotation3D = !!i2179[10]
  i2178.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[11], i2178.startRotationX)
  i2178.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[12], i2178.startRotationY)
  i2178.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[13], i2178.startRotationZ)
  i2178.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2179[14], i2178.startColor)
  i2178.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[15], i2178.gravityModifier)
  i2178.simulationSpace = i2179[16]
  request.r(i2179[17], i2179[18], 0, i2178, 'customSimulationSpace')
  i2178.simulationSpeed = i2179[19]
  i2178.useUnscaledTime = !!i2179[20]
  i2178.scalingMode = i2179[21]
  i2178.playOnAwake = !!i2179[22]
  i2178.maxParticles = i2179[23]
  i2178.emitterVelocityMode = i2179[24]
  i2178.stopAction = i2179[25]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2180 = root || new pc.MinMaxCurve()
  var i2181 = data
  i2180.mode = i2181[0]
  i2180.curveMin = new pc.AnimationCurve( { keys_flow: i2181[1] } )
  i2180.curveMax = new pc.AnimationCurve( { keys_flow: i2181[2] } )
  i2180.curveMultiplier = i2181[3]
  i2180.constantMin = i2181[4]
  i2180.constantMax = i2181[5]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2182 = root || new pc.MinMaxGradient()
  var i2183 = data
  i2182.mode = i2183[0]
  i2182.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2183[1], i2182.gradientMin)
  i2182.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2183[2], i2182.gradientMax)
  i2182.colorMin = new pc.Color(i2183[3], i2183[4], i2183[5], i2183[6])
  i2182.colorMax = new pc.Color(i2183[7], i2183[8], i2183[9], i2183[10])
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2185 = data
  i2184.mode = i2185[0]
  var i2187 = i2185[1]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2187[i + 0]) );
  }
  i2184.colorKeys = i2186
  var i2189 = i2185[2]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2189[i + 0]) );
  }
  i2184.alphaKeys = i2188
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemColorBySpeed()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2191[1], i2190.color)
  i2190.range = new pc.Vec2( i2191[2], i2191[3] )
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2195 = data
  i2194.color = new pc.Color(i2195[0], i2195[1], i2195[2], i2195[3])
  i2194.time = i2195[4]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2199 = data
  i2198.alpha = i2199[0]
  i2198.time = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemColorOverLifetime()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2201[1], i2200.color)
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemEmitter()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.rateOverTime)
  i2202.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.rateOverDistance)
  var i2205 = i2203[3]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2205[i + 0]) );
  }
  i2202.bursts = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemBurst()
  var i2209 = data
  i2208.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[0], i2208.count)
  i2208.cycleCount = i2209[1]
  i2208.minCount = i2209[2]
  i2208.maxCount = i2209[3]
  i2208.repeatInterval = i2209[4]
  i2208.time = i2209[5]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemRotationBySpeed()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[1], i2210.x)
  i2210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.y)
  i2210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.z)
  i2210.separateAxes = !!i2211[4]
  i2210.range = new pc.Vec2( i2211[5], i2211[6] )
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[1], i2212.x)
  i2212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.y)
  i2212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.z)
  i2212.separateAxes = !!i2213[4]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemShape()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.shapeType = i2215[1]
  i2214.randomDirectionAmount = i2215[2]
  i2214.sphericalDirectionAmount = i2215[3]
  i2214.randomPositionAmount = i2215[4]
  i2214.alignToDirection = !!i2215[5]
  i2214.radius = i2215[6]
  i2214.radiusMode = i2215[7]
  i2214.radiusSpread = i2215[8]
  i2214.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[9], i2214.radiusSpeed)
  i2214.radiusThickness = i2215[10]
  i2214.angle = i2215[11]
  i2214.length = i2215[12]
  i2214.boxThickness = new pc.Vec3( i2215[13], i2215[14], i2215[15] )
  i2214.meshShapeType = i2215[16]
  request.r(i2215[17], i2215[18], 0, i2214, 'mesh')
  request.r(i2215[19], i2215[20], 0, i2214, 'meshRenderer')
  request.r(i2215[21], i2215[22], 0, i2214, 'skinnedMeshRenderer')
  i2214.useMeshMaterialIndex = !!i2215[23]
  i2214.meshMaterialIndex = i2215[24]
  i2214.useMeshColors = !!i2215[25]
  i2214.normalOffset = i2215[26]
  i2214.arc = i2215[27]
  i2214.arcMode = i2215[28]
  i2214.arcSpread = i2215[29]
  i2214.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[30], i2214.arcSpeed)
  i2214.donutRadius = i2215[31]
  i2214.position = new pc.Vec3( i2215[32], i2215[33], i2215[34] )
  i2214.rotation = new pc.Vec3( i2215[35], i2215[36], i2215[37] )
  i2214.scale = new pc.Vec3( i2215[38], i2215[39], i2215[40] )
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemSizeBySpeed()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[1], i2216.x)
  i2216.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.y)
  i2216.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[3], i2216.z)
  i2216.separateAxes = !!i2217[4]
  i2216.range = new pc.Vec2( i2217[5], i2217[6] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[1], i2218.x)
  i2218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[2], i2218.y)
  i2218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[3], i2218.z)
  i2218.separateAxes = !!i2219[4]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.mode = i2221[1]
  i2220.animation = i2221[2]
  i2220.numTilesX = i2221[3]
  i2220.numTilesY = i2221[4]
  i2220.useRandomRow = !!i2221[5]
  i2220.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[6], i2220.frameOverTime)
  i2220.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[7], i2220.startFrame)
  i2220.cycleCount = i2221[8]
  i2220.rowIndex = i2221[9]
  i2220.flipU = i2221[10]
  i2220.flipV = i2221[11]
  i2220.spriteCount = i2221[12]
  var i2223 = i2221[13]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 2, i2222, '')
  }
  i2220.sprites = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[1], i2226.x)
  i2226.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.y)
  i2226.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.z)
  i2226.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[4], i2226.radial)
  i2226.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[5], i2226.speedModifier)
  i2226.space = i2227[6]
  i2226.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[7], i2226.orbitalX)
  i2226.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[8], i2226.orbitalY)
  i2226.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[9], i2226.orbitalZ)
  i2226.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[10], i2226.orbitalOffsetX)
  i2226.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[11], i2226.orbitalOffsetY)
  i2226.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[12], i2226.orbitalOffsetZ)
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2228 = root || new pc.ParticleSystemNoise()
  var i2229 = data
  i2228.enabled = !!i2229[0]
  i2228.separateAxes = !!i2229[1]
  i2228.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[2], i2228.strengthX)
  i2228.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[3], i2228.strengthY)
  i2228.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[4], i2228.strengthZ)
  i2228.frequency = i2229[5]
  i2228.damping = !!i2229[6]
  i2228.octaveCount = i2229[7]
  i2228.octaveMultiplier = i2229[8]
  i2228.octaveScale = i2229[9]
  i2228.quality = i2229[10]
  i2228.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[11], i2228.scrollSpeed)
  i2228.scrollSpeedMultiplier = i2229[12]
  i2228.remapEnabled = !!i2229[13]
  i2228.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[14], i2228.remapX)
  i2228.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[15], i2228.remapY)
  i2228.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[16], i2228.remapZ)
  i2228.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[17], i2228.positionAmount)
  i2228.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[18], i2228.rotationAmount)
  i2228.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[19], i2228.sizeAmount)
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2230 = root || new pc.ParticleSystemInheritVelocity()
  var i2231 = data
  i2230.enabled = !!i2231[0]
  i2230.mode = i2231[1]
  i2230.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[2], i2230.curve)
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemForceOverLifetime()
  var i2233 = data
  i2232.enabled = !!i2233[0]
  i2232.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[1], i2232.x)
  i2232.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[2], i2232.y)
  i2232.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[3], i2232.z)
  i2232.space = i2233[4]
  i2232.randomized = !!i2233[5]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[1], i2234.limit)
  i2234.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[2], i2234.limitX)
  i2234.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[3], i2234.limitY)
  i2234.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[4], i2234.limitZ)
  i2234.dampen = i2235[5]
  i2234.separateAxes = !!i2235[6]
  i2234.space = i2235[7]
  i2234.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[8], i2234.drag)
  i2234.multiplyDragByParticleSize = !!i2235[9]
  i2234.multiplyDragByParticleVelocity = !!i2235[10]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'mesh')
  i2236.meshCount = i2237[2]
  i2236.activeVertexStreamsCount = i2237[3]
  i2236.alignment = i2237[4]
  i2236.renderMode = i2237[5]
  i2236.sortMode = i2237[6]
  i2236.lengthScale = i2237[7]
  i2236.velocityScale = i2237[8]
  i2236.cameraVelocityScale = i2237[9]
  i2236.normalDirection = i2237[10]
  i2236.sortingFudge = i2237[11]
  i2236.minParticleSize = i2237[12]
  i2236.maxParticleSize = i2237[13]
  i2236.pivot = new pc.Vec3( i2237[14], i2237[15], i2237[16] )
  request.r(i2237[17], i2237[18], 0, i2236, 'trailMaterial')
  i2236.applyActiveColorSpace = !!i2237[19]
  i2236.enabled = !!i2237[20]
  request.r(i2237[21], i2237[22], 0, i2236, 'sharedMaterial')
  var i2239 = i2237[23]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2236.sharedMaterials = i2238
  i2236.receiveShadows = !!i2237[24]
  i2236.shadowCastingMode = i2237[25]
  i2236.sortingLayerID = i2237[26]
  i2236.sortingOrder = i2237[27]
  i2236.lightmapIndex = i2237[28]
  i2236.lightmapSceneIndex = i2237[29]
  i2236.lightmapScaleOffset = new pc.Vec4( i2237[30], i2237[31], i2237[32], i2237[33] )
  i2236.lightProbeUsage = i2237[34]
  i2236.reflectionProbeUsage = i2237[35]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'sharedMesh')
  var i2243 = i2241[2]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2240.bones = i2242
  i2240.updateWhenOffscreen = !!i2241[3]
  i2240.localBounds = i2241[4]
  request.r(i2241[5], i2241[6], 0, i2240, 'rootBone')
  var i2245 = i2241[7]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2245[i + 0]) );
  }
  i2240.blendShapesWeights = i2244
  i2240.enabled = !!i2241[8]
  request.r(i2241[9], i2241[10], 0, i2240, 'sharedMaterial')
  var i2247 = i2241[11]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 2, i2246, '')
  }
  i2240.sharedMaterials = i2246
  i2240.receiveShadows = !!i2241[12]
  i2240.shadowCastingMode = i2241[13]
  i2240.sortingLayerID = i2241[14]
  i2240.sortingOrder = i2241[15]
  i2240.lightmapIndex = i2241[16]
  i2240.lightmapSceneIndex = i2241[17]
  i2240.lightmapScaleOffset = new pc.Vec4( i2241[18], i2241[19], i2241[20], i2241[21] )
  i2240.lightProbeUsage = i2241[22]
  i2240.reflectionProbeUsage = i2241[23]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2251 = data
  i2250.weight = i2251[0]
  return i2250
}

Deserializers["ItemController"] = function (request, data, root) {
  var i2252 = root || request.c( 'ItemController' )
  var i2253 = data
  i2252.itemType = i2253[0]
  request.r(i2253[1], i2253[2], 0, i2252, 'dropTarget')
  i2252.onClick = request.d('UnityEngine.Events.UnityEvent', i2253[3], i2252.onClick)
  i2252.onDrop = request.d('UnityEngine.Events.UnityEvent', i2253[4], i2252.onDrop)
  i2252.onDragStart = request.d('UnityEngine.Events.UnityEvent', i2253[5], i2252.onDragStart)
  i2252.onReturn = request.d('UnityEngine.Events.UnityEvent', i2253[6], i2252.onReturn)
  var i2255 = i2253[7]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('AnimObjectData', i2255[i + 0]));
  }
  i2252.animationObjects = i2254
  i2252.fxSoundType = i2253[8]
  return i2252
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_ObjectArgument')
  i2256.m_ObjectArgumentAssemblyTypeName = i2257[2]
  i2256.m_IntArgument = i2257[3]
  i2256.m_FloatArgument = i2257[4]
  i2256.m_StringArgument = i2257[5]
  i2256.m_BoolArgument = !!i2257[6]
  return i2256
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i2260 = root || request.c( 'AnimObjectData' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'animObj')
  i2260.delayFromStart = i2261[2]
  i2260.durationToDeactivate = i2261[3]
  return i2260
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i2262 = root || request.c( 'ItemGraphic' )
  var i2263 = data
  var i2265 = i2263[0]
  var i2264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2265.length; i += 2) {
  request.r(i2265[i + 0], i2265[i + 1], 1, i2264, '')
  }
  i2262.spriteRenderers = i2264
  i2262.sortingOrderOffset = i2263[1]
  return i2262
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i2266 = root || request.c( 'ItemMovement' )
  var i2267 = data
  return i2266
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_FirstSelected')
  i2268.m_sendNavigationEvents = !!i2269[2]
  i2268.m_DragThreshold = i2269[3]
  return i2268
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2271 = data
  i2270.m_HorizontalAxis = i2271[0]
  i2270.m_VerticalAxis = i2271[1]
  i2270.m_SubmitButton = i2271[2]
  i2270.m_CancelButton = i2271[3]
  i2270.m_InputActionsPerSecond = i2271[4]
  i2270.m_RepeatDelay = i2271[5]
  i2270.m_ForceModuleActive = !!i2271[6]
  i2270.m_SendPointerHoverToParent = !!i2271[7]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2273 = data
  i2272.ambientIntensity = i2273[0]
  i2272.reflectionIntensity = i2273[1]
  i2272.ambientMode = i2273[2]
  i2272.ambientLight = new pc.Color(i2273[3], i2273[4], i2273[5], i2273[6])
  i2272.ambientSkyColor = new pc.Color(i2273[7], i2273[8], i2273[9], i2273[10])
  i2272.ambientGroundColor = new pc.Color(i2273[11], i2273[12], i2273[13], i2273[14])
  i2272.ambientEquatorColor = new pc.Color(i2273[15], i2273[16], i2273[17], i2273[18])
  i2272.fogColor = new pc.Color(i2273[19], i2273[20], i2273[21], i2273[22])
  i2272.fogEndDistance = i2273[23]
  i2272.fogStartDistance = i2273[24]
  i2272.fogDensity = i2273[25]
  i2272.fog = !!i2273[26]
  request.r(i2273[27], i2273[28], 0, i2272, 'skybox')
  i2272.fogMode = i2273[29]
  var i2275 = i2273[30]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2275[i + 0]) );
  }
  i2272.lightmaps = i2274
  i2272.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2273[31], i2272.lightProbes)
  i2272.lightmapsMode = i2273[32]
  i2272.mixedBakeMode = i2273[33]
  i2272.environmentLightingMode = i2273[34]
  i2272.ambientProbe = new pc.SphericalHarmonicsL2(i2273[35])
  i2272.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2273[36])
  i2272.useReferenceAmbientProbe = !!i2273[37]
  request.r(i2273[38], i2273[39], 0, i2272, 'customReflection')
  request.r(i2273[40], i2273[41], 0, i2272, 'defaultReflection')
  i2272.defaultReflectionMode = i2273[42]
  i2272.defaultReflectionResolution = i2273[43]
  i2272.sunLightObjectId = i2273[44]
  i2272.pixelLightCount = i2273[45]
  i2272.defaultReflectionHDR = !!i2273[46]
  i2272.hasLightDataAsset = !!i2273[47]
  i2272.hasManualGenerate = !!i2273[48]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'lightmapColor')
  request.r(i2279[2], i2279[3], 0, i2278, 'lightmapDirection')
  request.r(i2279[4], i2279[5], 0, i2278, 'shadowMask')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2280 = root || new UnityEngine.LightProbes()
  var i2281 = data
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2289 = data
  var i2291 = i2289[0]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2291[i + 0]));
  }
  i2288.ShaderCompilationErrors = i2290
  i2288.name = i2289[1]
  i2288.guid = i2289[2]
  var i2293 = i2289[3]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( i2293[i + 0] );
  }
  i2288.shaderDefinedKeywords = i2292
  var i2295 = i2289[4]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2295[i + 0]) );
  }
  i2288.passes = i2294
  var i2297 = i2289[5]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2297[i + 0]) );
  }
  i2288.usePasses = i2296
  var i2299 = i2289[6]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2299[i + 0]) );
  }
  i2288.defaultParameterValues = i2298
  request.r(i2289[7], i2289[8], 0, i2288, 'unityFallbackShader')
  i2288.readDepth = !!i2289[9]
  i2288.hasDepthOnlyPass = !!i2289[10]
  i2288.isCreatedByShaderGraph = !!i2289[11]
  i2288.disableBatching = !!i2289[12]
  i2288.compiled = !!i2289[13]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2303 = data
  i2302.shaderName = i2303[0]
  i2302.errorMessage = i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2308 = root || new pc.UnityShaderPass()
  var i2309 = data
  i2308.id = i2309[0]
  i2308.subShaderIndex = i2309[1]
  i2308.name = i2309[2]
  i2308.passType = i2309[3]
  i2308.grabPassTextureName = i2309[4]
  i2308.usePass = !!i2309[5]
  i2308.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[6], i2308.zTest)
  i2308.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[7], i2308.zWrite)
  i2308.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[8], i2308.culling)
  i2308.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2309[9], i2308.blending)
  i2308.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2309[10], i2308.alphaBlending)
  i2308.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[11], i2308.colorWriteMask)
  i2308.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[12], i2308.offsetUnits)
  i2308.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[13], i2308.offsetFactor)
  i2308.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[14], i2308.stencilRef)
  i2308.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[15], i2308.stencilReadMask)
  i2308.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[16], i2308.stencilWriteMask)
  i2308.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2309[17], i2308.stencilOp)
  i2308.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2309[18], i2308.stencilOpFront)
  i2308.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2309[19], i2308.stencilOpBack)
  var i2311 = i2309[20]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2311[i + 0]) );
  }
  i2308.tags = i2310
  var i2313 = i2309[21]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( i2313[i + 0] );
  }
  i2308.passDefinedKeywords = i2312
  var i2315 = i2309[22]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2315[i + 0]) );
  }
  i2308.passDefinedKeywordGroups = i2314
  var i2317 = i2309[23]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2317[i + 0]) );
  }
  i2308.variants = i2316
  var i2319 = i2309[24]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2319[i + 0]) );
  }
  i2308.excludedVariants = i2318
  i2308.hasDepthReader = !!i2309[25]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2321 = data
  i2320.val = i2321[0]
  i2320.name = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2323 = data
  i2322.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[0], i2322.src)
  i2322.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[1], i2322.dst)
  i2322.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[2], i2322.op)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2325 = data
  i2324.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[0], i2324.pass)
  i2324.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[1], i2324.fail)
  i2324.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[2], i2324.zFail)
  i2324.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2325[3], i2324.comp)
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2329 = data
  i2328.name = i2329[0]
  i2328.value = i2329[1]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2333 = data
  var i2335 = i2333[0]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( i2335[i + 0] );
  }
  i2332.keywords = i2334
  i2332.hasDiscard = !!i2333[1]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2339 = data
  i2338.passId = i2339[0]
  i2338.subShaderIndex = i2339[1]
  var i2341 = i2339[2]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( i2341[i + 0] );
  }
  i2338.keywords = i2340
  i2338.vertexProgram = i2339[3]
  i2338.fragmentProgram = i2339[4]
  i2338.exportedForWebGl2 = !!i2339[5]
  i2338.readDepth = !!i2339[6]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'shader')
  i2344.pass = i2345[2]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.type = i2349[1]
  i2348.value = new pc.Vec4( i2349[2], i2349[3], i2349[4], i2349[5] )
  i2348.textureValue = i2349[6]
  i2348.shaderPropertyFlag = i2349[7]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2351 = data
  i2350.name = i2351[0]
  request.r(i2351[1], i2351[2], 0, i2350, 'texture')
  i2350.aabb = i2351[3]
  i2350.vertices = i2351[4]
  i2350.triangles = i2351[5]
  i2350.textureRect = UnityEngine.Rect.MinMaxRect(i2351[6], i2351[7], i2351[8], i2351[9])
  i2350.packedRect = UnityEngine.Rect.MinMaxRect(i2351[10], i2351[11], i2351[12], i2351[13])
  i2350.border = new pc.Vec4( i2351[14], i2351[15], i2351[16], i2351[17] )
  i2350.transparency = i2351[18]
  i2350.bounds = i2351[19]
  i2350.pixelsPerUnit = i2351[20]
  i2350.textureWidth = i2351[21]
  i2350.textureHeight = i2351[22]
  i2350.nativeSize = new pc.Vec2( i2351[23], i2351[24] )
  i2350.pivot = new pc.Vec2( i2351[25], i2351[26] )
  i2350.textureRectOffset = new pc.Vec2( i2351[27], i2351[28] )
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2353 = data
  i2352.name = i2353[0]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2355 = data
  i2354.name = i2355[0]
  i2354.wrapMode = i2355[1]
  i2354.isLooping = !!i2355[2]
  i2354.length = i2355[3]
  var i2357 = i2355[4]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2357[i + 0]) );
  }
  i2354.curves = i2356
  var i2359 = i2355[5]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2359[i + 0]) );
  }
  i2354.events = i2358
  i2354.halfPrecision = !!i2355[6]
  i2354._frameRate = i2355[7]
  i2354.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2355[8], i2354.localBounds)
  i2354.hasMuscleCurves = !!i2355[9]
  var i2361 = i2355[10]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( i2361[i + 0] );
  }
  i2354.clipMuscleConstant = i2360
  i2354.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2355[11], i2354.clipBindingConstant)
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2365 = data
  i2364.path = i2365[0]
  i2364.hash = i2365[1]
  i2364.componentType = i2365[2]
  i2364.property = i2365[3]
  i2364.keys = i2365[4]
  var i2367 = i2365[5]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2367[i + 0]) );
  }
  i2364.objectReferenceKeys = i2366
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2371 = data
  i2370.time = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'value')
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2375 = data
  i2374.functionName = i2375[0]
  i2374.floatParameter = i2375[1]
  i2374.intParameter = i2375[2]
  i2374.stringParameter = i2375[3]
  request.r(i2375[4], i2375[5], 0, i2374, 'objectReferenceParameter')
  i2374.time = i2375[6]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2377 = data
  i2376.center = new pc.Vec3( i2377[0], i2377[1], i2377[2] )
  i2376.extends = new pc.Vec3( i2377[3], i2377[4], i2377[5] )
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2381 = data
  var i2383 = i2381[0]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( i2383[i + 0] );
  }
  i2380.genericBindings = i2382
  var i2385 = i2381[1]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( i2385[i + 0] );
  }
  i2380.pptrCurveMapping = i2384
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2387 = data
  i2386.name = i2387[0]
  i2386.ascent = i2387[1]
  i2386.originalLineHeight = i2387[2]
  i2386.fontSize = i2387[3]
  var i2389 = i2387[4]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2389[i + 0]) );
  }
  i2386.characterInfo = i2388
  request.r(i2387[5], i2387[6], 0, i2386, 'texture')
  i2386.originalFontSize = i2387[7]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2393 = data
  i2392.index = i2393[0]
  i2392.advance = i2393[1]
  i2392.bearing = i2393[2]
  i2392.glyphWidth = i2393[3]
  i2392.glyphHeight = i2393[4]
  i2392.minX = i2393[5]
  i2392.maxX = i2393[6]
  i2392.minY = i2393[7]
  i2392.maxY = i2393[8]
  i2392.uvBottomLeftX = i2393[9]
  i2392.uvBottomLeftY = i2393[10]
  i2392.uvBottomRightX = i2393[11]
  i2392.uvBottomRightY = i2393[12]
  i2392.uvTopLeftX = i2393[13]
  i2392.uvTopLeftY = i2393[14]
  i2392.uvTopRightX = i2393[15]
  i2392.uvTopRightY = i2393[16]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2395 = data
  i2394.name = i2395[0]
  var i2397 = i2395[1]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2397[i + 0]) );
  }
  i2394.layers = i2396
  var i2399 = i2395[2]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2399[i + 0]) );
  }
  i2394.parameters = i2398
  i2394.animationClips = i2395[3]
  i2394.avatarUnsupported = i2395[4]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2403 = data
  i2402.name = i2403[0]
  i2402.defaultWeight = i2403[1]
  i2402.blendingMode = i2403[2]
  i2402.avatarMask = i2403[3]
  i2402.syncedLayerIndex = i2403[4]
  i2402.syncedLayerAffectsTiming = !!i2403[5]
  i2402.syncedLayers = i2403[6]
  i2402.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2403[7], i2402.stateMachine)
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2405 = data
  i2404.id = i2405[0]
  i2404.name = i2405[1]
  i2404.path = i2405[2]
  var i2407 = i2405[3]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2407[i + 0]) );
  }
  i2404.states = i2406
  var i2409 = i2405[4]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2409[i + 0]) );
  }
  i2404.machines = i2408
  var i2411 = i2405[5]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2411[i + 0]) );
  }
  i2404.entryStateTransitions = i2410
  var i2413 = i2405[6]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2413[i + 0]) );
  }
  i2404.exitStateTransitions = i2412
  var i2415 = i2405[7]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2415[i + 0]) );
  }
  i2404.anyStateTransitions = i2414
  i2404.defaultStateId = i2405[8]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2419 = data
  i2418.id = i2419[0]
  i2418.name = i2419[1]
  i2418.cycleOffset = i2419[2]
  i2418.cycleOffsetParameter = i2419[3]
  i2418.cycleOffsetParameterActive = !!i2419[4]
  i2418.mirror = !!i2419[5]
  i2418.mirrorParameter = i2419[6]
  i2418.mirrorParameterActive = !!i2419[7]
  i2418.motionId = i2419[8]
  i2418.nameHash = i2419[9]
  i2418.fullPathHash = i2419[10]
  i2418.speed = i2419[11]
  i2418.speedParameter = i2419[12]
  i2418.speedParameterActive = !!i2419[13]
  i2418.tag = i2419[14]
  i2418.tagHash = i2419[15]
  i2418.writeDefaultValues = !!i2419[16]
  var i2421 = i2419[17]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 2, i2420, '')
  }
  i2418.behaviours = i2420
  var i2423 = i2419[18]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2423[i + 0]) );
  }
  i2418.transitions = i2422
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2429 = data
  i2428.fullPath = i2429[0]
  i2428.canTransitionToSelf = !!i2429[1]
  i2428.duration = i2429[2]
  i2428.exitTime = i2429[3]
  i2428.hasExitTime = !!i2429[4]
  i2428.hasFixedDuration = !!i2429[5]
  i2428.interruptionSource = i2429[6]
  i2428.offset = i2429[7]
  i2428.orderedInterruption = !!i2429[8]
  i2428.destinationStateId = i2429[9]
  i2428.isExit = !!i2429[10]
  i2428.mute = !!i2429[11]
  i2428.solo = !!i2429[12]
  var i2431 = i2429[13]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2431[i + 0]) );
  }
  i2428.conditions = i2430
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2437 = data
  i2436.destinationStateId = i2437[0]
  i2436.isExit = !!i2437[1]
  i2436.mute = !!i2437[2]
  i2436.solo = !!i2437[3]
  var i2439 = i2437[4]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2439[i + 0]) );
  }
  i2436.conditions = i2438
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2443 = data
  i2442.defaultBool = !!i2443[0]
  i2442.defaultFloat = i2443[1]
  i2442.defaultInt = i2443[2]
  i2442.name = i2443[3]
  i2442.nameHash = i2443[4]
  i2442.type = i2443[5]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2447 = data
  i2446.mode = i2447[0]
  i2446.parameter = i2447[1]
  i2446.threshold = i2447[2]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2449 = data
  i2448.name = i2449[0]
  i2448.bytes64 = i2449[1]
  i2448.data = i2449[2]
  return i2448
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2450 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2451 = data
  i2450.normalStyle = i2451[0]
  i2450.normalSpacingOffset = i2451[1]
  i2450.boldStyle = i2451[2]
  i2450.boldSpacing = i2451[3]
  i2450.italicStyle = i2451[4]
  i2450.tabSize = i2451[5]
  request.r(i2451[6], i2451[7], 0, i2450, 'atlas')
  i2450.m_SourceFontFileGUID = i2451[8]
  i2450.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2451[9], i2450.m_CreationSettings)
  request.r(i2451[10], i2451[11], 0, i2450, 'm_SourceFontFile')
  i2450.m_SourceFontFilePath = i2451[12]
  i2450.m_AtlasPopulationMode = i2451[13]
  i2450.InternalDynamicOS = !!i2451[14]
  var i2453 = i2451[15]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.add(request.d('UnityEngine.TextCore.Glyph', i2453[i + 0]));
  }
  i2450.m_GlyphTable = i2452
  var i2455 = i2451[16]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.add(request.d('TMPro.TMP_Character', i2455[i + 0]));
  }
  i2450.m_CharacterTable = i2454
  var i2457 = i2451[17]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 2, i2456, '')
  }
  i2450.m_AtlasTextures = i2456
  i2450.m_AtlasTextureIndex = i2451[18]
  i2450.m_IsMultiAtlasTexturesEnabled = !!i2451[19]
  i2450.m_GetFontFeatures = !!i2451[20]
  i2450.m_ClearDynamicDataOnBuild = !!i2451[21]
  i2450.m_AtlasWidth = i2451[22]
  i2450.m_AtlasHeight = i2451[23]
  i2450.m_AtlasPadding = i2451[24]
  i2450.m_AtlasRenderMode = i2451[25]
  var i2459 = i2451[26]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.add(request.d('UnityEngine.TextCore.GlyphRect', i2459[i + 0]));
  }
  i2450.m_UsedGlyphRects = i2458
  var i2461 = i2451[27]
  var i2460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.add(request.d('UnityEngine.TextCore.GlyphRect', i2461[i + 0]));
  }
  i2450.m_FreeGlyphRects = i2460
  i2450.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2451[28], i2450.m_FontFeatureTable)
  i2450.m_ShouldReimportFontFeatures = !!i2451[29]
  var i2463 = i2451[30]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 1, i2462, '')
  }
  i2450.m_FallbackFontAssetTable = i2462
  var i2465 = i2451[31]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('TMPro.TMP_FontWeightPair', i2465[i + 0]) );
  }
  i2450.m_FontWeightTable = i2464
  var i2467 = i2451[32]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('TMPro.TMP_FontWeightPair', i2467[i + 0]) );
  }
  i2450.fontWeights = i2466
  i2450.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2451[33], i2450.m_fontInfo)
  var i2469 = i2451[34]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.add(request.d('TMPro.TMP_Glyph', i2469[i + 0]));
  }
  i2450.m_glyphInfoList = i2468
  i2450.m_KerningTable = request.d('TMPro.KerningTable', i2451[35], i2450.m_KerningTable)
  var i2471 = i2451[36]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 1, i2470, '')
  }
  i2450.fallbackFontAssets = i2470
  i2450.m_Version = i2451[37]
  i2450.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2451[38], i2450.m_FaceInfo)
  request.r(i2451[39], i2451[40], 0, i2450, 'm_Material')
  return i2450
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2472 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2473 = data
  i2472.sourceFontFileName = i2473[0]
  i2472.sourceFontFileGUID = i2473[1]
  i2472.faceIndex = i2473[2]
  i2472.pointSizeSamplingMode = i2473[3]
  i2472.pointSize = i2473[4]
  i2472.padding = i2473[5]
  i2472.paddingMode = i2473[6]
  i2472.packingMode = i2473[7]
  i2472.atlasWidth = i2473[8]
  i2472.atlasHeight = i2473[9]
  i2472.characterSetSelectionMode = i2473[10]
  i2472.characterSequence = i2473[11]
  i2472.referencedFontAssetGUID = i2473[12]
  i2472.referencedTextAssetGUID = i2473[13]
  i2472.fontStyle = i2473[14]
  i2472.fontStyleModifier = i2473[15]
  i2472.renderMode = i2473[16]
  i2472.includeFontFeatures = !!i2473[17]
  return i2472
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2477 = data
  i2476.m_Index = i2477[0]
  i2476.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2477[1], i2476.m_Metrics)
  i2476.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2477[2], i2476.m_GlyphRect)
  i2476.m_Scale = i2477[3]
  i2476.m_AtlasIndex = i2477[4]
  i2476.m_ClassDefinitionType = i2477[5]
  return i2476
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2479 = data
  i2478.m_Width = i2479[0]
  i2478.m_Height = i2479[1]
  i2478.m_HorizontalBearingX = i2479[2]
  i2478.m_HorizontalBearingY = i2479[3]
  i2478.m_HorizontalAdvance = i2479[4]
  return i2478
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2481 = data
  i2480.m_X = i2481[0]
  i2480.m_Y = i2481[1]
  i2480.m_Width = i2481[2]
  i2480.m_Height = i2481[3]
  return i2480
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.TMP_Character' )
  var i2485 = data
  i2484.m_ElementType = i2485[0]
  i2484.m_Unicode = i2485[1]
  i2484.m_GlyphIndex = i2485[2]
  i2484.m_Scale = i2485[3]
  return i2484
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.add(request.d('TMPro.MultipleSubstitutionRecord', i2493[i + 0]));
  }
  i2490.m_MultipleSubstitutionRecords = i2492
  var i2495 = i2491[1]
  var i2494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.add(request.d('TMPro.LigatureSubstitutionRecord', i2495[i + 0]));
  }
  i2490.m_LigatureSubstitutionRecords = i2494
  var i2497 = i2491[2]
  var i2496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2497[i + 0]));
  }
  i2490.m_GlyphPairAdjustmentRecords = i2496
  var i2499 = i2491[3]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2499[i + 0]));
  }
  i2490.m_MarkToBaseAdjustmentRecords = i2498
  var i2501 = i2491[4]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2501[i + 0]));
  }
  i2490.m_MarkToMarkAdjustmentRecords = i2500
  return i2490
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2504 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2505 = data
  i2504.m_TargetGlyphID = i2505[0]
  i2504.m_SubstituteGlyphIDs = i2505[1]
  return i2504
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2508 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2509 = data
  i2508.m_ComponentGlyphIDs = i2509[0]
  i2508.m_LigatureGlyphID = i2509[1]
  return i2508
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2513 = data
  i2512.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2513[0], i2512.m_FirstAdjustmentRecord)
  i2512.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2513[1], i2512.m_SecondAdjustmentRecord)
  i2512.m_FeatureLookupFlags = i2513[2]
  return i2512
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2515 = data
  i2514.m_GlyphIndex = i2515[0]
  i2514.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2515[1], i2514.m_GlyphValueRecord)
  return i2514
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2517 = data
  i2516.m_XPlacement = i2517[0]
  i2516.m_YPlacement = i2517[1]
  i2516.m_XAdvance = i2517[2]
  i2516.m_YAdvance = i2517[3]
  return i2516
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2521 = data
  i2520.m_BaseGlyphID = i2521[0]
  i2520.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2521[1], i2520.m_BaseGlyphAnchorPoint)
  i2520.m_MarkGlyphID = i2521[2]
  i2520.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2521[3], i2520.m_MarkPositionAdjustment)
  return i2520
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2524 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2525 = data
  i2524.m_BaseMarkGlyphID = i2525[0]
  i2524.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2525[1], i2524.m_BaseMarkGlyphAnchorPoint)
  i2524.m_CombiningMarkGlyphID = i2525[2]
  i2524.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2525[3], i2524.m_CombiningMarkPositionAdjustment)
  return i2524
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2530 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'regularTypeface')
  request.r(i2531[2], i2531[3], 0, i2530, 'italicTypeface')
  return i2530
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2533 = data
  i2532.Name = i2533[0]
  i2532.PointSize = i2533[1]
  i2532.Scale = i2533[2]
  i2532.CharacterCount = i2533[3]
  i2532.LineHeight = i2533[4]
  i2532.Baseline = i2533[5]
  i2532.Ascender = i2533[6]
  i2532.CapHeight = i2533[7]
  i2532.Descender = i2533[8]
  i2532.CenterLine = i2533[9]
  i2532.SuperscriptOffset = i2533[10]
  i2532.SubscriptOffset = i2533[11]
  i2532.SubSize = i2533[12]
  i2532.Underline = i2533[13]
  i2532.UnderlineThickness = i2533[14]
  i2532.strikethrough = i2533[15]
  i2532.strikethroughThickness = i2533[16]
  i2532.TabWidth = i2533[17]
  i2532.Padding = i2533[18]
  i2532.AtlasWidth = i2533[19]
  i2532.AtlasHeight = i2533[20]
  return i2532
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2536 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2537 = data
  i2536.id = i2537[0]
  i2536.x = i2537[1]
  i2536.y = i2537[2]
  i2536.width = i2537[3]
  i2536.height = i2537[4]
  i2536.xOffset = i2537[5]
  i2536.yOffset = i2537[6]
  i2536.xAdvance = i2537[7]
  i2536.scale = i2537[8]
  return i2536
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.KerningTable' )
  var i2539 = data
  var i2541 = i2539[0]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.KerningPair', i2541[i + 0]));
  }
  i2538.kerningPairs = i2540
  return i2538
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2544 = root || request.c( 'TMPro.KerningPair' )
  var i2545 = data
  i2544.xOffset = i2545[0]
  i2544.m_FirstGlyph = i2545[1]
  i2544.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2545[2], i2544.m_FirstGlyphAdjustments)
  i2544.m_SecondGlyph = i2545[3]
  i2544.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2545[4], i2544.m_SecondGlyphAdjustments)
  i2544.m_IgnoreSpacingAdjustments = !!i2545[5]
  return i2544
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2547 = data
  i2546.m_FaceIndex = i2547[0]
  i2546.m_FamilyName = i2547[1]
  i2546.m_StyleName = i2547[2]
  i2546.m_PointSize = i2547[3]
  i2546.m_Scale = i2547[4]
  i2546.m_UnitsPerEM = i2547[5]
  i2546.m_LineHeight = i2547[6]
  i2546.m_AscentLine = i2547[7]
  i2546.m_CapLine = i2547[8]
  i2546.m_MeanLine = i2547[9]
  i2546.m_Baseline = i2547[10]
  i2546.m_DescentLine = i2547[11]
  i2546.m_SuperscriptOffset = i2547[12]
  i2546.m_SuperscriptSize = i2547[13]
  i2546.m_SubscriptOffset = i2547[14]
  i2546.m_SubscriptSize = i2547[15]
  i2546.m_UnderlineOffset = i2547[16]
  i2546.m_UnderlineThickness = i2547[17]
  i2546.m_StrikethroughOffset = i2547[18]
  i2546.m_StrikethroughThickness = i2547[19]
  i2546.m_TabWidth = i2547[20]
  return i2546
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_Settings' )
  var i2549 = data
  i2548.assetVersion = i2549[0]
  i2548.m_TextWrappingMode = i2549[1]
  i2548.m_enableKerning = !!i2549[2]
  var i2551 = i2549[3]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(i2551[i + 0]);
  }
  i2548.m_ActiveFontFeatures = i2550
  i2548.m_enableExtraPadding = !!i2549[4]
  i2548.m_enableTintAllSprites = !!i2549[5]
  i2548.m_enableParseEscapeCharacters = !!i2549[6]
  i2548.m_EnableRaycastTarget = !!i2549[7]
  i2548.m_GetFontFeaturesAtRuntime = !!i2549[8]
  i2548.m_missingGlyphCharacter = i2549[9]
  i2548.m_ClearDynamicDataOnBuild = !!i2549[10]
  i2548.m_warningsDisabled = !!i2549[11]
  request.r(i2549[12], i2549[13], 0, i2548, 'm_defaultFontAsset')
  i2548.m_defaultFontAssetPath = i2549[14]
  i2548.m_defaultFontSize = i2549[15]
  i2548.m_defaultAutoSizeMinRatio = i2549[16]
  i2548.m_defaultAutoSizeMaxRatio = i2549[17]
  i2548.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2549[18], i2549[19] )
  i2548.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2549[20], i2549[21] )
  i2548.m_autoSizeTextContainer = !!i2549[22]
  i2548.m_IsTextObjectScaleStatic = !!i2549[23]
  var i2553 = i2549[24]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 1, i2552, '')
  }
  i2548.m_fallbackFontAssets = i2552
  i2548.m_matchMaterialPreset = !!i2549[25]
  i2548.m_HideSubTextObjects = !!i2549[26]
  request.r(i2549[27], i2549[28], 0, i2548, 'm_defaultSpriteAsset')
  i2548.m_defaultSpriteAssetPath = i2549[29]
  i2548.m_enableEmojiSupport = !!i2549[30]
  i2548.m_MissingCharacterSpriteUnicode = i2549[31]
  var i2555 = i2549[32]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 1, i2554, '')
  }
  i2548.m_EmojiFallbackTextAssets = i2554
  i2548.m_defaultColorGradientPresetsPath = i2549[33]
  request.r(i2549[34], i2549[35], 0, i2548, 'm_defaultStyleSheet')
  i2548.m_StyleSheetsResourcePath = i2549[36]
  request.r(i2549[37], i2549[38], 0, i2548, 'm_leadingCharacters')
  request.r(i2549[39], i2549[40], 0, i2548, 'm_followingCharacters')
  i2548.m_UseModernHangulLineBreakingRules = !!i2549[41]
  return i2548
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'spriteSheet')
  var i2561 = i2559[2]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.TMP_Sprite', i2561[i + 0]));
  }
  i2558.spriteInfoList = i2560
  var i2563 = i2559[3]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 1, i2562, '')
  }
  i2558.fallbackSpriteAssets = i2562
  var i2565 = i2559[4]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('TMPro.TMP_SpriteCharacter', i2565[i + 0]));
  }
  i2558.m_SpriteCharacterTable = i2564
  var i2567 = i2559[5]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('TMPro.TMP_SpriteGlyph', i2567[i + 0]));
  }
  i2558.m_GlyphTable = i2566
  i2558.m_Version = i2559[6]
  i2558.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2559[7], i2558.m_FaceInfo)
  request.r(i2559[8], i2559[9], 0, i2558, 'm_Material')
  return i2558
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.hashCode = i2571[1]
  i2570.unicode = i2571[2]
  i2570.pivot = new pc.Vec2( i2571[3], i2571[4] )
  request.r(i2571[5], i2571[6], 0, i2570, 'sprite')
  i2570.id = i2571[7]
  i2570.x = i2571[8]
  i2570.y = i2571[9]
  i2570.width = i2571[10]
  i2570.height = i2571[11]
  i2570.xOffset = i2571[12]
  i2570.yOffset = i2571[13]
  i2570.xAdvance = i2571[14]
  i2570.scale = i2571[15]
  return i2570
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2577 = data
  i2576.m_Name = i2577[0]
  i2576.m_ElementType = i2577[1]
  i2576.m_Unicode = i2577[2]
  i2576.m_GlyphIndex = i2577[3]
  i2576.m_Scale = i2577[4]
  return i2576
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'sprite')
  i2580.m_Index = i2581[2]
  i2580.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2581[3], i2580.m_Metrics)
  i2580.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2581[4], i2580.m_GlyphRect)
  i2580.m_Scale = i2581[5]
  i2580.m_AtlasIndex = i2581[6]
  i2580.m_ClassDefinitionType = i2581[7]
  return i2580
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2583 = data
  var i2585 = i2583[0]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.TMP_Style', i2585[i + 0]));
  }
  i2582.m_StyleList = i2584
  return i2582
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.TMP_Style' )
  var i2589 = data
  i2588.m_Name = i2589[0]
  i2588.m_HashCode = i2589[1]
  i2588.m_OpeningDefinition = i2589[2]
  i2588.m_ClosingDefinition = i2589[3]
  i2588.m_OpeningTagArray = i2589[4]
  i2588.m_ClosingTagArray = i2589[5]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2593[i + 0]) );
  }
  i2590.files = i2592
  i2590.componentToPrefabIds = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2597 = data
  i2596.path = i2597[0]
  request.r(i2597[1], i2597[2], 0, i2596, 'unityObject')
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2599 = data
  var i2601 = i2599[0]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2601[i + 0]) );
  }
  i2598.scriptsExecutionOrder = i2600
  var i2603 = i2599[1]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2603[i + 0]) );
  }
  i2598.sortingLayers = i2602
  var i2605 = i2599[2]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2605[i + 0]) );
  }
  i2598.cullingLayers = i2604
  i2598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2599[3], i2598.timeSettings)
  i2598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2599[4], i2598.physicsSettings)
  i2598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2599[5], i2598.physics2DSettings)
  i2598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2599[6], i2598.qualitySettings)
  i2598.enableRealtimeShadows = !!i2599[7]
  i2598.enableAutoInstancing = !!i2599[8]
  i2598.enableStaticBatching = !!i2599[9]
  i2598.enableDynamicBatching = !!i2599[10]
  i2598.lightmapEncodingQuality = i2599[11]
  i2598.desiredColorSpace = i2599[12]
  var i2607 = i2599[13]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2598.allTags = i2606
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.value = i2611[1]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2615 = data
  i2614.id = i2615[0]
  i2614.name = i2615[1]
  i2614.value = i2615[2]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2619 = data
  i2618.id = i2619[0]
  i2618.name = i2619[1]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2621 = data
  i2620.fixedDeltaTime = i2621[0]
  i2620.maximumDeltaTime = i2621[1]
  i2620.timeScale = i2621[2]
  i2620.maximumParticleTimestep = i2621[3]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2623 = data
  i2622.gravity = new pc.Vec3( i2623[0], i2623[1], i2623[2] )
  i2622.defaultSolverIterations = i2623[3]
  i2622.bounceThreshold = i2623[4]
  i2622.autoSyncTransforms = !!i2623[5]
  i2622.autoSimulation = !!i2623[6]
  var i2625 = i2623[7]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2625[i + 0]) );
  }
  i2622.collisionMatrix = i2624
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2629 = data
  i2628.enabled = !!i2629[0]
  i2628.layerId = i2629[1]
  i2628.otherLayerId = i2629[2]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'material')
  i2630.gravity = new pc.Vec2( i2631[2], i2631[3] )
  i2630.positionIterations = i2631[4]
  i2630.velocityIterations = i2631[5]
  i2630.velocityThreshold = i2631[6]
  i2630.maxLinearCorrection = i2631[7]
  i2630.maxAngularCorrection = i2631[8]
  i2630.maxTranslationSpeed = i2631[9]
  i2630.maxRotationSpeed = i2631[10]
  i2630.baumgarteScale = i2631[11]
  i2630.baumgarteTOIScale = i2631[12]
  i2630.timeToSleep = i2631[13]
  i2630.linearSleepTolerance = i2631[14]
  i2630.angularSleepTolerance = i2631[15]
  i2630.defaultContactOffset = i2631[16]
  i2630.autoSimulation = !!i2631[17]
  i2630.queriesHitTriggers = !!i2631[18]
  i2630.queriesStartInColliders = !!i2631[19]
  i2630.callbacksOnDisable = !!i2631[20]
  i2630.reuseCollisionCallbacks = !!i2631[21]
  i2630.autoSyncTransforms = !!i2631[22]
  var i2633 = i2631[23]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2633[i + 0]) );
  }
  i2630.collisionMatrix = i2632
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2637 = data
  i2636.enabled = !!i2637[0]
  i2636.layerId = i2637[1]
  i2636.otherLayerId = i2637[2]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2639 = data
  var i2641 = i2639[0]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2641[i + 0]) );
  }
  i2638.qualityLevels = i2640
  var i2643 = i2639[1]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( i2643[i + 0] );
  }
  i2638.names = i2642
  i2638.shadows = i2639[2]
  i2638.anisotropicFiltering = i2639[3]
  i2638.antiAliasing = i2639[4]
  i2638.lodBias = i2639[5]
  i2638.shadowCascades = i2639[6]
  i2638.shadowDistance = i2639[7]
  i2638.shadowmaskMode = i2639[8]
  i2638.shadowProjection = i2639[9]
  i2638.shadowResolution = i2639[10]
  i2638.softParticles = !!i2639[11]
  i2638.softVegetation = !!i2639[12]
  i2638.activeColorSpace = i2639[13]
  i2638.desiredColorSpace = i2639[14]
  i2638.masterTextureLimit = i2639[15]
  i2638.maxQueuedFrames = i2639[16]
  i2638.particleRaycastBudget = i2639[17]
  i2638.pixelLightCount = i2639[18]
  i2638.realtimeReflectionProbes = !!i2639[19]
  i2638.shadowCascade2Split = i2639[20]
  i2638.shadowCascade4Split = new pc.Vec3( i2639[21], i2639[22], i2639[23] )
  i2638.streamingMipmapsActive = !!i2639[24]
  i2638.vSyncCount = i2639[25]
  i2638.asyncUploadBufferSize = i2639[26]
  i2638.asyncUploadTimeSlice = i2639[27]
  i2638.billboardsFaceCameraPosition = !!i2639[28]
  i2638.shadowNearPlaneOffset = i2639[29]
  i2638.streamingMipmapsMemoryBudget = i2639[30]
  i2638.maximumLODLevel = i2639[31]
  i2638.streamingMipmapsAddAllCameras = !!i2639[32]
  i2638.streamingMipmapsMaxLevelReduction = i2639[33]
  i2638.streamingMipmapsRenderersPerFrame = i2639[34]
  i2638.resolutionScalingFixedDPIFactor = i2639[35]
  i2638.streamingMipmapsMaxFileIORequests = i2639[36]
  i2638.currentQualityLevel = i2639[37]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2649 = data
  i2648.weight = i2649[0]
  i2648.vertices = i2649[1]
  i2648.normals = i2649[2]
  i2648.tangents = i2649[3]
  return i2648
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2651 = data
  i2650.m_XCoordinate = i2651[0]
  i2650.m_YCoordinate = i2651[1]
  return i2650
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2653 = data
  i2652.m_XPositionAdjustment = i2653[0]
  i2652.m_YPositionAdjustment = i2653[1]
  return i2652
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2655 = data
  i2654.xPlacement = i2655[0]
  i2654.yPlacement = i2655[1]
  i2654.xAdvance = i2655[2]
  i2654.yAdvance = i2655[3]
  return i2654
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[40],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[82],"83":[84],"85":[84],"20":[19],"5":[2],"33":[9],"86":[2],"87":[88],"89":[43],"90":[20],"91":[19],"92":[82,19],"26":[19,27],"93":[19],"94":[27,19],"95":[82],"96":[27,19],"97":[19],"98":[99],"100":[99],"101":[99],"102":[103],"104":[19],"105":[19],"23":[20],"25":[27,19],"106":[19],"22":[20],"107":[19],"108":[19],"109":[19],"110":[19],"111":[19],"112":[19],"113":[19],"114":[19],"115":[19],"116":[27,19],"117":[19],"118":[19],"119":[19],"120":[19],"121":[27,19],"122":[19],"123":[43],"124":[43],"44":[43],"125":[43],"126":[2],"127":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AutoCameraFit","UnityEngine.Transform","InputManager","CurtainManager","UnityEngine.SpriteRenderer","HandHintMmanager","ItemController","UnityEngine.GameObject","UnityEngine.Animator","GameManager","ItemManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ProgressBarUI","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","AnimColorController","PlaySound","PlaySoundOnEnable","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.SkinnedMeshRenderer","ItemGraphic","ItemMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_TrickyTwist";

Deserializers.lunaInitializationTime = "06/11/2026 02:10:32";

Deserializers.lunaDaysRunning = "0.4";

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

Deserializers.buildID = "12eedbf8-356c-4bcd-a02d-95614b1254ac";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

