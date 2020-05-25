import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toto from './App';
import * as serviceWorker from './serviceWorker';

// Cette commande permet de convertir le composant App (qui contient toute notre application)
// en éléments du DOM et de les insérer dans la <div id="root" />
ReactDOM.render(
  <React.StrictMode>
    <Toto />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
