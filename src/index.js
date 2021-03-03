import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiService, { KineduServices } from './services/api.services';
import MilestonesContext from './context/MilestonesContext';
ApiService.init();
KineduServices.skills('physical')
ReactDOM.render(
  <React.StrictMode>
    <MilestonesContext>
      <App />

    </MilestonesContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
