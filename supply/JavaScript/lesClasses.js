// - Création de la classe User
// - ==========================

 class User {

  // ************************
  // * Constructeur
  // ************************
  // = Le  constructeur d'une classe est la fonction qui est appelée quand on crée
  // = une nouvelle instance de cette classe avec le mot clé 'new'
  constructor(firstName, lastName, age, weight) {

    // = Exécution d'une fonction à l'instantiation d'un objet
    // = (peut permettre une écoute sur évènement etc...)
    console.log('Cours sur les \'class\' en JavaScript');

    // = Propriété (ou 'attribut') de classe.
    // = C'est une variable interne à une classe qui peut évoluer
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;

    // = Déclaration et initialisation d'une propriété commune à toutes les 
    // = instances de la classe. (peut être modifiée plus tard)
    this.id = 1;

  }

  // ************************
  // * Méthode
  // ************************
  // = Méthode de classe ou d'instance est une fonction interne à une classe et 
  // = qui va agire sur les instances de cette classe
  makeFullName() {
    return 'Nom : ' + this.lastName + ', ' + 'Prénom : ' + this.firstName;
  }

  // ************************
  // * Getter
  // ************************
  // = 'get' transforme une méthode en pseudo-propriété
  get fullName() {
    return this.makeFullName() + ' => Après un \'get\'';
  }
  get yearOfBirth() {
    return 2022 - this.age;
  }

  // ************************
  // * Méthode statique
  // ************************
  // = Méthode statique 
  static staticMethod() {
    return 'Je suis une méthode \'static\'';
  }

}

// - Extension de classe
// - ===================

// eslint-disable-next-line no-unused-vars
class callableUser extends User {

  constructor (firstName, lastName, age, weight, email) {

    super(firstName, lastName, age, weight);

    this.email = email;

  }

}

// - Utilisation de la classe 'User'
// - ===============================

// = 'candidat' est une instance de la classe 'User'
let candidat = new User('Rémy', 'Merienne', 45, 85);

// = Affichage de l'objet 'candidat'
console.log(candidat);

// = Affichage d'une propriété de l'objet 'candidat'
console.log('Age du candidat :', candidat.age);

// = Appel de la méthode getFullInfo() sur l'instance 'candidat'
console.log(candidat.makeFullName());

// = Appel de la pseudo-propriété '.fullInfo' issue de la méthode 'getFullInfo'
console.log(candidat.fullName);
// = Appel de la pseudo-propriété '.yearOfBirth' issue de la méthode 'getFullInfo'
console.log(candidat.yearOfBirth);

// = Appel de la méthode statique 'staticMethod()'
// = Les méthodes statiques pourraient être remplacées par des fonctions, mais
// = l'avantage est de pouvoir les regrouper par catégorie ou par type.
console.log(User.staticMethod());
