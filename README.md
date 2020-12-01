# update-wsl-ip
a simple tool update ip of wsl in windows hosts using nodejs
> note: work only for the default distributions wsl on windows
## usage

### Install
```bash
npm i -g
```

### Run
open a Administrator powershell or cmd.    
```bash
update-wsl-ip.cmd
```
or go into source just run index.js
```bash
node ./index.js
```

## Custom hostname
support custom hostname in host file like
```
// hosts file
...
172.19.209.196 wslhost
...
```
by passing a arg to command

```bash
update-wsl-ip.cmd wslhost
```

default set to `wsl2`

## Need startup?
1. Must install by npm globally
2. Copy file or link `./update-wsl-host-startup.ps1` to your startup dictionary, normally in `%APPDATA%\Roaming\Microsoft\Windows\Start Menu\Programs`. 
3. Change the default app of file type `.ps1` to `powershell` like this:

![image-20201201142918085](README.assets/image-20201201142918085.png)