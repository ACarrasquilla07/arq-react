
import React, { useContext } from "react";

import { usePersistedContext, usePersistedReducer } from "./utils/usePersist";
import Store from "../context";
import reducers from "../reducers";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default () => {
    const globalStore = usePersistedContext(useContext(Store), "state");

    const [state, dispatch] = usePersistedReducer(
      useReducer(reducers, globalStore),
      "state" 
    );
  
    return (
      <Store.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </Store.Provider>
    );
  }