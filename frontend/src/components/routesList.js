import React from 'react'
import NotFound from './NotFound';
import Authen from './Authen';

const list = [
  {
    title: 'Calendar',
    path: '/calendar',
    component: Authen,
  },
  {
    title: 'Authen',
    path: '/',
    component: Authen,
  },
  {
    title: 'Thing',
    path: '/thing',
    render: props => <NotFound {...props} butt={true} />,
  },
];

export default list;
