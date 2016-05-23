var bundle = require('bundle');

//console.log( bundle.getBundleByName('student') );
var properties = { age: 1, isStudent: false, income: 3 };
console.log(properties);
console.log( bundle.getBundleSuggestion(properties) );
//console.log( bundle.setAccount('currentAccountPlus') );

console.log( 'available Accounts:', bundle.getAvailableAccounts() );
console.log( 'available Cards:', bundle.getAvailableCards() );

bundle.addCard('creditCard');

console.log(bundle.getCurrentBundle());

bundle.removeAccount();





return;

bundle.removeCard('debitCard');

console.log(bundle.getCurrentBundle());

console.log('---- remove account');

bundle.removeAccount();

bundle.addCard('debitCard');

console.log( bundle.getCurrentBundle() );