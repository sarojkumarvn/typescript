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
console.log(calculatesum([3, 2, 1, 54, 87, 963]));
var user = {
    // we have to write type just after giving the column
    name: "Saroj kumar ojha",
    age: 20,
    location: " Odisha",
};
function login(userData) {
    return userData;
}
console.log(login(user));
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
console.log(bankAccount);
