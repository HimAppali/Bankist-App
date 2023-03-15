'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//Practice
//Array methods
// slice -- will give you extracted part of an array start and end indexses we have to pass
//Original Array won't change (not mutate original arr)
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numArr.slice(2, 4)); // [3,4]
// console.log(numArr.slice(5)); // [6,7,8]
// console.log(numArr.slice(-1)); // [8]
// console.log(numArr.slice(3, -3)); // [4,5]
// console.log(numArr.slice()); // [1, 2, 3, 4, 5, 6, 7, 8] // to copy array we can use slice
// console.log([...numArr]); // [1, 2, 3, 4, 5, 6, 7, 8] same like this

// //Splice -- It will delete the items from Array, Original array will be modified (mutate original arr)
// // Splice(startIndex, deleteCount)
// const lettersArr = ['a', 'b', 'c', 'd', 'e'];
// lettersArr.splice(0, 1); // startindex 0, 1 elemetn will deleted
// console.log(lettersArr); //(4) ['b', 'c', 'd', 'e']
// lettersArr.splice(-1); // last element will be gone
// console.log(lettersArr); //(3) ['b', 'c', 'd']

// // reverse - it will change the original array (mutate original arr)
// const arr1 = ['h', 'g', 'f'];
// console.log(arr1.reverse());

// // contact - not mutate original array
// const letters = lettersArr.concat(arr1); // same as[...lettersArr, ...arr1]
// console.log(letters);

// // at method
// console.log(lettersArr.at(3)); // undefined
// console.log(lettersArr.at(-1)); // will give last element
// // to get last element we can use either of the 3
// console.log(lettersArr.at(-1)); // will give last element
// console.log(lettersArr.slice(lettersArr.length - 1)); // will give last element
// console.log(lettersArr[lettersArr.length - 1]); // will give last element

// //Join - join(seperator) it will give as single string - not mutate original arr
// console.log(letters.join(' - ')); //b - c - d - f - g - h
// console.log(letters);

// //Array looping -forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //using for of loop
// console.log(`---------------For Of -----------------`);

// for (const movement of movements) {
//   if (movement > 0) console.log(`you diposited ${movement}`);
//   else console.log(`you withdraw ${movement}`);
// }

// // how to get Index of the element in for of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`${i + 1} you diposited ${movement}`);
//   else console.log(`${i + 1} you withdraw ${movement}`);
// }

// console.log(`---------------For Each ----------------`);
// // replacing above example with forEach method
// //forEach will take a call back function with parameter as each individual array element
// movements.forEach(function (movement) {
//   if (movement > 0) console.log(`you diposited ${movement}`);
//   else console.log(`you withdraw ${movement}`);
// });

// //how to get Index of the element in forEach loop syntax array.forEach(function(element, index, array) {})
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) console.log(`${i + 1} you diposited ${movement}`);
//   else console.log(`${i + 1} you withdraw ${movement}`);
// });

// // forEach on Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (currentVal, key, map) {
//   console.log(`${key} : ${currentVal}`);
// });

// // forEach on Sets
// const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'USD']); // set will remove duplicates
// console.log(currenciesSet);
// // in Sets we don't have any index. to keep the for each syntax same all over we are using _currentVal in place of key/index because here both are same
// currenciesSet.forEach(function (currentVal, _currentVal, set) {
//   console.log(currentVal);
// });

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
// const Jarr = [9, 16, 6, 8, 3];
// const Karr = [10, 5, 6, 1, 4];
// const JcorrectArr = Jarr.slice(); // copy all data
// JcorrectArr.splice(0, 1); // 0 is start index and 1 is no if items to be deleted
// JcorrectArr.splice(-2); // so 6 will come

// console.log(JcorrectArr, 'JCorrcted');
// const checkDogs = function (arr1, arr2) {
//   const combinedArr = arr1.concat(arr2); // [...arr1, ...arr2];
//   combinedArr.forEach(function (eachitem, index) {
//     const type = eachitem >= 3 ? 'a adult' : ' still a puppy';
//     console.log(`Dog number ${index + 1} is ${type} 🐶`);
//   });
// };
// checkDogs(JcorrectArr, Karr);

// ///////////////////////////////////////
// // Coding Challenge #2
// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
// */

// const calcAverageHumanAge = function (dogsAgaes) {
//   const calAvgHumanAge = dogsAgaes
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(dogAge => dogAge > 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//   return calAvgHumanAge;
// };
// const humanAgesArr = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(humanAgesArr);
// const arr = [1, 2, [3, 4], 5, [6, 7, 8]];
// console.log(arr.flat()); // will give [1,2,3,4,5,6,7,8] it will flat all the into single array
// const arrDeep = [1, 2, [3, [4]], 5, [6, [7, 8]]];
// console.log(arrDeep.flat(2)); // it will go to 2 level deep and flat the array as [1,2,3,4,5,6,7,8]

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2022-12-23T07:31:17.178Z',
    '1999-01-23T07:31:17.178Z',
    '1976-09-01T01:31:17.178Z',
    '1889-07-23T07:31:17.178Z',
    '2012-09-23T07:31:17.178Z',
    '2023-03-03T21:14:17.178Z',
    '2023-03-01T10:51:36.790Z',
  ],
  locale: 'en-US',
  localeCurrency: 'USD',
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2022-12-23T07:31:17.178Z',
    '1999-01-23T07:31:17.178Z',
    '1976-09-01T01:31:17.178Z',
    '1889-07-23T07:31:17.178Z',
    '2012-09-23T07:31:17.178Z',
    '2015-08-23T07:31:17.178Z',
    '2018-04-23T07:31:17.178Z',
  ],
  locale: 'pt-PT',
  localeCurrency: 'POR',
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2022-12-23T07:31:17.178Z',
    '1999-01-23T07:31:17.178Z',
    '1976-09-01T01:31:17.178Z',
    '1889-07-23T07:31:17.178Z',
    '2012-09-23T07:31:17.178Z',
    '2015-08-23T07:31:17.178Z',
    '2018-04-23T07:31:17.178Z',
  ],
  locale: 'en-US',
  localeCurrency: 'USD',
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2022-12-23T07:31:17.178Z',
    '1999-01-23T07:31:17.178Z',
    '1976-09-01T01:31:17.178Z',
    '1889-07-23T07:31:17.178Z',
  ],
  interestRate: 1,
  pin: 4444,
  locale: 'en-IN',
  localeCurrency: 'INR',
};

const accounts = [account1, account2, account3, account4];

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

const displayDates = function (date, locale) {
  const calDaysPasses = (date2, date1) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  const daysPassed = calDaysPasses(new Date(), date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    //Internationlizing date
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayCurrency = function (val, acc) {
  const formattedCurrency = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.localeCurrency,
  }).format(val);
  return formattedCurrency;
};
/////////////////////////////////////////////////
//Adding HTML movements to movement coantainer using JS // DOM Manpulation
// which will take movements as input
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';
  //Sorting of the array elements
  // based on sort true/false it will sort the elements
  // movements.slice() is used to create a shallow copy if not movements array will change everytime
  const movsorted = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movsorted.forEach(function (movement, index) {
    const toggleDepositWithdraw = movement > 0 ? `deposit` : `withdrawal`;
    const movementDate = new Date(account.movementDates[index]); // it will give movementdates for each index
    const transcationDate = displayDates(movementDate, account.locale);
    // Internationalization of Numbers style currency.
    // const formattedCurrency = new Intl.NumberFormat(account.locale, {
    //   style: 'currency',
    //   currency: account.localeCurrency,
    // }).format(movement);
    const elementAdded = `<div class="movements__row">
    <div class="movements__type movements__type--${toggleDepositWithdraw}">${
      index + 1
    } ${toggleDepositWithdraw}</div>
    <div class="movements__date">${transcationDate}</div>
    
    <div class="movements__value">${displayCurrency(movement, account)}</div>
  </div>`;

    // add the created Html element to movements container
    // insertAdjacentHTML method will take position and text as the params
    containerMovements.insertAdjacentHTML('afterbegin', elementAdded);
  });
};
// pass account 1 array to displayMovements method
// displayMovements(account1.movements);

// cal balance using reduce method.
// reduce will take 2 args one is call back fun second is the initilisation val of accumulator

const totalBalance = function (account) {
  account.balance = account.movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  labelBalance.textContent = `${displayCurrency(account.balance, account)}`;
};

// getting the username from the owners in the accounts arrays
const uname = 'Steven Thomas Williams';

const userNameCopressed = function (username) {
  const userNameChanged = username
    .toLowerCase()
    .split(' ')
    .map(subname => subname.slice(0, 1)) // subname[0]
    .join('');
  return userNameChanged;
};

const userNameFormat = function (majorArr) {
  // we are not using the map method becasue we need to modify the data in main arrays
  majorArr.forEach(subArr => {
    // adding new prop to each array with copressed username/owner name
    subArr.userName = userNameCopressed(subArr.owner);
  });
};

userNameFormat(accounts);

// Convert Euros to USD using map method
const toUSDrate = 1.1;
// const USDarr = account1.movements.map(function (movement) {
//   return movement * toUSDrate;
// });
//replaceing above with an arrow fun inside map
const USDarr = account1.movements.map(movement => movement * toUSDrate);

// how to filter deposits only from movements array using Filter method
//Returns the elements of an array that meet the condition specified in a callback function.
// here filter inside condition callback fn will run through all the movements array
const deposits = account1.movements.filter(mov => mov > 0);
const withdrawals = account1.movements.filter(mov => mov < 0);
// getting the maximum num using reduce method
const max = account1.movements.reduce(function (acc, cur) {
  // acc will check all the conditions for all current values and returns the value accordingly
  // acc value also changed based on the returned value in each iteration
  return acc < cur ? cur : acc;
}, account1.movements[0]); // the acc is first value of the array;

console.log(max);

// Display Diposits, withdraws total and interest at bottom

const displayTotalSummary = function (account) {
  const depositTotal = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${displayCurrency(depositTotal, account)}`;

  const withdrawalTotal = Math.abs(
    account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0)
  );
  labelSumOut.textContent = `${displayCurrency(withdrawalTotal, account)}`;
  // interest is 1.2% of all diposits
  // const interestTotal = (depositTotal * 1.2) / 100;
  const interestTotal = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    // adding a condition like if interest is cal only the val is 1 or above
    .filter((int, i, arr) => {
      return int > 1;
    })
    //above filter will return only te array of interests above 1
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${displayCurrency(interestTotal, account)}`;
};

// displayTotalSummary(account1.movements);

//Update UI
const updateUI = function (account) {
  // display movements
  displayMovements(account);
  //display balance
  totalBalance(account);
  //display Summary
  displayTotalSummary(account);
};
// Login code
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // preventDefalut used to stop the form to submit
  e.preventDefault();
  // task1: get the username and password from the text boxes.
  // task2: Find the array using find method from accounts using username.
  // task3: compare username and password entered with the array details.
  // if same app div opacity remove
  const userName = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  currentAccount = accounts.find(subArray => subArray.userName === userName);
  console.log(currentAccount);

  // clearing the input username and login pins
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  // checking the entered pin and array pin matches
  // used ? as optional chaining --> if currentAccountis undefined it won't through any error
  if (currentAccount?.pin === pin) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    const logindate = new Date();
    //options used to format the date and time
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    // const day = `${logindate.getDate()}`.padStart(2, 0);
    // const month = `${logindate.getMonth() + 1}`.padStart(2, 0);
    // const year = logindate.getFullYear();
    // const hr = logindate.getHours();
    // const min = `${logindate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hr}:${min}`;
    //Internationalization of Date using Intl
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(logindate);
    updateUI(currentAccount);
    let totalTime = 5 * 60;
    setInterval(function () {
      totalTime--;
      const min = String(Math.trunc(totalTime / 60)).padStart(2, 0);
      const sec = String(totalTime % 60).padStart(2, 0);
      labelTimer.textContent = `${min}: ${sec}`;

      //hiding UI if time exceeds 5mins
      if (totalTime == 0) containerApp.style.opacity = 0;
      //console.log(now.getSeconds());
    }, 1000);
  }
});

// Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferToinput = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);
  const transferToAccount = accounts.find(
    acc => acc.userName === transferToinput
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    transferToAccount &&
    transferToAccount.userName !== currentAccount.userName &&
    currentAccount.balance >= transferAmount &&
    transferAmount > 0
  ) {
    currentAccount.movements.push(-transferAmount);
    transferToAccount.movements.push(transferAmount);
    // pushing todays date while transfers
    currentAccount.movementDates.push(new Date().toISOString());
    transferToAccount.movementDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }
});

// closing an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // will give the index of matched array
    const arrIndex = accounts.findIndex(
      act => act.pin === Number(inputClosePin.value)
    );
    console.log(arrIndex);
    // using splice to delete the array from findindex
    accounts.splice(arrIndex, 1);
    //hide UI or delete the transactions
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// To grant loan we have a condition like, 10% of the asking loan amount have to deposit in the account i.e, have to found in the deposits
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanInput = Math.floor(Number(inputLoanAmount.value));
  // Some method will return true if any one value will satisfy the condition else false
  if (
    loanInput > 0 &&
    currentAccount.movements.some(val => val >= loanInput * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(loanInput);
      // pushing todays date while getting loan
      currentAccount.movementDates.push(new Date().toISOString());
      //update the UI
      updateUI(currentAccount);
    }, 3000);
  } else {
    console.log(
      'You are asking for high amount, To grant loan we have a condition like, 10% of the asking loan amount have to deposit in the account i.e, have to found in the deposits'
    );
  }
  inputLoanAmount.value = '';
});

// Use flat and flatMap to cal overall balance allover the accounts
const overalMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalMovements); // 17840

// using flatMap --> but with flatMap we can go only one array deep. not more than that
const overalMovements2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalMovements2); // 17840

//Sort functionality
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  // flipping the sorted var for each time sort btn click
  sorted = !sorted;
});

// array.from method to generate 100 random dice rolls
const randomDice = Array.from({ length: 100 }, function (currentVal, index) {
  return Math.round(index + Math.random());
});
console.log(randomDice);

// SetTimeOut function
// used to execute a fn after some time
// syntax; setTimeout(callbackfn, time in ms, params to inside callback fn)
const ingra = ['Onion', 'Spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Hi Settimeout ${ing1} and ${ing2}`),
  3000,
  // 'Onion',
  // 'Spinach' or
  ...ingra
);
// this will print before pizzatimer because js is asynchronous, means no deppendency
console.log('waiting....');

// How to clear the timer : use clearInterval(intervalname)
if (ingra.includes('Spinach')) {
  clearInterval(pizzaTimer);
}

//SetInterval
// to repeat something in a callback fn for every given amount of time
setInterval(function () {
  //console.log('set Interval'); // it will execute for every 1000ms
}, 1000);
