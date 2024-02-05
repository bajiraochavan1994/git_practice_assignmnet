// check prime number
let a = 3;
let count =0
for(let i=1;i<=a;i++){
    if(a%2==0){
        count++
    }
}
if(count==2){
    console.log("prime")
}
else{console.log("not prime")}