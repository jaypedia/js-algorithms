// May 1, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42842

// My solution - 20 min
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= total; height++) {
    const width = total / height;
    if (!Number.isInteger(width)) continue;

    const yellowCount = total - (width * 2 + (height - 2) * 2);
    if (yellowCount === yellow) {
      return [width, height];
    }
  }
}

// Another way
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = Math.floor(total / 2); i > 0; i--) {
    if (total % i !== 0) continue;

    const width = i;
    const height = total / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
