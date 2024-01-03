import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Vector3 } from 'three'

const ArModel = () => {
  return (
    <>
        <OrbitControls />
        <ambientLight />
        <mesh position={[0,0,0]} >
            <boxGeometry />
            <meshStandardMaterial color="blue" />
        </mesh>
    </>
  )
}

export default ArModel