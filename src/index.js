import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import icon from './assets/images/profile-circle.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title="Hardik Gehlot";
const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = icon;
document.head.appendChild(link);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
