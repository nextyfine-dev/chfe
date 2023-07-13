# 🔄 chfe - Change Files Extensions

[![npm](https://img.shields.io/badge/npm-v7.0.0-red.svg)](https://www.npmjs.com/package/chfe)
[![Node.js](https://img.shields.io/badge/node-v14.0.0-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)


## Description

chfe (Change Files Extensions) is a command-line tool that simplifies the process of changing file extensions within a specified folder. It allows you to quickly and effortlessly update the extensions of multiple files in one go. Whether you're migrating to a different file format or organizing your files, chfe automates the renaming process, saving you time and effort.

## Features

- 🔄 Change file extensions in a specified folder
- 🚀 Batch rename multiple files at once
- 🌟 Simple and intuitive command-line interface
- ⚡️ Built-in file management with Node.js
- 🔄 Easily convert file formats with ease

## Installation

To install chfe, simply run the following command:

```bash
npm install -g chfe
```

## Usage Examples

### Change file extensions in the "source" folder from .js to .mjs

```bash
chfe -f source -ce js -ne mjs
```

### Display help and options

```bash
chfe -h
```

## Options

- `-h, --help`: Display help and usage instructions.
- `-f, --folder <folder>`: Specify the folder name to change file extensions.
- `-ce, --current-extension <current_extension>`: Specify the current file extension.
- `-ne, --new-extension <new_extension>`: Specify the new file extension.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
