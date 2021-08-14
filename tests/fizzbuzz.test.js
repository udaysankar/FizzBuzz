const request = require('supertest')
const app = require('../index')
describe('Fizzbuzz Endpoints', () => {
  it('fizzbuzz property should have array with length greater than 0', async () => {
    const res = await request(app)
      .get('/api/fizzbuzz?count=10')
      .send()
    expect(res.body.type).toEqual('success')
    expect(res.body.fizzbuzz.length).toBeGreaterThan(0);
  })
})

