# Mapa Mental del Proyecto API-LUZ-TIEMPO

## **Estructura del Proyecto**

### 1. Autenticación
- **Login:**
  - Requiere `username` y `password`.
  - **Acciones:**
    - Contraseña encriptada para almacenamiento en `localStorage`.
    - Almacenar credenciales en base de datos SQLite.
  - **Redirección:**
    - Si el login es exitoso, redirige a `index.html`.
- **Registro:**
  - Formulario con 3 campos: `username`, `password`, y confirmación de contraseña.
  - **Validaciones:**
    - Ambas contraseñas deben coincidir para habilitar el botón de registro.
  - **Acciones:**
    - Guarda los datos en SQLite.

### 2. Interfaz Principal (`index.html`)
#### Navegación
- **Elementos:**
  - Logo.
  - Botones "Luz" y "Tiempo".
- **Funciones:**
  - **Botón Luz:**
    - Muestra precios por horas.
    - Renderiza un gráfico interactivo.
    - **Backend:** Llama a una API y almacena los datos en SQLite antes de renderizar.
  - **Botón Tiempo:**
    - Muestra un input para ciudad y botón de búsqueda.
    - **Backend:** Usa `fetch` para llamar a la API de OpenWeatherMap.

#### Footer
- **Componente:**
  - Recibe un objeto como parámetro.
  - Ejemplo:
    ```json
    {
      "nombre": "Ana",
      "gitHub": "https://github.com/enlace"
    }
    ```

### 3. Visualización de Datos
#### Precios de la Luz
- **Botón "Cargar Precios de la Luz":**
  - Llama a la API de Red Eléctrica Española (REE) para obtener datos de enero 2024.
- **Selector de Franja Horaria:**
  - Cargado dinámicamente desde `.env`.
  - Filtra los precios por franja seleccionada.
- **Elementos Visuales:**
  - **Tarjetas:**
    - Muestran hora y precio.
  - **Gráfico:**
    - Representa precios por hora.
- **Spinner de Carga:**
  - Se muestra mientras se cargan los datos.

#### Datos Meteorológicos
- **Búsqueda de Ciudad:**
  - Input para ingresar la ciudad.
  - Botón que realiza una solicitud a OpenWeatherMap mediante `fetch`.
- **Visualización:**
  - Información meteorológica de la ciudad ingresada (ej. temperatura, clima).

### 4. Requisitos Técnicos
- **Frontend:**
  - Componentes modulares con HTML, CSS y JavaScript.
  - Uso de `Chart.js` para gráficos.
  - Estilo independiente por componente.
- **Backend:**
  - Base de datos SQLite para usuarios y precios.
  - Rutas para gestionar solicitudes del frontend.

### 5. Flujo de Trabajo
1. Las acciones asíncronas (API, BD) deben gestionarse correctamente.
2. Proceso:
   - Usuario interactúa con la interfaz.
   - Se realizan solicitudes al backend.
   - Respuesta procesada y renderizada en el frontend.

### 6. Entrega
- Código estructurado y modular.
- Instrucciones claras para ejecutar:
  ```bash
  npm install
  npm run dev
  ```
