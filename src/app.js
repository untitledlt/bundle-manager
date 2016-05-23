var bundle = require('bundle');

var properties = { age: 1, isStudent: false, income: 3 };
console.log(properties);

console.log( bundle.getBundleSuggestion(properties) );

console.log( 'available Accounts:', bundle.getAvailableAccounts() );
console.log( 'available Cards:', bundle.getAvailableCards() );

bundle.addCard('creditCard');

console.log(bundle.getCurrentBundle());

bundle.removeAccount();

console.log(bundle.getCurrentBundle());