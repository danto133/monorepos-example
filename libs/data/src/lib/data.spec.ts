import { ticket } from './data';

describe('data', () => {
  it('should return ticket', () => {
    expect(ticket()).toEqual({ id: 1, title: 'ticket' });
  });
});
