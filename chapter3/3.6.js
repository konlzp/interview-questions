// Animal shelter with two animal types.
// Support two operations:
// 1. get the oldest (first arrived) animal
// 2. get the oldest from the type specified.

var Queue = require("../utils/queue");

/**
 * @typedef Animal
 * @type {Object}
 * @property {string} type
 * @property {number} id
 * @property {number} arrival
 */

const ANIMAL_TYPES = {
    CAT: "cat",
    DOG: "dog"
};

class AnimalShelter {
    constructor(animals) {
        // increment each time an new animal comes in
        // used as the arrival time of each animal regardless type
        this.animalCounter = 0;

        this.cats = new Queue([]);
        this.dogs = new Queue([]);

        animals.forEach((animal) => {
            this.enqueue(animal);
        });
    }

    /**
     * @param {Animal} animal 
     */
    enqueue(animal) {
        animal.arrival = this.animalCounter;
        this.animalCounter ++;

        switch (animal.type) {
            case ANIMAL_TYPES.CAT:
                this.cats.push(animal);
                break;
            case ANIMAL_TYPES.DOG:
                this.dogs.push(animal);
                break;
            default:
                throw new Error("invalid animal type");
        }
    }

    dequeueCat() {
        return this.cats.pop();
    }

    dequeueDog() {
        return this.dogs.pop();
    }

    dequeueAny() {
        /**
         * @type {Animal}
         */
        var oldDog = this.dogs.first();
        /**
         * @type {Animal}
         */
        var oldCat = this.cats.first();

        if (oldCat && !oldDog) {
            return this.cats.pop();
        } else if (!oldCat && oldDog) {
            return this.dogs.pop();
        } else if (!oldCat && !oldDog) {
            return null;
        }

        return oldDog.arrival < oldCat.arrival ?
            this.dogs.pop() : this.cats.pop();
    }
}

module.exports = AnimalShelter;