function toggleToolbar(){
    var toolbar = document.getElementById("toolbar");
    var button = document.getElementById("toolbarButton");
    if (toolbar.style.display == "flex"){
        toolbar.style.display = "none";
    } else{
        toolbar.style.display = "flex";
        toolbar.style.marginTop = "2.5vw";
    }
}