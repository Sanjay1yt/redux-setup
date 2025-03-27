import axios from "axios";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const UPDATE_USER_DETAILS = "updateUserDetails";
export const UPDATE_TITLE_LIST = "updateTitleList";

export const incrementValue = () => ({
  type: INCREMENT,
  payload: 2,
});
export const decrementValue = () => ({
  type: DECREMENT,
  payload: 1,
});

export const updateUserDetails = (data) => ({
  type: UPDATE_USER_DETAILS,
  payload: data,
});

export const updateTitleList = (data) => ({
  type: UPDATE_TITLE_LIST,
  payload: data
})

export const getUserDetails = () => (dispatch) => {
  axios
    .get("https://api.restful-api.dev/objects")
    .then((response) => dispatch(updateUserDetails(response.data)))
    .catch((error) => console.log(error));
};

export const getTitleList = () => (dispatch) => {
  console.log('coming')
  axios.get('https://jsonplaceholder.typicode.com/todos/').then((response) => dispatch(updateTitleList(response.data))).catch((error) => console.log(error))
}
