
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Chat } from './pages/Chat';
import { Embed } from './pages/Embed';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Embed} />
        <Route path='/:channel' Component={Embed} />
        <Route path='/chat' Component={Chat} />
        <Route path='/chat/:channel' Component={Chat} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
