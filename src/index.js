import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, BrowserRouter } from 'react-router-dom'
import {LoginFormComponent} from './components/LoginForm';
import {RegistrationComponent} from './components/RegistrationForm'
import {MainComponent} from './containers/Main/Main';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
