import{_ as e,o,c as t,e as n}from"./app.8ef2f5c7.js";const a={},d=n('<p>If you want to remove palera1n, you can use the below commands on a PC/Mac while your device is connected in DFU. To remove the jailbreak, you <strong>do not have to restore</strong>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are on Linux, you will have to do another step first. Open up a terminal and run these commands:</p><p><code>sudo systemctl stop usbmuxd</code></p><p><code>sudo usbmuxd -f -p</code></p><p>Then, open a second terminal, and do the following steps with the other terminal window.</p></div><ol><li>Clone the repo with <code>git clone -b legacy --recursive --depth=1 --shallow-submodules https://github.com/palera1n/palera1n &amp;&amp; cd palera1n</code><ul><li>If you&#39;ve already cloned the repo, just run <code>cd palera1n</code></li></ul></li><li>Run <code>./palera1n.sh --restorerootfs &lt;iOS version you&#39;re on&gt; --tweaks</code><ul><li>If you&#39;re using Linux, add <code>sudo</code> to the front of the command</li><li>If you&#39;re using semi-tethered palera1n, add the <code>--semi-tethered</code> flag to the end of the command</li><li>If you&#39;re having an issue, add <code>--debug</code> to the end and use those logs to troubleshoot</li></ul></li></ol><p>Your device should boot into iOS, and you can use the device as normal.</p>',4),s=[d];function l(c,i){return o(),t("div",null,s)}var u=e(a,[["render",l],["__file","index.html.vue"]]);export{u as default};
