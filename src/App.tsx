
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { VideoChat } from './Pages/VideoChat';
import { Chat } from './Pages/Chat';
import { Video } from './Pages/Video';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={VideoChat} />
        <Route path='/:channel' Component={VideoChat} />
        <Route path='/chat' Component={Chat} />
        <Route path='/chat/:channel' Component={Chat} />
        <Route path='/video' Component={Video} />
        <Route path='/video/:channel' Component={Video} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
