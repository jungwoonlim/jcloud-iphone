import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loading } from "./components/Loading";
import { Renderer } from "./components/Renderer";
import { MainContainer } from "./components/MainContainer";

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        gl={{
          logarithmicDepthBuffer: true,
          antialias: true,
        }}
        camera={{
          position: [0, -0.75, 20],
          fov: 25,
        }}
        shadows
      >
        <Renderer />
      </Canvas>
      <MainContainer />
    </Suspense>
  );
};
