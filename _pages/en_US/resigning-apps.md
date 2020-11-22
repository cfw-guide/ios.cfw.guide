---
title: "Resigning Apps"
permalink: /resigning-apps
excerpt: Guide to using resigning your apps
---

{% include toc title="Table of Contents" %}

## Required Reading

Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. If you sideloaded the app using a normal AppleID, that app will only remain signed for 7 days. After 7 days, you will no longer be able to open that app to re-jailbreak.

AltDaemon allows AltStore to automatically re-sign these applications, without needing to connect to a computer running AltServer over local network.

## Resign Without Computer (AltDaemon)

1. Ensure you have the Dynastic repo added to your package manager of choice. If you don't, add <code><a href="https://repo.dynastic.co/" target="_blank">https://repo.dynastic.co/</a></code>  <br><img src="{{ "/assets/images/dynastic-sileo.png" | absolute_url }}" width="250" />
1. Ensure your installed AltStore version is at least "AltStore 1.4", you can check this in settings <br><img src="{{ "/assets/images/altstore-version.png" | absolute_url }}" width="250" />
1. Install "AltDaemon" via package manager of choice, and then respring <br><img src="{{ "/assets/images/altdaemon-package.png" | absolute_url }}" width="250"/>
1. Sign any apps that are about to expire
  - You can alternatively open an `.ipa` files in AltStore to resign apps.

If this doesn't work, ask on the r/Jailbreak [Discord Server](https://discord.gg/jb) for support.
{: .notice--info}
