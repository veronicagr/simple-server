page('/', index);
page('/gatos', gatos);
page('/caes', caes);
page('/historia', historia);
page('/produtos', produtos);
page('/adotados', adotados);
page('/ajuda', ajuda);
page();


function index() {
    $("main").html(renderIndex());
}

function caes() {
    const renderImageDogs = $("main").html(imagensDog())
}

function gatos() {
    const rederGatos = $('main').html($('#teste'))
}


function historia() {
    document.querySelector('p')
        .textContent = 'viewing historia';
}

function produtos() {
    const renderProdutos = $('main').html(carregaProductsPet());
}

function adotados() {
    document.querySelector('p')
        .textContent = 'viewing adotados';
}

function ajuda() {
    document.querySelector('p')
        .textContent = '';
}



// imagens api dog
function imagensDog() {
    const urls = 'https://dog.ceo/api/breeds/image/random/25';

    $.get(urls, function (data) {
        let imageDogApi = data.message.map(url => `<img class='img-container' src= ${url} data-toggle="modal" data-target="#exampleModalCenter">`);
        $('main').html(imageDogApi);
    });
}

// click adocao
function clickAdocao() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("selecao-adotar").innerHTML = localStorage.clickcount;
    }
}

//   api mecado livre


const btnBuscaPet = document.getElementById("carrega-produtos");
btnBuscaPet.addEventListener("click", pegaBusca);


function erro() {
    console.log("erro");
}

function pegaBusca(event) {
    event.preventDefault();
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=gatos+cachorros+aves`

    $.ajax({
        type: "GET",
        url: url,
        success: carregaProductsPet,
        error: erro
    });
}

function carregaProductsPet(data) {
    produtos = data.results;
    exibeProductsPet();
}

function exibeProductsPet() {
    let exibeImagem = $("main").html(`${produtos.map(doc => `
    <div class="col produto"><p><b>${doc.title}</b></p>
    <img class="imagens-produtos" src=${doc.thumbnail}> 
    <p>R$ ${doc.price}</p>
    <button class = 'button-comprar' type="button">DETALHES</button></div>`).join("")}`)
}


