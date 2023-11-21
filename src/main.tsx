/* eslint-disable react/react-in-jsx-scope */

import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import {  BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' Component={App} />
  //     <Route path='/:channel' Component={App} />
  //   </Routes>
  // </BrowserRouter>
  <App />
);
