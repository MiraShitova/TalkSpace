const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Віддаємо статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Події Socket.io
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Обробка повідомлень від клієнтів
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg); // Відправляємо повідомлення всім
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Запускаємо сервер
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
