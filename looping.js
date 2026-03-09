const numbers=[1,2,3,4,5];
for(const number of numbers){
    // console.log(number); 
}

//for object ar jonno
const employee={
          name:'Jahid Hasan',
             1:'Ashikur Rahaman',
'home-address':'Netrokuna',
     position:'software Engineer',
};

for(const key in employee){
    value=employee[key];
    console.log(key,value);
}