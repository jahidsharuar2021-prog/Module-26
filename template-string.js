const firstName='Jahid';
const lastName='Hasan';
const giveMe=`my name is ${firstName}`;
console.log(giveMe);
console.log(` my name is = ${firstName} ${lastName}`);

// html div create

function getcardHTML(name,description,price){
    const div=`
    <div>
    <h2>${name.toUpperCase()} Boroloks </h2>
    <p>${price} $</p>
    <p>${description}</p>
    </div>
    `;
    console.log(div);
}
getcardHTML('I-Phone',"My favourite Phone",'1,50,375');
