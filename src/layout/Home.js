import { useState } from 'react'
import { iphone, iphonePro } from '../static/const.js'
import logoSrc from '../assets/jCloud.svg'

const iphoneList = [
  iphone.blue,
  iphone.purple,
  iphone.midNight,
  iphone.starLight,
  iphone.red,
]

const iphoneProList = [
  iphonePro.deepPurple,
  iphonePro.gold,
  iphonePro.silver,
  iphonePro.spaceBlack,
]

function Home () {
  const [target, setTarget] = useState(iphone.blue)

  const ColorCard = ({ src, label, color, changeModel }) => {
    return (
      <div
        className="w-20 flex flex-col gap-2"
        onClick={() => setTarget(changeModel)}
      >
        <img
          src={ src }
          alt={ label }
        />
        <p className="text-center text-xs hidden sm:block">
          { color }
        </p>
      </div>
    )
  }

  const selectColor = () => {
    const itemList = target.model === 'iphone'
      ? iphoneList
      : iphoneProList

    return (
      <div className="flex gap-5 p-2 w-full lg:w-2/5 items-end">
        {itemList.map((item) => (
          <ColorCard
            key={item.label}
            { ...item }
            changeModel={item}
          />)
        )}
      </div>
    )
  }

  const ModelCard = ({ src, label, model, changeModel }) => {
    return (
      <div
        className="flex flex-col gap-2 w-16 md:w-16 justify-end hidden sm:block"
        onClick={() => setTarget(changeModel)}
      >
        <img
          src={ src }
          alt={ label }
        />
        <p className="text-center mx-auto text-xs whitespace-nowrap">
          { model }
        </p>
      </div>
    )
  }

  const selectModel = () => {
    return (
      <div className="flex gap-5 p-2 w-full lg:w-1/6 justify-start lg:justify-end">
        <ModelCard
          { ...iphone.base }
          changeModel={iphone.blue}
          />
        <ModelCard
          { ...iphonePro.base }
          changeModel={iphonePro.deepPurple}
        />
      </div>
    )
  }

  return (
    <>
      <div className="absolute w-screen top-0 px-5 flex justify-between text-white items-center z-10">
        <div className="name">
          { target.model }
        </div>
        <div className="Logo w-32">
          <img src={ logoSrc } alt="logo" />
        </div>
      </div>
      <div className="absolute w-full left-0 bottom-0 z-10 text-white">
        <div className="p-5 flex flex-col justify-between lg:flex-row">
          { selectColor() }
          { selectModel() }
        </div>
      </div>
    </>
  )
}

export default Home
