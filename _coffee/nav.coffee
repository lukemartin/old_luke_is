window.Luke ?= {}

class Luke.Nav
	constructor: ->
		binders()

	binders = ->
		anchors = document.getElementsByTagName('a')
		for anchor in anchors
			anchor.addEventListener 'click', handleClick, false

	handleClick = (event) ->
		url = this.href
		unless isExternal(url)
			event.preventDefault()
			request url

	request = (url) ->
		utils = new Luke.Utils
		utils.ajax url, (response) ->
			if response.status is 200
				div = document.createElement 'div'
				div.innerHTML = response.html
				content = div.getElementById 'content'
				# document.getElementById('content').innerHTML(content)


	isExternal = (url) ->
		return false

nav = new Luke.Nav