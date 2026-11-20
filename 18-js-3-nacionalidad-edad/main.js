nombre = prompt("Cual es tu nombre?");
edad = prompt("Cual es tu edad?");
edad = Number(edad);

nacionalidad = prompt("Cual es tu nacionalidad?");
if (edad >= 18 && nacionalidad == "mexicana") {
    alert("Eres mayor de edad y eres mexicano");
}
if (edad >= 21 && nacionalidad == "estadounidense") {
    alert("Eres mayor de edad");
}
else if (edad >= 18) {
    alert("Eres mayor de edad");
}
else if (edad < 18 ) {
    alert("Eres menor de edad ");
}
else if (edad < 21) {
    alert( "Eres menor de edad");
}