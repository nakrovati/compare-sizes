/** Returns the width, height and length from the string */
interface ItemParams {
  data: string;
  height: number;
  length: number;
  width: number;
}

function parseItemParams(params: string): ItemParams | undefined {
  const regexp = /(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?), ?(\d+(?:\.\d+)?)/;

  const data = params.match(regexp);

  if (!data) return undefined;

  return {
    data: data[0],
    height: +data[2],
    length: +data[3],
    width: +data[1],
  };
}

export default parseItemParams;
