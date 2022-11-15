const convertToJadenCase = (s) => {
  let answer = [];
  let splitInput = s.split(" ");

  splitInput.forEach((word, index) => {
    let splitWord = word.split("");
    splitWord.forEach((item, itemIndex) => {
      if (itemIndex == 0) {
        answer.push(item.toUpperCase());
      } else {
        answer.push(item.toLowerCase());
      }
    });

    if (index != splitInput.length - 1) {
      answer.push(" ");
    }
  });

  return answer.join("");
};

//더 간결한 코드

function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

console.log(convertToJadenCase("3people unFollowed me"));
