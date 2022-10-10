import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ListProvider} from "./ListContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListProvider>
      <App  />
    </ListProvider>
  </React.StrictMode>
);
// wrapping our App in ListProvider so we can have access to context throughout our App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
