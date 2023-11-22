/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 
import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';
import { useEffect } from 'react';
import { LoginButton } from '../Components/LoginButton';


export function Embed() {
  const { channel } = useParams();
  let embed: any;
  
  function getChannel() {
    return channel || 'twitch';
  }
  
  function initPage() {
    const options = {
      width: 350,
      height: 650,
      channel: getChannel(),
      parent: getParent()
    };
  
    embed = new Twitch.Embed('twitch-embed', options);
    
    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      const player = embed.getPlayer();
      player.setQuality('160p30');
      player.setVolume(0.05);
    });
  }
  
  
  useEffect(() => {
    initPage();
  }, []);

  return(
    <main>
      <div id="twitch-embed"></div>
      <LoginButton />
    </main>
  );
}