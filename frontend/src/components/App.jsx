import React, { useState } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/hamburger.css';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Login from './Login';
import Environment from './Environment';

// contains Routes
import list from './routesList';

//change this to be better later

const App = props => {
  const [isLoggedIn, useIsLoggedIn] = useState('false');

  return (
    <div className="App">
      <Router>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => <Login useIsLoggedIn={useIsLoggedIn} />}
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
