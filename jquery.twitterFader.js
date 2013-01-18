/*
 * Twitter Fader jQuery Plugin version 1.2.1
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	'use strict';

	$.fn.twitterFader = function (searchTerm, options) {

		var settings = $.extend({
			displayRate : 10000,
			fadeRate : 300,
			returnNum : 5,
			returnType : 'recent',
			returnLanguage : 'en',
			linkify: true
		}, options),
		$fader = $(this);

		function linkify(text) {
			var url_pattern = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img;
			var url_replace = '$1$4$7$10$13<a href="$2$5$8$11$14">$2$5$8$11$14</a>$3$6$9$12';
			return text.replace(url_pattern, url_replace);
		}

		if (!searchTerm) {
			$fader.html('Error! You need to enter a search term.');
		} else {
			return this.each(function () {
				$fader.html('Loading&hellip;');
				update();
				setInterval(update, (settings.displayRate * settings.returnNum) + ((settings.fadeRate * 2) * settings.returnNum));
				function update() {
					$.getJSON(
						'http://search.twitter.com/search.json?callback=?', {
							q : searchTerm,
							rpp : settings.returnNum,
							lang : settings.returnLanguage,
							result_type : settings.returnType
						},
						function (json) {
							$fader.html('');
							if (json.results.length > 0) {
								$.each(json.results, function (i, item) {
									var text = settings.linkify ? linkify(item.text) : item.text;
									$fader.append('<li style="display:none"><b>@' + item.from_user + ':</b> ' + text + '</li>');
								});
								setInterval(function () {
									$fader.children('li').first().fadeIn(settings.fadeRate).delay(settings.displayRate).fadeOut(settings.fadeRate, function () { $(this).remove() } )
								}, 1);
							} else {
								$fader.append('No results found');
							}
						}
					);
				}
			});
		}

	};

})(jQuery);
