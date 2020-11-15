export const toggleMenu = (boolean) => {
  return {
    type: "TOGGLE_MENU",
    payload: boolean,
  };
};

export const headerImageLoaded = (boolean) => {
  return {
    type: "HEADER_IMAGE_LOADED",
    payload: boolean,
  };
};

// export const navigateTo = (page) = {
//   return {
//     type: "ACTIVE_PAGE",

//   }
// }
