import React, { memo } from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={4} variant="filled" {...props} />;
}

function Errormsgs(props) {
  const { errors } = props;
  var msgs = Object.keys(errors).map(function (key, idx) {
    return (
      <Alert severity="warning" style={{ marginTop: "8px" }} key={idx}>
        {errors[key]}
      </Alert>
    );
  });
  return <div>{msgs}</div>;
}
export default memo(Errormsgs);
