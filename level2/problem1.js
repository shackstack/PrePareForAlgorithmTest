const getMaxAndMin = (numbers) => {
  let numbersArray = numbers.split(" ").map(Number);
  let max = numbersArray[0];
  let min = numbersArray[0];

  numbersArray.forEach((number) => {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  });

  return `${min} ${max}`;
};

console.log(getMaxAndMin("1 2 3 4"));
