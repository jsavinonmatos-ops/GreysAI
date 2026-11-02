# 🪟 Configuración en Windows PowerShell

## ¿Por qué no funcionaba `npm run dev` en Windows?

En Windows PowerShell, `astro dev` no estaba disponible. Ahora con **Next.js** funciona perfecto.

---

## 🚀 Ejecutar Localmente en Windows

### Paso 1: Abrir PowerShell

Presiona: **Windows Key + X** → Selecciona **Windows Terminal** o **PowerShell**

### Paso 2: Ir a la carpeta del proyecto

```powershell
cd C:\Users\jmatos\Documents\GreysAuto
```

### Paso 3: Instalar dependencias (si aún no lo hiciste)

```powershell
npm install
```

### Paso 4: Ejecutar en desarrollo

```powershell
npm run dev
```

### Paso 5: Abrir en el navegador

```
http://localhost:3000
```

---

## ✅ Si Funciona Correctamente, Verás:

```
 ▲ Next.js 14.2.3
 - Local:        http://localhost:3000
 - Environments: .env.local

✓ Ready in 3.2s
```

---

## 🎯 Accesos en Local

| Página | URL |
|--------|-----|
| Landing | http://localhost:3000 |
| Admin Login | http://localhost:3000/admin/login |
| Admin Dashboard | http://localhost:3000/admin/dashboard |
| Gestionar Autos | http://localhost:3000/admin/autos |
| Configuración | http://localhost:3000/admin/config |

---

## 🔐 Login Admin

**Contraseña:** `greislyn2026`

---

## 🛠 Otros Comandos Útiles

### Build para producción

```powershell
npm run build
```

### Ejecutar en modo producción

```powershell
npm run start
```

### Limpiar cache

```powershell
rm -r .next
npm run build
```

---

## ⚠️ Si Tienes Errores

### Error: "Port 3000 already in use"

```powershell
# Usa un puerto diferente
npm run dev -- --port 3001
```

### Error: "npm not found"

Reinstala Node.js desde: https://nodejs.org (LTS)

### Error: Cambios no se actualizan

Presiona: **Ctrl + C** en PowerShell y ejecuta `npm run dev` de nuevo.

---

## 🎁 Próximas Tareas

1. ✅ Probar localmente
2. ⬜ Cambiar contraseña admin
3. ⬜ Agregar datos reales en config.json
4. ⬜ Subir a GitHub
5. ⬜ Conectar a Vercel
6. ⬜ Comprar dominio .com.do

---

¡Listo para empezar! 🚀

