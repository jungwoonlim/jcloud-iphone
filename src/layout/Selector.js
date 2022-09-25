import { useState } from 'react'
import { iphone, iphonePro } from '../static/const.js'

function Selector () {
  const [model, setModel] = useState('iphone')

  const selectColor = () => {
    if (model === 'iphone') {
      return (
        <div className="flex gap-5 p-2 w-full lg:w-2/5 items-end">
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphone.blue.src }
              alt={ iphone.blue.label }
            />
            <p className="text-center text-xs">Blue</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphone.purple.src }
              alt={ iphone.purple.label }
            />
            <p className="text-center text-xs">Purple</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphone.midNight.src }
              alt={ iphone.midNight.label }
            />
            <p className="text-center text-xs">Midnight</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphone.starLight.src }
              alt={ iphone.starLight.label }
            />
            <p className="text-center text-xs">Starlight</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphone.red.src }
              alt={ iphone.red.label }
            />
            <p className="text-center text-xs">Red</p>
          </div>
        </div>
      )
    }

    if (model === 'iphonePro') {
      return (
        <div className="flex gap-5 p-2 w-full lg:w-2/5 items-end">
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphonePro.deepPurple.src }
              alt={ iphonePro.deepPurple.label }
            />
            <p className="text-center text-xs">Deep Purple</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphonePro.gold.src }
              alt={ iphonePro.gold.label }
            />
            <p className="text-center text-xs">Gold</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphonePro.silver.src }
              alt={ iphonePro.silver.label }
            />
            <p className="text-center text-xs">Silver</p>
          </div>
          <div className="w-16 flex flex-col gap-2">
            <img
              src={ iphonePro.spaceBlack.src }
              alt={ iphonePro.spaceBlack.label }
            />
            <p className="text-center text-xs">Space Black</p>
          </div>
        </div>
      )
    }

    return <></>
  }

  const selectModel = () => {
    return (
      <div className="flex gap-5 p-2 w-full lg:w-1/6 justify-start lg:justify-end">
        <div className="flex flex-col gap-2 w-12 md:w-16 justify-end">
          <img
            src={ iphone.base.src }
            alt={ iphone.base.label }
          />
          <p className="text-center mx-auto text-xs whitespace-nowrap">iPhone</p>
        </div>
        <div className="flex flex-col gap-2 w-12 md:w-16 justify-end">
          <img
            src={ iphonePro.base.src }
            alt={ iphonePro.base.label }
          />
          <p className="text-center mx-auto text-xs whitespace-nowrap">iPhone Pro</p>
        </div>
      </div>
    )
  }


  return (
    <div className="absolute w-full left-0 bottom-0">
      <div className="p-5 flex flex-col justify-between lg:flex-row">
        { selectColor() }
        { selectModel() }
      </div>
    </div>
  )
}

export default Selector
