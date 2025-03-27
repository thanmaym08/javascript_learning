//console.log("hitesh")
//console.log("1" + 2)
//console.log(1 + "2")
//console.log("1" + 2 + 2)
//console.log(1 + 2 + "2")
//prefix it increments first and then it returns
//but in post fix it first returns then increments


//comparision operators
//strict check is === ("2"===2) check datatyoe before converting the datatype

//primitive data type
//7 categories
//string,number,boolean,null,undefined,symbol,bigint



//js is

//reference or nonprimitive :

//arrays,objs,functions,


//while using the symbol it is used for unique no where it does not equal when compared with the same but different variable

//const Id = Symbol('133')
//const Id2 = Symbol('133')
//console.log(Id === Id2) //false




//const bigNumber = 389549549677878885545n


//reference (non primitive)

///array obj functions


//const heros = ["a", "b", "c"];
////let myObj = {
//    name: "hitesh",
//   age: 22,
//}

//const myFunction = function () {
//   console.log("hello world!");/
//}
//myFunction()/*
/*
console.log(typeof bigNumber)
console.log(typeof Id)
console.log(typeof age)
console.log(typeof myObj) */

//heap(nonprimitivw) vs stack(primitive)

//in primitive when we use stack it gives a duplicate value to Aanother variable trying to access in stack so even if the value is changed in the secondvariable it oesnt change it in the primary variable


//but in non primitive it uses the heap where it is the call by reference where if the value is changed in the user2 it shows changes in the user one where it completely changes the info of the user 1

//object declaring
//let user={
//email:"user@gmail.com"
//upi:"user@upi"
//}

//console.log(User.email)   calling obj


/*

//strings\
const name = "thanu"
const rep = 50

//OLD WAY AND NOT GOOD LOOKING

console.log(name + rep)
//better WAY OF WRITING STRING
console.log(`hello my name is ${name} and my rep count is ${rep}`);
*/
/* const gameName = new String('hiteshc-gcp-fdf-sddd')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf(2));

//string methods      //

const string = gameName.substring(0, 4)
console.log(string);

const str2 = gameName.slice(-8, 4)
console.log(str2);


const str3 = "     mname     "
console.log(str3);
console.log(str3.trim());


const url = "hitesh.com/hitesh%20choudary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hites'))

console.log(gameName.split('-'));



 */

//numbers//

// const number = 244
// console.log(number);
// //we are declaring and showing that it is a number
// const num2 = new Number(100.0005)
// console.log(num2);

// console.log(typeof num2);
// console.log(typeof number);


//we use to fixed when we need precision in the decimal values
//how many zeros we need in this

// console.log(num2.toString());
// console.log(num2.toString().length);

// console.log(typeof num2);
// console.log(num2.toFixed(2));
// console.log(num2.toPrecision(4));
//in precision it will be at nunber from start at which if i give 4 in it it will show only four digits in the number given




//                  maths                //



// console.log(Math.abs(-5));
// console.log(Math.ceil(5.6));
// console.log(Math.round(5.6));
// console.log(Math.floor(Math.random() * 14 + 1))



// //dates


// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// console.log(myDate.getMinutes());



//arrays


// array methods

const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
//console.log(arr[2]);

// arr.push(5)//it pushes the copy of number to last 
// arr.push(4)
// console.log(arr);


// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()

// console.log(arr);


// arr.unshift(5)//copy of 5 will come at start of array

//console.log(arr);

let arr2 = new Array(1, 34, 554, 44, 55, 43, 4)
//slice and splice '


//in slice it will create a subarray without modifying array
//splice will modify the array and return the subarray


//we use array concat to add different arrays it is limited to no of arrays included

//in spread operator it is easy to include multiple arrays

//ex

// const all = [...arr, ...arr2]
// console.log(all);
//this is spread


// flat is usrd when we have multiple arrays inside array in aclustered form so if flat is used then it will make it into a array combined inside the new array


// const arr5 = [1, 1, 2, 4, [3, 4, 2], [234, 5, 2, 3], 3, 5, 6, [45, 3, 4]]
// console.log(arr5);

// const arr_all = arr5.flat(Infinity)
// console.log(arr_all);



// let score1 = 47
// let score2 = 46
// let score3 = 45

// console.log(Array.of(score1, score2, score3));



// objects


// while accessing the objects we use the variable.accessing variable


//if we want to use the symbol inside a objec then we can use it by [] using sq brackets rather than the js.mysym if used it shows as string

// but when we use [] it will show it as the symbol datatype

// const mySym = Symbol("keys1")

// const JsUser = {
//     name: "John",
//     age: 30,
//     mySym: "keys2",
//     [mySym]: "keys1"
// }

// console.log(JsUser.mySym);//this is string
// console.log(JsUser[mySym]);this is symbol



// we can declare multiple objects inside an object and use them with help of .


// const reguser = {
//     name: "John",
//     fullname: {
//         userfull: {


//             first: "John",
//             second: "smith"
//         }
//     }
// }
// console.log(reguser.fullname.userfull.first);


// object destructuring 

// const course = {
//     name: "javascript",
//     price: 1000,
//     courseInstructor: "thanmay"
// }

// console.log(course.courseInstructor);//this is bigger and thakes size


// const { courseInstructor: instructor } = course

// console.log(instructor);//this is smaller and takes less size



//functions and parameters


//parameters are those which we give inside function
//arguments are those which we give when we call the function
// function add(a, b) {
// }in this  a and b are parameters \\\



//while calling function we give values those are arguments
// sayMyName(4,3)

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(300, 440, 553))






// scope

// local scope and global scope

// let a = 300//global scope where it can be accessed anywhere in the program
// if (true) {
//     let a = 10
//     const b = 44
//     console.log(a);
//     //local scope where it can not be accessed anywhere outside the function ..
//}
//console.log(a);//global calling

///

// nested scope

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        //        console.log(username);
    }//you can access the function one in function 2 as it can access it is parent fxn 
    two();
}//it cannot access this bcoz its out of the scope and outside the brackets so it cant access the function by being outside
// 
one();//print the username as hitesh







// this and arrow function

// this is used to access only current context in the brackets

const user = {
    username: "hitesh",
    age: 25,
    WelcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);

    }
}
    // user.WelcomeMessage();//it will print hitesh , welcome to website
    // user.username = "sam"
    // user.WelcomeMessage();
    // console.log(this);



    // this will only work in the object not in the function

    // function chai() {
    //     let username = "hitesh"
    //     console.log(this.username);

    // }
    // chai()


    //output will be undefined


    // declaring function in different ways



    // const chai1 = function () {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }

    // output is undefined


    // const chai1 = () => {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }

    // pure arrow function


    // const addTwo = (num1, num2) => {
    //     return num1 + num2;
    // }
    // console.log(addTwo(5, 7));


    // second way

    // const addTwo = (num1, num2) => (num1 + num2);

    // console.log(addTwo(5, 7));


    // if used curly based then return should be used and if used paranthesis
    // no need of the return word





    // immediately invoked function expressions (IIFE)

    (function chai() {
        console.log("DB CONNECTED");
    })(); //SEMICOLON IS USED TO END THE FUNCTION

((name) => {
    console.log('DB CONNECTED TWO ${name}');

})('hitesh')