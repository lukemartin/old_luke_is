(function() {
  var eh, nav, _ref;

  if ((_ref = window.L) == null) {
    window.L = {};
  }

  L.Nav = (function() {
    /*
    	constructor
    	{param} Thing
    */

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
        if (utils.externalUrl.href) {
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

  L.EvenHeights = (function() {
    var adjustHeights, binders, getColumns, resizeHandler;

    function EvenHeights() {
      $('.even-heights').each(function(index, elem) {
        var $elems;

        $elems = {
          $root: $(elem),
          $targets: $(elem).find('.even-heights-target')
        };
        return binders($elems);
      });
    }

    binders = function($elems) {
      return $(window).resize(function() {
        return resizeHandler($elems);
      }).resize();
    };

    adjustHeights = function($elems) {
      var height;

      height = 0;
      $.each($elems, function() {
        var h;

        h = $(this).outerHeight();
        if (h > height) {
          return height = h;
        }
      });
      return $.each($elems, function() {
        return $(this).css('min-height', height);
      });
    };

    resizeHandler = function($elems) {
      var columns, l, num;

      $elems.$targets.css('min-height', 0);
      columns = getColumns($elems);
      l = $elems.$targets.length;
      num = 0;
      while (num < l) {
        adjustHeights($elems.$targets.slice(num, +((num + columns) - 1) + 1 || 9e9));
        num += columns;
      }
      return 'cake';
    };

    getColumns = function($elems) {
      var cols, offset;

      cols = 0;
      offset = 0;
      $.each($elems.$targets, function() {
        var o;

        o = $(this).offset().left;
        if (o <= offset) {
          return false;
        }
        offset = o;
        return cols++;
      });
      return cols;
    };

    return EvenHeights;

  })();

  nav = new L.Nav;

  eh = new L.EvenHeights;

}).call(this);
