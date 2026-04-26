const friends = ["safa", "Naba", "Saba"];
const element1 = friends[0];
const element2 = friends[1];
const element3 = friends[2];
console.log(element1, element2, element3);

// Array destructure
const [data1, data2, data3] = friends;
console.log(data1, data2, data3);


let x = "A";
let y = "B";
[x, y] = [y, x];
console.log(x, y);
