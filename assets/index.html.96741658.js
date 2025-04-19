import{_ as u}from"./checkra1n.ace0089d.js";import{_ as d,r,o as p,c,a as e,b as o,d as t,w as s,e as n}from"./app.3071e6d2.js";const m={},g={class:"custom-container danger"},b={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"},y={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"};function h(k,i){const l=r("router-link"),a=r("ExternalLinkIcon");return p(),c("div",null,[e("div",g,[i[3]||(i[3]=e("p",{class:"custom-container-title"},"DANGER",-1)),e("p",null,[i[1]||(i[1]=o("Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc.) questa guida non funzioner\xE0 e dovresti usare invece ")),t(l,{to:"/using-odysseyn1x"},{default:s(()=>i[0]||(i[0]=[o("Utilizzare Odysseyn1x")])),_:1}),i[2]||(i[2]=o("."))])]),i[23]||(i[23]=n('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><h2 id="download-linux" tabindex="-1"><a class="header-anchor" href="#download-linux" aria-hidden="true">#</a> Download (Linux)</h2>',3)),e("ul",null,[e("li",null,[i[5]||(i[5]=o("L'ultima versione di ")),e("a",b,[i[4]||(i[4]=o("checkra1n")),t(a)])]),e("li",null,[i[7]||(i[7]=o("La versione personalizzata di ")),e("a",f,[i[6]||(i[6]=o("pongoOS")),t(a)])])]),i[24]||(i[24]=e("p",null,[e("img",{src:u,alt:"Uno screenshot dell'applicazione checkra1n"})],-1)),i[25]||(i[25]=e("h2",{id:"installare-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installare-checkra1n","aria-hidden":"true"},"#"),o(" Installare checkra1n")],-1)),e("ol",null,[i[14]||(i[14]=n("<li>Apri il file <code>pongoOS.zip</code>, seleziona <code>PongoConsolidated.bin</code> ed estrailo. <ul><li>Prendi nota di dove lo estrai</li></ul></li><li>Esegui il file binary di <code>checkra1n</code> in modalit\xE0 CLI usando la versione modificata di pongoOS nel terminale utilizzando <code>sudo checkra1n -c -k [percorso di PongoConsolidated.bin]</code></li><li>Collega il tuo dispositivo iOS al computer</li>",3)),e("li",null,[i[9]||(i[9]=o("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in ")),t(l,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>i[8]||(i[8]=[o("modalit\xE0 DFU")])),_:1}),i[10]||(i[10]=o(", clicca ")),i[11]||(i[11]=e("code",null,"Start",-1)),i[12]||(i[12]=o(" per iniziare ")),i[13]||(i[13]=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1))]),i[15]||(i[15]=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1))]),i[26]||(i[26]=n('<p>Il tuo dispositivo iOS dovrebbe adesso riavviarsi.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Anche se \xE8 possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:</p><ul><li>Le persone tendono generalmente ad avere pi\xF9 stabilit\xE0 utilizzando Odysseyra1n invece di Cydia</li><li>Alcune funzionalit\xE0 facili da usare (come shshd, che salva automaticamente i blobs mentre si \xE8 jailbroken) non sono disponibili</li><li>Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia</li></ul></div><p>Per installare Odysseyra1n, <u>non</u> aprire l&#39;app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.</p><h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2>',4)),e("div",v,[i[19]||(i[19]=e("p",{class:"custom-container-title"},"TIP",-1)),e("p",null,[i[17]||(i[17]=o("Se preferisci, invece di eseguire lo script sul tuo computer, puoi eseguire lo script Odysseyra1n utilizzando la ")),e("a",y,[i[16]||(i[16]=o("scorciatoia")),t(a)]),i[18]||(i[18]=o(" aprendo questa pagina dal tuo dispositivo e poi cliccare il link della scorciatoia."))])]),i[27]||(i[27]=n("<ol><li>Apri l&#39;app terminale sul tuo computer</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Installa &quot;iproxy&quot; incollando ed eseguendo il seguente comando: <ul><li>Ubuntu/Debian: <code>sudo apt install libusbmuxd-tools</code></li><li>Arch Linux: <code>pacman -S libusbmuxd</code></li></ul></li><li>Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>",1)),e("p",null,[i[21]||(i[21]=o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install ")),t(l,{to:"/faq/#what-are-tweaks"},{default:s(()=>i[20]||(i[20]=[o("tweaks")])),_:1}),i[22]||(i[22]=o(", themes, packages and more."))]),i[28]||(i[28]=n('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3))])}var S=d(m,[["render",h],["__file","index.html.vue"]]);export{S as default};
