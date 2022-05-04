const { Server } = require("socket.io");

let socketUrlString =
  process.env.NODE_ENV === "production"
    ? "https://rewind-omega.vercel.app"
    : "http://localhost:3000";

const io = new Server({
  cors: {
    origin: socketUrlString,
  },
});

console.log(`Running in ${process.env.NODE_ENV} mode`);
console.log("Listening on port 3001");
console.log(`We will accept connections from ${socketUrlString}`);

io.on("connection", (socket) => {
  socket.on("questions", (question) => {
    io.emit("questions", question);
    console.log("IN", new Date(), question.question);
  });
  socket.on("speeds", (speed) => {
    io.emit("speeds", speed);
    console.log("IN", new Date(), speed);
  });
});

io.listen(3001);
