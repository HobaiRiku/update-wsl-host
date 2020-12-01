#!/usr/bin/env node

const fs = require('fs');
const cp = require('child_process');
const customHostname = process.argv[2];
// get hostFile
const hostFile = fs.readFileSync('C:\\Windows\\System32\\drivers\\etc\\hosts', { encoding: 'utf8' });
const hostList = hostFile.split('\n');
// get wsl'2 ip now
const wslIp = cp
  .execSync(`C:\\Windows\\System32\\wsl.exe  -- bash -c "ip -4 a show eth0 | grep -oP '(?<=inet\\s)\\d+(\\.\\d+){3}'"`)
  .toString()
  .trim();
const hostFileContent = `${wslIp} ${customHostname ? customHostname : 'wsl2'}`;
// update
let found = false;
for (const [index, host] of hostList.entries()) {
  if (host.includes(customHostname ? customHostname : 'wsl2')) {
    hostList[index] = hostFileContent;
    found = true;
    break;
  }
}
if (!found) {
  hostList.push('');
  hostList.push('# update-wsl-ip auto add');
  hostList.push(hostFileContent);
  hostList.push('');
}
// write hostFile
fs.writeFileSync('C:\\Windows\\System32\\drivers\\etc\\hosts', hostList.join('\n'));
