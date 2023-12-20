(function (window) {
    {
        const osQuery     = document.querySelector('.hide--os');
        const mobileQuery = document.querySelector('.hide--mobile');

        if (!osQuery || !mobileQuery) return

        const hideOS      = document.querySelector('.hide--os').style;
        const hideMobile  = document.querySelector('.hide--mobile').style;
        const plat        = navigator.platform

        if (!plat) {
            hideOS.display     = "none";
            hideMobile.display = "none";
        }

        switch(plat) {
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