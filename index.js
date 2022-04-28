// const app = require("express")();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
// const port = process.env.PORT || 3001;

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
