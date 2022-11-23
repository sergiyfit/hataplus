const burger = document.querySelector(".burger")
const menu = document.querySelector(".header_menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("burger_open_menu")
})