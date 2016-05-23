var bundle = require('bundle');

var junior          = { age: 0, isStudent: false, income: 0 };
var student         = { age: 1, isStudent: true,  income: 0 };
var businessMan     = { age: 1, isStudent: false, income: 3 };
var senior          = { age: 2, isStudent: false, income: 1 };


describe('modify bundle', function() {

    beforeEach(function() {
        bundle.clearCurrentBundle();
    });


    it('should throw Error for no bundle selected', function() {
        expect(function () {
            console.log( bundle.setAccount('currentAccount') );
        }).toThrowError(Error, /No bundle selected/i);
    });


    it('should return an object', function() {
        expect(bundle.getBundleSuggestion(junior)).toEqual(jasmine.any(Object));
    });


    it('should throw Error for undefined or wrong type account name', function() {

        bundle.getBundleSuggestion(junior);

        expect(function () {
            console.log( bundle.setAccount() );
        }).toThrowError(Error, 'Account name is not a string');

        expect(function () {
            console.log( bundle.setAccount([]) );
        }).toThrowError(Error, 'Account name is not a string');
    });


    it('should throw Error for wrong account name', function() {

        bundle.getBundleSuggestion(junior);

        expect(function () {
            bundle.setAccount('not-existing');
        }).toThrowError(ReferenceError, /Wrong account name specified/);
    });


    it('should return custom modified bundle', function() {

        bundle.getBundleSuggestion(businessMan);

        var availableAccounts = bundle.getAvailableAccounts();

        availableAccounts.forEach(function(accountName) {

            expect(bundle.setAccount(accountName)).toEqual(jasmine.objectContaining({
                name: 'Custom',
                account: accountName
            }));

        });

    });


    it('should throw Error on setAccount value for junior', function() {

        bundle.getBundleSuggestion(junior);

        expect(function() {
            bundle.setAccount('currentAccountPlus');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);

        expect(function() {
            bundle.setAccount('studentAccount');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);
    });


    it('should throw Error on setAccount value for senior', function() {

        bundle.getBundleSuggestion(senior);

        expect(function() {
            bundle.setAccount('juniorSaverAccount');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);

        expect(function() {
            bundle.setAccount('studentAccount');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);

        expect(function() {
            bundle.setAccount('currentAccountPlus');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);
    });


    it('should throw Error on addCard', function() {

        bundle.getBundleSuggestion(senior);

        expect(function() {
            bundle.addCard('goldCreditCard');
        }).toThrowError(Error, /does not match ([a-zA-Z]+) requirements/);

    });


    it('shoud add creditCard to businessMan bundle', function() {

        var businessManBundle = bundle.getBundleSuggestion(businessMan);

        // optional check
        expect(businessManBundle.card.sort()).toEqual(['debitCard', 'goldCreditCard'].sort());

        expect(bundle.addCard('creditCard').card.sort()).toEqual(['debitCard', 'creditCard', 'goldCreditCard'].sort());

    });


    it('should throw Error on removeAccount', function() {

        var businessManBundle = bundle.getBundleSuggestion(businessMan);

        // optional check
        expect(businessManBundle.card.sort()).toEqual(['debitCard', 'goldCreditCard'].sort());

        expect(function() {
            bundle.removeAccount();
        }).toThrowError(Error, /Can not remove Account/);

    });


    it('should remove debitCard and Account', function() {

        var businessManBundle = bundle.getBundleSuggestion(businessMan);

        // optional check
        expect(businessManBundle.card.sort()).toEqual(['debitCard', 'goldCreditCard'].sort());

        expect(bundle.removeCard('debitCard').card).toEqual(['goldCreditCard']);

        expect(bundle.removeAccount().account).toBeNull();

    });




});

