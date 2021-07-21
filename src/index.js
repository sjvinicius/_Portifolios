import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App'
import reportWebVitals from './reportWebVitals';
import { BrowseRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowseRouter>
    <Switch>
      <Route name='App' component={App}/>
      <Route name='Welcome' component={Welcome}/>
    </Switch>
  </BrowseRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
