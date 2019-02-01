import React, { useReducer } from 'react';
import reducer from "../reducers/reducer";
/**
 * Una alternativa para el manejo de estados de react es usar el Reducer, 
 * que internamente gestiona los estados globales
 * 
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 * 
 */

export default () => {

  const initStatus = { count: 0 };
  const actionIncrement = { type: 'increment' };
  const actionDecrement = { type: 'decrement' };
  const actionReset = { type: 'reset', payload: initStatus };

  const [state, dispatch] = useReducer(reducer, initStatus
    //, action por defecto, usar actionReset
    );

  return (
    <>
      Count: {/*TODO: usar el estado count (state.count) para visualizar el resultado*/}

      <button
        onClick={() => dispatch(actionReset)}>
        Reset
      </button>
      <button onClick={() => {
        //TODO: Hacer uso del dispatch para incrementar el valor
      }}>+</button>
      <button onClick={() => {
        //TODO: Hacer uso del dispatch para decrementar el valor
      }}>-</button>
    </>
  );
}