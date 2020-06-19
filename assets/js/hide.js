(function (window) {
    {

        let div = document.getElementById("hide_os");

        switch(navigator.appVersion.indexOf) {
            case "Win":
                break;
            case "Mac":
                div.style.display = "none";
                break;
            case "X11":
                div.style.display = "none";
                break;
            case "Linux":
                div.style.display = "none";
                break;
        }
    }
}(this));
