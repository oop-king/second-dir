/*! WooCommerce Recent Products Widget Via Ajax - (C) Pino Ceniccola - GPLv3 - https://github.com/pinoceniccola/woocommerce-recently-viewed-ajax */

jQuery(function ($) {
	var recentlyViewed = (document.cookie.match(/^(?:.*;)?\s*woocommerce_recently_viewed\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
	var $widgetPlaceholder = $('.widget_recently_viewed_products');
	var _current = 0;

	if ($('body.single-product .product.type-product').length) {
		_current = parseInt(dtLocal.postID);
	}

	if (recentlyViewed && $widgetPlaceholder.length) {
		$.post(
			recently_viewed_object.ajaxurl,
			{
				action: 'wc_recent_products',
			},
			function( response ) {
				$('.widget_recently_viewed_products .product_list_widget').html( response );
				$widgetPlaceholder.css('display','block');
				_updateCookie(_current);
			}
		);
	} else {
		_updateCookie(_current);
	}

	function _updateCookie(_current) {
		if (!_current) {
			return;
		}

		if ( recentlyViewed == null  ) {
			var _viewed_products = [];
		} else {
			var _viewed_products =  $.map(recentlyViewed.split('%7C'), function(value){return parseInt(value, 10);});
		}

		if (_viewed_products.indexOf(_current) === -1) {
			_viewed_products.push(_current);

			if ( _viewed_products.length > 15 ) {
				var _shifted = _viewed_products.shift();
			}

			// Store for session only.
			document.cookie = "woocommerce_recently_viewed="+_viewed_products.join('%7C')+";path="+recently_viewed_object.cookiepath;
		}
	}

});
