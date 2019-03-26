import React, { useState, useEffect } from 'react';
import Headers from './Headers';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Menu from './Menu';
import Calendar from './Calendar';
import AddClassesContainer from './AddClassesContainer'

const Protected = props => {
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { authStatus, setAuthStatus, history } = props;

  //TODO check authentication when authstatus is updated
  useEffect(() => {
    if (!authStatus) history.push('/');
  }, [authStatus]);

  useEffect(() => {
    //TODO api call for user data
    //* temporary mock data
    setUserInfo({
      userID: 0,
      name: 'PersonMcPersonFace',
      classes: {
        0: {
          schoolID: 0,
          classID: 0,
          sectionID: 0,
          className: 'classyMcClassface',
          time: new Date(),
          professor: 'TeacheryMcTeacherFace',
        },
      },
      picture: 'https://s.hswstatic.com/gif/whiskers-sam.jpg',
    });
    return () => {};
  }, []);

  return (
    <>
      <Headers isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="App__wrapper">
        <Menu isOpen={isOpen} name={userInfo.name} picture={userInfo.picture} />
        <div
          className={`App__container ${
            isOpen ? 'App__container--open' : 'App__container--closed'
          }`}>
          <Switch>
            <Route
              path={`/home`}
              render={props => (
                <Home {...props} setAuthStatus={setAuthStatus} />
              )}
            />
            <Route
              path={`/calendar`}
              render={props => <Calendar userInfo={userInfo} {...props} />}
            />
            <Route path={`/addclasses`} render={props => <AddClassesContainer {...props} />} />
            <Route component={NotFound} />
            ))}
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Protected;
