import React from "react";
import Errormsgs from "./Errormsgs";
import FormStyles from "./StyleComponents/StyleComponent";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Form(props) {
  const { formErrors, values, handleInputChange, addReminder } = props;
  const classes = FormStyles();
  return (
    <form className={classes.root} autoComplete="off">
      <Errormsgs errors={formErrors} />
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <h1>It's time to leave !</h1>
        <Grid item xs={12} className={classes.paper}>
          <TextField
            id="slatitude"
            type="text"
            label="source Lat"
            onChange={handleInputChange}
            value={values.slatitude}
            style={{ margin: "10px" }}
            variant="outlined"
          />
          <TextField
            id="slongitude"
            type="text"
            label="source Long"
            onChange={handleInputChange}
            value={values.slongitude}
            style={{ margin: "10px" }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <TextField
            id="dlatitude"
            type="text"
            label="Destination Lat"
            onChange={handleInputChange}
            value={values.dlatitude}
            style={{ margin: "10px" }}
            variant="outlined"
          />
          <TextField
            id="dlongitude"
            type="text"
            label="Destination Long"
            onChange={handleInputChange}
            value={values.dlongitude}
            style={{ margin: "10px" }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={handleInputChange}
            style={{ margin: "10px" }}
            value={values.email}
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            variant="outlined"
            onChange={handleInputChange}
            value={values.time}
            className={classes.textField}
            style={{ margin: "10px" }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <Button
            onClick={addReminder}
            variant="outlined"
            size="medium"
            color="primary"
          >
            Remind Me
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
