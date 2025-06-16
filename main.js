function ejecutarEjercicios() {
    let salida = "";

    let num = parseInt(prompt("Ingresa un número:"));
    if (num > 0) salida += "Positivo\n";
    if (num < 0) salida += "Negativo\n";
    if (num % 2 === 0) salida += "Par\n";
    if (num % 2 !== 0) salida += "Impar\n";
    if (num % 5 === 0) salida += "Múltiplo de 5\n";
    if (num % 3 === 0) salida += "Divisible entre 3\n";
    if (num > 100) salida += "Mayor que 100\n";
    if (num < -50) salida += "Menor que -50\n";
    if (num >= 20 && num <= 50) salida += "Entre 20 y 50\n";
    if (num === 0) salida += "Igual a 0\n";
    document.getElementById("salida").textContent = salida;
}