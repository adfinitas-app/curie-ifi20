import $ from 'jquery';
window.$ = $;

class Blocs {

    constructor() {
        this.init();
    }

    init () {
        //
        if ( $('.bloc--accordeon').length )      this.accordeon_init();
    }

    accordeon_init () {

        if ( $('.bloc--accordeon').attr('data-open-first')=='true' ) $('.bloc--accordeon .accordeon--row').first().addClass('active');

        $('.accordeon--label').on('click', event => {
          var row         = $(event.target).closest('.accordeon--row');
          if ( row.hasClass('active') ) row.removeClass('active');
          else row.addClass('active');
		    });
    }







}

export default new Blocs
