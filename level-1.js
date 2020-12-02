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

  console.log(typeof outOfStock);
  console.log(Boolean(outOfStock));
  console.log(outOfStockValue);
  
  
  show.innerHTML = 'My name is <b>' + person.firstname + ' ' + person.lastname + '</b>' 
  + ' and Im from <b>' + person.address.city + '</b><br>StockValue is ' + outOfStock + ' '
  + '<br> and value is <b>' + outOfStockValue + '</b> ' ;


