const request = require('supertest');
const app = require('../src/app'); // Asegúrate de que apunta a tu aplicación Express

describe('GET /as', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/as');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});