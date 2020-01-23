/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let table = document.createElement('table');

    document.getElementById('target').appendChild(table);

    for(let i =1; i<=10;i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j =1; j<=10;j++){
            let td = document.createElement('td');
            td.textContent = `${j}*${i} = ${i*j}`;
            tr.appendChild(td);
        }
    }

})();
