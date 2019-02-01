import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StoreTodo from "../../context/todo";
import TodoForm from "../../components/TodoForm";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Hacer uso de los mock
 * 
 * @see https://jestjs.io/docs/en/mock-functions.html
 * @see https://jestjs.io/docs/en/expect#expectanything
 * como se simula los eventos de un elemento
 * @see https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
 */

test("<TodoForm /> #addTodo", async () => {
  const dispatch = jest.fn();
  const action = { type: "ADD_TODO", payload: "a new todo" };
  const form = mount(
    //TODO: agregar el valor del contexto, el dispatch (mock => jest.fn())
    <StoreTodo.Provider /**value=....*/>
      <TodoForm />
    </StoreTodo.Provider>
  );

  form.find("input").simulate("change", { target: { value: "a new todo" } });
  //TODO: simular el click para el boton (form.find("button"))

  //TODO: determinar si fue llamado el despatch con la accion, usar el metodo .toBeCalledWith(action)
  // ejemplo expect(mock).toBeCalledWith(expect.anything()); donde mock es un jest.fn()

});
