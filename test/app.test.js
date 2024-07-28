const request = require('supertest');
const app = require('../src/app'); // Asegúrate de que apunta a tu aplicación Express

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});