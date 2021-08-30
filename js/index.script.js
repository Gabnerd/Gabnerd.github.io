var textoBanner = "Bem vindo ao meu site pessoal";
var textoAtualBanner = "";
var i = 0;

var text_interval = setInterval(() => {
    textoAtualBanner += textoBanner[i];
    var bannerText = document.querySelector("#banner h1");
    bannerText.innerHTML = textoAtualBanner;
    i++;
    if (i == textoBanner.length) {
        clearInterval(text_interval);
    }
}, 150);


function showFrontend() {
    var colapsed = document.getElementById("icon-chevron-frontend").getAttribute("colapsed");
    document.getElementById("blink-button").classList.remove("skill-blink");
    if (colapsed == "true") {
        document.getElementById("icon-chevron-frontend").innerHTML = '<i class="fas fa-chevron-down"></i>';
        document.getElementById("icon-chevron-frontend").setAttribute("colapsed", "false");
        document.getElementById("frontend-content").style.display = "flex";
    } else {
        document.getElementById("icon-chevron-frontend").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementById("icon-chevron-frontend").setAttribute("colapsed", "true");
        document.getElementById("frontend-content").style.display = "none";
    }

}

function showBackend() {
    var colapsed = document.getElementById("icon-chevron-backend").getAttribute("colapsed");

    if (colapsed == "true") {
        document.getElementById("icon-chevron-backend").innerHTML = '<i class="fas fa-chevron-down"></i>';
        document.getElementById("icon-chevron-backend").setAttribute("colapsed", "false");
        document.getElementById("backend-content").style.display = "flex";
    } else {
        document.getElementById("icon-chevron-backend").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementById("icon-chevron-backend").setAttribute("colapsed", "true");
        document.getElementById("backend-content").style.display = "none";
    }
}

function showVariados() {
    var colapsed = document.getElementById("icon-chevron-variados").getAttribute("colapsed");

    if (colapsed == "true") {
        document.getElementById("icon-chevron-variados").innerHTML = '<i class="fas fa-chevron-down"></i>';
        document.getElementById("icon-chevron-variados").setAttribute("colapsed", "false");
        document.getElementById("frameworks-content").style.display = "flex";
    } else {
        document.getElementById("icon-chevron-variados").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementById("icon-chevron-variados").setAttribute("colapsed", "true");
        document.getElementById("frameworks-content").style.display = "none";
    }
}

function showGamedev() {
    var colapsed = document.getElementById("icon-chevron-gamedev").getAttribute("colapsed");

    if (colapsed == "true") {
        document.getElementById("icon-chevron-gamedev").innerHTML = '<i class="fas fa-chevron-down"></i>';
        document.getElementById("icon-chevron-gamedev").setAttribute("colapsed", "false");
        document.getElementById("gamedev-content").style.display = "flex";
    } else {
        document.getElementById("icon-chevron-gamedev").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementById("icon-chevron-gamedev").setAttribute("colapsed", "true");
        document.getElementById("gamedev-content").style.display = "none";
    }
}