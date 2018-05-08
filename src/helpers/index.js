// HELPERS - index.js

export const getDateInfo = (date) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const dayOptions = { weekday: "long" };
  
  if (typeof date === "string") {
    date = new Date(date);
  }
  
  return {
    dateString: date.toLocaleDateString("en-US", dateOptions),
    dayString: date.toLocaleDateString("en-US", dayOptions),
  };
};

export const secondsToTimeString = seconds => {
  if (seconds >= 3600) {
    const timeHr = String(Math.floor(seconds / 60 / 60)).padStart(2, "0");
    const timeMin = String(Math.floor(seconds / 60 % 60)).padStart(2, "0");
    const timeSec = String(seconds % 60).padStart(2, "0");
    
    return `${timeHr}:${timeMin}:${timeSec}`;
  }
  const timeMin = String(Math.floor(seconds / 60)).padStart(2, "0");
  const timeSec = String(seconds % 60).padStart(2, "0");
  
  return `${timeMin}:${timeSec}`;
};
