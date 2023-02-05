import { getTickets, getAddTicketButton } from '../support/app.po';

describe('react-tickets', () => {
  beforeEach(() => cy.visit('/'));

  it('should display ticket', () => {
    getTickets().should(e => {
      expect(e.length).equal(2);
    });

    getAddTicketButton().click();

    getTickets().should(e => {
      expect(e.length).equal(3);
    })
  });
});
