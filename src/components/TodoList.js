import React, {
 useContext, useEffect, useState, useCallback 
} from 'react';
import { GlobalContext } from '../context/context';
import TodoHeader from './TodoHeader';
import TodoConsumer from '../api/TodoConsumer';

const TodoList = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [isResult, setIsResult] = useState(null);

  function handleComplete(item) {
    const data = { ...item, complete: true };
    TodoConsumer.update(data, (status) => {
      dispatch({ type: 'COMPLETE', payload: status.item.id });
    });
  }


  useEffect(() => {
    TodoConsumer.getAll((status) => {
      setIsResult(status.isResult);
      if (status.isResult === 'success') {
        dispatch({ type: 'SET_TODO', payload: status.data });
      }
    });
  }, [state.todo]);

  return <>{
    {
      success: <List handleComplete={handleComplete} state={state} />,
      error: <div className="alert alert-dark">Error in the request</div>,
      null: <div>Loading</div>,
    }[isResult]
  }</>;
};

function heander(state) {
  const pluralize = (count) => (count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`);

  return state.todos.length === 0 ? (
    <h4>Yay! All todos are done! Take a rest!</h4>
  ) : (
    <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
  );
}

const List = ({ state, handleComplete }) => (
<div className="row">
  <div className="col-md-12">
    <div className="row">
      <div className="col-md-12">
        <br />
        {heander(state)}
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group" data-testid="all-list">
          {state.todos.map(t => (
            <li key={t.id} className="list-group-item" >
              {t.item}
              <button
                className="float-right btn btn-danger btn-sm"
                style={{ marginLeft: 10 }}
                onClick={() => handleComplete(t)}
              >
                Complete
            </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
);

export default TodoList;
