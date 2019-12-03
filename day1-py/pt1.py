def fuel (mass):
  return int(mass) // 3 - 2

print(sum(fuel(line) for line in open('data.txt')))