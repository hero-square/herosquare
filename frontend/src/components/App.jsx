import React, { useState } from 'react';
import '../style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Environment from './Environment';
import SignUp from './SignUp';
import RetrievePassword from './RetrievePassword';

const App = props => {
  // TODO: should check for cookies to determine login
  const [isLoggedIn, useIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => (
              <Login
                useIsLoggedIn={useIsLoggedIn}
                isLoggedIn={isLoggedIn}
                {...props}
              />
            )}
          />
          <Route path="/signup" component={'SignUp'} />
          <Route path="/retrievePassword" component={'RetrievePassword'} />
          <Route
            path="/:location"
            render={props => <Environment isLoggedIn={isLoggedIn} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
