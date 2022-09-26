import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import useDeepCompareEffect from 'use-deep-compare-effect'

function Model({ model }) {
  const ref = useRef()
  const modelUrl = model === 'iPhone'
    ? '/model/iphone-14/scene.gltf'
    : '/model/iphone-14-pro/scene.gltf'

  const { scene } = useLoader(GLTFLoader, modelUrl)
  useFrame(() => ref.current.rotation.y += 0.01)
  useDeepCompareEffect(() => {
    if (model !== 'iPhone') {
      scene.scale.set(30, 30, 30)
      scene.position.set(0, -2.5, 0)
    }
  }, [model, scene])

  return (
    <mesh ref={ ref } position={ [0, 0, 0] } >
      <primitive object={ scene } position={ [0, 0, 0] } />
    </mesh>
  )
}

export default Model
