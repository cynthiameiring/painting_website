export default (state = false, action) => {
  console.log("check");
  if (action.type === "TOGGLE_MENU") {
    return action.payload;
  }
  return state;
};
