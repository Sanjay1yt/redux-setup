import { INCREMENT, DECREMENT } from "./action";

const initialStore = {
  currentValue: 0,
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: action.payload + state.currentValue };
    case DECREMENT:
      return { ...state, currentValue: state.currentValue - action.payload };
    default:
      return state;
  }
};
