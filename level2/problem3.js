const makeMinimum = (A, B) => {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b).reverse();

  A.forEach((number, index) => {
    answer += A[index] * B[index];
  });

  return answer;
};

//참고할만한 풀이
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

console.log(makeMinimum([1, 4, 2], [5, 4, 4]));
console.log(makeMinimum([1, 2], [3, 4]));
