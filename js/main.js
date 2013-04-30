(function() {
  var _ref;

  if ((_ref = window.Luke) == null) {
    window.Luke = {};
  }

  Luke.Utils = (function() {
    function Utils() {}

    Utils.prototype.ajax = function(url, callback) {
      var html, req;

      req = new XMLHttpRequest();
      html = '';
      req.addEventListener('readystatechange', function() {
        if (req.readyState === 4) {
          if (req.status === 200 || req.status === 304) {
            html = req.responseText;
          } else {

          }
          return callback({
            status: req.status,
            html: html
          });
        }
      });
      req.open('GET', url, false);
      return req.send();
    };

    return Utils;

  })();

}).call(this);

(function() {
  var nav, _ref;

  if ((_ref = window.Luke) == null) {
    window.Luke = {};
  }

  Luke.Nav = (function() {
    var binders, handleClick, isExternal, request;

    function Nav() {
      binders();
    }

    binders = function() {
      var anchor, anchors, _i, _len, _results;

      anchors = document.getElementsByTagName('a');
      _results = [];
      for (_i = 0, _len = anchors.length; _i < _len; _i++) {
        anchor = anchors[_i];
        _results.push(anchor.addEventListener('click', handleClick, false));
      }
      return _results;
    };

    handleClick = function(event) {
      var url;

      url = this.href;
      if (!isExternal(url)) {
        event.preventDefault();
        return request(url);
      }
    };

    request = function(url) {
      var utils;

      utils = new Luke.Utils;
      return utils.ajax(url, function(response) {
        var content, div;

        if (response.status === 200) {
          div = document.createElement('div');
          div.innerHTML = response.html;
          return content = div.getElementById('content');
        }
      });
    };

    isExternal = function(url) {
      return false;
    };

    return Nav;

  })();

  nav = new Luke.Nav;

}).call(this);
