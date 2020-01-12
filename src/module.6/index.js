//object

let name = 'Igor';
let age = 17;

function getName() {
    return this.name;
}

const user = {
    name,
    age,
    getName,

    getAge(){
        return this.age;
    },

    [`user${1+3}`]: 12345,

    get getInfo(){
        return `${name} age: ${age}`;
    },

    set setAge(age){
        this.age = age;
    }
};


console.log(user.getName());
console.log(user.getAge());
console.log(user);
console.log(user.getInfo);
user.setAge = 99;
// promise
console.log(user.getInfo);

