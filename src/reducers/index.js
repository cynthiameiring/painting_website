import { combineReducers } from "redux";
import menu from "./menu";
import headerImageLoaded from "./headerImageLoaded";
import breakpoint from "./breakpoint";
import hasSubmittedNewsletterForm from "./hasSubmittedNewsletterForm";

export default combineReducers({
  breakpoint: breakpoint,
  hasSubmittedNewsletterForm: hasSubmittedNewsletterForm,
  headerImageLoaded: headerImageLoaded,
  menuOpen: menu,
});
