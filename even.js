let num = 789
let rem
let even = 0
let odd =0
while(num != 0){
    rem = num % 10
    num = num / 10
    num = parseInt(num,10) 
    if(rem%2==0){
        even=even+rem
        console.log(even)
    }
    if(rem%10){
        odd=odd+rem
        console.log(odd)
    }
}    