import React, { useState } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/hamburger.css';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

// contains Routes
import list from './routesList';

//change this to be better later

const App = props => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="App">
      <header className="App__header">
        {window.innerWidth < '800px' ? <div>hi</div> : <img className="App__logo" src={logo} alt="logo" />}
        <h2 className="App__title"> HeroSquare </h2>
      </header>
      <Router>
        <div className="App__wrapper">
          <Menu list={list} isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={`App__container ${
              isOpen ? 'App__container--open' : 'App__container--closed'
            }`}>
            <Switch>
              {list.map(el => (
                <Route
                  exact
                  path={`${el.path}`}
                  component={el.component}
                  render={el.render}
                />
              ))}
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
