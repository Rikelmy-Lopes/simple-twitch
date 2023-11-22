/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 

import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';
import { useEffect } from 'react';

export function Live() {
  const { channel } = useParams();
  let player: any;

  function getChannel() {
    return channel || 'twitch';
  }
  

  function initPlayer() {
    const options = {
      width: 350,
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

  return(
    <main>
      <div id='twitch-player'></div>
      <a className='link' target='_blank' href="https://www.twitch.tv/login" rel="noreferrer">
        Login
      </a>
    </main>
  );
}