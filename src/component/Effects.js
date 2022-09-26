import { useLoader } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import { effectOption } from '../static/const'

export function Effects() {
  const texture = useLoader(LUTCubeLoader, 'model/background/F-6800-STD.cube')

  return (
    <EffectComposer disableNormalPass>
      <SSR { ...effectOption } />
      <Bloom
        luminanceThreshold={ 0.2 }
        luminanceSmoothing={ 0 }
        intensity={ 1.75 }
        mipmapBlur
      />
      <LUT lut={ texture } />
    </EffectComposer>
  )
}
