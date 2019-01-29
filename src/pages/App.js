
import React, { useContext, useReducer } from "react";
import { usePersistedContext, usePersistedReducer } from "../utils/usePersist";
import StoreTodo from "../context/todo";
import reducers from "../reducers/todo";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default () => {
    const globalStore = usePersistedContext(useContext(StoreTodo), "state");

    const [state, dispatch] = usePersistedReducer(
      useReducer(reducers, globalStore),
      "state" 
    );
  
    return (
      <StoreTodo.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </StoreTodo.Provider>
    );
  }