---
title: "Resigning Apps"
permalink: /resigning-apps
redirect_from:
  - /resign
  - /resigning
  - /altstore
  - /altdaemon
  - /altserver
  - /altdeploy
  - /sideload
  - /sideloading
  - /reprovision
  - /repro
  - /reprovision-reborn
excerpt: Guide to using resigning your apps with or without a computer
sidebar:
  nav: sidebar
---

## Required Reading

Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. Apps sideloaded with a regular Apple ID will expire after 7 days or 365 days with a Developer Apple ID. After that period, you will no longer be able to open that app to re-jailbreak.


<button class="btn btn--large btn--info" id="abtn" onclick="showa()">AltDeploy</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">AltServer</button>
<button class="btn btn--large btn--info" id="cbtn" onclick="showc()">AltDaemon</button>
<button class="btn btn--large btn--info" id="dbtn" onclick="showd()">ReProvision Reborn</button>

{% capture a-instructions %}{% include_relative include/altdeploy.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative include/altserver.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

{% capture c-instructions %}{% include_relative include/altdaemon.md %}{% endcapture %}
<div id="cinstr">{{ c-instructions | markdownify }}</div>

{% capture d-instructions %}{% include_relative include/reprovision-reborn.md %}{% endcapture %}
<div id="dinstr">{{ d-instructions | markdownify }}</div>

{% capture end-of-page %}{% include_relative include/end-of-page.md %}{% endcapture %}

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

  var toc0 = document.getElementById("toc1"); // the numbers are mismatched because of the required reading ToC
  var toc1 = document.getElementById("toc2");
  var toc2 = document.getElementById("toc3");
  var toc3 = document.getElementById("toc4");

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
    dbtn.classList.remove(dclr);

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
    dbtn.classList.remove(dclr);

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
    dbtn.classList.remove(dclr);

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
    dbtn.classList.add(dclr);

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "block";
  }
</script>
