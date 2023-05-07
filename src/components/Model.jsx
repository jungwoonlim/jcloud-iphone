import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const model = useLoader(GLTFLoader, import.meta.env.BASE_URL + 'iphone/scene.gltf');
  const modelRef = useRef();

  return (
    <mesh ref={modelRef} position={[0, 0, 0]}>
      <primitive object={model.scene} position={[0, 0, 0]} />
    </mesh>
  );
};

useGLTF.preload('/jcloud-iphone/');

export { Model };
