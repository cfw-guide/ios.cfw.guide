---
title: "Resigning Apps"
permalink: /resigning-apps
excerpt: Guide to using resigning your apps
---

{% include toc title="Table of Contents" %}

## Required Reading

Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. If you sideloaded the app using a normal AppleID, that app will only remain signed for 7 days. After 7 days, you will no longer be able to open that app to re-jailbreak.

ReProvision allows you to re-sign these applications without a computer.

## Resign Without Computer (ReProvision)

1. Add the repo: <code><a href="https://repo.incendo.ws/" target="_blank">https://repo.incendo.ws/</a></code> using your package manager of choice
1. Install and open ReProvision
1. Sign in to your Apple ID
  - This information is only sent to Apple
1. Revoke all Certificates if asked
1. Sign any apps that are about to expire
  - You can alternatively open an `.ipa` files in ReProvision to resign apps.

If this doesn't work, ask on the r/Jailbreak [Discord Server](https://discord.gg/jb) for support.
{: .notice--info}
