$(document).ready(function () {

    var boton = $("#crear_caja");
    var grid = $("#grid");

    boton.click(function () {
        var newCaja = document.createElement("div");
        $(newCaja).addClass("caja");
        console.log(newCaja);

        /* grid.createElement("p");
        /*$(newCaja).draggable();*/
    });
});