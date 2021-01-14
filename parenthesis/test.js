const parenthesis = require('./parenthesis.js')
const assert = require('assert')

it('should return true', () => {
  assert.equal(true, true)
})

it('should return true', () => {
  assert.equal(parenthesis.parenthesis("Hello (yes) (no) (maybe) ((()))"),true)
})
it('should return false', () => {
  assert.equal(parenthesis.parenthesis("Yeah I'm gonna need those (TPS) Reports by monday thanks()))"),false)
})
it('should return error', () => {
  assert.equal(parenthesis.parenthesis(" "),"ERROR: no input")
})
it('should return error', () => {
  assert.equal(parenthesis.parenthesis(""),"ERROR: no input")
})
it('should return false', () => {
  assert.equal(parenthesis.parenthesis("(()))("),false)
})
