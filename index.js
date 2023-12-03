const fs = require('fs');

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
    const sum = this.numbers.reduce((acc, num) => acc + num, 0);
    return sum / this.numbers.length;
  }

  computeMedian() {
    const sortedNumbers = this.numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  computeStandardDeviation() {
    const mean = this.computeAverage();
    const squaredDifferences = this.numbers.map(num => Math.pow(num - mean, 2));
    const variance = squaredDifferences.reduce((acc, num) => acc + num, 0) / this.numbers.length;
    return Math.sqrt(variance);
  }
}

module.exports = {
    NumberAnalyzer,
    loadFileIntoNumberAnalyzer
};
