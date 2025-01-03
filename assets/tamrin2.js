var listProduct=document.getElementById("list-product")
function render(product){
    listProduct.innerHTML=""

    var elements=""
    product.forEach(function(product){
        elements+=
        "<li>"+
            "<h2>" + product.title + "</h2>"+
            '<img src=' + product.image + ' />'+
            "<p>"+ product.description + "</p>"+
            "<span>" + product.category + "</span>"+
            "<span> rate: "+ product.rating.rate + "</span>"+
            "<b> price:" + product.price + " $ </b>"+
        +"</li>"
    })
    listProduct.innerHTML=elements

//total
    var total=0;
    for(var i=0 ; i<product.length; i++){
        total += Number(product[i].price)
        // console.log(total)
    }
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent="Total Price :" + Math.round(total) + "$"
}
render(productsData)


// var sum=productsData.reduce(function(accumulator, product){
//     return accumulator + product.price },0)
//     console.log(sum)
   
