import{_ as u}from"./hostshield.c228a1dc.js";import{_ as h,r as d,o as p,c as m,a as e,b as l,d as o,w as n,e as a}from"./app.3071e6d2.js";const f={},g={href:"https://store.arduino.cc/products/arduino-uno-rev3",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.aliexpress.com/w/wholesale-MAX3421E-USB-host-shield.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://sourceforge.net/projects/git-osx-installer/files/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.arduino.cc/en/software",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"};function S(v,t){const r=d("ExternalLinkIcon"),i=d("Tab"),s=d("Tabs");return p(),m("div",null,[t[52]||(t[52]=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),l(" Requirements")],-1)),e("ul",null,[e("li",null,[t[1]||(t[1]=l("An ")),e("a",g,[t[0]||(t[0]=l("Arduino Uno")),o(r)])]),e("li",null,[t[3]||(t[3]=l("A ")),e("a",y,[t[2]||(t[2]=l("MAX3421E USB host shield")),o(r)]),t[4]||(t[4]=l(", and USB-A to USB-B cable"))]),t[5]||(t[5]=e("li",null,"A soldering iron",-1)),t[6]||(t[6]=e("li",null,"0.5mm solder",-1)),t[7]||(t[7]=e("li",null,"Solder flux (Optional)",-1))]),t[53]||(t[53]=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Following this guide is a difficult task and requires moderate soldering and computer terminal skills. Proceed with caution.")],-1)),t[54]||(t[54]=e("h2",{id:"preparing-the-host-shield",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preparing-the-host-shield","aria-hidden":"true"},"#"),l(" Preparing the host shield")],-1)),t[55]||(t[55]=e("p",null,"Your host shield can arrive in two states - with headers, and without. If it is with headers, it will have pins and pin sockets already soldered to it, allowing you to connect it to an Arduino by simply placing it on top. If it has headers, your job is much easier.",-1)),o(s,{tabs:"",id:"headers"},{default:n(()=>[o(i,{tab:"",name:"With Headers",default:!0},{default:n(()=>t[8]||(t[8]=[e("p",null,"You will need to solder three pads on your USB host shield. The pads to solder are circled in this image:",-1),e("p",null,[e("img",{src:u,alt:"Where to solder to your host shield",style:{display:"block","margin-inline":"auto","max-width":"30em"}})],-1),e("ol",null,[e("li",null,"Plug in your soldering iron so it starts to heat up"),e("li",null,"Once it has heated up, place your USB host shield near a good source of light"),e("li",null,"Get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip"),e("li",null,"Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad"),e("li",null,"Repeat steps 3-4 until all three pads have been bridged")],-1)])),_:1}),o(i,{tab:"",name:"Without Headers"},{default:n(()=>t[9]||(t[9]=[e("p",null,"You will need to solder five sets of headers and bridge three pads on your USB host shield. The pads to solder are circled in this image:",-1),e("p",null,[e("img",{src:u,alt:"Where to solder to your host shield",style:{display:"block","margin-inline":"auto","max-width":"30em"}})],-1),e("ol",null,[e("li",null,"Plug in your soldering iron so it starts to heat up"),e("li",null,"Once it has heated up, place your USB host shield near a good source of light"),e("li",null,[l("Insert the first header into the holes on the board "),e("ul",null,[e("li",null,"For the single-row headers, ensure the sockets face towards the side with the ICs and USB port"),e("li",null,"For the dual-row header, ensure the sockets face on the opposite side of the board.")])]),e("li",null,"Get a medium-sided length of solder and form it into a straight wire shape"),e("li",null,"Touch it to a pin on the header - it's easiest to work from one edge and work your way to the other"),e("li",null,"Then, touch the soldering iron to the solder slightly away from the board, so that a short length of it is separated"),e("li",null,[l("This should form itself around the pin, securing the pin to the board "),e("ul",null,[e("li",null,"If it doesn't, remelt the solder and move it to the proper place")])]),e("li",null,[l("Repeat step 4 until all 34 pins are properly affixed "),e("ul",null,[e("li",null,"Ensure none of the pins are bridged (solder connecting two or more pins together)")])]),e("li",null,"Once the headers are soldered, get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip"),e("li",null,"Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad"),e("li",null,"Repeat steps 6-7 until all three pads have been bridged.")],-1)])),_:1})]),_:1}),t[56]||(t[56]=e("h2",{id:"installing-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-git","aria-hidden":"true"},"#"),l(" Installing Git")],-1)),t[57]||(t[57]=e("p",null,"To use checkm8-a5, you'll need Git. Depending on what version of macOS you're on, the steps are different.",-1)),o(s,{tabs:"",id:"git"},{default:n(()=>[o(i,{tab:"",name:"OS X 10.9 to macOS 10.12",default:!0},{default:n(()=>[e("ol",null,[e("li",null,[t[11]||(t[11]=l("Download the Git installer from ")),e("a",w,[t[10]||(t[10]=l("this link")),o(r)])]),t[12]||(t[12]=e("li",null,"Open and run the installer",-1)),t[13]||(t[13]=e("li",null,[l("Once it is installed, open Terminal and run "),e("code",null,"git --version"),l(" to verify it has installed properly")],-1))])]),_:1}),o(i,{tab:"",name:"macOS 10.13+"},{default:n(()=>t[14]||(t[14]=[e("ol",null,[e("li",null,[l("Install Brew, if you don't have it installed already, by opening a terminal window and running the command: "),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')]),e("li",null,[l("Enter your user password when prompted "),e("ul",null,[e("li",null,"Installing brew can take up to half an hour to complete")])]),e("li",null,[l("Once Brew is installed, run the command "),e("code",null,"brew install git"),l(" in terminal")]),e("li",null,[l("Once it is complete, run the command "),e("code",null,"git --version"),l(" to verify it has installed properly")])],-1)])),_:1})]),_:1}),t[58]||(t[58]=a('<h2 id="patching-the-usb-host-shield-2-0-library" tabindex="-1"><a class="header-anchor" href="#patching-the-usb-host-shield-2-0-library" aria-hidden="true">#</a> Patching the USB Host Shield 2.0 Library</h2><ol><li>Open a new Terminal window and run the command <code>git clone https://github.com/felis/USB_Host_Shield_2.0.git</code></li><li>Run the command <code>git clone https://github.com/synackuk/checkm8-a5.git</code></li><li>Run the command <code>cd USB_Host_Shield_2.0 &amp;&amp; git apply ~/checkm8-a5/usb_host_library.patch/</code></li></ol><h2 id="preparing-the-script" tabindex="-1"><a class="header-anchor" href="#preparing-the-script" aria-hidden="true">#</a> Preparing the Script</h2>',3)),e("ol",null,[e("li",null,[t[16]||(t[16]=l("Download and install the ")),e("a",b,[t[15]||(t[15]=l("Arduino IDE")),o(r)])]),t[17]||(t[17]=e("li",null,"While it is installing, connect your MAX3421E USB host shield to the Arduino",-1)),t[18]||(t[18]=e("li",null,"The pins and sockets on the bottom of the host shield will line up with the pins and sockets on the Arduino",-1)),t[19]||(t[19]=e("li",null,"Connect your Arduino to your computer",-1)),t[20]||(t[20]=e("li",null,[l("Once the Arduino IDE is installed, open Finder, press Command+Shift+G, and type in "),e("code",null,"~/checkm8-a5")],-1)),t[21]||(t[21]=e("li",null,[l("Open the file named "),e("code",null,"checkm8-a5.ino")],-1)),t[22]||(t[22]=e("li",null,[l("In the same Terminal window as before, run "),e("code",null,"cp -r ~/USB_Host_Shield_2.0 ~/Documents/Arduino/libraries/USB_Host_Shield_Library_2.0")],-1))]),t[59]||(t[59]=e("h2",{id:"running-the-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-the-script","aria-hidden":"true"},"#"),l(" Running the Script")],-1)),t[60]||(t[60]=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"It may take a few tries to get your device into DFU. Be patient and ensure you follow the steps exactly.")],-1)),o(s,{tabs:"",id:"device"},{default:n(()=>[o(i,{tab:"",name:"iPhone 4s and iPad 2 (non-2012 model)",default:!0},{default:n(()=>[e("ol",null,[t[25]||(t[25]=e("li",null,"Connect your iPhone or iPad to your computer",-1)),e("li",null,[t[24]||(t[24]=l("Enter DFU using ")),e("a",c,[t[23]||(t[23]=l("this guide")),o(r)])]),t[26]||(t[26]=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield.",-1)),t[27]||(t[27]=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1)),t[28]||(t[28]=e("li",null,[l("In the checkm8_a5 script, find the line that reads "),e("code",null,"#define A5_8942"),l(" and change it to "),e("code",null,"#define A5_8940")],-1)),t[29]||(t[29]=e("li",null,"Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1)),t[30]||(t[30]=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1)),t[31]||(t[31]=e("li",null,[l("Once it displays "),e("code",null,"Done!"),l(", disconnect your device from the Arduino and proceed to the next steps")],-1))])]),_:1}),o(i,{tab:"",name:"iPad 2 (2012), iPad mini 1, iPod touch 5"},{default:n(()=>[e("ol",null,[t[34]||(t[34]=e("li",null,"Connect your iPhone, iPad, or iPod to your computer",-1)),e("li",null,[t[33]||(t[33]=l("Enter DFU using ")),e("a",A,[t[32]||(t[32]=l("this guide")),o(r)])]),t[35]||(t[35]=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield",-1)),t[36]||(t[36]=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1)),t[37]||(t[37]=e("li",null,"Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1)),t[38]||(t[38]=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1)),t[39]||(t[39]=e("li",null,[l("Once it displays "),e("code",null,"Done!"),l(", disconnect your device from the Arduino and proceed to the next steps")],-1))])]),_:1}),o(i,{tab:"",name:"iPad 3"},{default:n(()=>[t[50]||(t[50]=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"On the iPad 3, success rate is much lower compared to other devices. It is not uncommon for it to take upwards of 10 tries to successfully exploit.")],-1)),e("ol",null,[t[42]||(t[42]=e("li",null,"Connect your iPhone, iPad, or iPod to your computer",-1)),e("li",null,[t[41]||(t[41]=l("Enter DFU using ")),e("a",k,[t[40]||(t[40]=l("this guide")),o(r)])]),t[43]||(t[43]=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield",-1)),t[44]||(t[44]=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1)),t[45]||(t[45]=e("li",null,[l("In the checkm8_a5 script, find the line that reads "),e("code",null,"#define A5_8942"),l(" and change it to "),e("code",null,"#define A5_8945"),l(".")],-1)),t[46]||(t[46]=e("li",null,"Again under the Tools menu, open Serial Monitor",-1)),t[47]||(t[47]=e("li",null,"Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1)),t[48]||(t[48]=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1)),t[49]||(t[49]=e("li",null,[l("Once it displays "),e("code",null,"Done!"),l(", disconnect your device from the Arduino and proceed to the next steps")],-1))])]),_:1}),o(i,{tab:"",name:"Apple TV 3 (A1427)"},{default:n(()=>t[51]||(t[51]=[e("ol",null,[e("li",null,"Connect your Apple TV to a computer with a MicroUSB cable"),e("li",null,"You will most likely need to disconnect the HDMI cable"),e("li",null,[l("Enter DFU mode by completing the following steps: "),e("ol",null,[e("li",null,"Hold Menu and Down until the LED on the Apple TV flashes rapidly."),e("li",null,"Let go, then hold Menu and Play/Pause until the LED on the Apple TV flashes rapidly")])])],-1),e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[l("If iTunes or Finder says "),e("code",null,"n/a"),l(" when listing the serial number when reporting it detected an Apple TV in recovery or DFU mode, it has successfully entered DFU.")]),e("p",null,"If it displays the serial number, try the steps again - it entered Recovery Mode instead.")],-1),e("ol",{start:"4"},[e("li",null,"Disconnect your Apple TV from your computer and connect it to your USB host shield"),e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected"),e("li",null,"Also under the Tools menu, open Serial Monitor"),e("li",null,"Set the baud rate is set to 115200, then upload the sketch to the Arduino"),e("li",null,"Serial Monitor will begin displaying a log of what the script is doing"),e("li",null,[l("Once it displays "),e("code",null,"Done!"),l(", disconnect your Apple TV from the Arduino")])],-1)])),_:1})]),_:1}),t[61]||(t[61]=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>At this step, there are many errors you may see. A list of the most common, with fixes, are as follows:</p><ul><li><code>usb init failed</code>: This means you did not solder the USB host shield correctly. Double-check everything is soldered properly and there are no bridges between pins.</li><li><code>Non Apple DFU found (vendorID: 0, productId: 0)</code>: This means the exploit failed. Force reboot the device, reenter DFU, and try the script again.</li><li><code>heap_feng_shui_req: setup status = 0, data status = 4</code> on loop: This is usually not an error. If it goes on for more than two minutes, force reboot the device and try the process again - otherwise, it should proceed to sending the line <code>2. set global state</code>.</li><li><code>heap_feng_shui_req: setup status = D, data status = 5</code> on loop <em>is</em> an error, but easily fixable - simply reupload the script to the Arduino and it should work. If it still doesn&#39;t, reenter DFU and try the process again.</li></ul></div><p>If checkm8-a5 printed out <code>Done!</code>, your A5 device is now successfully pwned. You may return to whatever guide you were following previously, if any.</p>',2))])}var T=h(f,[["render",S],["__file","index.html.vue"]]);export{T as default};
