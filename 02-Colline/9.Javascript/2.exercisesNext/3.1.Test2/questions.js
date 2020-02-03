let CreationTableauLangages =  () => {
    return langages = ["Html","CSS","Java","PHP"];
}

let CreationTableauNombres =  () => {
    return nombre = [0,1,2,3,4,5];
}

let RemplacementElement =  (langages) => {
    langages.splice(2,1,'Javascript');
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby','Python')
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2,-1)
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
     tableau = reseaux_sociaux_chaine.split(',');
     return tableau;
}

let ConversionTableauChaine =  (langages) => {
    return langages.toString();
    //langages.join(",")
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
    
}

let InversionTableau =  (reseaux_sociaux) =>{
    return reseaux_sociaux.reverse(); 

}
