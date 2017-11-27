/* FUNCTIONS */
let randomDate = () => {
    let startDate = new Date( 2010, 0, 1 ).getTime(),
        endDate = new Date( 2017, 0, 1 ).getTime(),
        spaces = ( endDate - startDate ),
        timestamp = Math.round( Math.random() * spaces );
    timestamp += startDate;
    return new Date( timestamp );
}
let formatDate = ( date ) => {
    let month = randomDate().getMonth() + 1;
    let day = randomDate().getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return String( date.getFullYear() ) + '-' + month + '-' + day;
}


/* AJAX */
let loadPicture = ( num ) => {
    let config = {
        url: `https://api.nasa.gov/planetary/apod?date=${num}&api_key=pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7`,
        type: 'GET'
    };
    return $.ajax( config )
};
/* OPENING CREATE */
let opening = () => {
    // opening elements
    let opening = $( '#opening' ),
        body = $( 'body' ),
        picture = $( '#opPicture1' ),
        startBtn = $( '#openGallery' ),
        description = $( '#description' ),
        autor = $( '#autor' ),
        hd = $( '#hd' ),
        title = $( '#title' ),
        figure = $( '.picture__figure' ),
        dataRand = formatDate( randomDate() );

    loadPicture( dataRand ).done( function( data ) {
        console.log( data );
        picture.css( 'background-image', 'url("' + data.url + '")' );
        figure.text( `${data.explanation}` );
        title.text( `${data.title}` );
        autor.text( `${data.copyright}` );
        hd.attr( 'href', `${data.hdurl}` );
        startBtn.on( 'click', function( event ) {
            event.preventDefault();
            /* Act on the event */
            opening.slideUp( 500 );
            body.css( 'overflow', 'auto' );
        } );
    } ).fail( function( err ) {
        console.log( err );
    } ).always( function() {
        console.log( "complete" );
    } );
};
let loadGallery = () => {
    let gallery = $( '.gallery__list' );
    for ( let i = 0; i < 5; i++ ) {
        let dataRand = formatDate( randomDate() );
        loadPicture( dataRand ).done( function( data ) {
            if ( data.media_type == "image" ) {
                let title = $( '<h2>', {
                        text: data.title
                    } ),
                    desc = $( '<p>', {
                        text: ""
                    } ),
                    a = $( '<a>', {
                        // href: data.hdurl,
                    } ),
                    figcap = $( '<figcaption>', {} ),
                    img = $( '<img>', {
                        src: data.url,
                        alt: data.title
                    } ),
                    fige = $( '<figure>', {
                        class: 'snip1508'
                    } ),
                    galleryElem = $( '<div>', {
                        class: 'gallery__elem'
                    } );

                let modal = $('<div>',{
                    class: 'gallery__modal'
                });
                modal.append($( '<img>', {
                        src: data.url,
                        class: 'modal__img'
                    } ))
                    .append($('<p>',{
                    text:data.explanation,
                    class: 'modal__desc'}))
                    .append(button = $('<button>', {
                    class: 'btn modal__close',
                    text: 'x'
                }));

                a.on( 'click', function( event ) {
                    event.preventDefault();
                    /* Act on the event */
                   modal.toggleClass('swing-in-top-bck');
                   modal.removeClass('swing-in-bottom-bck');
                   $('body').append(modal);
                modal.on('click','button', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    modal.toggleClass('swing-in-top-bck');
                    modal.addClass('swing-in-bottom-bck');
                    $(event.target).parent().delay(1000).queue(function() { $(this).remove(); });
                   
                });
                } );
                figcap.append( title ).append( desc );
                fige.append( img ).append( figcap ).append( a );
                galleryElem.append( fige );
                gallery.append( galleryElem );
                
            }
        } ).fail( function( err ) {
            console.log( 'error' );
        } ).always( function() {
            console.log( "complete" );
        } );
    }
};
// ------------------------------------------------------//
$( document ).ready( function() {
    $( 'html' ).addClass( 'js' );
    opening();
    let loadBtn = $( '.gallery__load' );
    loadBtn.on( 'click', function( event ) {
        event.preventDefault();
        $( "#loader-wrapper" ).fadeIn()
        /* Act on the event */
        $( 'html' ).addClass( 'js' );
        loadGallery();
        $( "#loader-wrapper" ).fadeOut();
    } );
} );
/*-------------------------------------------*/
$( window ).on( 'load', function() {
    setTimeout( function() {
        $( "#loader-wrapper" ).fadeOut();
        loadGallery();
    }, 2000 );
} );