import {
    getAllStadions,
    searchStadions,
    postStadion,
    deleteStadion,
    editStadion,
    getStadionById,
} from "./api.js";
import {
    renderItemsDOM,
    calculateTotal,
    clearInputs,
    getInputValues,
    EDIT_BUTTON_PREFIX,
    fillUpdateValues,
    DELETE_BUTTON_PREFIX,
} from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");
const createSubmit = document.getElementById("submit_button");
const updateSubmit = document.getElementById("submit_update");
const formFields = document.getElementsByClassName("create-input");

let stadions = [];

const onEdit = async(element) => {
    const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");
    let { name, num_of_spectators, lightning_power } = await getStadionById(id);
    fillUpdateValues({
        name,
        numOfSpectators: num_of_spectators,
        lightningPower: lightning_power,
    });

    updateSubmit.addEventListener("click", (event) => {
        if (includesEmptyFields()) {
            return;
        }
        event.preventDefault();
        const newStadion = getInputValues();
        clearInputs();
        editStadion(id, newStadion).then(refetchAllStadions);
    })
};

const onDelete = (element) => {
    const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
    deleteStadion(id).then(refetchAllStadions);
}

const refetchAllStadions = async() => {
    const allStadions = await getAllStadions();
    stadions = allStadions;
    renderItemsDOM(stadions, onEdit, onDelete);
};

const includesEmptyFields = () => {
    let countOfEmptyFields = Array.from(formFields).filter(
        (x) => x.value == ""
    ).length;
    return countOfEmptyFields != 0;
};

createSubmit.addEventListener("click", (event) => {
    if (includesEmptyFields()) {
        return;
    }
    event.preventDefault();
    const newStadion = getInputValues();
    clearInputs();
    postStadion(newStadion).then(refetchAllStadions);
});

searchButton.addEventListener("click", async(event) => {
    event.preventDefault();
    const foundStadions = await searchStadions(searchInput.value);
    renderItemsDOM(foundStadions, onEdit, onDelete);
});

sortCheckbox.addEventListener("change", () => {
    let sortedStadions = Array.from(stadions);
    if (sortCheckbox.checked) {
        sortedStadions.sort(
            (first, second) => first.lightning_power - second.lightning_power
        );
    }
    renderItemsDOM(sortedStadions, onEdit, onDelete);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(stadions, (stadion) => stadion.num_of_spectators);
    countTotal.innerHTML = totalPrice;
});

refetchAllStadions();

export default stadions;
export { cardDeck };