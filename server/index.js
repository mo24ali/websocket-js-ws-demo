const WebSocket = require("ws");
const wss = new WebSocket.Server({port:8080});

wss.on("connection",(ws)=>{
    console.log("connection established");
    ws.on("message",(message)=>{
        wss.clients.forEach((client)=>{
            let revStr = message.toString().split("").reverse().join("");
            client.send(revStr);
        })
    })
    ws.on("close",()=> console.log("connection closed"));
    
})