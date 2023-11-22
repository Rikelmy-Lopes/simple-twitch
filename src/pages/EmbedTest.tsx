/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck 
import { useParams } from 'react-router-dom';
import { getParent, setPlayerConfig } from '../utils/utils';
import { useEffect, useState } from 'react';
import { LoginButton } from '../components/LoginButton';


export function EmbedTest() {
  const [isVisible, setIsVisible] = useState(true);
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
      parent: getParent(),
      layout: 'video-with-chat',
      theme: 'dark'
    };
  
    embed = new Twitch.Embed('twitch-embed', options);
    
    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      const player = embed.getPlayer();
      setPlayerConfig(player);
    });
  }
  
  
  useEffect(() => {
    initPage();
  }, []);

  return(
    <main>
      <input type="checkbox" defaultChecked onChange={() => setIsVisible(!isVisible)} />
      <div style={{ display: isVisible ? 'block' : 'none' }} id="twitch-embed"></div>
      <LoginButton />
    </main>
  );
}