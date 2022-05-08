// 1. setup
// 2. condition
// 3. action

const names = ["John", "Mark", "Jane"];
// console.log(names);

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(`Hello, ${names[i]}`);
// }

//for in loops work on the index

for (let i in names) {
  console.log(i);
}

// for of loops work on the values
for (let name of names) {
  console.log(name);
}
