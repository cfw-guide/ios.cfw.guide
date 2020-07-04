(function (window) {
    {

        console.log(navigator.platform);

        let div = document.getElementById("hide_os");

        switch(navigator.platform) {
            /* desktop operation systems */
            case "MacIntel":
                div.style.display = "none";
                break;
            case "MacPPC":
                div.style.display = "none";
                break;
            case "Mac68K":
                div.style.display = "none";
                break;
            case "Linux i686":
                div.style.display = "none";
                break;
            case "Linux armv7l":
                div.style.display = "none";
                break;
            case "Linux x86_64"
                div.style.display = "none";
                break;
                /* phones */
            case "iPhone":
                div.style.display = "none";
                break;
            case "iPod":
                div.style.display = "none";
                break;
            case "iPad":
                div.style.display = "none";
                break;
            case "BlackBerry":
                div.style.display = "none";
                break;
            case "Android":
                div.style.display = "none";
                break;


            default:
                break;
        }
    }
}(this));