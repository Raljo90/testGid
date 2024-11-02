function solve(arr){
let adressBook = {};
for (const element of arr) {
    let [personName, adress] = element
    .split(':');

    adressBook[personName] = adress;
}

let sortedKeys = Object.keys(adressBook)
.sort((keyA, keyB) => {
    return keyA.localeCompare(keyB)
});
for (const personName of sortedKeys) {
    console.log(`${personName} -> ${adressBook[personName]}`);
    
}



}
solve(['Tim:Doe Crossing',

    'Bill:Nelson Place',
    
    'Peter:Carlyle Ave',
    
    'Bill:Ornery Rd'])