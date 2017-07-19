function toggleToolbar(){
    var toolbar = document.getElementById("hamburger-menu");
    if (toolbar.style.display == "flex"){
        toolbar.style.display = "none";
    } else{
        toolbar.style.display = "flex";
        toolbar.style.marginTop = "2vw";
    }
}