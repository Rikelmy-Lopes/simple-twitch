import { useParams } from 'react-router-dom';
import { getParent } from '../Utils/utils';


export function Chat() {
  const { channel } = useParams();

  function getChannel() {
    return channel || 'twitch';
  }

  return (
    <main>
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