---
title: Installing Odysseyra1n
permalink: /installing-odysseyra1n
redirect_from:
  - /ra1n
  - /installing-odysseyrain
  - /odysseyra1n
  - /odysseyrain
  - /or
  - /installing-checkra1n
  - /installing-checkrain
  - /checkra1n
  - /checkrain
  - /cr
excerpt: Guide to installing Odysseyra1n
---
<link rel="shortcut icon" type="image/png" href="/assets/images/jb/checkra1n.png">

You are currently not running a macOS or Linux device and this guide will not work on your system. You can use [odysseyn1x](/using-odysseyn1x) instead.
{: .notice--danger #hide_os #hide_mobile }

<script src="{{ '/assets/js/hide.js' | absolute_url }}"></script>

On iOS 14.0 - 14.4, Odysseyra1n is only fully supported on A8(X) to A10(X) devices for the moment. Full A11 support will be added a future date.
{: .notice--info}

{% include_relative include/semi-tethered.md %}

checkra1n is a tool capable of jailbreaking millions of iOS device on firmwares 12.0 and above. It's currently only compatible with macOS and Linux. A Windows release is planned to release in the future.

{% include_relative include/odysseyra1n-explanation.md %}

If you are using Windows, proceed to [Using odysseyn1x](/using-odysseyn1x).
{: .notice--primary #hide_os }

## Downloads

- The latest version of [checkra1n](https://checkra.in)

![]({{ "/assets/images/checkra1n.png" | absolute_url }})

If you're migrating from unc0ver to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

---

Please select your operating system below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">macOS</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Linux</button>

{% capture a-instructions %}{% include_relative include/ra1n-macos.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative include/ra1n-linux.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

<script>
  var a = document.getElementById("ainstr");
  var abtn = document.getElementById("abtn");
  var aclr = "btn--white"

  var b = document.getElementById("binstr");
  var bbtn = document.getElementById("bbtn");
  var bclr = "btn--facebook"

  var clr = "btn--info"

  a.style.display = "block";
  b.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  function showa() {
    a.style.display = "block";
    b.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);
  }
</script>
