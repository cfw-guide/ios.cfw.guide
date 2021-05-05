## Introduction 

Onboard blobs are blobs that are saved on the device itself, unlike normal blobs, you can save onboard blobs on unsigned versions as long as you're on that version. There are 2 types of onboard blobs


1. OTA onboard blobs 
    - if you updated to the version you are saving onboard blobs on using the settings app, then the blobs will be saved as "OTA blobs". Which you'll be able to use in the very near future
2. iTunes onboard blobs 
   - if you updated/restored to the version you are saving onboard blobs on using a computer, then the onboard blobs will be saved like normal blobs and you'll be able to use them

## Save onboard blobs

These are the steps in order to save onboard blobs:

1. Add https://apt.arx8x.net to sources in your [package manager](https://ios.cfw.guide/package-managers)
2. Search for and download ``` System info ```
![](https://imgur.com/a/g8XZPrM)
3. After downloading ``` System info ```, open settings and go to ```General>About``` And scroll down to ```ECID```, slide on ```ECID``` and tap "APTicket"
4. Click ```Submit```

When it finished, it should say ```APTicket Submitted```, this means that you successfully saved the onboard blobs, if you ever want to access them, open your [shsh.host](https://shsh.host) directory 
