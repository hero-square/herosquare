import React, { useState} from 'react';
import '../style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Protected from './Protected';
import Landing from './Landing';

const App = props => {
  // TODO: should check for cookies/localstorage to determine login
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
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
            render={props => (
              <Protected
                authStatus={authStatus}
                setAuthStatus={setAuthStatus}
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
