(function() {


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHaUI7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
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
      this.slideyBackwards = __bind(this.slideyBackwards, this);
      this.slideyForwards = __bind(this.slideyForwards, this);
      this.slideySibling = __bind(this.slideySibling, this);
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
      title = $(e.currentTarget).data('title');
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
      if (level === this.currentLevel) {
        this.slideySibling(content);
      }
      if (level < this.currentLevel) {
        this.slideyBackwards(content);
      }
      if (level > this.currentLevel) {
        this.slideyForwards(content);
      }
      return this.currentLevel = level;
    };

    SlideyPages.prototype.slideySibling = function(content) {
      var $newContent, $oldContent, newContentHeight;
      $newContent = $(content).css({
        opacity: 0,
        position: 'absolute'
      });
      $oldContent = $('#content .section-wrap:first');
      $('#content').prepend($newContent);
      newContentHeight = $newContent.outerHeight();
      $newContent.velocity({
        translateY: -newContentHeight
      }, 0, function() {
        return $newContent.velocity({
          translateY: 0,
          opacity: 1
        }, 250, function() {
          return $newContent.css({
            position: 'relative'
          });
        });
      });
      return $oldContent.velocity({
        translateY: newContentHeight,
        opacity: 0
      }, 250, function() {
        return $oldContent.remove();
      });
    };

    SlideyPages.prototype.slideyForwards = function(content) {
      var $newContent, $oldContent;
      $('html').removeClass('hero-header');
      $newContent = $(content).css({
        opacity: 0,
        position: 'absolute',
        top: 0
      });
      $oldContent = $('#content .section-wrap:first');
      $('#content').append($newContent);
      $newContent.velocity({
        translateX: '100%'
      }, 0, function() {
        return $newContent.velocity({
          translateX: 0,
          opacity: 1
        }, 250, function() {
          return $newContent.css({
            position: 'relative'
          });
        });
      });
      return $oldContent.velocity({
        translateX: '-100%',
        opacity: 0
      }, 250, function() {
        return $oldContent.remove();
      });
    };

    SlideyPages.prototype.slideyBackwards = function(content) {
      var $newContent, $oldContent;
      $newContent = $(content).css({
        opacity: 0,
        position: 'absolute',
        top: 0
      });
      $oldContent = $('#content .section-wrap:first');
      $('#content').append($newContent);
      $newContent.velocity({
        translateX: '-100%'
      }, 0, function() {
        return $newContent.velocity({
          translateX: 0,
          opacity: 1
        }, 250, function() {
          return $newContent.css({
            position: 'relative'
          });
        });
      });
      return $oldContent.velocity({
        translateX: '100%',
        opacity: 0
      }, 250, function() {
        return $oldContent.remove();
      });
    };

    return SlideyPages;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,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L0RoQixDQUFBOztBQUFBLDBCQXFGQSxlQUFBLEdBQWlCLFNBQUMsT0FBRCxHQUFBO0FBQ2YsVUFBQSx3QkFBQTtBQUFBLE1BQUEsV0FBQSxHQUFjLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxHQUFYLENBQ1o7QUFBQSxRQUFBLE9BQUEsRUFBUyxDQUFUO0FBQUEsUUFDQSxRQUFBLEVBQVUsVUFEVjtBQUFBLFFBRUEsR0FBQSxFQUFLLENBRkw7T0FEWSxDQUFkLENBQUE7QUFBQSxNQUlBLFdBQUEsR0FBYyxDQUFBLENBQUUsOEJBQUYsQ0FKZCxDQUFBO0FBQUEsTUFNQSxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsTUFBZCxDQUFxQixXQUFyQixDQU5BLENBQUE7QUFBQSxNQVFBLFdBQVcsQ0FBQyxRQUFaLENBQXFCO0FBQUEsUUFBRSxVQUFBLEVBQVksT0FBZDtPQUFyQixFQUE4QyxDQUE5QyxFQUFpRCxTQUFBLEdBQUE7ZUFDL0MsV0FBVyxDQUFDLFFBQVosQ0FBcUI7QUFBQSxVQUFFLFVBQUEsRUFBWSxDQUFkO0FBQUEsVUFBaUIsT0FBQSxFQUFTLENBQTFCO1NBQXJCLEVBQW9ELEdBQXBELEVBQXlELFNBQUEsR0FBQTtpQkFDdkQsV0FBVyxDQUFDLEdBQVosQ0FDRTtBQUFBLFlBQUEsUUFBQSxFQUFVLFVBQVY7V0FERixFQUR1RDtRQUFBLENBQXpELEVBRCtDO01BQUEsQ0FBakQsQ0FSQSxDQUFBO2FBY0EsV0FBVyxDQUFDLFFBQVosQ0FBcUI7QUFBQSxRQUFFLFVBQUEsRUFBWSxNQUFkO0FBQUEsUUFBc0IsT0FBQSxFQUFTLENBQS9CO09BQXJCLEVBQXlELEdBQXpELEVBQThELFNBQUEsR0FBQTtlQUM1RCxXQUFXLENBQUMsTUFBWixDQUFBLEVBRDREO01BQUEsQ0FBOUQsRUFmZTtJQUFBLENBckZqQixDQUFBOzt1QkFBQTs7TUFERixDQUFBO0FBQUEiLCJmaWxlIjoic2xpZGV5UGFnZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTbGlkZXlQYWdlc1xuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAY3VycmVudExldmVsID0gQGdldExldmVsKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgIEBiaW5kZXJzKClcblxuICBiaW5kZXJzOiAtPlxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtc2xpZGV5XScsIEBvbkxpbmtDbGlja2VkKVxuICAgIEhpc3RvcnkuQWRhcHRlci5iaW5kKHdpbmRvdywgJ3N0YXRlY2hhbmdlJywgQG9uU3RhdGVDaGFuZ2VkKVxuXG4gIGdldExldmVsOiAodXJsKSAtPiByZXR1cm4gdXJsLnNwbGl0KCcvJykubGVuZ3RoIC0gMSB8fCBudWxsXG5cbiAgb25MaW5rQ2xpY2tlZDogKGUpID0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBocmVmICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJylcbiAgICB0aXRsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCd0aXRsZScpXG4gICAgbGV2ZWwgPSBAZ2V0TGV2ZWwoaHJlZilcblxuICAgICQuZ2V0KGhyZWYpXG4gICAgICAuZG9uZSgoZGF0YSkgLT5cbiAgICAgICAgY29udGVudCA9ICQoZGF0YSkuZmluZCgnI2NvbnRlbnQnKS5odG1sKClcblxuICAgICAgICBIaXN0b3J5LnB1c2hTdGF0ZSh7IGNvbnRlbnQ6IGNvbnRlbnQsIGxldmVsOiBsZXZlbCB9LCB0aXRsZSwgaHJlZilcbiAgICAgIClcbiAgICAgIC5mYWlsKC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgJ2ZhaWxlZCA6LydcbiAgICAgIClcblxuICBvblN0YXRlQ2hhbmdlZDogPT5cbiAgICBzdGF0ZSAgID0gSGlzdG9yeS5nZXRTdGF0ZSgpXG4gICAgbGV2ZWwgICA9IHN0YXRlLmRhdGEubGV2ZWxcbiAgICBjb250ZW50ID0gc3RhdGUuZGF0YS5jb250ZW50XG4gICAgIyBIaXN0b3J5LmxvZygnc3RhdGVjaGFuZ2U6Jywgc3RhdGUuZGF0YSwgc3RhdGUudGl0bGUsIHN0YXRlLnVybClcblxuICAgIGlmIGxldmVsIGlzIEBjdXJyZW50TGV2ZWxcbiAgICAgIEBzbGlkZXlTaWJsaW5nKGNvbnRlbnQpXG4gICAgaWYgbGV2ZWwgPCBAY3VycmVudExldmVsXG4gICAgICBAc2xpZGV5QmFja3dhcmRzKGNvbnRlbnQpXG4gICAgaWYgbGV2ZWwgPiBAY3VycmVudExldmVsXG4gICAgICBAc2xpZGV5Rm9yd2FyZHMoY29udGVudClcblxuICAgIEBjdXJyZW50TGV2ZWwgPSBsZXZlbFxuXG4gIHNsaWRleVNpYmxpbmc6IChjb250ZW50KSA9PlxuICAgICRuZXdDb250ZW50ID0gJChjb250ZW50KS5jc3NcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgJG9sZENvbnRlbnQgPSAkKCcjY29udGVudCAuc2VjdGlvbi13cmFwOmZpcnN0JylcblxuICAgICQoJyNjb250ZW50JykucHJlcGVuZCgkbmV3Q29udGVudClcblxuICAgIG5ld0NvbnRlbnRIZWlnaHQgPSAkbmV3Q29udGVudC5vdXRlckhlaWdodCgpXG5cbiAgICAkbmV3Q29udGVudC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IC1uZXdDb250ZW50SGVpZ2h0IH0sIDAsIC0+XG4gICAgICAkbmV3Q29udGVudC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDEgfSwgMjUwLCAtPlxuICAgICAgICAkbmV3Q29udGVudC5jc3NcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgKVxuICAgIClcbiAgICAkb2xkQ29udGVudC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IG5ld0NvbnRlbnRIZWlnaHQsIG9wYWNpdHk6IDAgfSwgMjUwLCAtPlxuICAgICAgJG9sZENvbnRlbnQucmVtb3ZlKClcbiAgICAgICMgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDE2NSB9LCAxNTApXG4gICAgKVxuXG4gIHNsaWRleUZvcndhcmRzOiAoY29udGVudCkgPT5cbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2hlcm8taGVhZGVyJylcblxuICAgICRuZXdDb250ZW50ID0gJChjb250ZW50KS5jc3NcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB0b3A6IDBcbiAgICAkb2xkQ29udGVudCA9ICQoJyNjb250ZW50IC5zZWN0aW9uLXdyYXA6Zmlyc3QnKVxuXG4gICAgJCgnI2NvbnRlbnQnKS5hcHBlbmQoJG5ld0NvbnRlbnQpXG5cbiAgICAkbmV3Q29udGVudC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6ICcxMDAlJyB9LCAwLCAtPlxuICAgICAgJG5ld0NvbnRlbnQudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiAwLCBvcGFjaXR5OiAxIH0sIDI1MCwgLT5cbiAgICAgICAgJG5ld0NvbnRlbnQuY3NzXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIClcbiAgICApXG4gICAgJG9sZENvbnRlbnQudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiAnLTEwMCUnLCBvcGFjaXR5OiAwIH0sIDI1MCwgLT5cbiAgICAgICRvbGRDb250ZW50LnJlbW92ZSgpXG4gICAgICAjICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAxNjUgfSwgMTUwKVxuICAgIClcblxuICBzbGlkZXlCYWNrd2FyZHM6IChjb250ZW50KSA9PlxuICAgICRuZXdDb250ZW50ID0gJChjb250ZW50KS5jc3NcbiAgICAgIG9wYWNpdHk6IDBcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB0b3A6IDBcbiAgICAkb2xkQ29udGVudCA9ICQoJyNjb250ZW50IC5zZWN0aW9uLXdyYXA6Zmlyc3QnKVxuXG4gICAgJCgnI2NvbnRlbnQnKS5hcHBlbmQoJG5ld0NvbnRlbnQpXG5cbiAgICAkbmV3Q29udGVudC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6ICctMTAwJScgfSwgMCwgLT5cbiAgICAgICRuZXdDb250ZW50LnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogMCwgb3BhY2l0eTogMSB9LCAyNTAsIC0+XG4gICAgICAgICRuZXdDb250ZW50LmNzc1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICApXG4gICAgKVxuICAgICRvbGRDb250ZW50LnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogJzEwMCUnLCBvcGFjaXR5OiAwIH0sIDI1MCwgLT5cbiAgICAgICRvbGRDb250ZW50LnJlbW92ZSgpXG4gICAgICAjICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAxNjUgfSwgMTUwKVxuICAgIClcblxuXG5cbiMgbmV3IFNsaWRleVBhZ2VzKCkiXX0=