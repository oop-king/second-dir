jQuery((function(e){e.vericalMenu=function(n){var t,i=e(n),a=i.find(".dt-nav-menu");e.data(n,"vericalMenu",i),t={init:function(){let n,s;var o,l=i.find("li.has-children > a "),c=i.find(".not-clickable-item").length>0;if(c){const e=i.find("li.has-children > a.not-clickable-item");l=l.add(e)}a.find(" li.act:last > a").addClass("active-item"),a.find(".vertical-sub-nav").length<=0&&a.parent().addClass("indicator-off"),(i.find(".dt-sub-menu-display-on_click").length>0||i.find(".dt-sub-menu-display-on_item_click").length>0)&&(a.find("li.has-children").each((function(){var n=e(this);if(n.length){var t=n.find("> a"),i=n.find(" > .vertical-sub-nav");n.hasClass("act")&&(n.addClass("open-sub"),n.find("> a").addClass("active")),n.find(".vertical-sub-nav li").hasClass("act")&&(n.addClass("open-sub"),t.addClass("active"),i.css("opacity","0").stop(!0).slideDown({start:function(){}},250).animate({opacity:1},{queue:!1,duration:150}))}})),e(".touchevents").length>0?(l.on("touchstart",(function(e){n=e.originalEvent.touches[0].pageY,s=e.originalEvent.touches[0].pageX})),l.on("touchend",(function(i){let a=i.originalEvent.changedTouches[0].pageX,l=i.originalEvent.changedTouches[0].pageY;if(n===l||s===a){let n=e(this);if(!c&&!i.originalEvent.composedPath().includes(n.children(".next-level-button").get(0)))return;i.stopImmediatePropagation(),i.preventDefault(),clearTimeout(o),o=setTimeout((function(){n.hasClass("active")?t.hideSubMenu(n):t.showSubMenu(n)}),100)}}))):l.on("click",(function(n){var i=e(this),a=i.attr("target")?i.attr("target"):"_self";(n=window.event||n).stopPropagation(),n.preventDefault(),clearTimeout(o),o=setTimeout((function(){if(e(n.target).parents().hasClass("next-level-button")||e(n.target).hasClass("next-level-button")||c)return i.hasClass("active")?t.hideSubMenu(i):t.showSubMenu(i),!1;window.open(i.attr("href"),a)}),100)})),i.find(".dt-sub-menu-display-on_click, .dt-sub-menu-display-on_item_click").css("visibility","visible"))},showSubMenu:function(n){var t=n.siblings(" .vertical-sub-nav");n.parent().siblings().find(" .vertical-sub-nav").css("opacity","0").stop(!0,!0).slideUp(250),t.css("opacity","0").stop(!0,!0).slideDown({start:function(){}},250).animate({opacity:1},{queue:!1,duration:150}),n.siblings().removeClass("active"),n.addClass("active"),n.parent().siblings().removeClass("open-sub"),n.parent().siblings().find("a").removeClass("active"),n.parent().addClass("open-sub"),e(" .dt-nav-menu").layzrInitialisation()},hideSubMenu:function(e){var n=e.siblings(" .vertical-sub-nav");n.css("opacity","0").stop(!0,!0).slideUp(250,(function(){n.find("li").removeClass("open-sub"),n.find("a").removeClass("active")})),e.removeClass("active"),e.parent().removeClass("open-sub")}},i.delete=function(){i.removeData("vericalMenu")},t.init()},e.fn.vericalMenu=function(){return this.each((function(){var n=e(this).data("vericalMenu");void 0!==n&&n.delete(),new e.vericalMenu(this)}))}})),jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/the7_nav-menu.default",(function(e,n){n(document).ready((function(){e.vericalMenu()}))}))}));