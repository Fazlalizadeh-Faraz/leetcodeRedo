var generate = function (numRows) {
  let finalArray = []
  for (let row = 0; row < numRows; row++) {
    const currentArray = []
    let cell = 0
    while (cell <= row) {
      //making sure the side walls have ones
      if (cell == row || cell == 0) {
        currentArray.push(1)
      } else {
        //pascals logic
        currentArray.push(
          finalArray[row - 1][cell - 1] + finalArray[row - 1][cell],
        )
      }
      cell++
    }
    finalArray.push(currentArray)
  }
  return finalArray
}
