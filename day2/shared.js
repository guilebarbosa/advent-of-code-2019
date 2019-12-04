const data = require('./data');

function init(noun, verb) {
  const program = [...data];
  program[1] = noun;
  program[2] = verb;
  return program;
}

module.exports = {
  init
}
