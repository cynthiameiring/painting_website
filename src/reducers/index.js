import { combineReducers } from "redux";
import menu from "./menu";
import headerImageLoaded from "./headerImageLoaded";
import breakpoint from "./breakpoint";

export default combineReducers({
  breakpoint: breakpoint,
  headerImageLoaded: headerImageLoaded,
  menuOpen: menu,
});
