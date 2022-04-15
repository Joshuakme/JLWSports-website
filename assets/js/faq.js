const descContainers = document.getElementsByClassName("description-container");
const headers = document.querySelectorAll(".container .header");

headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    header.nextElementSibling.classList.toggle("active");
    // window.location.href = `/support/faq.html#${e.target.id}`;
  });
});

