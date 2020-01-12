// new variable es6


//object
// copy prototype - not clear object
// keys only string
// obj.length

//map


const user = new Map();

const obj ={name: 'Serg'};

user.set('name', 'Dima');
user.set(obj, {value: 1});
user.set([1,2,3],'arr');

console.log(user.get(obj));

user.delete(obj);

user.has(obj);

//user.clear();

console.log(user.size);


//key
//values
//entries
for(let i of user.entries()){
    console.log(i);
}

// only obj
const weekMap = new WeakMap();
//set
//get
//delete
//has