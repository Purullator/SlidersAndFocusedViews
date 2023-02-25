window.addEventListener('load', function () {
  var galeriaImg = document.querySelectorAll('#welcomepic img');
  for (let img of galeriaImg) {
    img.onclick = function () {
      var newImg = this.cloneNode(true);

      newImg.className = 'grande';

      newImg.onclick = function () {
        this.remove();
      };
      document.body.appendChild(newImg);
    };
  }
  var images = [
    'img/pcgamingi7rtx3070.jpg',
    'img/pc2ryzen7rtx3060.jpg',
    'img/pc3gtx1650.jpg',
    'img/pc4ryzenrtx3060.jpg',
    'img/pc5icore5.jpg',
    'img/pc6complete.webp',
    'img/pc7i5gtx1650.jpg',
    'img/pc8ryzen5rtx3050.jpg',
  ];

  var i = 0;

  function change() {
    setTimeout(function () {
      welcomepic.firstElementChild.style.opacity = '0';
    }, 1000);

    setTimeout(function () {
      i = (i + 1) % images.length;
      welcomepic.firstElementChild.src = images[i];
      updateDot();
    }, 2000);

    setTimeout(function () {
      welcomepic.firstElementChild.style.opacity = '1';
    }, 3250);
  }

  function updateDot() {
    var dots = dotContainer.children;
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove('active');
    }
    dots[i].classList.add('active');
  }

  welcomepic.firstElementChild.src = images[images.length - 1];

  var interval = setInterval(change, 15000);

  btns.firstElementChild.addEventListener('click', function () {
    clearInterval(interval);
    i = (i - 1 + images.length) % images.length;
    welcomepic.firstElementChild.src = images[i];
    updateDot();
    interval = setInterval(change, 15000);
  });

  btns.lastElementChild.addEventListener('click', function () {
    clearInterval(interval);
    i = (i + 1) % images.length;
    welcomepic.firstElementChild.src = images[i];
    updateDot();
    interval = setInterval(change, 15000);
  });
  var dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  for (let j = 0; j < images.length; j++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
  }
  btns.appendChild(dotContainer);
  dotContainer.firstElementChild.classList.add('active');
});
