# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [Artur T](https://github.com/mr-Arturio) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @artur_t/lotide`

**Require it:**

`const _ = require('@artur_t/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [assertArraysEqual](/assertArraysEqual.js): takes two arrays as inputs and compares them to determine if they are equal.
* [assertEqual](/assertEqual.js)
* [assertObjectsEqual](/assertObjectsEqual.js)
* [countLetters](/countLetters.js)
* [countOnly](/countOnly.js)
* [eqArrays](/eqArrays.js)
* [eqObjects](/eqObjects.js)
* [findKey](/findKey.js)
* [findKeyByValue](/findKeyByValue.js)
* [flatten](/flatten.js)
* [head](/head.js)
* [letterPositions](/letterPositions.js)
* [map](/map.js)
* [middle](/middle.js)
* [tail](/tail.js)
* [without](/without.js)