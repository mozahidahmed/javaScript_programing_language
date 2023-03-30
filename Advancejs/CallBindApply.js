// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// // This will return "John Doe":
// const result= person.fullName.call(person2);
// console.log(result);


// //pass new vlaue 
// const person = {
//     fullName: function (a) {
//         return this.firstName + " " + this.lastName+a;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// var hand="handsam"

// // This will return "John Doe":
// const result = person.fullName.call(person2,hand);
// console.log(result);
// pass new vlaue 



// const person = {
//     fullName: function (a,b) {
//         return this.firstName + " " + this.lastName+a+b;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }


// var a="A"
// var b="B"

// var hand=[a,b]

// // This will return "John Doe":
// const result = person.fullName.apply(person2,hand);
// console.log(result);