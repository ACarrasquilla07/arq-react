import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StoreTodo from "../../context/todo";
import reducers from "../../reducers/todo";
import TodoList from "../../components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

/**
 * usar la libreria Enzyme para buscar los elementos de son cargados
 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
 * 
 * como se levanta un contexto de react para poder cargar sus estados??
 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/mount.html
 * 
 * como se simula los eventos de un elemento
 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
 */

test("<TodoList /> #display", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = () => {};
  const list = mount(
    <StoreTodo.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </StoreTodo.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(list.find("li").first().html()).toEqual(
    '<li class="list-group-item">a<button class="float-right btn btn-danger btn-sm" style="margin-left: 10px;">Complete</button></li>'
  );
  //TODO: verificar que el ultimo elemento este completado
  //expect(list.find("li").last().....
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  const list = mount(
    <StoreTodo.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </StoreTodo.Provider>
  );

   //TODO:  hacer uso del simulador del click, para los 3 casos
   //list.find("button")...

  expect(dispatch.mock.calls.length).toBe(3);
});

test("<TodoList /> #completeMutates", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = action => {
   /*TODO: usar el reducer. Ej: state =  ????*/
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

  //TODO: validar para ...toBe(2);
  //TODO: validar para ...toEqual(["a", "b"]);
});
