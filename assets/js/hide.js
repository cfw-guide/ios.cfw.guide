(function (window) {
    {
        let hideOS     = document.getElementById("hide_os").style;
        let hideMobile = document.getElementById("hide_os").style;

        switch(navigator.platform) {
            /* desktop operation systems */
            case "MacIntel":
                hideOS.display = "none";
                break;
            case "MacPPC":
                hideOS.display = "none";
                break;
            case "Mac68K":
                hideOS.display = "none";
                break;
            case "Linux i686":
                hideOS.display = "none";
                break;
            case "Linux armv7l":
                hideOS.display = "none";
                break;
            case "Linux armv8l":
                hideOS.display = "none";
                break;
            case "Linux x86_64":
                hideOS.display = "none";
                break;
                /* phones */
            case "iPhone":
                hideMobile.display = "none";
                break;
            case "iPod":
                hideMobile.display = "none";
                break;
            case "iPad":
                hideMobile.display = "none";
                break;
            case "BlackBerry":
                hideMobile.display = "none";
                break;
            case "Android":
                hideMobile.display = "none";
                break;
        }
    }
}(this));
