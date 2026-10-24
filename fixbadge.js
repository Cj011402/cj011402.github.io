const fs = require('fs');
const p = 'C:/Users/CJErno/Desktop/FaceAtt/index.html';
let s = fs.readFileSync(p,'utf8');
s = s.replace("#badge { position:absolute; left:10px; right:10px; bottom:10px; padding:8px 12px; border-radius:8px; background:rgba(15,23,42,.85); text-align:center; font-size:14px; }", "#badge { position:absolute; left:10px; right:10px; bottom:10px; padding:8px 12px; border-radius:8px; background:rgba(15,23,42,.92); color:#fff; text-align:center; font-size:14px; text-shadow:0 1px 2px rgba(0,0,0,0.9); }");
s = s.replace("#badge.ok { background:rgba(34,197,94,.9); } #badge.warn { background:rgba(245,158,11,.9); color:#000; } #badge.bad { background:rgba(239,68,68,.9); }", "#badge.ok { background:rgba(34,197,94,.95); color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.8); } #badge.warn { background:rgba(245,158,11,.95); color:#000; text-shadow:none; } #badge.bad { background:rgba(239,68,68,.95); color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.8); }");
fs.writeFileSync(p,s);
console.log('done');
