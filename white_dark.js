let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") ==   "white.css") {
        theme.href = "dark.css";   
    } else {
        theme.href = "white.css";
    }
}