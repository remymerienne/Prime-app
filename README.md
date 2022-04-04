# 1. Prime-app

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

***

- [1. Prime-app](#1-prime-app)
  - [1.1. Homebrew](#11-homebrew)
    - [1.1.1. Installation](#111-installation)
    - [1.1.2. Vérification de version](#112-vérification-de-version)
    - [1.1.3. Mise à jour](#113-mise-à-jour)
  - [1.2. Git](#12-git)
    - [1.2.1. Installation](#121-installation)
    - [1.2.2. Vérification de version](#122-vérification-de-version)
    - [1.2.3. Configuration](#123-configuration)
      - [1.2.3.1. Error message](#1231-error-message)
    - [1.2.4. Initialisation](#124-initialisation)
    - [1.2.5. Les commits](#125-les-commits)
      - [1.2.5.1. Rédaction des commits](#1251-rédaction-des-commits)
        - [1.2.5.1.1. Les types](#12511-les-types)
        - [1.2.5.1.2. Modèle de commit](#12512-modèle-de-commit)
    - [1.2.6. Les branches](#126-les-branches)
    - [1.2.7. Les remotes](#127-les-remotes)
    - [1.2.8. Fetch](#128-fetch)
    - [1.2.9. Les tags](#129-les-tags)
    - [1.2.10. .Gitignore](#1210-gitignore)
  - [1.3. Markdown](#13-markdown)

***

## 1.1. Homebrew

![Homebrew](https://a11ybadges.com/badge?logo=homebrew)

Gestionnaire de paquets pour macOS.

https://brew.sh/index_fr

### 1.1.1. Installation

Suivre les instruction du site officiel.

### 1.1.2. Vérification de version

`$ brew --version`

### 1.1.3. Mise à jour

`$ brew update`

***

## 1.2. Git

![Git](https://a11ybadges.com/badge?logo=git)

http://git-scm.com

### 1.2.1. Installation

`$ brew install git`

### 1.2.2. Vérification de version

`$ git --version`

### 1.2.3. Configuration

Pour un apperçu de la configuration actuelle :

`$ git config --list`

Enregistrer son nom et son e-mail :

`$ git config --global user.name "John Doe"`

`$ git config --global user.email "johndoe@example.com"`

Activer les couleurs :

`$ git config --global color.diff auto`

`$ git config --global color.status auto`

`$ git config --global color.branch auto`

Définir VSCode come éditeur par défaut :

`$ git config --global core.editor "code --wait"`

`$ git config --global diff.tool vscode`

`$ git config --global merge.tool vscode`

#### 1.2.3.1. Error message

Il peut parfois arriver qu'un message d'erreur apparaisse lors d'un commit ou d'un merge de type :

```bash
error: There was a problem with the editor 'core --wait'.
Please supply the message using either -m or -F option.
```

Dans ce cas, ouvrir la palette de commande (command + shift + p)  
Taper 'code' dans l'invite et sélectionner la commande :

`Shell Command: Install 'code' command in PATH`

### 1.2.4. Initialisation

Nouveau projet :

`$ git init`

Cloner un projet existant :

`$ git clone <https://mon-repo-distant>`

### 1.2.5. Les commits

Inclures tous les fichiers modifiés au prochain commit :

`$ git add -A`

Commit :

`$ git commit -m "message de commit"`

Modifier le message du dernier commit :

`$ git commit --amend -m "nouveau message"`

Annuler le dernier commit :

`$ git revert HEAD`

notes : Va créer un nouveau commit "d'annulation" ce qui ne posera pas de problème lors d'un prochain push vers un dépot distant.

#### 1.2.5.1. Rédaction des commits

##### 1.2.5.1.1. Les types

- feat : Ajout d'ue nouvelle fonctionnalité
- fix : Correction d'un bug
- build : Changement lié au systèmes de build ou qui concerne les dépendances.
- docs : Ajout ou modification de la documentation
- perf : Amélioration des performances
- refactor : Remaniment du code qui ne modifie pas le rendu.
- style : Changement lié au style du code
- test : Ajout ou modification de tests
- revert : Annulation d'un précédent commit
- chore : toute autre modification

##### 1.2.5.1.2. Modèle de commit

```bash
[FIX] index (#9): change alt text images

Alt text images must be different than images name in "Activity" section.

Closes #9
```

### 1.2.6. Les branches

Lister les branches locales :

`$ git branch`

Lister les branches distantes :

`$ git branch -r`

Lister toutes les branches :

`$ git branch -a`

Créer une nouvelle branche :

`$ git branch <ma-nouvelle-branche>`

Se rendre sur une autre branche :

`$ git checkout <ma-branche-de-destination>`

Créer une nouvelle branche et aller directement dessus :

`$ git checkout -b <ma-nouvelle-branche>`

Renommer une branche :

`$ git branch -m <ancien-nom> <nouveau-nom>`

Supprimer une branche locale :

`$ git branch -d <ma-branche>`

Forcer la suppression d'une branche :

`$ git branch -D <ma-branche>`

Supprimer une branche distante :

`$ git push <remote> --delete <ma-branche>`

Publier une branche sur le dépot distant :

`$ git push <remote> <ma-branche>`

Récupérer une branche distante :

`$ git pull <remote> <ma-branche>`

Merger une branche en conservant l'historique :

`$ git merge --no-ff <branche-à-merger>`

### 1.2.7. Les remotes

Lister les remotes :

`$ git remote`

Créer une remote :

`$ git remote add origin <https://mon-repo-distant>`

Mettre à jour le HEAD aprés changement de branche par défaut :

`$ git remote set-head origin -a`

### 1.2.8. Fetch

Mise à jour des changements entre dépot local et distant :

`$ git fetch <remote>`

Suppression des branches supprimées et réstées en mémoire localement :

`$ git fetch --prune`

### 1.2.9. Les tags

Repertorier les tags :

`$ git tag`

Création d'un tag simple :

`$ git tag <tagname>`

(**tagname** est à remplacer par un identifiant sémantique de type **v1.0.0**)

Création d'un tag annoté :

`$ git tag -a <tagname>`

Un tag annoté contiendra des métadonnées supplémentaires sous forme de message, telles que le nom du créateur, la date, son email.

Envoyer le tag sur un dépot distant :

`$ git push origin <tagname>`

***

### 1.2.10. .Gitignore

Pour désindexer des fichiers ajoutés au .gitignore :

`$ git rm -r --cached .`

`$ git add .`

`$ git commit -m "fixed untracked files`

***

## 1.3. Markdown

![Markdown](https://a11ybadges.com/badge?logo=markdown)

Badges markdown :

Grandes tailles :  
https://github.com/a11y-badges/a11y-markdown-badges

Badges normaux :  
https://github.com/Ileriayo/markdown-badges  
https://github.com/alexandresanlim/Badges4-README.md-Profile  
https://dev.to/envoy_/150-badges-for-github-pnk

Complete list of github markdown emoji markup :  
https://gist.github.com/rxaviers/7360908

***
