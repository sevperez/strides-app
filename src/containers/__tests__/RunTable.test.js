import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { RunTable } from "../RunTable";

Enzyme.configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  const tempFetchRuns = (user) => {};
  const tempRequestRuns = () => {};
  const app = shallow(
    <RunTable
      sortedRunIds={[]} 
      fetchRuns={tempFetchRuns}
      requestRuns={tempRequestRuns}
    />
  );
});
