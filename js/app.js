document.addEventListener("DOMContentLoaded", function () {
  revealSections();
});

window.addEventListener("scroll", revealSections);

function revealSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      const children = section.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add("show");
      }
    }
  });
}
