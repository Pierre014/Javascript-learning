/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    let newKitty = [];
    
    for(let i=0;i<keys.length;i++){
        newKitty[i] = [keys[i],values[i]];
    }
    // your code here
    const obj = Object.fromEntries(newKitty);
    document.getElementById('run').addEventListener('click',()=>{
        console.log(obj);
    })
})();
