import React from "react";

// Initial Data
const Context = React.createContext({
  todos: [
    "Buy milk",
    "Some eggs",
    "Go to work"
  ]
});

export default Context;
