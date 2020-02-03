/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    const texte1 = texte.substring(0,1);
    const texte2 = texte.substring(2)
    return texte1+" "+texte2
}
let concatString = (texte1, texte2) => {
    return texte1+texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4]
}
let afficher9Car =  (texte) => {
    return texte.slice(0,9)
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if(String(texte))
        return true
}

let AfficherExtensionString =  (texte) => {
    const table = texte.split('.')
    return table[1];
    
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length-1
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    const arr = [];
    array.forEach(tab =>{arr.push(Math.abs(tab))});
    return arr;
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*Math.pow(rayon,2));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt((ab*ab)+(ac*ac));
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/(taille*taille)).toFixed(2));
}
