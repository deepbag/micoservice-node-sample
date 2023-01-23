const express = require("express");
const app = express();

app.get("/get_all", async (req, res) => {
  try {
    return res.send({ message: "management success" });
  } catch (error) {
    return res.send({ message: "management error" });
  }
});

app.listen(4002, () => {
  console.log("RUNNING IN 4002 MANAGEMENT");
});
