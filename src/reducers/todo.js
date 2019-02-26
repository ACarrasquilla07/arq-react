export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    case "SET_TODO":
      return {
        ...state,
        todos: action.payload.filter(t => !t.complete)
      };
    default:
      return state;
  }
}
