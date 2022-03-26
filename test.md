# 1. Mémo

---

- [1. Mémo](#1-mémo)
  - [1.1. Homebrew](#11-homebrew)
    - [1.1.1. Installation](#111-installation)
    - [1.1.2. Vérification de version](#112-vérification-de-version)
    - [1.1.3. Mise à jour](#113-mise-à-jour)
  - [1.2. Git](#12-git)
    - [1.2.1. Installation](#121-installation)
    - [1.2.2. Vérification de version](#122-vérification-de-version)
    - [1.2.3. Configuration](#123-configuration)
      - [1.2.3.1. Error message](#1231-error-message)
    - [1.2.4. Les commits](#124-les-commits)
      - [1.2.4.1. Rédaction des commits](#1241-rédaction-des-commits)
        - [1.2.4.1.1. Les types](#12411-les-types)
        - [1.2.4.1.2. Modèle de commit](#12412-modèle-de-commit)

---

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

---

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

### 1.2.4. Les commits

Inclures tous les fichiers modifiés au prochain commit :

`$ git add -A`

Commit :

`$ git commit -m "message de commit"`

Modifier le message du dernier commit :

`$ git commit --amend -m "nouveau message"`

Annuler le dernier commit :

`$ git revert HEAD`

notes : Va créer un nouveau commit "d'annulation" ce qui ne posera pas de problème lors d'un prochain push vers un dépot distant.

#### 1.2.4.1. Rédaction des commits

##### 1.2.4.1.1. Les types

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

##### 1.2.4.1.2. Modèle de commit

```bash
[FIX] index (#9): change alt text images

Alt text images must be different than images name in "Activity" section.

Closes #9
```

---
