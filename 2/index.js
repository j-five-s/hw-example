// console.log('123');

const number = Number(prompt('введіть число'));

const dev10 = number % 10;

const condition1 = dev10 === 1 && number !== 11;
const notBetween10and20 = (number >= 10 && number <= 20) === false;

const condition2 = dev10 > 1 && dev10 < 5 && notBetween10and20;
if (condition1) {
  console.log(number + ' стіл');
} else if (condition2) {
  console.log(number + ' столи');
} else {
  console.log(number + ' столів');
}
