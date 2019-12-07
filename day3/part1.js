const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/data.txt`, { encoding: 'utf8' });

const wires = input
  .split('\n')
  .map(item => item.split(','))
  .map(createWire)
const intersections = getIntersections(wires);
const closest = findClosestIntersection(intersections);

console.log(closest);

function createWire(commands = []) {
  return commands
    .reduce((wire, command) => {
      const lastCoordinate = wire[wire.length - 1];
      const line = createLine(lastCoordinate, command);
      return wire.concat(line);
    }, [[0, 0]])
    .slice(1)
    .map(coordinate => coordinate.join())
}

function createLine(initialCoordinate, command) {
  const direction = command.charAt(0);
  const stepsCount = Number(command.slice(1));

  return Array(stepsCount)
    .fill()
    .reduce((line) => {
      const lastCoordinate = line[line.length - 1];
      const step = takeStep(lastCoordinate, direction);
      line.push(step);
      return line;
    }, [initialCoordinate])
    .slice(1);
}

// Take steps in increments of 1
function takeStep([x, y], direction) {
  switch (direction) {
    case 'U':
      return [x, y + 1];
    case 'D':
      return [x, y - 1];
    case 'R':
        return [x + 1, y];
    case 'L':
        return [x - 1, y];
  }
}

function getIntersections([wire1, wire2]) {
  return wire2.reduce((list, coordinate) => {
    if (wire1.includes(coordinate)) {
      list.push(coordinate);
    }
    return list;
  }, [])
}

function findClosestIntersection (intersections) {
  return intersections.reduce((smallest, intersection) => {
    const coordinate = intersection.split(',').map(Number);
    const distance = manhattanDistance([0, 0], coordinate);
    return Math.min(smallest, distance);
  }, Infinity)
}

function manhattanDistance([x1, y1], [x2, y2]) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}