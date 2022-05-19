"use strict";

var _require = require("socket.io"),
    Server = _require.Server;

var socketUrlString = process.env.NODE_ENV === "production" ? "https://rewind-omega.vercel.app" : "http://localhost:3000";
var io = new Server({
  cors: {
    origin: socketUrlString
  }
});
console.log("Running in ".concat(process.env.NODE_ENV, " mode"));
console.log("Listening on port 3001");
console.log("We will accept connections from ".concat(socketUrlString));
io.on("connection", function (socket) {
  socket.on("questions", function (question) {
    io.emit("questions", question);
    console.log("IN", new Date(), question.question);
  });
  socket.on("speeds", function (speed) {
    io.emit("speeds", speed);
    console.log("IN", new Date(), speed);
  });
});
io.listen(3001);