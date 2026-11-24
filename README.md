# Chispa Juegos

Portal de juegos web gratuitos, hecho con HTML, CSS y JavaScript puros. Sin dependencias externas, sin descargas ni registro: todos los juegos son originales, creados desde cero, y se juegan directo en el navegador, en computadora o en el celular.

> Este proyecto no usa la marca, el logo ni los juegos de ningún otro portal. Todo el código, los dibujos y los nombres son originales.

## Juegos incluidos (12)

| Juego | Categoría | Controles |
|---|---|---|
| Serpiente | Clásicos | Flechas o WASD · deslizar en el celular |
| 2048 | Ingenio | Flechas · deslizar en el celular |
| Memoria | Ingenio | Clic o toque |
| Flappy Burbu | Acción | Clic, toque o barra espaciadora |
| Batalla de criaturas | Acción | Clic o toque (batalla por turnos) |
| Corre Brasa | Acción | Espacio, clic o toque (doble salto) |
| Rompebloques | Arcade | Mouse, flechas ← → o arrastrar el dedo |
| Buscaminas | Ingenio | Clic para revelar · clic derecho o modo bandera |
| Tres en Raya | Clásicos | Clic o toque (contra la computadora) |
| Bloques | Arcade | Flechas · botones táctiles en pantalla |
| Simon Dice | Ingenio | Clic o toque · sonidos con WebAudio |
| Pong · 2 jugadores | 2 jugadores | W/S y flechas ↑/↓ en el mismo teclado |

## Sprites originales en pixel-art

Las criaturas del portal son diseños originales estilo RPG de 16 bits, definidos como mapas de píxeles en `juegos/sprites.js` (matrices de caracteres con paleta de colores, dibujadas en canvas; no hay archivos de imagen):

| Criatura | Tipo | Descripción |
|---|---|---|
| **Broti** | Hoja | Un brote redondo con hojitas en la cabeza. |
| **Brasa** | Fuego | Una brasita redonda con un mechón de fuego. |
| **Burbu** | Agua | Una gotita vivaz con una cresta de ola. |

Cada criatura tiene frames de quieto, caminar (2) y ataque. También hay dos entrenadores (chico y chica) con 2 frames de caminar, usados en la batalla. Las batallas usan la tabla de tipos Hoja > Agua > Fuego > Hoja.

### Dónde aparecen los sprites

| Juego | Sprites que usa |
|---|---|
| Serpiente | Broti como cabeza de la serpiente; bayas de comida |
| 2048 | Cara de cada ficha según su valor: Broti (2/4), Brasa (8/16), Burbu (32/64), entrenadores (128+) |
| Memoria | 8 parejas: cada criatura en dos poses + los dos entrenadores |
| Flappy Burbu | Burbu volando entre las tuberías |
| Batalla de criaturas | Las tres criaturas y el entrenador |
| Corre Brasa | Brasa corriendo con animación |
| Rompebloques | Bloques con los colores de las tres criaturas; pelota pokébola |
| Buscaminas | Broti marca las trampas; las minas son trampas |
| Tres en Raya | Broti contra Brasa |
| Bloques | Piezas con los colores de las tres criaturas |
| Simon Dice | Verde Broti, naranja Brasa, azul Burbu, rojo entrenador |
| Pong · 2 jugadores | Los dos entrenadores como paletas; pelota pokébola |

## Cómo jugar en local

Solo abre `index.html` en tu navegador. Cada juego también funciona abriendo su archivo directamente, por ejemplo `juegos/serpiente.html`.

O sirve la carpeta con un servidor local:

```bash
cd juegos-libres
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `chispa-juegos`).
2. Sube el contenido de esta carpeta.
3. En **Settings → Pages**, elige la rama principal (`main`) y la carpeta raíz (`/`).
4. El portal queda en `https://<tu-usuario>.github.io/chispa-juegos/`.

El archivo `.nojekyll` ya está incluido para que GitHub Pages sirva los archivos tal cual, sin procesar Jekyll.

## Estructura

```text
juegos-libres/
├── index.html          # Portal: buscador, categorías, destacado y rejilla
├── styles.css          # Estilos del portal
├── README.md           # Este archivo
├── .nojekyll           # Desactiva Jekyll en GitHub Pages
└── juegos/
    ├── juegos.css      # Estilos compartidos por todos los juegos
    ├── sprites.js      # Sprites pixel-art originales (Broti, Brasa, Burbu y entrenadores)
    ├── serpiente.html
    ├── 2048.html
    ├── memoria.html
    ├── flappy.html
    ├── batalla.html
    ├── corredor.html
    ├── rompebloques.html
    ├── buscaminas.html
    ├── tres-en-raya.html
    ├── bloques.html
    ├── simon.html
    └── pong.html
```

## Notas técnicas

- Sin recursos externos: no hay Google Fonts, CDNs ni imágenes de terceros. Las miniaturas del portal se dibujan con canvas y CSS, y los sprites son mapas de píxeles en `juegos/sprites.js`.
- Las puntuaciones y récords se guardan en `localStorage` del navegador.
- Diseño responsive: el portal y los juegos se adaptan a móvil y escritorio.
- Simon Dice usa la API WebAudio para sintetizar los sonidos (no necesita archivos de audio).

## Licencia

Código original, libre para usar, modificar y compartir.
