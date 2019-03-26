import React, { useState } from 'react';
import Menu from './Menu';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

// contains Routes
import list from './routes';

const EnvironmentLarge = props => {
  const { match, userInfo } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="App__wrapper">
        <Menu
          list={list}
          isOpen={isOpen}
          name={userInfo.name}
          picture={userInfo.picture}
          setIsOpen={setIsOpen}
        />
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
