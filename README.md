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
* [assertEqual](/assertEqual.js): compares two values for equality
* [assertObjectsEqual](/assertObjectsEqual.js); compare if two objects are equal.
* [countLetters](/countLetters.js): count quantity of each letter in the string.
* [countOnly](/countOnly.js): count specified items.
* [eqArrays](/eqArrays.js): can compare two arrays for a perfect match.
* [eqObjects](/eqObjects.js):check if two objects are equal.
* [findKey](/findKey.js): finds the required key of the object.
* [findKeyByValue](/findKeyByValue.js): finds the specific key in the object.
* [flatten](/flatten.js): returns singlelayered array
* [head](/head.js): function for arrays to retrieve the first element from the array.
* [letterPositions](/letterPositions.js): returns positions of each letter in the string.
* [map](/map.js): apply the given callback function to each element in the input array and return a new array containing the results.
* [middle](/middle.js): function for arrays to retrieve the middle elements from the array.
* [tail](/tail.js): function for arrays to retrieve every element except the head (first element) of the array.
* [takeUntil](/takeUntil.js): takes two parameters: an array and a callback function. The function returns a new array that contains all the elements from the original array until the first element for which the callback returns a truthy value.
* [without](/without.js): removes needed elements from the array, and returning a new array. 