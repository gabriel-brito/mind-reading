export default function arrayTreament(array = []) {
  let newArray = [[], [], []];
  let counter = 0;

  for(counter; counter < array.length; counter++) {
    newArray[0].push(array[counter]);
    counter++;
    newArray[1].push(array[counter]);
    counter++;
    newArray[2].push(array[counter]);
  }

  return newArray;
}