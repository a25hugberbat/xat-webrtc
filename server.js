import express from 'express';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 20200;

app.use(express.static(fileURLToPath(new URL('./dist', import.meta.url))));