import React from "react";
import RunList from "./RunList";
import NewRunForm from "./NewRunForm";

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
