export default (state = false, action) => {
  if (action.type === "HEADER_IMAGE_LOADED") {
    return action.payload;
  }
  return state;
};
