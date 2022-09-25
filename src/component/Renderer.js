import { Canvas } from '@react-three/fiber'
import { Sky, Environment } from '@react-three/drei'
import Model from './Model'

function Renderer () {
  return (
    <div className="w-screen h-screen">
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} camera={{ position: [0, 0, -1], fov: 25 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment files="model/background/background.hdr" />
        <Model />
        <Sky />
      </Canvas>
    </div>
  )
}

export default Renderer
