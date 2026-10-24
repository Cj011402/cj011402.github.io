const fs = require('fs');
const p = 'C:/Users/CJErno/Desktop/FaceAtt/index.html';
let s = fs.readFileSync(p,'utf8');
const old = '</body>';
const neu = '  <canvas id="confetti-canvas"></canvas>\n  <div id="appModal" class="modal-overlay" style="display:none;">\n    <div class="modal" id="modalContent">\n      <span class="modal-icon" id="modalIcon">🎉</span>\n      <h2 class="modal-title" id="modalTitle">Success!</h2>\n      <p class="modal-message" id="modalMessage">Congratulations!</p>\n      <button class="modal-btn" id="modalBtn">OK</button>\n    </div>\n  </div>\n</body>';
if(s.includes(old)){
  s = s.split(old).join(neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
