

const action=function(b){
if(b===0){
return 1;
}

 return b*action(b-1);
}
const factorial=function(b){
console.log(action(b));
};
factorial(7);
