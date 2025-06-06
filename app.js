// let num1 = 1;
// function calculation(num1:number , num2:number) {
//    return num1 + num2;
// }
// console.log(calculation(num1,2));
// checking 2
function calculatesum(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
var user = {
    // we have to write type just after giving the column
    name: "Saroj kumar ojha",
    age: 20,
    location: " Odisha",
};
function login(userData) {
    return userData;
}
var transaction1 = {
    payerAccountNumber: 1274,
    payeeAccountNumber: 2148785,
};
var transaction2 = {
    payerAccountNumber: 1274,
    payeeAccountNumber: 2148785,
};
var bankAccount = {
    accountNumber: 1234,
    accountHolder: "Saroj kumar ojha",
    balance: 12125454,
    isActive: true,
    transactions: [transaction1, transaction2],
};
var book = {
    title: "Rich Dad and poor Dad",
    price: 300,
    rating: 4.5,
    size: 500,
    format: "PDF",
};
var eBook = {
    title: "Rich Dad and poor Dad",
    price: 300,
    fileSize: 500,
    size: 500,
    format: "PDF",
};
var audioBook = {
    title: "Rich Dad and poor Dad",
    price: 300,
    size: 500,
    duration: 500,
    format: "MP3",
    fileSize: 500,
};
// same interfaces get merged with each other
// if two interfaces have the same name then ts will merge themwith each other
var NewBook = {
    title: "Rich Dad and poor Dad",
    price: 300,
    size: 500,
    format: "PDF",
};
// Narrowing
function PrintId(id) {
    // we declared the type of id which is either number or string
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}
console.log(PrintId(123)); // number
console.log(PrintId("saroj")); // string
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));
//GENERICS - it is generalized code , used for making reusable codeeven after we change the type
function LogString(args) {
    console.log(args.toUpperCase());
    return args;
}
function LogNumber(args) {
    console.log(args);
    return args;
}
function LogArray(args) {
    console.log(args);
    return args;
}
LogString("Saroj");
LogArray([1, 2, 3, 4, 5]);
