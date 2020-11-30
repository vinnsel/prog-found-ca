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


  //Question 3
  const outOfStock = 2;
  console.log(typeof outOfStock);
  console.log(Boolean(outOfStock));

