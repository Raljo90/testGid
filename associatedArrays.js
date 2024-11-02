function solve(arr){
    let phonebook = {
        'Tim': '0895824848',
        'Jore': '0865795125'
    };

    let entriesSorted = Object.entries(phonebook)
    .sort((kvp1, kvp2) => {
        let keyA = kvp1[0];
        let keyB = kvp2[0];

        return keyA.localeCompare(keyB);
    })
 for (const [key, value] of entriesSorted) {
    console.log(`${key} -> ${value}`);
    
 }
}
solve(['Monday Peter',

    'Wednesday Bill',
    
    'Monday Tim',
    
    'Friday Tim'])

