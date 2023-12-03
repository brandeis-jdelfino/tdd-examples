const fs = require('fs');

class NumberAnalyzer {
  constructor(filePath) {
    this.filePath = filePath;
    this.numbers = [];
  }

  readNumbersFromFile() {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    this.numbers = fileContent.split('\n').map(Number);
  }

  computeAverage() {
    const sum = this.numbers.reduce((acc, num) => acc + num, 0);
    return sum / this.numbers.length;
  }

  computeMean() {
    const sortedNumbers = this.numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  computeStandardDeviation() {
    const mean = this.computeMean();
    const squaredDifferences = this.numbers.map(num => Math.pow(num - mean, 2));
    const variance = squaredDifferences.reduce((acc, num) => acc + num, 0) / this.numbers.length;
    return Math.sqrt(variance);
  }
}

module.exports = NumberAnalyzer;
