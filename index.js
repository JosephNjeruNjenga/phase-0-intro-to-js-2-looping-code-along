// Code your solutions in this file
const newArray = [];
function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    newArray.push(message);
  }
  return newArray;
}
function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i--);
  }
  return i;
}