const express = require("express");
const path = require("path");
require('dotenv').config({path: __dirname + './../.env'});
const app = express();
const api = require("./routes/api");

app.use("/api", api);


let port = process.env.PORT || 3000;


console.log("NODE_ENV is", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
}

app.listen(port, () => console.log(`Listening on port ${port}`));