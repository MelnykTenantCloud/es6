// class in es 6

function Animal(name) {
    this.name = name;
}


Animal.prototype.getName = function () {
    return this.name;
};


const dog = new Animal('Dog');
const cat = new Animal('Cat');

console.log(dog, cat);

//1
class Animal2 {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


const dog2 = new Animal2('Dog');
const cat2 = new Animal2('Cat');


console.log(dog2, cat2);



//Child , parent in es 6

// function Bird() {
//     Animal.apply(this , arguments);
// }
//
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
//
// class Bird extends Animal2{
//     constructor(name){
//         super(name);
//     }
//
//     //new logic
//     // getName() {
//     //     super.getName();
//     // }
// }
//
// const bird = new Bird('Bird');
//
// console.log(bird.getName());
