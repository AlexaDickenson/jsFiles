//arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

//combine the arrays
const numbers = [...numbers1, ...numbers2];

//square function
const square = (num) => num ** 2;

//map to create the squares array
const squares = numbers.map(square);

// Define isEven 
const isEven = (num) => num % 2 === 0;

//create the evenSquares array
const evenSquares = squares.filter(isEven);

//extract the first two elements of the evenSquares array
const [firstEvenSquare, secondEvenSquare] = evenSquares;

//log the arrays and extracted even squares
console.log(`Numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even Squares: ${evenSquares}`);
console.log(`First Even Square: ${firstEvenSquare}, Second Even Square: ${secondEvenSquare}`);
