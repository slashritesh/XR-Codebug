
import * as THREE from "three"
import { OrbitControls, useTexture } from '@react-three/drei'
import React from 'react'

const TXVroom = () => {
    const map = useTexture("/world.jpg")    
  return (
    <>
    <OrbitControls />
    <mesh>
        <sphereGeometry args={[32,32,32]} />
        <meshStandardMaterial map={map} side={THREE.BackSide}/>
    </mesh>
    </>
  )
}

export default TXVroom