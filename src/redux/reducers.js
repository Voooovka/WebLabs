import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((helicopter) => helicopter.helicopterId === action.payload.helicopterId)) {
        return state.map((helicopter) => {
          if (helicopter.helicopterId === action.payload.helicopterId) {
            let priceForOne = helicopter.price / helicopter.quantity;
            helicopter.quantity++;
            helicopter.price += priceForOne;
            return helicopter;
          }
          return helicopter;
        });
      }
      return [...state, action.payload];
    case "INCREMENT_QTY":
      return state.map((helicopter) => {
        if (helicopter.helicopterId === action.payload) {
          let priceForOne = helicopter.price / helicopter.quantity;
          helicopter.quantity++;
          helicopter.price += priceForOne;
          return helicopter;
        }
        return helicopter;
      });
    case "DECREMENT_QTY":
      return state.map((helicopter) => {
        if (helicopter.helicopterId === action.payload && helicopter.quantity >= 2) {
          let priceForOne = helicopter.price / helicopter.quantity;
          helicopter.quantity--;
          helicopter.price -= priceForOne;
          return helicopter;
        }
        return helicopter;
      });
    case "REMOVE_FROM_CART":
      return state.filter(helicopter => helicopter.helicopterId !== action.payload);
    default:
      return state;
  }
};

const allReducers = combineReducers({
  cart: cartReducer,
});

export default allReducers;
