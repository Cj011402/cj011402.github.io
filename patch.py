import sys

path = 'C:/Users/CJErno/Desktop/FaceAtt/index.html'
with open(path, 'r', encoding='utf-8') as f:
    s = f.read()

old_style = "   #prompt { position:absolute; left:10px; right:10px; top:10px; padding:12px; border-radius:10px; background:rgba(59,130,246,.92); text-align:center; font-size:20px; font-weight:700; }\n   [hidden] { display:none !important; }"
new_style = "   #prompt { position:absolute; left:10px; right:10px; top:10px; padding:12px; border-radius:10px; background:rgba(59,130,246,.92); text-align:center; font-size:20px; font-weight:700; }\n\n   /* Modal */\n   .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; z-index:1000; animation:fadeIn 0.3s ease; }\n   .modal { background:var(--card); border-radius:16px; max-width:400px; width:90%; padding:32px 24px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.5); border:2px solid var(--border); animation:scaleIn 0.3s ease; position:relative; overflow:hidden; }\n   .modal.success { border-color:var(--ok); }\n   .modal.warning { border-color:var(--warn); }\n   .modal-icon { font-size:64px; margin-bottom:16px; display:block; animation:bounce 0.6s ease; }\n   .modal-title { font-size:24px; font-weight:700; margin:0 0 12px; }\n   .modal.success .modal-title { color:var(--ok); }\n   .modal.warning .modal-title { color:var(--warn); }\n   .modal-message { font-size:16px; color:var(--text); margin:0 0 24px; line-height:1.5; }\n   .modal-btn { padding:12px 32px; border:0; border-radius:10px; background:var(--accent); color:#fff; font-size:16px; font-weight:600; cursor:pointer; transition:transform 0.2s; }\n   .modal-btn:hover { transform:scale(1.05); }\n   .modal.success .modal-btn { background:var(--ok); }\n   .modal.warning .modal-btn { background:var(--warn); color:#000; }\n   @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n   @keyframes scaleIn { from { transform:scale(0.8); opacity:0; } to { transform:scale(1); opacity:1; } }\n   @keyframes bounce { 0%, 100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }\n   #confetti-canvas { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1001; }\n   [hidden] { display:none !important; }"

if old_style in s:
    s = s.replace(old_style, new_style)
    print('style ok')
else:
    print('style not found')

old_body = '</body>'
new_body = '  <canvas id="confetti-canvas"></canvas>\n  <div id="appModal" class="modal-overlay" style="display:none;">\n    <div class="modal" id="modalContent">\n      <span class="modal-icon" id="modalIcon">🎉</span>\n      <h2 class="modal-title" id="modalTitle">Success!</h2>\n      <p class="modal-message" id="modalMessage">Congratulations!</p>\n      <button class="modal-btn" id="modalBtn">OK</button>\n    </div>\n  </div>\n</body>'
if old_body in s:
    s = s.replace(old_body, new_body)
    print('html ok')
else:
    print('html not found')

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
