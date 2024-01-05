import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";


const Tribal = () => {
    const { scene, animations } = useGLTF("/models/Tribal.gltf");
    const { actions } = useAnimations(animations, scene);
    useEffect(()=>{
        actions.Flying_Idle.play()
    })
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[9, -1, -8]}>
        <primitive object={scene} />
      </mesh>
    </>
  )
}

export default Tribal