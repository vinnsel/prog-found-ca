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
    console.log(true);
  } else {
    console.log(false);
  }

//  console.log(typeof outOfStock);
//  console.log(Boolean(outOfStock));
//  console.log(outOfStockValue);
  
  
//Question 4 - Array
const costumerid = [1,2,3,4,5];
 
for(let i = 0; i < costumerid.length; i++) {
  console.log('Costumerid: ' + costumerid[i] + '');
}
//Question 5 - For loop
for(let id = 15; id <= 25; id++) {
  console.log(`For Loop Number: ${id}`);

//Question 6 - If
if(id === 20) {
  console.log('Tallet over er 20');
}
} 

//Question 7
const costumer = [
  {
    costumerid: 1,
    firstname: 'Peter',
    lastname: 'Sagan',
    phone: 74639473,
    active: true
  },
  {
    costumerid: 2,
    firstname: 'Olav',
    lastname: 'King',
    phone: 88743974,
    active: true
  },
  {
    costumerid: 3,
    firstname: 'Trond',
    lastname: 'Trondheim',
    phone: 93847898,
    active: false
  }
];
  console.log(costumer.length);
for(let i = 0; i < costumer.length; i++) {
    console.log(costumer[i].phone, costumer[i].active);
}
//Question 8
  function whatIDontLike(badThings, text) {
    console.log(badThings + ' - ' + text);
  }
  
  let badThings = 'war';
  whatIDontLike("I don't like", badThings);
  
//Question 9
let reminder = [];
function reminderFunction(reminder) {
  console.log(reminder);
}
reminderFunction(['car service', 'meeting', 'training']);


  show.innerHTML = 'My name is <b>' + person.firstname + ' ' + person.lastname + '</b>' 
  + '<br>The rest is console logged -->';


