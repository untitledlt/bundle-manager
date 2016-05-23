# Bundle Manager

Module for Bundle suggestion and customization

## To Install

	git clone https://github.com/untitledlt/bundle-manager
	cd bundle-manager\src
	npm install
	
## To Test

	npm test
	
## To Use

```javascript
var bundle = require('bundle');

var client = { age: 1, isStudent: false, income: 3 };

console.log('suggested Bundle:\n', bundle.getBundleSuggestion(client));
console.log('\n\navailable Accounts:\n', bundle.getAvailableAccounts());
console.log('\navailable Cards:\n', bundle.getAvailableCards());

console.log('\n\nadd creditCard\n', bundle.addCard('creditCard'));
console.log('\n\nset currentAccount\n', bundle.setAccount('currentAccount'));

// this would Throw an exception
//console.log(bundle.removeAccount());

console.log('\n\nremove debitCard\n', bundle.removeCard('debitCard'));
console.log('\n\nremove Account\n', bundle.removeAccount());
```  
  
