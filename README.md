# Greislyn Auto Import

Plataforma web profesional para dealer de autos con landing page moderna y panel administrativo seguro.

## 🚀 Stack

- **Frontend:** Next.js 14 + React + Tailwind CSS
- **Datos:** JSON estático + localStorage
- **Auth:** Contraseña fuerte + Validación de IP
- **Deploy:** Vercel

## ✨ Características

✅ Landing page responsiva con diseño deportivo (navy + rojo)  
✅ Catálogo de autos con búsqueda y filtros  
✅ Formulario de contacto (WhatsApp + Email)  
✅ Panel admin seguro (`/admin-panel-xyz123`)  
✅ CRUD completo de autos  
✅ Animaciones suaves y elegantes  
✅ Smooth scroll en navegación  

## 🛠 Inicio Rápido

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`

## 📍 URLs

| Página | URL |
|--------|-----|
| Landing | http://localhost:3000 |
| Admin | http://localhost:3000/admin-panel-xyz123/login |

## 🔐 Admin

**Contraseña:** `Greislyn@Auto2026!Seguro`

**Nota:** En localhost se permite acceso directo. En producción requiere IP autorizada.

## 📁 Estructura

```
app/
├── page.tsx              (Landing)
├── layout.tsx            (Root)
├── globals.css           (Estilos globales)
└── admin-panel-xyz123/   (Panel admin)

components/
├── NavBar.tsx            (Navegación)
├── AutoCard.tsx          (Tarjeta auto)
├── AutoFilter.tsx        (Filtros)
└── FormContacto.tsx      (Formulario)

data/
├── autos.json
└── config.json
```

## 🎨 Diseño

- **Paleta:** Navy (#0a1428-#1a2d54) + Rojo deportivo (#dc2626)
- **Tipografía:** Inter
- **Animaciones:** Suaves transiciones de 300ms

## 🚀 Deploy

```bash
git push origin main
```

Vercel deployará automáticamente.

---

**v1.0.0** | Greislyn Auto Import 2026
