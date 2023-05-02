window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // changing icon from plus to minus onclick

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-button");
const closebtn = document.querySelector("#close-menu-button");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});


closebtn.addEventListener("click" , () =>{
  menu.style.display = "none";
  menubtn.style.display = "flex";
})

const colseNav = () =>{
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
}

closebtn.addEventListener("click" , colseNav)