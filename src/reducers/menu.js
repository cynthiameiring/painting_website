export default (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return action.payload;
  }
  return state;
};
