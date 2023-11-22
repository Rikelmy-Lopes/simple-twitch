/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';
import { LoginButton } from '../Components/LoginButton';
import { ChatIframe } from '../Components/ChatIframe';

export function LiveChat() {
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


  return (
    <main>
      <div id='twitch-player'></div>
      <ChatIframe />
      <LoginButton />
    </main>
  );
}

