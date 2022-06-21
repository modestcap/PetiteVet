import { titleValidation, priceValidation, quantityValidation } from "./inputValidations.js";

let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let table = document.getElementById("productTable");
let bodyTable = document.getElementsByTagName("tbody");
let add = document.getElementById("botonAgregar")
let products = [];



add.addEventListener("click", (event) => {
    event.preventDefault();
    if (
        !titleValidation(title) ||
        !titleValidation(description) ||
        !priceValidation(price) ||
        !quantityValidation(quantity)
    ) {
        let lista = "";
        if (!titleValidation(title)) {
            title.style.border = "red thin solid";
            lista += "<li>Se debe escribir un nombre de producto válido</li>";
            title.value = "";
            title.focus();
        } //if validarTitle

        if (!titleValidation(description)) {
            description.style.border = "red thin solid";
            lista += "<li>Se debe escribir una descripción válida</li>";
        } //ifvalidarDescription

        if (!priceValidation(price)) {
            price.style.border = "red thin solid";
            lista += "<li>Se debe escribir un precio válido</li>";
        } //ifvalidarPrice

        if (!quantityValidation(quantity)) {
            quantity.style.border = "red thin solid";
            lista += "<li>Se debe escribir una cantidad válido</li>";
        } //ifvalidarQuantity

        document.getElementById(
            "alertValidacionesTexto"
        ).innerHTML = `Los campos deben ser llenados correctamente.
          <ul>${lista} </ul>
          `;
        document.getElementById("alertValidaciones").style.display = "block";

        setTimeout(function () {
            document.getElementById("alertValidaciones").style.display = "none";
        }, 7500);
        setTimeout(function () {
            document.getElementById("title").style.border = "";
        }, 500);
        setTimeout(function () {
            document.getElementById("description").style.border = "";
        }, 500);
        setTimeout(function () {
            document.getElementById("price").style.border = "";
        }, 500);
        setTimeout(function () {
            document.getElementById("quantity").style.border = "";
        }, 500);
        return;
    }
});

