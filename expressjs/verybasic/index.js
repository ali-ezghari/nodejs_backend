const { server, DOMAIN, PORT } = require("./server.js");

server.listen(PORT, () =>
  console.log(`Server Running at http://${DOMAIN}:${PORT}`),
);
