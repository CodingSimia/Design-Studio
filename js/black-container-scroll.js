document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".how__works");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});

