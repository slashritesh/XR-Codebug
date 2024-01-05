import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";



const Demon = () => {
    const { scene, animations } = useGLTF("/models/Demon.gltf");
    const { actions } = useAnimations(animations, scene);
    useEffect(()=>{
        actions.Flying_Idle.play()
    })
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[7, 5, -17]}>
        <primitive object={scene} />
    </mesh>
    </>
  )
}

export default Demon