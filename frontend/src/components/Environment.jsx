import React, { useState, useEffect } from 'react';
import EnvironmentLarge from './EnvironmentLarge';
import EnvironmentSmall from './EnvironmentSmall';
import { Redirect } from 'react-router-dom';

const Environment = props => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { match, authStatus } = props;

  useEffect(() => {
    // api call for user data
    //* temporary mock data
    if (!authStatus) return <Redirect to="/" />;
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
      picture: '',
    });
    console.log('mount');
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <>
      {smallScreen ? (
        <EnvironmentSmall match={match} userInfo={userInfo} />
      ) : (
        <EnvironmentLarge match={match} userInfo={userInfo} />
      )}
    </>
  );
};

export default Environment;
