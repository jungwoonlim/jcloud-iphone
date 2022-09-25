import { useRef, Suspense } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const ref = useRef()
  const { scene } = useLoader(GLTFLoader, '/model/iphone-14-pro/scene.gltf')

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.001
    ref.current.rotation.y += 0.01
  })

  return (
    <Suspense fallback={null}>
      <mesh
        ref={ref}
        position={[0, 0, 0]}
      >
        <primitive object={scene} position={[0, -0.05, 0]} />
      </mesh>
    </Suspense>
  )
}

export default Model
