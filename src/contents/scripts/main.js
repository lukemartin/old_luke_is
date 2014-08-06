(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    middleAlign: function(options) {
      return $(window).resize((function(_this) {
        return function() {
          return _this.each(function() {
            var h, wh;
            wh = $('header').outerHeight();
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


  /*
  $.fn.extend
    maxHeight: (options) ->
      return $(window).resize(=>
        return @each ()->
          wh = $(window).outerHeight()
          $(this).css('height', wh)
      ).resize()
  
  $('.js-max-height').maxHeight()
  
  
  $.fn.extend
    marginTop: (options) ->
      return $(window).resize(=>
        return @each ()->
          wh = $(window).outerHeight()
          $(this).css('top', wh)
      ).resize()
  
  $('.js-margin-top').marginTop()
  
  
  $.fn.extend
    navLinks: (options) ->
      return @each ()->
        $(this).on('click touchstart', 'a', (e) ->
          e.preventDefault()
          newHeight = 300
          top = $('.js-middle-align').css('top')
          newTop = (300 - $('.js-middle-align').outerHeight()) / 2
          $('.js-middle-align').animate({ top: newTop }, 150)
          $('.js-max-height').animate({ height: 300 }, 150)
        )
  $('.main-nav').navLinks()
   */

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSxDQUFBOztBQUFBLEVBQUEsQ0FBQSxHQUFJLE1BQUosQ0FBQTs7QUFBQSxFQUdBLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTCxDQUNFO0FBQUEsSUFBQSxXQUFBLEVBQWEsU0FBQyxPQUFELEdBQUE7QUFDWCxhQUFPLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFDdEIsaUJBQU8sS0FBQyxDQUFBLElBQUQsQ0FBTSxTQUFBLEdBQUE7QUFDWCxnQkFBQSxLQUFBO0FBQUEsWUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLFdBQVosQ0FBQSxDQUFMLENBQUE7QUFBQSxZQUNBLENBQUEsR0FBSyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsV0FBUixDQUFBLENBREwsQ0FBQTtBQUVBLFlBQUEsSUFBRyxFQUFBLEdBQUssQ0FBUjtxQkFBZSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRUFBbUIsQ0FBQyxFQUFBLEdBQUcsQ0FBSixDQUFBLEdBQVMsQ0FBNUIsRUFBZjthQUhXO1VBQUEsQ0FBTixDQUFQLENBRHNCO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakIsQ0FLTixDQUFDLE1BTEssQ0FBQSxDQUFQLENBRFc7SUFBQSxDQUFiO0dBREYsQ0FIQSxDQUFBOztBQUFBLEVBWUEsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsV0FBdEIsQ0FBQSxDQVpBLENBQUE7O0FBZUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FmQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIkID0galF1ZXJ5XG5cblxuJC5mbi5leHRlbmRcbiAgbWlkZGxlQWxpZ246IChvcHRpb25zKSAtPlxuICAgIHJldHVybiAkKHdpbmRvdykucmVzaXplKD0+XG4gICAgICByZXR1cm4gQGVhY2ggKCktPlxuICAgICAgICB3aCA9ICQoJ2hlYWRlcicpLm91dGVySGVpZ2h0KClcbiAgICAgICAgaCAgPSAkKHRoaXMpLm91dGVySGVpZ2h0KClcbiAgICAgICAgaWYgd2ggPiBoIHRoZW4gJCh0aGlzKS5jc3MoJ3RvcCcsICh3aC1oKSAvIDIpXG4gICAgKS5yZXNpemUoKVxuXG4kKCcuanMtbWlkZGxlLWFsaWduJykubWlkZGxlQWxpZ24oKVxuXG5cbiMjI1xuJC5mbi5leHRlbmRcbiAgbWF4SGVpZ2h0OiAob3B0aW9ucykgLT5cbiAgICByZXR1cm4gJCh3aW5kb3cpLnJlc2l6ZSg9PlxuICAgICAgcmV0dXJuIEBlYWNoICgpLT5cbiAgICAgICAgd2ggPSAkKHdpbmRvdykub3V0ZXJIZWlnaHQoKVxuICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0Jywgd2gpXG4gICAgKS5yZXNpemUoKVxuXG4kKCcuanMtbWF4LWhlaWdodCcpLm1heEhlaWdodCgpXG5cblxuJC5mbi5leHRlbmRcbiAgbWFyZ2luVG9wOiAob3B0aW9ucykgLT5cbiAgICByZXR1cm4gJCh3aW5kb3cpLnJlc2l6ZSg9PlxuICAgICAgcmV0dXJuIEBlYWNoICgpLT5cbiAgICAgICAgd2ggPSAkKHdpbmRvdykub3V0ZXJIZWlnaHQoKVxuICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgd2gpXG4gICAgKS5yZXNpemUoKVxuXG4kKCcuanMtbWFyZ2luLXRvcCcpLm1hcmdpblRvcCgpXG5cblxuJC5mbi5leHRlbmRcbiAgbmF2TGlua3M6IChvcHRpb25zKSAtPlxuICAgIHJldHVybiBAZWFjaCAoKS0+XG4gICAgICAkKHRoaXMpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJ2EnLCAoZSkgLT5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG5ld0hlaWdodCA9IDMwMFxuICAgICAgICB0b3AgPSAkKCcuanMtbWlkZGxlLWFsaWduJykuY3NzKCd0b3AnKVxuICAgICAgICBuZXdUb3AgPSAoMzAwIC0gJCgnLmpzLW1pZGRsZS1hbGlnbicpLm91dGVySGVpZ2h0KCkpIC8gMlxuICAgICAgICAkKCcuanMtbWlkZGxlLWFsaWduJykuYW5pbWF0ZSh7IHRvcDogbmV3VG9wIH0sIDE1MClcbiAgICAgICAgJCgnLmpzLW1heC1oZWlnaHQnKS5hbmltYXRlKHsgaGVpZ2h0OiAzMDAgfSwgMTUwKVxuICAgICAgKVxuJCgnLm1haW4tbmF2JykubmF2TGlua3MoKVxuIyMjIl19