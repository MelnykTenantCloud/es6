// new arr es6

const arr = new Set();


// cant repeat
arr.add(1);
arr.add(1);
arr.add(2);
arr.add(3);
arr.delete(3);
arr.has(3);
arr.clear();

console.log(arr);



// new
const  arr2 = [1,1,1,1,2,3]
const arr3 = new Set(arr2)
console.log(arr3);