import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Hello from './Hello';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => { 'Home!'; }} />
          <Route path="/hello" render={() => <Hello greeting="Friend" />} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
