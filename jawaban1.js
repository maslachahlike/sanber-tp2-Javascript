const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getSquareRoot = (x) => {
  if (x < 0) {
    return "Tidak bisa input bilangan negatif";
  } else if (x % 2 !== 0) {
    return "Tidak bisa input bilangan ganjil";
  } else {
    return Math.sqrt(x);
  }
}

rl.question('Masukkan bilangan : ', (answer) => {
  let input = parseInt(answer);
  let result = getSquareRoot(input);
  console.log(result);
  rl.close();
});
