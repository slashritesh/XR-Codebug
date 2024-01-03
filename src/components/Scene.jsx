import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

export default function Scene() {
  const { scene, animations } = useGLTF("/Dragon_Evolved.gltf");
  const { actions } = useAnimations(animations, scene);
  actions.Flying_Idle.play()
  return (<>
  <ambientLight intensity={0.7}/>
  <mesh position={[0,0,-8]}>
  <primitive object={scene}  />
  </mesh>
  </>)
}  
