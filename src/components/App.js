import React from "react";
import RunTable from "../containers/RunTable";
import NewRunForm from "../containers/NewRunForm";

const App = () => {
  return (
    <div>
      <h3>My Runs</h3>
      <NewRunForm />
      <RunTable />
    </div>
  );
};

export default App;
