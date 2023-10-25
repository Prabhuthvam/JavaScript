let a=prompt("enter a value");
let b=prompt("enter b value");
let c=prompt("enter c value");

secondMax=(a>b && c>b) ? a : (b>a && c>a) ? b : c;
console.log("second largest max  is "+secondMax);
