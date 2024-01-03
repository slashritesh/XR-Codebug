import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import React from 'react'
import ArModel from '../components/ArModel'
import  Model  from '../components/Scene'

const ARexperience = () => {
  return (
    <div>
        <ARButton />
        <Canvas>
            <XR>
                <ArModel />
                <Model />
            </XR>
        </Canvas>
    </div>
  )
}

export default ARexperience