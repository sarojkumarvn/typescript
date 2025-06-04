// let num1 = 1;
// function calculation(num1:number , num2:number) {
//    return num1 + num2;
// }
// console.log(calculation(num1,2));
// checking 2
function getTotal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal([3, 2, 1, 54, 87, 963]));
