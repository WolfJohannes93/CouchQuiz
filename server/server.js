import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

let teams = [];

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('teams_update', teams);

  socket.on('team_join', (teamName) => {
    teams.push(teamName);
    io.emit('teams_update', teams);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

