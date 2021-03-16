/*
* Just quick review before starting to do Leetcode in JS
* */

// simples variables
let bob = "";
const adam = "";


//Rest Parameters
function f(...args) {
//    if we don't know the numebr of arguments coming in
}
f('f','a','r','a','z')
//Note: you can only have one rest parameter per function


//Spread operations

let array = [1,2,34,51,2,451,3,12]
console.log(...array) // [the above array]
// you can use this to join arrays

//Also you can shorthand objects

let x = 2
let y = 10
let sum = {x,y,z: x+y}

// object Destructions for data processing this also could be done to nested objects
let person = {
    name: "Aaron",
    age: "35",
    address: {
        city: "Salt Lake City",
        state: "UT",
        zip: 84115
    }
};
let address = {
    city: "Costa Mesa",
    state: "CA",
    zip: 92444
};
let {city, state, zip} = address;

// or you can use alias
let {city:c , state:s, zip:z} = address;

//Note the object destruction can be used as the functions param
function f({city, state, zip}){}
// also we can add defautl values to the params such as
function f({city= "Canada", state= "nowhere", zip = "afasd"}){}

// let {name, age, address} = person; // throws! (irrefutable)
// let {name, age, ?address} = person; // is ok because we specified address as undefineable (refutable)
// let ?{name, age, address} = person; // Forgives the whole pattern
// let {a: x} = {}   // throw
// let ?{a: x} = {}  // x = undefined
// let ?{a: x} = 0   // x = undefined
// let {?a: x} = {}  // x = undefined
// let {?a: x} = 0   // throw
// let ?{a: x = 1} = undefined   // x = 1
// let {?a: x = 1} = undefined   // throw
// let {?a: x = 1} = {}          // x = 1


//Swap values
let a = 1, b =5
[b, a] = [a, b];

//Destructions for arrays
let nums = [1, 2, 3, 4];
doSomething(nums);

function doSomething([first, second, ...others]){
    console.log(first);   //logs 1
    console.log(second);  //logs 2
    console.log(others);  //logs [3, 4]
}

//Arrow functions
let normalFn = function () {

}
let arrowFn = () =>{} // or get rid of the bracket

//Note: the arrow functions can mess up the "this" value


// Sets
let set = new Set()
set.add('')
set.size;
set.clear()
set.delete('element')
set.forEach()
set.has('element')

// ^ the usuals


//Map
let map = new Map();
map.set('name', 'Jorge');
map.get('name'); // Jorge
map.has('name'); // true

//Note: the key can be a function or object


// // Promises
// let promise = new Promise((resolve, reject) => {
//     // do a thing, possibly async, then...
//
//     if (//soemthing) {
//         resolve("Stuff worked!");
//     } else {
//         reject(Error("It broke"));
//     }
// })
//
// simple Fetching
const processData = async () =>{
        //await waits till promise is done
        const someValue = await new Promise((res,rej)=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(user => user.json())
                .then(userJsonFormat => res(userJsonFormat.name))
                .catch(err => rej(err))
        })
}

// Async callback
function getUserName(name, pswd, callback) {
    setTimeout(()=>{
        callback({user : `${name}, ${pswd}`})
    },5000)
}

let user = getUserName("bob", "123", (user)=>{
    // do stuff with the returned used after x seconds
})

