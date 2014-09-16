class SlideyPages
  constructor: ->
    @currentLevel = @getLevel(document.location.pathname)
    @binders()

  binders: ->
    $('body').on('click', '[data-slidey]', @onLinkClicked)
    History.Adapter.bind(window, 'statechange', @onStateChanged)

  getLevel: (url) -> return url.split('/').length - 1 || null

  onLinkClicked: (e) =>
    e.preventDefault()

    href  = $(e.currentTarget).attr('href')
    title = $(e.currentTarget).attr('title')
    level = @getLevel(href)

    $.get(href)
      .done((data) ->
        content = $(data).find('#content').html()

        History.pushState({ content: content, level: level }, title, href)
      )
      .fail(->
        console.error 'failed :/'
      )

  onStateChanged: =>
    state   = History.getState()
    level   = state.data.level
    content = state.data.content
    # History.log('statechange:', state.data, state.title, state.url)

    @slidey(content)

  slidey: (content) ->
    $('html').removeClass('hero-header')
    $('#content').velocity(
      { translateY: '+= 100px' }, 250, ->
        $(this).html(content)
    )

new SlideyPages()