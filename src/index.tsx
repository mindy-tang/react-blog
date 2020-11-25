import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routers from './routers/routers';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Switch>
      {routers.map(v => (
        <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
      ))}
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

