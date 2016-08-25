// vanilla js

var squares = document.getElementsByClassName('square');

for (var i = 0; i < 10; i++) {  
  (function(n) { 
    var square = squares[n];
    square.addEventListener('click', function() {
      square.style.animationName = 'a' + (n+1);
    }, false);

    square.addEventListener('animationend', function() {
      square.style.animationName = 'none'; 
    }, false);

  })(i);
}


// jQuery
/***********
var squares = $('.square');
squares.each(function(index, element) {
  $(element).click(function() {
    $(element).css('animationName', 'a' + (index+1));
  });
  $(element).one('animationend', function() {
    $(element).css('animationName', 'none');
  });
}); ***********/
