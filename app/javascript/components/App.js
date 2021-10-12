import React from "react";
import PropTypes from "prop-types";
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Hello from "./Hello";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {"Home!"} } />
          <Route path="/hello" render={() => <Hello greeting="Friend" />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
