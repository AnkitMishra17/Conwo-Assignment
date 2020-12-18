import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isLatLong from "validator/lib/isLatLong";
import trim from "validator/lib/trim";
import Axios from "axios";
import moment from "moment";
import Form from "./Form";
import Reminderdetails from "./Reminderdetails";
require("dotenv").config();

export default function Task() {
  const [values, setValues] = useState({
    slatitude: "",
    slongitude: "",
    dlatitude: "",
    dlongitude: "",
    email: "",
    time: "00:00",
  });
  // const initialstate = {
  //   slatitude: "",
  //   slongitude: "",
  //   dlatitude: "",
  //   dlongitude: "",
  //   email: "",
  //   time: "00:00",
  // };
  const KEY = "AIzaSyAW8v9wOOvEviACg4YbowQEQn0SLplfOJM";
  const [formErrors, setFormErrors] = useState({});
  const [reminderDetails, setreminderDetails] = useState([]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const validate = async () => {
    let { slatitude, slongitude, dlatitude, dlongitude, email } = values;
    slatitude = trim(slatitude);
    slongitude = trim(slongitude);
    dlatitude = trim(dlatitude);
    dlongitude = trim(dlongitude);
    let errors = {};
    if (!isLatLong(`${slatitude}, ${slongitude}`)) {
      errors.source = "Please enter valid source lat and long";
    }
    if (!isLatLong(`${dlatitude}, ${dlongitude}`)) {
      errors.destination = "Please enter valid destination lat and long";
    }
    if (!isEmail(email)) {
      errors.email = "Please enter a valid Email Address";
    }
    return errors;
  };
  const sendReminderData = async () => {
    const {
      slatitude,
      slongitude,
      dlatitude,
      dlongitude,
      email,
      time,
    } = values;
    // setValues(initialstate);
    try {
      const res = await Axios.get(
        `/maps/api/distancematrix/json?units=imperial&origins=${slatitude},${slongitude}&destinations=${dlatitude},${dlongitude}&key=${KEY}`
      );
      const { data } = await res;
      const { status } = data.rows[0].elements[0];
      console.log(data.rows[0].elements[0]);
      if (status === "OK") {
        let gettime = time.split(":");
        let hrs = parseInt(gettime[0]);
        let mins = parseInt(gettime[1]);
        let durationinsecs = data.rows[0].elements[0].duration.value;
        let duration = moment.duration(durationinsecs, "seconds");
        let dhours = duration._data.hours;
        let dmins = duration._data.minutes;
        const m = moment()
          .set({
            hour: hrs,
            minute: mins,
          })
          .subtract({
            hours: dhours,
            minutes: dmins,
          });
        let t1 = m.hour();
        let t2 = m.minutes();
        try {
          Axios.post("http://localhost:5000/api/add", {
            email,
            t1,
            t2,
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        throw new Error("This destination is out of bounds");
      }
    } catch (e) {
      alert(e);
    }
  };
  const addReminder = async (e) => {
    e.preventDefault();
    let data = await validate();
    if (Object.keys(data).length === 0) {
      setreminderDetails((result) => [...result, [values.time, values.email]]);
      setFormErrors({});
      sendReminderData();
    } else {
      setFormErrors(data);
    }
  };
  return (
    <div className="Container">
      <Form
        formErrors={formErrors}
        values={values}
        handleInputChange={handleInputChange}
        addReminder={addReminder}
      />
      <Reminderdetails reminderDetails={reminderDetails} />
    </div>
  );
}
