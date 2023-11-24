/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 
import { useParams } from 'react-router-dom';
import { getParent, setPlayerConfig } from '../utils/utils';
import { useEffect, useState } from 'react';
import { LoginButton } from '../components/LoginButton';
import { AudioOnly } from '../components/AudioOnly';


export function Embed() {
  const [isVisible, setIsVisible] = useState(true);
  const { channel } = useParams();
  const RELOAD_INTERVAL = 10 * 60 * 1000; // 10 minutes
  let embed: any;
  let player: any;
  let wakeLock: WakeLockSentinel | null = null;
  
  const getChannel = () => channel || 'twitch';

  const acquireWakeLock = async () => {
    if('wakeLock' in navigator){
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch(err) {
        alert('Erro ao solicitar o bloqueio de tela');
        console.log(err.name, err.message);
      }
    } else {
      alert('WakeLock não disponível');
    }
  };
  

  const rebuildTwitch = (timeout: number) => {
    setTimeout(() => {
      embed.destroy();
      initTwitch();
    }, timeout);
  };

  const setListeners = (embed: any, player: any) => {
    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      setPlayerConfig(player);
    });
      
    embed.addEventListener(Twitch.Embed.OFFLINE, () => {
      rebuildTwitch(RELOAD_INTERVAL);
    });
      
    embed.addEventListener(Twitch.Embed.ERROR, () => {
      rebuildTwitch(RELOAD_INTERVAL);
    });

    embed.addEventListener(Twitch.Embed.PLAYBACK_BLOCKED, () => {
      rebuildTwitch(RELOAD_INTERVAL);
    });
  };


  const initTwitch = () => {
    const options = {
      width: 350,
      height: 650,
      channel: getChannel(),
      parent: getParent(),
      layout: 'video-with-chat',
      theme: 'dark',
      muted: false,
      quality: '160p30',
    };
  
    embed = new Twitch.Embed('twitch-embed', options);
    player = embed.getPlayer();
    setListeners(embed, player);
  };


  const toggleVisibility = () => setIsVisible(!isVisible);
  

  useEffect(() => {
    initTwitch();
    acquireWakeLock();

    return () => {
      embed.destroy();
    };
  }, []);
  

  return(
    <main>
      <div className='toggle-hidden-card'>
        <label htmlFor='hide-twitch' >Ocultar Twitch?</label>
        <input id='hide-twitch' type="checkbox" onChange={toggleVisibility} />
      </div>
      <div style={{ display: isVisible ? 'block' : 'none' }} id="twitch-embed"></div>
      {
        !isVisible && <AudioOnly />
      }
      <LoginButton />
    </main>
  );
}