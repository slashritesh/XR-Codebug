import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import ArModel from '../components/ArModel'
import React from 'react'
import Scene  from '../components/Scene'
import { OrbitControls } from '@react-three/drei'

const ARexperience = () => {
  return (
    <div className='h-screen'>
        <ARButton />
        <Canvas>
            <XR>
              <ambientLight intensity={0.7} />
              <OrbitControls />
              <Scene />

            </XR>
        </Canvas>
    </div>
  )
}

export default ARexperience