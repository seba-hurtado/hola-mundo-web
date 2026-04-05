---
name: testing
description: Usar cuando hay que escribir tests, correr tests, debuggear tests fallidos o agregar cobertura de tests al proyecto
---

# Skill: Testing

## Stack
- Jest + Supertest para tests de integración HTTP
- Archivos en __tests__/ junto al módulo que testean
- ES Modules: usar `--experimental-vm-modules`

## Correr tests
```bash
npm test
```

## Estructura de un test
```js
import request from 'supertest'
import app from '../index.js'

describe('Nombre del módulo', () => {
  test('descripción del caso', async () => {
    const res = await request(app).get('/ruta')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('campo')
  })
})
```

## Convenciones
- Un archivo de test por módulo
- Nombres descriptivos en español
- Siempre testear: happy path, 404, y casos de error