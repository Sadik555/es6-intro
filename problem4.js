// write  an arrow function where it will do the following: 
// a) it will take two array inputs 
// b) combine the two arrays and assign them in a new array  
// c) Find the  maximum number from the new array and return the result.    
//  print the result.

const findMaxFromCombinedArrays = (array1, array2) => {
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
};

const inputArray1 = [5, 8, 12];
const inputArray2 = [15, 6, 10, 18];
const maxNumber = findMaxFromCombinedArrays(inputArray1, inputArray2);

console.log(maxNumber);
