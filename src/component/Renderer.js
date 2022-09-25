import { Canvas } from '@react-three/fiber'
import { Sky, Environment, OrbitControls } from '@react-three/drei'
import Model from './Model'

function Renderer () {
  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{
          logarithmicDepthBuffer: true,
          antialias: false,
        }}
        camera={{
          position: [0, -0.75, 0.25],
          fov: 25,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment files="model/background/background.hdr" />
        <Model />
        <Sky />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

export default Renderer
