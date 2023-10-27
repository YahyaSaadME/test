const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require("path")
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve a basic HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Set up Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events
  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(5000, () => {
  console.log('Server listening on port 3000');
});
