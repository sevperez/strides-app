// TESTS - view layer - Modal.test.js

import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Modal from "../Modal";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const modal = shallow(
    <Modal 
      handleClose={() => null}
    />
  );
});
