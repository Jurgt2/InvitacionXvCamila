# 🎉 Invitación Digital Quinceañera - Dulce Primavera

Invitación digital interactiva para los 15 años de **María Camila**

## 📋 Características

✅ Diseño elegante con tema "Dulce Primavera" (morado, rosa y dorado)  
✅ Cuenta regresiva en tiempo real hasta el evento  
✅ Reproductor de música integrado  
✅ Itinerario completo del evento  
✅ Botones para ubicación (Google Maps) y confirmación de asistencia  
✅ Diseño responsive (móvil y escritorio)  
✅ Animaciones suaves y efectos interactivos  

## 📁 Estructura del Proyecto

```
invitacion-quinceanera/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── quinceanera.jpg     # Foto de la quinceañera (180x180px)
├── musica.mp3          # Canción del evento
└── README.md           # Este archivo
```

## 🚀 Cómo usar

### 1. Agregar archivos multimedia

Necesitas agregar estos archivos en la carpeta del proyecto:

- **quinceanera.jpg** - Foto de María Camila (recomendado: 180x180px o mayor)
- **musica.mp3** - Canción para reproducir durante la invitación

### 2. Actualizar enlaces

Edita el archivo `index.html` y reemplaza:

- **Línea 69**: Cambia `https://maps.app.goo.gl/TU_ENLACE` por tu enlace de Google Maps
- **Línea 145**: Cambia `https://forms.gle/TU_FORM` por tu formulario de Google

### 3. Abrir la invitación

Opción A: Doble clic en `index.html` para abrir en el navegador

Opción B: Usar Live Server de VS Code:
- Instala la extensión "Live Server"
- Click derecho en `index.html`
- Selecciona "Open with Live Server"

## 🎨 Personalización

### Cambiar colores

Edita `style.css` y modifica estas variables:

- Morado principal: `#7d4ba8`
- Rosa pastel: `#fce4f7`
- Dorado: `#d4af37`

### Cambiar fecha del evento

Edita `script.js` línea 50:

```javascript
const eventDate = new Date('December 25, 2025 19:00:00').getTime();
```

### Cambiar información

Edita `index.html` para modificar:
- Nombre de la quinceañera
- Lugar del evento
- Horarios del itinerario
- Textos descriptivos

## 📱 Compatibilidad

✅ Chrome / Edge  
✅ Firefox  
✅ Safari  
✅ Dispositivos móviles  

## 🎵 Nota sobre audio

El navegador puede bloquear la reproducción automática de audio. El usuario deberá hacer clic en el botón play para escuchar la música.

## 📅 Información del Evento

- **Quinceañera**: María Camila
- **Fecha**: 25 de diciembre de 2025
- **Hora**: 7:00 PM
- **Lugar**: Casa de eventos Jardines del Sol

## 💖 Créditos

Tema: "Dulce Primavera"  
Desarrollado con HTML5, CSS3 y JavaScript puro (sin frameworks)

---

¡Que tengas una celebración maravillosa! 🎊👑✨
