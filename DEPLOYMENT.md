# 🚀 Guía de Deployment - Greislyn Auto Import

## Opción 1: Vercel (RECOMENDADA) ⭐

### Paso 1: Preparar código en GitHub

```bash
# 1. Crear repo en GitHub
# 2. Ir a la carpeta del proyecto
cd /ruta/a/greislyn-auto

# 3. Inicializar git (si no está)
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 4. Agregar remote
git remote add origin https://github.com/tuusuario/greislyn-auto.git
git push -u origin main
```

### Paso 2: Conectar Vercel

1. **Ir a:** https://vercel.com/dashboard
2. **Clic en:** "Add New..." → "Project"
3. **Importar:** Selecciona tu repo de GitHub
4. **Configuración:**
   - Framework: **Next.js**
   - Root Directory: **(default)**
   - Environment Variables: (dejar vacío por ahora)
5. **Deploy:** Clic en "Deploy"

✅ **¡Listo!** Tu sitio estará en: `greislyn-auto.vercel.app`

### Paso 3: Dominio Personalizado

1. **En Vercel Dashboard:**
   - Project → Settings → Domains
   - Add Domain
   - Ingresa: `greislynauto.com.do`

2. **En tu proveedor de dominio (Namecheap, GoDaddy, etc.):**
   - Zona DNS
   - Agregar record CNAME
   - Nombre: `greislynauto`
   - Valor: `cname.vercel-dns.com`

✅ En 15 minutos aproximadamente estará activo.

---

## Opción 2: Deploy Manual + Netlify

### Paso 1: Build

```bash
npm run build
```

### Paso 2: Subir a Netlify

1. Ir a https://app.netlify.com
2. "Add new site" → "Deploy manually"
3. Arrastra la carpeta `.next` o usa Netlify CLI

---

## 🔐 IMPORTANTE: Antes de Producción

### 1. Cambiar Contraseña Admin

En `app/admin/login/page.tsx`, cambiar:

```typescript
const ADMIN_PASSWORD = 'greislyn2026'  // ❌ CAMBIAR ESTO
```

Por una contraseña segura:

```typescript
const ADMIN_PASSWORD = 'TuContraseñaSegura2026'  // ✅
```

### 2. Actualizar Configuración

En `data/config.json`:

```json
{
  "nombreDealer": "Greislyn Auto Import",
  "titulo": "Encuentra tu Próximo Auto",
  "subtitulo": "Los mejores vehículos importados con las mejores condiciones",
  "whatsapp": "+1 (829) 555-1234",  // ✅ TU WHATSAPP
  "email": "contacto@greislynauto.com",  // ✅ TU EMAIL
  "telefono": "+1 (829) 555-1234"  // ✅ TU TELEFONO
}
```

### 3. Agregar Autos

En el panel admin (`/admin/login`), agregar:
- Marca, Modelo, Año
- Precio, Descripción
- URL de la imagen

---

## 📱 URLs Finales

- **Landing:** `https://greislynauto.com.do`
- **Admin:** `https://greislynauto.com.do/admin/login`

---

## 🔧 Actualizar la Página

Para cambios en la landing:

1. **Editar datos:** `data/autos.json` o `data/config.json`
2. **Git commit:**
   ```bash
   git add .
   git commit -m "Actualizaciones"
   git push origin main
   ```
3. **Vercel redeploy:** Automático (2-3 minutos)

---

## ⚠️ Limitaciones Actuales

- ❌ Datos guardados localmente (localhost/localStorage)
- ❌ Sin persistencia real
- ✅ Para producción: agregar backend + base de datos

---

## 🚀 Próximas Mejoras (Opcional)

1. **Backend:** Node.js + Express
2. **Base de Datos:** MongoDB o PostgreSQL
3. **Upload de Imágenes:** Cloudinary
4. **Email:** SendGrid o Nodemailer
5. **Auth Real:** NextAuth.js

---

## 📞 Contacto

¿Problemas en el deployment? Revisa:
- Logs de Vercel en Dashboard
- Consola del navegador (F12)
- README.md para más detalles

