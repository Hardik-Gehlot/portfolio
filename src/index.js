import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title="Hardik Gehlot";
const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = process.env.PUBLIC_URL + "/profile-circle.png";
document.head.appendChild(link);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
