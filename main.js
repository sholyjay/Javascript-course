//console.log('Hello World!');

 //let, const

//let age = 20+5;

//console.log(age);

//String, Number, boolean, Null, Undefined

//const name = 'Sola';
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z; 

//console.log(typeof z);

//concatenation

//console.log('My name is ' + name +  ' and my age is ' + age );

//const s = 'Hello World!';

//console.log (s.length);
//console.log (s.toUpperCase());

//Arrays- variables that holds multiple values

//const numbers = new Array(1,2,3,4,5);

//console.log(numbers);

//const fruits = ['oranges', 'apples', 'pears', ];

//fruits[3] = 'grapes';

//fruits.push('mangos');

//fruits.unshift('strawberries');

//fruits.pop();

//console.log(Array.isArray(fruits));

//console.log(fruits.indexOf('apples'));

//console.log(fruits);

//another example

//const person = {
    //firstName: 'Shola',
    //lastName: 'Alade',
    //sunName: 'Olakanmi',
    //age: 23,
    //hobbies: [ 'Music', 'Sports', 'Movies' ],
    //adress: {
        //street: 'No 3A Akinlade Street Alekuwode Osogbo',
        //city: 'Osogbo',
        //state: 'Osun State',
    //}
//}

//console.log(person);

//const todos = [
    //{
        //id: 1,
        //text: 'take out trash',
        //isCompleted: true
    //},

    //{
        //id: 2,
        //text: 'Meeting with T,jay',
        //isCompleted: true
    //},

    //{
        //id: 3,
        //text: 'Civil Engineer',
        //isCompleted: false
    //},
//]

//console.log ( todos );

//Loop Method (For Loop)

//for( let i = 0; i <= 10; i++ ) {
    //console.log('For Loop Number: ${i}')
//}

// Loop Method( WhY Loop)

//let i = 0;
//while(i < 10) {
    //console.log('while Loop Number: ${i}');
    //i++;
//}
// Loop Method( While Loop)


//for( let i = 0; i < todos.length; i++) {
    //console.log( todos.text);
//}

//ForEach,Map, Filter

//todos.forEach(function(todo) {
    //console.log(todo.text)
//})

// Conditional Operator start Which is represented by const.

//const todoCompleted = todos.filter(function(todo){
    //return todo.isCompleted === true;
//});

//console.log(todoCompleted);

//const X = 8;


//if( X === 10) {

    //console.log('X is 10');  
//}else if( X > 10){
    //console.log ( 'X is greater than 10');
//}else{
    //console.log( 'X is less than 10');
//}

//const Y = 4;
//const U = 11;

//if( Y > 5 || U > 10) {
    //console.log( 'Y is more than 5 or U is more than 10')
//}

//const K = 6;
//const L = 11;

//..if( K > 5 && L > 10) {
    //console.log( 'K is more than 5 and L is more than 10')
//}

// Tynary operator of condition
//const D = 9;

//const color = D > 10 ? 'red' : 'blue';

//console.log (color);
// Swiches ( it swich when the command is true or not true)
//switch(color){
    //case 'red':
        //console.log ('color is red');
        //break;
    //case 'blue':
        //console.log ('color is blue');
        //break;
    //default:
        //console.log ( 'color is NOT red or blue');
        //break;
//}

//function key words its use to add two numbers.(NAN It means Not a Number)

//function addNums ( num1, num2){
    //return( num1 + num2)
//}

//console.log(addNums (5,4))



// SELECTORS

// Single Element Selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.containner'));

//Multiple Element Selectors
//console.log(document.querySelectorAll('.items'));
//console.log(document.getElementsByClassName('text-center'));
//console.log(document.getElementsByTagName('ul'));

//const items = document.querySelectorAll('.items');

//items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent ='Hello World';
//ul.lastElementChild.innerHTML = '<h1> Hello world</h1>'

//const btn = document.querySelector('.btn');

//btn.style.background = 'blue';

const btn = document.querySelector('.btn');

btn.addEventListener('mouseout' , (e) => {     //variety of Tag that can be used include(mouseover, mouseout, click)
    console.log ('mousein');
    e.preventDefault('');
    console.log (e.target);
    

    document.querySelector('#my-form').style.background ='#ccc';

    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').firstElementChild.innerHTML = '<h1>Hello Sholyjay</h1>';

});



//const myForm = document.querySelector('#my-form');
//const nameInput = document.querySelector('#name');
//const emailInput = document.querySelector('#email');
//const passwordInput = document.querySelector('#password');
//const msg = document.querySelector('.msg');
//const userList = document.querySelector('#users');

//myForm.addEventListener ('submit', onSubmit);

//function onSubmit(e){
  //  e.preventDefault();

    //console.log(nameInput.value);
    //if(nameInput.value === '' || emailInput.value ==='' || passwordInput.value ==='' ) {
      //  msg.classList.add('error')
        //msg.innerHTML = 'Please all field are required';
        //setTimeout(() => msg.remove(), 3000);
    //} else {
      //  console.log('success');
        //const li = document.createElement('li');
        //li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        //userList.appendChild(li);

        //clear fields

        //nameInput.value = '';
        //emailInput.value = '';
        //passwordInput.value = '';

    //}
//}




