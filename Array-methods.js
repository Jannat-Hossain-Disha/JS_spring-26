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
const result3=products.filter(product=>product.brand==="apple")
console.log(`filter ${result3}`)
const result4=products.filter(product=>product.price>=50000)
console.log(result4)
const result5=products.filter(product=>product.brand!="samsung")
console.log(result5)
const result6=products.find(product=>product.name==="samsung")
console.log(result6)

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false }
];

const activeUsers = users.filter(user => user.active === true);