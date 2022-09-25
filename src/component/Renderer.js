import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box (props) {
  const ref = useRef()
  const [hoverd, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hoverd ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Renderer () {
  return (
    <div className="absolute top-0 w-full h-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Renderer
