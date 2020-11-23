import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routers from './routers/routers';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routers.map(v => (
        <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
