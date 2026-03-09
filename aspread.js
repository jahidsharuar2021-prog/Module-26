const max=Math.max(3,5,17,8,58,1);
// console.log(max);

const numbers=[3,5,17,8,58,1];
// console.log(...numbers);
const max2=Math.max(...numbers);
// console.log(max2);


params=[1,85,35];
function sum(x,y,z){
return x+y+z;
}

const output=sum(...params);
// console.log(output);

const arr1=[1,2,3];
const arr2=[...arr1,12,62];
arr2.push(4);
console.log(arr1);
console.log(arr2);



// object assign another variable
const person={name:'Jahid',age:22};
const person2={...person,designation:'Developer'};
person2.salary=36000;
console.log(person);
console.log(person2);



