---
title: "Regarding Odysseyra1n on A11"
layout: single-no-ads
excerpt: "An explanation regarding why Odysseyra1n is not recommended for A11 users on iOS 14"
sitemap: false
permalink: /information-regarding-a11
---

This only applies to A11 devices on iOS 14
{: .notice--info}

## Required Context

What this centralizes around is that, when using Odysseyra1n on A11 devices running iOS 14, you cannot use a passcode or use Touch ID, Face ID, or Apple Pay. 

This page explains the technological reasons around it, as well as why we are only recently beginning to officially support this option on the guide.

## What was changed in iOS 14

Essentially, when Apple released iOS 14, they included a mitigation for A10(X)+ devices regarding SEP (Secure Enclave Processor) and DFU.

This mitigation basically causes a device booted from DFU to kernel panic if a request to decrypt SEP is made, as checkm8 (the bootrom exploit) is not a functional SEP exploit, it cannot be mitigated just through checkm8.

## Why is this not an issue for A10(X)

The biggest reason this is **not** an issue for A10(X) is because of the fact that on A10(X), a SEP exploit exists (known as blackbird), allowing us to work around this mitigation on A10(X) devices.

On A11, the same SEP exploit used is patched, meaning that it cannot be used to work around this mitigation.

## Why is this functionality even present in checkra1n

This (likely) was not intended to be added initially to checkra1n, however, people managed to reverse engineer checkra1n 0.11.0 to patch a certain binary to allow checkra1n 0.11.0 to jailbreak A10(X) and A11 on iOS 14

checkra1n team did not want people to use unofficial builds of checkra1n, and due to this, they pretty much had to support said functionality, which was implemented in checkra1n 0.12.0

## Your options

If you're on iOS 14.0 to 14.3, we **highly** recommend using [Taurine](installing-taurine) instead of Odysseyra1n, for it allows you to retain security

If you are on iOS 14.4 to 14.5.1, you do not have other options, personally, we do not recommend jailbreaking currently and instead recommend waiting for something such as Taurine, but, if you're willing to work around the security issues and understand the security flaws, you can continue to [Odysseyra1n](installing-odysseyra1n)