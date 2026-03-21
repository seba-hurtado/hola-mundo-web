import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde la API' })
})

app.use(express.static(path.join(__dirname, '../client')))

app.use((req, res) => res.status(404).send('Not found'))

export default app

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
}