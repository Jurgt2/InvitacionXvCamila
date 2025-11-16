#!/bin/bash
# Crear una imagen SVG placeholder
cat > quinceanera.svg << 'EOFSVG'
<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7d4ba8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fce4f7;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" fill="url(#grad)"/>
  <circle cx="90" cy="90" r="70" fill="#d4af37" opacity="0.3"/>
  <text x="90" y="80" font-family="Arial" font-size="50" fill="white" text-anchor="middle">👑</text>
  <text x="90" y="120" font-family="Arial" font-size="16" fill="white" text-anchor="middle">Emily</text>
  <text x="90" y="140" font-family="Arial" font-size="16" fill="white" text-anchor="middle">Camila</text>
</svg>
EOFSVG

# Renombrar como JPG placeholder
mv quinceanera.svg quinceanera.jpg
echo "✅ Imagen placeholder creada"
