(function() {
  var poo, _ref;

  if ((_ref = window.L) == null) {
    window.L = {};
  }

  L.Nav = (function() {
    var binders;

    function Nav() {
      binders();
    }

    binders = function() {
      return console.log('ok');
    };

    return Nav;

  })();

  poo = new L.Nav;

}).call(this);
