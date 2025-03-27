document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("themes");

    themeToggleButton.addEventListener("click", function () {
        if (document.body.classList.contains("senja")) {
            document.body.classList.remove("senja");
            document.body.classList.add("malam");
            document.body.style.background = "linear-gradient(to bottom, #1E1E2E, #3A3A5E)";
            document.body.style.color = "#E0E0E0";
        } else {
            document.body.classList.remove("malam");
            document.body.classList.add("senja");
            document.body.style.background = "linear-gradient(to bottom, #ff7e5f, #feb47b)";
            document.body.style.color = "#fff";
        }
    });
});
