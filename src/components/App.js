import React from "react";
import RunList from "../containers/RunList";
import NewRunForm from "../containers/NewRunForm";

const App = () => {
  return (
    <div>
      <h3>My Runs</h3>
      <NewRunForm />
      <RunList />
    </div>
  );
};

export default App;
