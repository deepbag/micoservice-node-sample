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
    setTimeout(() => {
      console.log("START");
      for (let i = 0; i < 20000; i++) {
        if (i === 19999) {
          console.log("RUNNING IN BACKGROUND");
        }
      }
      console.log("DONE");
    }, 3000);
  } catch (error) {
    return res.send({ message: "employes error" });
  }
});

app.listen(4001, () => {
  console.log("RUNNING IN 4001 EMPLOYEE");
});
