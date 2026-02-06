# 📦 Fullstack Product Manager (MEVN)

Este es un sistema de gestión de productos desarrollado con el stack **MEVN** (MongoDB, Express, Vue.js, Node.js). Incluye autenticación segura mediante **JWT** y un diseño moderno con **Tailwind CSS**.

---

## 🚀 Características

* **Autenticación:** Registro e Inicio de Sesión con contraseñas encriptadas (Bcrypt).
* **Seguridad:** Rutas protegidas en el Backend mediante Middleware y en el Frontend con Navigation Guards.
* **CRUD de Productos:** Visualización de productos en tiempo real y creación mediante formulario.
* **Diseño Pro:** Interfaz responsiva en modo oscuro utilizando Tailwind CSS.
* **Persistencia:** Gestión de tokens mediante `localStorage` e interceptores de Axios.

---

## 🛠️ Tecnologías Utilizadas

### Backend
* **Node.js & Express:** Servidor de API REST.
* **MongoDB & Mongoose:** Base de datos y modelado de datos.
* **JWT (JSON Web Token):** Autenticación basada en tokens.
* **Bcryptjs:** Encriptación de contraseñas.

### Frontend
* **Vue.js 3 (Vite):** Framework de interfaz de usuario.
* **Vue Router:** Gestión de rutas y navegación.
* **Axios:** Cliente HTTP con interceptores automáticos de Token.
* **Tailwind CSS:** Framework de estilos CSS orientado a utilidades.

---

## 📋 Requisitos Previos

1.  Tener instalado **Node.js** (v16 o superior).
2.  Tener una instancia de **MongoDB** (Local o Atlas).

---

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/CarlosDaniel-GCH/auth-node.git
cd auth-node
```

### 2. Configurar el Backend
```bash
cd server 
npm install
```

### Crea un archivo .env en la carpeta del servidor con:
```bash
MONGO_URI=tu_conexion_a_mongodb
JWT_SECRET=tu_palabra_secreta_super_segura
PORT=4000
```

### Arrancar servidor:
```bash
node app.js
```

### 3. Configurar el Frontend
```bash
cd ../client
npm install
```

### Arrancar cliente:
```bash
npm run dev
```

## 🛣️ Endpoints Principales (API)

| Método | Ruta | Descripción | Protegido |
| ------------- | ------------- | ------------- | ------------- |
| POST | /api/auth/register | Registro de usuario | No |
| POST | /api/auth/login | Login y entrega de Token | No |
| GET | /api/products | Obtener lista de productos | Sí |
| POST | /api/products | Crear un nuevo producto | Sí |