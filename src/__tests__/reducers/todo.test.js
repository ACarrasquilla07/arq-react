import reducers from "../../reducers/todo";

test("adds todo", async () => {
  const state = { todos: ["a"] };
  const newState = reducers(state, { type: "ADD_TODO", payload: "b" });

  expect(newState.todos).toEqual(["a", "b"]);
});

test("completes todo", async () => {
  const state = { todos: ["a", "b"] };
  const newState = reducers(state, { type: "COMPLETE", payload: "b" });

  expect(newState.todos).toEqual(["a"]);
});
