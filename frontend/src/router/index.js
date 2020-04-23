import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from '../pages/Main';
import NewExtension from '../pages/NewExtension';
import DetailsExtension from '../pages/DetailsExtension';

const history = createBrowserHistory();

export default function Router() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/new/extension" component={NewExtension} />
        <Route
          path="/details/extension/:extension"
          component={DetailsExtension}
        />
      </Switch>
    </BrowserRouter>
  );
}
