const express = require("express");
const data = require("./data/data");
const app = express();
app.get("/api/notes", (req, res) => {
  res.json(data);
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running");
});
