// 1.Data types- let ,const
console.log(2);
let name = "Diba";
console.log(name);
let number = 2200;
console.log(number);
let floating_number = 3.4232;
console.log(floating_number);
name = "daina";
console.log(name);
const num = 10;
console.log(num);
// num=500
// console.log(num)

// 2. if-else
const num1 = 20;
if (num1 >= 20) console.log("Yes");
else console.log("No");

const num2 = 35;
if (num2 >= 20 || num2 <= 30) console.log("Yes");
else console.log("NO");

const num3 = 35;
if (num3 >= 20 && num3 <= 30) console.log("Yes");
else console.log("NO");

// 3.Array
const friends = ["Nadia", "Sadia", "Safa", "Naba", "Raba"];
console.log(friends);
console.log(friends.length);
console.log(friends[1]);
friends.pop();
console.log(friends);
friends.push("Radia");
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift("Rabeya");
console.log(friends);

console.log(friends.slice(2, 4));
console.log(friends.splice(2, 3));

// 4.for loop
console.log(friends);
console.log(friends.length);
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log("index-", i, "-name-", element);
}

// 5.Function
function sum(a, b) {
  return a + b;
}
let summation = sum(5, 2);
console.log(summation);

function full_name(a, b) {
  return a + " " + b;
}
const a = "Radia";
const b = "Chowdhury";
const name1 = full_name(a, b);
console.log(name1);

function greater(a, b) {
  if (a > b) console.log(a);
  else console.log(b);
}
greater(5, 10);
greater(10, 5);
greater(15, 100);
greater(0.2315, 0.3242);

function leap_year(year) {
  if (year % 4 == 0) console.log("It's a leap year");
  else console.log("Not a leap year");
}
leap_year(2020);
leap_year(2021);
leap_year(2022);
leap_year(2023);

// 6.Object
const person = {
  name: "Diba",
  age: 25,
  friend1: ["Saba", "Naba", "Sadia", "Nadia"],
};
console.log(person);
console.log(person.name);
console.log(person.friend1);
person.name = "Diana";
console.log(person.name);

// 7.Template String
const fName = "naba";
const lName = "Chowdhury";
console.log(`Her name is ${fName} ${lName}`);

// 8.Arrow function
const sum1 = (a, b) => {
  return a + b;
};
let summation1 = sum1(5, 2);
console.log(summation1);

// 9.Spread operator(...)
const numbers = [2, 3, 4, 2, 1, 4];
console.log(...numbers);
const newNumbers = [...numbers, 10, 100, 233, 12];
console.log(newNumbers);

// Array Methods map,Filter,Find,ForEach
// Array of objects
const products = [
  { name: "redmi", brand: "xiomi", price: 30000, color: "black" },
  { name: "Samsung", brand: "Samsung", price: 50000, color: "black" },
  { name: "Apple16", brand: "apple", price: 300000, color: "white" },
  { name: "Apple8", brand: "apple", price: 10000, color: "black" },
  { name: "Apple10", brand: "apple", price: 20000, color: "white" },
];

// map
const result = products.map((product) => product.brand);
console.log(result);

const result2 = products.map((product) => {
  console.log(product);
  console.log(product.price);
});

// forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

// filter
