function alphaFilterKeypress(a){a=a||window.event;a=String.fromCharCode(a.keyCode||a.which);return/[a-z0-9\-]/i.test(a)}window.onload=function(){document.getElementById("personid").onkeypress=alphaFilterKeypress};