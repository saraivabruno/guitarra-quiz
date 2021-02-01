import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import loadingAnimation from './animations/loading.json';

export default function Loader() {
  return (
    <Player
      autoplay
      loop
      src={loadingAnimation}
      style={{ height: '300px', width: '300px' }}
    >
      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
  );
}
