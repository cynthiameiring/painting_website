export const toggleMenu = (boolean) => {
  console.log("action");
  return {
    type: "TOGGLE_MENU",
    payload: boolean,
  };
};
