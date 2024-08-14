import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { NextMatchProvider } from './contexts/NextMatchContext.js';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <NextMatchProvider>
        <App />
      </NextMatchProvider>
    </Router>
  </React.StrictMode>,
)
