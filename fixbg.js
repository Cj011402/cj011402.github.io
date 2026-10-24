const fs = require('fs');
const p = 'C:/Users/CJErno/Desktop/FaceAtt/index.html';
let s = fs.readFileSync(p,'utf8');
const old = "  body { margin:0; min-height:100vh; font-family:system-ui,Segoe UI,Roboto,sans-serif; background:var(--bg); color:var(--text); transition:background .2s,color .2s; }";
const neu = "  body { margin:0; min-height:100vh; font-family:system-ui,Segoe UI,Roboto,sans-serif; background:var(--bg); color:var(--text); transition:background .2s,color .2s; position:relative; }";
if(s.includes(old)){
  s = s.replace(old, neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
