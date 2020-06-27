---
title: "Jailbreak Types"
permalink: /jailbreak-types
excerpt: Explanation on the different types of jailbreaks
---

{% include toc title="Table of Contents" %}

Not all jailbreaks work in the same way.

## What are the different types of Jailbeaks?

There are 4 main types of jailbreaks: Fully Untethered, Tethered, Semi-Untethered, and Semi-Tethered. Each type is determine by how independent it is from a computer.

### Untethered

{% capture untethered %}
Untethered  Jailbreaks can be considered the holy grail of all jailbreaks. They only require the exploit to be ran once either via a website or a computer. Unfortunately, there hasn't been a new Untehered Jailbreak in a long time and it's likely we may not see one for even longer. The only downside to an Untethered Jailbreak is that if something goes wrong, it could very well result in a bootloop requiring you to restore your device via iTunes. The likelihood of this happening is _low_, but is indeed possible. A few examples of Untethered Jailbreaks are P0sixspwn and Pangu9.
{% endcapture %}

<div class="notice--info">{{ untethered | markdownify }}</div>

### Semi-Untethered

{% capture semi-untethered %}
Semi-Untethered Jailbreaks have been the most prevalent type of jailbreak. A Semi-Untethered Jailbreak requires an exploit to be ran unpon every reboot or power loss. The upside is that the exploit is ran through an app on the device itself. This app, however, must be resigned every 7 days if sideloaded with a standard Apple ID. Semi-Untethered Jailbreaks have the benefit of being easily removable through their respective app. A few popular examples of Semi-Untethered Jailbreaks include Unc0ver, Electra, and Chimera.
{% endcapture %}

<div class="notice--info">{{ semi-untethered| markdownify }}</div>

### Semi-Tethered

{% capture semi-tethered %}
Semi-Tethered Jailbreaks are very similar to Semi-Unthered Jailbreaks with the only difference being that an exploit must be ran unpon every reboot on via a computer rather than a sideloaded app. Due to requiring a computer to rejailbreak after every reboot, some choose to use a Semi-Untethered Jailbreak. Checkra1n is a fairly popular Semi-Tethered Jailbreak.
{% endcapture %}

<div class="notice--info">{{ semi-tethered | markdownify }}</div>

### Tethered

{% capture tethered %}
Tethered Jailbreaks are not meant to be used by the general public. These Jailbreaks require a computer to boot the device. Therefore, these are only meant to be used by developers to get their tweaks ready for newer versions of iOS.
{% endcapture %}

<div class="notice--info">{{ tethered | markdownify }}</div>
