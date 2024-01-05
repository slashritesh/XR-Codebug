import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

const Goleling = () => {
    const { scene, animations } = useGLTF("/models/Goleling.gltf");
    const { actions } = useAnimations(animations, scene);
    useEffect(()=>{
        actions.Flying_Idle.play()
    })
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[-4, 5, -15]}>
        <primitive object={scene} />
      </mesh>

    </>
  )
}

export default Goleling