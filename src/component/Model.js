import { useRef, Suspense } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import useDeepCompareEffect from 'use-deep-compare-effect'

function Model(props) {
  const ref = useRef()
  const { model } = props

  const modelUrl = model === 'iPhone'
    ? '/model/iphone-14/scene.gltf'
    : '/model/iphone-14-pro/scene.gltf'

  const { scene } = useLoader(GLTFLoader, modelUrl)
  useDeepCompareEffect(() => {
    if (model === 'iPhone') {
      scene.scale.set(0.03, 0.03, 0.03)
      scene.position.set(0, 0.025, 0)
    }
  }, [model, scene])

  useFrame(() => ref.current.rotation.y += 0.01)

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
