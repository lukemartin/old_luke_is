(function() {


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFtQjtBQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiJdfQ==
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