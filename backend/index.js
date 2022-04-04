const express = require("express");
const jsonFile = require("./story.json");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.get("/getTimeStories",  (req, res)=> {
  res.send(jsonFile);
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
