let count = 0;
while (count < 10) {
  // do something'
  count++;
  console.log(count);
}

// infinite loops are not common in JS
while (true) {
  count++;
  console.log(count);
  if (count === 10) {
    break;
  }
}
