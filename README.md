# osx-build-machine-info-service
OS X build machine info service can show various information about the build machine by accessing [http://localhost](http://localhost) or http://hostname.

## How to install ?

```shell
brew tap xfreebird/utils
brew install machine-info-service
info-service-helper install
```

## Usage

* Install:

```shell
info-service-helper install 
```

* Uninstall:

```shell
info-service-helper uninstall
```


## View output from browser

Open [http://localhost](http://localhost) or http://hostname.

## View output from command line

```shell
machine-info
```

## What it can do ?

* Show hardware and OS information
* List all installed Xcode apps
* List installed iOS and OSX SDKs
* List installed iOS signing certificates
* List installed iOS provisioning profiles
* List all installed Java tools and information
* List installed Android SDKs, NDKs, Build Tools, Platforms and Emulators
* List all installed gems and all brew packages

## How it works ? 

* The servevice runs as ```launchd``` agent under current user (websocket daemon running listening port 9999)
* The launchd agent grabs info from the ```machine-info ``` script output.
* Apache is configured to use the ```/opt/www``` folder. In that folder is located ```index.html``` that connects to the websocket daemon at port 9999.

## Logs

All logs are written to ```/tmp/com.infoservice-agent.log``` and ```/tmp/com.infoservice-agent_err.log```.

## Example

![alt text](https://raw.githubusercontent.com/xfreebird/osx-build-machine-info-service/master/sample.png "Sample")

# License

```
The MIT License (MIT)

Copyright (c) 2015 Nicolae Ghimbovschi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
