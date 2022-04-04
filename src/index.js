import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Bar from './Bar'

ReactDOM.render(
  <React.StrictMode>
    <Bar/>
    <SignUp />
  </React.StrictMode>,
  document.getElementById('root')
);