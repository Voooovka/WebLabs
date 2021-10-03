import { renderItemsDOM, calculateTotal } from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

let stadiums = [
  {
    id: 1,
    stadiumName: "Arena Lviv",
    numOfSpectators: parseInt("33"),
    lightingPower: parseInt("12"),
  },
  {
    id: 2,
    stadiumName: "Arena Kyiv",
    numOfSpectators: parseInt("21"),
    lightingPower: parseInt("4"),
  },
  {
    id: 3,
    stadiumName: "Arena Ivano-Frankivsk",
    numOfSpectators: parseInt("9"),
    lightingPower: parseInt("55"),
  },
  {
    id: 4,
    stadiumName: "Arena Zakarpattya",
    numOfSpectators: parseInt("45"),
    lightingPower: parseInt("56"),
  },
  {
    id: 5,
    stadiumName: "Arena Odesa",
    numOfSpectators: parseInt("11"),
    lightingPower: parseInt("88"),
  },
];
let sortedStadiums = [];

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let foundStadiums = stadiums.filter(
    (stadiums) => stadiums.stadiumName.search(searchInput.value) !== -1
  );
  renderItemsDOM(foundStadiums);
});

sortCheckbox.addEventListener("change", () => {
  let sortedStadiums = Array.from(stadiums);
  if (sortCheckbox.checked) {
    sortedStadiums.sort(
      (first, second) => first.numOfSpectators - second.numOfSpectators
    );
  }
  renderItemsDOM(sortedStadiums);
});

countBtn.addEventListener("click", () => {
  countResults.classList.remove("hidden");
  const totalPrice = calculateTotal(stadiums, (stadium) => stadium.lightingPower);
  countTotal.innerHTML = totalPrice;
});

renderItemsDOM(stadiums);

export default stadiums;
export { cardDeck };
