window.L ?= {}

class L.Nav
	###
	constructor
	{param} Thing
	###
	constructor: ->
		binders()

	binders = ->
		History.Adapter.bind window, 'statechange', ->
			State = History.getState()
			$('#content').fadeOut 125, ->
				$(this)
					.html(State.data.content)
					.fadeIn 125

		$('body').on 'click', 'a', (e) ->
			href = this.href
			utils = new L.Utils

			return true if utils.externalUrl.href

			e.preventDefault()
			pageRequest href
			$('#mobile-nav').attr 'checked', false

	pageRequest = (url) ->
		$.get url, (data) ->
			populate data, url

	populate = (data, url) ->
		title = $(data).find('.content-title').text()
		content = $(data).find('#content').html()

		History.pushState(
			content: content
			title,
			url
		)

class L.Utils
	externalUrl: (url) ->
		false

class L.EvenHeights
	constructor: ->
		$('.even-heights').each (index, elem) ->
			$elems =
				$root: $(elem)
				$targets: $(elem).find '.even-heights-target'
			binders $elems

	binders = ($elems) ->
		$(window)
			.resize ->
				resizeHandler $elems
			.resize()

	adjustHeights = ($elems) ->
		height = 0
		$.each $elems, ->
			h = $(this).outerHeight()
			height = h if h > height
		$.each $elems, ->
			$(this).css 'min-height', height

	resizeHandler = ($elems) ->
		$elems.$targets.css 'min-height', 0
		columns = getColumns $elems
		l = $elems.$targets.length
		num = 0
		while num < l
			adjustHeights $elems.$targets[num..((num+columns)-1)]
			num += columns
		return 'cake'

	getColumns = ($elems) ->
		cols = 0
		offset = 0
		$.each $elems.$targets, ->
			o = $(this).offset().left
			return false if o <= offset
			offset = o
			cols++
		cols


nav = new L.Nav
eh = new L.EvenHeights