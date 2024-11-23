// function furnitureTracker(arr){
// let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/;
// let furniture = [];
// let totalPrice = 0;
// let command = arr.shift();
// while (command !== "Purchase"){
// let match = pattern.exec(command);
// if (match){
//     let {name, price, qty} = match.groups;
//     price = Number(price);
//     qty = Number(qty);

//     let furniturePrice = price * qty;
//     totalPrice += furniturePrice;
//     furniture.push(name);
// }

//     command = arr.shift();
// }
// console.log('Bought furniture:');
// if (furniture.length > 0){
//     console.log(furniture.join('\n'));

// }
// console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

// }
// furnitureTracker(['>>Sofa<<312.23!3',

//     '>>TV<<300!5',

//     '>Invalid<<!5',

//     'Purchase'])

function race(arr) {
  let names = arr.shift().split(", ");
  let runnerDistances = {};
  for (const name of names) {
    runnerDistances[name] = 0;
  }
  let command = arr.shift();
  let letterPatern = /[A-Za-z]/g;

  while (command !== "end of race");
  let matches = command.match(letterPatern);
  let name = matches.join('');
  console.log(name);
  
  command = arr.shift();
}
race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
