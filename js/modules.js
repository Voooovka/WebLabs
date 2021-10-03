import { cardDeck } from "./main.js";

const cardTemplate = ({ id, stadiumName, numOfSpectators: numOfSpectators, lightingPower }) => `
<div id="item-${id}" class="card">
<img class="card-img-top" src="../img/stadion.jpeg" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">Stadium "${stadiumName}"</h5>
<p class="card-text">
Spectators: ${numOfSpectators}<br>
Lighting power: ${lightingPower} lyks
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<i class="fas fa-edit fa-lg btnedit"></i>
<i class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, stadiumName, numOfSpectators, lightingPower }) => {
  cardDeck.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, stadiumName, numOfSpectators, lightingPower })
  );
};

const renderItemsDOM = (dataArray) => {
  cardDeck.innerHTML = "";
  for (const item of dataArray) {
    addItemToPage(item);
  }
};

const calculateTotal = (dataArray, key) => {
  const total = dataArray.reduce((acc, item) => acc + key(item), 0);
  return total;
}

export { addItemToPage, renderItemsDOM, calculateTotal };
