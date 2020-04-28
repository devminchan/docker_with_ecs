const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello world2",
  });
});

app.get("/info", (req, res) => {
  const envExam = process.env.EXAMPLE || 'null'

  res.json({
    envExam
  });
});

app.listen(3000, () => {
  console.log("Server starting on port 3000");
});
