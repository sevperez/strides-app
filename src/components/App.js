import React from "react";
import RunTable from "../containers/RunTable";
import NewRunForm from "../containers/NewRunForm";
import Vitals from "../containers/Vitals";

const App = () => {
  return (
    <div className="container py-3">
      <Vitals />
      <NewRunForm />
      <RunTable />
    </div>
  );
};

export default App;
