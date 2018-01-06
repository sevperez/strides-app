import React from "react";

const RunItem = (props) => {
  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateStr = new Date(props.runs.date).toLocaleDateString("en-US", dateOptions);
  const date = dateStr.split(" ").slice(1).join(" ");
  const day = dateStr.split(", ")[0];
  const timeMin = Math.floor(props.runs.seconds / 60);
  const timeSec = String(props.runs.seconds % 60).padStart(2, "0");
  const pace = props.runs.seconds / props.runs.distance;
  const paceMin = Math.floor(pace / 60);
  const paceSec = String(Math.floor(pace % 60)).padStart(2, "0");
  
  return (
    <tr>
      <td>{date}</td>
      <td>{day}</td>
      <td>{`${timeMin}:${timeSec}`}</td>
      <td>{props.runs.distance.toFixed(2)}</td>
      <td>{`${paceMin}:${paceSec}`}</td>
    </tr>
  );
};

export default RunItem;