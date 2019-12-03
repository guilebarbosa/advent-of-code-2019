const data = require('./data');

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

console.log(run(data))