$('html').addClass('js');

$(document).ready(function() {


    // opening elements
    let opening = $('#opening'),
        body = $('body'),
    picture = $('#opPicture1'),
        description = $('.opening__description'),
        autor = $('#autor'),
        title = $('#title'),
        figure = $('.picture__figure'),
        startBtn = $('#openGallery');
    // ---------------------------------
    let gallery = $('.gallery__list'),
        loadBtn = $('.gallery__load');

    loadGallery(gallery);

    loadBtn.on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        loadGallery(gallery);

    });




    // loadPicture(dataRand)
    // .done(function(data) {
    //         console.log("success");
    //         let imgElem = $('<img>',{
    //             class:'elem__img',
    //             src: data.url
    //         });
    //         console.log(imgElem);
    //         galleryElem.append(imgElem);
    //         console.log(data);
    //     })
    //     .fail(function(err) {
    //         console.log('error');
    //     })
    //     .always(function() {
    //         console.log("complete");
    //     });

    //     gallery.append(galleryElem);
    // }


    startBtn.on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        opening.slideUp(500);
        body.css('overflow', 'auto');
    });

    initBG(picture, figure, title, autor);


});
/*-------------------------------------------*/

let loadGallery = (gallery) => {

    for (let i = 0; i < 10; i++) {
        let galleryElem = $('<li>', {
                class: 'gallery__elem'
            }),

            dataRand = formatDate(randomDate());


        loadPicture(dataRand)
            .done(function(data) {

                console.log("success");
                let imgElem = $('<img>', {
                        class: 'elem__img',
                        src: data.url
                    }),
                    imgtitle = $('<div>', {
                        class: 'elem__title',
                        text: data.title
                    });
                // console.log(imgElem);
                galleryElem.append(imgElem).append(imgtitle);
                // console.log(data);
            })
            .fail(function(err) {
                console.log('error');
            })
            .always(function() {
                console.log("complete");
            });

        gallery.append(galleryElem);

    }

};

let loadPicture = (obj) => {
    let config = {
        url: `https://api.nasa.gov/planetary/apod?date=${obj}&api_key=pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7`,
        type: 'GET'
    };

    return $.ajax(config)
};

let initBG = function(header, desc, title, autor) {

    let dataRand = formatDate(randomDate());

    loadPicture(dataRand)
        .done(function(data) {
            console.log("success");
            console.log(data);
            header.css('background-image', 'url("' + data.url + '")');
            desc.text(`${data.explanation}`);
            title.text(`${data.title}`);
            autor.text(`${data.copyright} `);
        })
        .fail(function(err) {
            console.log(err);
        })
        .always(function() {
            console.log("complete");
        });

};


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







$(window).on('load', function() {
    setTimeout(
        function() {
            $("#loader-wrapper").fadeOut();
        }, 3000);
});