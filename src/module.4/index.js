// rest operator

function getSum(a) {
    let  sum = 0;

    arguments.forEach(function (item) {
        sum += item;
    });

    console.log(sum);

    // let arr = Array.prototype.slice.call(arguments, 0);
    // console.log(arr.reduce((sum, item) => sum + item));
}

function getSum2(first , ...args) {
    console.log(args.reduce((a, b) => a + b));
}

// for of
function getSum3() {
    for (let item of arguments) {
        console.log(item);
    }
}

getSum3(1,2,3,4,5,6);





//spread
// const men = {
//     name: 'Igor',
//     color: 'black'
// };
//
// const newMen = {
//     color: 'yellow'
// };
//console.log(Object.assign({}, men, newMen));
//console.log(...men, ...newMen);
//console.log(...[1, 4, 5], ...[4,6,7]);



// symbol
// const id = Symbol();
// const id2 = Symbol.for('second');
//
// const men = {
//     name: 'Igor',
//     color: 'black',
//     [id] : 3123123,
//     [id2] : 12312312,
// };
//
// console.log(men);
// console.log(men.id);
// console.log(Symbol.keyFor(id2));





