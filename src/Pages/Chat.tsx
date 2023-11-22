import { LoginButton } from '../Components/LoginButton';
import { ChatIframe } from '../Components/ChatIframe';


export function Chat() {
  return (
    <main>
      <ChatIframe />
      <LoginButton />
    </main>
  );
}