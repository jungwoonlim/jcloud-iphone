import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Effects } from './Effects'
import Model from './Model'
import Loader from './Loader'

function Renderer (props) {
  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{
          logarithmicDepthBuffer: true,
          antialias: false,
        }}
        camera={{
          position: [0, -0.75, 20],
          fov: 25,
        }}
      >
        <Suspense fallback={<Loader isLoading={props.isLoading} />}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Environment files="model/background/background.hdr" />
          <Model {...props} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Renderer
