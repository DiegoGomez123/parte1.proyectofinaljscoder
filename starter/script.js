'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//  CHACARITA APP

/////////////////////////////////////////////////
// Data
const cuenta1 = {
  owner: 'Diego Gomez',
  movements: [200, 450,  3000, 70],
  pin: 1111,
};

const cuenta2 = {
  owner: 'Facundo Castro',
  movements: [5000, 3400, 8500],
  pin: 2222,
};

const cuenta3 = {
  owner: 'Juan Castro',
  movements: [200, 340, 50, 400],
  pin: 3333,
};

const cuenta4 = {
  owner: 'Jorge Castro',
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];

let movements = [cuenta1.movements, cuenta2.movements, cuenta3.movements, cuenta4.movements]



/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


////Funciones


const displayMovements = function(movements){
containerMovements.innerHTML = ''

 movements.forEach(function(mov, i){

  const type = mov > 0 ? 'deposit' : 'error'

  const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
  `;
  containerMovements.insertAdjacentHTML('afterbegin', html)
 })
}

displayMovements(cuenta1.movements)

const createUsernames = function (cts){
cts.forEach(function(cts){
  cts.username = cts.owner
  .split (' ')
  .map (name => name[0])
  .join('')
})

}
createUsernames(cuentas);

console.log(cuentas);


/////acumulador (plata depositada)

console.log(movements);

const balance = movements.reduce(function(acc, cur, i, arr){
  return acc + cur
}, 0)

console.log(balance);

/*
/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/*console.log('------------FOR EACH ------------');
movements.forEach(function(mov, i, arr){
  if(mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
})*/

/*
//coding chalenge 148
const checkDogs = function (dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])








/*
/////////////////////////////////////////////////THE MAP METHOD 

const pesos = [50, 100, 200];
const pesoToUsd = 20;

const pesoEnDolares = pesos.map(function(pes){
  return pes * pesoToUsd
})
console.log(pesos);
console.log(pesoEnDolares);

//DOING THE SAME BUT WITH A CLEAN ARROW FUNCTION

const pesosArrow = pesos.map(pesos => /* the arrow operates like a return*/ /*pesos * pesoToUsd)
console.log(pesosArrow);



///////////DOING THE SAME AS THE MAP METHOD BUT WITH FOR

const pesosFor = [];

for (const pes of pesos) pesosFor.push (pes * pesoToUsd);
console.log(pesosFor);

*/