
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LiveChat } from './Pages/LiveChat';
import { Chat } from './Pages/Chat';
import { Live } from './Pages/Live';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
