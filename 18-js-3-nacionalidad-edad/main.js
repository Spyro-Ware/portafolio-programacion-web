nombre = prompt("Cual es tu nombre?");
edad = prompt("Cual es tu edad?");
edad = Number(edad);
nacionalidad = prompt("Cual es tu nacionalidad?");

if (nacionalidad == "mexicana" && edad >= 18) {
    alert("Eres mayor de edad y eres mexicano");
} else if (nacionalidad == "mexicana" && edad < 18) {
    alert("Eres menor de edad y eres mexicano");
} else if (nacionalidad == "estadounidense" && edad >= 21) {
    alert("Eres mayor de edad y eres estadounidense");
} else if (nacionalidad == "estadounidense" && edad < 21) {
    alert("Eres menor de edad y eres estadounidense");
}
