// ==========================================
// INVITACIÓN QUINCEAÑERA - SCRIPT PRINCIPAL
// ==========================================

// ==========================================
// 1. REPRODUCTOR DE MÚSICA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const playIcon = document.getElementById('playIcon');
    let isPlaying = false;

    // Función para reproducir/pausar música
    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            // Intenta reproducir el audio
            audioPlayer.play().then(() => {
                isPlaying = true;
                playIcon.textContent = '⏸';
                playButton.style.background = 'linear-gradient(135deg, #7d4ba8 0%, #9d6bc8 100%)';
            }).catch((error) => {
                // Si hay error (por políticas del navegador), muestra mensaje
                console.log('Error al reproducir:', error);
                alert('Por favor, interactúa con la página para activar el audio.');
            });
        } else {
            // Pausa el audio
            audioPlayer.pause();
            isPlaying = false;
            playIcon.textContent = '▶';
            playButton.style.background = 'linear-gradient(135deg, #d4af37 0%, #f4d88a 100%)';
        }
    });

    // Manejar cuando el audio termina (aunque está en loop)
    audioPlayer.addEventListener('ended', function() {
        if (isPlaying) {
            audioPlayer.play();
        }
    });
});

// ==========================================
// 2. CUENTA REGRESIVA EN TIEMPO REAL
// ==========================================

// Fecha y hora del evento: 20 de diciembre de 2025, 4:00 PM
const eventDate = new Date('December 20, 2025 16:00:00').getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    // Elementos del DOM
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('countdownMessage');

    // Si el evento ya pasó
    if (timeRemaining < 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        messageElement.textContent = '¡El gran día ha llegado!';
        return;
    }

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Actualizar elementos con formato de dos dígitos
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    // Mensaje adicional cuando falta poco tiempo
    if (days === 0 && hours === 0 && minutes < 60) {
        messageElement.textContent = '¡Ya casi es hora! 💕';
    } else if (days === 0) {
        messageElement.textContent = '¡Es hoy! 🎉';
    } else if (days === 1) {
        messageElement.textContent = '¡Mañana es el gran día! 💖';
    } else if (days <= 7) {
        messageElement.textContent = '¡Ya falta muy poco! ✨';
    } else {
        messageElement.textContent = '';
    }
}

// Actualizar la cuenta regresiva cada segundo
updateCountdown(); // Llamada inicial
setInterval(updateCountdown, 1000);

// ==========================================
// 3. ANIMACIONES Y EFECTOS ADICIONALES
// ==========================================

// Efecto de entrada suave al cargar la página
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// ==========================================
// 4. VALIDACIÓN DE ENLACES
// ==========================================

// Mostrar advertencia si los enlaces no están configurados
document.addEventListener('DOMContentLoaded', function() {
    const mapLink = document.querySelector('.location-section .btn-primary');
    const rsvpLink = document.querySelector('.rsvp-section .btn-primary');

    // Verificar enlace del mapa
    if (mapLink.href.includes('TU_ENLACE')) {
        mapLink.addEventListener('click', function(e) {
            const confirmOpen = confirm('⚠️ Recuerda actualizar el enlace de Google Maps en el código.\n\n¿Deseas continuar de todas formas?');
            if (!confirmOpen) {
                e.preventDefault();
            }
        });
    }

    // Verificar enlace del formulario
    if (rsvpLink.href.includes('TU_FORM')) {
        rsvpLink.addEventListener('click', function(e) {
            const confirmOpen = confirm('⚠️ Recuerda actualizar el enlace del formulario de Google en el código.\n\n¿Deseas continuar de todas formas?');
            if (!confirmOpen) {
                e.preventDefault();
            }
        });
    }
});

// ==========================================
// 5. FUNCIONES DE DEBUG (OPCIONAL)
// ==========================================

// Descomentar para ver información en consola
// console.log('🎉 Invitación cargada correctamente');
// console.log('📅 Fecha del evento:', new Date('December 25, 2025 19:00:00'));
// console.log('🎵 Audio configurado:', document.getElementById('audioPlayer').src);
