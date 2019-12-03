const data = require('./data');

// f = m/3 - 2

function fuel (mass) {
  return Math.floor(mass / 3) - 2;
}

function getSum (masses) {
  return masses.reduce((sum, mass) => {
    return sum + fuel(mass);
  }, 0)
}

console.log(getSum(data));