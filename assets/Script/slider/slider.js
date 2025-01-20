sliderElement = document.getElementById("slider");
containerElement = document.createElement("DIV");
NextBtn = document.createElement("BUTTON");
NextBtn.textContent = "NEXT";
PreviuseBtn = document.createElement("BUTTON");
PreviuseBtn.textContent = "PREVIOUS";
RandomBtn = document.createElement("BUTTON");
RandomBtn.textContent = "RANDOM";

function slider(i) {
  var product = productsData[i];
  containerElement.innerHTML =
    "<div class='container-slider'>" +
    " <div class='description'>" +
    "<h2 class='large'>" +
    product.title +
    "</h2>" +
    " <p>" +
    product.description +
    "</p>" +
    "<span> rate: " +
    product.rating.rate +
    "</span>" +
    "<b> price:" +
    product.price +
    " $ </b>" +
    "</div>" +
    "<img src=" +
    product.image +
    " />" +
    "</div>";

  sliderElement.append(containerElement);
}
function index() {
  var ItemIndex = 0;
  slider(ItemIndex);
  return {
    next() {
      ItemIndex++;
      if (ItemIndex > productsData.length - 1) {
        ItemIndex = 0;
      }
      slider(ItemIndex);
    },
    previuse() {
      ItemIndex--;
      if (ItemIndex < 0) {
        ItemIndex = productsData.length - 1;
      }
      slider(ItemIndex);
    },
    random() {
      if (productsData <= 1) {
        return;
      }
      do {
        var randomIndex = Math.floor(Math.random() * productsData.length);
      } while (randomIndex === ItemIndex);
      ItemIndex = randomIndex;
      slider(ItemIndex);
    },
  };
}
var itemIndex = index();
console.log(itemIndex);
NextBtn.addEventListener("click", itemIndex.next);
PreviuseBtn.addEventListener("click", itemIndex.previuse);
RandomBtn.addEventListener("click", itemIndex.random);
sliderElement.append(NextBtn, PreviuseBtn, RandomBtn);
