export const breakpoint = (width) => {
  let breakpoint = "";
  if (width < 550) {
    breakpoint = "xs";
  } else if (width >= 550 && width < 760) {
    breakpoint = "sm";
  } else if (width >= 760 && width < 990) {
    breakpoint = "md";
  } else if (width >= 990 && width < 1240) {
    breakpoint = "lg";
  } else if (width >= 1240) {
    breakpoint = "xl";
  }
  return {
    type: "BREAKPOINT",
    breakpoint: breakpoint,
  };
};
