path = r"C:\Users\CJErno\Desktop\FaceAtt\index.html"
with open(path, 'r', encoding='utf-8') as f:
    s = f.read()

old = """   #prompt { position:absolute; left:10px; right:10px; top:10px; padding:12px; border-radius:10px; background:rgba(59,130,246,.92); text-align:center; font-size:20px; font-weight:700; }
   [hidden] { display:none !important; }"""

new = """   #prompt { position:absolute; left:10px; right:10px; top:10px; padding:12px; border-radius:10px; background:rgba(59,130,246,.92); text-align:center; font-size:20px; font-weight:700; }

   /* Modal */
   .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; z-index:1000; animation:fadeIn 0.3s ease; }
   .modal { background:var(--card); border-radius:16px; max-width:400px; width:90%; padding:32px 24px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.5); border:2px solid var(--border); animation:scaleIn 0.3s ease; position:relative; overflow:hidden; }
   .modal.success { border-color:var(--ok); }
   .modal.warning { border-color:var(--warn); }
   .modal-icon { font-size:64px; margin-bottom:16px; display:block; animation:bounce 0.6s ease; }
   .modal-title { font-size:24px; font-weight:700; margin:0 0 12px; }
   .modal.success .modal-title { color:var(--ok); }
   .modal.warning .modal-title { color:var(--warn); }
   .modal-message { font-size:16px; color:var(--text); margin:0 0 24px; line-height:1.5; }
   .modal-btn { padding:12px 32px; border:0; border-radius:10px; background:var(--accent); color:#fff; font-size:16px; font-weight:600; cursor:pointer; transition:transform 0.2s; }
   .modal-btn:hover { transform:scale(1.05); }
   .modal.success .modal-btn { background:var(--ok); }
   .modal.warning .modal-btn { background:var(--warn); color:#000; }
   @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
   @keyframes scaleIn { from { transform:scale(0.8); opacity:0; } to { transform:scale(1); opacity:1; } }
   @keyframes bounce { 0%, 100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
   #confetti-canvas { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1001; }
   [hidden] { display:none !important; }"""

if old in s:
    s2 = s.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(s2)
    print('done')
else:
    print('no')
