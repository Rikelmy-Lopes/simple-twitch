/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 

import { useParams } from 'react-router-dom';
import { getParent, setPlayerConfig } from '../utils/utils';
import { useEffect } from 'react';
import { LoginButton } from '../components/LoginButton';

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
    };

    if (!player) {
      player = new Twitch.Player('twitch-player', options);
      
      player.addEventListener(Twitch.Player.READY, () => {
        setPlayerConfig(player);
      });
    }

  }


  useEffect(() => {
    initPlayer();
  }, []);

  return(
    <main>
      <div id='twitch-player'></div>
      <LoginButton />
    </main>
  );
}