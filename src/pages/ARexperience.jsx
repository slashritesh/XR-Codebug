import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import React from 'react'
import Scene  from '../components/Scene'
import { OrbitControls } from '@react-three/drei'
import Demon from '../components/Demon'
import DragonEvolved from '../components/DragonEvolved'
import Tribal from '../components/Tribal'
import GhostSkull from '../components/GhostSkull'
import Goleling from '../components/Goleling'
import Pigeon from '../components/Pigeon'
import Ninja from '../components/Ninja'

const ARexperience = () => {
  return (
    <div className='h-screen'>
        <ARButton />
        <Canvas>
            <XR>
              <ambientLight intensity={0.2} />
              <OrbitControls />
              <Demon />
              <DragonEvolved />
              <Tribal />
              <GhostSkull />
              <Goleling />
              <Pigeon />
              {/* <Ninja  /> */}
            </XR>
        </Canvas>
    </div>
  )
}

export default ARexperience