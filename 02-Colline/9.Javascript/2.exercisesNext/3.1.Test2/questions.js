let CreationTableauLangages =  () => {
    return langages = ["Html","CSS","Java","PHP"];
}

let CreationTableauNombres =  () => {
    return nombre = [0,1,2,3,4,5];
}

let RemplacementElement =  (langages) => {
    const tableau = CreationTableauLangages();
    tableau.splice(2,1,'Javascript');
    return tableau;
}

let AjoutElementLangages =  (langages) => {
    const tableau = RemplacementElement();
    tableau.push('Ruby','Python')
    return tableau;
}

let AjoutElementNombres =  (nombres) => {
    const tableau = CreationTableauNombres();
    tableau.unshift(-2,-1)
    return tableau;
}

let SuppressionPremierElement =  (langages) => {
    const tableau = AjoutElementLangages();
    tableau.shift();
    return tableau;
}

let SuppressionDernierElement =  (langages) => {
    const tableau = SuppressionPremierElement();
    tableau.pop();
    return tableau;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
     const chaine = "Facebook,Twitter,Google +,Viadeo,LinkedIn";
     tableau = chaine.split(',');
     return tableau;
}

let ConversionTableauChaine =  (langages) => {
    const tableau = SuppressionDernierElement();
    const chaine = tableau.toString();
    return chaine;
}

let TriTableau =  (reseaux_sociaux) => {
    const tableau = ConversionChaineTableau();
    tableau.sort();
    return tableau;
}

let InversionTableau =  (reseaux_sociaux) =>{
    const tableau = SuppressionDernierElement();
    tableau.reverse(); 
    return tableau;
}
