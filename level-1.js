let show = document.getElementById('show_id');

//LEVEL 1
// Question 1
const frukt = 'banan';
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
  show.innerHTML = 'Mitt navn er' ;


  //Question 3
  const outOfStock = 2;
  console.log(typeof outOfStock);
  console.log(Boolean(outOfStock));
  console.log(show);
  
  
  show.innerHTML = 'Mitt navn er <b>' + person.firstname + ' ' + person.lastname + '</b> fra <b>' + person.address.city + '</b><br>Tallet er ' + outOfStock + ' ' ;

