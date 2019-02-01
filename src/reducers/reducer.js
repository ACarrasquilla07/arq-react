export default function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      //TODO: descomentar la siguiente linea para resolver el problema del reset
      //return action.payload;
      return null;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}