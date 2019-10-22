import React, { useContext, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';

import reducers from '../reducers/global';
import Context from './context';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TopBar from '../components/TopBar';
import Login from '../components/Login';

export default () => {
  const globalStore = useContext(Context);
  const [state, dispatch] = useReducer(reducers, globalStore);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <TopBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/list" component={TodoList} />
        <Route path="/todoform" component={TodoForm} />
      </Switch>
    </Context.Provider>
  );
};
