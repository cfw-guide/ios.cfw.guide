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

This will take you through the process of saving blobs which are required if you wish to downgrade to an older, unsigned version of iOS or iPadOS. There are multiple methods below you can try. For unjailbroken devices or devices with an A12 processor or newer, you will need to use the "Computer" method.

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">App</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Web</button>
<button class="btn btn--large btn--info" id="cbtn" onclick="showc()">Computer</button>
<button class="btn btn--large btn--info" id="dbtn" onclick="showd()">Onboard</button>

{% capture a-instructions %}{% include_relative tss-app.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative tss-web.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

{% capture c-instructions %}{% include_relative tss-computer.md %}{% endcapture %}
<div id="cinstr">{{ c-instructions | markdownify }}</div>

{% capture d-instructions %}{% include_relative onboard.md %}{% endcapture %}
<div id="dinstr">{{ d-instructions | markdownify }}</div>

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

  var d = document.getElementById("dinstr");
  var dbtn = document.getElementById("dbtn");
  var dclr = "btn--primary"

  var clr = "btn--info"

  var toc0 = document.getElementById("toc0");
  var toc1 = document.getElementById("toc1"); // toc is mismatched because of the sub topics
  var toc2 = document.getElementById("toc4");
  var toc3 = document.getElementById("toc9");

  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";

  toc0.style.display = "block";
  toc1.style.display = "none";
  toc2.style.display = "none";
  toc3.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  function showa() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);
    cbtn.classList.add(clr);
    dbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.remove(cclr);

    toc0.style.display = "block";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "none";
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);
    cbtn.classList.add(clr);
    dbtn.classList.add(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.remove(cclr);

    toc0.style.display = "none";
    toc1.style.display = "block";
    toc2.style.display = "none";
    toc3.style.display = "none";
  }
  function showc() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";

    abtn.classList.add(clr);
    bbtn.classList.add(clr);
    cbtn.classList.remove(clr);
    dbtn.classList.add(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.add(cclr);
    dbtn.classList.remove(cclr);

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "block";
    toc3.style.display = "none";
  }
    function showd() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.add(clr);
    cbtn.classList.add(clr);
    dbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.add(cclr);

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "block";
  }
</script>
