$(document).ready(() => {
    page('/', index);
    page('/gatos', gatos);
    page('/caes', caes);
    page('/historia', historia);
    page('/produtos', produtos);
    page('/adotados', adotados);
    page('/ajuda', ajuda);
    page();
});

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

