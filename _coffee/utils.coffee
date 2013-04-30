window.Luke ?= {}

class Luke.Utils
	ajax: (url, callback) ->
		req = new XMLHttpRequest()
		html = ''

		req.addEventListener 'readystatechange', ->
			if req.readyState is 4
				if req.status is 200 or req.status is 304
					html = req.responseText
				else
					#console.log 'error'
				callback {
					status: req.status,
					html: html
				}

		req.open 'GET', url, false
		req.send()