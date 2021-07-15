const express = require("express");
var port = process.env.PORT || 3000;
const app = express();

///////////////////////////////////Requests Targetting////////////////////////
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const getTimestamp = date => ({
  unix: date.getTime(),
  local: date.toLocaleDateString('hi-IN',options),
  time: date.toTimeString()
});

app.route("/timestamp")
  .get(function (req, res) {
    let timestamp = getTimestamp(new Date());
    res.send(JSON.stringify(timestamp));
  });

////////////////////////////////Requests Targetting A Specific TimeStamp////////////////////////

app.route("/timestamp/:dateString")

  .get(function (req, res) {

    const dateString = req.url.split("/timestamp/")[1];
    if (dateString === undefined || dateString.trim() === "") {
      timestamp = getTimestamp(new Date());
    } else {
      const date = !isNaN(dateString) ?
        new Date(parseInt(dateString)) :
        new Date(dateString);

      if (!isNaN(date.getTime())) {
        timestamp = getTimestamp(date);
      } else {
        timestamp = {
          error: "invalid date"
        };
      }
    }

    res.send(JSON.stringify(timestamp));
  });

app.listen(port, function () {
  console.log("Server started on port: " + port);
});
