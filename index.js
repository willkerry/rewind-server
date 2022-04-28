const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log("Socket.io server listening on port 3001");

io.on("connection", (socket) => {
  socket.on("questions", (msg) => {
    io.emit("questions", msg);
    console.log(msg);
  });
});

io.listen(3001);
