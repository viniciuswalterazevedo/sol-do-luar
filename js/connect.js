document.getElementById("connectButton").addEventListener("click", function() {
    var serverAddress = "138.118.132.235"; // Substitua pelo endereço do seu servidor FiveM

    // Cria um link "fivem://" com o endereço do servidor
    var connectLink = "fivem://connect/" + serverAddress;

    // Abre o link no navegador
    window.location.href = connectLink;
});