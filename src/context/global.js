import React, { useContext, useReducer } from "react";

import reducers from "../reducers/todo";

import GlobalContext from "./context";
import TodoList from "../components/TodoList";
import TodoForm    from "../components/TodoForm";

export default () => {
  const globalStore = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducers, globalStore);
  return (
    <GlobalContext.Provider    value={{ state, dispatch }}>
         <TodoForm />
      <TodoList />
    </GlobalContext.Provider>
  );
};

