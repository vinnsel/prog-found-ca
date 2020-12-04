let show = document.getElementById('show_id');

//LEVEL 1
// Question 1
const frukt = 'mango';
console.log(frukt);

//Question 2
let person = {
    key:1,
    firstname:"Vidar",
    lastname:"Innselset",
    age:39,
    hobbies: ['running', 'cycle', 'skiing'],
    address: {
      street: 'bahusveien',
      city: 'Spikkestad'


    }

  }

  console.log(person.key, person.firstname, person.lastname, person.age, person.hobbies);
  console.log(person.address);
  console.log(person.hobbies['2']);
  console.log(person.address.city);


  //Question 3
  const outOfStock = 12;
  const outOfStockValue = Boolean(outOfStock);

  if(Boolean(outOfStock) === true) {
    console.log('In Stock');
  } else {
    console.log('Out of stock');
  }

//  console.log(typeof outOfStock);
//  console.log(Boolean(outOfStock));
//  console.log(outOfStockValue);
  
  
//Question 4 - Array
const customer = [
  {
    id: 1,
    firstname: 'Peter',
    lastname: 'Sagan',
    phone: 74639473
  },
  {
    id: 2,
    firstname: 'Olav ',
    lastname: 'King',
    phone: 88743974
  },
  {
    id: 3,
    firstname: 'Trond',
    lastname: 'Trondheim',
    phone: 93847898
  }
];
console.log(customer);

//Question 5 - For loop
for(let id = 15; id <= 25; id++) {
  console.log(`For Loop Number: ${id}`);

//Question 6 - If
if(id === 20) {
  console.log('Tallet over er 20');
}
} 

//Question 7





  show.innerHTML = 'My name is <b>' + person.firstname + ' ' + person.lastname + '</b>' 
  + ' and Im from <b>' + person.address.city + '</b><br>StockValue is ' + outOfStock + ' '
  + '<br> and value is <b>' + outOfStockValue + '</b> <br>';


