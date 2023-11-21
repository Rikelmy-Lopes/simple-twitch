/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
// @ts-nocheck 

import { useEffect } from 'react';

function App() {
  let player: any;

  function getChannelName() {
    const url = new URL(window.location.href);

    return url.pathname.split('/').pop() || 'twitch';
  }

  function initPlayer() {
    const parents = JSON.parse(import.meta.env.VITE_PARENT);
    const options = {
      width: 400,
      height: 300,
      channel: getChannelName(),
      parent: parents,
      quality: '160p30'
    };

    if (!player) {
      player = new Twitch.Player('twitch-player', options);
    }

  }


  useEffect(() => {
    initPlayer();
  }, []);


  return (
    <main>
      <div id='twitch-player'></div>
    </main>
  );
}

export default App;
