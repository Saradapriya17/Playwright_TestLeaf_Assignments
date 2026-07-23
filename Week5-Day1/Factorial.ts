//a TypeScript program that defines a function to compute the factorial of a given non-negative integer using a loop

function Factorial(n : number){
    if(n<0){
        console.log("Error: The input cannot be negative");
    }
    else if(n === 0){
        console.log("Factorial :", n);
    }
    else{
        let c:number = 1;
        for(let i:number = 2; i <= n; i++){
            c = c * i;           
        }
        console.log("Factorial :", c);;
    }

}
Factorial(-1);
Factorial(0);
Factorial(4);
Factorial(9);