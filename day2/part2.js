const { init } = require('./shared');

function run(program) {
  function execute (index) {
    const [operator, in1, in2, out] = program.slice(index, index + 4);

    switch(operator) {
      case 99: return;
      case 1: program[out] = program[in1] + program[in2]; break;
      case 2: program[out] = program[in1] * program[in2]; break;
    }

    execute(index + 4);
  }

  execute(0);
  return program[0];
}

function findNounAndVerb() {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const program = init(noun, verb);
      const output = run(program);
      if (output === 19690720)
        return 100 * noun + verb;
    }
  }
}

console.log(findNounAndVerb());