---
name: vercel-deploy
description: Usar cuando hay que deployar en Vercel, modificar vercel.json, configurar rutas, variables de entorno o serverless functions para Express
---

# Skill: Vercel Deploy

## vercel.json actual
```json
{
  "version": 2,
  "builds": [
    { "src": "server/index.js", "use": "@vercel/node" },
    { "src": "client/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server/index.js" },
    { "src": "/(.*)", "dest": "client/$1" }
  ]
}
```

## Variables de entorno
Configurar en Vercel Dashboard → Settings → Environment Variables.
Nunca hardcodear en el código.

## Deploy manual
- `vercel --prod` → deploy a producción
- `vercel dev` → emular localmente