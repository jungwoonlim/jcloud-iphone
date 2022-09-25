import { useState } from "react";
import Home from "./layout/Home";
import Renderer from "./component/Renderer";

function App() {
  const [model, setModel] = useState('iPhone')

  const updateModel = (item) => {
    setModel(item)
  }

  return (
    <>
      <Home
        model={model}
        updateModel={updateModel}
      />
      <Renderer model={model} />
    </>
  );
}

export default App
