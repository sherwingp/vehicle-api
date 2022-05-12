const request = require('supertest')
const app = require('../server.js')

describe('Vehicle API', () => {
    it('should return all vehicles', async () => {
        const res = await request(app).get('/api/vehicles')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('vehicles')
        expect(res.body.vehicles.length).toBe(3)
    })
})