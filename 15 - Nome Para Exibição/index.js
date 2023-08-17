const primeiroNome = "luelen";
const sobrenome = "cavalheiro";
const apelido = "uma dev incrível";
if (apelido !== "" && primeiroNome !== "") {
    console.log(apelido);
} else if (primeiroNome !== "" && sobrenome !== "") {
    console.log(primeiroNome + sobrenome);
} else if (primeiroNome !== "") {
    console.log(primeiroNome);
} else {
    console.log("Por favor, preencha o nome");
}
