const valorBotao = document.querySelector("button");

valorBotao.onclick = function converter() {
    var valorParaConverter = document.getElementById("text").value;
    var valorConvertido = valorParaConverter * 5.50;

    document.querySelector("h3").innerHTML = "R$" + valorConvertido.toFixed(2);
}