(function() {


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDaUI7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
(function() {
  var ScrollSticker;

  ScrollSticker = (function() {
    function ScrollSticker() {
      this.binders();
    }

    ScrollSticker.prototype.binders = function() {
      return $(window).scroll(function() {
        var scrollTop;
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 165) {
          return $('html').addClass('nav-fixed');
        } else {
          return $('html').removeClass('nav-fixed');
        }
      });
    };

    return ScrollSticker;

  })();

  new ScrollSticker();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbFN0aWNrZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSxhQUFBOztBQUFBLEVBQU07QUFDUyxJQUFBLHVCQUFBLEdBQUE7QUFDWCxNQUFBLElBQUMsQ0FBQSxPQUFELENBQUEsQ0FBQSxDQURXO0lBQUEsQ0FBYjs7QUFBQSw0QkFHQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQ1AsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsU0FBQSxHQUFBO0FBQ2YsWUFBQSxTQUFBO0FBQUEsUUFBQSxTQUFBLEdBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFNBQVYsQ0FBQSxDQUFaLENBQUE7QUFDQSxRQUFBLElBQUcsU0FBQSxJQUFhLEdBQWhCO2lCQUNFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLFdBQW5CLEVBREY7U0FBQSxNQUFBO2lCQUdFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLFdBQXRCLEVBSEY7U0FGZTtNQUFBLENBQWpCLEVBRE87SUFBQSxDQUhULENBQUE7O3lCQUFBOztNQURGLENBQUE7O0FBQUEsRUFhSSxJQUFBLGFBQUEsQ0FBQSxDQWJKLENBQUE7QUFBQSIsImZpbGUiOiJzY3JvbGxTdGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2Nyb2xsU3RpY2tlclxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAYmluZGVycygpXG5cbiAgYmluZGVyczogLT5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKC0+XG4gICAgICBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcbiAgICAgIGlmIHNjcm9sbFRvcCA+PSAxNjVcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduYXYtZml4ZWQnKVxuICAgICAgZWxzZVxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25hdi1maXhlZCcpXG4gICAgKVxuXG5uZXcgU2Nyb2xsU3RpY2tlcigpIl19
(function() {
  var SlideyPages,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SlideyPages = (function() {
    function SlideyPages() {
      this.onStateChanged = __bind(this.onStateChanged, this);
      this.onLinkClicked = __bind(this.onLinkClicked, this);
      this.currentLevel = this.getLevel(document.location.pathname);
      this.binders();
    }

    SlideyPages.prototype.binders = function() {
      $('body').on('click', '[data-slidey]', this.onLinkClicked);
      return History.Adapter.bind(window, 'statechange', this.onStateChanged);
    };

    SlideyPages.prototype.getLevel = function(url) {
      return url.split('/').length - 1 || null;
    };

    SlideyPages.prototype.onLinkClicked = function(e) {
      var href, level, title;
      e.preventDefault();
      href = $(e.currentTarget).attr('href');
      title = $(e.currentTarget).attr('title');
      level = this.getLevel(href);
      return $.get(href).done(function(data) {
        var content;
        content = $(data).find('#content').html();
        return History.pushState({
          content: content,
          level: level
        }, title, href);
      }).fail(function() {
        return console.error('failed :/');
      });
    };

    SlideyPages.prototype.onStateChanged = function() {
      var content, level, state;
      state = History.getState();
      level = state.data.level;
      content = state.data.content;
      return this.slidey(content);
    };

    SlideyPages.prototype.slidey = function(content) {
      $('html').removeClass('hero-header');
      return $('#content').html(content);
    };

    return SlideyPages;

  })();

  new SlideyPages();

}).call(this);

//# sourceMappingURL=data:application/json;base64,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QTs7QUFBQSxFQXdDSSxJQUFBLFdBQUEsQ0FBQSxDQXhDSixDQUFBO0FBQUEiLCJmaWxlIjoic2xpZGV5UGFnZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTbGlkZXlQYWdlc1xuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAY3VycmVudExldmVsID0gQGdldExldmVsKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgIEBiaW5kZXJzKClcblxuICBiaW5kZXJzOiAtPlxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtc2xpZGV5XScsIEBvbkxpbmtDbGlja2VkKVxuICAgIEhpc3RvcnkuQWRhcHRlci5iaW5kKHdpbmRvdywgJ3N0YXRlY2hhbmdlJywgQG9uU3RhdGVDaGFuZ2VkKVxuXG4gIGdldExldmVsOiAodXJsKSAtPiByZXR1cm4gdXJsLnNwbGl0KCcvJykubGVuZ3RoIC0gMSB8fCBudWxsXG5cbiAgb25MaW5rQ2xpY2tlZDogKGUpID0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBocmVmICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJylcbiAgICB0aXRsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCd0aXRsZScpXG4gICAgbGV2ZWwgPSBAZ2V0TGV2ZWwoaHJlZilcblxuICAgICQuZ2V0KGhyZWYpXG4gICAgICAuZG9uZSgoZGF0YSkgLT5cbiAgICAgICAgY29udGVudCA9ICQoZGF0YSkuZmluZCgnI2NvbnRlbnQnKS5odG1sKClcblxuICAgICAgICBIaXN0b3J5LnB1c2hTdGF0ZSh7IGNvbnRlbnQ6IGNvbnRlbnQsIGxldmVsOiBsZXZlbCB9LCB0aXRsZSwgaHJlZilcbiAgICAgIClcbiAgICAgIC5mYWlsKC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgJ2ZhaWxlZCA6LydcbiAgICAgIClcblxuICBvblN0YXRlQ2hhbmdlZDogPT5cbiAgICBzdGF0ZSAgID0gSGlzdG9yeS5nZXRTdGF0ZSgpXG4gICAgbGV2ZWwgICA9IHN0YXRlLmRhdGEubGV2ZWxcbiAgICBjb250ZW50ID0gc3RhdGUuZGF0YS5jb250ZW50XG4gICAgIyBIaXN0b3J5LmxvZygnc3RhdGVjaGFuZ2U6Jywgc3RhdGUuZGF0YSwgc3RhdGUudGl0bGUsIHN0YXRlLnVybClcblxuICAgIEBzbGlkZXkoY29udGVudClcblxuICBzbGlkZXk6IChjb250ZW50KSAtPlxuICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnaGVyby1oZWFkZXInKVxuICAgICQoJyNjb250ZW50JykuaHRtbChjb250ZW50KVxuXG5uZXcgU2xpZGV5UGFnZXMoKSJdfQ==