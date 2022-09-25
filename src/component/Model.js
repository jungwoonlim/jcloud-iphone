import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const gltf = useLoader(GLTFLoader, '/model/iphone-14-pro/scene.gltf')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} position={[0, -0.05, -0.25]} />
    </Suspense>
  )
}

export default Model
