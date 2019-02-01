import reducers from "../../reducers/todo";

test("adds todo", async () => {
  const state = { todos: ["a"] };
  const action = { type: "ADD_TODO", payload: "b" };

  const newState = reducers(state, action);

  expect(newState.todos).toEqual(["a", "b"]);
});

test("completes todo", async () => {
  const state = { todos: ["a", "b"] };
  const action = { type: "COMPLETE", payload: "b" };
  //TODO: realizar el test para el caso de  COMPLETE

});
