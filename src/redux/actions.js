export const addToCart = (helicopter) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      helicopterId: helicopter.id,
      helicopterName: helicopter.name,
      price: helicopter.value,
      quantity: 1,
    },
  };
};

export const increment = (helicopterId) => {
  return { type: "INCREMENT_QTY", payload: helicopterId };
};

export const decrement = (helicopterId) => {
  return { type: "DECREMENT_QTY", payload: helicopterId };
};

export const remove = (helicopterId) => {
  return { type: "REMOVE_FROM_CART", payload: helicopterId };
};
