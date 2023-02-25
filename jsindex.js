window.addEventListener('load', function () {
  btnCook.onclick = function eval() {
    if (accept.checked) cookies.remove();
    else message.innerHTML = 'You must accept all cookies!';
  };
  document.body.onkeyup = function (evento) {
    if (evento.key.toUpperCase() == 'Q' && evento.shiftKey) {
      location.href = 'contactus.html';
    }
  };
});
