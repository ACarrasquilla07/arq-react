import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StoreTodo from "../../context/todo";
import reducers from "../../reducers/todo";
import TodoList from "../../components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> #display", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = () => {};
  const list = mount(
    <StoreTodo.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </StoreTodo.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual(
    '<li class="list-group-item">a<button class="float-right btn btn-danger btn-sm" style="margin-left: 10px;">Complete</button></li>'
  );
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual(
    '<li class="list-group-item">c<button class="float-right btn btn-danger btn-sm" style="margin-left: 10px;">Complete</button></li>'
  );
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  const list = mount(
    <StoreTodo.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </StoreTodo.Provider>
  );

  list.find("button").forEach(b => b.simulate("click"));
  expect(dispatch.mock.calls.length).toBe(3);
});

test("<TodoList /> #completeMutates", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = action => {
    state = reducers(state, action);
  };
  const list = mount(
    <StoreTodo.Provider value={{ state, dispatch }}>
      <TodoList />
    </StoreTodo.Provider>
  );

  await list
    .find("button")
    .last()
    .simulate("click");
  expect(state.todos.length).toBe(2);
  expect(state.todos).toEqual(["a", "b"]);
});
