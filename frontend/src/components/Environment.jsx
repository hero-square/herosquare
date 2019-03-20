import React from 'react';
import EnvironmentLarge from './EnvironmentLarge';
import EnvironmentSmall from './EnvironmentSmall';
import { Redirect } from 'react-router-dom';

const Environment = props => {
  const [smallScreen, useSmallScreen] = useState('false');
  const { match, isLoggedIn } = this.props;

  if (!isLoggedIn) return <Redirect to="/" />;

  return (
    <>
      {smallScreen ? (
        <EnvironmentSmall match={match} />
      ) : (
        <EnvironmentLarge match={match} />
      )}
    </>
  );
};

export default Environment;
