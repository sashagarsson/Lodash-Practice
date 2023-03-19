const _ = require('lodash')
const assert = require('assert')

// Use fake data or APIs you have worked with in previous projects or google fake data you can use. 
// - [ ] Either make a fetch or save it in a few variables.
// Console.log the output of each lodash method called on the fake data.
// Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
// Create unit tests with Mocha for each function you build.

const numbers = [8, 16, 24, 32, 40, 48, 56, 67, 79, 84]
const cars = ["Chevy", "Ford", "Toyota", "Dodge", "BMW", "Jeep"]

let [chunk1, chunk2] = _.chunk(cars, 3)
console.log([chunk1, chunk2])

let reverseNumbers = _.reverse(numbers)
console.log(reverseNumbers)

let lessCars = _.without(cars, "Ford", "Jeep")
console.log(lessCars)

let shuffleNumbers = _.shuffle(numbers)
console.log(shuffleNumbers)

let joinCars = _.join(cars, '-')
console.log(joinCars)


if (typeof describe === 'function'){
    describe('Lodash test', function(){
        it('should create 2 seperate arrays', function(){
            const [chunk1, chunk2] = _.chunk(cars, 3)
            assert.equal(chunk2[0], "Dodge");
        });
        it('should show numbers array in reverse', function(){
            const numReverse = _.reverse(numbers)
            assert.equal(numReverse[0], 8)
        })
        it('show cars array with less cars', function(){
            const carsLess = _.without(cars, "Ford", "Jeep")
            assert.equal(carsLess[1], "Toyota")
        })
        it('should join the cars array with a "-"', function(){
            const carsJoin = _.join(cars, '-')
            assert.equal(carsJoin, 'Chevy-Ford-Toyota-Dodge-BMW-Jeep')
        })
        it('should shuffle the numbers array', function(){
            const shuffles = _.shuffle(numbers)
            assert.notEqual(shuffles, numbers)
        })
    });
    }
    