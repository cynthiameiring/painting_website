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
  console.log("breakpoint is: ", breakpoint);
  return {
    type: "BREAKPOINT",
    breakpoint: breakpoint,
  };
};

// $zss--breakpoints: (
//     xs: 0,
//     sm: 550px,
//     md: 760px,
//     lg: 990px,
//     xl: 1240px,
//     xxl: 1590px,
//   );
