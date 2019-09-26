/**
 * Copyright (c) 2019
 *
 * Background.js, main file of the Facebook Ads block chrome extension
 *
 * author: @MhShohel
 *
 * Created at     : 2019-09-25 
 * Last modified  : 2019-09-26
 */

'use strict';

function element_contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

setInterval(function(){ 
	/**
	* Block Sidebar Ads
	*/
	var sidebarAd = element_contains('div', 'Sponsored');
	if (sidebarAd.length) {
		var i;
		for (i = 0; i < sidebarAd.length; i++) {
			var element = sidebarAd[i];
			if (element) {
				if (element.closest('div.j83agx80.cbu4d94t.e5nlhep0.hv4rvrfc.dati1w0a.aodizinl.l9j0dhe7')) {
					if (element.closest('div.j83agx80.cbu4d94t.e5nlhep0.hv4rvrfc.dati1w0a.aodizinl.l9j0dhe7').nextSibling) {
						element.closest('div.j83agx80.cbu4d94t.e5nlhep0.hv4rvrfc.dati1w0a.aodizinl.l9j0dhe7').nextSibling.remove();
					}
					//console.log(element.closest('div.cxgpxx05'));
					element.closest('div.j83agx80.cbu4d94t.e5nlhep0.hv4rvrfc.dati1w0a.aodizinl.l9j0dhe7').remove();
				}
			}
		}
	}

/**
* Block promotional posts
*/
var loopPost = element_contains('span', 'Sponsored');
	if (loopPost.length) {
		var i;
		for (i = 0; i < loopPost.length; i++) {
			var element = loopPost[i];
			if (element) {
				if (element.closest('div.du4w35lb.k4urcfbm.l9j0dhe7.lzcic4wl.sjgh65i0')) {
					element.closest('div.du4w35lb.k4urcfbm.l9j0dhe7.lzcic4wl.sjgh65i0').remove();
				}
			}
		}
	}
}, 3000);
