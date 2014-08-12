(function() {
  var $;

  $ = jQuery;

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

}).call(this);

//# sourceMappingURL=data:application/json;base64,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QTJDLFdBQTNDLEVBRFE7TUFBQSxDQUFWLENBQUE7QUFBQSxNQUdBLFFBQUEsR0FBVyxTQUFDLEdBQUQsR0FBQTtBQUFTLGVBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxHQUFWLENBQWMsQ0FBQyxNQUFmLEdBQXdCLENBQS9CLENBQVQ7TUFBQSxDQUhYLENBQUE7QUFBQSxNQUtBLFdBQUEsR0FBYyxTQUFDLENBQUQsR0FBQTtBQUNaLFlBQUEsV0FBQTtBQUFBLFFBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQSxDQUFBLENBQUE7QUFBQSxRQUNBLElBQUEsR0FBTyxDQUFBLENBQUUsQ0FBQyxDQUFDLGFBQUosQ0FBa0IsQ0FBQyxJQUFuQixDQUF3QixNQUF4QixDQURQLENBQUE7QUFBQSxRQUVBLEtBQUEsR0FBUSxRQUFBLENBQVMsSUFBVCxDQUZSLENBQUE7ZUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRUFKWTtNQUFBLENBTGQsQ0FBQTtBQUFBLE1BWUEsWUFBQSxHQUFlLFFBQUEsQ0FBUyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQTNCLENBWmYsQ0FBQTtBQUFBLE1BYUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaLENBYkEsQ0FBQTthQWNBLE9BQUEsQ0FBQSxFQWhCVTtJQUFBLENBQVo7R0FERixDQWpEQSxDQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiQgPSBqUXVlcnlcblxuXG4kLmZuLmV4dGVuZFxuICBtaWRkbGVBbGlnbjogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCgnLmhlYWRlci13cmFwJykub3V0ZXJIZWlnaHQoKVxuICAgICAgICBoICA9ICQodGhpcykub3V0ZXJIZWlnaHQoKVxuICAgICAgICBpZiB3aCA+IGggdGhlbiAkKHRoaXMpLmNzcygndG9wJywgKHdoLWgpIC8gMilcbiAgICApLnJlc2l6ZSgpXG5cbiQoJy5qcy1taWRkbGUtYWxpZ24nKS5taWRkbGVBbGlnbigpXG5cbiQuZm4uZXh0ZW5kXG4gIG1heEhlaWdodDogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KClcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsIHdoKVxuICAgICkucmVzaXplKClcblxuJCgnLmpzLW1heC1oZWlnaHQnKS5tYXhIZWlnaHQoKVxuXG5cbiQuZm4uZXh0ZW5kXG4gIG1hcmdpblRvcDogKG9wdGlvbnMpIC0+XG4gICAgcmV0dXJuICQod2luZG93KS5yZXNpemUoPT5cbiAgICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAgIHdoID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KClcbiAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIHdoKVxuICAgICkucmVzaXplKClcblxuJCgnLmpzLW1hcmdpbi10b3AnKS5tYXJnaW5Ub3AoKVxuXG5cbiQuZm4uZXh0ZW5kXG4gIG5hdkxpbmtzOiAob3B0aW9ucykgLT5cbiAgICByZXR1cm4gQGVhY2ggKCktPlxuICAgICAgJCh0aGlzKS5vbignY2xpY2sgdG91Y2hzdGFydCcsICdhJywgKGUpIC0+XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBuZXdIZWlnaHQgPSAzMDBcbiAgICAgICAgdG9wID0gJCgnLmpzLW1pZGRsZS1hbGlnbicpLmNzcygndG9wJylcbiAgICAgICAgbmV3VG9wID0gKDMwMCAtICQoJy5qcy1taWRkbGUtYWxpZ24nKS5vdXRlckhlaWdodCgpKSAvIDJcbiAgICAgICAgJCgnLmpzLW1pZGRsZS1hbGlnbicpLmFuaW1hdGUoeyB0b3A6IG5ld1RvcCB9LCAxNTApXG4gICAgICAgICQoJy5qcy1tYXgtaGVpZ2h0JykuYW5pbWF0ZSh7IGhlaWdodDogMzAwIH0sIDE1MClcbiAgICAgIClcbiMgJCgnLm1haW4tbmF2JykubmF2TGlua3MoKVxuXG4kLmZuLmV4dGVuZFxuICBhamF4TG9hZGVyOiAob3B0aW9ucykgLT5cblxuICAgIGJpbmRlcnMgPSAtPlxuICAgICAgJCgnW2RhdGEtaGlzdG9yeV0nKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGxpbmtDbGlja2VkKVxuXG4gICAgZ2V0TGV2ZWwgPSAodXJsKSAtPiByZXR1cm4gdXJsLnNwbGl0KCcvJykubGVuZ3RoIC0gMVxuXG4gICAgbGlua0NsaWNrZWQgPSAoZSkgLT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhyZWYgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuICAgICAgbGV2ZWwgPSBnZXRMZXZlbChocmVmKVxuICAgICAgY29uc29sZS5sb2cgbGV2ZWxcblxuXG4gICAgY3VycmVudExldmVsID0gZ2V0TGV2ZWwoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgY29uc29sZS5sb2cgY3VycmVudExldmVsXG4gICAgYmluZGVycygpO1xuXG4jICQoJ2JvZHknKS5hamF4TG9hZGVyKCk7Il19