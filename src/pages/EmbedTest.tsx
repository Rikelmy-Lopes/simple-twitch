/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 
import { useParams } from 'react-router-dom';
import { getParent, reloadPage, setPlayerConfig } from '../utils/utils';
import { useEffect, useState } from 'react';
import { LoginButton } from '../components/LoginButton';


export function EmbedTest() {
  const [isVisible, setIsVisible] = useState(true);
  const { channel } = useParams();
  const RELOAD_TIMEOUT = 10 * 60 * 1000; // 10 minutes
  let embed: any;
  let player: any;
  
  function getChannel() {
    return channel || 'twitch';
  }


  function initTwitch() {
    const options = {
      width: 350,
      height: 650,
      channel: getChannel(),
      parent: getParent(),
      layout: 'video-with-chat',
      theme: 'dark'
    };
  
    embed = new Twitch.Embed('twitch-embed', options);
    player = embed.getPlayer();
    setListeners(embed, player);
  }


  function setListeners(embed: any, player: any) {
    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      setPlayerConfig(player);
    });
      
    embed.addEventListener(Twitch.Embed.OFFLINE, () => {
      reloadPage(RELOAD_TIMEOUT);
    });
      
    embed.addEventListener(Twitch.Embed.ERROR, () => {
      reloadPage(RELOAD_TIMEOUT);
    });

  }
  
  
  useEffect(() => {
    initTwitch();
  }, []);


  useEffect(() => {
    return () => {
      embed.destroy();
    };
  }, []);


  return(
    <main>
      <input type="checkbox" defaultChecked onChange={() => setIsVisible(!isVisible)} />
      <div style={{ display: isVisible ? 'block' : 'none' }} id="twitch-embed"></div>
      <LoginButton />
    </main>
  );
}