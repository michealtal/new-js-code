// conditionals

const x = 10; 

if(x > 10){
    console.log('x is 10');
}else if(x > 10) {
 console.log('x is greater than 10');
}    else{
    console.log('x is less 10');
}
const v = 4;
const y = 11;
if (v > 5 || y > 10) {
    console.log("v is more than 5 or y is more than 10");
}
// switch
const p = 10;

const color = p > 10 ? 'red': 'blue';

switch(color) {
  case 'red':
  console.log('color is red');
  break;
  case 'blue': 
  console.log('color is blue');
  break;
  default:
   console.log('color is NOT red or blue');
   break;   
}

// function
function addNurse(nurse1 = 1, nurse2 = 2){
    return(nurse1 + nurse2);  
}
console.log(addNurse(5,5));
const addNums = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums(4, 4));
//  construction function useing hex5 this,,,
// function Person(firstName, lastName, dob) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.dob = new Date(dob);
 
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// useing hex6 class,,,
   class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
            return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
   }
    //  instantiate object
 const person1 = new Person('john','doe', '4-3-1988' );
 const person2 = new Person('mary','water', '4-3-1998' );

 console.log(person2);
 console.log(person2.getFullName());


console.log(window);

// how you can select something from the dom
// single element selector
console.log(document.getElementById('container'));
console.log(document.querySelector('.input-box'));

// multiple element selector 
console.log(document.querySelectorAll('button'));
// console.log(document.getElementsByClassName('input-box'));
// console.log(document.getElementsByTagName('span'));

// How to loop through 
 const items = document.querySelectorAll('button');
 items.forEach((button) => console.log(button));

// const button = document.querySelector('button');
// button.style.background = 'red';

// Event
const button = document.querySelector('button');

button.addEventListener('click',(e) => {
    e.preventDefault();
   document.querySelector('body').style.backgroundColor='#ccc';
});

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
 const msg = document.querySelector('#msg');
 const userList= document.querySelector('#user');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
   e.preventDefault();

   if(nameInput.value === '' || passwordInput.value === ''){
    msg.classList.add('error');
   msg.innerHTML = 'please enter all fields';
   setTimeout(() =>msg.remove(), 3000)
   }else{
    console.log('success')
   }
}