
let countPart1 = 0;
let countPart2 = 0;

for (let password = 278384; password < 824795; password++) {
  let input = String(password).split('').map(Number);
  if (check(input)) {
    countPart1++;
  }

  if (check2(input)) {
    countPart2++;
  }
}

console.log(countPart1, countPart2);

function check (input) {
  let hasRepeated = false;

  for (let i = 1; i < input.length; i++) {
    const current = input[i];
    const prev = input[i - 1];
    if (current === prev) hasRepeated = true;
    // return early if there is a decrement
    if (current < prev) return false;
  }

  return hasRepeated;
}

function check2 (input) {
  const repetitions = new Map();
  // keep count of how many times a digit was repeated in sequence
  const setRepetition = digit => {
    if (!repetitions.has(digit)) {
      repetitions.set(digit, 1);
    } else {
      const count = repetitions.get(digit);
      repetitions.set(digit, count + 1);
    }
  }

  for (let i = 1; i < input.length; i++) {
    const current = input[i];
    const prev = input[i - 1];
    if (current === prev) setRepetition(current);
    // return early if there is a decrement
    if (current < prev) return false;
  }

  // if there are no repetitions, return false
  if (repetitions.size == 0) return false;

  // if any digit was repeated only once, return true
  for (count of repetitions.values()) {
    if (count === 1) return true;
  }

  return false;
}
