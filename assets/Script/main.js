require(["./data/data","./products/tamrin1","./filter/filter","./slider/slider"],function(productsData,render){
    console.log("salam")
    const products=productsData
    let print=render();
    print(products)
})