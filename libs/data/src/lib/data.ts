export type Ticket = {
  id: number;
  title: string;
}

export function ticket(): Ticket {
  return { id: 1, title: 'ticket' };
}
