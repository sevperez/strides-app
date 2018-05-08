import React from "react";
import { getDateInfo, secondsToTimeString  } from "../helpers";

const App = ({ runs }) => {
  const runIds = runs ? Object.keys(runs) : [];
  
  return (
    <div>
      <h3>My Runs</h3>
      <ul>
        { 
          runIds.map(id => (
            <li key={id}>
              <span>Date: {getDateInfo(runs[id].date).dateString}; </span>
              <span>Day: {getDateInfo(runs[id].date).dayString}; </span>
              <span>Distance: {runs[id].distance}; </span>
              <span>Time: {secondsToTimeString(runs[id].seconds)}; </span>
              <span>Notes: {runs[id].notes}; </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;
