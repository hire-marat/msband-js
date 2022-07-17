# Microsoft Band TypeScript Library

[![good-idea-2-license](https://img.shields.io/badge/license-GOOD%20IDEA%202-lightgrey?style=plastic)](#)
[![made-with-typescript](https://img.shields.io/badge/made%20with-TypeScript-%230074c1?style=plastic)](http://www.typescriptlang.org/)

This library is a side project to a side project, to create a TypeScript
 interface for the Microsoft Band and Microsoft Band 2.
I've barely made a start, but have managed to achieve connecting to my Band via
 Web Bluetooth through a WebStorm debugger, which is a great baseline to make
 the first commit.  
Ideally I'll be able to add full BLE and USB support, and export as some kind
 of minified JS file which you can just include in the `<head>` to integrate
 Band support to any website or webapp.

## Supported Features
* Connecting to a Band over BLE

## Planned Features
* Communicating with a Band over USB
* Communicating with a Band over BLE
* Getting/setting Band time
* Decoding/encoding Band RLE icons
* Reading/setting the Me Tile (watchface background)
* Reading tile icons (and default tiles)
* Downloading device logs
* Updating device firmware version
* Parsing/building command packets
* Escaping demo mode
* Entering demo mode (not recommended)
* Escaping OOBE
* Customising profile
* Customising tile layout
* Customising colour scheme
* Updating calendar items
* Setting up custom workouts
* Generating and uploading ephemeris data to reduce TTFF
* Updating timezone info
* Processing live data from sensors
* Downloading and processing historical data
* Framework for interactive tiles running from the browser
* ~~Shenanigans~~

## Setting up a development environment
`msbandjs` depends on `node` for building, `construct-js` for parsing/building
 data structures, and `uuid` for UUID stuff.

Thankfully, `pnpm` takes care of setting up the virtual environment correctly,
 so here's the short set of instructions to get started:

* Install `node-js` and `pnpm`
* `git clone git@github.com:hire-marat/msbandjs.git --depth 1`
* `cd msbandjs`
* `pnpm install`
* `npx webpack`
* Start `index.html` in your favourite local debugger (WebStorm is good for this)

## Setting up Bluetooth Low Energy
### on Chrome
* Open `index.html` somewhere
* Start pairing the Band with your machine, making sure to press `Yes` when it prompts to use an iPhone/BLE
* Run the following in the Console:
* `iband = new msband.BLEv2Interface();`
* `await iband.acquire();`
* Find your Band in the popup list and connect to it
* `characteristics = await service.getCharacteristics()`
* To be continued...

## License
[GOOD IDEA 2](LICENSE)
