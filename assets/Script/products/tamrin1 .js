define([],function(){
const listProduct = document.getElementById("list-product");
const elementData = [
  { el: "LI", name: "Li" },
  { el: "H2", name: "title" },
  { el: "IMG", name: "image" },
  { el: "P", name: "description" },
  { el: "SPAN", name: "category" },
  { el: "SPAN", name: "rate" },
  { el: "B", name: "price" },
];

function renderElement() {
  var element = {};
  elementData.forEach(function (el) {
    element[el.name + "Element"] = document.createElement(el.el);
  });
  return element;
}

return function render(product) {
  listProduct.innerHTML = "";
  function totalPrice() {
    var sum = product.reduce(function (accumulator, product) {
      return accumulator + product.price;
    }, 0);
    return Math.round(sum);
  }
  product.forEach(function (product, i, a) {
    var elements = renderElement();
    elements.titleElement.textContent = product.title;
    elements.imageElement.setAttribute("src", product.image);
    elements.descriptionElement.textContent = product.description;
    elements.categoryElement.textContent = product.category;
    elements.rateElement.textContent = "rate:" + product.rating.rate;
    elements.priceElement.textContent = "PRICE: " + product.price + "$";

    elements.LiElement.append(
      elements.titleElement,
      elements.imageElement,
      elements.descriptionElement,
      elements.categoryElement,
      elements.rateElement,
      elements.priceElement
    );

    listProduct.appendChild(elements.LiElement);
  });
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = "Total Price :" + totalPrice() + "$";
}



})