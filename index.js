alert("Salut JS");

/* Commenter sur plusieurs lignes */
// Commenter sur une ligne //

// Kamel Case
let maSuperVariable = "Hello";

// ** Les Variables **

var unTexte = "Voici un texte";

//const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis une chaine de caractères";

let nouvelleChaine = "Chaine précédente : " + chaine + " Chaine ajoutée";

// Concaténation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Chaine ajoutée`;

console.log(nouvelleChaine);
console.log(autreConcatenation);

// ** Types de données **

let string = "Je suis une chaine de caractères";
let number = 24;
let boolean = true;



// Tableau : il y' a des crochets []
let array = ["Je", "suis", 47, true];

// Objet : il y' a des accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

// ** Les opérateurs **    // shift alt bouton bas (dupliquer)
console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);
// puissance
console.log(4 ** 5);

//** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;

console.log(total);

// ** Structure de controle **
let x = 2;
let y = 2;

//** if sert à démarrer une comparaison
if (x > y) {
  alert("YES x plus gros que y");
} else if (y > x) {
  alert("Y plus grand !");
} else {
  alert("Ils sont égaux !");
}

// On teste si la variable est "true"
if (x) {
  // console.log("x existe !");
}

if ((x = y)) {
  console.log("ils sont égaux");
}

//=== test l'égalité en type et en valeur
if (x === y) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux");
}

let a = 2;
let b = "2";
// == teste l'égalité de la valeur sans prendre en compte le type
if (x == y) {
  // console.log("ils sont égaux");
} else {
  console.log("pas égaux");
}

// || ou
// && et

// Soit l'un soit l'autre
if (x < y || x > 1) {
  console.log("UI");
}

// && il faut que toutes les conditions soit réunies
if (x < y && x > 1) {
  console.log("UI");
}

//** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
  console.log("Je fais un truc !");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

// Il faut impérativement appeler la fonction pour qu'elle soit exécutée
// appel de la fonction : faireQuelqueChose();

// fonction fléchée
const addition = (a, b) => {
//   console.log(a + b);
};

addition(4, 3);
addition(432, 84474393943);


//** La portéé des variables **

// déclarer let en dehors de la function
let num = 4;  
    function add2(){
    console.log(num+ 2);
    }

console.log(num);

console.log(num);