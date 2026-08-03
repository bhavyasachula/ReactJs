const {WebSocketServer,WebSocket} = require('ws');
const express = require('express');
const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({server:httpServer});

wss.on("connection",(WebSocket))