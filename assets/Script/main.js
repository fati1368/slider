import { productsData } from "./data/data.js";
import {
  renderFilterButton,
  addFilterButtonListeners,
} from "./filter/filter.js";
import { slider, index, control } from "./slider/slider.js";
import { render } from "./products/tamrin2.js";
console.log("salam");
renderFilterButton();
addFilterButtonListeners();
slider(0);
control();
render(productsData);
