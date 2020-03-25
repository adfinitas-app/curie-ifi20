import $ from 'jquery';
window.$ = $;

class Animate {

    constructor() {
        // console.log('constructor Animate');
        //this.init();
    }

    init () {
        // console.log('animate.init();');
    }

    start () {
        // console.log('animate.start();');
        $(window).on('scroll resize', this.update );
        setTimeout(this.update, 100);
    }

    update() {

        var windowHeight            = $(window).height(),
            windowTopPosition       = $(window).scrollTop(),
            windowBottomPosition    = (windowTopPosition + windowHeight),
            activeDelay             = 0,
            autoreverse             = false,
            elToCheck               = $('.animate');
        //
            $.each(elToCheck, function() {
                var el                  = $(this),
                    elHeight            = el.outerHeight(),
                    elTopPosition       = el.offset().top,
                    elBottomPosition    = (elTopPosition + elHeight);

                if ( elTopPosition <= windowBottomPosition - windowHeight * activeDelay) {
                    el.addClass('animate--reveal');
                } else if ( autoreverse ) {
                    el.removeClass('animate--reveal');
                }
            });
        //addjust nav
          var nav = $('header');
          if ( windowTopPosition > 100 && !nav.hasClass('bg') ) nav.addClass('bg');
          else if ( windowTopPosition < 100 && nav.hasClass('bg') ) { nav.removeClass('bg'); }

    }

}

export default new Animate
