$ = jQuery
History = window.History

$.fn.extend
  middleAlign: (options) ->
    return $(window).resize(=>
      return @each ()->
        wh = $('.header-wrap').outerHeight()
        h  = $(this).outerHeight()
        if wh > h then $(this).css('top', (wh-h) / 2)
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
# $('.main-nav').navLinks()

$.fn.extend
  ajaxLoader: (options) ->

    binders = ->
      $('[data-history]').on('click touchstart', linkClicked)

    getLevel = (url) -> return url.split('/').length - 1

    linkClicked = (e) ->
      e.preventDefault()
      href = $(e.currentTarget).attr('href')
      level = getLevel(href)
      console.log level


    currentLevel = getLevel(document.location.pathname)
    console.log currentLevel
    binders()

# $('body').ajaxLoader()






# PageAnimator Class
class PageAnimator
  defaults: {}

  constructor: (el, options) ->
    @options      = $.extend({}, @defaults, options)
    @$el          = $(el)
    @currentLevel = @getLevel(document.location.pathname)
    @binders()

  binders: ->
    @$el.on('click', '[data-pa]', @onLinkClicked)
    History.Adapter.bind(window, 'statechange', @onStateChange)

  onLinkClicked: (e) =>
    e.preventDefault()
    href  = $(e.currentTarget).attr('href')
    title = $(e.currentTarget).attr('title') + ' - somename'
    level = @getLevel(href)

    $.get(href)
      .done((data) ->
        content = $(data).find('#content').html()

        History.pushState({ content: content, level: level }, title, href)
      )
      .fail(->
        console.log 'failed :('
      )

  onStateChange: =>
    state   = History.getState()
    level   = state.data.level
    content = state.data.content
    # History.log('statechange:', state.data, state.title, state.url)

    if level is @currentLevel
      @animateSibling(content)
    if level < @currentLevel
      @animateBackwards(content)
    if level > @currentLevel
      @animateForwards(content)

    @currentLevel = level

  animateSibling: (content) ->
    @animate(content, 'anim-up', 'anim-down')

  animateBackwards: (content) ->
    @animate(content, 'anim-left', 'anim-right')

  animateForwards: (content) ->
    @animate(content, 'anim-right', 'anim-left')

  # Private
  getLevel: (url) -> return url.split('/').length - 1

  collapseHeader: (fn) ->
    if $('.js-max-height').length is 0
      return fn()
    $('.js-middle-align').animate(top: 40, 150)
    $('.js-max-height').animate(height: 300, 150, ->
      $(this).removeClass('js-max-height')
      fn()
    )

  animate: (content, inClass, outClass) ->
    @collapseHeader(->
      $newContent = $(content).addClass(inClass)
      $currentContent = $('#content .section-wrap:first')

      $('#content').append($newContent)
      console.log $newContent.outerHeight()
      $('#content').css('height', $newContent.outerHeight())

      setTimeout(->
        $currentContent.addClass(outClass)
        $newContent.removeClass(inClass)

        setTimeout(->
          $currentContent.remove()
          $('#content').css('min-height', $(window).height())
          $('#content').css('height', 'auto')
        , 500)
      , 50)
      $('html, body').animate({ scrollTop: $('#content').offset().top }, 150)
    )


# PageAnimator Plugin
$.fn.extend pageAnimator: (option, args...) ->
  @each ->
    $this = $(this)
    new PageAnimator(this, {})

# PageAnimator Bootstrap
$('body').pageAnimator()