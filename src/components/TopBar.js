import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <ul className="top-bar">
    <img src="https://www.tuya.com.co/sites/all/themes/tuya/assets/images/pre-home/logo_tuya.svg" className="img-responsive logo-top-bat" alt="img 1" />
    <Link to="/">
      <li><span>Home</span></li>
    </Link>
    <Link to="/todoform">
      <li><span>Add</span></li>
    </Link>
    <Link to="/list">
      <li><span>Lista</span></li>
    </Link>
    <Link to="/login">
      <li><span>Registrarme</span></li>
    </Link>
  </ul>
);

export default TopBar;
