import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from "react-dom";
import Root from "../Root";
import configureStore from "../../configureStore";

Enzyme.configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  const store = configureStore();
  const app = shallow(<Root store={store} />);
});
