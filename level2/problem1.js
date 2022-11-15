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

// 참고할만한 풀이
function solution(s) {
  var arr = s.split(" ");
  arr.sort((a, b) => a - b);

  var answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}

console.log(getMaxAndMin("1 2 3 4"));
