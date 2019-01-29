import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import App from "../../pages/App";

Enzyme.configure({ adapter: new Adapter() });

test("<App />", async () => {
  const app = mount(<App />);

  expect(app.find(TodoList)).toHaveLength(1);
  expect(app.find(TodoForm)).toHaveLength(1);
});
