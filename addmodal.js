const fs = require('fs');
const p = 'C:/Users/CJErno/Desktop/FaceAtt/index.html';
let s = fs.readFileSync(p,'utf8');
const old = '  [hidden] { display:none !important; }';
const neu = '  [hidden] { display:none !important; }\n\n  /* Modal */\n  .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; z-index:1000; animation:fadeIn 0.3s ease; }\n  .modal { background:var(--card); border-radius:16px; max-width:400px; width:90%; padding:32px 24px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.5); border:2px solid var(--border); animation:scaleIn 0.3s ease; position:relative; overflow:hidden; }\n  .modal.success { border-color:var(--ok); }\n  .modal.warning { border-color:var(--warn); }\n  .modal-icon { font-size:64px; margin-bottom:16px; display:block; animation:bounce 0.6s ease; }\n  .modal-title { font-size:24px; font-weight:700; margin:0 0 12px; }\n  .modal.success .modal-title { color:var(--ok); }\n  .modal.warning .modal-title { color:var(--warn); }\n  .modal-message { font-size:16px; color:var(--text); margin:0 0 24px; line-height:1.5; }\n  .modal-btn { padding:12px 32px; border:0; border-radius:10px; background:var(--accent); color:#fff; font-size:16px; font-weight:600; cursor:pointer; transition:transform 0.2s; }\n  .modal-btn:hover { transform:scale(1.05); }\n  .modal.success .modal-btn { background:var(--ok); }\n  .modal.warning .modal-btn { background:var(--warn); color:#000; }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes scaleIn { from { transform:scale(0.8); opacity:0; } to { transform:scale(1); opacity:1; } }\n  @keyframes bounce { 0%, 100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }\n  #confetti-canvas { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1001; }';
if(s.includes(old)){
  s = s.replace(old, neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
