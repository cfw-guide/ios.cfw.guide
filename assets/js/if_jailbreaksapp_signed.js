(function (window) {
    {
        let hideIf = document.getElementById("ifJailbreaksAppSigned").style;
        hideIf.display = "none";

        fetch("https://jailbreaks.app/status.php")
            .then(res => res.json())
            .then(body => {
                if (body.status == "Signed") {
                    hideIf.display = "block";
                }
            });
    }
}(this));
