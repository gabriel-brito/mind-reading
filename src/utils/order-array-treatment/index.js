const orderArrayTreatment = (array = [], chosenRow = undefined) => {
  let newArray = [[], [], []];
  let changeArrayPosition = !chosenRow ? null : [];
  let counter;

  for(counter = 0; counter < array.length; counter++) {
    newArray[0].push(array[counter]);
    counter++;
    newArray[1].push(array[counter]);
    counter++;
    newArray[2].push(array[counter]);
  }

  if (typeof chosenRow === 'number') {
    changeArrayPosition = 
      newArray.splice(
        chosenRow, 
        chosenRow === 0 ? 1 : chosenRow
      );

    newArray = [ newArray[0], changeArrayPosition[0], newArray[1] ];
  }

  return newArray;
}

const stepOrder = (array) => {
  let newArray = [[], [], []];
  let tempArray = []; 
  let counter;
  
  tempArray = [...array[0][0], ...array[1][0], ...array[2][0]];

  for(counter = 0; counter < 21; counter++) {
    newArray[0].push(tempArray[counter]);
    counter++;
    newArray[1].push(tempArray[counter]);
    counter++;
    newArray[2].push(tempArray[counter]);
  }

  return newArray;
} 



export { orderArrayTreatment, stepOrder };
