const fs = require('fs');
const math = require('mathjs');

function loadFileIntoNumberAnalyzer(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const numbers = fileContent.split('\n').map(Number);
    return new NumberAnalyzer(numbers);
}

class NumberAnalyzer {
  constructor(numbers) {
    this.numbers = numbers;
  }

  readNumbersFromFile() {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    this.numbers = fileContent.split('\n').map(Number);
  }

computeAverage() {
    return math.mean(this.numbers);
}

computeMedian() {
    return math.median(this.numbers);
}

computeStandardDeviation() {
    return math.std(this.numbers, 'uncorrected');
}
}

module.exports = {
    NumberAnalyzer,
    loadFileIntoNumberAnalyzer
};
