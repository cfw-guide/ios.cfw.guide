import{_ as s}from"./checkra1n.ace0089d.js";import{_ as d,r as i,o as u,c,e as t,a as o,b as n,d as l,w as h}from"./app.3071e6d2.js";const p={},m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"};function y(f,e){const r=i("ExternalLinkIcon"),a=i("router-link");return u(),c("div",null,[e[11]||(e[11]=t('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This guide does not currently account for the Apple TV 4K (1st Generation) at this time.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You need to have enabled developer mode on your ChromeOS device to follow this.</p></div><h2 id="requirements-chromeos" tabindex="-1"><a class="header-anchor" href="#requirements-chromeos" aria-hidden="true">#</a> Requirements (ChromeOS)</h2>',6)),o("ul",null,[o("li",null,[e[1]||(e[1]=n("The latest release of ")),o("a",m,[e[0]||(e[0]=n("checkra1n")),l(r)])]),e[2]||(e[2]=o("li",null,"An Apple TV Siri remote (any generation)",-1))]),e[12]||(e[12]=t('<p><img src="'+s+'" alt="A screenshot of the checkra1n application"></p><h2 id="allowing-checkra1n-to-run" tabindex="-1"><a class="header-anchor" href="#allowing-checkra1n-to-run" aria-hidden="true">#</a> Allowing checkra1n to run</h2><ol><li>Move the checkra1n binary which is downloaded to <code>/usr/local/bin</code><ul><li>This can be done by doing the following: <ul><li>Press <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>Run <code>shell</code></li><li>Run <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Run the following command in terminal: <code>sudo mount -o remount,exec /tmp</code><ul><li>You&#39;ll need to do this every single time you reboot your ChromeOS device</li></ul></li><li>Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.</li></ol><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2>',4)),o("ol",null,[e[9]||(e[9]=t("<li>Run the <code>checkra1n</code> binary in the terminal using <code>TERM=linux sudo checkra1n</code><ul><li>You may need to run <code>sudo chmod a+x /usr/local/bin/checkra1n</code> if the binary doesn&#39;t run</li><li>If you&#39;re on tvOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2)),o("li",null,[e[4]||(e[4]=n("You will now be presented with instructions in how to reboot your device into ")),l(a,{to:"/faq/#what-is-dfu-mode"},{default:h(()=>e[3]||(e[3]=[n("DFU mode")])),_:1}),e[5]||(e[5]=n(", click ")),e[6]||(e[6]=o("code",null,"Start",-1)),e[7]||(e[7]=n(" to begin ")),e[8]||(e[8]=o("ul",null,[o("li",null,"Follow the instructions until your device shows a black screen")],-1))]),e[10]||(e[10]=o("li",null,"After this, checkra1n should automatically install",-1))]),e[13]||(e[13]=o("p",null,"Your Apple TV device should now reboot.",-1)),e[14]||(e[14]=o("p",null,"You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.",-1))])}var v=d(p,[["render",y],["__file","index.html.vue"]]);export{v as default};
