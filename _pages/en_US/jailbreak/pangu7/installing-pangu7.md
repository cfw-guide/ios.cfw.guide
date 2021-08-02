---
title: Installing Pangu7
permalink: /installing-pangu7
redirect_from:
  - /pangu712
  - /pangu7
excerpt: Guide to installing Pangu7
sidebar:
  nav: sidebar
---

Pangu7 is capable of jailbreaking every iOS device on firmware version 7.1 up to 7.1.2.

Pangu7 is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

You will need a computer running Windows 7 and newer or a Mac running macOS 10.14 Mojave and the appropriate Pangu.

Please select your operating system below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">macOS</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Windows</button>

{% capture a-instructions %}{% include_relative pangu7-macos.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative pangu7-windows.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

<script>
  var a = document.getElementById("ainstr");
  var abtn = document.getElementById("abtn");
  var aclr = "btn--inverse"

  var b = document.getElementById("binstr");
  var bbtn = document.getElementById("bbtn");
  var bclr = "btn--facebook"

  var clr = "btn--info"

  var toc0 = document.getElementById("toc0");
  var toc1 = document.getElementById("toc1");
  var toc2 = document.getElementById("toc2");
  var toc3 = document.getElementById("toc3");
  var toc4 = document.getElementById("toc4");
  var toc5 = document.getElementById("toc5");
  var toc6 = document.getElementById("toc6");
  var toc7 = document.getElementById("toc7");

  a.style.display = "block";
  b.style.display = "none";

  toc4.style.display = "none";
  toc5.style.display = "none";
  toc6.style.display = "none";
  toc7.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  function showa() {
    a.style.display = "block";
    b.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);

    toc0.style.display = "block";
    toc1.style.display = "block";
    toc2.style.display = "block";
    toc3.style.display = "block";
    toc4.style.display = "none";
    toc5.style.display = "none";
    toc6.style.display = "none";
    toc7.style.display = "none";
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "none";
    toc4.style.display = "block";
    toc5.style.display = "block";
    toc6.style.display = "block";
    toc7.style.display = "block";
  }
</script>
