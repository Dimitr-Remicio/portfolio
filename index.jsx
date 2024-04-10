import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx';
import './other.scss'
// import Error from './error/Working.jsx';

import Headers from './src/features/head/head.jsx';
// style's ∇

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App/>
    
    {/* <Error/> */}
    <Headers />
  </React.StrictMode>,
)
