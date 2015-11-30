var should = require('should')
var setup = require('../src/setupFunktion.js')

describe('setup', function() {
    var array = []

    // Setup
    beforeEach(function() {
        array = ["Hallo", "Vera", "Steffi"]
    })

    it('should add element at the beginning of array', function() {
        const result = setup(array, 1)
        should(result[0]).be.exactly("Hallo").and.be.a.String()
    })

    it('should remove first element of array', function() {
        should(setup(array, 2)).be.exactly("Hallo").and.be.a.String()
    })

    it('should add element at the end of array', function() {
        const result = setup(array, 3)
        should(result[3]).be.exactly("Bye").and.be.a.String()
    })

    it('should remove last element of array', function() {
        should(setup(array, 4)).be.exactly("Steffi").and.be.a.String()
    })
})
