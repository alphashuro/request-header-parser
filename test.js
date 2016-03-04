const test = require('ava');
const getInfo = require('./get-info');
const headers = {
  "host":"127.0.0.1:8081",
  "connection":"keep-alive",
  "cache-control":"max-age=0",
  "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "upgrade-insecure-requests":"1",
  "user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",
  "accept-encoding":"gzip, deflate, sdch",
  "accept-language":"en-US,en;q=0.8,et;q=0.6"
};

test('software', t => {
  let info = getInfo({headers});
  t.same(info.software, 'Windows NT 6.1; WOW64');
})

test('language', t => {
  let info = getInfo({headers});
  t.same(info.language, 'en-US');
})

test('ip', t => {
  let info = getInfo({headers, ip: '1.1.1.1'});
  t.same(info.ipaddress, '1.1.1.1');
})
