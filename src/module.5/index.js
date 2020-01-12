// string

const age = 18;
const str = 'str';
const str2 = `new str`;


console.log('Hello' + age + 'years old');
console.log(`Hello ${age} + years old or ${5+ 5}`);




//function es 6
// function getName(name = 'Vitalii') {
//     console.log(name);
//
// }
//
// getName('Serg');
//
//
// const count = (a,b) => a + b;
//
// console.log(count(1,4));



//arguments not aval
// const func = (a,b) => {
//     console.log(arguments);
// };
//
//
// function getArg (a,b){
//     const func = (a,b) => {
//         console.log(arguments);
//     };
//
//     func(a,b);
// }
//
//
// func(1,4);
// getArg(1,4);
//
//
// //this not aval
// const obj = {
//     name:'Vitalik',
//     age: 12,
//
//     getName : function () {
//         const that = this;
//
//         function getFullName() {
//             return that.name;
//
//         }
//
//        return getFullName();
//     },
//
//     getAge : function () {
//         const getFullName = () =>{
//             return this.age;
//
//         };
//
//         return getFullName();
//     }
// };
//
//
// console.log(obj.getName());
// console.log(obj.getAge());