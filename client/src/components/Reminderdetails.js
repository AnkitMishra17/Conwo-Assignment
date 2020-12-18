import React, { memo } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

function Reminderdetails(props) {
  const { reminderDetails } = props;
  const details = reminderDetails.map((ele, idx) => {
    let msg = `[${ele[0]}] - Requested MAP API for (${ele[1]})`;
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
