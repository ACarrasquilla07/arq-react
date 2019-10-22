export default function reducer(state, action) {

  if (!action.type) {
    if (action.key instanceof Array) {
      // console.log('state', state.setIn(action.key, action.payload).toJS());
      return state.setIn(action.key, action.payload);
    }
    // console.log('state', state.set(action.key, action.payload).toJS());
    return state.set(action.key, action.payload);
  }

  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'COMPLETE':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case 'SET_TODO':
      return {
        ...state,
        todos: action.payload.filter((t) => !t.complete),
      };
    default:
      return state;
  }
}
