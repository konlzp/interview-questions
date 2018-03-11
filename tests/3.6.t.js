var AnimalShelter = require("../chapter3/3.6");

const ANIMAL_TYPES = {
    CAT: "cat",
    DOG: "dog"
};

describe('AnimalShelter', () => {
    it('animal shelter should behave', () => {
        /**
         * @type {AnimalShelter}
         */
        var animalShelter = new AnimalShelter([
            {type: ANIMAL_TYPES.CAT, id: 1},
            {type: ANIMAL_TYPES.DOG, id: 2},
            {type: ANIMAL_TYPES.DOG, id: 3},
            {type: ANIMAL_TYPES.CAT, id: 4},
            {type: ANIMAL_TYPES.DOG, id: 5}
        ]);

        var animal = animalShelter.dequeueAny();
        expect(animal.type).toBe(ANIMAL_TYPES.CAT);
        expect(animal.id).toBe(1);
        animal = animalShelter.dequeueCat();
        expect(animal.type).toBe(ANIMAL_TYPES.CAT);
        expect(animal.id).toBe(4);
        animal = animalShelter.dequeueAny();
        expect(animal.type).toBe(ANIMAL_TYPES.DOG);
        expect(animal.id).toBe(2);
        animal = animalShelter.dequeueDog();
        expect(animal.type).toBe(ANIMAL_TYPES.DOG);
        expect(animal.id).toBe(3);
    });
});