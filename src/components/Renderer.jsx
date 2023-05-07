import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Effects } from "./Effects";

export const Renderer = () => {
  const background = import.meta.env.BASE_URL + 'background/background.hdr';

  return (
    <>
      <color args={["#333333"]} attach="background" />
      <ambientLight />
      <pointLight position={ [10, 10, 10] } />
      <Environment files={background} />
      <Model />
      <OrbitControls
        enablePan={ false }
        enableZoom={ false }
        minPolarAngle={ Math.PI / 2.2 }
        maxPolarAngle={ Math.PI / 2.2 }
      />
      <Effects />
    </>
  )
};
