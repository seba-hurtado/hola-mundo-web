import request from 'supertest'
import app from '../index.js'

describe('Servidor Hola Mundo', () => {
  test('GET / responde 200', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
  })

  test('GET /api/saludo devuelve JSON', async () => {
    const res = await request(app).get('/api/saludo')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('mensaje')
  })

  test('Ruta inexistente devuelve 404', async () => {
    const res = await request(app).get('/no-existe')
    expect(res.status).toBe(404)
  })
})