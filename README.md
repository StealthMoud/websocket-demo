# WebSocket Learning Project

This project helps you learn how to use **WebSocket** for real-time communication between a client and server. It’s a simple application where a client can send a message to the server, and the server will respond back.

## What’s in the Project?

- **Server**: A WebSocket server built with **Node.js** and **Express**.
- **Client**: A basic HTML and JavaScript client to connect to the WebSocket server.
  
The goal of this project is to give you hands-on experience with WebSocket communication.

---

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/StealthMoud/websocket-demo.git
   cd websocket-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and visit `http://localhost:8080`.

---

## How It Works

### WebSocket Server (server.js)

The WebSocket server is built using the **ws** library. It listens for incoming WebSocket connections, handles incoming messages, and sends a response back to the client.

```javascript
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
```

### WebSocket Client (script.js)

The client connects to the WebSocket server, sends messages, and displays responses from the server.

```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log("Connected to server");
});

socket.addEventListener('message', (event) => {
    const output = document.getElementById('output');
    const message = document.createElement('p');
    message.textContent = event.data;
    output.appendChild(message);
});

document.getElementById('send').addEventListener('click', () => {
    const input = document.getElementById('message');
    const message = input.value;
    socket.send(message);
    input.value = ''; // Clear input box
});
```

---

## How to Use

1. Once the server is running, open `http://localhost:8080` in your browser.
2. Type a message in the input box and click "Send".
3. The server will respond, and the message will appear below the input box.

---

## Why WebSocket?

WebSocket is ideal for real-time communication because it allows for a persistent, open connection between the client and server. This makes it perfect for applications like chat systems, live updates, and multiplayer games.
