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
    const renderImageDogs = $('main').html(imagensDog())
}

function gatos() {
    const rederGatos = $('main').html(carregaGatos())
}


function historia() {
    const rederhistoria = $('main').html(carregaHistoria())
}

function produtos() {
    const renderProdutos = $('main').html(carregaProductsPet());
}

function adotados() {
    const renderProdutos = $('main').html(carregaPetsAdotados());

}

function ajuda() {
    const renderAjuda = $('main').html(renderIndex());
}


function renderIndex() {
    let index = `<div class="d-flex justify-content-center mt-4 mb-3"><iframe width="700" height="400" src="https://www.youtube.com/embed/dVTXobP4XYU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`
    return index
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
    let exibeImagem = $("main").html(`<h1 class = 'title-produtos mb-5'> PRODUTOS PETS</h1>
     ${produtos.map(doc => `
    <div class="col produto"><p><b>${doc.title}</b></p>
    <img class="imagens-produtos" src=${doc.thumbnail}> 
    <p>R$ ${doc.price}</p>
    <button class = 'button-comprar' type="button">DETALHES</button></div>`).join("")}`)
}


function carregaGatos() {
    let gatoss = `<div>
<img class="imagens-cat" src=dist/image/gatos/filhote-de-gato-peludo-lindo-wallpaper-5426.jpg>
<img class="imagens-cat" src=dist/image/gatos/cat3.jpg>
<img class="imagens-cat" src=dist/image/gatos/cat4.jpg>
<img class="imagens-cat" src=dist/image/gatos/th.jpeg>
<img class="imagens-cat" src=dist/image/gatos/thr.jpeg>
<img class="imagens-cat" src=dist/image/gatos/th3.jpeg>
</div>`
    return gatoss;
}

function carregaPetsAdotados() {
    let adotados = `<div>
<img class="imagens-dogs" src=dist/image/gatos/filhote-de-gato-peludo-lindo-wallpaper-5426.jpg>
<img class="imagens-dogs" src=dist/image/gatos/adotado.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado2.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado3.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado4.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/dog-adotado1.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/dog-adotado.jpeg>
</div>`
    return adotados;
}

function carregaHistoria() {
    let renderHistoria = `
<h1>teste</h1>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
<p>testesssssssssssssssssssss</p>
`
    return renderHistoria;
}