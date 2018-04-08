import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "./TodoList";

describe("<TodoList />", () => {
  it("renders the entire list of items in shallow mode", () => {
    const items = [
      { id: 1, title: "foo", completed: false },
      { id: 2, title: "bar", completed: true }
    ];
    const wrapper = shallow(<TodoList items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
