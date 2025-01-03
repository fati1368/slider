sliderElement = document.getElementById("slider");
containerElement = document.createElement("DIV");
function slider(i) {
  sliderElement.style.background = "url(" + productsData[i].image + ")";
  containerElement.innerHTML =
    "<div class='slider'>" +
    "<h2>" +
    productsData[i].title +
    "</h2>" +
    " <p>" +
    productsData[i].description +
    "</p>" +
    "<span> rate: " +
    productsData[i].rating.rate +
    "</span>" +
    "<b> price:" +
    productsData[i].price +
    " $ </b>" +
    "</div>";
  sliderElement.append(containerElement);
}
var ItemIndex = 0;

NextBtn = document.createElement("BUTTON");
NextBtn.textContent = "NEXT";
PreviuseBtn = document.createElement("BUTTON");
PreviuseBtn.textContent = "PREVIOUS";
RandomBtn = document.createElement("BUTTON");
RandomBtn.textContent = "RANDOM";
NextBtn.addEventListener("click", function () {
  ItemIndex++;
  if (ItemIndex > productsData.length - 1) {
    ItemIndex = 0;
  }
  slider(ItemIndex);
});
PreviuseBtn.addEventListener("click", () => {
  ItemIndex--;
  if (ItemIndex < 0) {
    ItemIndex = productsData.length - 1;
  }
  slider(ItemIndex);
});
RandomBtn.addEventListener("click", () => {
  if (productsData <= 1) {
    return;
  }
  do {
    var randomIndex = Math.floor(Math.random() * productsData.length);
  } while (randomIndex === ItemIndex);
  ItemIndex=randomIndex
  slider(ItemIndex)
});
sliderElement.append(NextBtn, PreviuseBtn, RandomBtn);
slider(ItemIndex);
