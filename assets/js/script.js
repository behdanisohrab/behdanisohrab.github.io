var typed = new Typed('#typing', {
    strings: ['I think, therefore I am. (René Descartes) '],
    typeSpeed: 50,
    startDelay: 500,
    showCursor: false,
});


document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});



$('#menu-button').click(function() {
  $('#menu').toggle(200);
});


$(document).click(function(event) {
  var target = $(event.target);
  if (!target.closest('#menu-button').length) {
    $('#menu').hide(200);
  }
});