const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, FROM BRANCH 3!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
      message: err.message,
      stack: err.stack
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
