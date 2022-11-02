/** Returns the width, height and length from the string */
function validateItemParams(params: string) {
  const regexp = /(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?)/;

  const data = params.match(regexp);

  if (!data) return undefined;

  return {
    data: data[0],
    width: +data[1],
    height: +data[2],
    length: +data[3],
  };
}

export default validateItemParams;
