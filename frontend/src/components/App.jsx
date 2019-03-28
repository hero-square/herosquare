import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Login from './Login';
import Protected from './Protected';
import Landing from './Landing';
import '../style/App.css';

library.add(fas, fab);

const App = props => {
  // TODO: should check for cookies/localstorage to determine login
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Landing}/>
          <Route
            path="/Login"
            exact={true}
            render={() => (
              <Login
                setAuthStatus={setAuthStatus}
                authStatus={authStatus}
                {...props}
              />
            )}
          />
          <Route
            path="/:location"
            render={props => <Protected authStatus={authStatus} setAuthStatus={setAuthStatus} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;