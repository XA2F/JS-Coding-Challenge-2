let name = [-1, -2, -3, 0, 1, 2, 3];

function name1(array) {
  let name2 = [];
  for (let i = 0; i < array.length; i++) {
    if (0 > array[i]) {
    } else {
      name2.push(array[i]);
    }
  }
  return name2;
}

console.log(name1(name));
