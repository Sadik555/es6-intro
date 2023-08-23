
// write an arrow function that will take 3 parametes,will multiply the parameter and will return the result

const multiplyThreeNumbers = (a, b, c) => a * b * c;

const result = multiplyThreeNumbers(2, 3, 4); // Result will be 24
console.log(result);

// write the following sentence in three lines and print the result; I am a web developer. I love to code. I love to eat biryani.

const sentence1 = "I am a web developer.";
const sentence2 = "I love to code.";
const sentence3 = "I love to eat biryani.";

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);


// write an arrow function that will take 2 parameters;One parameter will come from you and the other parameter will be a defalt parameter. Add these two parameters and return the result.

const addParameters = (paramFromMe, defaultParam = 10) => paramFromMe + defaultParam;

const result1 = addParameters(5); // Result will be 5 + 10 = 15
const result2 = addParameters(8, 2); // Result will be 8 + 2 = 10

console.log(result1);
console.log(result2);
