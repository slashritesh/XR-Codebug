import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";


const Pigeon = () => {
    const { scene, animations } = useGLTF("/models/Pigeon.gltf");
    const { actions } = useAnimations(animations, scene);
    useEffect(()=>{
        actions.Flying_Idle.play()
    })
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[0, 3, -9]}>
        <primitive object={scene} />
    </mesh>
    </>
  )
}

export default Pigeon