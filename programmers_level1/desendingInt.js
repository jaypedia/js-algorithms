// 2021-10-08
// 정수 내림차순으로 배치하기

// My Solution
function solution(n) {
  return +(n + '')
    .split('')
    .map(v => +v)
    .sort((a, b) => b - a)
    .join('');
}

// Other's solution
// Use reverse()
function solution(n) {
  const newN = n + '';
  const newArr = newN.split('').sort().reverse().join('');
  return +newArr;
}
<<<<<<< HEAD
=======

// Other's solution
// No need to use map()
function solution(n) {
  return +(n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
>>>>>>> e7a4714 (➕ Other's solution)
