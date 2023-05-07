import { useLottie } from 'lottie-react';
import { useProgress } from '@react-three/drei';
import animationData from '../assets/loading.json'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    animationData,
  };

  const { View } = useLottie(defaultOptions);
  const { progress } = useProgress();

  return (
    <div className='loading'>
      { View }
      <p className='font-sm'>포트폴리오 정보를 불러오고 있어요. {Math.floor(progress)}%</p>
      <span className='font-sm'>불러오는 데 시간이 좀 걸릴 수 있어요.</span>
    </div>
  );
};
