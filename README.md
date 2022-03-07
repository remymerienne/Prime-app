# 1. Prime-app

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)	![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)![Dropbox](https://img.shields.io/badge/Dropbox-%233B4D98.svg?style=for-the-badge&logo=Dropbox&logoColor=white)![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)![Mega.nz](https://img.shields.io/badge/Mega-%23D90007.svg?style=for-the-badge&logo=Mega&logoColor=white)![GitKranken](https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=white)![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

Badges markdown :  
[https://github.com/Ileriayo/markdown-badges](https://github.com/Ileriayo/markdown-badges)
[https://github.com/alexandresanlim/Badges4-README.md-Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)
[https://dev.to/envoy_/150-badges-for-github-pnk](https://dev.to/envoy_/150-badges-for-github-pnk)

Complete list of github markdown emoji markup :  
[https://gist.github.com/rxaviers/7360908](https://gist.github.com/rxaviers/7360908)

***

- [1. Prime-app](#1-prime-app)
  - [1.1. npm](#11-npm)
    - [1.1.1. Initialisation de npm](#111-initialisation-de-npm)
    - [1.1.2. Installation des dépendances de développement](#112-installation-des-dépendances-de-développement)
  - [1.2. Purgecss](#12-purgecss)
  - [1.3. Git](#13-git)

***

## 1.1. npm

### 1.1.1. Initialisation de npm

```bash
$ npm init -y
```

### 1.1.2. Installation des dépendances de développement

Liste des dépendances :
- webpack => webpack webpack-cli
- babel-loader => babel-loader @babel/core @babel/preset-env @babel/- plugin-transform-arrow-functions
- divers => sass eslint
- tests => jest @testing-library/dom @types/jest
- @testing-library/jest-dom => a voir pour les customes matchers et user-event

Coller dans package.json :
```json
"devDependencies": {
  "@babel/core": "^7.17.5",
  "@babel/plugin-transform-arrow-functions": "^7.16.7",
  "@babel/preset-env": "^7.16.11",
  "@testing-library/dom": "^8.11.3",
  "@types/jest": "^27.4.1",
  "babel-loader": "^8.2.3",
  "eslint": "^8.10.0",
  "jest": "^27.5.1",
  "sass": "^1.49.9",
  "webpack": "^5.70.0",
  "webpack-cli": "^4.9.2"
}
```

Installer les dépendances :
```bash
$ npm install
```

Mise à jour des dépendances (optionnelle) :
```bash
$ npm update
```

Commandes npm à coller dans package.json :
```json
"build": "webpack --config webpack.config.js",
"sass": "sass src/sass/app.scss src/css/app.css --watch",
"purge": "purgecss --css src/css/app.css --content index.html dist/app.bundle.js -o dist",
"test": "jest --watch --verbose",
"test-cov": "jest --coverage"
```

Lien vers les options de package.json :  
[https://docs.npmjs.com/cli/v8/configuring-npm/package-json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

***

## 1.2. Purgecss

Installation (en global seulement) :
```bash
$ npm i -g purgecss
```

Liens vers la documentation :  
[https://purgecss.com/](https://purgecss.com/)

***

## 1.3. Git

***
