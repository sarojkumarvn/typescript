// let num1 = 1;
// function calculation(num1:number , num2:number) {
//    return num1 + num2;
// }
// console.log(calculation(num1,2));

// checking 2

function calculatesum(numbers: number[]) {
  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

// console.log(calculatesum([3, 2, 1, 54, 87, 963]));

//checking3

type User = {
  name: string;
  age: number;
  location?: string; // to make optional we have to add ?
};

const user: User = {
  // we have to write type just after giving the column
  name: "Saroj kumar ojha",
  age: 20,
  location: " Odisha",
};

function login(userData: User): User {
  return userData;
}

console.log(login(user));

//INTERFACES - shape of the object
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 1274,
  payeeAccountNumber: 2148785,
};
const transaction2: Transaction = {
  payerAccountNumber: 1274,
  payeeAccountNumber: 2148785,
};

const bankAccount: BankAccount = {
  accountNumber: 1234,
  accountHolder: "Saroj kumar ojha",
  balance: 12125454,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// console.log(bankAccount);

// EXTENT TWO INTERFACES
interface Book {
  title: string;
  price: number;
  rating?: number; //optional
}

const book: Book = {
  title: "Rich Dad and poor Dad",
  price: 300,
  rating: 4.5,
  size: 500,
  format: "PDF",
};

interface EBook extends Book {
  fileSize: number;
  format: string;
}

const eBook: EBook = {
  title: "Rich Dad and poor Dad",
  price: 300,
  fileSize: 500,
size: 500,
  format: "PDF",
};

interface AudioBook extends EBook {
  // title: string;
  // price: number;
  duration: number;
  // format: string;
  // fileSize: number;
}

const audioBook: AudioBook = {
  title: "Rich Dad and poor Dad",
  price: 300,
  size: 500,
  duration: 500,
  format: "MP3",
  fileSize: 500,
};



// TO MERGE TWO INTERFACES
interface Book {
  title: string;
  price: number;
  
}

interface Book {
  size: number;
  format: string;
}

// same interfaces get merged with each other
// if two interfaces have the same name then ts will merge themwith each other



const NewBook : Book = {
  title: "Rich Dad and poor Dad",
  price: 300,
  size: 500,
  format: "PDF",
  
}