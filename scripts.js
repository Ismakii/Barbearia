document.addEventListener("DOMContentLoaded", () => {
  const defaultLink = document.getElementById("inicio");
  defaultLink.classList.add("active");
  const iframe = document.getElementById("iframe-content");
  iframe.src = "opcoes/inicio.html";
});

document.querySelectorAll(".opcoes ul li a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".opcoes ul li a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    const iframe = document.getElementById("iframe-content");
    switch (this.id) {
      case "inicio":
        iframe.src = "opcoes/inicio.html";
        break;
      case "servicos":
        iframe.src = "opcoes/servicos.html";
        break;
      case "agendamentos":
        iframe.src = "opcoes/agendamentos.html";
        break;
      case "produtos":
        iframe.src = "opcoes/produtos.html";
        break;
      case "contatos":
        iframe.src = "opcoes/contatos.html";
        break;
    }
  });
});
