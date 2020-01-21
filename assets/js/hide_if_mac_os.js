(function (window) {
    {
        var unknown = '-';
        var nAgt = navigator.userAgent;
        var nVer = navigator.appVersion;
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        var os = unknown;
        var clientStrings = [
            {s:'Mac OS', r:/(Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }
    }
    var div = document.getElementById("hide_os");
    if (os == "Mac OS") {
    	div.style.display = "none";
    }
    else if (mobile == true) {
    	div.style.display = "none";
    }
  	else {
    	div.style.display = "block";
  	}
}(this));
