<br>

<div align="center">

[<img src="./resources/icon.png" width="144"/>](https://www.redotengine.org/)

  <h1 align="center">Redot Engine Launcher</h1>

  <p align="center">
    <strong>The Redot Engine Launcher is a centralized hub designed to streamline your development workflow.</strong>
  </p>

[![build](https://img.shields.io/github/actions/workflow/status/Redot-Experimental/launcher/build.yml)](https://github.com/hydralauncher/hydra/actions)
[![release](https://img.shields.io/github/package-json/v/Redot-Experimental/launcher)](https://github.com/hydralauncher/hydra/releases)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Redot-Experimental_launcher&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Redot-Experimental_launcher)

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#-contributing)
- [Build from source](#build-from-source)
  - [Install Node.js](#install-nodejs)
  - [Install Yarn](#install-yarn)
  - [Install Node Dependencies](#install-node-dependencies)
- [Running](#running)
- [Build](#build)
- [Contributors](#contributors)
- [License](#license)

## About

The Redot Engine Launcher is a centralized hub designed to streamline your development workflow.
<br>

## Features

- **Manage, Update, and Install Redot Engine Versions**: Easily switch between different versions of the Redot Engine to suit your project needs.
- **Organize Existing Projects**: Keep all your Redot projects in one place with easy access and management tools.
- **Manage Addons and Asset Packs**: Browse, install, and update addons and asset packs to enhance your development experience.

## Installation

Follow the steps below to install:

1. Download the latest version of Redot Engine Launcher from the [Releases](https://github.com/Redot-Experimental/launcher/releases/latest) page.
  - Download only `.exe` if you want to install Redot Engine Launcher on Windows.
  - Download `.deb`, `.rpm`, or `.zip` if you want to install Redot Engine Launcher on Linux (depends on your Linux distro).
  - Download `.dmg` if you want to install Redot Engine Launcher on macOS.
2. Run the downloaded or installed file from your Applications folder.
3. Enjoy Redot Engine Launcher!

## <a name="contributing"> Contributing
Redot is not only an engine but an ever-growing community of users and engine
developers. Please visit our [Discord server](https://discord.gg/redot)!

To get started contributing to the project, see the [contributing guide](CONTRIBUTING.md).
This document also includes guidelines for reporting bugs.

## Build from source

### Install Node.js

Make sure Node.js is installed on your machine. If it's not, you can download and install it from [nodejs.org](https://nodejs.org/).

### Install Yarn

Yarn is a package manager for Node.js. If you haven't installed it yet, you can do so by following the instructions on [yarnpkg.com](https://classic.yarnpkg.com/lang/en/docs/install/).

### Install Node Dependencies

Go to the project directory and install the Node dependencies using Yarn:

```bash
cd launcher
yarn
```

## Running

Once everything is set up, you can run the following command to start the Electron process:

```bash
yarn dev
```

## Build

Build the Electron application using the following command:

On Windows:

```bash
yarn build:win
```

On Linux:

```bash
yarn build:linux
```

On macOS:

```bash
yarn build:mac
```

## Contributors

<a href="https://github.com/Redot-Experimental/launcher/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Redot-Experimental/launcher" />
</a>

## License

The Redot Engine Launcher is licensed under the [MIT License](LICENSE).
