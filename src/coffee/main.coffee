$ = jQuery


$.fn.extend
  middleAlign: (options) ->
    return $(window).resize(=>
      return @each ()->
        wh = $('header').outerHeight()
        h  = $(this).outerHeight()
        if wh > h then $(this).css('top', (wh-h) / 2)
    ).resize()

$('.js-middle-align').middleAlign()


###
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
###