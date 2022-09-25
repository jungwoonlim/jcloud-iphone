import { useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'

function Loader (props) {
  const { progress, total } = useProgress()
  const { isLoading } = props

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        isLoading()
      }, 1000)
    }
  }, [isLoading, progress, total])

  return (
    <Html
      wrapperClas="fade-out"
      center
    >
      <span className="text-white text-xl">{ parseInt(progress, 10) }%</span>
    </Html>
  )
}

export default Loader
