---
title: "Saving Blobs"
permalink: /saving-blobs
redirect_from:
  - /blobs
  - /blob
  - /save-blobs
  - /save-blob
  - /saving-blob
sidebar:
  nav: sidebar
excerpt: Guide to saving blobs to secure your ability to downgrade iOS in the future.
---

This will take you through the process of saving blobs which are required if you wish to downgrade to an older, unsigned version of iOS or iPadOS. You can either use TSS Saver App if you are jailbroken on iOS or use [the TSS Saver website](https://tsssaver.1conan.com/v2/). Unjailbroken A12+ users will need a computer for this guide.

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">App</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Web</button>
<button class="btn btn--large btn--info" id="cbtn" onclick="showc()">Computer(A12+)</button>

{% capture a-instructions %}{% include_relative tss-app.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative tss-web.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

{% capture c-instructions %}{% include_relative tss-computer.md %}{% endcapture %}
<div id="cinstr">{{ c-instructions | markdownify }}</div>

<script>
  var a = document.getElementById("ainstr");
  var abtn = document.getElementById("abtn");
  var aclr = "btn--primary"

  var b = document.getElementById("binstr");
  var bbtn = document.getElementById("bbtn");
  var bclr = "btn--primary"

  var c = document.getElementById("cinstr");
  var cbtn = document.getElementById("cbtn");
  var cclr = "btn--primary"

  var clr = "btn--info"

  var toc0 = document.getElementById("toc0");
  var toc1 = document.getElementById("toc1");
  var toc2 = document.getElementById("toc2");

  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";

  toc0.style.display = "block";
  toc1.style.display = "none";
  toc2.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  function showa() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);
    cbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.remove(cclr);

    toc0.style.display = "block";
    toc1.style.display = "none";
    toc2.style.display = "none";
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);
    cbtn.classList.add(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);
    cbtn.classList.remove(cclr);

    toc0.style.display = "none";
    toc1.style.display = "block";
    toc2.style.display = "none";
  }
  function showc() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.add(clr);
    cbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.add(cclr);

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "block";
  }
</script>
