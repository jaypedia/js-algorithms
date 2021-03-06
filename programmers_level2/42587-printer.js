// Feb 19 ~ 20, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42587

// My solution (2/20 6:05 PM)
function solution(priorities, location) {
  const docArr = [...Array(priorities.length)].map((_, i) => i + 1);
  const printed = [];

  while (priorities.length !== 0) {
    const curPrio = priorities.shift();
    const curDoc = docArr.shift();

    if (curPrio < Math.max(...priorities)) {
      priorities.push(curPrio);
      docArr.push(curDoc);
    } else {
      printed.push(curDoc);
    }
  }

  return printed.indexOf(location + 1) + 1;
}

// 다시 풀기 (5/4)
function solution(priorities, location) {
  const docs = priorities.reduce((arr, p, i) => {
    arr.push({ name: i, priority: p });
    return arr;
  }, []);

  const printArr = [];
  let order = 1;

  while (docs.length) {
    const cur = docs.shift();
    const curPriority = priorities.shift();

    if (curPriority < Math.max(...priorities)) {
      docs.push(cur);
      priorities.push(curPriority);
    } else {
      printArr.push({ ...cur, order: order++ });
    }
  }

  return printArr.find(v => v.name === location).order;
}

// Other's solution
function solution(priorities, location) {
  let answer = 0;
  while (true) {
    if (location === -1) location = priorities.length - 1;

    if (priorities[0] === Math.max(...priorities)) {
      answer++;

      if (location-- === 0) return answer;
      priorities.shift();
      continue;
    }

    location--;
    priorities.push(priorities.shift());
  }
}

// Other's solution 2
function solution(priorities, location) {
  const list = priorities.map((priority, i) => ({
    priority,
    isMyDoc: i === location,
  }));

  let order = 0;
  while (true) {
    const cur = list.shift();

    if (list.some(t => t.priority > cur.priority)) {
      list.push(cur);
    } else {
      order++;
      if (cur.isMyDoc) return order;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log(solution([2, 4, 8, 2, 9, 3, 3], 2)); // 2
console.log(solution([2, 4, 8, 2, 9, 3, 3], 4)); // 1
