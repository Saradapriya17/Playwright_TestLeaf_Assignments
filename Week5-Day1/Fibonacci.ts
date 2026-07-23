//a TypeScript program that defines a function to compute
// the nth Fibonacci number using a loop

function fibonacci(n: number) {
  let a: number = 0;
  let b: number = 1;
  let c: number = 0;
  if (n === 1) {
    console.log(`The number is ${a}`);
  } else if (n === 2) {
    console.log(`The number is ${b}`);
  } else {
    for (let i: number = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    console.log(`The number is ${c}`);
  }
}
fibonacci(7);
fibonacci(2);
fibonacci(5);

