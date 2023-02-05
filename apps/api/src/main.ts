/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { Ticket } from '@react-mono-tickets-app/data'

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const tickets: Ticket[] = [
  { id: 1, title: "Fix skype" },
  { id: 2, title: "Fix battery" },
]

app.get('/api/tickets', (req, res) => {
  res.send(tickets);
});

app.post('/api/tickets', (req, res) => {
  const id = Math.floor(Math.random() * 100);
  tickets.push({id, title: `Ticket random ${id}`});
  res.send(tickets);
})

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
