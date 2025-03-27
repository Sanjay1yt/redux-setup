import { INCREMENT, DECREMENT, UPDATE_USER_DETAILS, UPDATE_TITLE_LIST } from "./action";

const initialStore = {
  currentValue: 0,
  userDetails: [],
  titles: []
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: action.payload + state.currentValue };
    case DECREMENT:
      return { ...state, currentValue: state.currentValue - action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case UPDATE_TITLE_LIST:
      return { ...state, titles: action.payload }
    default:
      return state;
  }
};
