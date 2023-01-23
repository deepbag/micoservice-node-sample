const express = require("express");
const app = express();

app.get("/get_all", async (req, res) => {
  try {
    return res.send({ message: "employes success" });
  } catch (error) {
    return res.send({ message: "employes error" });
  }
});

app.get("/response_before_complete_process", async (req, res) => {
  try {
    res.send({ message: "Your request is processing please wait!" });
    for (let i = 0; i < 5000; i++) {
      console.log("running in background");
    }
    console.log("DONE");
  } catch (error) {
    return res.send({ message: "employes error" });
  }
});

app.listen(4001, () => {
  console.log("RUNNING IN 4001 EMPLOYEE");
});
