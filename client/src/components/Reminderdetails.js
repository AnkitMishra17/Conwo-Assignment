import React, { memo } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

function Reminderdetails(props) {
  const { reminderDetails } = props;
  const { time } = props;
  let combineddetails = reminderDetails.map((ele, idx) => {
    return ele.concat(time[idx]);
  });
  const details = combineddetails.map((ele, idx) => {
    let msg;
    if (ele[2] === " ") {
      msg = `Destination Out of Bounds according to MAP API for (${ele[1]})`;
    } else {
      msg = `[${ele[0]}] - Requested MAP API for (${ele[1]}), Email scheduled at [${ele[2]}:${ele[3]}] `;
    }
    return (
      <SnackbarContent
        key={idx}
        message={msg}
        style={{
          margin: "10px",
          padding: "15px",
          borderRadius: "20px",
          backgroundColor: "#1DB954",
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "17px",
        }}
      />
    );
  });
  return (
    <div className="Details">
      {reminderDetails.length ? <h1>REMINDER DETAILS:</h1> : ""}
      {details}
    </div>
  );
}

export default memo(Reminderdetails);
