window.L ?= {}

class L.Nav
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

			if utils.externalUrl href
				return true

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

poo = new L.Nav