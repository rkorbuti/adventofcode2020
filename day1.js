const { expenses } = require('./data/day1data.js');

expenses.forEach((el) => {
  expenses.includes(2020 - el) ? console.log((2020 - el) * el) : '';
});

expenses.sort((a, b) => a - b).filter((a) => expenses[0] + expenses[1] + a <= 2020);
for (const i in expenses) {
  for (const j in expenses) {
    if (expenses.includes(2020 - expenses[i] - expenses[j])) {
      console.log(expenses[i], expenses[j], 2020 - expenses[i] - expenses[j]);
      return;
    }
  }
}
