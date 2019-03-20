import React, { useState, useEffect } from 'react';
import EnvironmentLarge from './EnvironmentLarge';
import EnvironmentSmall from './EnvironmentSmall';
import { Redirect } from 'react-router-dom';

const Environment = props => {
  if (!isLoggedIn) return <Redirect to="/" />;

  const [smallScreen, useSmallScreen] = useState(false);
  const [userInfo, useUserInfo] = useState({});
  const { match, isLoggedIn } = props;

  useEffect(() => {
    // api call for user data
    useUserInfo({
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
  });

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
