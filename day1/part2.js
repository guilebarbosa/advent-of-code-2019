const data = require('./data');

// f = m/3 - 2

function getTotalFuel(initialMass) {
  let total = 0;

  function fuel (mass) {
    const amount = Math.floor(mass / 3) - 2;
    if (amount > 0) {
      total = total + amount;
      fuel(amount)
    } else {
      return amount
    }
  }

  fuel(initialMass);

  return total;
}

function getSum (masses) {
  return masses.reduce((sum, mass) => {
    return sum + getTotalFuel(mass);
  }, 0)
}

console.log(getSum(data));
