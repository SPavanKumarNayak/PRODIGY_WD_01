window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("nav-fix");
    } else {
        navbar.classList.remove("nav-fix");
    }
};