
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Chat } from './pages/Chat';
import { Live } from './pages/Live';
import { Embed } from './pages/Embed';
import { EmbedTest } from './pages/EmbedTest';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Embed} />
        <Route path='/:channel' Component={Embed} />
        <Route path='/live' Component={Live} />
        <Route path='/live/:channel' Component={Live} />
        <Route path='/chat' Component={Chat} />
        <Route path='/chat/:channel' Component={Chat} />

        <Route path='/test' Component={EmbedTest} />
        <Route path='/test/:channel' Component={EmbedTest} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
