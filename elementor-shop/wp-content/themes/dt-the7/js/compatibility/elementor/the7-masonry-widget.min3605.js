!function(e){function t(t){e("body").on("wc_cart_button_updated",(function(e,n){if(n.attr("data-widget-id")!==t.attr("data-id"))return;const o=t.find(".elementor-widget-container > .added-to-cart-icon-template").children().clone(),d=n.next();n.hasClass("woo-popup-button")&&(o.addClass("popup-icon"),d.wrapInner('<span class="filter-popup"></span>')),d.append(o)}))}e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/the7_elements.default",(function(e){the7ApplyColumns(e.attr("data-id"),e.find(".iso-container"),the7GetElementorMasonryColumnsConfig),the7ApplyMasonryWidgetCSSGridFiltering(e.find(".jquery-filter .dt-css-grid"))})),elementorFrontend.hooks.addAction("frontend/element_ready/the7-wc-products.default",(function(e){the7ApplyColumns(e.attr("data-id"),e.find(".iso-container"),the7GetElementorMasonryColumnsConfig),the7ApplyMasonryWidgetCSSGridFiltering(e.find(".jquery-filter .dt-css-grid")),e.hasClass("preserve-img-ratio-y")||window.the7ApplyWidgetImageRatio(e),t(e)})),elementorFrontend.hooks.addAction("frontend/element_ready/the7-wc-products-carousel.default",t)}))}(jQuery);