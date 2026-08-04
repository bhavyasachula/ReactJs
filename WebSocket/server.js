const {WebSocketServer,WebSocket} = require('ws');
const express = require('express');
const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({server:httpServer});

app.get("/",(req,res)=>{
    res.send("hello")
})
wss.on("connection",(ws)=>{
    //whenever there is a connection control should reach here!
    ws.on("message",(data,isBinary)=>{
        wss.clients.forEach((client)=>{
            client.send(data,{binary:isBinary})
        })
        console.log("recieved %s",data);
    })
    
    ws.send("hi from client 1");
})