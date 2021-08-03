---
title: Installing Odysseyra1n (A9X)
permalink: /installing-odysseyra1n-a9x
redirect_from:
excerpt: Guide to installing Odysseyra1n on A9X devices
sidebar:
  nav: ios1314
---

You are currently not running a macOS or Linux device and this guide will not work on your system. You will need to live boot or install a full Linux distribution or obtain a Mac.
{: .notice--danger .hide--mobile .hide--os }

<script src="/assets/js/hide.js"></script>

If you are using an A9X device running iOS 14.4.2 or earlier, you should follow [Installing Odysseyra1n](installing-odysseyra1n) and use checkra1n version 0.12.2 instead.
{: .notice--danger}

{% include_relative include/semi-tethered.md %}

On A9X devices, it is not possible to use checkra1n 0.12.4 (required for 14.5+ support) without the use of a custom pongoOS and checkra1n in CLI mode.

{% include_relative include/odysseyra1n-explanation.md %}

If you are using Windows, you will need to live boot or install a full Linux distribution or obtain a Mac.
{: .notice--primary #hide_os }

If you're migrating from unc0ver to Odysseyra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

Please select your operating system below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">macOS</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Linux</button>

{% capture a-instructions %}{% include_relative ra1n-macos-a9x.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative ra1n-linux-a9s.md %}{% endcapture %}
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
