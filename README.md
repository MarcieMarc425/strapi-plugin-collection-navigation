# Strapi Plugin Collection Navigation

[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-yellow.svg)](https://github.com/MarcieMarc425/strapi-plugin-collection-navigation/pulls) ![NPM](https://img.shields.io/npm/l/strapi-plugin-collection-navigation) [![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/MarcieMarc425/strapi-plugin-collection-navigation?display_name=tag&sort=semver)](https://github.com/MarcieMarc425/strapi-plugin-collection-navigation/releases)



A simple Strapi plugin to add navgation controls to the edit page of an item of collection without going back to the collection page.

## Caveat

- Please note this plugin depends a lot on the pre-existing DOM structure of the Strapi admin panel, as there is currently no injection zone available for the specific area I want to place the navigation control (as of Strapi v4.3.6). So please use with caution!
- When traversing with navigation control, going to another item seems to save your current content of item, so make sure you don't have anything committed when clicking previous or next button! There doesn't seem to be any way around this. Also, because it will save your content, it will also pollute the "last edited" if you care about that.

## Feature

- Add a **Previous** and **Next** button to navigate forward and backward of a collection by id
- Add a **Back to collection** button to go back to collection view (as the default back button is only browser back button)

## Table Of Content

- [Strapi Plugin Collection Navigation](#strapi-plugin-collection-navigation)
  - [Caveat](#caveat)
  - [Feature](#feature)
  - [Table Of Content](#table-of-content)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Rebuild The Admin Panel](#rebuild-the-admin-panel)
- [Usage](#usage)
  - [Author](#author)

## Requirements

Strapi v4 is required.

## Installation

1. Download

```
yarn add strapi-plugin-collection-navigation
```

or

```
npm i strapi-plugin-collection-navigation
```

2. Enable the plugin

Add in the file `config/plugins.js`:

```js
module.exports = ({ env }) => ({
  //...
  'collection-navigation': {
    enabled: true,
  },
  //...
});
```

## Rebuild The Admin Panel

New releases can introduce changes to the administration panel that require a rebuild. Rebuild the admin panel with one of the following commands:

```
yarn build
```

or

```
npm run build
```

# Usage

Once the plugin is installed and setup, the functionalities are accessible on the content management page of items of a collection.

<p align="center">
  <img src="./docs/ui.png" alt="UI" width="100%"/>
</p>

## Author

Marc Tse - [@MarcieMarc425](https://github.com/MarcieMarc425)
