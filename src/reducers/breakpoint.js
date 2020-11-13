export default (state = false, action) => {
  if (action.type === "BREAKPOINT") {
    return action.breakpoint;
  }
  return state;
};
