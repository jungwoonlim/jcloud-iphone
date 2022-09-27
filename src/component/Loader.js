import { useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'
import classNames from 'classnames'

function Loader ({ isLoading }) {
  const { progress } = useProgress()

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        isLoading()
      }, 1000)
    }
  }, [isLoading, progress])

  return (
    <Html
      wrapperClass={classNames({
        'fade-out': progress === 100,
      })}
      center
    >
      <span className="text-white text-xl">
        { parseInt(progress, 10) }%
      </span>
    </Html>
  )
}

export default Loader
