
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Chat } from './Pages/Chat';
import { Live } from './Pages/Live';
import { Embed } from './Pages/Embed';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
