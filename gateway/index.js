const gateway = require("fast-gateway");
const server = gateway({
  routes: [
    {
      prefix: "/employes",
      target: "http://localhost:4001",
    },
    {
      prefix: "/management",
      target: "http://localhost:4002",
    },
  ],
});

server.get("/", (req, res) =>
  res.send({
    gateway: "runnning",
    routes: {
      "/employes": ["/get_all", "response_before_complete_process"],
      "/management": ["/get_all"],
    },
  })
);

server.start(4000);
console.log("RUNNING IN 4000 GATEWAY");
