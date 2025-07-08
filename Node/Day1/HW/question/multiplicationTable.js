function printTable(number) {
  let result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${number} x ${i} = ${number * i}`);
  }

  return result;
}

module.exports = printTable;
