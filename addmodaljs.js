const fs = require('fs');
const p = 'C:/Users/CJErno/Desktop/FaceAtt/index.html';
let s = fs.readFileSync(p,'utf8');
const old = "  function badge(text, cls) { const b = $('badge'); b.textContent = text; b.className = cls || ''; }\n  function say(text) { const p = $('prompt'); p.textContent = text || ''; p.hidden = !text; }";
const neu = "  function badge(text, cls) { const b = $('badge'); b.textContent = text; b.className = cls || ''; }\n  function say(text) { const p = $('prompt'); p.textContent = text || ''; p.hidden = !text; }\n\n  /* Confetti */\n  function shootConfetti() {\n    const canvas = document.getElementById('confetti-canvas');\n    if (typeof confetti === 'function') {\n      const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });\n      const duration = 3000;\n      const end = Date.now() + duration;\n      (function frame() {\n        myConfetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });\n        myConfetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });\n        if (Date.now() < end) { requestAnimationFrame(frame); }\n      }());\n    }\n  }\n\n  /* Modal */\n  function showModal(opts) {\n    const overlay = document.getElementById('appModal');\n    const modal = document.getElementById('modalContent');\n    const icon = document.getElementById('modalIcon');\n    const title = document.getElementById('modalTitle');\n    const msg = document.getElementById('modalMessage');\n    const btn = document.getElementById('modalBtn');\n    modal.className = 'modal ' + (opts.type || '');\n    icon.textContent = opts.icon || '🎉';\n    title.textContent = opts.title || 'Success!';\n    msg.textContent = opts.message || '';\n    btn.onclick = function() { overlay.style.display = 'none'; };\n    overlay.style.display = 'flex';\n    if (opts.type === 'success') { shootConfetti(); }\n  }";
if(s.includes(old)){
  s = s.replace(old, neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
