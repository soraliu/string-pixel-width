# [@soral/string-pixel-width](https://github.com/soraliu/string-pixel-width)

[![npm version](https://img.shields.io/npm/v/@soral/string-pixel-width.svg?style=flat-square)](https://www.npmjs.com/package/@soral/string-pixel-width)

String pixel width measurement on the backend in Javascript. Thanks to [string-pixel-width](https://www.npmjs.com/package/string-pixel-width)

## Installation

To install the stable version:

<code>
npm install --save @soral/string-pixel-width
</code>

## Supported fonts:

- Andale Mono
- Arial
- Avenir
- Avenir Next
- BlinkMacSystemFont
- Comic Sans MS
- Courier New
- Georgia
- Helvetica
- Impact
- Times New Roman
- Trebuchet MS
- Verdana
- Webdings
- Open Sans
- Tahoma

## Example

```javascript
var { pixelWidth } = require('@soral/string-pixel-width')

const width = pixelWidth('My text ...', { size: 10 })
console.log('This text is ' + width + 'px long in the size of 10px.') // This text is 43.5px long in the size of 10px.
```

```javascript
var { pixelWidth } = require('@soral/string-pixel-width')

const width = pixelWidth('My text ...', { font: 'impact', size: 10 })
console.log('This text is ' + width + 'px long in the size of 10px.') // This text is 42px long in the size of 10px.
```

```javascript
var { pixelWidth } = require('@soral/string-pixel-width')

const width = pixelWidth('My text ...', { font: 'open sans', size: 10, bold: true, italic: true })
console.log('This text is ' + width + 'px long in the size of 10px.') // This text is 47px long in the size of 10px using bold and italic proportions.
```

Custom Map

```javascript
var { pixelWidth } = require('@soral/string-pixel-width')

// map can be created by src/pixelWidthCalculator.html
const width = pixelWidth('My text ...', { font: 'custom', map: { ... } });
```

## How to contribute

PRs are welcome :)
This library uses static map of width of every ASCII letter for all supported fonts.

1. Clone the repository
2. Open file `src/pixelWidthCalculator.html` in your editor
3. Add your font name into array of fonts (currently var websafe) and save
4. Open up `src/pixelWidthCalculator.html` in Google Chrome. It should look like this:
   ![PHPStan](docs/string-pixel-width-1.png)
5. Map of withs will be generated for you - copy it and replace content of file `src/widthsMap.js`

**Please everytime make sure you don't broke existing fonts - remove any font or broke his widths.**
