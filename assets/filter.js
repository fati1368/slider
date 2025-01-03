var filterButton = document.getElementById("filter-button");

function renderFilterButton() {
  var category = new Set(
    productsData.map((productsData) => productsData.category)
  );
  category.add("All");
  //   console.log(category);
  category.forEach(function (category) {
    var button = document.createElement("BUTTON");
    button.textContent = category;
    filterButton.appendChild(button);
  });
}
renderFilterButton();

function filter(category) {
  // console.log(category);
  if (category === "All") {
    return render(productsData);
  }
  var filterdata = productsData.filter((product) => {
    return product.category === category;
  });
  render(filterdata);
  //console.log(filterdata);
}

filterButton.addEventListener("click", function (e) {
  e.stopPropagation();
  var check = e.target.textContent;
  filter(check);
});
