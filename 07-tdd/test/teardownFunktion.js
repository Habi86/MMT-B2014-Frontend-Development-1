var should = require('should')
var scalar = require('../src/teardownFunktion.js')

var should = require('should')
var teardown = require('../src/teardownFunktion.js')

describe('teardown', function() {
    var set = new Set()
    set.add("string")

    // Teardown
    afterEach(function() {
        set = new Set()
    })

    it('should add a string to a non empty set', function() {
        teardown(set, 2, 'string')
        should(set.size).be.exactly(3)
        should(set.has("Hallo")).be.true
        should(set.has("Vera")).be.true
        should(set.has("Steffi")).be.true
        should(set.values().next().value).be.type('string')
    })

    it('should add a string to an empty set', function() {
        teardown(set, 1, 'string')
        should(set.size).be.exactly(1)
        should(set.has("string")).be.true
        should(set.values().next().value).be.type('string')
    })

    it('should add two strings to an empty set', function() {
        teardown(set, 2, 'string')
        should(set.size).be.exactly(2)
        should(set.has("0")).be.true
        should(set.has("1")).be.true
        should(set.values().next().value).be.type('string')
    })
})
