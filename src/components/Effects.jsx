import { useLoader } from '@react-three/fiber';
import { EffectComposer, Bloom, LUT } from '@react-three/postprocessing';
import { LUTCubeLoader } from 'postprocessing';

export const Effects = () => {
  const texture = useLoader(LUTCubeLoader, 'background/F-6800-STD.cube')

  return (
    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={ 0.2 }
        luminanceSmoothing={ 0 }
        intensity={ 1.75 }
        mipmapBlur
      />
      <LUT lut={ texture } />
    </EffectComposer>
  );
};
