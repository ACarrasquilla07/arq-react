import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../context/global';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => <BrowserRouter><Todo /></BrowserRouter>;
