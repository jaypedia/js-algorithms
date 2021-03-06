// 2021-11-26

/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = x.toString().split('');

  // 뒤의 0 잘라내기
  let i = 0;
  while (i < arr.length) {
    if (arr[arr.length - 1] === '0') {
      arr.pop();
    }
    i++;
  }

  // 부호 위치 바꿔주기
  arr = arr.reverse();
  if (arr[arr.length - 1] === '-') {
    arr.pop();
    arr.unshift('-');
  }

  const result = +arr.join('');
  return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
};

console.log(reverse(-123));
console.log(reverse(12230020000000));

// My another solution
var reverse2 = function (x) {
  // 0일 경우 아래 로직을 실행하지 않고 바로 0을 리턴한다.
  if (x === 0) return 0;

  let reversed = x.toString().split('').reverse();
  let result = 0;

  if (reversed[reversed.length - 1] === '-') {
    reversed.pop();
    result = -reversed.join('');
  } else {
    result = Math.abs(reversed.join(''));
  }

  return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
};

console.log(reverse2(-123));
console.log(reverse2(12230020000000));

// 2022.1.12 다시풀기
// 소요시간 : 30분

// pseudo code
// 1. 양수일 경우 그냥 뒤집음
// 2. 음수일 경우 맨 앞에 - 부호 붙여 줌
// 3. 뒤집었을 때 앞에 0이 있는 경우 제거 필요
// 4. 뒤집은 결과가 범위가 2**31 이상일 경우 return 0

const reverse = int => {
  if (int === 0) return 0;
  let reversed = 0;
  if (int > 0) {
    reversed = parseInt(int.toString().split('').reverse().join(''), 10);
  } else {
    reversed = int.toString().split('').reverse();
    reversed.pop();
    reversed = reversed.join('') * -1;
  }
  return reversed > 2 ** 31 - 1 || reversed < -(2 ** 31) ? 0 : reversed;
};

// Another solution
const reverse = x => {
  const isMinus = x < 0 ? true : false;
  const reverseX = [...(Math.abs(x) + '')].reverse().join('');
  const answer = isMinus ? -reverseX : +reverseX;
  return answer <= 2 ** 31 - 1 && answer >= -(2 ** 31) ? answer : 0;
};
