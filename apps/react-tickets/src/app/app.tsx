// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import { Ticket } from '@react-mono-tickets-app/data'
import { TicketList } from '@react-mono-tickets-app/ticket-list'

export function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch("/api/tickets").then(r => r.json()).then(r => setTickets(r));
  }, []);

  const addTicket = () => {
    fetch("/api/tickets", { method: "post" }).then(r => r.json()).then(r => setTickets(r));
  }

  return (
    <>
      <h1>Tickets</h1>
      <TicketList tickets={tickets} />
      <button id="add-ticket" onClick={addTicket}>
        Add Ticket
      </button>
    </>
  );
}

export default App;
