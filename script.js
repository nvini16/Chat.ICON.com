/* ==========================
   PROTEÇÃO DE ACESSO
========================== */

const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    location.replace("login.html");
}

/* ==========================
   TEMA
========================== */

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

/* ==========================
   SAUDAÇÃO + RELÓGIO
========================== */

function atualizarHora() {
    const agora = new Date();

    const horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("hora").textContent =
        `${horas}:${minutos}:${segundos}`;

    document.getElementById("dia").textContent = agora.getDate();
    document.getElementById("mes").textContent = agora.getMonth() + 1;
    document.getElementById("ano").textContent = agora.getFullYear();

    const semana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    document.getElementById("semana").textContent =
        semana[agora.getDay()];

    let saudacao = "Boa noite";

    if (horas < 12) saudacao = "Bom dia";
    else if (horas < 18) saudacao = "Boa tarde";

    document.getElementById("saudacao").textContent = saudacao;
}

setInterval(atualizarHora, 1000);
atualizarHora();

/* ==========================
   NOTIFICAÇÕES (LOCAL)
========================== */

function pegarNotificacoes() {
    return JSON.parse(localStorage.getItem("notificacoes")) || [];
}

const notificacoes = pegarNotificacoes();

const naoLidas = notificacoes.filter(n => !n.lida).length;

const badge = document.getElementById("badge");

if (badge) {
    if (naoLidas > 0) {
        badge.textContent = naoLidas;
    } else {
        badge.style.display = "none";
    }
}
