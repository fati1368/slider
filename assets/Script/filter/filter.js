import { productsData } from "../data/data.js";
import { render } from "../products/tamrin2.js";


const filterButton = document.getElementById("filter-button");

export function renderFilterButton() {
  let category = new Set(
    productsData.map((productsData) => productsData.category)
  );
  category.add("All");
  //   console.log(category);
  category.forEach(function (category) {
    const button = document.createElement("BUTTON");
    button.textContent = category.charAt(0).toUpperCase()+ category.slice(1);;
    filterButton.appendChild(button);
  });
}

function filter(category) {
  // console.log(category);
  if (category === "All") {
    return render(productsData);
  }
  let filterdata = productsData.filter((product) => {
    return product.category === category;
  });
  console.log(productsData)
  console.log(render)
  console.log(filterdata);
  render(filterdata);
}

export function addFilterButtonListeners(){
  filterButton.addEventListener("click", function (e) {
    e.stopPropagation();
    let check = e.target.textContent;
    filter(check);
  });
  
}
