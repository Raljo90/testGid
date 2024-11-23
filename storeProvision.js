function storeProvision(stock, ordered){
let productQtys = {}

for (let i = 0; i < stock.length; i += 2){
    let product = stock[i];
    let qty = Number(stock[i + 1]);

    productQtys[product] = qty;
}
for (let i = 0; i < ordered.length; i += 2){
    let product = ordered[i];
    let qty = Number(ordered[i + 1]);
    if (product in productQtys){
        productQtys[product] += qty;
    } else {
        productQtys[product] = qty;
    }

}
let entries = Object.entries(productQtys);
 
for (const [product, qty] of entries) {
    console.log(`${product} -> ${qty}`);
    
}

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'])