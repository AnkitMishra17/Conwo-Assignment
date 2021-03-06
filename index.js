const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const transporter = require("./controllers/mailcontroller");
const schedule = require("node-schedule");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

let REMINDERS = [];

app.post("/api/add", (req, res) => {
  let { email, t1, t2 } = req.body;
  console.log(req.body);
  let mailOptions = {
    from: "9917103025@mail.jiit.ac.in",
    to: email,
    subject: "Reminder Alert.",
    html: `<p>Hi! It's time to leave if you want to reach your destination</p>`,
  };
  REMINDERS.push(
    schedule.scheduleJob(`${t2} ${t1} * * *`, function () {
      console.log(`This job is scheduled for the email: ${email}`);

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
  );
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
