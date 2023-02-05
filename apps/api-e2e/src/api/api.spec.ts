import axios from 'axios';

describe('GET /', () => {
  it('should return a list ticket', async () => {
    const res = await axios.get(`/api/tickets`);

    expect(res.status).toBe(200);
    expect(res.data.length).toEqual(2);
    
    await axios.post("/api/tickets");
    expect(res.status).toBe(200);
    expect(res.data.length).toEqual(3);
    
  });
});
