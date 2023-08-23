// write an arrow function where it will do the following: x^2   
// a) square each array element 
// b) calculate the sum of the squared elements  
// c) return the average of the squared elements.  
//  print the result.

const calculateAverageOfSquaredElements = (numbers) => {
    const squaredNumbers = numbers.map(number => number ** 2);
    const sumOfSquaredNumbers = squaredNumbers.reduce((sum, squaredNumber) => sum + squaredNumber, 0);
    const average = sumOfSquaredNumbers / squaredNumbers.length;
    return average;
};

const inputNumbers = [2, 4, 6, 8, 10];
const averageOfSquaredElements = calculateAverageOfSquaredElements(inputNumbers);

console.log(averageOfSquaredElements);
