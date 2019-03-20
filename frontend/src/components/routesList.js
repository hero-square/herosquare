import React from 'react';
import NotFound from './NotFound';
import Authen from './Authen';
import Home from './Home';

//* add new routes here
const list = [
  {
    title: 'Home',
    path: 'home',
    render: props => <Home {...props} />,
  },
  {
    title: 'Calendar',
    path: 'calendar',
    render: props => <Authen {...props} />,
  },
  {
    title: 'Thing',
    path: 'thing',
    render: props => <NotFound {...props} />,
  },
];

export default list;
