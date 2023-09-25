document.addEventListener("DOMContentLoaded", function () {
    // Fetch the menu.html content
    fetch("menu.html")
        .then((response) => response.text())
        .then((data) => {
            document.querySelector("#menu-container").innerHTML = data;
        });
});