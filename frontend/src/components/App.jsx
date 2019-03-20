import React, { useState } from 'react';
import '../style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Login from './Login';
import Environment from './Environment';

//change this to be better later

const App = props => {
  const [isLoggedIn, useIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => <Login useIsLoggedIn={useIsLoggedIn} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/:location"
            render={() => <Environment isLoggedIn={isLoggedIn} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
