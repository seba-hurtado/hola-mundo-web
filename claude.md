# hola-mundo-web

## Stack
- Backend: Node.js + Express (puerto 3000)
- Frontend: HTML/CSS/JS vanilla en /client
- Deploy: Vercel via GitHub Actions
- Tests: Jest + Supertest

## Comandos clave
- `npm run dev`   → servidor local con nodemon
- `npm test`      → corre los tests
- `npm start`     → inicia el servidor

## Convenciones
- ES Modules (import/export), no CommonJS
- Variables de entorno en .env, nunca commitear
- Tests en __tests__/ junto al módulo
- Commits en inglés, conventional commits

## Reglas
- Nunca commitear sin pasar los tests primero
- No modificar vercel.json sin confirmar conmigo
- No modificar .github/workflows/ci.yml sin confirmar