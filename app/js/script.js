/* FUNCTIONS */

let randomDate = () => {
    let startDate = new Date(2010, 0, 1).getTime(),
        endDate = new Date(2017, 0, 1).getTime(),
        spaces = (endDate - startDate),
        timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
}
let formatDate = (date) => {
    let month = randomDate().getMonth() + 1;
    let day = randomDate().getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return String(date.getFullYear()) + '-' + month + '-' + day;
}
/* AJAX */
let loadPicture = (num) => {
    let config = {
        url: `https://api.nasa.gov/planetary/apod?date=${num}&api_key=pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7`,
        type: 'GET'
    };

    return $.ajax(config)
};

/* OPENING CREATE */

let opening = () => {
    // opening elements
    let opening = $('#opening'),
        body= $('body'),
        picture = $('#opPicture1'),
        startBtn = $('#openGallery'),
        description = $('#description'),
        autor = $('#autor'),
        hd = $('#hd'),
        title = $('#title'),
        figure = $('.picture__figure'),
        dataRand = formatDate(randomDate());

    loadPicture(dataRand)
        .done(function(data) {
            picture.css('background-image', 'url("' + data.url + '")');
            figure.text(`${data.explanation}`);
            title.text(`${data.title}`);
            autor.text(`${data.copyright}`);
            hd.attr('href', `${data.hdurl}`);

         startBtn.on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        opening.slideUp(500);
        body.css('overflow', 'auto');
    });
        })
        .fail(function(err) {
            console.log(err);
        })
        .always(function() {
            console.log("complete");
        });
};

let loadGallery = () => {
    let gallery = $('.gallery__list');

    for (let i = 0; i < 5; i++) {


        let dataRand = formatDate(randomDate());


        loadPicture(dataRand)

            .done(function(data) {
                if (data.media_type == "image") {
                    let galleryElem = $('<li>', {
                        class: 'gallery__elem'
                    });
                    console.log("success");
                    let imgElem = $('<img>', {
                            class: 'elem__img',
                            src: data.hdurl
                        }),
                        imgtitle = $('<div>', {
                            class: 'elem__title',
                            text: data.title
                        });
                    imgElem.on('click', function() {
                        $(this).css('width', '100%');
                        console.log('test');
                    });
                    galleryElem.append(imgElem).append(imgtitle);
                    // console.log(imgElem);
                    // console.log(data);
                    gallery.append(galleryElem);
                }


            })
            .fail(function(err) {
                console.log('error');
            })
            .always(function() {
                console.log("complete");
            });


    }

};



// ------------------------------------------------------//


$('html').addClass('js');

$(document).ready(function() {

    loadGallery();

    let loadBtn = $('.gallery__load');
    loadBtn.on('click', function(event) {
        event.preventDefault();
        $("#loader-wrapper").fadeIn()
        /* Act on the event */
        $('html').addClass('js');
        loadGallery();
        $("#loader-wrapper").fadeOut();

    });

    opening();


});
/*-------------------------------------------*/





$(window).on('load', function() {
    setTimeout(
        function() {
            $("#loader-wrapper").fadeOut();
        }, 2000);
});