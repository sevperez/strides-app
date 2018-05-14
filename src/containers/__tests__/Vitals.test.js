import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Vitals } from "../Vitals";

Enzyme.configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  const vitals = shallow(<Vitals isFetching={false} runs={{}}/>);
});
