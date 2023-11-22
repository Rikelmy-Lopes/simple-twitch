import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';

export function ChatIframe() {
  const { channel } = useParams();

  function getChannel() {
    return channel || 'twitch';
  }
    
  return(
    <iframe src={`https://www.twitch.tv/embed/${getChannel()}/chat?parent=${getParent()}`}
      height="450"
      width="350"
    >
    </iframe>
  );
}