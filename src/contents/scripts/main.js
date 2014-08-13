(function() {
  var $, History, PageAnimator,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  $ = jQuery;

  History = window.History;

  $.fn.extend({
    middleAlign: function(options) {
      return $(window).resize((function(_this) {
        return function() {
          return _this.each(function() {
            var h, wh;
            wh = $('.header-wrap').outerHeight();
            h = $(this).outerHeight();
            if (wh > h) {
              return $(this).css('top', (wh - h) / 2);
            }
          });
        };
      })(this)).resize();
    }
  });

  $('.js-middle-align').middleAlign();

  $.fn.extend({
    maxHeight: function(options) {
      return $(window).resize((function(_this) {
        return function() {
          return _this.each(function() {
            var wh;
            wh = $(window).outerHeight();
            return $(this).css('height', wh);
          });
        };
      })(this)).resize();
    }
  });

  $('.js-max-height').maxHeight();

  $.fn.extend({
    marginTop: function(options) {
      return $(window).resize((function(_this) {
        return function() {
          return _this.each(function() {
            var wh;
            wh = $(window).outerHeight();
            return $(this).css('top', wh);
          });
        };
      })(this)).resize();
    }
  });

  $('.js-margin-top').marginTop();

  $.fn.extend({
    navLinks: function(options) {
      return this.each(function() {
        return $(this).on('click touchstart', 'a', function(e) {
          var newHeight, newTop, top;
          e.preventDefault();
          newHeight = 300;
          top = $('.js-middle-align').css('top');
          newTop = (300 - $('.js-middle-align').outerHeight()) / 2;
          $('.js-middle-align').animate({
            top: newTop
          }, 150);
          return $('.js-max-height').animate({
            height: 300
          }, 150);
        });
      });
    }
  });

  $.fn.extend({
    ajaxLoader: function(options) {
      var binders, currentLevel, getLevel, linkClicked;
      binders = function() {
        return $('[data-history]').on('click touchstart', linkClicked);
      };
      getLevel = function(url) {
        return url.split('/').length - 1;
      };
      linkClicked = function(e) {
        var href, level;
        e.preventDefault();
        href = $(e.currentTarget).attr('href');
        level = getLevel(href);
        return console.log(level);
      };
      currentLevel = getLevel(document.location.pathname);
      console.log(currentLevel);
      return binders();
    }
  });

  PageAnimator = (function() {
    PageAnimator.prototype.defaults = {};

    function PageAnimator(el, options) {
      this.onStateChange = __bind(this.onStateChange, this);
      this.onLinkClicked = __bind(this.onLinkClicked, this);
      this.options = $.extend({}, this.defaults, options);
      this.$el = $(el);
      this.currentLevel = this.getLevel(document.location.pathname);
      this.binders();
    }

    PageAnimator.prototype.binders = function() {
      this.$el.on('click touchstart', '[data-pa]', this.onLinkClicked);
      return History.Adapter.bind(window, 'statechange', this.onStateChange);
    };

    PageAnimator.prototype.onLinkClicked = function(e) {
      var href, level, title;
      e.preventDefault();
      href = $(e.currentTarget).attr('href');
      title = $(e.currentTarget).attr('title') + ' - somename';
      level = this.getLevel(href);
      return $.get(href).done(function(data) {
        var content;
        content = $(data).find('#content').html();
        return History.pushState({
          content: content,
          level: level
        }, title, href);
      }).fail(function() {
        return console.log('failed :(');
      });
    };

    PageAnimator.prototype.onStateChange = function() {
      var content, level, state;
      state = History.getState();
      level = state.data.level;
      content = state.data.content;
      if (level === this.currentLevel) {
        this.animateSibling(content);
      }
      if (level < this.currentLevel) {
        this.animateBackwards(content);
      }
      if (level > this.currentLevel) {
        this.animateForwards(content);
      }
      return this.currentLevel = level;

      /*
      $('#content').fadeOut(125, ->
        $(this).html(state.data.content).fadeIn(125)
        $(window).scrollTop(0)
      )
       */

      /*
      $('#content').html(state.data.content)
       */
    };

    PageAnimator.prototype.animateSibling = function(content) {
      return $('#content').html(content);
    };

    PageAnimator.prototype.animateBackwards = function(content) {
      var $content, $currentSection;
      $content = $(content);
      $content.addClass('anim-left');
      $currentSection = $('#content .section-wrap');
      $('#content').append($content);
      return setTimeout(function() {
        $currentSection.addClass('anim-right');
        $content.removeClass('anim-left');
        return setTimeout(function() {
          return $currentSection.remove();
        }, 2000);
      }, 50);
    };

    PageAnimator.prototype.animateForwards = function(content) {
      var $content, $currentSection;
      $content = $(content);
      $content.addClass('anim-right');
      $currentSection = $('#content .section-wrap');
      $('#content').append($content);
      return setTimeout(function() {
        $currentSection.addClass('anim-left');
        $content.removeClass('anim-right');
        return setTimeout(function() {
          return $currentSection.remove();
        }, 500);
      }, 50);

      /*
      $('#content').slideUp(125, ->
        $(this).html(content).slideDown(125)
      )
       */
    };

    PageAnimator.prototype.getLevel = function(url) {
      return url.split('/').length - 1;
    };

    return PageAnimator;

  })();

  $.fn.extend({
    pageAnimator: function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var $this;
        $this = $(this);
        return new PageAnimator(this, {});
      });
    }
  });

  $('body').pageAnimator();

}).call(this);

//# sourceMappingURL=data:application/json;base64,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RUFKUztNQUFBLENBQVgsRUFPRSxFQVBGLEVBSkE7QUFhQTtBQUFBOzs7O1NBZGU7SUFBQSxDQXZFakIsQ0FBQTs7QUFBQSwyQkE0RkEsUUFBQSxHQUFVLFNBQUMsR0FBRCxHQUFBO0FBQVMsYUFBTyxHQUFHLENBQUMsS0FBSixDQUFVLEdBQVYsQ0FBYyxDQUFDLE1BQWYsR0FBd0IsQ0FBL0IsQ0FBVDtJQUFBLENBNUZWLENBQUE7O3dCQUFBOztNQTdFRixDQUFBOztBQUFBLEVBNEtBLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTCxDQUFZO0FBQUEsSUFBQSxZQUFBLEVBQWMsU0FBQSxHQUFBO0FBQ3hCLFVBQUEsWUFBQTtBQUFBLE1BRHlCLHVCQUFRLDhEQUNqQyxDQUFBO2FBQUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxTQUFBLEdBQUE7QUFDSixZQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRixDQUFSLENBQUE7ZUFDSSxJQUFBLFlBQUEsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBRkE7TUFBQSxDQUFOLEVBRHdCO0lBQUEsQ0FBZDtHQUFaLENBNUtBLENBQUE7O0FBQUEsRUFrTEEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFlBQVYsQ0FBQSxDQWxMQSxDQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiQgPSBqUXVlcnlcbkhpc3RvcnkgPSB3aW5kb3cuSGlzdG9yeVxuXG4kLmZuLmV4dGVuZFxuICBtaWRkbGVBbGlnbjogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCgnLmhlYWRlci13cmFwJykub3V0ZXJIZWlnaHQoKVxuICAgICAgICBoICA9ICQodGhpcykub3V0ZXJIZWlnaHQoKVxuICAgICAgICBpZiB3aCA+IGggdGhlbiAkKHRoaXMpLmNzcygndG9wJywgKHdoLWgpIC8gMilcbiAgICApLnJlc2l6ZSgpXG5cbiQoJy5qcy1taWRkbGUtYWxpZ24nKS5taWRkbGVBbGlnbigpXG5cbiQuZm4uZXh0ZW5kXG4gIG1heEhlaWdodDogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KClcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsIHdoKVxuICAgICkucmVzaXplKClcblxuJCgnLmpzLW1heC1oZWlnaHQnKS5tYXhIZWlnaHQoKVxuXG5cbiQuZm4uZXh0ZW5kXG4gIG1hcmdpblRvcDogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KClcbiAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIHdoKVxuICAgICkucmVzaXplKClcblxuJCgnLmpzLW1hcmdpbi10b3AnKS5tYXJnaW5Ub3AoKVxuXG5cbiQuZm4uZXh0ZW5kXG4gIG5hdkxpbmtzOiAob3B0aW9ucykgLT5cbiAgICByZXR1cm4gQGVhY2ggKCktPlxuICAgICAgJCh0aGlzKS5vbignY2xpY2sgdG91Y2hzdGFydCcsICdhJywgKGUpIC0+XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBuZXdIZWlnaHQgPSAzMDBcbiAgICAgICAgdG9wID0gJCgnLmpzLW1pZGRsZS1hbGlnbicpLmNzcygndG9wJylcbiAgICAgICAgbmV3VG9wID0gKDMwMCAtICQoJy5qcy1taWRkbGUtYWxpZ24nKS5vdXRlckhlaWdodCgpKSAvIDJcbiAgICAgICAgJCgnLmpzLW1pZGRsZS1hbGlnbicpLmFuaW1hdGUoeyB0b3A6IG5ld1RvcCB9LCAxNTApXG4gICAgICAgICQoJy5qcy1tYXgtaGVpZ2h0JykuYW5pbWF0ZSh7IGhlaWdodDogMzAwIH0sIDE1MClcbiAgICAgIClcbiMgJCgnLm1haW4tbmF2JykubmF2TGlua3MoKVxuXG4kLmZuLmV4dGVuZFxuICBhamF4TG9hZGVyOiAob3B0aW9ucykgLT5cblxuICAgIGJpbmRlcnMgPSAtPlxuICAgICAgJCgnW2RhdGEtaGlzdG9yeV0nKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGxpbmtDbGlja2VkKVxuXG4gICAgZ2V0TGV2ZWwgPSAodXJsKSAtPiByZXR1cm4gdXJsLnNwbGl0KCcvJykubGVuZ3RoIC0gMVxuXG4gICAgbGlua0NsaWNrZWQgPSAoZSkgLT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaHJlZiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJylcbiAgICAgIGxldmVsID0gZ2V0TGV2ZWwoaHJlZilcbiAgICAgIGNvbnNvbGUubG9nIGxldmVsXG5cblxuICAgIGN1cnJlbnRMZXZlbCA9IGdldExldmVsKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgIGNvbnNvbGUubG9nIGN1cnJlbnRMZXZlbFxuICAgIGJpbmRlcnMoKVxuXG4jICQoJ2JvZHknKS5hamF4TG9hZGVyKClcblxuXG5cblxuXG5cbiMgUGFnZUFuaW1hdG9yIENsYXNzXG5jbGFzcyBQYWdlQW5pbWF0b3JcbiAgZGVmYXVsdHM6IHt9XG5cbiAgY29uc3RydWN0b3I6IChlbCwgb3B0aW9ucykgLT5cbiAgICBAb3B0aW9ucyAgICAgID0gJC5leHRlbmQoe30sIEBkZWZhdWx0cywgb3B0aW9ucylcbiAgICBAJGVsICAgICAgICAgID0gJChlbClcbiAgICBAY3VycmVudExldmVsID0gQGdldExldmVsKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgIEBiaW5kZXJzKClcblxuICBiaW5kZXJzOiAtPlxuICAgIEAkZWwub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnW2RhdGEtcGFdJywgQG9uTGlua0NsaWNrZWQpXG4gICAgSGlzdG9yeS5BZGFwdGVyLmJpbmQod2luZG93LCAnc3RhdGVjaGFuZ2UnLCBAb25TdGF0ZUNoYW5nZSlcblxuICBvbkxpbmtDbGlja2VkOiAoZSkgPT5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBocmVmICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJylcbiAgICB0aXRsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCd0aXRsZScpICsgJyAtIHNvbWVuYW1lJ1xuICAgIGxldmVsID0gQGdldExldmVsKGhyZWYpXG5cbiAgICAkLmdldChocmVmKVxuICAgICAgLmRvbmUoKGRhdGEpIC0+XG4gICAgICAgIGNvbnRlbnQgPSAkKGRhdGEpLmZpbmQoJyNjb250ZW50JykuaHRtbCgpXG5cbiAgICAgICAgSGlzdG9yeS5wdXNoU3RhdGUoeyBjb250ZW50OiBjb250ZW50LCBsZXZlbDogbGV2ZWwgfSwgdGl0bGUsIGhyZWYpXG4gICAgICApXG4gICAgICAuZmFpbCgtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZmFpbGVkIDooJ1xuICAgICAgKVxuXG4gIG9uU3RhdGVDaGFuZ2U6ID0+XG4gICAgc3RhdGUgICA9IEhpc3RvcnkuZ2V0U3RhdGUoKVxuICAgIGxldmVsICAgPSBzdGF0ZS5kYXRhLmxldmVsXG4gICAgY29udGVudCA9IHN0YXRlLmRhdGEuY29udGVudFxuICAgICMgSGlzdG9yeS5sb2coJ3N0YXRlY2hhbmdlOicsIHN0YXRlLmRhdGEsIHN0YXRlLnRpdGxlLCBzdGF0ZS51cmwpXG5cbiAgICBpZiBsZXZlbCBpcyBAY3VycmVudExldmVsXG4gICAgICBAYW5pbWF0ZVNpYmxpbmcoY29udGVudClcbiAgICBpZiBsZXZlbCA8IEBjdXJyZW50TGV2ZWxcbiAgICAgIEBhbmltYXRlQmFja3dhcmRzKGNvbnRlbnQpXG4gICAgaWYgbGV2ZWwgPiBAY3VycmVudExldmVsXG4gICAgICBAYW5pbWF0ZUZvcndhcmRzKGNvbnRlbnQpXG5cbiAgICBAY3VycmVudExldmVsID0gbGV2ZWxcblxuICAgICMjI1xuICAgICQoJyNjb250ZW50JykuZmFkZU91dCgxMjUsIC0+XG4gICAgICAkKHRoaXMpLmh0bWwoc3RhdGUuZGF0YS5jb250ZW50KS5mYWRlSW4oMTI1KVxuICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKVxuICAgIClcbiAgICAjIyNcblxuICAgICMjI1xuICAgICQoJyNjb250ZW50JykuaHRtbChzdGF0ZS5kYXRhLmNvbnRlbnQpXG4gICAgIyMjXG5cbiAgYW5pbWF0ZVNpYmxpbmc6IChjb250ZW50KSAtPlxuICAgICQoJyNjb250ZW50JykuaHRtbChjb250ZW50KVxuXG4gIGFuaW1hdGVCYWNrd2FyZHM6IChjb250ZW50KSAtPlxuICAgICRjb250ZW50ID0gJChjb250ZW50KVxuICAgICRjb250ZW50LmFkZENsYXNzKCdhbmltLWxlZnQnKVxuICAgICRjdXJyZW50U2VjdGlvbiA9ICQoJyNjb250ZW50IC5zZWN0aW9uLXdyYXAnKVxuICAgICQoJyNjb250ZW50JykuYXBwZW5kKCRjb250ZW50KVxuICAgIHNldFRpbWVvdXQoLT5cbiAgICAgICRjdXJyZW50U2VjdGlvbi5hZGRDbGFzcygnYW5pbS1yaWdodCcpXG4gICAgICAkY29udGVudC5yZW1vdmVDbGFzcygnYW5pbS1sZWZ0JylcblxuICAgICAgc2V0VGltZW91dCgtPlxuICAgICAgICAkY3VycmVudFNlY3Rpb24ucmVtb3ZlKClcbiAgICAgICwgMjAwMClcbiAgICAsIDUwKVxuXG4gIGFuaW1hdGVGb3J3YXJkczogKGNvbnRlbnQpIC0+XG4gICAgJGNvbnRlbnQgPSAkKGNvbnRlbnQpXG4gICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FuaW0tcmlnaHQnKVxuICAgICRjdXJyZW50U2VjdGlvbiA9ICQoJyNjb250ZW50IC5zZWN0aW9uLXdyYXAnKVxuICAgICQoJyNjb250ZW50JykuYXBwZW5kKCRjb250ZW50KVxuICAgIHNldFRpbWVvdXQoLT5cbiAgICAgICRjdXJyZW50U2VjdGlvbi5hZGRDbGFzcygnYW5pbS1sZWZ0JylcbiAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKCdhbmltLXJpZ2h0JylcblxuICAgICAgc2V0VGltZW91dCgtPlxuICAgICAgICAkY3VycmVudFNlY3Rpb24ucmVtb3ZlKClcbiAgICAgICwgNTAwKVxuICAgICwgNTApXG5cbiAgICAjIyNcbiAgICAkKCcjY29udGVudCcpLnNsaWRlVXAoMTI1LCAtPlxuICAgICAgJCh0aGlzKS5odG1sKGNvbnRlbnQpLnNsaWRlRG93bigxMjUpXG4gICAgKVxuICAgICMjI1xuXG4gICMgUHJpdmF0ZVxuICBnZXRMZXZlbDogKHVybCkgLT4gcmV0dXJuIHVybC5zcGxpdCgnLycpLmxlbmd0aCAtIDFcblxuIyBQYWdlQW5pbWF0b3IgUGx1Z2luXG4kLmZuLmV4dGVuZCBwYWdlQW5pbWF0b3I6IChvcHRpb24sIGFyZ3MuLi4pIC0+XG4gIEBlYWNoIC0+XG4gICAgJHRoaXMgPSAkKHRoaXMpXG4gICAgbmV3IFBhZ2VBbmltYXRvcih0aGlzLCB7fSlcblxuIyBQYWdlQW5pbWF0b3IgQm9vdHN0cmFwXG4kKCdib2R5JykucGFnZUFuaW1hdG9yKCkiXX0=