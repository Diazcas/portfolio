import { changeSOut } from './changeS.js';
import { showSocial} from './followMe.js'
console.log(changeSOut);

const d = document;
const body = d.getElementsByTagName("body")[0];
var loadingC = d.getElementById("loading");
var loadingCC = d.getElementsByTagName("loading")[0];
var elh1 = d.getElementsByTagName("h1");
var h1Efe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(window.screen);

function welcome(i, x) {
  // if (i <= 4) {
  //   setTimeout(() => {
  //     elh1[i].classList = 'hover';
  //   }, x);
  //   setTimeout(() => {
  //     elh1[i].classList = '';
  //   }, x + 300);
  // } else {
  // }
    setTimeout(() => {
      elh1[i].classList = 'hover';
    }, x + 600);
    setTimeout(() => {
      elh1[i].classList = '';
    }, x + 900);
}



if (sessionStorage.getItem('welcome') == 'true') {
  //Quitar pantalla negra
  changeSOut();
  body.classList = "activeComing";
  showSocial();
  setTimeout(() => {
    var x = 200;
    for (var i = 0; i <= elh1.length; i++) {
      welcome(i, x);
      x += 100;
    }
  }, 1000);
  setTimeout(() => {
    d.getElementById('again').classList = 'active';
  }, 3500);

} else {
  window.onload = function () {
    loadingCC.classList = ('on');
    setTimeout(() => {
      var spanL = loadingC.children[0];
      spanL.classList = "lleno";
      setTimeout(() => {
        spanL = loadingC.children[1];
        spanL.classList = "lleno";
      }, 500);
      setTimeout(() => {
        spanL = loadingC.children[2];
        spanL.classList = "active";
      }, 1500);
      setTimeout(() => {
        loadingC.classList = "exit";
        loadingCC.classList = "on exit";
      }, 2500);

      setTimeout(() => {
        body.classList = "active";
      }, 3000);

      setTimeout(() => {
        d.getElementsByClassName("about")[0].classList = "about active";
        waveRot();
      }, 3500);
      setTimeout(() => {
        var x = 200;
        for (var i = 0; i <= elh1.length; i++) {
          welcome(i, x);
          x += 100;
        }
      }, 4500);
      setTimeout(() => {
        showSocial();
      }, 6000);

    }, 500);
  }
}

for (var i = 0; i <= elh1.length; i++) {
  if (i != 0 || i != 5) {
    elh1[i].addEventListener(
      "mouseover",
      function (e) {
        if (this.classList == "hover") {
        } else {
          this.classList = "hover";
          setTimeout(() => {
            this.classList = "";
          }, 300);
        }
      }, false);
  }
}

sessionStorage.setItem('welcome', 'false');
