// // // var message = 'in global'
// // // console.log ('global: message = ' + message)


// // // a=() => {
// // //  var message = 'insaide A'
// // //  console.log("a; message = " +message)
// // // function b () {
// // //     console.log('b: messag=' + message)
// // // }
// // // b()
// // // }




// // // a()

// // // // b=() => {

// // // //     console.log('b: message =' + message)
// // // // }

// // // // // b()

// // var x = function () {
// //     console.log('x function')
// //     return;
// // }

// // // x()

// // Boolean('')


// // function a () 
// // {
// //     return
// //     {
// //         name:'yuakov'
// //     }
// // }

// // function b () {
// //     return {
// //         name: ' yakov'
// //     }
// // }

// // console.log(a())
// // console.log(b())


// // var company = new Object
// // company.name = 'facebook'
// // company.ceo = 'Zuckerberg'
// // company.ceo = new Object
// // company.ceo.firstName= 'Mark'

// // var stockPropname= "stock of company"
// // company[stockPropname] = 110


// // console.log(company['stock of company'])

// let facebook = {
//     name: 'Facebook',
//     ceo: {
//         firstname: 'Mark',
//         color: 'blue'
//     },
//     'stock of company': 110
// }
// console.log(facebook['stock of company'])

// ========================== FUNCTIONS ======\


// multiply = (x,y) => {
//     return x * y
// }


// console.log(multiply(5,3))

// multiply.version = 'v1.0.0'

// // console.log(multiply)

// makeMultiplier = (multiply) => {
//     let myFunc = function (x) {
//         return multiply * x;
//     };
//     return myFunc;
// }

// let multipyby3 = makeMultiplier(3);

// console.log(multipyby3(10))


// doubleAll = (multiplier) => {
//     let doubleFunc = function (y) {
//         return multiplier * y
//     }
//     return doubleFunc;
// }

// let double = doubleAll(2)
// console.log(double(300))

// function doOperation(x , operation) {
//     return operation(x)
// }

// let result = doOperation(5, double)

// console.log(result)

// let a = {x:7}
// let b = a;

// b.x = 4

// console.log(a)


// let a = 4;
// let b = 3;

// b = a
// console.log(a)

// function test () {
//     console.log(this)
//     this.myName = 'tx20'
// }

// test()

// console.log(window.myName)

// function Circle (radius) {
//     this.radius=radius;
//     }
//     this.getArea = function() {
//         return Math.PI * Math.pow(this.radius, 2)
// }

// let myCircle = new Circle(10)
// console.log(myCircle)


// var litcircle = {
//     radius: 10,
//     getArea: function () {
//         return Math.PI * Math.pow(this.radius, 2)
//     }
// }

// console.log(litcircle.getArea())

// let names = ['masov', 'tarkin', 'madiz', 'grinadera']

// // for (i = 0; i < names.length; i++) {
// //     // console.log('hello' + names[i])
// // }

// names.guns = 'kalashnikov'

// for (let name in names) {
//     console.log(names[name])
// }


// // let myobj = {
// //     name: 'adam',
// //     lastname: 'newman',
// //     age: 389,
// //     planet: 'mars'
// // }

// // for (var prop in myobj) {
// //     console.log(prop +":" + myobj[prop])
// // }

// console.log(document instanceof HTML)/

// ============================================== DOM MANIPULATION

function sayHello () {
    this.textContent = 'Submitted'
    let name =
   document.getElementById('name').value;
   let message = 'Hello' + name

//    document
//     .getElementById('display')
//     .textContent = message
//  or use innerhtml

document
    .getElementById('display')
    .innerHTML = message

}