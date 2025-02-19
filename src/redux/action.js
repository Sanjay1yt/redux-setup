export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const incrementValue = () => ({
  type: INCREMENT,
  payload: 2,
});
export const decrementValue = () => ({
  type: DECREMENT,
  payload: 1,
});
