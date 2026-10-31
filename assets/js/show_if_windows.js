(function (window) {
    {
      var unknown = '-';
      var nAgt = navigator.userAgent;
      var nVer = navigator.appVersion;
      var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
      var os = unknown;
      var clientStrings = [
        {s:'Windows', r:/(Windows 10.0|Windows NT 10.0|Windows 8.1|Windows NT 6.3|Windows 8|Windows NT 6.2|Windows 7|Windows NT 6.1|Windows NT 6.0|Windows NT 5.2|Windows NT 5.1|Windows XP|Windows NT 5.0|Windows 2000|Win 9x 4.90|Windows ME|Windows 98|Win98 Windows|NT 4.0|WinNT4.0|WinNT|Windows NT|Windows CE)/},
      ];
      for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
          os = cs.s;
          break;
        }
      }
    }
    var osVersion = unknown;
    switch (os) {
    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
      break;
    }
    var div = document.getElementById("hide_os");
    if (!div) return
    if (os == "Windows") {
    	div.style.display = "block";
    }
  	else {
    	div.style.display = "none";
  	}
}(this));
