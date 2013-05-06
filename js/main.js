var Luke = {};

Luke.Nav = function( $, History ) {
	'use strict';

	var my = {};

	my.init = function() {
		binders();
		buildOverlay();
	}

	function buildOverlay() {
		$('body').append('<div class="overlay"></div>');
	}

	function binders() {
		History.Adapter.bind( window, 'statechange', function() {
			var State = History.getState();
			//History.log(State.data, State.title, State.url);

			$('.overlay').fadeIn(125);
			$('#content').slideUp(500, function() {
				$('#content').html(State.data.content).slideDown(500);
				//$('body').scrollTop(0);
				$('.overlay').fadeOut(125);
			});
			$('.crumb').text(State.data.crumb);
		});

		$('body').on('click', 'a', function( e ) {
			if(Luke.Utils.externalUrl(this.href)) {
				return true;
			}

			e.preventDefault();

			if (this.href !== document.location.href) pageRequest( this.href );
			$('#mobile-nav').attr('checked', false);
		});

		function pageRequest( url ) {
			$('.overlay').fadeIn(125);
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
				content = $(data).find('#content').html(),
				crumb = $(data).find('.content-crumb').text();

			History.pushState({content: content, crumb: crumb}, title + ' - luke.is', url);
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