module.exports = (adArr) => {
  var ret = 'window.googletag = window.googletag || {cmd: []}; var adScript__w = window.innerWidth;'
  if (adArr) {
    ret += 'var adScript__id, adScript__slot, adScript__size;'
  }
  adArr.map(function(ad) {
    ret += `adScript__id = '${ad.id}';
adScript__slot = '${ad.slot}';
adScript__size = ${JSON.stringify(ad.size)};
adScript__size = adScript__size.filter(x => x[0] <= adScript__w);
adScript__size = adScript__size.sort().reverse();
adScript__size = [adScript__size[0]];
if (adScript__size) {
  googletag.cmd.push(function() {
    googletag.defineSlot(adScript__slot, adScript__size, adScript__id).addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.ZenableServices();
  });
}`
  })

  return ['script', {}, ret.replace(/\n/g, '')]
}