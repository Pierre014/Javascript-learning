let selectElementsStartingWithA = (array) => {
    const table = [];
    array.forEach(arr=>{if(/^[a]/.test(arr)) table.push(arr)})
    return table;
}

let selectElementsStartingWithVowel = (array) => {
    const table = [];
    array.forEach(arr =>{if(/^[aeiouy]/.test(arr)){ table.push(arr)}})
    return table;
}

let removeNullElements = (array) => {
    return array.filter(item => item !=null);
}

let removeNullAndFalseElements = (array) => {
    function filtre(filtrant){if(filtrant === null || filtrant === false) return false;else return true}
    return array.filter(filtre);
    
}

let reverseWordsInArray = (array) => {
    let table = []; array.forEach(arr =>{table.push(arr.split("").reverse().join(''))});
    return table;
}

let everyPossiblePair = (array) => {
    
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element); return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a,b) =>{return (a.charAt(a.length-1)).localeCompare((b.charAt(b.length-1)))});
}

let getFirstHalf = (string) => {
    return string.slice(0,3);
}

let makeNegative = (number) => {
   if (number<0) return number; else return-number;
}

let numberOfPalindromes = (array) => {
   let count = 0; array.forEach(palind =>{if(palind[0]==palind[palind.length-1]) count++;}); return count;
}

let shortestWord = (array) => {
    array.sort((a,b)=>{return a.length - b.length}); return array[0];
    
}

let longestWord = (array) => {
    array.sort((a,b)=>{return a.length - b.length}); return array[array.length-1];
}

let sumNumbers = (array) => {
    return array.reduce((accu, currentV)=> accu+currentV);
}

let repeatElements = (array) => {
    array.forEach(arr=>{array.push(arr)});return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return (array.reduce((accu, currentV)=> accu+currentV))/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    const arr = [];
    let i = 0;
    while(array[i]<=5){arr.push(array[i]);i++};
    return arr;
}

let convertArrayToObject = (array) => {
    let obj={};
    for(let i=0;i<array.length;i+=2){
        obj[array[i]] = array[i+1];
    }
    return obj;
}

let getAllLetters = (array) => {
    let letters="";
    const tableau = [];
    tableauFinal=[];
    array.forEach(arr=>{letters+=arr.split("")+","});
    for(let i = 0; i<letters.length; i++){if(letters[i] != ","){tableau.push(letters[i]); tableau.sort()}}
    const table = new Set(tableau)
    table.forEach(arr=>{tableauFinal.push(arr)})
    return tableauFinal       
}

let swapKeysAndValues = (object) => {
  const tabKey = Object.keys(object);
  const tabValue = Object.values(object);
  const tableau = [];
  for(let i =0;i<tabKey.length;i++){
      tableau.push([tabValue[i],tabKey[i]])
  }
  return Object.fromEntries(tableau)
}

let sumKeysAndValues = (object) => {
   const sommeKeys = Object.keys(object);
   const sommeValue = Object.values(object);
   return (sommeKeys.reduce((a,b)=>parseInt(a)+parseInt(b))) + (sommeValue.reduce((a,b)=>a+b));
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g,"");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return "0"+date.getDate()+"/0"+date.getDay()+"/"+date.getFullYear();
}

let getDomainName = (string) => {
    const table = string.split('@'); const table2=[];
    table.forEach(arr=>{table2.push(arr.split(".com"))})
    return table2[1][0];
}

let titleize = (string) => {
    return string.replace(/(?<=the\s|\.\s)\w|^[t]/g,(word) => {return word.toUpperCase()});
}

let checkForSpecialCharacters = (string) => {
    return /\W/g.test(string)
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    for(let i = number-1; i>=1; i--){number*=i} return number
}

let findAnagrams = (string) => {
    const tableau = [];
    tableau.push(string.split("").sort().join(""));
    tableau.push(string.split("").reverse().join(""))
  
}

let convertToCelsius = (number) => {
    return Math.ceil((number-32)*(5/9));
}

let letterPosition = (array) => {
    const cryptage=[];
    array.forEach(arr=>{cryptage.push(arr.toUpperCase().charCodeAt()-64)})
    return cryptage;
}
