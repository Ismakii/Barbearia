document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".opcoes ul li a");
  const iframe = document.getElementById("iframe-content");

  const updateContent = (id) => {
    links.forEach((link) => link.classList.toggle("active", link.id === id));
    iframe.src = `opcoes/${id}.html`;
  };

  updateContent("inicio");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      updateContent(link.id);
    });
  });
});
