function printProductInfo(arr){
    let products = [];
     for (let proctInfoStr of arr){

        let [productName, productPrice] = proctInfoStr.split(' : ');
        productPrice = Number(productPrice);

        let productObj = {
            name: productName,
            price: productPrice
        };

        products.push(productObj);
     }

    products.sort((a, b) => a.name.localeCompare(b.name));

    console.log(products);
    
     
}

printProductInfo([
    'Appricot : 20.4',  
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])