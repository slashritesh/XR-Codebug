import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

const GhostSkull = () => {
    const { scene, animations } = useGLTF("/models/Armabee_Evolved.gltf");
    const { actions } = useAnimations(animations, scene);
    useEffect(()=>{
        actions.Flying_Idle.play()
    })
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[-8, 0, -8]}>
        <primitive object={scene} />
      </mesh>
    </>
  )
}

export default GhostSkull