import { cardDeck } from "./main.js";

const EDIT_BUTTON_PREFIX = "edit-";
const DELETE_BUTTON_PREFIX = "delete-";

const nameInput = document.getElementById("name_input");
const numOfSpectatorsInput = document.getElementById("num_of_spectators_input");
const lightningPowerInput = document.getElementById("lightning_power_input");

const cardTemplate = ({
    id,
    stadionName,
    numOfSpectators,
    lightningPower,
}) => `
<div id="${id}" class="card">
<img class="card-img-top" src="../img/stadion.jpeg" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">Stadion "${stadionName}"</h5>
<p class="card-text">
Spectators: ${lightningPower}<br>
Lightning power: ${numOfSpectators}
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<i id="${EDIT_BUTTON_PREFIX}${id}" class="fas fa-edit fa-lg btnedit"></i>
<i id="${DELETE_BUTTON_PREFIX}${id}" class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, name, num_of_spectators, lightning_power },
    onEdit,
    onDelete,
) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({
            id,
            stadionName: name,
            numOfSpectators: num_of_spectators,
            lightningPower: lightning_power,
        })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEdit);

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click", onDelete);
};

const renderItemsDOM = (dataArray, onEdit, onDelete) => {
    cardDeck.innerHTML = "";
    for (const item of dataArray) {
        addItemToPage(item, onEdit, onDelete);
    }
};

const calculateTotal = (dataArray, key) => {
    const total = dataArray.reduce((acc, item) => acc + key(item), 0);
    return total;
};

const clearInputs = () => {
    nameInput.value = "";
    numOfSpectatorsInput.value = "";
    lightningPowerInput.value = "";
};

const fillUpdateValues = ({ name, numOfSpectators, lightningPower }) => {
    nameInput.value = name;
    numOfSpectatorsInput.value = numOfSpectators;
    lightningPowerInput.value = lightningPower;
};

const getInputValues = () => {
    return {
        name: nameInput.value,
        num_of_spectators: numOfSpectatorsInput.value,
        lightning_power: lightningPowerInput.value,
    };
};

export {
    addItemToPage,
    renderItemsDOM,
    calculateTotal,
    clearInputs,
    getInputValues,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    fillUpdateValues,
};