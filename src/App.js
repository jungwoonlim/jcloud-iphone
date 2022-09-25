import { useState } from "react";
import Home from "./layout/Home";
import Renderer from "./component/Renderer";

function App() {
  const [model, setModel] = useState('iPhone')
  const [loading, setLoading] = useState(false)

  const updateModel = (item) => {
    setModel(item)
  }

  const isLoading = () => {
    setLoading(true)
  } 

  return (
    <>
      {loading && (
        <Home
          model={model}
          updateModel={updateModel}
        />
      )}
      <Renderer
        model={model}
        isLoading={isLoading}
      />
    </>
  );
}

export default App
