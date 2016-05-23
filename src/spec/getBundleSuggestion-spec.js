var bundle = require('bundle');

var junior          = { age: 0, isStudent: false, income: 0 };
var student         = { age: 1, isStudent: true,  income: 0 };
var businessMan     = { age: 2, isStudent: false, income: 3 };
var noBundleMan     = { age: 2, isStudent: false, income: 0 };


describe('get bundle suggestion', function() {

    var juniorBundle      = bundle.getBundleSuggestion(junior);
    var studentBundle     = bundle.getBundleSuggestion(student);
    var businessManBundle = bundle.getBundleSuggestion(businessMan);
    var noBundleManBundle = bundle.getBundleSuggestion(noBundleMan);


    it('should return an object', function() {
        expect(juniorBundle).toEqual(jasmine.any(Object));
    });

    it('should suggest Junior Saver bundle', function() {
        expect(juniorBundle).toEqual(jasmine.objectContaining({
            name: 'Junior Saver',
            account: 'juniorSaverAccount',
            card: []
        }));
    });

    it('should suggest Junior Saver bundle', function() {
        expect(juniorBundle).toEqual(jasmine.objectContaining({
            name: 'Junior Saver',
            account: 'juniorSaverAccount',
            card: []
        }));
    });

    it('should suggest Student bundle', function() {
        expect(studentBundle).toEqual(jasmine.objectContaining({
            name: 'Student',
            account: 'studentAccount'
        }));
    });

    it('should return card list containing "debitCard" and "creditCard', function() {
        expect(studentBundle.card.sort()).toEqual(['creditCard', 'debitCard'].sort());
    });

    it('should suggest Gold bundle', function() {
        expect(businessManBundle).toEqual(jasmine.objectContaining({
            name: 'Gold',
            account: 'currentAccountPlus'
        }));
    });

    it('should throw RangeError for age', function() {
        expect(function() {
            bundle.getBundleSuggestion({ age: 5, isStudent: false, income: 0 });
        }).toThrow(RangeError('Age out of range [0-2]'));
    });

    it('should throw TypeError for student', function() {
        expect(function() {
            bundle.getBundleSuggestion({ age: 1, isStudent: 'string', income: 0 })
        }).toThrow(TypeError('Student status must be boolean'));
    });

    it('should throw RangeError for income', function() {
        expect(function() {
            bundle.getBundleSuggestion({ age: 1, isStudent: false, income: -1 })
        }).toThrow(RangeError('Income out of range [0-3]'));
    });

    it('should throw RangeError for income', function() {
        expect(function() {
            bundle.getBundleSuggestion({ age: 1, isStudent: false, income: -1 })
        }).toThrowError(RangeError, 'Income out of range [0-3]');
    });

    it('should return false', function() {
        expect(noBundleManBundle).toBe(false);
    });


});

