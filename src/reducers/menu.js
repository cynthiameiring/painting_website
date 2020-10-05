export default (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    console.log("reducer");
    return action.payload;
  }
  return state;
};
