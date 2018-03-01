# hxify

[![ISC License](http://img.shields.io/badge/license-ISC-blue.svg)](http://copyfree.org)

hxify is a cross-platform GUI for Hx written in node.js using
Electron.

## Installation

Currently hxify is available on Windows, Linux, and macOS.

hxify will NOT use or in any way disrupt the wallet file you may
already be using at this time.

On macOS, Ubuntu (14.04 and later), and recent Debians, there should be
no additional dependencies needed.

On Fedora or similar distros you may need to install the libXScrnSaver
package if you see this error:
```
error while loading shared libraries: libXss.so.1
```

You can install this on a recent Fedora with the command:

```bash
sudo dnf -y install libXScrnSaver
```

On linux you will need to decompress the package:
```bash
tar -xvzf hxify-X.X.X.tar.gz
```
and then run the file:
```bash
./hxify
```

This will start hxd and hxwallet for you.

On macOS, double-click the .dmg file, drag the .app to your
Applications folder.  Double click on hxify.app to start.

From there follow the on screen instructions to setup your wallet.

### Options

When running a release version, there are a few options available.

To see additional debug information (including the output of hxd and hxwallet) run:

```
hxify --debug
```

To pass additional arguments to hxwallet (such as to increase the logging level run:

```
hxify --extrawalletargs='-d=debug'
```

## Developing

Due to potential compatibility issues, for now, all work should be
done with electron 1.4.15.

You need to install hxd, hxwallet and dcrctl.  

- [hxd/hxtl installation instructions](https://github.com/hybridnetwork/hxd#updating)
- [hxwallet installation instructions](https://github.com/hybridnetwork/hxwallet#installation-and-updating)

This has been tested on Linux and OSX.

Adjust the following steps for the paths you want to use.

``` bash
mkdir code
cd code
git clone https://github.com/hybridnetwork/hxify.git
cd hxify
yarn
mkdir bin/
cp $GOPATH/bin/hx* bin/
yarn dev
```

### Note about developing with testnet

The first time you run with testnet, you may get a "Failed to connect wallet by deadline error".  If so, make sure you change your config.json:
```bash
"network": "testnet",
```

### Windows

On windows you will need some extra steps to build grpc.  This assumes
you are using msys2 with various development tools (copilers, make,
ect) all installed.

Install node from the official package https://nodejs.org/en/download/
and add it to your msys2 path.  You must install the same version of node as required for Linux and OSX (6.9.5).

Install openssl from the following site:
https://slproweb.com/products/Win32OpenSSL.html

From an admin shell:

```bash
npm install --global --production windows-build-tools
```

Then build grpc as described above.

## Building the package

You need to install hxd, hxwallet and dcrctl.  

- [hxd/hxctl installation instructions](https://github.com/hybridnetwork/hxd#updating)
- [hxwallet installation instructions](https://github.com/hybridnetwork/hxwallet#installation-and-updating)

To build a packaged version of hxify (including a dmg on OSX and
exe on Windows), follow the development steps above.  Then build the
dcr command line tools:

```bash
cd code/hxify
mkdir bin
cp `which hxd` bin/
cp `which hxctl` bin/
cp `which hxwallet` bin/
npm install
npm run package
```

## Building release versions

### Linux

You need to make sure you have the following packages installed for the building to work:
- icns2png
- graphicsmagick
- rpm-build

```bash
npm run package-linux
```

After it is finished it will have the built rpm, deb and tar.gz in the releases/ directory.

## Docker

A docker file for building hxify is also provided.  With no options it builds for linux on amd64 although it is possible to attempt OSX or arm builds (neither of which have been tested).

```
$ ./build-docker.sh <OS> <ARCH>
```

## Contact

If you have any further questions you can find us at:

- hybrid.network

## Issue Tracker

The
[integrated github issue tracker](https://github.com/hybridnetwork/hxify/issues)
is used for this project.

## License

Hxify is licensed under the [copyfree](http://copyfree.org) ISC License.
