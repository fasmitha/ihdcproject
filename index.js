import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forms from './Forms';
import HomePage from './HomePage';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/form" element={<Forms />}/>
        <Route path="/app" element={<App />}/>
      </Routes>
    </BrowserRouter>
);
