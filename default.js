// num2 = 10 work as backup

function add(num1, num2=10) {
  return num1 + num2;
}

const total = add(15, 2)
console.log(total);