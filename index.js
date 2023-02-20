const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');

module.exports = {
assertArraysEqual,
assertEqual,
assertObjectsEqual,
countLetters,
countOnly,
eqArrays,
eqObjects,
findKey,
findKeyByValue,
flatten,
head,
letterPositions,
map,
middle,
tail,
takeUntil,
without
}