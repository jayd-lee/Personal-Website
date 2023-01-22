function setTime() {
    var d = new Date;
  
    function ct(v) {
      return v * 360 / 60;
    };
  
    function ctm(v) {
      return v * 360 / 60 + 6 * ct(d.getSeconds()) / 360; // 1min = 6 deg
    };
  
    function cth(v) {
      return v * 360 / 12 + 30 * ct(d.getMinutes()) / 360; // 1h = 30 deg
    };
  
    document.getElementsByClassName('sec-needle')[0].style.transform = 'rotateZ(' + ct(d.getSeconds()) + 'deg)';
    document.getElementsByClassName('min')[0].style.transform = 'rotateZ(' + ctm(d.getMinutes()) + 'deg)';
    document.getElementsByClassName('hr')[0].style.transform = 'rotateZ(' + cth(d.getHours()) + 'deg)';
  }
  
  document.getElementById('start-stop').onclick = function(e) {
    e.preventDefault();
    var elem = document.getElementsByClassName('stopwatch');
    var state = 'running' == elem[0].style.animationPlayState ? 'paused' : 'running';
    for (var i = 0; i < elem.length; i++) {
      elem[i].style.animationPlayState = state;
      if (-1 == elem[i].className.indexOf('animate')) {
        elem[i].className = elem[i].className + ' animate';
      }
    }
  };
  
  document.getElementById('reset').onclick = function(e) {
    e.preventDefault();
    var newone;
    var elem = document.getElementsByClassName('stopwatch');
    for (var i = 0; i < elem.length; i++) {
      newone = elem[i].cloneNode(true);
      elem[i].parentNode.replaceChild(newone, elem[i]);
    }
  };
  
  setTime();