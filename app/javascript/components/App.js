import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import Greeting from './Greeting';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Greeting />} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
