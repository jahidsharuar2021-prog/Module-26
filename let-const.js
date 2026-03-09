const name='Bangladesh';
console.log(name);


function summestion(num1 ,num2=0){
    const sum=num1+num2;
    
    console.log(num1,num2,sum);
}

   //another exaple

summestion(10);

function summestions(firstname ,lastname=''){
    const sum=firstname+" "+ lastname;
    
    console.log(sum);
}
summestions('kamruzzaman');