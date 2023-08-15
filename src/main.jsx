import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './components/home/actions/index.js';

import Headers from './features/head/head';
// style's ∇
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
    <Headers />
  </React.StrictMode>,
)
