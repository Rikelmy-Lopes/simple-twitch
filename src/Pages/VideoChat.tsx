/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';

export function VideoChat() {
  const { channel } = useParams();
  let player: any;

  function getChannel() {
    return channel || 'twitch';
  }
  

  function initPlayer() {
    const options = {
      width: 400,
      height: 300,
      channel: getChannel(),
      parent: getParent(),
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
      <iframe src={`https://www.twitch.tv/embed/${getChannel()}/chat?parent=${getParent()}`}
        height="400"
        width="300">
      </iframe>
      <a className='link' target='_blank' href="https://www.twitch.tv/login" rel="noreferrer">
        Login
      </a>
    </main>
  );
}

