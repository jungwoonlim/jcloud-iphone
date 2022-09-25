import { Html, useProgress } from '@react-three/drei'
import { useEffect } from 'react'

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
    <Html center>
      <span className="text-white">{ parseInt(progress, 10) }%</span>
    </Html>
  )
}

export default Loader
