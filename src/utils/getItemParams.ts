/** Returns the height, width and length from the string */
function getItemParams(params: string) {
  const regexp = /(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?)/;

  const data = params.match(regexp);

  if (!data) return undefined;

  return {
    data: data[0],
    height: +data[1],
    width: +data[2],
    length: +data[3],
  };
}

export default getItemParams;
