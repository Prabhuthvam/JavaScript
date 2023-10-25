let a=prompt("enter a value =");
let b=prompt("enter b value =");
let c=prompt("enter c value =");


let max,min

if(a>b){
    max=a
    min=b
}
else{
    max=b
    min=a
}
if(c>max) max=c
if(c<min) min=c
console.log("max value is "+max)
console.log("min value is "+min)