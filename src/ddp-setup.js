const DDP = require("ddp.js");

const options = {
    endpoint: "ws://localhost:3000/websocket",
    SocketConstructor: WebSocket
};
const ddp = new DDP(options);

ddp.connect();

ddp.on("connected", () => {
    console.log("Connected");

});
