const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedfood=foods.slice(1,-1)
console.log(modifiedfood)


const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods.splice(2,0,"noodles","icecream")
console.log(foods)


const numberArray = [12,324,213,4,2,3,45,4234];
const even=numberArray.filter(function(x){
  return x%2==0
});
console.log(even)

let primearr=numberArray.filter(x=>{
    for(let i=2;i<x;i++){
      if(x%i==0){
        return false; 
      }
  
    }
    return true;
  })
  console.log(primearr)



  let primearr=numberArray.filter(x=>{
    for(let i=2;i<x;i++){
      if(x%i==0){
        return false; 
      }
  
    }
    return true;
  })
  console.log(primearr)



  const numberArray = [12,324,213,4,2,3,45,4234];
const even=numberArray.filter((x)=>x%2==0);
console.log(even)



const myArray = [11, 34, 20, 5, 53, 16];
let square=myArray.map(x=>Math.pow(x,2))
console.log(square)




let myarray=[2,3,5,10];
function multiply(myarray){
  let init=1;
  for(let i=0;i<myarray.length;i++){
    init*=myarray[i];

  }
  return init
}

let x=multiply(myarray);
console.log(x)

let prodarr=myarray.reduce((val,st)=>val*st,1)
console.log(prodarr)
