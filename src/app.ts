// // let num1 = 1;
// // function calculation(num1:number , num2:number) {
// //    return num1 + num2;
// // }
// // console.log(calculation(num1,2));

// // checking 2

// // function calculatesum(numbers: number[]) {
// //   return numbers.reduce((acc, item) => {
// //     return acc + item;
// //   }, 0);
// // }

// // console.log(calculatesum([3, 2, 1, 54, 87, 963]));

// //checking3

// // type User = {
// //   name: string;
// //   age: number;
// //   location?: string; // to make optional we have to add ?
// // };

// // const user: User = {
// //   // we have to write type just after giving the column
// //   name: "Saroj kumar ojha",
// //   age: 20,
// //   location: " Odisha",
// // };

// // function login(userData: User): User {
// //   return userData;
// // }

// // console.log(login(user));

// //INTERFACES - shape of the object
// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 1274,
//   payeeAccountNumber: 2148785,
// };
// const transaction2: Transaction = {
//   payerAccountNumber: 1274,
//   payeeAccountNumber: 2148785,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 1234,
//   accountHolder: "Saroj kumar ojha",
//   balance: 12125454,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };

// // console.log(bankAccount);

// // EXTENT TWO INTERFACES
// interface Book {
//   title: string;
//   price: number;
//   rating?: number; //optional
// }

// const book: Book = {
//   title: "Rich Dad and poor Dad",
//   price: 300,
//   rating: 4.5,
//   size: 500,
//   format: "PDF",
// };

// interface EBook extends Book {
//   fileSize: number;
//   format: string;
// }

// const eBook: EBook = {
//   title: "Rich Dad and poor Dad",
//   price: 300,
//   fileSize: 500,
//   size: 500,
//   format: "PDF",
// };

// interface AudioBook extends EBook {
//   // title: string;
//   // price: number;
//   duration: number;
//   // format: string;
//   // fileSize: number;
// }

// const audioBook: AudioBook = {
//   title: "Rich Dad and poor Dad",
//   price: 300,
//   size: 500,
//   duration: 500,
//   format: "MP3",
//   fileSize: 500,
// };

// // TO MERGE TWO INTERFACES
// interface Book {
//   title: string;
//   price: number;
// }

// interface Book {
//   size: number;
//   format: string;
// }

// // same interfaces get merged with each other
// // if two interfaces have the same name then ts will merge themwith each other

// const NewBook: Book = {
//   title: "Rich Dad and poor Dad",
//   price: 300,
//   size: 500,
//   format: "PDF",
// };

// //UNIONS

// type ID = number | string;

// // Narrowing
// function PrintId(id: ID) {
//   // we declared the type of id which is either number or string
//   // if (typeof id === "string") console.log(id.toUpperCase());
//   // else console.log(id);
// }

// // console.log(PrintId(123)); // number
// // console.log(PrintId("saroj")); // string

// function getFirstThree(x: string | number[]) {
//   return x.slice(0, 3);
// }

// // console.log(getFirstThree([1, 2, 3, 4, 5]));

// //GENERICS - it is generalized code , used for making reusable codeeven after we change the type

// function LogString(args: string) {
//   // console.log(args.toUpperCase());
//   return args;
// }
// function LogNumber(args: number) {
//   // console.log(args);
//   return args;
// }

// function LogArray(args: any) {
//   // we are ignoring type
//   // console.log(args);
//   return args;
// }

// function LogAnything<T>(args: T): T {
//   // console.log(args);
//   return args;
// }
// // in this any case we will use generics , that is like you can give any type of data in
// // to that function but it wont change the type security
// // this T will automatically take the type of the data that we are passing through the function

// // LogString("Saroj");
// // LogArray([1,2,3,4,5]);
// // LogAnything([1,2.1,4,5]);

// // ANOTHER EXAMPLE FOR GENERIC
// interface HasAge {
//   // name: string;
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]):T  {   /// this says that whenever you add T then this extends will force the T to add age which is from the HasAge 

//   return people.sort((a, b) => a.age - b.age)[people.length - 1];
// } 


// const people = [
//   { name: "Saroj1", age: 74 },
//   { name: "Saroj2", age: 86 },
//   { name: "Saroj3", age: 12 },
// ];

// interface player {
//   name: string;
//   age: number;
// }

// const players: player[] = [
//   { name: "bumrah1", age: 745 },
//   { name: "Saddddoj2", age: 867 },
//   { name: "Sarssssoj3", age: 112 },
// ];

// // console.log(getOldest(players).name);

// const person = getOldest(players);
// person.age ;



// // FETCHING DATA THROUGH TS 

// interface IPost {
//   id : number ;
//   title : string ;
//   description : string ;
// }

// interface IUser {
//   id : number ;
//   name : string ;
//   age : number ;
  
// }
// const fetchPostData = async (path : string) : Promise<IUser[]> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// }

// const fetchData = async <ResultType> (path : string):Promise<ResultType>  =>{
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// }

// (async ()=>{
//   // const posts = await fetchPostData("/posts");
//   // const users = await fetchPostData("/users");


//   const users = await fetchData<IPost[]>("/posts");
//   users[0].description;

  
// })() ;



// // duck typing 
// interface ICredentials {
//   username : string;
//   password : string;
//   isAdmin? : boolean;
// }


// function login2 (credentials : ICredentials) : boolean {
//   console.log(credentials);
//   return true;
// }

// const user2 : ICredentials = {
//   username : "saroj",
//   password : "1234",
//   isAdmin : true,
// }

// login2(user2);

interface IAuth {
  username : string;
  password : string;
 login (username : string , password : string) : boolean;
}



const authorization : IAuth = {
  username : "saroj",
  password : "1234",
  login(username : string , password : string) : boolean
    {return true ;} 
  // this will directly target the IAuth
}


// inference is like it will automatically take the type of the data that we are passing through the function
//like
// let num = 1; ts automatically take the type of the data that we are giving to the variable ;



// HOW TO USE TS CONFIG FILE WHILE CREATING A REACT APP


