var Luke = {};


Luke.Nav = function( $, History ) {
	var my = {};

	my.init = function() {
		binders();
	}

	function binders() {
		History.Adapter.bind( window, 'statechange', function() {
			var State = History.getState();
			// History.log(State.data, State.title, State.url);

			$('#content').fadeOut(125, function() {
				$('#content').html(State.data.content).fadeIn(125);
				$('body').scrollTop(0);
			})
		});

		$('body').on('click', 'a', function( e ) {
			if(Luke.Utils.externalUrl(this.href)) {
				return true;
			}

			e.preventDefault();

			pageRequest( this.href );
		});

		function pageRequest( url ) {
			$.get(url, function ( data ) {
					populate(data, url);
				}
			).fail(function ( e ) {
				$.get('/404', function ( data ) {
					// temp
					data = '404';
					// /temp
					populate(data, url);
				});
			});
		}

		function populate(data, url) {
			var title = $(data).find('.content-title').text(),
				content = $(data).find('#content').html();

			History.pushState({content: content}, title, url);
		}
	}

	return my;
}( $, window.History );


Luke.Utils = function ( $ ) {
	var my = {};

	my.externalUrl = function( url ) {
		var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
		if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
		if (typeof match[2] === 'string' && match[2].length > 0 && match[2].replace(new RegExp(':('+{'http:':80,'https:':443}[location.protocol]+')?$'), '') !== location.host) return true;
		return false;
	}

	return my;
}();

;!function( Luke ) {
	Luke.Nav.init();
}( Luke );