// // write an arrow function where it will do the following: 
// a) it will take an array where the array elements will be the name of your friends. 
// b) check if the length of each element is even, pushelements with even length to a new array and return the result.
//  Print the result.

const filterFriendsWithEvenLength = (friendNames) => {
    const evenLengthNames = friendNames.filter(name => name.length % 2 === 0);
    return evenLengthNames;
};

const myFriends = ["Halim", "Rahin", "Imad", "Nasir", "Foysal"];
const evenLengthFriends = filterFriendsWithEvenLength(myFriends);

console.log(evenLengthFriends);
