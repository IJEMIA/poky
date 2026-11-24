/* Chispa Juegos — Sprites originales estilo RPG pixel-art (16x16).
   Cada sprite es un mapa de píxeles: una matriz de caracteres donde cada
   letra es un color de la paleta de esa criatura y "." es transparente.
   Las criaturas (Broti, Brasa y Burbu) y los entrenadores son diseños
   originales creados desde cero; no se copió ningún personaje existente. */
(function (global) {
  "use strict";

  /* ---------------- Criaturas ---------------- */

  var BROTI_IDLE = [
    "......LLLL......",
    ".....LLLLLL.....",
    ".....LLLLLL.....",
    "......LLLL......",
    ".......LL.......",
    "....DDDDDDDD....",
    "...DGGGGGGGGD...",
    "..DGGGGGGGGGGD..",
    "..DGGWWGGWWGGD..",
    "..DGWKGGGGKWGD..",
    "..DGGGGGGGGGGD..",
    "..DGGgGGGGgGGD..",
    "...DGGGGGGGGD...",
    "...DGGgGGgGGD...",
    "....DDDDDDDD....",
    "....DD....DD...."
  ];

  var BROTI_WALK_A = [
    "......LLLL......",
    ".....LLLLLL.....",
    ".....LLLLLL.....",
    "......LLLL......",
    ".......LL.......",
    "....DDDDDDDD....",
    "...DGGGGGGGGD...",
    "..DGGGGGGGGGGD..",
    "..DGGWWGGWWGGD..",
    "..DGWKGGGGKWGD..",
    ".LDGGGGGGGGGD...",
    "..DGGgGGGGgGGD..",
    "...DGGGGGGGGD...",
    "...DGGgGGgGGD...",
    "...DDDDDDDDD....",
    "...DD......DD..."
  ];

  var BROTI_WALK_B = [
    "......LLLL......",
    ".....LLLLLL.....",
    ".....LLLLLL.....",
    "......LLLL......",
    ".......LL.......",
    "....DDDDDDDD....",
    "...DGGGGGGGGD...",
    "..DGGGGGGGGGGD..",
    "..DGGWWGGWWGGD..",
    "..DGWKGGGGKWGD..",
    "..DGGGGGGGGGDL..",
    "..DGGgGGGGgGGD..",
    "...DGGGGGGGGD...",
    "...DGGgGGgGGD...",
    "....DDDDDDDD....",
    ".....DD..DD....."
  ];

  var BROTI_ATTACK = [
    "......LLLL......",
    ".....LLLLLL.....",
    ".....LLLLLL.....",
    "......LLLL......",
    ".......LL.......",
    "....DDDDDDDD....",
    "...DGGGGGGGGD...",
    "..DGGGGGGGGGGD..",
    "..DGGWWGGWWGGD..",
    "..DGWKGGGGKWGDL.",
    "..DGGGGGGGGGGLL.",
    "..DGGgGGGGgGGD..",
    "...DGGGGGGGGD...",
    "...DGGgGGgGGD...",
    "....DDDDDDDD....",
    ".....DD..DD....."
  ];

  var BRASA_IDLE = [
    ".......YY.......",
    "......YYYF......",
    "......YFFF......",
    ".....FFFYYF.....",
    "....DDDDDDDD....",
    "...DOOOOOOOOD...",
    "..DOOOOOOOOOOD..",
    "..DOOWWOOOWWOD..",
    "..DOOKOOOOOKOD..",
    "..DOOOOOOOOOOD..",
    "..DOOCCCCCCOOD..",
    "..DOOCCCCCCOOD..",
    "...DOOOOOOOOD...",
    "...DOOOoOOOOD...",
    "....DDDDDDDD....",
    "...DDD....DDD..."
  ];

  var BRASA_WALK_A = [
    ".......YY.......",
    "......YYYF......",
    "......YFFF......",
    ".....FFFYYF.....",
    "....DDDDDDDD....",
    "...DOOOOOOOOD...",
    "..DOOOOOOOOOOD..",
    "..DOOWWOOOWWOD..",
    "..DOOKOOOOOKOD..",
    "..DOOOOOOOOOOD..",
    ".ODOOCCCCCCOOD..",
    "..DOOCCCCCCOOD..",
    "...DOOOOOOOOD...",
    "...DOOOoOOOOD...",
    "....DDDDDDDD....",
    "..DDD......DDD.."
  ];

  var BRASA_WALK_B = [
    ".......YY.......",
    "......YYYF......",
    "......YFFF......",
    ".....FFFYYF.....",
    "....DDDDDDDD....",
    "...DOOOOOOOOD...",
    "..DOOOOOOOOOOD..",
    "..DOOWWOOOWWOD..",
    "..DOOKOOOOOKOD..",
    "..DOOOOOOOOOOD..",
    "..DOOCCCCCCODO..",
    "..DOOCCCCCCOOD..",
    "...DOOOOOOOOD...",
    "...DOOOoOOOOD...",
    "....DDDDDDDD....",
    "....DDD..DDD...."
  ];

  var BRASA_ATTACK = [
    ".......YY.......",
    ".....YYYYFF.....",
    ".....YFFFFF.....",
    "....FFFFYYFF....",
    "....DDDDDDDD....",
    "...DOOOOOOOOD...",
    "..DOOOOOOOOOOD..",
    "..DOOWWOOOWWOD..",
    "..DOOKOOOOOKOD..",
    "..DOOOOOOOOOFYY.",
    "..DOOCCCCCOOFY..",
    "..DOOCCCCCCOOD..",
    "...DOOOOOOOOD...",
    "...DOOOoOOOOD...",
    "....DDDDDDDD....",
    "....DDD..DDD...."
  ];

  var BURBU_IDLE = [
    ".......CC.......",
    "......CCCC......",
    ".....CC..CC.....",
    "....DDDDDDDD....",
    "...DBBBBBBBBD...",
    "..DBBBBBBBBBBD..",
    "..DBBWWBBBBWBD..",
    "..DBBKBBBBBKBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbBBBbbBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbbbbbBBD..",
    "..DBBBBBBBBBBD..",
    "...DBBBBBBBBD...",
    "....DDDDDDDD....",
    "...DDD....DDD..."
  ];

  var BURBU_WALK_A = [
    "......CC........",
    ".....CCCC.......",
    "....CC..CC......",
    "....DDDDDDDD....",
    "...DBBBBBBBBD...",
    "..DBBBBBBBBBBD..",
    "..DBBWWBBBBWBD..",
    "..DBBKBBBBBKBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbBBBbbBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbbbbbBBD..",
    "..DBBBBBBBBBBD..",
    "...DBBBBBBBBD...",
    "....DDDDDDDD....",
    "..DDD......DDD.."
  ];

  var BURBU_WALK_B = [
    "........CC......",
    ".......CCCC.....",
    "......CC..CC....",
    "....DDDDDDDD....",
    "...DBBBBBBBBD...",
    "..DBBBBBBBBBBD..",
    "..DBBWWBBBBWBD..",
    "..DBBKBBBBBKBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbBBBbbBD..",
    "..DBBBBBBBBBBD..",
    "..DBBbbbbbbBBD..",
    "..DBBBBBBBBBBD..",
    "...DBBBBBBBBD...",
    "....DDDDDDDD....",
    "....DDD..DDD...."
  ];

  var BURBU_ATTACK = [
    ".......CC.......",
    "......CCCC......",
    ".....CC..CC.....",
    "....DDDDDDDD....",
    "...DBBBBBBBBD...",
    "..DBBBBBBBBBBD..",
    "..DBBWWBBBBWBD..",
    "..DBBKBBBBBKBD..",
    "..DBBBDDDDDBBD..",
    "..DBBBDDDDDBBD..",
    "..DBBBBBBBBCCB..",
    "..DBBbbbbbbCCB..",
    "..DBBBBBBBBBBD..",
    "...DBBBBBBBBD...",
    "....DDDDDDDD....",
    "....DDD..DDD...."
  ];

  /* ---------------- Entrenadores ---------------- */

  var CHICO_A = [
    ".....CCCCC......",
    "....CCCCCCC.....",
    "....CCCCCCC.....",
    "...CCCCCCCCC....",
    "....SSSSSSS.....",
    "....SWSSSSWS....",
    "....SSSSSSS.....",
    ".....SSSSS......",
    "...RRRRRRRRR....",
    "..SRRRRRRRRRS...",
    "..SRRRRRRRRRS...",
    "...RRRRRRRRR....",
    "...JJJJJJJJJ....",
    "...JJJ...JJJ....",
    "...JJJ...JJJ....",
    "..KKKK...KKKK..."
  ];

  var CHICO_B = [
    ".....CCCCC......",
    "....CCCCCCC.....",
    "....CCCCCCC.....",
    "...CCCCCCCCC....",
    "....SSSSSSS.....",
    "....SWSSSSWS....",
    "....SSSSSSS.....",
    ".....SSSSS......",
    "...RRRRRRRRR....",
    "..SRRRRRRRRRS...",
    "..SRRRRRRRRRS...",
    "...RRRRRRRRR....",
    "...JJJJJJJJJ....",
    "....JJJ.JJJ.....",
    "....JJJ.JJJ.....",
    "...KKKK.KKKK...."
  ];

  var CHICA_A = [
    "....HHHHHHH.....",
    "...HHHHHHHHH....",
    "..HHHHHHHHHHH...",
    "..HHSSSSSSSHH...",
    "..HHSSSSSSSHH...",
    "..HSWSSSSWSHH...",
    "..HHSSSSSSSHH...",
    "...HSSSSSSSH....",
    "...RRRRRRRRR....",
    "..SRRRRRRRRRS...",
    "..SRRRRRRRRRS...",
    "...RRRRRRRRR....",
    "...NNNNNNNNN....",
    "....NNNNNNN.....",
    "....SS...SS.....",
    "...KKK...KKK...."
  ];

  var CHICA_B = [
    "....HHHHHHH.....",
    "...HHHHHHHHH....",
    "..HHHHHHHHHHH...",
    "..HHSSSSSSSHH...",
    "..HHSSSSSSSHH...",
    "..HSWSSSSWSHH...",
    "..HHSSSSSSSHH...",
    "...HSSSSSSSH....",
    "...RRRRRRRRR....",
    "..SRRRRRRRRRS...",
    "..SRRRRRRRRRS...",
    "...RRRRRRRRR....",
    "...NNNNNNNNN....",
    "....NNNNNNN.....",
    ".....SS.SS......",
    "....KKK.KKK....."
  ];

  /* ---------------- Datos ---------------- */

  var CREATURES = {
    broti: {
      id: "broti",
      name: "Broti",
      type: "Hoja",
      color: "#58b368",
      desc: "Una criatura brote: le salen hojitas nuevas cada primavera y le encanta tomar el sol.",
      palette: { D: "#1b5e20", G: "#58b368", g: "#c8e6a8", L: "#2f9e44", W: "#ffffff", K: "#1a1a1a" },
      frames: { idle: BROTI_IDLE, walk: [BROTI_WALK_A, BROTI_WALK_B], attack: BROTI_ATTACK },
      attacks: [
        { name: "Placaje", type: "Normal", min: 10, max: 16, desc: "Un golpe con todo el cuerpo." },
        { name: "Hoja Cortante", type: "Hoja", min: 14, max: 22, desc: "Lanza una hoja afilada como navaja." },
        { name: "Drenaje Verde", type: "Hoja", min: 16, max: 24, desc: "Absorbe energía y recupera 8 PS.", heal: 8 }
      ]
    },
    brasa: {
      id: "brasa",
      name: "Brasa",
      type: "Fuego",
      color: "#f97316",
      desc: "Una brasita con carácter: su mechón de fuego crece cuando se emociona o se enoja.",
      palette: { D: "#7c2d12", O: "#f97316", o: "#fdba74", Y: "#facc15", F: "#ef4444", C: "#ffedd5", W: "#ffffff", K: "#1a1a1a" },
      frames: { idle: BRASA_IDLE, walk: [BRASA_WALK_A, BRASA_WALK_B], attack: BRASA_ATTACK },
      attacks: [
        { name: "Placaje", type: "Normal", min: 10, max: 16, desc: "Un golpe con todo el cuerpo." },
        { name: "Mordisco Ígneo", type: "Fuego", min: 14, max: 22, desc: "Un mordisco que quema al rival." },
        { name: "Explosión de Brasas", type: "Fuego", min: 18, max: 26, desc: "Una explosión de chispas ardientes." }
      ]
    },
    burbu: {
      id: "burbu",
      name: "Burbu",
      type: "Agua",
      color: "#38bdf8",
      desc: "Una gotita vivaz: salpica de alegría y nunca se le acaba el agua.",
      palette: { D: "#075985", B: "#38bdf8", b: "#bae6fd", C: "#7dd3fc", W: "#ffffff", K: "#1a1a1a" },
      frames: { idle: BURBU_IDLE, walk: [BURBU_WALK_A, BURBU_WALK_B], attack: BURBU_ATTACK },
      attacks: [
        { name: "Placaje", type: "Normal", min: 10, max: 16, desc: "Un golpe con todo el cuerpo." },
        { name: "Chorro de Agua", type: "Agua", min: 14, max: 22, desc: "Un chorro de agua a presión." },
        { name: "Marea Burbuja", type: "Agua", min: 15, max: 22, desc: "Una marea de burbujas que también cura 6 PS.", heal: 6 }
      ]
    }
  };

  var TRAINERS = {
    chico: {
      id: "chico",
      name: "Entrenador",
      palette: { D: "#1f2937", C: "#2563eb", S: "#fcd9b8", R: "#dc2626", J: "#1d4ed8", W: "#ffffff", K: "#111111" },
      frames: { walk: [CHICO_A, CHICO_B] }
    },
    chica: {
      id: "chica",
      name: "Entrenadora",
      palette: { D: "#1f2937", H: "#7c2d12", S: "#fcd9b8", R: "#dc2626", N: "#374151", W: "#ffffff", K: "#111111" },
      frames: { walk: [CHICA_A, CHICA_B] }
    }
  };

  /* Tabla de tipos: Hoja > Agua > Fuego > Hoja */
  var TYPE_CHART = {
    Hoja: { Agua: 1.5, Fuego: 0.7 },
    Agua: { Fuego: 1.5, Hoja: 0.7 },
    Fuego: { Hoja: 1.5, Agua: 0.7 },
    Normal: {}
  };

  function effectiveness(attackType, defenderType) {
    var row = TYPE_CHART[attackType] || {};
    return row[defenderType] || 1;
  }

  /* ---------------- Dibujo ---------------- */

  function drawMap(ctx, rows, palette, x, y, scale, flip) {
    var h = rows.length, w = rows[0].length;
    for (var r = 0; r < h; r++) {
      var row = rows[r];
      for (var c = 0; c < w; c++) {
        var ch = flip ? row[w - 1 - c] : row[c];
        if (ch === ".") continue;
        var color = palette[ch];
        if (!color) continue;
        ctx.fillStyle = color;
        ctx.fillRect(x + c * scale, y + r * scale, scale, scale);
      }
    }
  }

  function drawCreature(ctx, id, kind, index, x, y, scale, flip) {
    var c = CREATURES[id];
    if (!c) return;
    var rows;
    if (kind === "walk") rows = c.frames.walk[index % 2];
    else if (kind === "attack") rows = c.frames.attack;
    else rows = c.frames.idle;
    drawMap(ctx, rows, c.palette, x, y, scale || 4, flip);
  }

  function drawTrainer(ctx, id, index, x, y, scale, flip) {
    var t = TRAINERS[id];
    if (!t) return;
    drawMap(ctx, t.frames.walk[index % 2], t.palette, x, y, scale || 4, flip);
  }

  global.SPRITES = {
    CREATURES: CREATURES,
    TRAINERS: TRAINERS,
    effectiveness: effectiveness,
    drawMap: drawMap,
    drawCreature: drawCreature,
    drawTrainer: drawTrainer
  };
})(typeof window !== "undefined" ? window : globalThis);
