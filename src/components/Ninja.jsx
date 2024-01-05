import React, { useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";



const Ninja = () => {
    const { scene, animations } = useGLTF("/models/Ninja.gltf");
    const { actions } = useAnimations(animations, scene);
    
  return (
    <>
    <ambientLight intensity={0.5} />
      <mesh position={[-5, 0, -17]}>
        <primitive object={scene} />
    </mesh>
    </>
  )
}

export default Ninja