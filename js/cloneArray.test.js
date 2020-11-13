const cloneArray = require('./cloneArray')
const { test, expect } = require('@jest/globals')

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)

})
// Unit testing video notes: 
// making a test for an individual component of your code 
// makes things simple and helps locate errors that you might
// make along the way 