const botaoLigar = document.getElementById("TurnOn");
const botaoDesligar = document.getElementById("TurnOff");
const lampadaAcesa = document.querySelector(".lampada-acesa");
const lampadaApagada = document.querySelector(".lampada-apagada");
const body = document.body;
/*LucaasTunes*/
botaoLigar.addEventListener("click", function() {
    alert("Ligando a lâmpada!");
    lampadaAcesa.style.display = "block";
    lampadaApagada.style.display = "none";
    body.style.backgroundColor = "yellow";
});

botaoDesligar.addEventListener("click", function() {
    alert("Desligando a lâmpada!");
    lampadaAcesa.style.display = "none";
    lampadaApagada.style.display = "block";
    body.style.backgroundColor = "black";
});
