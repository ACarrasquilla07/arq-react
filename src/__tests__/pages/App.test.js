import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoList from "../../components/TodoList";
import App from "../../pages/App";

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


test("<App />", async () => {
  const app = mount(<App />);

  expect(app.find(TodoList)).toHaveLength(1);
  //TODO: determinar si existe el componente TodoForm haciendo uso de otro expect
});
