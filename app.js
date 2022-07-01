const nav = document.querySelector (".js_ul");
const burger = document.getElementById("burger")

burger.addEventListener("click", ()=> {
    nav.classList.toggle("show_menu")
});