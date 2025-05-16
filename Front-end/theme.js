document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("themeSwitch");
    const themeStylesheet = document.getElementById("themeStylesheet");

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        themeSwitch.checked = true;
        themeStylesheet.setAttribute("href", "pinkStyle.css");
    }

    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            themeStylesheet.setAttribute("href", "pinkStyle.css");
            localStorage.setItem("theme", "dark");
        } else {
            themeStylesheet.setAttribute("href", "greenStyle.css");
            localStorage.setItem("theme", "light");
        }
    });
});
