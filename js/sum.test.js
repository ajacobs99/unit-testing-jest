const sum = require('./sum')
const { expect } = require('@jest/globals')

test('properly adds two numbers', () => {
    expect(
        sum(1, 2)
        ).toBe(3) // tobe toequal etc. 
})