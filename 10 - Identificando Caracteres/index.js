const caractere = 4;

if (typeof caractere === 'number') {
    console.log("É um numero!");
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log(" É uma vogal maiúscula!");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log(" É uma vogal minúscula!");
} else {
    console.log("É uma consoante.")
}
