"use strict";
// // let num1 = 1;
// // function calculation(num1:number , num2:number) {
// //    return num1 + num2;
// // }
// // console.log(calculation(num1,2));
const authorization = {
    username: "saroj",
    password: "1234",
    login(username, password) { return true; }
    // this will directly target the IAuth
};
// inference is like it will automatically take the type of the data that we are passing through the function
//like
// let num = 1; ts automatically take the type of the data that we are giving to the variable ;
// HOW TO USE TS CONFIG FILE WHILE CREATING A REACT APP
