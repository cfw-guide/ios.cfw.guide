(function (window) {
    {
        let hideIf = document.getElementById("ifJailbreaksAppSigned").style;
        hideIf.display = "none";

        fetch("https://api.jailbreaks.app/status")
            .then(res => res.json())
            .then(body => {
                if (body.status == "Signed") {
                    hideIf.display = "block";
                }
            });
    }
}(this));
