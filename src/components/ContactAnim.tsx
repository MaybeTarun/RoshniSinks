import Lottie from 'lottie-react';
import animationData from '../assets/contact.json';

const LottieAnimation = () => {
  return (
    <div className="animation-container">
      <Lottie
        autoplay
        loop
        animationData={animationData}
        style={{ height: '200px', width: '200px' }}
      />
    </div>
  );
};

export default LottieAnimation;
