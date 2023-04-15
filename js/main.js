var themeDark = document.getElementById("themeDark");
themeDark.onclick = function () {
    document.getElementById("body").className = "change-theme";
    // DOM tới nút Dark ẩn
    document.getElementById("themeDark").style.display = "none";
    // Nút Light Hiện
    document.getElementById("themeLight").style.display = "inline-block";
};

var themeLight = document.getElementById("themeLight");
themeLight.onclick = function () {
    document.getElementById("body").classList.remove("change-theme");
    // DOM Nút Light ẩn
    document.getElementById("themeDark").style.display = "inline-block";
    // Nút Dark hiện
    document.getElementById("themeLight").style.display = "none";
};
