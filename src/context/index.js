import React from "react";

// Initial Data
const Store = React.createContext({
  todos: [
    "Buy milk",
    "Some eggs",
    "Go to work"
  ]
});

export default Store;
