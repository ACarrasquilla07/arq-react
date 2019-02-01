import React, { useContext, useReducer } from "react";
import StoreTodo from "../context/todo";
import reducers from "../reducers/todo";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default () => {
    const globalStore = useContext(StoreTodo);
    const [state, dispatch] = useReducer(reducers, globalStore);
    
    return (
      <StoreTodo.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </StoreTodo.Provider>
    );
  }
