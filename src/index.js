import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import Store from "./context";
import reducers from "./reducers";

import { usePersistedContext, usePersistedReducer } from "./utils/usePersist";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
