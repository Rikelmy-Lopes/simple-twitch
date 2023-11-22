
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LiveChat } from './Pages/LiveChat';
import { Chat } from './Pages/Chat';
import { Live } from './Pages/Live';
import { Embed } from './Pages/Embed';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LiveChat} />
        <Route path='/:channel' Component={LiveChat} />
        <Route path='/chat' Component={Chat} />
        <Route path='/chat/:channel' Component={Chat} />
        <Route path='/live' Component={Live} />
        <Route path='/live/:channel' Component={Live} />
        <Route path='/embed' Component={Embed} />
        <Route path='/embed/:channel' Component={Embed} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
