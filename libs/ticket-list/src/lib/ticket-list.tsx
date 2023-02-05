import React from 'react';
import styles from './ticket-list.module.scss';
import { Ticket } from '@react-mono-tickets-app/data';

/* eslint-disable-next-line */
export interface TicketListProps {
  tickets: Ticket[];
}

export function TicketList(props: TicketListProps) {
  return (
    <ul>
      {props.tickets.map(e => (
        <li className='ticket' key={e.id}>
          {e.title}
        </li>
      ))}
    </ul>
  );
}

export default TicketList;
