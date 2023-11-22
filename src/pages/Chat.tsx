import { LoginButton } from '../components/LoginButton';
import { ChatIframe } from '../components/ChatIframe';


export function Chat() {
  return (
    <main>
      <ChatIframe />
      <LoginButton />
    </main>
  );
}