## **Documentación Completa del Proyecto**

### **1. Resumen del Proyecto**
Este proyecto integra servicios para la consulta de:
- **Precios de la luz**: Datos en tiempo real de los precios energéticos.
- **Datos meteorológicos**: Clima actual para ciudades seleccionadas.
- **Gestor de usuarios**: Permite a los usuarios registrarse, iniciar sesión y personalizar su experiencia.

La aplicación consta de un **backend** desarrollado en Node.js que gestiona los datos y un **frontend** en JavaScript puro que interactúa dinámicamente con el backend.

---

### **2. Arquitectura General**

#### **2.1. Backend**
El backend está diseñado para gestionar datos y servir como interfaz para el frontend mediante endpoints RESTful.

**Organización de Archivos:**
- **Rutas** (`routers`): Gestionan los endpoints.
- **Controladores** (`controllers`): Contienen la lógica de negocio.
- **Modelos** (`models`): Interactúan con SQLite.
- **Servicios** (`helpers`): Manejan lógica auxiliar, como integración con APIs externas.
- **Configuración** (`.env` y `config.js`): Manejo de variables de entorno.

**Tecnologías Clave:**
- **Express.js**: Para manejar las rutas.
- **SQLite**: Base de datos local.
- **dotenv**: Carga de configuraciones desde `.env`.
- **Fetch**: Para consumo de APIs externas.

#### **2.2. Frontend**
El frontend utiliza componentes modulares para generar una interfaz interactiva.

**Organización de Archivos:**
- **Componentes**: Elementos reutilizables como botones, gráficos y tarjetas.
- **Helpers**: Funciones auxiliares (manejo de sesión, validación, etc.).
- **Estilos**: CSS modular.

**Tecnologías Clave:**
- **JavaScript puro**: Para dinamismo e interactividad.
- **Chart.js**: Para visualización de datos.
- **LocalStorage**: Manejo de sesión del usuario.

---

### **3. Descripción Detallada del Backend**

#### **3.1. Endpoints y Funcionalidades**

**1. Gestor de Días y Precios:**
- `GET /api/days`: Devuelve todos los días almacenados.
- `GET /api/days/start_date=:start/end_date=:end`: Devuelve precios en un rango de fechas.
- `PUT /api/days/:day`: Actualiza el precio de un día específico.

**2. Gestor de Horas y Precios:**
- `GET /api/hours/start_date=:start/end_date=:end/rangeHours=:range`: Filtra precios según un rango horario.

**3. Gestor de Usuarios:**
- `POST /api/users/register`: Registra un usuario.
- `POST /api/users/login`: Valida credenciales y devuelve datos del usuario.

**4. API de Clima:**
- `GET /api/weather?city=city_name`: Devuelve el clima de la ciudad seleccionada.

#### **3.2. Flujo de Datos del Backend**
1. El cliente envía una solicitud a un endpoint REST.
2. El **router** correspondiente delega la solicitud al **controlador**.
3. El controlador interactúa con los **modelos** para acceder o manipular datos en la base de datos.
4. Si es necesario, el backend consume APIs externas mediante helpers.
5. La respuesta se envía al cliente en formato JSON.

**Ejemplo:** Consulta de precios de un rango de días:
- Ruta: `GET /api/days/start_date=1/end_date=7`
- Controlador: `getDaysRangeHandler` (valida parámetros y consulta datos).
- Modelo: `getRangeDays` (realiza una consulta SQL).
- Respuesta: JSON con los días y precios correspondientes.

---

### **4. Descripción Detallada del Frontend**

#### **4.1. Componentes Principales**
1. **Login y Registro**:
   - `login.js`: Formulario de inicio de sesión.
   - `register.js`: Validación y registro de nuevos usuarios.
   - `scripts.js`: Manejo de sesión con `localStorage`.

2. **Navegación**:
   - `nav.js`: Barra de navegación con botones para cambiar tema, cerrar sesión, etc.
   - `botonTema.js`: Alterna entre modo claro y oscuro.
   - `btnClearSession.js`: Limpia la sesión actual.

3. **Consulta de Datos**:
   - `botonLuz.js`: Selección de franjas horarias y días para consultar precios.
   - `botonTiempo.js`: Consulta y muestra datos del clima.
   - `grafico.js`: Genera gráficos interactivos con precios.
   - `cardPrices.js`: Muestra precios en tarjetas.
   - `divTiempo.js`: Presenta datos meteorológicos.

#### **4.2. Flujo de Datos del Frontend**
1. El usuario interactúa con la interfaz (ej. selecciona un rango de horas).
2. El frontend envía una solicitud HTTP al backend utilizando `fetch`.
3. Los datos obtenidos son procesados y renderizados en componentes visuales (gráficos, tarjetas, etc.).

**Ejemplo:** Consulta de datos del clima:
- Botón: `Tiempo` (botonTiempo.js).
- Componente: `divTiempo.js` (construye el contenido).
- Solicitud: `GET /api/weather?city=Granada`.
- Renderizado: Muestra el clima en tarjetas y texto.

---

### **5. Variables de Entorno**
**Backend (.env):**
```plaintext
PORT=4000
DATABASE_PATH=./database/proyecto.sqlite
URL_WEATHER=https://api.openweathermap.org/data/2.5/weather?q=Granada&units=metric&lang=es&appid=YOUR_API_KEY
```

**Frontend (.env):**
```plaintext
VITE_BASE_URL=http://localhost:4000/api
VITE_URL_HOURS=http://localhost:4000/api/hours
VITE_URL_DAYS=http://localhost:4000/api/days
VITE_HOURS_RANGE=0-6,6-12,12-18,18-24
VITE_DAYS_RANGE=1,2,3,...,31
```

---

### **6. Ejecución del Proyecto**

#### **Backend:**
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear archivo `.env` basado en el ejemplo proporcionado.
3. Iniciar el servidor:
   ```bash
   npm start
   ```

#### **Frontend:**
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear archivo `.env` en la carpeta del frontend.
3. Iniciar el servidor:
   ```bash
   npm run dev
   ```

---

### **7. Conexión entre Backend y Frontend**
El frontend interactúa con el backend a través de solicitudes HTTP:
1. **Endpoints**: Definidos en el archivo `routes.js` del frontend.
2. **Solicitudes**: Realizadas con `fetch` en funciones helpers.
3. **Parámetros**: Datos como rango de fechas, horas y ciudades se envían desde el frontend al backend.
4. **Renderizado**: La respuesta del backend se transforma en componentes visuales (gráficos, tarjetas, etc.).

---

### **8. Dependencias Clave**
**Backend:**
- `express`
- `sqlite3`
- `dotenv`

**Frontend:**
- `Chart.js`

---

### **9. Equipo de Desarrollo**
- **Raul**: [GitHub](https://github.com/RaulPovedano)
- **Nicole**: [GitHub](https://github.com/niyranzo)
- **Ana**: [GitHub](https://github.com/anaGG07)
- **Sara**: [GitHub](https://github.com/sariasss)

---

### **10. Anexos**
Incluye ejemplos de respuestas JSON, capturas de pantalla de la aplicación en uso, y sugerencias para futuras mejoras.

