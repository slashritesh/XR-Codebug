import { Canvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import React from 'react'
import TXVroom from '../components/TXVroom'
import { Environment, OrbitControls } from '@react-three/drei'

const VRexperience = () => {
  return (
    <>
    <div className='vrroom'>
    <VRButton />
    <Canvas>
      <OrbitControls />
      {/* <Environment preset='sunset' /> */}
      <ambientLight intensity={0.6} />
      <XR>
        <TXVroom />
      </XR>
    </Canvas>
    </div>
    </>
  )
}

export default VRexperience