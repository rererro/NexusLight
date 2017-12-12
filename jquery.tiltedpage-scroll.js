/* ===========================================================
 * jquery-tiltedpage-scroll.js v1.2.1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a beautiful 3D tilted effect on scroll
 * with Tilted Page Scroll plugin
 *
 * https://github.com/peachananr/tiltedpage-scroll
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){

    var defaults = {
        sectionContainer: "> li",
        opacity: true,
        scale: true,
        outAnimation: true
    };
    // var container = document.getElementById('mdc-list--rankings'); //get #myDiv
    // alert(container.clientHeight);

    $.fn.tiltedpage_scroll = function(options){
        var settings = $.extend({}, defaults, options),
            el = $(this);

        el.find(settings.sectionContainer).addClass("tps-section");

        el.find('.tps-section').each(function(){
            var el2 = $(this);
            el2.wrapInner("<div class='tps-wrapper'></div>");
        });

        function isElementInViewport (el3) {
            var docViewTop = $('#rankings').scrollTop(),
                docViewBottom = docViewTop + $('#rankings').height(),
                elemTop = el3.offset().top,
                elemBottom = elemTop + el3.outerHeight(true);

            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) );
        }

        function elementVisibilityMayChange (el4) {

            if ( isElementInViewport(el4) ) {
                el4.addClass("tps-inview")
            } else {
                el4.removeClass("tps-inview")
            }
        }

        $( ".panels" ).scroll(function() {
            el.find(settings.sectionContainer).each(function(){
                console.log('update');
                elementVisibilityMayChange($(this));
            });


            el.find('.tps-section.tps-inview > .tps-wrapper').each(function(index){
                var el2 = $(this),
                    opacity = 0,
                    ScrollTop = $('#rankings').scrollTop(),
                    scale = ($('#rankings').height() + ScrollTop - el2.offset().top) / ($('#rankings').height()) ;
                // if(scale > 0.5) scale = 1 - scale;
                scale = 3000 * scale;
                scale = Math.sqrt(scale);

                //
                //
                // if (settings.scale == false) scale = 1;
                // if (settings.opacity == false) opacity = 1;

                el2.css({
                    // 'transform': 'scale('+scale+', '+scale+')',
                    'transform': 'translate3d('+scale+'px,0px,0px)',
                    // opacity: opacity
                });
            });
        });
    }


}(window.jQuery);
