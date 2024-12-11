// Connect to WebSocket server
const socket = new WebSocket('ws://localhost:8080');

// Handle connection open
socket.addEventListener('open', () => {
    console.log("Connected to server");
});

// Handle messages from the server
socket.addEventListener('message', (event) => {
    const output = document.getElementById('output');
    const message = document.createElement('p');
    message.textContent = event.data;
    output.appendChild(message);
});

// Send a message to the server when clicking the "Send" button
document.getElementById('send').addEventListener('click', () => {
    const input = document.getElementById('message');
    const message = input.value;
    socket.send(message);  // Send message to server
    input.value = '';  // Clear the input box
});

socket.addEventListener('error', (error) => {
    console.log(`WebSocket error: ${error}`);
});
