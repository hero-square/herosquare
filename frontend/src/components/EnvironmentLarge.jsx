import React, { useState } from 'react';
import Menu from './Menu';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

// contains Routes
import list from './routesList';

const EnvironmentLarge = props => {
  const { match } = props;
  const [isOpen, setIsOpen] = useState(false);
  console.log(match.path)
  return (
    <>
      <Header />
      <div className="App__wrapper">
        <Menu list={list} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`App__container ${
            isOpen ? 'App__container--open' : 'App__container--closed'
          }`}>
          <Switch>
            {list.map(el => (
              <Route
                path={`/${el.path}`}
                render={el.render}
                component={el.component}
                key={uuidv4()}
              />
            ))}
          </Switch>
        </div>
      </div>
    </>
  );
};

export default EnvironmentLarge;
