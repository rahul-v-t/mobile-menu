window.onload = () => {
    let mobileIcon = document.getElementById("menu-icon");
    let mobileMenu = document.getElementById("mobile-menu");
    let closeMenu = document.getElementsByTagName("span");
    let close = document.getElementsByClassName("close");
    let overlay = document.getElementsByClassName("overlay");
    mobileIcon.addEventListener("click", (event) => {
        event.preventDefault();
        mobileMenu.classList.add("active");
        for (let [key, value] of Object.entries(closeMenu)) {
            value.classList.add("active");
        }
    });
    close[0].addEventListener("click", (event) => {
        overlay[0].classList.remove("active");
        mobileMenu.classList.remove("active");
        close[0].classList.remove("active");
    })
    overlay[0].addEventListener("click", (event) => {
        overlay[0].classList.remove("active");
        mobileMenu.classList.remove("active");
        close[0].classList.remove("active");
    })
}