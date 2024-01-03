import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Scene() {
    const gltf = useLoader(GLTFLoader, '../assets/scene.gltf')
    return <primitive object={gltf.scene} />
}