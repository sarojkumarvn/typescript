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

console.log(calculatesum([3, 2, 1, 54, 87, 963]));

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


//INTERFACES

