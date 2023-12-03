
const { NumberAnalyzer, loadFileIntoNumberAnalyzer } = require('./index');

test('average should come up with correct answer', () => {
    const n = new NumberAnalyzer([1,2,3,4,5]);
    expect(n.computeAverage()).toBe(3);
});

test('median should come up with correct answer', () => {
    const n = new NumberAnalyzer([1,2,3,4,5]);
    expect(n.computeMedian()).toBe(3);
});

test('stdev should come up with correct answer', () => {
    n = new NumberAnalyzer([1,2,3,4,5]);
    expect(n.computeStandardDeviation()).toBe(1.4142135623730951);
});
