const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it("returns true for ['Lighthouse','Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns true for 2", () => {
    assert.deepEqual(result.length, 2);
  });
  it("returns true for 'Ligthhouse'", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });
  it("returns true for 'Labs'", () => {
    assert.deepEqual(result[1], 'Labs');
  });
});


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");