import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import Hello from './Hello';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route exact path="/" render={() => { 'Home!'; }} /> */}
          <Route exact path="/" render={() => <Hello />} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
