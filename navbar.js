var isNavVisible = false;

function showNav() {
    if (isNavVisible === false) {
        document.getElementById('nav').style.height = "200px";
        isNavVisible = true;
    }
    else {
        document.getElementById('nav').style.height = "0px";
        isNavVisible = false;
    }

}