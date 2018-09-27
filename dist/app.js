// imagens api

function imagensDog() {
    const urls = 'https://dog.ceo/api/breeds/image/random/25';

    $.get(urls, function (data) {
        let imageDogApi = data.message.map(url => `<img class='img-container' src= ${url}>`);
        $('.image-dog').html(imageDogApi);
    });
}


function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("selecao-adotar").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("selecao-adotar").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


