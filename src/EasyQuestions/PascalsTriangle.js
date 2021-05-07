var generate = function(numRows) {
    let finalArray = [];
    for(let row = 0; row < numRows; row++) {
        const currentArray = [];
        let cell = 0;
        while( cell <= row) {
            if(cell == row || cell == 0) {
                currentArray.push(1);
            }
            else {
                currentArray.push(finalArray[row-1][cell-1] + finalArray[row-1][cell]);
            }
            cell++;
        }
        finalArray.push(currentArray);
    }
    return finalArray;
};
