// credit to https://stackoverflow.com/a/61511955
function waitForElm(selector) {
    return new Promise(resolve=>{
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations=>{
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#ifJailbreaksAppSigned').then(function(elm) {
    let hideIf = elm.style;
    hideIf.display = "none";
    fetch("https://api.jailbreaks.app/status").then(res=>res.json()).then(body=>{
        if (body.status == "Signed") {
            hideIf.display = "block";
        }
    });
});
