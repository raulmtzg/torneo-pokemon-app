import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { TorneoPokemonApp } from './TorneoPokemonApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <TorneoPokemonApp />
    </BrowserRouter>
  // </React.StrictMode>,
)
