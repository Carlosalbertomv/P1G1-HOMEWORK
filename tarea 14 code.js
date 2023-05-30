function substring() {
    var cadena = prompt("Ingrese una cadena", "Hola Fieras");
    var longCad = cadena.length;
    var cadenaSinChars = cadena.substring(1, (longCad-1));

    alert(cadenaSinChars);
}