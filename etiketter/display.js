var fs = require('fs');

var etikett = fs.readFileSync('mal.html');
var antall = 4;
var innhold = '';

for (var i = 0; i < antall; i++) {
  innhold += etikett;
}

document.body.innerHTML = innhold;
