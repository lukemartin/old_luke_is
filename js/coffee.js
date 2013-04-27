(function() {
  var poo, _ref;

  if ((_ref = window.L) == null) {
    window.L = {};
  }

  L.Nav = (function() {
    var binders, pageRequest, populate;

    function Nav() {
      binders();
    }

    binders = function() {
      History.Adapter.bind(window, 'statechange', function() {
        var State;

        State = History.getState();
        return $('#content').fadeOut(125, function() {
          return $(this).html(State.data.content).fadeIn(125);
        });
      });
      return $('body').on('click', 'a', function(e) {
        var href, utils;

        href = this.href;
        utils = new L.Utils;
        if (utils.externalUrl(href)) {
          return true;
        }
        e.preventDefault();
        pageRequest(href);
        return $('#mobile-nav').attr('checked', false);
      });
    };

    pageRequest = function(url) {
      return $.get(url, function(data) {
        return populate(data, url);
      });
    };

    populate = function(data, url) {
      var content, title;

      title = $(data).find('.content-title').text();
      content = $(data).find('#content').html();
      return History.pushState({
        content: content
      }, title, url);
    };

    return Nav;

  })();

  L.Utils = (function() {
    function Utils() {}

    Utils.prototype.externalUrl = function(url) {
      return false;
    };

    return Utils;

  })();

  poo = new L.Nav();

}).call(this);
