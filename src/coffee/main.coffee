do ($ = jQuery) ->
  $(window).scroll(->
    sc = $(window).scrollTop()
    # $('.header-wrap').css('min-height', 250 - sc)
    if sc >= 175
      $('html').addClass('nav-fixed')
    else
      $('html').removeClass('nav-fixed')
  ).trigger('scroll')