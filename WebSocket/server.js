const {WebSocketServer,WebSocket} = require('ws');
const express = require('express');
const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({server:httpServer});

app.get("/",(req,res)=>{
    res.send(`
    <html>
      <body>
        <input id="msg" placeholder="Type a message..." />
        <button onclick="send()">Send</button>
        <ul id="log"></ul>
        <script>
         const ws = new WebSocket('ws://' + location.host);
          ws.onmessage = e => {
            const li = document.createElement('li');
            li.textContent = e.data;
            document.getElementById('log').appendChild(li);
          };function send() {
            const input = document.getElementById('msg');
            ws.send(input.value);
            input.value = '';
          }
        </script>
      </body>
    </html>
  `)
})
wss.on("connection",(ws)=>{
    console.log("Client connected")
    //whenever there is a connection control should reach here!
    ws.on("message",(data,isBinary)=>{
        wss.clients.forEach((client)=>{
            client.send(data,{binary:isBinary})
        })
        console.log("recieved %s",data);
    })
    
    ws.send("hi from client 1");
})