import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(to left, #536976, #292e49)",
          borderRadius: "50px",
          padding: "8px 0px",
        }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            color="inherit"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Conwo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
