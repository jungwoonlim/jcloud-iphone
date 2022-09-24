import { useState } from 'react'
import { iphone, iphonePro } from '../static/const.js'

function Selector () {
  const [model, setModel] = useState('iphone')

  const renderModel = () => {
    if (model === 'iphone') {
      return (
        <div className="flex gap-5 p-2 w-1/3">
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphone.blue.src } alt={ iphone.blue.label } />
            <p className="text-center text-xs">Blue</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphone.purple.src } alt={ iphone.purple.label } />
            <p className="text-center text-xs">Purple</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphone.midNight.src } alt={ iphone.midNight.label } />
            <p className="text-center text-xs">Midnight</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphone.starLight.src } alt={ iphone.starLight.label } />
            <p className="text-center text-xs">Starlight</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphone.red.src } alt={ iphone.red.label } />
            <p className="text-center text-xs">Red</p>
          </div>
        </div>
      )
    }
    if (model === 'iphonePro') {
      return (
        <div className="flex gap-5 p-2 w-1/3">
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphonePro.deepPurple.src } alt={ iphonePro.deepPurple.label } />
            <p className="text-center text-xs">Deep Purple</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphonePro.gold.src } alt={ iphonePro.gold.label } />
            <p className="text-center text-xs">Gold</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphonePro.silver.src } alt={ iphonePro.silver.label } />
            <p className="text-center text-xs">Silver</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <img className="w-4/5 mx-auto" src={ iphonePro.spaceBlack.src } alt={ iphonePro.spaceBlack.label } />
            <p className="text-center text-xs">Space Black</p>
          </div>
        </div>
      )
    }

    return <></>
  }


  return (
    <div className="absolute w-full left-0 bottom-0">
      <div className="p-5 flex justify-between">
        { renderModel() }
      </div>
    </div>
  )
}

export default Selector
