/* eslint-disable no-plusplus */
export default function migratoryBirds(arr: number[]): number {
  // Write your code here
  arr.sort();
  const types = [1, 2, 3, 4, 5];
  const birds:number[] = [0, 0, 0, 0, 0];
  for (let i = 0; i < types.length; i++) {
    let cont = 0;
    for (let j = 0; j < arr.length; j++) {
      if (types[i] === arr[j]) {
        cont++;
      }
      birds[i] = cont;
    }
  }
  let max = 0;
  let cont = 0;
  birds.forEach((element, i) => {
    if (element > max) {
      max = element;
      cont = i;
    } else if (element === max) {
      if (cont < i) {
        max = element;
      }
    }
  });
  const maxtype = cont + 1;
  return maxtype;
}
