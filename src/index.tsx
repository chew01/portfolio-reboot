import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './font.css';
import './animations.css';
import App from './App';

const rootContainer = document.getElementById('root') as HTMLElement;
const root = createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
