$(document).ready(function() {

    var boton = $("#crear_caja");
    var grid = $("#grid");

    boton.on('click', function() {
        var newCaja = document.createElement("div");
        $(newCaja).addClass("caja");

        grid.append(newCaja);
        $(newCaja).draggable();
    });
});