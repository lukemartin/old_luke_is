var Luke = {};

Luke.Nav = (function( $, History ) {
	'use strict';

	var my = {};

	function buildOverlay() {
		$('body').append('<div class="overlay"></div>');
	}

	function populate(data, url, replace) {
		var title = $(data).find('.content-title').text(),
			content = $(data).find('#content').html(),
			crumb = $(data).find('.content-crumb').text();

		if (replace) {
			History.replaceState({content: content, crumb: crumb}, title + ' – luke.is', url);
		} else {
			History.pushState({content: content, crumb: crumb}, title + ' – luke.is', url);
		}
		if (typeof GoSquared !== 'undefined') {
			GoSquared.DefaultTracker.TrackView();
		}
	}

	function pageRequest( url ) {
		//$('.overlay').fadeIn(125);
		// $('#content').addClass('loading');
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

	function binders() {
		History.Adapter.bind( window, 'statechange', function() {
			var State = History.getState();
			//History.log(State.data, State.title, State.url);

			// $('.overlay').fadeIn(125);
			// $('#content').slideUp(500, function() {
			// 	$('#content').html(State.data.content).slideDown(500);
			// 	//$('body').scrollTop(0);
			// 	$('.overlay').fadeOut(125);
			// });
			$('#content').fadeOut(125, function() {
				$(this).html(State.data.content).fadeIn(125);
				$(window).scrollTop(0);
			});
			// $('#content').removeClass('loading');

			$('.crumb').text(State.data.crumb);
		});

		$('body').on('click', 'a', function( e ) {
			if(Luke.Utils.externalUrl(this.href)) {
				return true;
			}

			e.preventDefault();

			if (this.href !== document.location.href) {
				pageRequest( this.href );
			}
			$('#mobile-nav').attr('checked', false);
		});
	}

	my.init = function() {
		if(typeof Luke.ie === 'undefined' || Luke.ie > 9) {
			binders();
			//buildOverlay();
			populate($('html').html(), document.location.href, true);
		}
	};

	return my;
}( $, window.History ));


Luke.Utils = (function ( $ ) {
	'use strict';

	var my = {};

	my.externalUrl = function( url ) {
		var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
		if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
			return true;
		}
		if (typeof match[2] === 'string' &&
			match[2].length > 0 &&
			match[2].replace(new RegExp(':('+{'http:':80,'https:':443}[location.protocol]+')?$'), '') !== location.host) {
			return true;
		}
		return false;
	};

	// https://gist.github.com/padolsey/527683
	my.ie = function(){
		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);

		return v > 4 ? v : undef;
	}

	return my;
}( $ ));

(function( Luke ) {
	'use strict';
	Luke.ie = Luke.Utils.ie();
	Luke.Nav.init();
}( Luke ));
