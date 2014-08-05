$ = jQuery


$.fn.extend
  middleAlign: (options) ->
    return $(window).resize(=>
      return @each ()->
        wh = $(window).outerHeight()
        h  = $(this).outerHeight()
        if wh > h
          $(this).css('top', (wh-h) / 2)
    ).resize()

$('.js-middle-align').middleAlign()


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