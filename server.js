const WebSocket = require('ws');
const express = require('express');
const http = require('http');

// Set up Express and HTTP server
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static('public'));

wss.on('connection', (socket) => {
    console.log("New client connected");

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        socket.send(`Server says: ${message}`);
    });

    socket.on('close', () => {
        console.log("Client disconnected");
    });
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
