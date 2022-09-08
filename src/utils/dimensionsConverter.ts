/** Convert millimeters to centimeters */
function mmIntoCm(value: number) {
  return value / 10;
}

/** Convert millimeters to meters */
function mmIntoM(value: number) {
  return value / 1_000;
}

/** Convert millimeters to inches rounded to ten thousandths */
function mmIntoIn(value: number) {
  return +(value / 25.4).toFixed(4);
}

/** Convert centimeters to millimeters */
function cmIntoMm(value: number) {
  return value * 10;
}

/** Convert meters to millimeters */
function mIntoMm(value: number) {
  return value * 1000;
}

/** Convert inches to millimeters rounded to ten thousandths */
function inIntoMm(value: number) {
  return +(value * 25.4).toFixed(4);
}

export { mmIntoCm, mmIntoM, mmIntoIn, cmIntoMm, mIntoMm, inIntoMm };
