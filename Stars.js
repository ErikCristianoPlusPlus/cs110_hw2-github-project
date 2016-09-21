


const StarDrawer=function(b){
if(b===0){
return "";
}
return "*"+StarDrawer(b-1);
};
const SpaceDrawer=function(b){
if(b===0){
return "";
}
return " "+SpaceDrawer(b-1);

};
const combiner=function(b,c){
if(b===0){
return "";
}

return SpaceDrawer(b)+StarDrawer(c)+"\n"+combiner (b-1,c+2);
};
const triangleStars=function(b){
if(b===0){
return "";
}
console.log(combiner(b,1));
};
triangleStars(8);


