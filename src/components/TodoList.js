import React, { useContext } from "react";
import StoreTodo from "../context/todo";
import TodoHeader from "./TodoHeader";

export default () => {
  const { state, dispatch } = useContext(StoreTodo);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map(t => (
                <li key={t} className="list-group-item">
                  {t}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: t })}
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
}
