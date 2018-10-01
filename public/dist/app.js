
// Render the PayPal button

paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox | production

    // Specify the style of the button

    style: {
        layout: 'vertical',  // horizontal | vertical
        size: 'medium',    // medium | large | responsive
        shape: 'rect',      // pill | rect
        color: 'gold'       // gold | blue | silver | black
    },

    // Specify allowed and disallowed funding sources
    //
    // Options:
    // - paypal.FUNDING.CARD
    // - paypal.FUNDING.CREDIT
    // - paypal.FUNDING.ELV

    funding: {
        allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
        disallowed: []
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: '<insert production client id>'
    },

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '0.01', currency: 'USD' }
                    }
                ]
            }
        });
    },

    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
            window.alert('Payment Complete!');
        });
    }

}, '#paypal-button-container');


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
    let gatoss = `<div data-toggle="modal" data-target="#exampleModalCenter">
<img class="imagens-cat" src=dist/image/gatos/filhote-de-gato-peludo-lindo-wallpaper-5426.jpg>
<img class="imagens-cat" src=dist/image/gatos/cat3.jpg>
<img class="imagens-cat" src=dist/image/gatos/cat4.jpg>
<img class="imagens-cat" src=dist/image/gatos/th.jpeg>
<img class="imagens-cat" src=dist/image/gatos/thr.jpeg>
<img class="imagens-cat" src=dist/image/gatos/th3.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado2.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado3.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/adotado4.jpeg>
<img class="imagens-dogs" src=dist/image/gatos/dog-adotado1.jpeg>
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
<img class="imagens-cat" src=dist/image/gatos/th3.jpeg>
<img class="imagens-cat" src=dist/image/gatos/th.jpeg>
<img class="imagens-cat" src=dist/image/gatos/thr.jpeg>
</div>`
    return adotados;
}

function carregaHistoria() {
    let renderHistoria = `
<h1>Nossa história</h1>
<p>Nascemos do desejo de dar um lar á todos os animais carentes.</p>
<p>Acreditamos que todos os animais tem direito a muito amor e carinnho.</p>
<p>Estamos aqui hoje, para ajuda-los a encontrar alguém que os queiram bem e possa proporcionar todo amor e carinho que eles merecem. </p>
<p>Com a ajudade de vocês poderemos mudar a história de vários peludinhos.</p>
<p>Vamos fazer parte desta equipe!</p>
<img class="imagens-historia" src=dist/image/th.jpeg>
`
    return renderHistoria;
}


function imagensDog() {
    const urls = 'https://dog.ceo/api/breeds/image/random/25';

    $.get(urls, function (data) {
        let imageDogApi = data.message.map(url => `<img class='img-container' src= ${url} data-toggle="modal" data-target="#exampleModalCenter">`);
        $('main').html(imageDogApi);
    });
}


