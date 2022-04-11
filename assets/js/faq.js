const headers = document.querySelectorAll(".container .header");

headers.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");
  });
});

