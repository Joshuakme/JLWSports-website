const descContainers = document.getElementsByClassName("description-container");
const headers = document.querySelectorAll(".container .header");

headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    header.nextElementSibling.classList.toggle("active");
<<<<<<< HEAD

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) 
    {
      open.classList.remove("active");
      close.classList.add("active");
    }
    else
    {
      open.classList.add("active");
      close.classList.remove("active");
    }
=======
    // window.location.href = `/support/faq.html#${e.target.id}`;
>>>>>>> main
  });
});

