import $ from 'jquery';
import {app} from '../app';
window.$ = $;

class Nav {

    constructor() {
        // this.init();
    }

    init () {
      $('a.anchor').on('click', event=>{
          event.preventDefault();
          this.goto_anchor( $(event.target).attr('href').substring(1) );
      });
      //
      var anchor = window.location.hash.substring(1);
      if (anchor) {
        if ( anchor=='ifi' || anchor=='ir' ) app.ui_show_calcul ( anchor );
        this.goto_anchor(anchor);
      }
    }

    goto_anchor (anchor) {
        console.log('goto_anchor '+anchor );
        var offset = 100;
        if ( anchor=='ifi' || anchor=='ir' ) {
            app.ui_show_calcul ( anchor );
            offset = 155;
        }
        $('html, body').animate( { scrollTop: $('#'+anchor).offset().top-offset }, 333 );
    }

}

export default new Nav
